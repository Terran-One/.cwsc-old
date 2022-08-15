"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Type = void 0;
const common_1 = require("./common");
const expr_1 = require("./expr");
class Type {
    constructor(path = '', typeParams = []) {
        this.path = path;
        this.typeParams = typeParams;
    }
    withTypeParams(tps) {
        return new Type(this.path, tps);
    }
    option() {
        return new Type.Option(this);
    }
    vec() {
        return new Type.Vec(this);
    }
    ref(mut = false) {
        return new Type.Ref(mut ? common_1.RefType.MUT : common_1.RefType.REF, this);
    }
    mut() {
        return new Type.Mut(this);
    }
    fnCall(fnName, args, typeParams = []) {
        let fn_tps = '';
        if (typeParams.length > 0) {
            fn_tps = `::<${typeParams.map((x) => x.toRustString()).join(', ')}>`;
        }
        return new expr_1.Expr.FnCall(`<${this.toRustString()}>::${fnName}${fn_tps}`, args);
    }
    toRustString() {
        if (this.typeParams.length === 0) {
            return this.path;
        }
        return `${this.path}<${this.typeParams
            .map((x) => x.toRustString())
            .join(', ')}>`;
    }
}
exports.Type = Type;
(function (Type) {
    let RefType;
    (function (RefType) {
        RefType["REF"] = "&";
        RefType["MUT"] = "&mut ";
    })(RefType = Type.RefType || (Type.RefType = {}));
    class Mut extends Type {
        constructor(inner) {
            super(`mut ${inner.toRustString()}`);
            this.inner = inner;
        }
    }
    Type.Mut = Mut;
    class Ref extends Type {
        constructor(refType, inner) {
            super(`${refType}${inner.toRustString()}`);
            this.refType = refType;
            this.inner = inner;
        }
        isMut() {
            return this.refType === RefType.MUT;
        }
    }
    Type.Ref = Ref;
    class Option extends Type {
        constructor(inner) {
            super('::std::option::Option', [inner]);
            this.inner = inner;
        }
    }
    Type.Option = Option;
    class Result extends Type {
        constructor(okType, errType) {
            super('::std::result::Result', [okType, errType]);
            this.okType = okType;
            this.errType = errType;
        }
    }
    Type.Result = Result;
    class Vec extends Type {
        constructor(inner) {
            super('::std::vec::Vec', [inner]);
            this.inner = inner;
        }
    }
    Type.Vec = Vec;
    class String extends Type {
        constructor() {
            super('::std::string::String');
        }
    }
    Type.String = String;
    class Primitive extends Type {
    }
    Type.Primitive = Primitive;
    class Never extends Primitive {
        constructor() {
            super('!');
        }
    }
    Type.Never = Never;
    class Str extends Primitive {
        constructor(isStatic = false) {
            super(isStatic ? "&'static str" : '&str');
            this.isStatic = isStatic;
        }
    }
    Type.Str = Str;
    class Int extends Primitive {
        constructor(intType) {
            super(`${intType}`);
            this.intType = intType;
        }
        isSigned() {
            switch (this.intType) {
                case common_1.I8:
                case common_1.I16:
                case common_1.I32:
                case common_1.I64:
                case common_1.I128:
                case common_1.ISIZE:
                    return true;
                default:
                    return false;
            }
        }
    }
    Type.Int = Int;
    class Char extends Primitive {
        constructor() {
            super(`char`);
        }
    }
    Type.Char = Char;
    class Bool extends Primitive {
        constructor() {
            super(`bool`);
        }
    }
    Type.Bool = Bool;
    class Fn extends Primitive {
        constructor(args, returnType) {
            super(`(fn(${args
                .map((x) => x.toRustString())
                .join(', ')}) -> ${returnType.toRustString()})`);
            this.args = args;
            this.returnType = returnType;
        }
    }
    Type.Fn = Fn;
    class Pointer extends Primitive {
        constructor(pointerType, inner) {
            super(`*${pointerType} ${inner.toRustString()}`);
            this.pointerType = pointerType;
            this.inner = inner;
        }
        isMut() {
            return this.pointerType === common_1.PointerType.MUT;
        }
    }
    Type.Pointer = Pointer;
    class Array extends Primitive {
        constructor(inner, size) {
            super(`[${inner.toRustString()}; ${size}]`);
            this.inner = inner;
            this.size = size;
        }
    }
    Type.Array = Array;
    class Slice extends Primitive {
        constructor(inner) {
            super(`&[${inner.toRustString()}]`);
            this.inner = inner;
        }
    }
    Type.Slice = Slice;
    class Tuple extends Primitive {
        constructor(members) {
            super('');
            this.members = members;
            let name;
            if (members.length === 1) {
                name = `(${members[0].toRustString()},)`;
            }
            else {
                name = `(${members.map((x) => x.toRustString()).join(', ')})`;
            }
            super(name);
        }
    }
    Type.Tuple = Tuple;
    class Unit extends Primitive {
        constructor() {
            super('()');
        }
    }
    Type.Unit = Unit;
    class Unknown extends Type {
    }
    Type.Unknown = Unknown;
})(Type = exports.Type || (exports.Type = {}));
//# sourceMappingURL=type.js.map