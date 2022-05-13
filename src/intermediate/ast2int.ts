import * as AST from '../ast/nodes';
import { ExecDefn } from '../ast/nodes';

export type _interface = {
    name: string,
    execs: [{ args: [{ name: string }] }]
}

export type contract = {
    name: string,
    execs: [{ args: [{ type: { types: string[] } }] }]
}

export class AST2Int {
    public interfaces = new Map<string, _interface>();
    public contracts = new Map<string, contract>();

    translateInterface(iface: AST.InterfaceDefn) {
        this.interfaces.set(iface.name.text as string, {
            name: iface.name.text,
            execs: iface.body.elements.filter(x => x.constructor.name == 'ExecDecl').map(x => this.translate(x))
        } as _interface);
    }

    translateExecDecl(exec: AST.ExecDecl): any {
        return { name: exec.name!.text, args: exec.args.elements.map(x => this.translate(x)) };
    }

    translateExecDefn(exec: AST.ExecDefn): any {
        return { name: exec.name!.text, args: exec.args.elements.map(x => this.translate(x)) };
    }
    
    translateFnArg(arg: AST.FnArg): any {
        return { name: arg.name.text, option: arg.option, type: this.translate(arg.type) };
    }

    translateTypePath(type: AST.TypePath) {
        return { name: type.toString() }
    }

    translateContractDefn(contract: AST.ContractDefn) {
        this.contracts.set(contract.name.text, {
            name: contract.name.text, execs: contract.body.descendantsOfType(ExecDefn).map(x => this.translate(x))
        });
    }

    translateParamzdTypeExpr(pte: AST.ParamzdTypeExpr) {
        return { name: pte.type.toString(), types: pte.params.map(x => x.toString()) };
    }

    translate(ast: AST.AST) {
        let astType = ast.constructor.name;
        if (`translate${astType}` in this) {
            return (this as any)[`translate${astType}`](ast);
        } else {
            throw new Error(`Could not translate AST type: ${astType}`);
        }
    }
}
