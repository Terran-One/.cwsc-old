import { IntType } from './common';
import { Type } from './type';
import { Expr } from './expr';

export class Val extends Expr {}

export namespace Val {
  export class StrLiteral extends Val {
    public get rustType(): Type.Str {
      return new Type.Str(true);
    }

    constructor(public value: string) {
      super();
    }

    toRustString(): string {
      return `"${this.value}"`;
    }
  }

  export class StructMember {
    constructor(public name: string, public value: Expr) {}

    toRustString(): string {
      return `${this.name}: ${this.value.toRustString()}`;
    }
  }

  export class Struct extends Val {
    public get rustType(): Type {
      return this.structType;
    }

    constructor(public structType: Type, public members: StructMember[] = []) {
      super();
    }

    assignMember(name: string, value: Expr): Struct {
      this.members = this.members.map(x => {
        if (x.name === name) {
          return new StructMember(name, value);
        } else {
          return x;
        }
      });
      return this;
    }

    toRustString(): string {
      return `${this.structType.toRustString()} { ${this.members
        .map(x => x.toRustString())
        .join(', ')} }`;
    }
  }

  export class Vec extends Val {
    public get rustType(): Type.Vec {
      return new Type.Vec(this.values[0].rustType);
    }

    constructor(public values: Expr[]) {
      super();
    }

    toRustString(): string {
      return `vec![${this.values.map(x => x.toRustString()).join(', ')}]`;
    }
  }

  export class Tuple extends Val {
    public get rustType(): Type.Tuple {
      return new Type.Tuple(this.members.map(x => x.rustType));
    }

    constructor(public members: Expr[]) {
      super();
    }

    toRustString(): string {
      return `(${this.members.map(x => x.toRustString()).join(', ')})`;
    }
  }

  export class IntLiteral extends Val {
    public get rustType(): Type.Int {
      return new Type.Int(this.intType);
    }

    constructor(public intType: IntType, public value: string) {
      super();
    }

    toRustString(): string {
      return `${this.value}${this.intType}`;
    }
  }

  export class BoolLiteral extends Val {
    public get rustType(): Type.Bool {
      return new Type.Bool();
    }

    constructor(public value: boolean) {
      super();
    }

    toRustString(): string {
      if (this.value) {
        return 'true';
      } else {
        return 'false';
      }
    }
  }
}
