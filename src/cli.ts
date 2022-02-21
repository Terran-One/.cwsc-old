#!/usr/bin/env node

import * as commander from 'commander';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

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
