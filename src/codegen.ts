import * as IR from './ir';
import * as AST from './ast';
import { ContractModel } from './model';

export interface FileSource {
  file: string;
  ast: AST.SourceFile;
}

export type Source = FileSource;

export class CWScriptCodegen {
  constructor(public sources: Source[]) {}

  generateContract(name: string, file?: string): string {
    let sourceFiles = this.sources.filter(
      source =>
        source.ast
          .descendantsOfType(AST.ContractDefn)
          .find(contract => contract.name.text === name) !== undefined
    );

    if (sourceFiles.length > 1) {
      throw new Error(
        `Multiple source files found for contract ${name}.` +
          ` Please disambiguate which file to use.`
      );
    }

    if (sourceFiles.length === 0) {
      throw new Error(`No source file found for contract ${name}.`);
    }

    let sourceFile = sourceFiles[0];
    let contractDefn = sourceFile.ast
      .descendantsOfType(AST.ContractDefn)
      .find(x => x.name.text === name)!;

    let contractModel = ContractModel.fromAST(contractDefn);
    return contractModel.toRust();
  }
}

export class AST2IR {
  translateEmitStmt(ast: AST.EmitStmt): any {
    return new IR.EmitEvent(ast.expr.constructor.name, []);
  }

  translateIdent(ast: AST.Ident): any {
    return new IR.GetRustSymbol(ast.text);
  }

  translateSpecialVariable(ast: AST.Ext.SpecialVariable): any {
    return new IR.GetRustSymbol(ast.ns + '.' + ast.member);
  }

  translateAssignStmt(ast: AST.AssignStmt): any {
    if (ast.lhs instanceof AST.StateItemAssignLHS) {
      return new IR.AssignStateItem(ast.lhs.key.text, this.translate(ast.rhs));
    }

    if (ast.lhs instanceof AST.StateMapAssignLHS) {
      return new IR.AssignStateMap(
        ast.lhs.key.text,
        ast.lhs.mapKeys.map(x => this.translate(x)),
        this.translate(ast.rhs)
      );
    }

    if (ast.lhs instanceof AST.IdentAssignLHS) {
      return new IR.AssignIdent(ast.lhs.ident.text, this.translate(ast.rhs));
    }

    if (ast.lhs instanceof AST.MemberAssignLHS) {
      return new IR.AssignMember(
        this.translate(ast.lhs.obj),
        ast.lhs.member.text,
        this.translate(ast.rhs)
      );
    }

    if (ast.lhs instanceof AST.TableAssignLHS) {
      return new IR.AssignTable(
        this.translate(ast.lhs.table),
        this.translate(ast.lhs.key),
        this.translate(ast.rhs)
      );
    }

    // @ts-ignore
    throw new Error(`unsupported lhs: ${ast.lhs.constructor.name}`);
  }

  translate(ast: AST.AST): any {
    if (`translate${ast.constructor.name}` in AST2IR.prototype) {
      return (AST2IR.prototype as any)[`translate${ast.constructor.name}`](ast);
    }
    // return ast.constructor.name;
    throw new Error(
      `unsuppored AST -> IR translation (${ast.constructor.name})`
    );
  }
}
export class IR2Rust {
  constructor(public items: any[] = [], public tmpVarCount: number = 0) {}

  makeTmpVar() {
    return `__${this.tmpVarCount++}`;
  }

  lastVar() {
    return `__${this.tmpVarCount - 1}`;
  }

  output(...items: any) {
    let out = this.makeTmpVar();
    this.items.push(`let ${out} = ${items.join('')};`);
  }

  push(...items: any) {
    this.items.push(items);
  }

  cond(predicate: any, true_branch: any, false_branch: any) {
    let true_ctx = new IR2Rust();
    let false_ctx = new IR2Rust();
    let i0 = true_ctx.translate(true_branch);
    let res = `if (${predicate}) {\n${i0}\n}`;
    if (!!false_branch) {
      let i1 = false_ctx.translate(false_branch);
      res += ` else {\n${i1}\n}`;
    }
    this.push(res);
  }

  translate(items: IR.IR[]): string {
    items.forEach(item => {
      this.eval(item);
    });
    return this.items.join('\n');
  }

  eval(e: IR.IR, mut: boolean = false) {
    if (e instanceof IR.GetRustSymbol) {
      this.output(e.symbol);
    } else if (e instanceof IR.GetStructMember) {
      let i0 = this.eval(e.obj);
      this.output(i0, '.', e.member);
    } else if (e instanceof IR.AssignStateItem) {
      let skUpper = e.key.toUpperCase();
      let i0 = this.eval(e.rhs);
      this.output(skUpper, `.load(&mut deps.storage, &${i0})?`);
    } else if (e instanceof IR.AssignStateMap) {
      let skUpper = e.key.toUpperCase();
      let i0 = this.eval(e.mapKeys[0]);
      let i1 = this.eval(e.rhs);
      this.output(
        skUpper,
        '.save(&mut deps.storage,',
        '&',
        i0,
        ',',
        '&',
        i1,
        ')?'
      );
    } else if (e instanceof IR.AssignIdent) {
      let i0 = this.eval(e.rhs);
      this.push('let ', e.ident, ' = ', i0, ';');
      return e.ident;
    } else if (e instanceof IR.AssignMember) {
      let i0 = this.eval(e.obj);
      let i1 = this.eval(e.rhs);
      this.push(i0, '.', e.member, ' = ', i1);
    } else if (e instanceof IR.AssignTable) {
      let i0 = this.eval(e.table);
      let i1 = this.eval(e.key);
      let i2 = this.eval(e.rhs);
      this.push(i0, '[', i1, ']', ' = ', i2);
    } else if (e instanceof IR.LoadStateMap) {
      let skUpper = e.key.toUpperCase();
      let i0 = this.eval(e.mapKeys[0]);
      this.output(skUpper, '.load(&__deps.storage,', '&', i0, ')?');
    } else if (e instanceof IR.LoadStateItem) {
      let skUpper = e.key.toUpperCase();
      this.output(skUpper, '.load(&deps.storage)?');
    } else if (e instanceof IR.InfixOp) {
      let i0 = this.eval(e.rhs);
      let i1 = this.eval(e.lhs);
      this.output(i0, e.op, i1);
    } else if (e instanceof IR.Condition) {
      let i0 = this.eval(e.predicate);
      this.cond(i0, e.trueBranch, e.falseBranch);
    } else if (e instanceof IR.FnCall) {
      let i0 = this.eval(e.fn);
      let ix = e.args.map(x => this.eval(x));
      this.output(i0, '(', ix.join(', '), ')');
    } else if (e instanceof IR.ValNone) {
      this.output('None');
    } else if (e instanceof IR.Fail) {
      // TODO: implement
      this.output('return Err(', e.typeName, ' {})');
    }
    return this.lastVar();
  }
}
