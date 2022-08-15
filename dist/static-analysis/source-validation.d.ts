import { Source } from '../codegen/codegen';
import * as AST from '../ast/nodes';
export declare class ASTValidationPass {
    ctx: SourceValidationContext;
    constructor(ctx: SourceValidationContext);
    analyze(ast: AST.AST): ValidationFinding[];
}
export declare class ValidateStateUsages extends ASTValidationPass {
    analyze(ast: AST.AST): ValidationFinding[];
    stateItemDefinedInContract(key: AST.Ident, contract: AST.ContractDefn): boolean;
    stateMapDefinedInContract(key: AST.Ident, contract: AST.ContractDefn): boolean;
}
export declare const STD_AST_VALIDATIONS: Array<typeof ASTValidationPass>;
export declare enum Finding {
    Error = "error",
    Warning = "warning"
}
export declare class ValidationFinding {
    severity: Finding;
    message: string;
    node: AST.AST;
    constructor(severity: Finding, message: string, node: AST.AST);
}
export interface ValidationReport {
    [file: string]: Array<ValidationFinding>;
}
export declare class SourceValidationContext {
    sources: Source[];
    validations: (typeof ASTValidationPass)[];
    constructor(sources: Source[]);
    runValidations(): ValidationReport;
}
