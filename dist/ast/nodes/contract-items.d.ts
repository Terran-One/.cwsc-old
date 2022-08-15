import { AST, List, CWSpec, FnArg, FnDefn } from '.';
import { Ident } from './expr';
import { StructDefn, TypeExpr } from './type';
export declare class InterfaceDefn extends AST {
    ctx: any;
    spec: CWSpec | undefined;
    name: Ident;
    body: List<InterfaceItem>;
    baseInterfaces?: List<Ident> | undefined;
    constructor(ctx: any, spec: CWSpec | undefined, name: Ident, body: List<InterfaceItem>, baseInterfaces?: List<Ident> | undefined);
}
export declare class ContractDefn extends AST {
    ctx: any;
    spec: CWSpec | undefined;
    name: Ident;
    body: List<ContractItem>;
    baseContracts?: List<Ident> | undefined;
    interfaces?: List<Ident> | undefined;
    constructor(ctx: any, spec: CWSpec | undefined, name: Ident, body: List<ContractItem>, baseContracts?: List<Ident> | undefined, interfaces?: List<Ident> | undefined);
}
export declare type InterfaceItem = ErrorDefn | List<ErrorDefn> | EventDefn | List<EventDefn> | StateDefn | List<StateDefn> | InstantiateDecl | ExecDecl | List<ExecDecl> | QueryDecl | List<QueryDecl> | MigrateDecl;
export declare type ContractItem = ErrorDefn | List<ErrorDefn> | EventDefn | List<EventDefn> | StateDefn | List<StateDefn> | InstantiateDefn | ExecDefn | List<ExecDefn> | QueryDefn | List<QueryDefn> | MigrateDefn;
export declare class ErrorDefn extends StructDefn {
}
export declare class EventDefn extends StructDefn {
}
export declare class StateDefn extends AST {
    ctx: any;
    key: Ident;
    type: TypeExpr;
    constructor(ctx: any, key: Ident, type: TypeExpr);
}
export declare class ItemDefn extends StateDefn {
    ctx: any;
    spec: CWSpec | undefined;
    constructor(ctx: any, spec: CWSpec | undefined, key: Ident, type: TypeExpr);
}
export declare class MapDefn extends StateDefn {
    ctx: any;
    spec: CWSpec | undefined;
    mapKeys: List<MapDefnKey>;
    constructor(ctx: any, spec: CWSpec | undefined, key: Ident, mapKeys: List<MapDefnKey>, type: TypeExpr);
}
export declare class MapDefnKey extends AST {
    ctx: any;
    name: Ident | undefined;
    type: TypeExpr;
    constructor(ctx: any, name: Ident | undefined, type: TypeExpr);
}
export declare class InstantiateDefn extends FnDefn {
}
export declare class ExecDefn extends FnDefn {
}
export declare class QueryDefn extends FnDefn {
}
export declare class MigrateDefn extends FnDefn {
}
export declare class FnDecl extends AST {
    ctx: any;
    spec: CWSpec | undefined;
    name: Ident | undefined;
    args: List<FnArg>;
    returnType: TypeExpr | undefined;
    constructor(ctx: any, spec: CWSpec | undefined, name: Ident | undefined, args: List<FnArg>, returnType: TypeExpr | undefined);
}
export declare class InstantiateDecl extends FnDecl {
}
export declare class ExecDecl extends FnDecl {
}
export declare class QueryDecl extends FnDecl {
}
export declare class MigrateDecl extends FnDecl {
}
