import * as AST from '../ast/nodes';
declare type Type = {
    name: string;
    types: string[];
};
declare type Arg = {
    name: string;
    type: Type;
};
declare type Exec = {
    name: string;
    args: Arg[];
};
export declare type Interface = {
    name: string;
    execs: Exec[];
};
export declare type Contract = {
    name: string;
    execs: Exec[];
};
export declare class AST2Intermediate {
    interfaces: Map<string, Interface>;
    contracts: Map<string, Contract>;
    translateInterface(iface: AST.InterfaceDefn): void;
    translateExecDecl(exec: AST.ExecDecl): any;
    translateExecDefn(exec: AST.ExecDefn): any;
    translateFnArg(arg: AST.FnArg): any;
    translateTypePath(type: AST.TypePath): {
        name: string;
    };
    translateContractDefn(contract: AST.ContractDefn): void;
    translateParamzdTypeExpr(pte: AST.ParamzdTypeExpr): {
        name: string;
        types: string[];
    };
    translate(ast: AST.AST): any;
}
export {};
