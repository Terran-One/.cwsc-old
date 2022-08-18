import * as AST from '../ast/nodes';
import { ContrExpr, ExecDecl, ExecDefn, Ident, ShortVecTypeExpr, VecVal } from '../ast/nodes';

type Contr = { ident: Ident, addr: Ident, inter: string };
type Addr = { name: string };
type Type = Addr & {types: string[] };
type Vec = { type: string };
type Arg = { name: string, option: boolean, type: Type };
type ExecDec = { name: string, args: Arg[] };
type ExecDef = { name: string, args: Arg[], contrs: Contr[] };

export type Interface = { name: string, execs: ExecDef[] };
export type Contract = { name: string, execs: ExecDef[] };

export class AST2Intermediate {
    public interfaces = new Map<string, Interface>();
    public contracts = new Map<string, Contract>();

    translateInterface(iface: AST.InterfaceDefn) {
        this.interfaces.set(iface.name.text as string, {
            name: iface.name.text,
            execs: iface.body.descendantsOfType(ExecDecl).map(x => this.translate(x))
        } as Interface);
    }

    translateContractDefn(contract: AST.ContractDefn) {
        this.contracts.set(contract.name.text, {
            name: contract.name.text, execs: contract.body.descendantsOfType(ExecDefn).map(x => this.translate(x))
        });
    }

    translateExecDecl(exec: AST.ExecDecl): ExecDec {
        return { name: exec.name!.text, args: exec.args.elements.map(x => this.translate(x)) };
    }

    translateExecDefn(exec: AST.ExecDefn): ExecDef {
        const lets = exec.body.elements.filter(e => e instanceof AST.LetStmt).filter(e => e.rhs instanceof ContrExpr);
        return {
          name: exec.name!.text,
          args: exec.args.elements.map(x => this.translate(x)),
          contrs: lets.map(l => ({ ident: l.lhs.name, addr: l.rhs.expr, inter: l.rhs.contr.text }))
        };
    }
    
    translateFnArg(arg: AST.FnArg): Arg {
        return { name: arg.name.text, option: arg.option, type: this.translate(arg.type) };
    }

    translateTypePath(type: AST.TypePath): Type {
        return { name: type.toString(), types: type.paths.map(p => p.text) }
    }

    translateAddrExpr(addr: AST.AddrExpr): Addr {
        return { name: addr.type.toString() };
    }

    translateShortVecTypeExpr(vec: AST.ShortVecTypeExpr): Vec {
        return { type: vec.type.toString() };
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
