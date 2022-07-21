import { AST, List, TypePath } from './';
export declare type Expr = any;
export declare class Msg extends AST {
    ctx: any;
    klass: Ident;
    method: Ident;
    args: ExprList;
    constructor(ctx: any, klass: Ident, method: Ident, args: ExprList);
}
export declare class ExprList extends AST {
    ctx: any;
    elements: Expr[];
    constructor(ctx: any, elements: Expr[]);
}
export declare class Ident extends AST {
    ctx: any;
    text: string;
    constructor(ctx: any, text: string);
}
export declare class StateItemAccessExpr extends AST {
    ctx: any;
    key: Ident;
    constructor(ctx: any, key: Ident);
}
export declare class StateMapAccessExpr extends AST {
    ctx: any;
    key: Ident;
    mapKeys: List<Expr>;
    constructor(ctx: any, key: Ident, mapKeys: List<Expr>);
}
export declare class MemberAccessExpr extends AST {
    ctx: any;
    lhs: Expr;
    member: Ident;
    constructor(ctx: any, lhs: Expr, member: Ident);
}
export declare class TableLookupExpr extends AST {
    ctx: any;
    lhs: Expr;
    key: Expr;
    constructor(ctx: any, lhs: Expr, key: Expr);
}
export declare class PosArgsFnCallExpr extends AST {
    ctx: any;
    fn: Expr;
    args: List<Expr>;
    constructor(ctx: any, fn: Expr, args: List<Expr>);
}
export declare class NamedArgsFnCallExpr extends AST {
    ctx: any;
    fn: Expr;
    args: List<NamedExpr>;
    constructor(ctx: any, fn: Expr, args: List<NamedExpr>);
}
export declare class UnaryExpr extends AST {
    ctx: any;
    op: string;
    expr: Expr;
    constructor(ctx: any, op: string, expr: Expr);
}
export declare class ExpExpr extends AST {
    ctx: any;
    lhs: Expr;
    rhs: Expr;
    constructor(ctx: any, lhs: Expr, rhs: Expr);
}
export declare class ArithmeticOpExpr extends AST {
    ctx: any;
    lhs: Expr;
    op: string;
    rhs: Expr;
    constructor(ctx: any, lhs: Expr, op: string, rhs: Expr);
}
export declare class CompOpExpr extends AST {
    ctx: any;
    lhs: Expr;
    op: string;
    rhs: Expr;
    constructor(ctx: any, lhs: Expr, op: string, rhs: Expr);
}
export declare class AndExpr extends AST {
    ctx: any;
    lhs: Expr;
    rhs: Expr;
    constructor(ctx: any, lhs: Expr, rhs: Expr);
}
export declare class OrExpr extends AST {
    ctx: any;
    lhs: Expr;
    rhs: Expr;
    constructor(ctx: any, lhs: Expr, rhs: Expr);
}
export declare class QueryExpr extends AST {
    ctx: any;
    expr: Expr;
    constructor(ctx: any, expr: Expr);
}
export declare class UnitVal extends AST {
    ctx: any;
    constructor(ctx: any);
}
export declare class StructVal extends AST {
    ctx: any;
    type: TypePath;
    members: List<StructValMember>;
    constructor(ctx: any, type: TypePath, members: List<StructValMember>);
}
export declare class StructValMember extends AST {
    ctx: any;
    name: Ident;
    value: Expr;
    constructor(ctx: any, name: Ident, value: Expr);
}
export declare class NamedExpr extends AST {
    ctx: any;
    name: Ident;
    value: Expr;
    constructor(ctx: any, name: Ident, value: Expr);
}
export declare class TupleVal extends AST {
    ctx: any;
    type: TypePath;
    members: List<Expr>;
    constructor(ctx: any, type: TypePath, members: List<Expr>);
}
export declare class VecVal extends AST {
    ctx: any;
    elements: List<Expr>;
    constructor(ctx: any, elements: List<Expr>);
}
export declare class StringVal extends AST {
    ctx: any;
    value: string;
    constructor(ctx: any, value: string);
}
export declare class IntegerVal extends AST {
    ctx: any;
    value: string;
    constructor(ctx: any, value: string);
}
export declare class DecimalVal extends AST {
    ctx: any;
    value: string;
    constructor(ctx: any, value: string);
}
export declare class BoolVal extends AST {
    ctx: any;
    value: boolean;
    constructor(ctx: any, value: boolean);
}
