"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = exports.AST = void 0;
const tree_1 = require("../../util/tree");
class AST extends tree_1.Tree {
    constructor(ctx, parent, position) {
        var _a, _b, _c, _d;
        super(parent);
        if (position === undefined) {
            let a = (_a = ctx === null || ctx === void 0 ? void 0 : ctx.start) === null || _a === void 0 ? void 0 : _a.startIndex;
            let b = (_b = ctx === null || ctx === void 0 ? void 0 : ctx.stop) === null || _b === void 0 ? void 0 : _b.stopIndex;
            let length = !!a && !!b ? b - a + 1 : undefined;
            position = {
                a,
                b,
                length,
                line: (_c = ctx === null || ctx === void 0 ? void 0 : ctx.start) === null || _c === void 0 ? void 0 : _c.line,
                column: (_d = ctx === null || ctx === void 0 ? void 0 : ctx.start) === null || _d === void 0 ? void 0 : _d.charPositionInLine,
            };
        }
        this.__position = position || undefined;
    }
    get position() {
        return this.__position;
    }
    toData() {
        return (0, tree_1.toData)(this, { position: (p) => p });
    }
    validate() {
        return true;
    }
}
exports.AST = AST;
class List extends AST {
    constructor(ctx, elements) {
        super(ctx);
        this.ctx = ctx;
        this.elements = elements;
        this.setParentForChildren();
    }
    setParentForChildren() {
        this.elements.forEach((x) => (x.parent = this));
    }
    get children() {
        return Object.values(this.elements);
    }
    map(f) {
        return this.elements.map(f);
    }
}
exports.List = List;
//# sourceMappingURL=_base.js.map