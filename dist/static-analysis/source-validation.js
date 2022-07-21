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
exports.SourceValidationContext = exports.ValidationFinding = exports.Finding = exports.STD_AST_VALIDATIONS = exports.ValidateStateUsages = exports.ASTValidationPass = void 0;
const AST = __importStar(require("../ast/nodes"));
class ASTValidationPass {
    constructor(ctx) {
        this.ctx = ctx;
    }
    analyze(ast) {
        if (`validate${ast.constructor.name}` in this) {
            return this[`validate${ast.constructor.name}`](ast);
        }
        else {
            console.warn(`Ignored ${this.constructor.name} validation on ${ast.constructor.name}`);
        }
        return [];
    }
}
exports.ASTValidationPass = ASTValidationPass;
class ValidateStateUsages extends ASTValidationPass {
    analyze(ast) {
        let findings = [];
        let itemUsages = [
            ...ast.descendantsOfType(AST.StateItemAccessExpr),
            ...ast.descendantsOfType(AST.StateItemAssignLHS),
        ];
        let mapUsages = ast.descendantsOfType(AST.StateMapAssignLHS);
        for (let iu of itemUsages) {
            let contract = iu.nearestAncestorOfType(AST.ContractDefn);
            if (!this.stateItemDefinedInContract(iu.key, contract)) {
                findings.push(new ValidationFinding(Finding.Error, `State item (${iu.key.text}) is not defined in contract ${contract.name.text}.`, iu));
            }
        }
        for (let mu of mapUsages) {
            let contract = mu.nearestAncestorOfType(AST.ContractDefn);
            if (!this.stateMapDefinedInContract(mu.key, contract)) {
                findings.push(new ValidationFinding(Finding.Error, `State map (${mu.key.text}) is not defined in the contract ${contract.name.text}.`, mu));
            }
        }
        return findings;
    }
    stateItemDefinedInContract(key, contract) {
        for (let defn of contract.descendantsOfType(AST.ItemDefn)) {
            if (defn.key.text === key.text) {
                return true;
            }
        }
        return false;
    }
    stateMapDefinedInContract(key, contract) {
        for (let defn of contract.descendantsOfType(AST.MapDefn)) {
            if (defn.key.text === key.text) {
                return true;
            }
        }
        return false;
    }
}
exports.ValidateStateUsages = ValidateStateUsages;
exports.STD_AST_VALIDATIONS = [
    ValidateStateUsages,
];
var Finding;
(function (Finding) {
    Finding["Error"] = "error";
    Finding["Warning"] = "warning";
})(Finding = exports.Finding || (exports.Finding = {}));
class ValidationFinding {
    constructor(severity, message, node) {
        this.severity = severity;
        this.message = message;
        this.node = node;
    }
}
exports.ValidationFinding = ValidationFinding;
class SourceValidationContext {
    constructor(sources) {
        this.sources = sources;
        this.validations = exports.STD_AST_VALIDATIONS;
    }
    runValidations() {
        // build validators
        let report = {};
        let ast_validators = this.validations.map((x) => new x(this));
        for (const source of this.sources) {
            const ast = source.ast;
            for (const v of ast_validators) {
                let findings = v.analyze(ast);
                if (findings.length > 0) {
                    report[source.file] = findings;
                }
            }
        }
        return report;
    }
}
exports.SourceValidationContext = SourceValidationContext;
//# sourceMappingURL=source-validation.js.map