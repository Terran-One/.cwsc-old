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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const yesno_1 = __importDefault(require("yesno"));
const commander_1 = require("commander");
const process_1 = require("process");
const manager_1 = require("../../project/manager");
const lodash_1 = require("lodash");
exports.command = new commander_1.Command('new');
// short form
exports.command.description('Create a new CWScript project');
exports.command.argument('<name>', 'The name of the project.');
exports.command.argument('[dir]', 'The directory to create the project in.');
exports.command.action((name, dir) => __awaiter(void 0, void 0, void 0, function* () {
    let currentDir = (0, process_1.cwd)();
    let projectDir;
    if (!!dir) {
        if (path.isAbsolute(dir)) {
            projectDir = dir;
        }
        else {
            projectDir = path.resolve(currentDir, dir);
        }
    }
    else {
        projectDir = path.resolve(currentDir, (0, lodash_1.kebabCase)(name));
    }
    console.log(`Creating project ${name} in ${projectDir}`);
    if (fs.existsSync(projectDir)) {
        let response = yield (0, yesno_1.default)({
            question: `Directory ${projectDir} already exists. Continue?`,
        });
        if (!response) {
            console.log('Aborting.');
            return;
        }
    }
    if (manager_1.CWSProjectManager.isProject(projectDir)) {
        let response = yield (0, yesno_1.default)({
            question: `Directory ${projectDir} is already a CWScript project. Continue?`,
        });
        if (!response) {
            console.log('Aborting.');
            return;
        }
    }
    manager_1.CWSProjectManager.createNewProject(name, projectDir);
    console.log(`Project ${name} created in ${projectDir}`);
}));
exports.default = exports.command;
//# sourceMappingURL=new.js.map