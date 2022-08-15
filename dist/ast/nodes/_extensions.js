"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialVariable = exports.State = void 0;
const _1 = require(".");
class State extends _1.AST {
    constructor(key) {
        super();
        this.key = key;
        this.setParentForChildren();
    }
}
exports.State = State;
class SpecialVariable extends _1.AST {
    constructor(ns, member) {
        super();
        this.ns = ns;
        this.member = member;
        this.setParentForChildren();
    }
}
exports.SpecialVariable = SpecialVariable;
//# sourceMappingURL=_extensions.js.map