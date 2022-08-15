import { Rust } from './common';
import { Type } from './type';
import { Expr } from './expr';
export declare namespace Stmt {
    class Let implements Rust {
        mut: boolean;
        ident: string;
        type?: Type | undefined;
        rhs?: Expr | undefined;
        constructor(mut: boolean, ident: string, type?: Type | undefined, rhs?: Expr | undefined);
        toRustString(): string;
    }
    class Return implements Rust {
        expr?: Expr | undefined;
        constructor(expr?: Expr | undefined);
        toRustString(): string;
    }
    class Assign implements Rust {
        lhs: Expr;
        rhs: Expr;
        constructor(lhs: Expr, rhs: Expr);
        toRustString(): string;
    }
    class Expression implements Rust {
        expr: Expr;
        constructor(expr: Expr);
        toRustString(): string;
    }
}
