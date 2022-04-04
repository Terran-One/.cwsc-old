import { program, Command } from 'commander';

import commands from './commands';
import * as logger from '../util/logger';

process.on('unhandledRejection', (error: Error) => {
  if ((program as any).verbose) {
    console.error(error);
    logger.error(error.toString());
  } else {
    logger.error(error.toString() + '; use --verbose for more details');
  }
});

export function run(argv: string[]): void {
  try {
    program
      .name('cwsc')
      .version('0.0.1')
      .option('-v,--verbose', 'Show verbose error logs')
      .description('Reference CWScript Compiler by Terran One');
    commands.forEach((cmd: Command) => {
      program.addCommand(cmd);
    });
    program.parse(argv);
  } catch (e) {
    logger.error((e as Error).message);
  }
}
