import * as IR from './ir';
import * as AST from './ast';

export interface FileSource {
  file: string;
  ast: AST.SourceFile;
}

export type Source = FileSource;

export class CWScriptCodegen {
  constructor(public sources: Source[]) {}

  generateContract(name: string, file?: string) {
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

    let execDefns = contractDefn.descendantsOfType(AST.ExecDefn);
    let exec: any = {};
    execDefns.forEach(xdefn => {
      let ast2ir = new AST2IR();
      exec[xdefn.name!.text] = {
        args: [],
        returnType: xdefn.returnType,
        body: xdefn.body.elements.map(x => ast2ir.translate(x)),
      };
    });
    return {
      exec,
    };
  }
}

export class AST2IR {
  translate(ast: AST.AST): IR.IR {
    if (ast instanceof AST.AssignStmt) {
      return {
        $type: ast.constructor.name,
        name: 'hi',
      };
    }
    if (ast instanceof AST.EmitStmt) {
      return {
        $type: ast.constructor.name,
        name: 'hi',
      };
    }
    if (ast instanceof AST.IfExpr) {
      return {
        $type: ast.constructor.name,
        name: 'hi',
      };
    }
    if (ast instanceof AST.LetStmt) {
      return {
        $type: ast.constructor.name,
        name: 'hi',
      };
    }

    if (ast instanceof AST.ExecStmt) {
      return {
        $type: 'Ident',
        name: 'hi',
      };
    }

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

  cond(predicate: any, true_branch: any, false_branch: any) {
    let true_ctx = new IR2Rust();
    let false_ctx = new IR2Rust();
    let i0 = true_ctx.translate(true_branch);
    let res = `if (${predicate}) {\n${i0}\n}`;
    if (!!false_branch) {
      let i1 = false_ctx.translate(false_branch);
      res += ` else {\n${i1}\n}`;
    }
    this.items.push(res);
  }

  translate(items: IR.IR[]): string {
    items.forEach(item => {
      this.eval(item);
    });
    return this.items.join('\n');
  }

  eval(e: IR.IR) {
    switch (e.$type) {
      case 'StateMapLoad': {
        let skUpper = e.key.toUpperCase();
        let i0 = this.eval(e.mapKey);
        this.output(skUpper, '.load(&__deps.storage,', '&', i0, ')?');
        break;
      }
      case 'StateMapSave': {
        let skUpper = e.key.toUpperCase();
        let i0 = this.eval(e.mapKey);
        let i1 = this.eval(e.value);
        this.output(
          skUpper,
          '.save(&mut __deps.storage,',
          '&',
          i0,
          ',',
          '&',
          i1,
          ')?'
        );
        break;
      }
      case 'StateItemLoad': {
        let skUpper = e.key.toUpperCase();
        this.output(skUpper, '.load(&deps.storage)?');
        break;
      }
      case 'StateItemSave': {
        let skUpper = e.key.toUpperCase();
        let i0 = this.eval(e.value);
        this.output(skUpper, `.load(&mut deps.storage, &${i0})?`);
        break;
      }
      case 'MemberAccess': {
        let i0 = this.eval(e.lhs);
        this.output(i0, '.', e.member, '.clone()');
        break;
      }
      case 'Ident': {
        this.output('&', e.name);
        break;
      }
      case 'BinaryOp': {
        let i0 = this.eval(e.lhs);
        let i1 = this.eval(e.rhs);
        this.output(i0, ` ${e.op} `, i1);
        break;
      }
      case 'Condition': {
        let i0 = this.eval(e.predicate);
        this.cond(i0, e.true_branch, e.false_branch);
        break;
      }
      case 'NoneVal': {
        this.output('None');
        break;
      }
      case 'Fail': {
        this.items.push(`return Err(${e.error_type} {});`);
        break;
      }
      case 'MemberAssign': {
        let i0 = this.eval(e.lhs);
        let i1 = this.eval(e.rhs);
        this.items.push(`${i0}.${e.member} = ${i1};`);
        break;
      }
      case 'FnCall': {
        let i0 = this.eval(e.function);
        let args = e.args.map(arg => this.eval(arg));
        this.output(`${i0}(`, args.join(', '), `)`);
        break;
      }
      default:
        // @ts-ignore
        throw new Error(`not implemented ${e.$type}`);
    }

    return this.lastVar();
  }
}
