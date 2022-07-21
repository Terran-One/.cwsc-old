"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const commander_1 = require("commander");
exports.command = new commander_1.Command('tool');
// short form
exports.command.alias('x');
exports.command.description('Run an external CWScript compiler tool');
exports.command.argument('<name>', 'The name of the tool to run.');
exports.default = exports.command;
//# sourceMappingURL=tool.js.map