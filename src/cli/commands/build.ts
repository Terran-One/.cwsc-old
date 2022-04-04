import { Command } from 'commander';

export const command = new Command('build');

// short form
command.alias('b');
command.description('Build a CWScript project');

export default command;
