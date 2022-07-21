"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const commander_1 = require("commander");
exports.command = new commander_1.Command('validate');
// short form
exports.command.alias('v');
exports.command.description(`Check a CWScript project for errors`);
exports.default = exports.command;
//# sourceMappingURL=validate.js.map