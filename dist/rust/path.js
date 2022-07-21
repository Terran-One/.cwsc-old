"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Path = void 0;
const type_1 = require("./type");
const expr_1 = require("./expr");
class Path {
    constructor(...segments) {
        this.segments = segments;
    }
    join(...segments) {
        return new Path(...this.segments, ...segments);
    }
    toRustString() {
        return this.segments.join('::');
    }
    toType() {
        return new type_1.Type(this.toRustString());
    }
    toExpr() {
        return new expr_1.Expr.Path(this.toRustString());
    }
}
exports.Path = Path;
//# sourceMappingURL=path.js.map