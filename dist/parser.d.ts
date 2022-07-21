import { CWScriptParser } from './grammar/CWScriptParser';
import { CWScriptLexer } from './grammar/CWScriptLexer';
import * as AST from './ast/nodes';
export declare class Parser {
    sourceInput: string;
    antlrLexer: CWScriptLexer;
    antlrParser: CWScriptParser;
    constructor(sourceInput: string);
    buildAST(): AST.SourceFile;
    static fromString(sourceInput: string): Parser;
}
