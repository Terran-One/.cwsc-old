import * as Rust from '../rust';

export class Type {}

export namespace Type {
  export class Integer extends Type {}

  export class Decimal extends Type {}

  export class String extends Type {}

  export class Boolean extends Type {}

  export class None extends Type {}

  export class Vector extends Type {
    constructor(public elementType: Type) {
      super();
    }
  }

  export class Option extends Type {
    constructor(public inner: Type) {
      super();
    }
  }

  export class Struct extends Type {
    constructor(
      public name: string,
      public members: Array<{ name: string; option: boolean; type: Type }>
    ) {
      super();
    }
  }

  export class TypeAlias extends Type {
    constructor(public name: string, public type: Type) {
      super();
    }
  }

  export class Unknown extends Type {}

  export class RustBuiltin extends Type {
    constructor(public ty: Rust.Type) {
      super();
    }
  }
}
