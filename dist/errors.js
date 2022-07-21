"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceValidationError = exports.ASTValidationError = void 0;
class ASTValidationError extends Error {
    constructor(message, astNode, childNode) {
        super(message);
        this.message = message;
        this.astNode = astNode;
        this.childNode = childNode;
    }
}
exports.ASTValidationError = ASTValidationError;
class SourceValidationError extends Error {
    constructor(message, file, position) {
        super(message);
        this.message = message;
        this.file = file;
        this.position = position;
    }
}
exports.SourceValidationError = SourceValidationError;
//# sourceMappingURL=errors.js.map