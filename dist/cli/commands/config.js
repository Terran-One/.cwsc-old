"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const commander_1 = require("commander");
exports.command = new commander_1.Command('config');
// short form
exports.command.alias('cfg');
exports.command.description('Read / write the configuration of a CWScript project');
exports.default = exports.command;
//# sourceMappingURL=config.js.map