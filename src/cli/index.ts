#!/usr/bin/env node

import * as commander from 'commander';
import fs from 'fs';
import path from 'path';

import { Parser } from '../parser';
import { ImportStmt } from '../ast/nodes';
import { CWScriptCodegen, Source } from '../codegen/codegen';
import { FileWriter } from '../codegen/filewriter';
import { SourceValidationContext } from '../static-analysis/source-validation';

const program = new commander.Command();

program.name('cwsc');
program.version('0.0.1');
program
  .option('--version', 'Show version')
  .option('-v', '--verbose', 'Detailed console output');

let newCommand = program
  .command('new')
  .description('Create a new CWScript project');

let buildCommand = program
  .command('build')
  .description('Build a CWScript project');

let configCommand = program
  .command('config')
  .description('Read / edit the configuration of a CWScript project');

let toolCommand = program
  .command('tool')
  .description('Run an external tool on a CWScript project');

program.parse(process.argv);
const options = program.opts();
const files = program.args;
const destination = options.outputDir || '.';
