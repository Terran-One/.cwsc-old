import * as AST from '../../ast/nodes';
import * as Rust from '../../rust';
import { CWScriptEnv } from '../../symbol-table/env';
import { ASTCodegen } from './base';

import { snakeToPascal, pascalToSnake } from '../../util/strings';

export class ContractCodegen {
  constructor(public cam: any) {}

  public generateModMsg() {
    let module = new Rust.Defn.Module('msg');
    module.addItem(new Rust.Defn.Use([], 'schemars::JsonSchema'));
    module.addItem(new Rust.Defn.Use([], 'serde::{Serialize, Deserialize}'));
    // build instantiate msg
    let i = new Rust.Defn.Struct(
      [Rust.DERIVE_ANNOTATION, Rust.SERDE_RENAME_ANNOTATION],
      Rust.STRUCT,
      'InstantiateMsg'
    );

    this.cam.instantiate.args.elements.forEach((arg: any) => {
      let m = new Rust.Defn.StructMember([], arg.name, arg.type);
      i.addMember(m);
    });

    // build execute msg
    let e = new Rust.Defn.Enum(
      [Rust.DERIVE_ANNOTATION, Rust.SERDE_RENAME_ANNOTATION],
      'ExecuteMsg'
    );
    for (let execFn of this.model.exec) {
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
    for (let queryFn of this.model.query) {
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
}

    // first: register locally defined symbols in the global scope
    let globalScope = this.env.globalScope();
    for (let ast of [
      ...this.structs,
      ...this.enums,
      ...this.typeAliases,
      ...this.state,
    ]) {
      if (ast instanceof AST.StructDefn) {
        let members: any = {};
        for (let member of ast.members.elements) {
          members[member.name.text] = toRust(this.env, member.type);
        }
        let symbol = new CWScriptSymbol.UserDefinedStruct(
          ast.name.text,
          members
        );
        globalScope.define(Subspace.TYPE, ast.name.text, symbol);
      } else if (ast instanceof AST.EnumDefn) {
        let variants: any = {};
        for (let variant of ast.variants.elements) {
          variants[variant.name.text] = toRust(this.env, variant);
        }
        let symbol = new CWScriptSymbol.UserDefinedEnum(
          ast.name.text,
          variants
        );
        globalScope.define(Subspace.TYPE, ast.name.text, symbol);
      } else if (ast instanceof AST.TypeAliasDefn) {
        let symbol = new CWScriptSymbol.UserDefinedTypeAlias(
          ast.name.text,
          toRust(this.env, ast.type) as Rust.Type
        );
        globalScope.define(Subspace.TYPE, ast.name.text, symbol);
      } else if (ast instanceof AST.ItemDefn) {
        let symbol = new CWScriptSymbol.StateItem(
          ast.key.text,
          toRust(this.env, ast.type) as Rust.Type
        );
        globalScope.define(Subspace.STATE, ast.key.text, symbol);
      } else if (ast instanceof AST.MapDefn) {
        let symbol = new CWScriptSymbol.StateMap(ast);
        globalScope.define(Subspace.STATE, ast.key.text, symbol);
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
