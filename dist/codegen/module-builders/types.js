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
exports.buildModTypes = void 0;
const AST = __importStar(require("../../ast/nodes"));
const Rust = __importStar(require("../../rust"));
function buildModTypes(ast2rust, types) {
    let module = new Rust.Defn.Module('types');
    module.addItem(new Rust.Defn.Use([], 'schemars::JsonSchema'));
    module.addItem(new Rust.Defn.Use([], 'serde::{Serialize, Deserialize}'));
    types.forEach(t => {
        if (t instanceof AST.StructDefn) {
            let struct = new Rust.Defn.Struct([Rust.DERIVE_ANNOTATION], Rust.STRUCT, t.name.text);
            t.members.elements.forEach(m => {
                let member_type = ast2rust.resolveType(m.type);
                if (m.option) {
                    member_type = member_type.option();
                }
                struct.addMember(new Rust.Defn.StructMember([], m.name.text, member_type));
            });
            module.addItem(struct);
        }
        if (t instanceof AST.TypeAliasDefn) {
            let alias = new Rust.Defn.TypeAlias(t.name.text, ast2rust.resolveType(t.type));
            module.addItem(alias);
        }
    });
    return module;
}
exports.buildModTypes = buildModTypes;
//# sourceMappingURL=types.js.map