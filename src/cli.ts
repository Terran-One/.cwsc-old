#!/usr/bin/env node

import * as commander from 'commander';
import fs from 'fs';
import path from 'path';
import util from 'util';

import { parseCWScript } from './parser';
import { ImportAllStmt, ImportStmt } from './ast';
import { CompilationRequestBuilder, CompilationRequest } from './compiler';
import { CWScriptCodegen } from './codegen';

const program = new commander.Command();

program.name('cwsc');
program.version('0.0.1');
program
  .option('--version', 'Show version')
  .option('-o', '--output-dir <output-directory>', 'Output directory of build')
  .option('-v', '--verbose', 'Detailed console output');

program.parse(process.argv);
const options = program.opts();
const files = program.args;
const destination = options.outputDir || '.';

function resolveFileImport(fromFile: string, importedPath: string) {
  let baseDir = path.parse(fromFile).dir;
  const resolvedPath = path.resolve(baseDir, importedPath);
  return resolvedPath;
}

let sources: any[] = [];

function addSourceFile(file: string) {
  const sourceFileText = fs.readFileSync(file).toString();
  const ast = parseCWScript(sourceFileText);
  sources.push({
    file: path.resolve(file),
    ast: ast,
  });
  ast.descendants
    .filter(x => x instanceof ImportStmt)
    .map(x => x as ImportStmt)
    .forEach(i => {
      const resolvedPath = resolveFileImport(file, i.fileName);
      i.fileName = resolvedPath;
      if (sources.findIndex(x => x.file === resolvedPath) === -1) {
        addSourceFile(resolvedPath);
      }
    });
}

files.forEach(file => {
  addSourceFile(file);
});

let cr = new CompilationRequestBuilder();
sources.forEach(s => {
  cr.addSource(s);
});

let cg = new CWScriptCodegen(sources);
let ct = cg.generateContract('CW20Base');
console.log(ct);
