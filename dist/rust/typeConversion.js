"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeConversion = void 0;
const expr_1 = require("./expr");
const path_1 = require("./path");
class TypeConversion extends expr_1.Expr {
    constructor(rhs, type) {
        super();
        this.rhs = rhs;
        this.type = type;
        // ToDo: implement the rest of this
        // Do we need another visitor?
        switch (this.type) {
            case 'String':
                this.expr = new expr_1.Expr.FnCall("String::from", [new path_1.Path(rhs)]);
                break;
            default:
                this.expr = new path_1.Path(rhs);
                break;
        }
    }
    toRustString() {
        return this.expr.toRustString();
    }
}
exports.TypeConversion = TypeConversion;
//# sourceMappingURL=typeConversion.js.map