import { Rust, IntType, PointerType } from './common';
import { Expr } from './expr';
export declare class Type implements Rust {
    path: string;
    typeParams: Type[];
    constructor(path?: string, typeParams?: Type[]);
    withTypeParams(tps: Type[]): Type;
    option(): Type.Option;
    vec(): Type.Vec;
    ref(mut?: boolean): Type.Ref;
    mut(): Type.Mut;
    fnCall(fnName: string, args: any, typeParams?: Type[]): Expr.FnCall;
    toRustString(): string;
}
export declare namespace Type {
    enum RefType {
        REF = "&",
        MUT = "&mut "
    }
    class Mut extends Type {
        inner: Type;
        constructor(inner: Type);
    }
    class Ref extends Type {
        refType: RefType;
        inner: Type;
        constructor(refType: RefType, inner: Type);
        isMut(): boolean;
    }
    class Option extends Type {
        inner: Type;
        constructor(inner: Type);
    }
    class Result extends Type {
        okType: Type;
        errType: Type;
        constructor(okType: Type, errType: Type);
    }
    class Vec extends Type {
        inner: Type;
        constructor(inner: Type);
    }
    class String extends Type {
        constructor();
    }
    class Primitive extends Type {
    }
    class Never extends Primitive {
        constructor();
    }
    class Str extends Primitive {
        isStatic: boolean;
        constructor(isStatic?: boolean);
    }
    class Int extends Primitive {
        intType: IntType;
        constructor(intType: IntType);
        isSigned(): boolean;
    }
    class Char extends Primitive {
        constructor();
    }
    class Bool extends Primitive {
        constructor();
    }
    class Fn extends Primitive {
        args: Type[];
        returnType: Type;
        constructor(args: Type[], returnType: Type);
    }
    class Pointer extends Primitive {
        pointerType: PointerType;
        inner: Type;
        constructor(pointerType: PointerType, inner: Type);
        isMut(): boolean;
    }
    class Array extends Primitive {
        inner: Type;
        size: number;
        constructor(inner: Type, size: number);
    }
    class Slice extends Primitive {
        inner: Type;
        constructor(inner: Type);
    }
    class Tuple extends Primitive {
        members: Type[];
        constructor(members: Type[]);
    }
    class Unit extends Primitive {
        constructor();
    }
    class Unknown extends Type {
    }
}
