export interface MemberAssign {
  $type: 'MemberAssign';
  lhs: IR;
  member: string;
  rhs: IR;
}
export interface StateMapLoad {
  $type: 'StateMapLoad';
  key: string;
  mapKey: IR;
}

export interface StateMapSave {
  $type: 'StateMapSave';
  key: string;
  mapKey: IR;
  value: IR;
}

export interface StateItemLoad {
  $type: 'StateItemLoad';
  key: string;
}

export interface StateItemSave {
  $type: 'StateItemSave';
  key: string;
  value: IR;
}

export interface MemberAccess {
  $type: 'MemberAccess';
  lhs: IR;
  member: string;
}

export interface Ident {
  $type: 'Ident';
  name: string;
}

export interface BinaryOp {
  $type: 'BinaryOp';
  op: string;
  lhs: IR;
  rhs: IR;
}

export interface FnCall {
  $type: 'FnCall';
  function: IR;
  args: IR[];
}

export interface EmitEvent {
  $type: 'EmitEvent';
  event_type: IR;
  event_attrs: IR[];
}

export interface NoneVal {
  $type: 'NoneVal';
}

export interface Fail {
  $type: 'Fail';
  error_type: string;
  error_args: IR[];
}

export interface Condition {
  $type: 'Condition';
  predicate: IR;
  true_branch: IR;
  false_branch: IR;
}

export type IR =
  | MemberAssign
  | StateItemLoad
  | StateItemSave
  | StateMapLoad
  | StateMapSave
  | FnCall
  | MemberAccess
  | Ident
  | BinaryOp
  | Condition
  | NoneVal
  | Fail;

export class TranspilerCtx {
  constructor(public items: any[] = [], public tmpVarCount: number = 0) {}

  makeTmpVar() {
    return `__${this.tmpVarCount++}`;
  }

  lastVar() {
    return `__${this.tmpVarCount - 1}`;
  }

  eval(expr: IR): string {
    this.translateToRust(expr);
    return `${this.lastVar()}`;
  }

  output(...items: any) {
    let out = this.makeTmpVar();
    this.items.push(`let ${out} = ${items.join('')};`);
  }

  cond(predicate: any, true_branch: any, false_branch: any) {
    let true_ctx = new TranspilerCtx();
    let false_ctx = new TranspilerCtx();
    let i0 = true_ctx.transpile(true_branch);
    let res = `if (${predicate}) {\n${i0}\n}`;
    if (!!false_branch) {
      let i1 = false_ctx.transpile(false_branch);
      res += ` else {\n${i1}\n}`;
    }
    this.items.push(res);
  }

  transpile(items: IR[]): string {
    items.forEach(item => {
      this.eval(item);
    });
    return this.items.join('\n');
  }

  translateToRust(e: IR) {
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
  }
}

import * as fs from 'fs';
import * as yaml from 'yaml';
let tree = fs.readFileSync('ir-code.yml');
tree = yaml.parse(tree.toString());

const ctx = new TranspilerCtx();
console.log('fn main() {\n');
console.log(ctx.transpile(tree as any));
console.log('}');
