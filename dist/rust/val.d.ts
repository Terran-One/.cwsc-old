import { IntType } from './common';
import { Type } from './type';
import { Expr } from './expr';
export declare class Val extends Expr {
}
export declare namespace Val {
    class StrLiteral extends Val {
        get rustType(): Type.Str;
        value: string;
        constructor(value: string);
        toRustString(): string;
    }
    class StructMember {
        name: string;
        value: Expr;
        constructor(name: string, value: Expr);
        toRustString(): string;
    }
    class Struct extends Val {
        structType: Type;
        members: StructMember[];
        get rustType(): Type;
        constructor(structType: Type, members?: StructMember[]);
        assignMember(name: string, value: Expr): Struct;
        toRustString(): string;
    }
    class Vec extends Val {
        values: Expr[];
        get rustType(): Type.Vec;
        constructor(values: Expr[]);
        toRustString(): string;
    }
    class Tuple extends Val {
        members: Expr[];
        get rustType(): Type.Tuple;
        constructor(members: Expr[]);
        toRustString(): string;
    }
    class IntLiteral extends Val {
        intType: IntType;
        value: string;
        get rustType(): Type.Int;
        constructor(intType: IntType, value: string);
        toRustString(): string;
    }
    class BoolLiteral extends Val {
        value: boolean;
        get rustType(): Type.Bool;
        constructor(value: boolean);
        toRustString(): string;
    }
}
