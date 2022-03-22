import * as Rust from '../rust';
import * as AST from '../ast';

export class CWScriptSymbol {}

export namespace CWScriptSymbol {
  export class LocalVariable extends CWScriptSymbol {
    constructor(public name: string, public type: AST.TypeExpr) {
      super();
    }
  }
  export class UserDefinedStruct extends CWScriptSymbol {
    constructor(public defn: AST.StructDefn) {
      super();
    }
  }

  export class UserDefinedEnum extends CWScriptSymbol {
    constructor(public defn: AST.EnumDefn) {
      super();
    }
  }

  export class UserDefinedTypeAlias extends CWScriptSymbol {
    constructor(public defn: AST.TypeAliasDefn) {
      super();
    }
  }

  export class BuiltinType extends CWScriptSymbol {
    constructor(public rustType: Rust.Type) {
      super();
    }
  }

  export class StateItem extends CWScriptSymbol {
    constructor(public defn: AST.ItemDefn) {
      super();
    }
  }

  export class StateMap extends CWScriptSymbol {
    constructor(public defn: AST.MapDefn) {
      super();
    }
  }
}
