import * as AST from '../../ast/nodes';
import * as Rust from '../../rust';
import { Defn, DERIVE_ANNOTATION } from '../../rust';
import { AST2Rust } from '../ast2rust';

export function buildStateStruct(
  ast2rust: AST2Rust,
  state: AST.StateDefn[]
): Rust.Defn.Struct {
  let cw_storage_plus_map = new Rust.Type('cw_storage_plus::Map');

  let members: Defn.StructMember[] = [];
  let struct = new Rust.Defn.Struct(
    [DERIVE_ANNOTATION],
    Rust.STRUCT,
    'State',
    members
  );

  for (let defn of state) {
    if (defn instanceof AST.ItemDefn) {
      let item_type = ast2rust.resolveType(defn.type);
      members.push(new Defn.StructMember([], defn.key.text, item_type));
    } else if (defn instanceof AST.MapDefn) {
      // ToDo: this is broken, no idea what it does or how to fix it

      let map_type = cw_storage_plus_map.withTypeParams([
        ast2rust.resolveType(defn.mapKeys.elements[0].type).ref(),
        ast2rust.resolveType(defn.type),
      ]);

      members.push(new Defn.StructMember([], defn.key.text, map_type));
    }
  }

  return struct;
}
