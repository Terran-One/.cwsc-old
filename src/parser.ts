import { CWScriptParser, SourceFileContext } from './grammar/CWScriptParser';
import { CWScriptParserVisitor } from './grammar/CWScriptParserVisitor';
import { CWScriptLexer } from './grammar/CWScriptLexer';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import * as AST from './ast';
import * as fs from 'fs';

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
  .readFileSync('./examples/test-contract/test-contract.cws')
  .toString();
let ast = parseCWScript(source);

ast.descendants.forEach(x => {
  console.log(x.toData());
});

// let queryHandlers = ast.descendants
//   .filter(x => x instanceof AST.QueryDefn)
//   .map(x => x as AST.QueryDefn);
// queryHandlers.forEach(q => {
//   console.log(q.name?.text);
//   q.args.children.forEach(arg => {
//     console.log(arg.name?.text);
//   });
// });

// let instantiate: AST.InstantiateDefn = ast.descendants.filter(
//   x => x instanceof AST.InstantiateDefn
// )[0] as any;

// instantiate.args.elements.forEach((arg: any) => console.log(arg.name.text));
