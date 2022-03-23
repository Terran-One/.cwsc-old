import { CWScriptParser } from './grammar/CWScriptParser';
import { CWScriptLexer } from './grammar/CWScriptLexer';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import * as AST from './ast/nodes';
import { CWScriptASTVisitor } from './ast/ast-visitor';

export function parseCWScript(source: string): AST.SourceFile {
  let inputStream = CharStreams.fromString(source);
  let lexer = new CWScriptLexer(inputStream);
  let tokenStream = new CommonTokenStream(lexer);
  let parser = new CWScriptParser(tokenStream);
  let tree = parser.sourceFile();
  let visitor = new CWScriptASTVisitor();
  return visitor.visitSourceFile(tree);
}
