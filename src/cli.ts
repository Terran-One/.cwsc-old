#!/usr/bin/env node

import * as commander from 'commander';
import fs from 'fs';
import os from 'os';
import path from 'path';
import util from 'util';

import { parseCWScript } from './parser';
import { ImportStmt } from './ast';
import {
  CompilationJob,
  CompilationRequestBuilder,
  CompilationRequest,
} from './compiler';

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
  ast.descendantsOfType(ImportStmt).forEach(i => {
    const resolvedPath = resolveFileImport(file, i.fileName);
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
  console.log(JSON.stringify(s.ast.toData(), null, 2));
});

let request = cr.build();
let job = new CompilationJob(request);

job.compile();
