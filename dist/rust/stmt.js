"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stmt = void 0;
var Stmt;
(function (Stmt) {
    class Let {
        constructor(mut, ident, type, rhs) {
            this.mut = mut;
            this.ident = ident;
            this.type = type;
            this.rhs = rhs;
        }
        toRustString() {
            let m = '';
            if (this.mut) {
                m = ' mut ';
            }
            let t = '';
            if (this.type !== undefined) {
                t = `: ${this.type.toRustString()}`;
            }
            let r = '';
            if (this.rhs !== undefined) {
                r = ` = ${this.rhs.toRustString()}`;
            }
            return `let ${m} ${this.ident}${t}${r};`;
        }
    }
    Stmt.Let = Let;
    class Return {
        constructor(expr) {
            this.expr = expr;
        }
        toRustString() {
            return `return ${this.expr ? this.expr.toRustString() : ''};`;
        }
    }
    Stmt.Return = Return;
    class Assign {
        constructor(lhs, rhs) {
            this.lhs = lhs;
            this.rhs = rhs;
        }
        toRustString() {
            return `${this.lhs.toRustString()} = ${this.rhs.toRustString()};`;
        }
    }
    Stmt.Assign = Assign;
    class Expression {
        constructor(expr) {
            this.expr = expr;
        }
        toRustString() {
            return `${this.expr.toRustString()};`;
        }
    }
    Stmt.Expression = Expression;
})(Stmt = exports.Stmt || (exports.Stmt = {}));
//# sourceMappingURL=stmt.js.map