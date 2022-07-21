"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AST2Intermediate = void 0;
const nodes_1 = require("../ast/nodes");
class AST2Intermediate {
    constructor() {
        this.interfaces = new Map();
        this.contracts = new Map();
    }
    translateInterface(iface) {
        this.interfaces.set(iface.name.text, {
            name: iface.name.text,
            execs: iface.body.elements.filter(x => x.constructor.name == 'ExecDecl').map(x => this.translate(x))
        });
    }
    translateExecDecl(exec) {
        return { name: exec.name.text, args: exec.args.elements.map(x => this.translate(x)) };
    }
    translateExecDefn(exec) {
        return { name: exec.name.text, args: exec.args.elements.map(x => this.translate(x)) };
    }
    translateFnArg(arg) {
        return { name: arg.name.text, option: arg.option, type: this.translate(arg.type) };
    }
    translateTypePath(type) {
        return { name: type.toString() };
    }
    translateContractDefn(contract) {
        this.contracts.set(contract.name.text, {
            name: contract.name.text, execs: contract.body.descendantsOfType(nodes_1.ExecDefn).map(x => this.translate(x))
        });
    }
    translateParamzdTypeExpr(pte) {
        return { name: pte.type.toString(), types: pte.params.map(x => x.toString()) };
    }
    translate(ast) {
        let astType = ast.constructor.name;
        if (`translate${astType}` in this) {
            return this[`translate${astType}`](ast);
        }
        else {
            throw new Error(`Could not translate AST type: ${astType}`);
        }
    }
}
exports.AST2Intermediate = AST2Intermediate;
//# sourceMappingURL=ast2intermediate.js.map