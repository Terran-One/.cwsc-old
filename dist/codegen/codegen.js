"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CWScriptCodegen = void 0;
const ast2intermediate_1 = require("../intermediate/ast2intermediate");
const AST = __importStar(require("../ast/nodes"));
const env_1 = require("../symbol-table/env");
const ast2rust_1 = require("./ast2rust");
class CWScriptCodegen {
    constructor(sources) {
        this.sources = sources;
        this.envs = {};
        sources.forEach((source) => {
            this.envs[source.file] = new env_1.CWScriptEnv();
        });
    }
    generateContract(name, file) {
        let sourceFiles = this.sources.filter((source) => source.ast
            .descendantsOfType(AST.ContractDefn)
            .find((contract) => contract.name.text === name) !== undefined);
        if (sourceFiles.length > 1) {
            throw new Error(`Multiple source files found for contract ${name}.` +
                ` Please disambiguate which file to use.`);
        }
        if (sourceFiles.length === 0) {
            throw new Error(`No source file found for contract ${name}.`);
        }
        let sourceFile = sourceFiles[0];
        let contractDefn = sourceFile.ast
            .descendantsOfType(AST.ContractDefn)
            .find((x) => x.name.text === name);
        let env = this.envs[sourceFile.file];
        let inter = new ast2intermediate_1.AST2Intermediate();
        sourceFile.ast.descendantsOfType(AST.InterfaceDefn).map(i => inter.translateInterface(i));
        sourceFile.ast.descendantsOfType(AST.ContractDefn).map(i => inter.translateContractDefn(i));
        return new ast2rust_1.AST2Rust(env, inter).translateContractDefn(contractDefn);
    }
}
exports.CWScriptCodegen = CWScriptCodegen;
//# sourceMappingURL=codegen.js.map