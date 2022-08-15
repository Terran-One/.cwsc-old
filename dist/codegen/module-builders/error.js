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
exports.buildModError = void 0;
const Rust = __importStar(require("../../rust"));
function buildModError(ast2rust, errors) {
    let module = new Rust.Defn.Module('error');
    let DERIVE_ERROR_ANNOTATION = new Rust.Annotation('derive(thiserror::Error, Debug)');
    let error_enum = new Rust.Defn.Enum([DERIVE_ERROR_ANNOTATION], 'ContractError');
    let std = new Rust.Defn.Struct([new Rust.Annotation('error("{0}")')], Rust.TUPLE, 'Std', [
        new Rust.Defn.StructMember([new Rust.Annotation('from')], null, new Rust.Type('cosmwasm_std::StdError')),
    ]);
    error_enum.addVariant(std);
    for (let err of errors) {
        let annotation = new Rust.Annotation(`error("${err.name.text}")`);
        let error_struct = new Rust.Defn.Struct([annotation], Rust.STRUCT, err.name.text);
        err.members.elements.forEach(m => {
            let member_type = ast2rust.resolveType(m.type);
            if (m.option) {
                member_type = member_type.option();
            }
            let member = new Rust.Defn.StructMember([], m.name.text, member_type);
            error_struct.addMember(member);
        });
        error_enum.addVariant(error_struct);
    }
    module.addItem(error_enum);
    return module;
}
exports.buildModError = buildModError;
//# sourceMappingURL=error.js.map