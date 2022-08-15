import { Annotated, Annotation, StructType, FunctionArg, Rust } from './common';
import { Type } from './type';
import { Expr } from './expr';
export declare namespace Defn {
    class StructMember extends Annotated {
        annotations: Annotation[];
        name: string | null;
        type: Type;
        constructor(annotations: Annotation[], name: string | null, type: Type);
        toRustString(): string;
        toEnumVariantString(): string;
    }
    class Struct extends Annotated {
        annotations: Annotation[];
        type: StructType;
        name: string;
        members: StructMember[];
        constructor(annotations: Annotation[], type: StructType, name: string, members?: StructMember[]);
        addMember(member: StructMember): Struct;
        toRustString(): string;
        toEnumVariantString(): string;
    }
    class Enum extends Annotated {
        annotations: Annotation[];
        name: string;
        variants: Struct[];
        constructor(annotations: Annotation[], name: string, variants?: Struct[]);
        addVariant(variant: Struct): Enum;
        toRustString(): string;
    }
    class TypeAlias {
        name: string;
        type: Type;
        constructor(name: string, type: Type);
        toRustString(): string;
    }
    class Module {
        name: string;
        items: any[];
        constructor(name: string, items?: any[]);
        addItem(item: any): Module;
        toRustString(): string;
    }
    class Use extends Annotated {
        annotations: Annotation[];
        path: string;
        constructor(annotations: Annotation[], path: string);
        toRustString(): string;
    }
    class Const {
        name: string;
        type: Type;
        value: Expr;
        constructor(name: string, type: Type, value: Expr);
        toRustString(): string;
    }
    class Function extends Annotated {
        annotations: Annotation[];
        name: string;
        args: FunctionArg[];
        returnType: Type;
        body: Rust[];
        constructor(annotations: Annotation[], name: string, args: FunctionArg[], returnType: Type, body?: Rust[]);
        addArg(arg: FunctionArg): Function;
        addBody(stmt: Rust): Function;
        toRustString(): string;
    }
    class Let {
        mut: boolean;
        ident: string;
        type?: Type | undefined;
        rhs?: Expr | undefined;
        constructor(mut: boolean, ident: string, type?: Type | undefined, rhs?: Expr | undefined);
        toRustString(): string;
    }
}
