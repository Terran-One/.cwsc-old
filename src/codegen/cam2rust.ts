import * as Rust from '../rust';
import * as CAM from '../cam';

import { snakeToPascal } from '../util/strings';

export namespace CAM2Rust {
  export function contract(c: CAM.Contract): any {
    let code = new Rust.CodeGroup();
    code.items.push(buildModMsg(c));
    code.items.push(buildModState(c));
    code.items.push(buildModError(c));
    return code;
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
}
