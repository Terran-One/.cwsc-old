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
exports.Expr = void 0;
const Rust = __importStar(require("."));
const type_1 = require("./type");
class Expr {
    get rustType() {
        return new type_1.Type.Unknown();
    }
    asType(type) {
        return new Expr.As(this, type);
    }
    q() {
        return new Expr.Q(this);
    }
    toStmt() {
        return new Rust.Stmt.Expression(this);
    }
    clone() {
        return new Expr.FnCall(this.toRustString() + '.clone', []);
    }
    ok() {
        return new Expr.FnCall('::std::result::Result::Ok', [this]);
    }
    ref(mut = false) {
        return new Expr.Ref(mut ? Rust.RefType.MUT : Rust.RefType.REF, this);
    }
    mut() {
        return new Expr.Mut(this);
    }
    fnCall(fnName, args, typeParams = []) {
        let fn_tps = '';
        if (typeParams.length > 0) {
            fn_tps = `::<${typeParams.map(x => x.toRustString()).join(', ')}>`;
        }
        return new Expr.FnCall(`${this.toRustString()}.${fnName}${fn_tps}`, args);
    }
    dot(member) {
        return new Expr.Dot(this, member);
    }
    toRustString() {
        throw new Error(`${this.constructor.name}.toRustString() implementation is missing`);
    }
}
exports.Expr = Expr;
(function (Expr) {
    class Dot extends Expr {
        constructor(expr, member) {
            super();
            this.expr = expr;
            this.member = member;
        }
        toRustString() {
            return `${this.expr.toRustString()}.${this.member}`;
        }
    }
    Expr.Dot = Dot;
    class As extends Expr {
        constructor(inner, castedType) {
            super();
            this.inner = inner;
            this.castedType = castedType;
        }
        get rustType() {
            return this.castedType;
        }
        toRustString() {
            return `(${this.inner.toRustString()} as ${this.castedType.toRustString()})`;
        }
    }
    Expr.As = As;
    class Mut extends Expr {
        constructor(inner) {
            super();
            this.inner = inner;
        }
        get rustType() {
            return new type_1.Type.Mut(this.inner.rustType);
        }
        toRustString() {
            return `(mut ${this.inner.toRustString()})`;
        }
    }
    Expr.Mut = Mut;
    class Ref extends Expr {
        constructor(refType, inner) {
            super();
            this.refType = refType;
            this.inner = inner;
        }
        get rustType() {
            return new type_1.Type.Ref(this.refType, this.inner.rustType);
        }
        toRustString() {
            return `(${this.refType} ${this.inner.toRustString()})`;
        }
        isMut() {
            return this.refType === Rust.RefType.MUT;
        }
    }
    Expr.Ref = Ref;
    class Q extends Expr {
        constructor(inner) {
            super();
            this.inner = inner;
        }
        toRustString() {
            return `(${this.inner.toRustString()})?`;
        }
    }
    Expr.Q = Q;
    class FnCall extends Expr {
        constructor(path, args = [], typeParams = []) {
            super();
            this.path = path;
            this.args = args;
            this.typeParams = typeParams;
        }
        toRustString() {
            return `${this.path}(${this.args.map(x => x.toRustString()).join(', ')})`;
        }
    }
    Expr.FnCall = FnCall;
    class InstantiateStruct extends Expr {
        constructor(path, args = [], typeParams = []) {
            super();
            this.path = path;
            this.args = args;
            this.typeParams = typeParams;
        }
        toRustString() {
            return `${this.path}::new(${this.args.map(x => x.toRustString()).join(', ')})`;
        }
    }
    Expr.InstantiateStruct = InstantiateStruct;
    class Match extends Expr {
        constructor(item, patterns = []) {
            super();
            this.item = item;
            this.patterns = patterns;
        }
        addPattern(pattern, expr) {
            this.patterns.push(new Rust.MatchPattern(pattern, expr));
            return this;
        }
        toRustString() {
            return `match ${this.item.toRustString()} { ${this.patterns
                .map(x => x.toRustString())
                .join(',\n')}}`;
        }
    }
    Expr.Match = Match;
    class Path extends Expr {
        constructor(path) {
            super();
            this.path = path;
        }
        toRustString() {
            return this.path;
        }
    }
    Expr.Path = Path;
    class Binop extends Expr {
        constructor(op, lhs, rhs) {
            super();
            this.op = op;
            this.lhs = lhs;
            this.rhs = rhs;
        }
        toRustString() {
            return `${this.lhs.toRustString()} ${this.op} ${this.rhs.toRustString()}`;
        }
    }
    Expr.Binop = Binop;
})(Expr = exports.Expr || (exports.Expr = {}));
//# sourceMappingURL=expr.js.map