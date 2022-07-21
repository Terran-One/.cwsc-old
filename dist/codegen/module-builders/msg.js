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
exports.buildModMsg = void 0;
const Rust = __importStar(require("../../rust"));
const strings_1 = require("../../util/strings");
function buildModMsg(ast2rust, i, e, q) {
    let module = new Rust.Defn.Module('msg');
    module.addItem(new Rust.Defn.Use([], 'schemars::JsonSchema'));
    module.addItem(new Rust.Defn.Use([], 'serde::{Serialize, Deserialize}'));
    // build instantiate msg
    let instantiateMsg = new Rust.Defn.Struct([Rust.DERIVE_ANNOTATION], Rust.STRUCT, 'InstantiateMsg');
    i.args.elements.forEach(a => {
        let argType = ast2rust.resolveType(a.type);
        if (a.option) {
            argType = new Rust.Type.Option(argType);
        }
        let m = new Rust.Defn.StructMember([], a.name.text, argType);
        instantiateMsg.addMember(m);
    });
    module.addItem(instantiateMsg);
    // build execute msg
    let executeMsg = new Rust.Defn.Enum([Rust.DERIVE_ANNOTATION, Rust.SERDE_RENAME_ANNOTATION], 'ExecuteMsg');
    for (let execFn of e) {
        // turn snake-case to pascal case
        let s = new Rust.Defn.Struct([], Rust.STRUCT, (0, strings_1.snakeToPascal)(execFn.name.text));
        execFn.args.elements.forEach(arg => {
            let argType = ast2rust.resolveType(arg.type);
            if (arg.option) {
                argType = new Rust.Type.Option(argType);
            }
            s.addMember(new Rust.Defn.StructMember([], arg.name.text, argType));
        });
        executeMsg.addVariant(s);
    }
    module.addItem(executeMsg);
    // build query msg
    let queryMsg = new Rust.Defn.Enum([Rust.DERIVE_ANNOTATION, Rust.SERDE_RENAME_ANNOTATION], 'QueryMsg');
    for (let queryFn of q) {
        // turn snake-case to pascal case
        let s = new Rust.Defn.Struct([], Rust.STRUCT, (0, strings_1.snakeToPascal)(queryFn.name.text));
        queryFn.args.elements.forEach(arg => {
            let argType = ast2rust.resolveType(arg.type);
            if (arg.option) {
                argType = new Rust.Type.Option(argType);
            }
            s.addMember(new Rust.Defn.StructMember([], arg.name.text, argType));
        });
        queryMsg.addVariant(s);
    }
    module.addItem(queryMsg);
    return module;
}
exports.buildModMsg = buildModMsg;
//# sourceMappingURL=msg.js.map