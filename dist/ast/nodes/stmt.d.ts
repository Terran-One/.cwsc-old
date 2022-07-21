import { AST, Expr, TypeExpr, Ident, List, Msg } from './';
export declare type Stmt = any;
export declare class LetStmt extends AST {
    ctx: any;
    lhs: LetLHS;
    rhs: Expr;
    constructor(ctx: any, lhs: LetLHS, rhs: Expr);
}
export declare type LetLHS = IdentLHS | StructUnpackLHS;
export declare class IdentLHS extends AST {
    ctx: any;
    name: Ident;
    type?: TypeExpr | undefined;
    constructor(ctx: any, name: Ident, type?: TypeExpr | undefined);
}
export declare class StructUnpackLHS extends AST {
    ctx: any;
    names: List<Ident>;
    constructor(ctx: any, names: List<Ident>);
}
export declare type AssignLHS = IdentAssignLHS | MemberAssignLHS | TableAssignLHS | StateItemAssignLHS | StateMapAssignLHS;
export declare class AssignStmt extends AST {
    ctx: any;
    lhs: AssignLHS;
    assignOp: string;
    rhs: Expr;
    constructor(ctx: any, lhs: AssignLHS, assignOp: string, rhs: Expr);
}
export declare class IdentAssignLHS extends AST {
    ctx: any;
    ident: Ident;
    constructor(ctx: any, ident: Ident);
}
export declare class MemberAssignLHS extends AST {
    ctx: any;
    obj: Expr;
    member: Ident;
    constructor(ctx: any, obj: Expr, member: Ident);
}
export declare class TableAssignLHS extends AST {
    ctx: any;
    table: Expr;
    key: Expr;
    constructor(ctx: any, table: Expr, key: Expr);
}
export declare class InnerPath extends AST {
    ctx: any;
    name: Ident;
    tableKey?: any;
    constructor(ctx: any, name: Ident, tableKey?: any);
}
export declare class StateItemAssignLHS extends AST {
    ctx: any;
    key: Ident;
    inner?: List<InnerPath> | undefined;
    constructor(ctx: any, key: Ident, inner?: List<InnerPath> | undefined);
}
export declare class StateMapAssignLHS extends AST {
    ctx: any;
    key: Ident;
    mapKeys: List<Expr>;
    inner?: List<InnerPath> | undefined;
    constructor(ctx: any, key: Ident, mapKeys: List<Expr>, inner?: List<InnerPath> | undefined);
}
export declare class IfExpr extends AST {
    ctx: any;
    ifClause: IfClauseVariant;
    elseIfClauses: List<IfClauseVariant>;
    elseClause: List<Stmt>;
    constructor(ctx: any, ifClause: IfClauseVariant, elseIfClauses: List<IfClauseVariant>, elseClause: List<Stmt>);
}
export declare type IfClauseVariant = IfClause | IfLetClause;
export declare class IfClause extends AST {
    ctx: any;
    predicate: Expr;
    body: List<Stmt>;
    constructor(ctx: any, predicate: Expr, body: List<Stmt>);
}
export declare class IfLetClause extends AST {
    ctx: any;
    letStmt: LetStmt;
    body: List<Stmt>;
    constructor(ctx: any, letStmt: LetStmt, body: List<Stmt>);
}
export declare class ForInStmt extends AST {
    ctx: any;
    bindings: LetLHS;
    iterable: Expr;
    body: List<Stmt>;
    constructor(ctx: any, bindings: LetLHS, iterable: Expr, body: List<Stmt>);
}
export declare class ForTimesStmt extends AST {
    ctx: any;
    expr: Expr;
    body: List<Stmt>;
    constructor(ctx: any, expr: Expr, body: List<Stmt>);
}
export declare class ExecStmt extends AST {
    ctx: any;
    expr: Expr;
    constructor(ctx: any, expr: Expr);
}
export declare class ExecuteNowStmt extends AST {
    ctx: any;
    msg: Msg;
    constructor(ctx: any, msg: Msg);
}
export declare class EmitStmt extends AST {
    ctx: any;
    expr: Expr;
    constructor(ctx: any, expr: Expr);
}
export declare class ReturnStmt extends AST {
    ctx: any;
    expr: Expr;
    constructor(ctx: any, expr: Expr);
}
export declare class FailStmt extends AST {
    ctx: any;
    expr: Expr;
    constructor(ctx: any, expr: Expr);
}
