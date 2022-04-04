import { Command } from 'commander';

export const command = new Command('tool');

// short form
command.alias('t');
command.description('Run a tool of a CWScript project');

export default command;
