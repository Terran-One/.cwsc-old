import { Command } from 'commander';

export const command = new Command('new');

// short form
command.alias('n');
command.description('Create a new CWScript project');

export default command;
