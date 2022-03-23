import * as Rust from '../rust';
import * as AST from '../ast/node-types';

import { C_TYPES } from '../codegen/helpers';

export class CWScriptSymbol {}

export namespace CWScriptSymbol {
  export class LocalVariable extends CWScriptSymbol {
    constructor(public type: AST.TypeExpr, public value: Rust.Expr) {
      super();
    }
  }
  export class UserDefinedStruct extends CWScriptSymbol {
    constructor(
      public name: string,
      public members: { [key: string]: Rust.Type }
    ) {
      super();
    }

    public get rustType(): Rust.Type {
      return C_TYPES.join(this.name).toType();
    }
  }

  export class UserDefinedEnum extends CWScriptSymbol {
    constructor(
      public name: string,
      public variants: { [key: string]: Rust.Defn.Struct }
    ) {
      super();
    }

    public get rustType(): Rust.Type {
      return C_TYPES.join(this.name).toType();
    }
  }

  export class UserDefinedTypeAlias extends CWScriptSymbol {
    constructor(public name: string, public type: Rust.Type) {
      super();
    }

    public get rustType(): Rust.Type {
      return C_TYPES.join(this.name).toType();
    }
  }

  export class BuiltinType extends CWScriptSymbol {
    constructor(public rustType: Rust.Type) {
      super();
    }
  }

  export class StateItem extends CWScriptSymbol {
    constructor(public key: string, public type: Rust.Type) {
      super();
    }
  }

  export class StateMap extends CWScriptSymbol {
    constructor(public ast: AST.MapDefn) {
      super();
    }
  }
}
