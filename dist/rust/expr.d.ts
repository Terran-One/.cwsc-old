import * as Rust from '.';
import { Type } from './type';
export declare abstract class Expr implements Rust.Rust {
    get rustType(): Type;
    asType(type: Type): Expr.As;
    q(): Expr.Q;
    toStmt(): Rust.Stmt.Expression;
    clone(): Expr;
    ok(): Expr;
    ref(mut?: boolean): Expr.Ref;
    mut(): Expr.Mut;
    fnCall(fnName: string, args: any, typeParams?: Type[]): Expr.FnCall;
    dot(member: string): Expr.Dot;
    toRustString(): string;
}
export declare namespace Expr {
    class Dot extends Expr {
        expr: Expr;
        member: string;
        constructor(expr: Expr, member: string);
        toRustString(): string;
    }
    class As extends Expr {
        inner: Expr;
        castedType: Type;
        get rustType(): Type;
        constructor(inner: Expr, castedType: Type);
        toRustString(): string;
    }
    class Mut extends Expr {
        inner: Expr;
        get rustType(): Type.Mut;
        constructor(inner: Expr);
        toRustString(): string;
    }
    class Ref extends Expr {
        refType: Rust.RefType;
        inner: Expr;
        get rustType(): Type.Ref;
        constructor(refType: Rust.RefType, inner: Expr);
        toRustString(): string;
        isMut(): boolean;
    }
    class Q extends Expr {
        inner: Expr;
        constructor(inner: Expr);
        toRustString(): string;
    }
    class FnCall extends Expr {
        path: string;
        args: any[];
        typeParams: Type[];
        constructor(path: string, args?: any[], typeParams?: Type[]);
        toRustString(): string;
    }
    class InstantiateStruct extends Expr {
        path: string;
        args: any[];
        typeParams: Type[];
        constructor(path: string, args?: any[], typeParams?: Type[]);
        toRustString(): string;
    }
    class Match extends Expr {
        item: Expr;
        patterns: Rust.MatchPattern[];
        constructor(item: Expr, patterns?: Rust.MatchPattern[]);
        addPattern(pattern: string, expr: Expr): Match;
        toRustString(): string;
    }
    class Path extends Expr {
        path: string;
        constructor(path: string);
        toRustString(): string;
    }
    class Binop extends Expr {
        op: string;
        lhs: Expr;
        rhs: Expr;
        constructor(op: string, lhs: Expr, rhs: Expr);
        toRustString(): string;
    }
}
