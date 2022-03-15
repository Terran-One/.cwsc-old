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

export type IR = StateMapLoad | StateMapSave | MemberAccess | Ident | BinaryOp;

export class TranspilerCtx {
  constructor(public items: any[] = [], public tmpVarCount: number = 0) {}

  makeTmpVar() {
    return `__${this.tmpVarCount++}`;
  }

  lastVar() {
    return `__${this.tmpVarCount - 1}`;
  }

  eval(expr: IR): string {
    this.items.push(this.toRust(expr));
    return `&${this.lastVar()}`;
  }

  output(...items: any) {
    let out = this.makeTmpVar();
    return `let ${out} = ${items.join('')};`;
  }

  transpile(ir: IR): string {
    this.eval(ir);
    return this.items.join('\n');
  }

  toRust(e: IR) {
    switch (e.$type) {
      case 'StateMapLoad': {
        let skUpper = e.key.toUpperCase();
        let i0 = this.eval(e.mapKey);
        return this.output(skUpper, '.load(&__deps.storage,', i0, ')?');
      }
      case 'StateMapSave': {
        let skUpper = e.key.toUpperCase();
        let i0 = this.eval(e.mapKey);
        let i1 = this.eval(e.value);
        return this.output(
          skUpper,
          '.save(&mut __deps.storage,',
          i0,
          ',',
          i1,
          ')?'
        );
      }
      case 'MemberAccess': {
        let i0 = this.eval(e.lhs);
        return this.output(i0, '.', e.member, '.clone()');
      }
      case 'Ident': {
        return this.output(e.name);
      }
      case 'BinaryOp': {
        let i0 = this.eval(e.lhs);
        let i1 = this.eval(e.rhs);
        return this.output(i0, ` ${e.op} `, i1);
      }
      default:
        throw new Error('not implemented');
    }
  }
}

import * as fs from 'fs';
import * as yaml from 'yaml';
let tree = fs.readFileSync('ir-code.yml');
tree = yaml.parse(tree.toString());

const ctx = new TranspilerCtx();
console.log(ctx.transpile(tree as any));
