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
exports.buildModState = void 0;
const AST = __importStar(require("../../ast/nodes"));
const Rust = __importStar(require("../../rust"));
function buildModState(ast2rust, state) {
    let cw_storage_plus_item = new Rust.Type('cw_storage_plus::Item');
    let cw_storage_plus_map = new Rust.Type('cw_storage_plus::Map');
    let module = new Rust.Defn.Module('state');
    for (let defn of state) {
        if (defn instanceof AST.ItemDefn) {
            let item_type = cw_storage_plus_item.withTypeParams([
                ast2rust.resolveType(defn.type),
            ]);
            module.addItem(new Rust.Defn.Const(defn.key.text.toUpperCase(), item_type, item_type.fnCall('new', [new Rust.Val.StrLiteral(defn.key.text)])));
        }
        else if (defn instanceof AST.MapDefn) {
            let map_type = cw_storage_plus_map.withTypeParams([
                ast2rust.resolveType(defn.mapKeys.elements[0].type).ref(),
                ast2rust.resolveType(defn.type),
            ]);
            module.addItem(new Rust.Defn.Const(defn.key.text.toUpperCase(), map_type, map_type.fnCall('new', [new Rust.Val.StrLiteral(defn.key.text)])));
        }
    }
    return module;
}
exports.buildModState = buildModState;
//# sourceMappingURL=state.js.map