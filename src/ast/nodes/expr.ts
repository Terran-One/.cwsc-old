import { AST, List, TypePath } from './';

// TODO: change
export type Expr = any;

export class Ident extends AST {
  constructor(ctx: any, public text: string) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class StateItemAccessExpr extends AST {
  constructor(ctx: any, public key: Ident) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class StateMapAccessExpr extends AST {
  constructor(ctx: any, public key: Ident, public mapKeys: List<Expr>) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class MemberAccessExpr extends AST {
  constructor(ctx: any, public lhs: Expr, public member: Ident) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class TableLookupExpr extends AST {
  constructor(ctx: any, public lhs: Expr, public key: Expr) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class PosArgsFnCallExpr extends AST {
  constructor(ctx: any, public fn: Expr, public args: List<Expr>) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class NamedArgsFnCallExpr extends AST {
  constructor(ctx: any, public fn: Expr, public args: List<NamedExpr>) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class UnaryExpr extends AST {
  constructor(ctx: any, public op: string, public expr: Expr) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class ExpExpr extends AST {
  constructor(ctx: any, public lhs: Expr, public rhs: Expr) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class ArithmeticOpExpr extends AST {
  constructor(ctx: any, public lhs: Expr, public op: string, public rhs: Expr) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class CompOpExpr extends AST {
  constructor(ctx: any, public lhs: Expr, public op: string, public rhs: Expr) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class AndExpr extends AST {
  constructor(ctx: any, public lhs: Expr, public rhs: Expr) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class OrExpr extends AST {
  constructor(ctx: any, public lhs: Expr, public rhs: Expr) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class QueryExpr extends AST {
  constructor(ctx: any, public expr: Expr) {
    super(ctx);
    this.setParentForChildren();
  }
}

// AST to structuretatements

//@Node()
export class UnitVal extends AST {
  constructor(ctx: any) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class StructVal extends AST {
  constructor(
    ctx: any,
    public type: TypePath,
    public members: List<StructValMember>
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class StructValMember extends AST {
  constructor(ctx: any, public name: Ident, public value: Expr) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class NamedExpr extends AST {
  constructor(ctx: any, public name: Ident, public value: Expr) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class TupleVal extends AST {
  constructor(ctx: any, public type: TypePath, public members: List<Expr>) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class VecVal extends AST {
  constructor(ctx: any, public elements: List<Expr>) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class StringVal extends AST {
  constructor(ctx: any, public value: string) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class IntegerVal extends AST {
  constructor(ctx: any, public value: string) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class DecimalVal extends AST {
  constructor(ctx: any, public value: string) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class BoolVal extends AST {
  constructor(ctx: any, public value: boolean) {
    super(ctx);
    this.setParentForChildren();
  }
}
