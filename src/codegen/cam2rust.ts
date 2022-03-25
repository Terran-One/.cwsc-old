import * as Rust from '../rust';
import * as CAM from '../cam';

import { snakeToPascal } from '../util/strings';
import { CW_STD, C_ERROR, C_MSG, C_STATE } from './helpers';
import { Stmt } from '../rust';

export namespace CAM2Rust {
  export function contract(c: CAM.Contract): any {
    let code = new Rust.CodeGroup();
    code.items.push(buildModMsg(c));
    code.items.push(buildModState(c));
    code.items.push(buildModError(c));
    code.items.push(buildModContract(c));
    return code;
  }

  export function stmt(x: CAM.CAM): any {
    if (x instanceof CAM.Let) {
      if ('ident' in x.lhs) {
        return new Rust.Stmt.Let(true, x.lhs.ident);
      }
    }

    if (x instanceof CAM.ForIn) {
      if ('ident' in x.bindings) {
        return new Rust.Stmt.Let(true, 'forin');
      }

      if ('structUnpack' in x.bindings) {
        return new Rust.Stmt.Let(true, 'forin_struct');
      }
    }

    if (x instanceof CAM.Assign) {
      return new Rust.Stmt.Let(true, 'assign');
    }

    throw new Error(`could not translate ${x.constructor.name}`);
  }

  export function type(t: CAM.Type): Rust.Type {
    if (t instanceof CAM.Type.RustBuiltin) {
      return t.ty;
    }

    if (t instanceof CAM.Type.Integer) {
      return new Rust.Type('cosmwasm_std::Uint128');
    }

    if (t instanceof CAM.Type.Decimal) {
      return new Rust.Type('cosmwasm_std::Decimal');
    }

    if (t instanceof CAM.Type.String) {
      return new Rust.Type.String();
    }

    if (t instanceof CAM.Type.Boolean) {
      return new Rust.Type.Bool();
    }

    if (t instanceof CAM.Type.None) {
      return new Rust.Type('None');
    }

    if (t instanceof CAM.Type.Vector) {
      return new Rust.Type.Vec(type(t.elementType));
    }

    if (t instanceof CAM.Type.Option) {
      return new Rust.Type.Option(type(t.inner));
    }

    if (t instanceof CAM.Type.Struct) {
      return new Rust.Type(`crate::types::${t.name}`);
    }

    if (t instanceof CAM.Type.TypeAlias) {
      return new Rust.Type(`crate::types::${t.name}`);
    }

    throw new Error(
      `CAM type ${t.constructor.name} could not be turned into Rust type`
    );
  }

  export function buildModMsg(c: CAM.Contract): Rust.Defn.Module {
    let module = new Rust.Defn.Module('msg');
    module.addItem(new Rust.Defn.Use([], 'schemars::JsonSchema'));
    module.addItem(new Rust.Defn.Use([], 'serde::{Serialize, Deserialize}'));

    // build instantiate msg
    let i = new Rust.Defn.Struct(
      [Rust.DERIVE_ANNOTATION, Rust.SERDE_RENAME_ANNOTATION],
      Rust.STRUCT,
      'InstantiateMsg'
    );

    c.instantiate.args.forEach(arg => {
      let argType = type(arg.type);
      if (arg.option) {
        argType = new Rust.Type.Option(argType);
      }
      let m = new Rust.Defn.StructMember([], arg.name, argType);
      i.addMember(m);
    });

    // build execute msg
    let e = new Rust.Defn.Enum(
      [Rust.DERIVE_ANNOTATION, Rust.SERDE_RENAME_ANNOTATION],
      'ExecuteMsg'
    );
    for (let execFn of c.exec) {
      // turn snake-case to pascal case
      let s = new Rust.Defn.Struct([], Rust.STRUCT, snakeToPascal(execFn.name));

      execFn.args.forEach(arg => {
        let argType = type(arg.type);
        if (arg.option) {
          argType = new Rust.Type.Option(argType);
        }
        s.addMember(new Rust.Defn.StructMember([], arg.name, argType));
      });
      e.addVariant(s);
    }

    module.addItem(e);

    // build query msg
    let q = new Rust.Defn.Enum(
      [Rust.DERIVE_ANNOTATION, Rust.SERDE_RENAME_ANNOTATION],
      'QueryMsg'
    );
    for (let queryFn of c.query) {
      // turn snake-case to pascal case
      let s = new Rust.Defn.Struct(
        [],
        Rust.STRUCT,
        snakeToPascal(queryFn.name)
      );

      queryFn.args.forEach(arg => {
        let argType = type(arg.type);
        if (arg.option) {
          argType = new Rust.Type.Option(argType);
        }
        s.addMember(new Rust.Defn.StructMember([], arg.name, argType));
      });
      q.addVariant(s);
    }

    module.addItem(q);
    return module;
  }

  export function buildModState(c: CAM.Contract): Rust.Defn.Module {
    let cw_storage_plus_item = new Rust.Type('cw_storage_plus::Item');
    let cw_storage_plus_map = new Rust.Type('cw_storage_plus::Map');

    let module = new Rust.Defn.Module('state');
    module.addItem(new Rust.Defn.Use([], 'schemars::JsonSchema'));
    module.addItem(new Rust.Defn.Use([], 'serde::{Serialize, Deserialize}'));

    for (let defn of c.state) {
      if (defn instanceof CAM.StateItem) {
        let item_type = cw_storage_plus_item.withTypeParams([type(defn.type)]);

        module.addItem(
          new Rust.Defn.Const(
            defn.key.toUpperCase(),
            item_type,
            item_type.fnCall('new', [new Rust.Val.StrLiteral(defn.key)])
          )
        );
      } else if (defn instanceof CAM.StateMap) {
        let map_type = cw_storage_plus_map.withTypeParams([
          type(defn.mapKeys[0].type),
          type(defn.type),
        ]);

        module.addItem(
          new Rust.Defn.Const(
            defn.key.toUpperCase(),
            map_type,
            map_type.fnCall('new', [new Rust.Val.StrLiteral(defn.key)])
          )
        );
      }
    }

    return module;
  }

  export function buildModError(c: CAM.Contract): Rust.Defn.Module {
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

    for (let err of c.errors) {
      let annotation = new Rust.Annotation(`error("${err.name}")`);
      let error_struct = new Rust.Defn.Struct(
        [annotation],
        Rust.STRUCT,
        err.name
      );

      err.members.forEach((m: any) => {
        let member = new Rust.Defn.StructMember([], m.name, m.type);
        error_struct.addMember(member);
      });
      error_enum.addVariant(error_struct);
    }
    module.addItem(error_enum);
    return module;
  }

  export function buildModContract(c: CAM.Contract): Rust.Defn.Module {
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

    let instantiate = new Rust.Defn.Function(
      [new Rust.Annotation(`cfg(not(feature = "library"), entry_point)`)],
      'instantiate',
      [
        new Rust.FunctionArg([], '__deps', CW_STD.join('DepsMut').toType()),
        new Rust.FunctionArg([], '__env', CW_STD.join('Env').toType()),
        new Rust.FunctionArg([], '__info', CW_STD.join('MessageInfo').toType()),
        new Rust.FunctionArg(
          [],
          '__msg',
          C_MSG.join('InstantiateMsg').toType()
        ),
      ],
      new Rust.Type.Result(
        CW_STD.join('Response').toType(),
        C_ERROR.join('ContractError').toType()
      )
    );

    c.instantiate.body.forEach(s => {
      instantiate.addBody(stmt(s));
    });

    module.addItem(instantiate);

    let execute = new Rust.Defn.Function(
      [new Rust.Annotation(`cfg(not(feature = "library"), entry_point)`)],
      'execute',
      [
        new Rust.FunctionArg([], '__deps', CW_STD.join('DepsMut').toType()),
        new Rust.FunctionArg([], '__env', CW_STD.join('Env').toType()),
        new Rust.FunctionArg([], '__info', CW_STD.join('MessageInfo').toType()),
        new Rust.FunctionArg([], '__msg', C_MSG.join('ExecuteMsg').toType()),
      ],
      new Rust.Type.Result(
        CW_STD.join('Response').toType(),
        C_ERROR.join('ContractError').toType()
      )
    );

    let match = new Rust.Expr.Match(new Rust.Expr.Path('__msg'));
    c.exec.forEach(x => {
      let argList = x.args.map(a => a.name);
      match.addPattern(
        `${snakeToPascal(x.name)} {${argList.join(',')}}`,
        new Rust.Expr.FnCall(`exec_${x.name}`, [
          new Rust.Expr.Path('__deps'),
          new Rust.Expr.Path('__env'),
          new Rust.Expr.Path('__info'),
          ...argList.map(x => new Rust.Expr.Path(x)),
        ])
      );
    });
    execute.addBody(match);
    module.addItem(execute);

    return module;
  }
}
