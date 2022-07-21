"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const commander_1 = require("commander");
exports.command = new commander_1.Command('test');
// short form
exports.command.alias('t');
exports.command.description(`Run a CWScript project's tests`);
exports.default = exports.command;
//# sourceMappingURL=test.js.map