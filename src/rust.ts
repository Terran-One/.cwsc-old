import { BailErrorStrategy } from 'antlr4ts';

interface Rust {
  toRust(): string;
}

export class RustBase implements Rust {
  toRust(): string {
    return '';
  }

  q(): Q {
    return new Q(this);
  }
}

export class Q extends RustBase {
  constructor(public inner: Rust) {
    super();
  }

  toRust(): string {
    return `${this.inner.toRust()}?`;
  }
}

enum Viz {
  PUBLIC = 'pub ',
  PRIVATE = '',
}

export class ModDefn extends RustBase {
  constructor(public viz: Viz, public name: string, public body: Rust[]) {
    super();
  }
  toRust(): string {
    return `${this.viz}mod ${this.name} {${this.body
      .map(x => x.toRust())
      .join('\n')}}`;
  }
}

export type EnumVariant =
  | EnumVariantStruct
  | EnumVariantTuple
  | EnumVariantUnit;

export class EnumVariantStruct extends RustBase {
  constructor(public name: string, public members: StructMember[]) {
    super();
  }
  toRust(): string {
    return `${this.name} { ${this.members.map(x => x.toRust()).join(', ')} }`;
  }
}

export class EnumVariantTuple extends RustBase {
  constructor(public name: string, public members: Rust[]) {
    super();
  }
  toRust(): string {
    return `${this.name}(${this.members.map(x => x.toRust()).join(', ')})`;
  }
}

export class EnumVariantUnit extends RustBase {
  constructor(public name: string) {
    super();
  }
  toRust(): string {
    return this.name;
  }
}

export class StructMember extends RustBase {
  constructor(public name: string, public type: TypePath) {
    super();
  }
  toRust(): string {
    return `${this.name}: ${this.type.toRust()}`;
  }
}

export class Enum extends RustBase {
  constructor(public name: string, public variants: EnumVariant[]) {
    super();
  }
}

export class FnArg extends RustBase {
  constructor(public name: string, public type: TypePath) {
    super();
  }
  toRust(): string {
    return `${this.name}: ${this.type.toRust()}`;
  }
}

export class TypePath extends RustBase {
  public pathElements: string[] = [];
  constructor(public root: boolean, ...pathElements: string[]) {
    super();
    this.pathElements = pathElements;
  }

  toRust(): string {
    return (this.root ? `::` : '') + this.pathElements.join('::');
  }
}

export class FnDefn extends RustBase {
  constructor(
    public viz: Viz,
    public name: string,
    public args: Array<FnArg> = [],
    public returnType: TypePath | null = null,
    public body: Rust[] = []
  ) {
    super();
  }

  toRust(): string {
    let res = '';
    res += this.viz;
    res += `fn ${this.name}`;
    res += `(${this.args.map(x => x.toRust()).join(', ')})`;
    if (this.returnType !== null) {
      res += ` -> ${this.returnType.toRust()}`;
    }
    res += ` {\n`;
    res += this.body.map(x => `  ${x.toRust()}`).join('\n');
    res += `\n}`;
    return res;
  }
}

export class FnCall extends RustBase {
  constructor(public path: string, public args: Rust[]) {
    super();
  }

  toRust(): string {
    return `${this.path}(${this.args.map(x => x.toRust()).join(', ')})`;
  }
}

export class LetStmt extends RustBase {
  constructor(
    public name: string,
    public isMut: boolean = false,
    public value?: Rust,
    public type?: TypePath
  ) {
    super();
  }
  toRust(): string {
    let res = 'let ';
    if (this.isMut) {
      res += 'mut ';
    }
    res += `${this.name}`;
    if (this.type !== undefined) {
      res += `: ${this.type.toRust()}`;
    }
    if (this.value !== undefined) {
      res += ` = ${this.value.toRust()}`;
    }
    return res;
  }
}

export class Verbatim extends RustBase {
  constructor(public value: string) {
    super();
  }

  toRust(): string {
    return this.value;
  }
}

const r = [
  new LetStmt('x', false, new Verbatim('1').q()),
  new LetStmt('y', true, new Verbatim('2').q()),
];

console.log(r.map(x => x.toRust()).join('\n'));
