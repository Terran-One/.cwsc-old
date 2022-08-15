import { Parser } from '../parser';
import { AST } from '..';

export function cws(code: TemplateStringsArray): AST.SourceFile {   
    const parser = Parser.fromString(code.toString());
    return parser.buildAST();
}
