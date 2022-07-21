"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const codegen_1 = require("../../codegen/codegen");
const commander_1 = require("commander");
const fs_1 = require("fs");
const parser_1 = require("../../parser");
exports.command = new commander_1.Command('compile');
exports.command.argument('<filename>', 'The filename to compile');
exports.command.argument('<contractName>', 'The name of the contract to compile');
// short form
exports.command.alias('c');
exports.command.description('Compile <contractName> in <filename> to <STDOUT>');
exports.command.action((filename, contractName) => {
    const source = { file: filename, ast: parser_1.Parser.fromString((0, fs_1.readFileSync)(filename).toString()).buildAST() };
    const foo = new codegen_1.CWScriptCodegen([source]);
    const bar = foo.generateContract(contractName, '/dev/stdout');
    (0, fs_1.writeFileSync)("/dev/stdout", bar.toRustString());
});
exports.default = exports.command;
//# sourceMappingURL=compile.js.map