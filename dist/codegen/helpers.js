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
exports.C_TYPES = exports.C_CONTRACT = exports.C_EVENT = exports.C_ERROR = exports.C_MSG = exports.C_STATE = exports.CRATE = exports.CW_STORAGE_PLUS = exports.CW_STD = void 0;
const Rust = __importStar(require("../rust"));
exports.CW_STD = new Rust.Path('cosmwasm_std');
exports.CW_STORAGE_PLUS = new Rust.Path('cosmwasm_storage_plus');
exports.CRATE = new Rust.Path('crate');
exports.C_STATE = exports.CRATE.join('state');
exports.C_MSG = exports.CRATE.join('msg');
exports.C_ERROR = exports.CRATE.join('error');
exports.C_EVENT = exports.CRATE.join('event');
exports.C_CONTRACT = exports.CRATE.join('contract');
exports.C_TYPES = exports.CRATE.join('types');
//# sourceMappingURL=helpers.js.map