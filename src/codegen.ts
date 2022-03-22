import * as AST from './ast';

import { CodegenCtx as CG } from './ast';

import { CWScriptEnv } from './semantics/env';
import { Subspace } from './semantics/scope';
import { CWScriptSymbol } from './semantics/symbols';
import { CWSCRIPT_GLOBALS } from './semantics/globals';

import * as Rust from './rust';
import { snakeToPascal, pascalToSnake } from './util';

export interface FileSource {
  file: string;
  ast: AST.SourceFile;
}

export type Source = FileSource;

export class ContractCodegen {
  public name: string;
  public events: AST.EventDefn[];
  public errors: AST.ErrorDefn[];
  public state: AST.StateDefn[];
  public instantiate: AST.InstantiateDefn;
  public exec: AST.ExecDefn[];
  public query: AST.QueryDefn[];
  public fns: AST.FnDefn[];
  public structs: AST.StructDefn[];
  public enums: AST.EnumDefn[];
  public typeAliases: AST.TypeAliasDefn[];
  public env: CWScriptEnv;

  constructor(public ast: AST.ContractDefn, env?: CWScriptEnv) {
    if (env !== undefined) {
      this.env = env;
    } else {
      this.env = new CWScriptEnv(CWSCRIPT_GLOBALS);
    }

    this.name = ast.name.text;
    this.events = ast.descendantsOfType(AST.EventDefn);
    this.errors = ast.descendantsOfType(AST.ErrorDefn);
    this.state = [
      ...ast.descendantsOfType(AST.ItemDefn),
      ...ast.descendantsOfType(AST.MapDefn),
    ];
    this.instantiate = ast.descendantsOfType(AST.InstantiateDefn)[0];
    this.exec = ast.descendantsOfType(AST.ExecDefn);
    this.query = ast.descendantsOfType(AST.QueryDefn);
    this.fns = ast.descendantsOfType(AST.FnDefn);
    this.structs = ast.descendantsOfType(AST.StructDefn);
    this.enums = ast.descendantsOfType(AST.EnumDefn);
    this.typeAliases = ast.descendantsOfType(AST.TypeAliasDefn);

    // first: register locally defined symbols in the global scope
    let globalScope = this.env.globalScope();
    for (let defn of [
      ...this.structs,
      ...this.enums,
      ...this.typeAliases,
      ...this.state,
    ]) {
      if (defn instanceof AST.StructDefn) {
        let symbol = new CWScriptSymbol.UserDefinedStruct(defn);
        globalScope.define(Subspace.TYPE, defn.name.text, symbol);
      } else if (defn instanceof AST.EnumDefn) {
        let symbol = new CWScriptSymbol.UserDefinedEnum(defn);
        globalScope.define(Subspace.TYPE, defn.name.text, symbol);
      } else if (defn instanceof AST.TypeAliasDefn) {
        let symbol = new CWScriptSymbol.UserDefinedTypeAlias(defn);
        globalScope.define(Subspace.TYPE, defn.name.text, symbol);
      } else if (defn instanceof AST.ItemDefn) {
        let symbol = new CWScriptSymbol.StateItem(defn);
        globalScope.define(Subspace.STATE, defn.key.text, symbol);
      } else if (defn instanceof AST.MapDefn) {
        let symbol = new CWScriptSymbol.StateMap(defn);
        globalScope.define(Subspace.STATE, defn.key.text, symbol);
      }
    }

    // second: start generating code for functions

    // instantiate
    this.env.enterScope('instantiate');
    let args: any = [];
    this.instantiate.args.elements.forEach(arg => {
      let argName = arg.name.text;
      let argType = arg.type.toRust(this.env, CG.TypeName) as Rust.RustType;
      if (arg.option) {
        argType = argType.option();
      }
      args.push(new Rust.FunctionArg([], argName, argType));
    });

    let instantiate = new Rust.Function(
      [new Rust.Annotation(`cfg(not(feature = "library"), entry_point)`)],
      'instantiate',
      [
        new Rust.FunctionArg(
          [],
          '__deps',
          new Rust.RustType('cosmwasm_std::DepsMut')
        ),
        new Rust.FunctionArg(
          [],
          '__env',
          new Rust.RustType('cosmwasm_std::Env')
        ),
        new Rust.FunctionArg(
          [],
          '__info',
          new Rust.RustType('cosmwasm_std::MessageInfo')
        ),
        new Rust.FunctionArg(
          [],
          '__msg',
          new Rust.RustType('crate::msg::InstantiateMsg')
        ),
      ],
      new Rust.RustResult(
        new Rust.RustType('cosmwasm_std::Response'),
        new Rust.RustType('crate::error::ContractError')
      ),
      []
    );
  }

  protected buildModMsg(): string {
    let module = new Rust.Module('msg');
    module.addItem(new Rust.UseStmt([], 'schemars::JsonSchema'));
    module.addItem(new Rust.UseStmt([], 'serde::{Serialize, Deserialize}'));

    // build instantiate msg
    let i = new Rust.Struct(
      [Rust.DERIVE_ANNOTATION, Rust.SERDE_RENAME_ANNOTATION],
      Rust.StructType.STRUCT,
      'InstantiateMsg'
    );

    this.instantiate.args.elements.forEach((arg: any) => {
      let m = new Rust.StructMember([], arg.name, arg.type);
      i.addMember(m);
    });

    // build execute msg
    let e = new Rust.Enum(
      [Rust.DERIVE_ANNOTATION, Rust.SERDE_RENAME_ANNOTATION],
      'ExecuteMsg'
    );
    for (let execFn of this.exec) {
      // turn snake-case to pascal case
      let s = new Rust.Struct(
        [],
        Rust.StructType.STRUCT,
        snakeToPascal(execFn.name!.text)
      );

      execFn.args.elements.forEach((arg: any) => {
        s.addMember(new Rust.StructMember([], arg.name, arg.type));
      });
      e.addVariant(s);
    }

    module.addItem(e);

    // build query msg
    let q = new Rust.Enum(
      [Rust.DERIVE_ANNOTATION, Rust.SERDE_RENAME_ANNOTATION],
      'QueryMsg'
    );
    for (let queryFn of this.query) {
      // turn snake-case to pascal case
      let s = new Rust.Struct(
        [],
        Rust.StructType.STRUCT,
        snakeToPascal(queryFn.name!.text)
      );

      queryFn.args.elements.forEach((arg: any) => {
        s.addMember(new Rust.StructMember([], arg.name, arg.type));
      });
      q.addVariant(s);
    }

    module.addItem(q);
    return module.toString();
  }

  protected buildModState(): string {
    let cw_storage_plus_item = new Rust.RustType('cw_storage_plus::Item');
    let cw_storage_plus_map = new Rust.RustType('cw_storage_plus::Map');

    let module = new Rust.Module('state');
    module.addItem(new Rust.UseStmt([], 'schemars::JsonSchema'));
    module.addItem(new Rust.UseStmt([], 'serde::{Serialize, Deserialize}'));
    module.addItem(new Rust.UseStmt([], 'cosmwasm_std::*'));

    for (let defn of this.state) {
      if (defn instanceof AST.ItemDefn) {
        let item_type = cw_storage_plus_item.withTypeParams([
          new Rust.RustType(defn.type.toString()),
        ]);

        module.addItem(
          new Rust.Const(
            defn.key.text.toUpperCase(),
            item_type,
            item_type.fnCall('new', [new Rust.StringLiteral(defn.key.text)])
          )
        );
      } else if (defn instanceof AST.MapDefn) {
        let map_type = cw_storage_plus_item.withTypeParams([
          new Rust.RustType(defn.mapKeys.elements[0].toString()),
          new Rust.RustType(defn.type.toString()),
        ]);

        module.addItem(
          new Rust.Const(
            defn.key.text.toUpperCase(),
            map_type,
            map_type.fnCall('new', [new Rust.StringLiteral(defn.key.text)])
          )
        );
      }
    }

    return module.toString();
  }

  protected buildModError(): string {
    let module = new Rust.Module('error');
    let DERIVE_ERROR_ANNOTATION = new Rust.Annotation(
      'derive(thiserror::Error, Debug)'
    );

    let error_enum = new Rust.Enum([DERIVE_ERROR_ANNOTATION], 'Error');
    let std = new Rust.Struct(
      [new Rust.Annotation('error("{0}")')],
      Rust.StructType.TUPLE,
      'Std',
      [
        new Rust.StructMember(
          [new Rust.Annotation('from')],
          null,
          new Rust.RustType('cosmwasm_std::StdError')
        ),
      ]
    );
    error_enum.addVariant(std);

    for (let err of this.errors) {
      let annotation = new Rust.Annotation(`error("${err.name}")`);
      let error_struct = new Rust.Struct(
        [annotation],
        Rust.StructType.STRUCT,
        err.name.text
      );

      err.members.elements.forEach((m: any) => {
        let member = new Rust.StructMember([], m.name, m.type);
        error_struct.addMember(member);
      });
      error_enum.addVariant(error_struct);
    }
    module.addItem(error_enum);
    return module.toString();
  }

  protected buildModContract(): string {
    let module = new Rust.Module('contract');
    module.addItem(
      new Rust.UseStmt(
        [new Rust.Annotation(`cfg(not(feature = "library"))`)],
        'cosmwasm_std::entry_point'
      )
    );
    module.addItem(
      new Rust.UseStmt(
        [],
        'cosmwasm_std::{to_binary, Binary, Deps, DepsMut, Env, MessageInfo, Response, StdResult}'
      )
    );
    module.addItem(new Rust.UseStmt([], 'crate::error::ContractError'));
    module.addItem(
      new Rust.UseStmt([], 'crate::msg::{InstantiateMsg, ExecuteMsg, QueryMsg}')
    );
    module.addItem(new Rust.UseStmt([], 'crate::state::{State, STATE}'));

    let instantiate = new Rust.Function(
      [new Rust.Annotation(`cfg(not(feature = "library"), entry_point)`)],
      'instantiate',
      [
        new Rust.FunctionArg([], '__deps', new Rust.RustType('DepsMut')),
        new Rust.FunctionArg([], '__env', new Rust.RustType('Env')),
        new Rust.FunctionArg([], '__info', new Rust.RustType('MessageInfo')),
        new Rust.FunctionArg([], '__data', new Rust.RustType('Binary')),
      ],
      new Rust.RustResult(
        new Rust.RustType('Response'),
        new Rust.RustType('ContractError')
      ),
      []
    );

    module.addItem(instantiate);

    return module.toString();
  }
}

export class CWScriptCodegen {
  constructor(public sources: Source[]) {}

  generateContract(name: string, file?: string) {
    let sourceFiles = this.sources.filter(
      source =>
        source.ast
          .descendantsOfType(AST.ContractDefn)
          .find(contract => contract.name.text === name) !== undefined
    );

    if (sourceFiles.length > 1) {
      throw new Error(
        `Multiple source files found for contract ${name}.` +
          ` Please disambiguate which file to use.`
      );
    }

    if (sourceFiles.length === 0) {
      throw new Error(`No source file found for contract ${name}.`);
    }

    let sourceFile = sourceFiles[0];
    let contractDefn = sourceFile.ast
      .descendantsOfType(AST.ContractDefn)
      .find(x => x.name.text === name)!;

    let contractCG = new ContractCodegen(contractDefn);
  }
}
