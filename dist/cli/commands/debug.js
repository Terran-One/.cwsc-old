"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const commander_1 = require("commander");
exports.command = new commander_1.Command('debug');
// short form
exports.command.alias('d');
exports.command.description('Run debugger on a CWScript project');
exports.default = exports.command;
//# sourceMappingURL=debug.js.map