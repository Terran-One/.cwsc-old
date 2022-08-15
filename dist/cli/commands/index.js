"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const new_1 = __importDefault(require("./new"));
const build_1 = __importDefault(require("./build"));
const tool_1 = __importDefault(require("./tool"));
const config_1 = __importDefault(require("./config"));
const test_1 = __importDefault(require("./test"));
const debug_1 = __importDefault(require("./debug"));
const validate_1 = __importDefault(require("./validate"));
const compile_1 = __importDefault(require("./compile"));
exports.default = [
    new_1.default,
    build_1.default,
    test_1.default,
    debug_1.default,
    config_1.default,
    validate_1.default,
    tool_1.default,
    compile_1.default,
];
//# sourceMappingURL=index.js.map