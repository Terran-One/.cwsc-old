"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CWSCRIPT_STD = void 0;
const Rust = __importStar(require("../rust"));
const scope_1 = require("./scope");
exports.CWSCRIPT_STD = {
    [scope_1.Subspace.TYPE]: {
        String: new Rust.Type.String(),
        u8: new Rust.Type.Int(Rust.U8),
        u16: new Rust.Type.Int(Rust.U16),
        u32: new Rust.Type.Int(Rust.U32),
        u64: new Rust.Type.Int(Rust.U64),
        u128: new Rust.Type.Int(Rust.U128),
        i8: new Rust.Type.Int(Rust.I8),
        i16: new Rust.Type.Int(Rust.I16),
        i32: new Rust.Type.Int(Rust.I32),
        i64: new Rust.Type.Int(Rust.I64),
        i128: new Rust.Type.Int(Rust.I128),
        Addr: new Rust.Type('cosmwasm_std::Addr'),
        Uint128: new Rust.Type('cosmwasm_std::Uint128'),
        Binary: new Rust.Type('cosmwasm_std::Binary'),
    },
};
//# sourceMappingURL=std.js.map