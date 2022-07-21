"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Val = void 0;
const type_1 = require("./type");
const expr_1 = require("./expr");
class Val extends expr_1.Expr {
}
exports.Val = Val;
(function (Val) {
    class StrLiteral extends Val {
        constructor(value) {
            var _a;
            const match = /^\"(.*)\"$/.exec(value);
            if (!match || !match.length) {
                throw new Error("Syntax Error: missing quotes around string");
            }
            const noQuotes = match[1];
            if ((_a = /(\"+)/g.exec(noQuotes)) === null || _a === void 0 ? void 0 : _a.filter(x => x.length % 2 == 1).length) {
                throw new Error("Syntax Error: unbalanced quotes inside string");
            }
            super();
            this.value = match[1].replace(/""/g, '"');
        }
        get rustType() {
            return new type_1.Type.Str(true);
        }
        toRustString() {
            return `"${this.value.replace(/\\/g, '\\\\').replace(/\"/g, '\\"')}"`;
        }
    }
    Val.StrLiteral = StrLiteral;
    class StructMember {
        constructor(name, value) {
            this.name = name;
            this.value = value;
        }
        toRustString() {
            return `${this.name}: ${this.value.toRustString()}`;
        }
    }
    Val.StructMember = StructMember;
    class Struct extends Val {
        constructor(structType, members = []) {
            super();
            this.structType = structType;
            this.members = members;
        }
        get rustType() {
            return this.structType;
        }
        assignMember(name, value) {
            this.members = this.members.map(x => {
                if (x.name === name) {
                    return new StructMember(name, value);
                }
                else {
                    return x;
                }
            });
            return this;
        }
        toRustString() {
            return `${this.structType.toRustString()} { ${this.members
                .map(x => x.toRustString())
                .join(', ')} }`;
        }
    }
    Val.Struct = Struct;
    class Vec extends Val {
        constructor(values) {
            super();
            this.values = values;
        }
        get rustType() {
            return new type_1.Type.Vec(this.values[0].rustType);
        }
        toRustString() {
            return `vec![${this.values.map(x => x.toRustString()).join(', ')}]`;
        }
    }
    Val.Vec = Vec;
    class Tuple extends Val {
        constructor(members) {
            super();
            this.members = members;
        }
        get rustType() {
            return new type_1.Type.Tuple(this.members.map(x => x.rustType));
        }
        toRustString() {
            return `(${this.members.map(x => x.toRustString()).join(', ')})`;
        }
    }
    Val.Tuple = Tuple;
    class IntLiteral extends Val {
        constructor(intType, value) {
            super();
            this.intType = intType;
            this.value = value;
        }
        get rustType() {
            return new type_1.Type.Int(this.intType);
        }
        toRustString() {
            return `${this.value}${this.intType}`;
        }
    }
    Val.IntLiteral = IntLiteral;
    class BoolLiteral extends Val {
        constructor(value) {
            super();
            this.value = value;
        }
        get rustType() {
            return new type_1.Type.Bool();
        }
        toRustString() {
            if (this.value) {
                return 'true';
            }
            else {
                return 'false';
            }
        }
    }
    Val.BoolLiteral = BoolLiteral;
})(Val = exports.Val || (exports.Val = {}));
//# sourceMappingURL=val.js.map