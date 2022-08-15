import { AST, List, CWSpec, Ident, StructMember, EnumVariant } from './';
export declare type TypeExpr = TypePath | ParamzdTypeExpr | TupleTypeExpr | ShortOptionTypeExpr | ShortVecTypeExpr | RefTypeExpr | ReflectiveTypeExpr | StructDefn | TupleStructDefn | EnumDefn | TypeAliasDefn;
export declare class TypePath extends AST {
    ctx: any;
    root: boolean;
    paths: List<Ident>;
    constructor(ctx: any, root: boolean, paths: List<Ident>);
    toString(): string;
}
export declare class ParamzdTypeExpr extends AST {
    ctx: any;
    type: TypeExpr;
    params: List<TypeExpr>;
    constructor(ctx: any, type: TypeExpr, params: List<TypeExpr>);
}
export declare class TupleTypeExpr extends AST {
    ctx: any;
    members: List<TypeExpr>;
    constructor(ctx: any, members: List<TypeExpr>);
}
export declare class ShortOptionTypeExpr extends AST {
    ctx: any;
    type: TypeExpr;
    constructor(ctx: any, type: TypeExpr);
}
export declare class ShortVecTypeExpr extends AST {
    ctx: any;
    type: TypeExpr;
    constructor(ctx: any, type: TypeExpr);
}
export declare class RefTypeExpr extends AST {
    ctx: any;
    type: TypeExpr;
    constructor(ctx: any, type: TypeExpr);
}
export declare class ReflectiveTypeExpr extends AST {
    ctx: any;
    type: TypeExpr;
    member: Ident;
    constructor(ctx: any, type: TypeExpr, member: Ident);
}
export declare class StructDefn extends AST {
    ctx: any;
    spec: CWSpec | undefined;
    name: Ident;
    members: List<StructMember>;
    constructor(ctx: any, spec: CWSpec | undefined, name: Ident, members: List<StructMember>);
    toString(): string;
}
export declare class TupleStructDefn extends AST {
    ctx: any;
    spec: CWSpec | undefined;
    name: Ident;
    members: List<TypeExpr>;
    constructor(ctx: any, spec: CWSpec | undefined, name: Ident, members: List<TypeExpr>);
}
export declare class EnumDefn extends AST {
    ctx: any;
    spec: CWSpec | undefined;
    name: Ident;
    variants: List<EnumVariant>;
    constructor(ctx: any, spec: CWSpec | undefined, name: Ident, variants: List<EnumVariant>);
}
export declare class TypeAliasDefn extends AST {
    ctx: any;
    spec: CWSpec | undefined;
    name: Ident;
    type: TypeExpr;
    constructor(ctx: any, spec: CWSpec | undefined, name: Ident, type: TypeExpr);
}
