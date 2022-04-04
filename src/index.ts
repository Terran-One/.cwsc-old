import { program, Command } from 'commander';

import commands from './commands';
import * as logger from './util/logger';

process.on('unhandledRejection', (error) => {
  if (program.verbose) {
    console.error(error);
    logger.error(error.toString());
  } else {
    logger.error(error.toString() + '; use --verbose for more details');
  }
});

export function run(argv: string[]): void {
  try {
    program
      .name('mirrorcli')
      .version('0.0.1')
      .option('-v,--verbose', 'Show verbose error logs')
      .description(
        'Command-line interface for interacting with Mirror Protocol on Terra'
      );
    commands.forEach(command: Command) => {
      program.addCommand(command);
    });
    program.parse(argv);
  } catch (e) {
    logger.error(e.message);
  }
}
