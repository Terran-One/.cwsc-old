export class IfStmt {
  constructor(public cond: Expr, public body: Stmt[]) {}

  toString() {}
}
