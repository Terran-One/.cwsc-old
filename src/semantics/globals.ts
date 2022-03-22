import * as Rust from '../rust';
import { Subspace, ScopeDefn } from '../semantics/scope';
import { CWScriptSymbol } from './symbols';

export const CWSCRIPT_GLOBALS: ScopeDefn = {
  [Subspace.TYPE]: {
    String: new CWScriptSymbol.BuiltinType(new Rust.RustString()),
    u8: new CWScriptSymbol.BuiltinType(new Rust.RustInt(Rust.IntType.U8)),
    u16: new CWScriptSymbol.BuiltinType(new Rust.RustInt(Rust.IntType.U16)),
    u32: new CWScriptSymbol.BuiltinType(new Rust.RustInt(Rust.IntType.U32)),
    u64: new CWScriptSymbol.BuiltinType(new Rust.RustInt(Rust.IntType.U64)),
    u128: new CWScriptSymbol.BuiltinType(new Rust.RustInt(Rust.IntType.U128)),
    i8: new CWScriptSymbol.BuiltinType(new Rust.RustInt(Rust.IntType.I8)),
    i16: new CWScriptSymbol.BuiltinType(new Rust.RustInt(Rust.IntType.I16)),
    i32: new CWScriptSymbol.BuiltinType(new Rust.RustInt(Rust.IntType.I32)),
    i64: new CWScriptSymbol.BuiltinType(new Rust.RustInt(Rust.IntType.I64)),
    i128: new CWScriptSymbol.BuiltinType(new Rust.RustInt(Rust.IntType.I128)),
    Addr: new CWScriptSymbol.BuiltinType(
      new Rust.RustType('cosmwasm_std::Addr')
    ),
    Uint128: new CWScriptSymbol.BuiltinType(
      new Rust.RustType('cosmwasm_std::Uint128')
    ),
  },
};
