import * as AST from './ast';

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

export class ASTCodegen<T extends AST.AST> {
  public env: CWScriptEnv;

  constructor(public ast: T, env?: CWScriptEnv) {
    if (!!env) {
      this.env = env;
    } else {
      this.env = new CWScriptEnv(CWSCRIPT_GLOBALS);
    }
  }
}

const CW_STD = new Rust.Path('cosmwasm_std');
const CRATE = new Rust.Path('crate');

export class InstantiateCodegen extends ASTCodegen<AST.InstantiateDefn> {
  constructor(public ast: AST.InstantiateDefn, env?: CWScriptEnv) {
    super(ast, env);
  }

  public generateFunction(): Rust.Defn.Function {
    // most of the instantiate function below is boilerplate as it follows the
    // cosmwasm function signature.

    let scope = this.env.enterScope('instantiate');

    // (__deps: cosmwasm_std::DepsMut, __env: cosmwasm_std::Env, __info: cosmwasm_std::MessageInfo, __msg: crate::msg::InstantiateMsg)
    let args = [
      new Rust.FunctionArg([], '__deps', CW_STD.join('DepsMut').toType()),
      new Rust.FunctionArg([], '__env', CW_STD.join('Env').toType()),
      new Rust.FunctionArg([], '__info', CW_STD.join('MessageInfo').toType()),
      new Rust.FunctionArg(
        [],
        '__msg',
        CRATE.join('msg', 'InstantiateMsg').toType()
      ),
    ];

    // -> Result<Response, crate::error::ContractError>
    let returnType = new Rust.Type.Result(
      CW_STD.join('Response').toType(),
      CRATE.join('error', 'ContractError').toType()
    );

    let instantiate = new Rust.Defn.Function(
      [new Rust.Annotation(`cfg(not(feature = "library"), entry_point)`)],
      'instantiate',
      args,
      returnType
    );

    // now we begin to create the function body
    // step 1: load the function arguments (inside the msg) into the local scope
    this.ast.args.elements.forEach(arg => {
      scope.define(Subspace.LOCAL, arg.name.text, arg.type.toRust(this.env));
    });

    // // step 2: start translating statements
    this.ast.body.elements.forEach(stmt => {
      instantiate.addBody(stmt.toRust(this.env));
    });

    return instantiate;
  }
}

export class ContractCodegen extends ASTCodegen<AST.ContractDefn> {
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

  constructor(public ast: AST.ContractDefn, env?: CWScriptEnv) {
    super(ast, env);

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
    let i_cg = new InstantiateCodegen(this.instantiate, this.env);

    let fn = i_cg.generateFunction();
    console.log(fn.toRustString());
  }

  protected buildModMsg(): string {
    let module = new Rust.Defn.Module('msg');
    module.addItem(new Rust.Defn.Use([], 'schemars::JsonSchema'));
    module.addItem(new Rust.Defn.Use([], 'serde::{Serialize, Deserialize}'));

    // build instantiate msg
    let i = new Rust.Defn.Struct(
      [Rust.DERIVE_ANNOTATION, Rust.SERDE_RENAME_ANNOTATION],
      Rust.STRUCT,
      'InstantiateMsg'
    );

    this.instantiate.args.elements.forEach((arg: any) => {
      let m = new Rust.Defn.StructMember([], arg.name, arg.type);
      i.addMember(m);
    });

    // build execute msg
    let e = new Rust.Defn.Enum(
      [Rust.DERIVE_ANNOTATION, Rust.SERDE_RENAME_ANNOTATION],
      'ExecuteMsg'
    );
    for (let execFn of this.exec) {
      // turn snake-case to pascal case
      let s = new Rust.Defn.Struct(
        [],
        Rust.STRUCT,
        snakeToPascal(execFn.name!.text)
      );

      execFn.args.elements.forEach((arg: any) => {
        s.addMember(new Rust.Defn.StructMember([], arg.name, arg.type));
      });
      e.addVariant(s);
    }

    module.addItem(e);

    // build query msg
    let q = new Rust.Defn.Enum(
      [Rust.DERIVE_ANNOTATION, Rust.SERDE_RENAME_ANNOTATION],
      'QueryMsg'
    );
    for (let queryFn of this.query) {
      // turn snake-case to pascal case
      let s = new Rust.Defn.Struct(
        [],
        Rust.STRUCT,
        snakeToPascal(queryFn.name!.text)
      );

      queryFn.args.elements.forEach((arg: any) => {
        s.addMember(new Rust.Defn.StructMember([], arg.name, arg.type));
      });
      q.addVariant(s);
    }

    module.addItem(q);
    return module.toString();
  }

  protected buildModState(): string {
    let cw_storage_plus_item = new Rust.Type('cw_storage_plus::Item');
    let cw_storage_plus_map = new Rust.Type('cw_storage_plus::Map');

    let module = new Rust.Defn.Module('state');
    module.addItem(new Rust.Defn.Use([], 'schemars::JsonSchema'));
    module.addItem(new Rust.Defn.Use([], 'serde::{Serialize, Deserialize}'));
    module.addItem(new Rust.Defn.Use([], 'cosmwasm_std::*'));

    for (let defn of this.state) {
      if (defn instanceof AST.ItemDefn) {
        let item_type = cw_storage_plus_item.withTypeParams([
          new Rust.Type(defn.type.toString()),
        ]);

        module.addItem(
          new Rust.Defn.Const(
            defn.key.text.toUpperCase(),
            item_type,
            item_type.fnCall('new', [new Rust.Val.StrLiteral(defn.key.text)])
          )
        );
      } else if (defn instanceof AST.MapDefn) {
        let map_type = cw_storage_plus_item.withTypeParams([
          new Rust.Type(defn.mapKeys.elements[0].toString()),
          new Rust.Type(defn.type.toString()),
        ]);

        module.addItem(
          new Rust.Defn.Const(
            defn.key.text.toUpperCase(),
            map_type,
            map_type.fnCall('new', [new Rust.Val.StrLiteral(defn.key.text)])
          )
        );
      }
    }

    return module.toString();
  }

  protected buildModError(): string {
    let module = new Rust.Defn.Module('error');
    let DERIVE_ERROR_ANNOTATION = new Rust.Annotation(
      'derive(thiserror::Error, Debug)'
    );

    let error_enum = new Rust.Defn.Enum([DERIVE_ERROR_ANNOTATION], 'Error');
    let std = new Rust.Defn.Struct(
      [new Rust.Annotation('error("{0}")')],
      Rust.TUPLE,
      'Std',
      [
        new Rust.Defn.StructMember(
          [new Rust.Annotation('from')],
          null,
          new Rust.Type('cosmwasm_std::StdError')
        ),
      ]
    );
    error_enum.addVariant(std);

    for (let err of this.errors) {
      let annotation = new Rust.Annotation(`error("${err.name}")`);
      let error_struct = new Rust.Defn.Struct(
        [annotation],
        Rust.STRUCT,
        err.name.text
      );

      err.members.elements.forEach((m: any) => {
        let member = new Rust.Defn.StructMember([], m.name, m.type);
        error_struct.addMember(member);
      });
      error_enum.addVariant(error_struct);
    }
    module.addItem(error_enum);
    return module.toString();
  }

  protected buildModContract(): string {
    let module = new Rust.Defn.Module('contract');
    module.addItem(
      new Rust.Defn.Use(
        [new Rust.Annotation(`cfg(not(feature = "library"))`)],
        'cosmwasm_std::entry_point'
      )
    );
    module.addItem(
      new Rust.Defn.Use(
        [],
        'cosmwasm_std::{to_binary, Binary, Deps, DepsMut, Env, MessageInfo, Response, StdResult}'
      )
    );
    module.addItem(new Rust.Defn.Use([], 'crate::error::ContractError'));
    module.addItem(
      new Rust.Defn.Use(
        [],
        'crate::msg::{InstantiateMsg, ExecuteMsg, QueryMsg}'
      )
    );
    module.addItem(new Rust.Defn.Use([], 'crate::state::{State, STATE}'));

    let instantiate = new Rust.Defn.Function(
      [new Rust.Annotation(`cfg(not(feature = "library"), entry_point)`)],
      'instantiate',
      [
        new Rust.FunctionArg([], '__deps', new Rust.Type('DepsMut')),
        new Rust.FunctionArg([], '__env', new Rust.Type('Env')),
        new Rust.FunctionArg([], '__info', new Rust.Type('MessageInfo')),
        new Rust.FunctionArg([], '__data', new Rust.Type('Binary')),
      ],
      new Rust.Type.Result(
        new Rust.Type('Response'),
        new Rust.Type('ContractError')
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
