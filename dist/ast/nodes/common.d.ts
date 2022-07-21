import { AST, List, TypeExpr, ContractDefn, InterfaceDefn, Ident, Stmt } from './';
export declare class StructMember extends AST {
    ctx: any;
    spec: CWSpec | undefined;
    name: Ident;
    option: boolean;
    type: TypeExpr;
    constructor(ctx: any, spec: CWSpec | undefined, name: Ident, option: boolean, type: TypeExpr);
}
export declare class EmptyAST extends AST {
}
export declare class CWSpec extends AST {
    ctx: any;
    text: string;
    constructor(ctx: any, text: string);
}
export declare class SourceFile extends AST {
    ctx: any;
    spec: CWSpec | undefined;
    stmts: List<TopLevelStmt>;
    constructor(ctx: any, spec: CWSpec | undefined, stmts: List<TopLevelStmt>);
}
export declare type TopLevelStmt = InterfaceDefn | ContractDefn | ImportStmt;
export declare class ImportStmt extends AST {
    ctx: any;
    fileName: string;
    constructor(ctx: any, fileName: string);
}
export declare class ImportAllStmt extends ImportStmt {
    ctx: any;
    fileName: string;
    constructor(ctx: any, fileName: string);
}
export declare class ImportItemsStmt extends ImportStmt {
    ctx: any;
    fileName: string;
    items: List<ImportItem>;
    constructor(ctx: any, fileName: string, items: List<ImportItem>);
}
export declare class ImportItem extends AST {
    ctx: any;
    symbol: Ident;
    alias?: Ident | undefined;
    constructor(ctx: any, symbol: Ident, alias?: Ident | undefined);
}
export declare type EnumVariant = EnumVariantStruct | EnumVariantTuple;
export declare class EnumVariantStruct extends AST {
    ctx: any;
    name: Ident;
    members: List<StructMember>;
    constructor(ctx: any, name: Ident, members: List<StructMember>);
}
export declare class EnumVariantTuple extends AST {
    ctx: any;
    name: Ident;
    members: List<TypeExpr>;
    constructor(ctx: any, name: Ident, members: List<TypeExpr>);
}
export declare class FnArg extends AST {
    ctx: any;
    name: Ident;
    option: boolean;
    type: TypeExpr;
    constructor(ctx: any, name: Ident, option: boolean, type: TypeExpr);
}
export declare class FnDefn extends AST {
    ctx: any;
    spec: CWSpec | undefined;
    name: Ident | undefined;
    args: List<FnArg>;
    returnType: TypeExpr | undefined;
    body: List<Stmt>;
    constructor(ctx: any, spec: CWSpec | undefined, name: Ident | undefined, args: List<FnArg>, returnType: TypeExpr | undefined, body: List<Stmt>);
}
