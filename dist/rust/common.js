"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_MUT = exports.P_CONST = exports.PointerType = exports.MUT = exports.REF = exports.RefType = exports.ISIZE = exports.USIZE = exports.I128 = exports.U128 = exports.I64 = exports.U64 = exports.I32 = exports.U32 = exports.I16 = exports.U16 = exports.I8 = exports.U8 = exports.IntType = exports.UNIT = exports.TUPLE = exports.STRUCT = exports.StructType = exports.MatchPattern = exports.SelfArg = exports.FunctionArg = exports.Annotated = exports.SERDE_RENAME_ANNOTATION = exports.DERIVE_ANNOTATION = exports.Annotation = exports.Comment = exports.group = exports.CodeGroup = void 0;
const type_1 = require("./type");
/**
 * A bundle of Rust code -- sometimes we need to
 * generate more than 1 Rust code item.
 */
class CodeGroup {
    constructor(title) {
        this.title = title;
        this.items = [];
    }
    add(item) {
        if (item === undefined) {
            throw new Error('item is undefined');
        }
        this.items.push(item);
    }
    toRustString() {
        let items;
        if (this.title) {
            items = [
                new Comment(`-- begin ${this.title}`),
                ...this.items,
                new Comment(`-- end ${this.title}\n`),
            ];
        }
        else {
            items = this.items;
        }
        return items.map((x) => x.toRustString()).join('\n');
    }
}
exports.CodeGroup = CodeGroup;
function group(...items) {
    let res = new CodeGroup();
    items.forEach((x) => res.add(x));
    return res;
}
exports.group = group;
class Comment {
    constructor(value) {
        this.value = value;
    }
    toRustString() {
        return `// ${this.value}`;
    }
}
exports.Comment = Comment;
class Annotation {
    constructor(value) {
        this.value = value;
    }
    toRustString() {
        return `#[${this.value}]`;
    }
}
exports.Annotation = Annotation;
exports.DERIVE_ANNOTATION = new Annotation('derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)');
exports.SERDE_RENAME_ANNOTATION = new Annotation('serde(rename_all = "snake_case")');
class Annotated {
    constructor(annotations) {
        this.annotations = annotations;
    }
    withAnnotations(x) {
        return `${this.annotations.map((x) => x.toRustString()).join(' ')} ${x}`;
    }
    toRustString() {
        throw new Error('Annotated.toRustString() implementation is missing');
    }
}
exports.Annotated = Annotated;
class FunctionArg extends Annotated {
    constructor(annotations, name, type) {
        super(annotations);
        this.annotations = annotations;
        this.name = name;
        this.type = type;
    }
    toRustString() {
        return this.withAnnotations(`${this.name}: ${this.type.toRustString()}`);
    }
}
exports.FunctionArg = FunctionArg;
class SelfArg extends FunctionArg {
    constructor(annotations, mut) {
        super(annotations, `&${mut ? 'mut ' : ''}self`, new type_1.Type());
        this.annotations = annotations;
        this.mut = mut;
    }
    toRustString() {
        return this.withAnnotations(this.name);
    }
}
exports.SelfArg = SelfArg;
class MatchPattern {
    constructor(pattern, expr) {
        this.pattern = pattern;
        this.expr = expr;
    }
    toRustString() {
        return `${this.pattern} => ${this.expr.toRustString()}`;
    }
}
exports.MatchPattern = MatchPattern;
var StructType;
(function (StructType) {
    StructType[StructType["STRUCT"] = 0] = "STRUCT";
    StructType[StructType["TUPLE"] = 1] = "TUPLE";
    StructType[StructType["UNIT"] = 2] = "UNIT";
})(StructType = exports.StructType || (exports.StructType = {}));
exports.STRUCT = StructType.STRUCT;
exports.TUPLE = StructType.TUPLE;
exports.UNIT = StructType.UNIT;
var IntType;
(function (IntType) {
    IntType["U8"] = "u8";
    IntType["I8"] = "i8";
    IntType["U16"] = "u16";
    IntType["I16"] = "i16";
    IntType["U32"] = "u32";
    IntType["I32"] = "i32";
    IntType["U64"] = "u64";
    IntType["I64"] = "i64";
    IntType["U128"] = "u128";
    IntType["I128"] = "i128";
    IntType["USIZE"] = "usize";
    IntType["ISIZE"] = "isize";
})(IntType = exports.IntType || (exports.IntType = {}));
exports.U8 = IntType.U8;
exports.I8 = IntType.I8;
exports.U16 = IntType.U16;
exports.I16 = IntType.I16;
exports.U32 = IntType.U32;
exports.I32 = IntType.I32;
exports.U64 = IntType.U64;
exports.I64 = IntType.I64;
exports.U128 = IntType.U128;
exports.I128 = IntType.I128;
exports.USIZE = IntType.USIZE;
exports.ISIZE = IntType.ISIZE;
var RefType;
(function (RefType) {
    RefType["REF"] = "&";
    RefType["MUT"] = "&mut ";
})(RefType = exports.RefType || (exports.RefType = {}));
exports.REF = RefType.REF;
exports.MUT = RefType.MUT;
var PointerType;
(function (PointerType) {
    PointerType["CONST"] = "const";
    PointerType["MUT"] = "mut";
})(PointerType = exports.PointerType || (exports.PointerType = {}));
exports.P_CONST = PointerType.CONST;
exports.P_MUT = PointerType.MUT;
//# sourceMappingURL=common.js.map