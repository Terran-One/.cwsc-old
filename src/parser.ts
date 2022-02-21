import { CWScriptParser, SourceFileContext } from './grammar/CWScriptParser';
import { CWScriptParserVisitor } from './grammar/CWScriptParserVisitor';
import { CWScriptLexer } from './grammar/CWScriptLexer';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { CWScriptASTVisitor } from './ast';
import { inspect } from 'util';

import * as fs from 'fs';

let inputStream = CharStreams.fromString(
  fs.readFileSync('./examples/cws-cw20/src/cw20-base.cws').toString()
);
let lexer = new CWScriptLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new CWScriptParser(tokenStream);
let tree = parser.sourceFile();
let visitor = new CWScriptASTVisitor();
let ast = visitor.visitSourceFile(tree);

console.log(inspect(ast, { showHidden: false, depth: null, colors: true }));
console.log(ast.__children);
