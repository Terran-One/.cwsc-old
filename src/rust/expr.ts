import { Rust, RefType } from './common';
import { Type } from './type';

export abstract class Expr implements Rust {
  public get rustType(): Type {
    return new Type.Unknown();
  }

  asType(type: Type): Expr.As {
    return new Expr.As(this, type);
  }

  q(): Expr.Q {
    return new Expr.Q(this);
  }

  ref(mut: boolean = false): Expr.Ref {
    return new Expr.Ref(mut ? RefType.MUT : RefType.REF, this);
  }

  mut(): Expr.Mut {
    return new Expr.Mut(this);
  }

  fnCall(fnName: string, args: any, typeParams: Type[] = []): Expr.FnCall {
    let fn_tps = '';
    if (typeParams.length > 0) {
      fn_tps = `::<${typeParams.map(x => x.toRustString()).join(', ')}>`;
    }
    return new Expr.FnCall(`${this.toRustString()}.${fnName}${fn_tps}`, args);
  }

  dot(member: string): Expr.Dot {
    return new Expr.Dot(this, member);
  }

  toRustString(): string {
    throw new Error(
      `${this.constructor.name}.toRustString() implementation is missing`
    );
  }
}

export namespace Expr {
  export class Dot extends Expr {
    constructor(public expr: Expr, public member: string) {
      super();
    }

    toRustString(): string {
      return `${this.expr.toRustString()}.${this.member}`;
    }
  }

  export class As extends Expr {
    public get rustType(): Type {
      return this.castedType;
    }

    constructor(public inner: Expr, public castedType: Type) {
      super();
    }

    toRustString(): string {
      return `(${this.inner.toRustString()} as ${this.castedType.toRustString()})`;
    }
  }

  export class Mut extends Expr {
    public get rustType(): Type.Mut {
      return new Type.Mut(this.inner.rustType);
    }

    constructor(public inner: Expr) {
      super();
    }

    toRustString(): string {
      return `(mut ${this.inner.toRustString()})`;
    }
  }

  export class Ref extends Expr {
    public get rustType(): Type.Ref {
      return new Type.Ref(this.refType, this.inner.rustType);
    }

    constructor(public refType: RefType, public inner: Expr) {
      super();
    }

    toRustString(): string {
      return `(${this.refType} ${this.inner.toRustString()})`;
    }

    isMut(): boolean {
      return this.refType === RefType.MUT;
    }
  }

  export class Q extends Expr {
    constructor(public inner: Expr) {
      super();
    }

    toRustString(): string {
      return `(${this.inner.toRustString()})?`;
    }
  }

  export class FnCall extends Expr {
    constructor(
      public path: string,
      public args: any[],
      public typeParams: Type[] = []
    ) {
      super();
    }

    toRustString(): string {
      return `${this.path}(${this.args.map(x => x.toRustString()).join(', ')})`;
    }
  }

  export class Path extends Expr {
    constructor(public path: string) {
      super();
    }

    toRustString(): string {
      return this.path;
    }
  }
}
