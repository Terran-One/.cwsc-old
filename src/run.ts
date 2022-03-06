import fs from 'fs';
import { parseCWScript } from './parser';
import { CWScriptCodegen } from './codegen';
import { transformAST } from './ir';

let source = fs
  .readFileSync('./examples/test-contract/test-contract.cws')
  .toString();
let ast = parseCWScript(source);
let ir = transformAST(ast);
let codegen = new CWScriptCodegen();
codegen.generate(ir);
