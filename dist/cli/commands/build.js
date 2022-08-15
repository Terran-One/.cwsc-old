"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const commander_1 = require("commander");
const manager_1 = require("../../project/manager");
exports.command = new commander_1.Command('build');
// short form
exports.command.alias('b');
exports.command.description('Build a CWScript project');
exports.command.action(() => {
    let currentDir = process.cwd();
    let project = manager_1.CWSProjectManager.readProject(currentDir);
    console.log(project);
});
exports.default = exports.command;
//# sourceMappingURL=build.js.map