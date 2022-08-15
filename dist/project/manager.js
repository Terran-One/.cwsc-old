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
exports.CWSProjectManager = exports.CWSProjectConfig = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const toml = __importStar(require("@iarna/toml"));
class CWSProjectConfig {
    constructor(config) {
        this.config = config;
    }
    static read(filePath) {
        let config = toml.parse(fs.readFileSync(filePath, 'utf8'));
        if (CWSProjectConfig.validate(config)) {
            return new CWSProjectConfig(config);
        }
        else {
            throw new Error(`Invalid cwsproject.toml project configuration: ${filePath}`);
        }
    }
    static validate(config) {
        try {
            return true;
        }
        catch (e) {
            return false;
        }
    }
    write(filePath) {
        fs.writeFileSync(filePath, toml.stringify(this.config));
    }
}
exports.CWSProjectConfig = CWSProjectConfig;
class CWSProjectManager {
    constructor(fpath) {
        this.rootPath = path.resolve(fpath);
    }
    static createNewProject(name, dir) {
        let pRoot = path.resolve(dir);
        let pSrc = path.join(pRoot, 'src');
        let pCwsprojectToml = path.join(pRoot, 'cwsproject.toml');
        fs.mkdirSync(pSrc, { recursive: true });
        fs.writeFileSync(pCwsprojectToml, toml.stringify({ project: { name } }));
        return new CWSProjectManager(pRoot);
    }
    static isProject(dir) {
        return fs.existsSync(path.join(dir, 'cwsproject.toml'));
    }
    static readProject(dir) {
        if (CWSProjectManager.isProject(dir)) {
            return new CWSProjectManager(dir);
        }
        else {
            throw new Error(`${dir} is not a CWScript project. Run 'cwsc new' to create a new project.`);
        }
    }
    getConfig() {
        let pCwsprojectToml = path.join(this.rootPath, 'cwsproject.toml');
        return CWSProjectConfig.read(pCwsprojectToml);
    }
}
exports.CWSProjectManager = CWSProjectManager;
//# sourceMappingURL=manager.js.map