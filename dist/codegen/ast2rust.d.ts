import { AST2Intermediate } from '../intermediate/ast2intermediate';
import * as AST from '../ast/nodes';
import * as Rust from '../rust';
import { CWScriptEnv } from '../symbol-table/env';
export declare class UnresolvedType {
    ref: AST.TypeExpr;
    postResolve: (x: any) => any;
    constructor(ref: AST.TypeExpr, postResolve: (x: any) => any);
}
export declare class AST2Rust {
    env: CWScriptEnv;
    intermediate: AST2Intermediate;
    private tmpVarCount;
    constructor(env: CWScriptEnv, intermediate: AST2Intermediate);
    getTmpVar(): Rust.Expr.Path;
    lastTmpVar(): Rust.Expr.Path;
    letVar(mut: boolean, value?: Rust.Expr, type?: Rust.Type): Rust.CodeGroup;
    resolveType(ty: AST.TypeExpr): Rust.Type;
    translateArithmeticOpExpr(expr: AST.ArithmeticOpExpr): Rust.CodeGroup;
    translateStructUnpackLHS(lhs: AST.StructUnpackLHS): {
        structUnpack: string[];
    };
    translateInstantiateDefn(fn: AST.InstantiateDefn): Rust.Defn.Function;
    translateExecDefn(fn: AST.ExecDefn): Rust.Defn.Function;
    translateQueryDefn(fn: AST.QueryDefn): Rust.Defn.Function;
    stateItemSet(key: string, value: Rust.Expr): Rust.CodeGroup;
    translateAssignStmt(stmt: AST.AssignStmt): Rust.CodeGroup;
    translateLetStmt(stmt: AST.LetStmt): Rust.CodeGroup;
    translateIntegerVal(val: AST.IntegerVal): Rust.CodeGroup;
    translateStringVal(val: AST.StringVal): Rust.CodeGroup;
    translateVecVal(val: AST.VecVal): Rust.CodeGroup;
    translateStateItemAssignLHS(lhs: AST.StateItemAssignLHS): {
        stateItem: {
            key: string;
        };
    };
    translateStateItemAccessExpr(x: AST.StateItemAccessExpr): Rust.CodeGroup;
    translateStateMapAccessExpr(x: AST.StateMapAccessExpr): Rust.CodeGroup;
    translateSpecialVariable(x: AST.Ext.SpecialVariable): Rust.CodeGroup;
    translateMemberAccessExpr(m: AST.MemberAccessExpr): Rust.CodeGroup;
    translateIdent(x: AST.Ident): Rust.CodeGroup;
    translateEmitStmt(x: AST.EmitStmt): Rust.CodeGroup;
    translateStructVal(astStructVal: AST.StructVal): Rust.CodeGroup;
    translateExecuteNowStmt(x: AST.ExecuteNowStmt): Rust.CodeGroup;
    translateMsg(astMsg: AST.Msg): Rust.CodeGroup;
    translateReturnStmt(x: AST.ReturnStmt): Rust.CodeGroup;
    translateContractDefn(contract: AST.ContractDefn): Rust.CodeGroup;
    translate(ast: AST.AST): Rust.CodeGroup;
}
