import * as AST from './ast/nodes';
export declare class ASTValidationError extends Error {
    message: string;
    astNode: AST.AST;
    childNode?: AST.AST | undefined;
    constructor(message: string, astNode: AST.AST, childNode?: AST.AST | undefined);
}
export declare class SourceValidationError extends Error {
    message: string;
    file: string;
    position: any;
    constructor(message: string, file: string, position: any);
}
