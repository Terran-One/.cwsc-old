import { CWScriptParser, SourceFileContext } from './grammar/CWScriptParser';
import { CWScriptParserVisitor } from './grammar/CWScriptParserVisitor';
import { CWScriptLexer } from './grammar/CWScriptLexer';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import * as AST from './ast';
import { inspect } from 'util';

import * as fs from 'fs';
import { filter } from 'lodash';

export function parseCWScript(source: string): AST.SourceFile {
  let inputStream = CharStreams.fromString(source);
  let lexer = new CWScriptLexer(inputStream);
  let tokenStream = new CommonTokenStream(lexer);
  let parser = new CWScriptParser(tokenStream);
  let tree = parser.sourceFile();
  let visitor = new AST.CWScriptASTVisitor();
  return visitor.visitSourceFile(tree);
}

let source = fs
  .readFileSync('./examples/cws-cw20/src/cw20-base.cws')
  .toString();
let ast = parseCWScript(source);

let instantiate: AST.InstantiateDefn = ast.descendants.filter(
  x => x instanceof AST.InstantiateDefn
)[0] as any;

instantiate.args.elements.forEach((arg: any) => console.log(arg.name.text));
