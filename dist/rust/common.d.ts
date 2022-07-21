import { CWScriptEnv } from '../symbol-table/env';
import { Type } from './type';
export interface Rust {
    toRustString(): string;
}
export interface TransformsToRust {
    toRust(env: CWScriptEnv): Rust;
}
/**
 * A bundle of Rust code -- sometimes we need to
 * generate more than 1 Rust code item.
 */
export declare class CodeGroup implements Rust {
    title?: string | undefined;
    items: Rust[];
    constructor(title?: string | undefined);
    add(item: Rust): void;
    toRustString(): string;
}
export declare function group(...items: Rust[]): Rust;
export declare class Comment implements Rust {
    value: string;
    constructor(value: string);
    toRustString(): string;
}
export declare class Annotation {
    value: string;
    constructor(value: string);
    toRustString(): string;
}
export declare const DERIVE_ANNOTATION: Annotation;
export declare const SERDE_RENAME_ANNOTATION: Annotation;
export declare abstract class Annotated implements Rust {
    annotations: Annotation[];
    constructor(annotations: Annotation[]);
    withAnnotations(x: string): string;
    toRustString(): string;
}
export declare class FunctionArg extends Annotated {
    annotations: Annotation[];
    name: string;
    type: Type;
    constructor(annotations: Annotation[], name: string, type: Type);
    toRustString(): string;
}
export declare class SelfArg extends FunctionArg {
    annotations: Annotation[];
    mut: boolean;
    constructor(annotations: Annotation[], mut: boolean);
    toRustString(): string;
}
export declare class MatchPattern implements Rust {
    pattern: string;
    expr: Rust;
    constructor(pattern: string, expr: Rust);
    toRustString(): string;
}
export declare enum StructType {
    STRUCT = 0,
    TUPLE = 1,
    UNIT = 2
}
export declare const STRUCT = StructType.STRUCT;
export declare const TUPLE = StructType.TUPLE;
export declare const UNIT = StructType.UNIT;
export declare enum IntType {
    U8 = "u8",
    I8 = "i8",
    U16 = "u16",
    I16 = "i16",
    U32 = "u32",
    I32 = "i32",
    U64 = "u64",
    I64 = "i64",
    U128 = "u128",
    I128 = "i128",
    USIZE = "usize",
    ISIZE = "isize"
}
export declare const U8 = IntType.U8;
export declare const I8 = IntType.I8;
export declare const U16 = IntType.U16;
export declare const I16 = IntType.I16;
export declare const U32 = IntType.U32;
export declare const I32 = IntType.I32;
export declare const U64 = IntType.U64;
export declare const I64 = IntType.I64;
export declare const U128 = IntType.U128;
export declare const I128 = IntType.I128;
export declare const USIZE = IntType.USIZE;
export declare const ISIZE = IntType.ISIZE;
export declare enum RefType {
    REF = "&",
    MUT = "&mut "
}
export declare const REF = RefType.REF;
export declare const MUT = RefType.MUT;
export declare enum PointerType {
    CONST = "const",
    MUT = "mut"
}
export declare const P_CONST = PointerType.CONST;
export declare const P_MUT = PointerType.MUT;
