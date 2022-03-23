import * as Rust from '../rust';

import {
  CWScriptParser,
  CwspecContext,
  IdentContext,
  LetStmt_Context,
  IdentLHSContext,
  StructUnpackLHSContext,
  InterfaceDefnContext,
  InterfaceItemContext,
  IdentListContext,
  SourceFileContext,
  ContractDefnContext,
  AssignStmtContext,
  FailStmtContext,
  ReturnStmtContext,
  EmitStmtContext,
  ExecStmtContext,
  EnumVariant_structContext,
  StructMemberContext,
  EnumVariant_tupleContext,
  ErrorDefnContext,
  ContractBodyContext,
  EventDefnContext,
  ErrorDefnBlockContext,
  ErrorDefnBlock_itemContext,
  EventDefnBlockContext,
  StateItemDefnContext,
  StateMapDefnContext,
  MapDefnKeyContext,
  StateDefnBlockContext,
  StateBlockItemDefnContext,
  InstantiateDefnContext,
  FnArgsContext,
  FnArgContext,
  FnBodyContext,
  NormalFnBodyContext,
  ArrowFnBodyContext,
  ExecDefnContext,
  QueryDefnContext,
  ExecDefnBlockContext,
  QueryDefnBlockContext,
  UnitValContext,
  FalseValContext,
  TrueValContext,
  IntegerValContext,
  DecimalValContext,
  StringValContext,
  TupleValContext,
  VecValContext,
  StructValContext,
  StructValMemberContext,
  QueryExprContext,
  OrExprContext,
  AndExprContext,
  EqExprContext,
  CompExprContext,
  AddSubExprContext,
  MultDivModExprContext,
  ExpExprContext,
  PosArgsFnCallExprContext,
  NamedArgsFnCallExprContext,
  NamedExprContext,
  TableLookupExprContext,
  MemberAccessExprContext,
  UnaryExprContext,
  IfLetClauseContext,
  IfExpr_Context,
  IfClauseContext,
  ForStmt_Context,
  InstantiateDeclContext,
  ExecDeclContext,
  QueryDeclContext,
  ExecDeclBlockContext,
  QueryDeclBlockContext,
  MigrateDeclContext,
  InterfaceBodyContext,
  MigrateDefnContext,
  TypePathContext,
  ParamzdTypeExprContext,
  TypeParamContext,
  TupleTypeExprContext,
  ShortOptionTypeExprContext,
  ShortVecTypeExprContext,
  RefTypeExprContext,
  ReflectiveTypeExprContext,
  GroupedExprContext,
  StructDefnContext,
  ImportAllStmtContext,
  ImportItemsStmtContext,
  ImportItemContext,
  AssignStmt_Context,
  IdentAssignLHSContext,
  MemberAssignLHSContext,
  StateMapAssignLHSContext,
  StateItemAssignLHSContext,
  TableAssignLHSContext,
  StateItemAccessExprContext,
  StateMapAccessExprContext,
  InnerAssignContext,
  InnerPathContext,
  FnDefnContext,
} from '../grammar/CWScriptParser';
import { CWScriptParserVisitor } from '../grammar/CWScriptParserVisitor';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Parser, ParserRuleContext, Token } from 'antlr4ts';
import { Tree, TreeList, toData } from '../util/tree';
import * as _ from 'lodash';
import { CWScriptEnv } from '../symbol-table/env';
import { Subspace } from '../symbol-table/scope';

export interface Position {
  a?: number;
  b?: number;
  length?: number;
  line?: number;
  column?: number;
}

export enum CodegenCtx {
  TypeName,
}

export abstract class AST extends Tree<AST> {
  private __position?: Position;

  public details(): string {
    return `${this.position?.line}:${this.position?.column}`;
  }

  constructor(
    __ctx?: ParserRuleContext,
    __parent?: AST,
    __position?: Position
  ) {
    super(__parent);
    if (__position === undefined) {
      let a = __ctx?.start?.startIndex;
      let b = __ctx?.stop?.stopIndex;
      let length = !!a && !!b ? b - a + 1 : undefined;
      __position = {
        a,
        b,
        length,
        line: __ctx?.start?.line,
        column: __ctx?.start?.charPositionInLine,
      };
    }
    this.__position = __position || undefined;
  }

  public get position(): Position | undefined {
    return this.__position;
  }

  public toData(): any {
    return toData(this, { position: (p: any) => p });
  }

  public validate(): boolean {
    return true;
  }
}

export class CWSpec extends AST {
  constructor(ctx: any, public text: string) {
    super(ctx);
    this.setParentForChildren();
  }
}

export class Ident extends AST {
  constructor(ctx: any, public text: string) {
    super(ctx);
    this.setParentForChildren();
  }
}

export class List<T extends AST> extends AST implements TreeList<AST> {
  constructor(ctx: any, public elements: T[]) {
    super(ctx);
    this.setParentForChildren();
  }

  public setParentForChildren(): void {
    this.elements.forEach(x => (x.parent = this));
  }

  public get children(): T[] {
    return Object.values(this.elements);
  }

  public map<U>(f: (x: T) => U): U[] {
    return this.elements.map(f);
  }
}

export type TypeExpr =
  | TypePath
  | ParamzdTypeExpr
  | TupleTypeExpr
  | ShortOptionTypeExpr
  | ShortVecTypeExpr
  | RefTypeExpr
  | ReflectiveTypeExpr
  | StructDefn
  | TupleStructDefn
  | EnumDefn
  | TypeAliasDefn;

export class TypePath extends AST {
  constructor(ctx: any, public root: boolean, public paths: List<Ident>) {
    super(ctx);
    this.setParentForChildren();
  }

  public toString(): string {
    return this.paths.map(x => x.text).join('::');
  }
}

export class ParamzdTypeExpr extends AST {
  constructor(ctx: any, public type: TypeExpr, public params: List<TypeExpr>) {
    super(ctx);
    this.setParentForChildren();
  }
}

export class TupleTypeExpr extends AST {
  constructor(ctx: any, public members: List<TypeExpr>) {
    super(ctx);
    this.setParentForChildren();
  }
}

export class ShortOptionTypeExpr extends AST {
  constructor(ctx: any, public type: TypeExpr) {
    super(ctx);
    this.setParentForChildren();
  }
}

export class ShortVecTypeExpr extends AST {
  constructor(ctx: any, public type: TypeExpr) {
    super(ctx);
    this.setParentForChildren();
  }
}

export class RefTypeExpr extends AST {
  constructor(ctx: any, public type: TypeExpr) {
    super(ctx);
    this.setParentForChildren();
  }
}

export class ReflectiveTypeExpr extends AST {
  constructor(ctx: any, public type: TypeExpr, public member: Ident) {
    super(ctx);
    this.setParentForChildren();
  }
}

export class StructDefn extends AST {
  constructor(
    ctx: any,
    public spec: CWSpec | undefined,
    public name: Ident,
    public members: List<StructMember>
  ) {
    super(ctx);
    this.setParentForChildren();
  }

  public toString(): string {
    return `${this.name.text}`;
  }

  // public toRust(env: CWScriptEnv, context?: CodegenCtx): Rust.Rust {
  //   let s = new Rust.Defn.Struct([], Rust.STRUCT, this.name.text);
  //   this.members.elements.forEach(x => {
  //     s.addMember(
  //       new Rust.Defn.StructMember(
  //         [],
  //         x.name.text,
  //         x.type.toRust(env, context) as Rust.Type
  //       )
  //     );
  //   });
  //   return s;
  // }
}

export class TupleStructDefn extends AST {
  constructor(
    ctx: any,
    public spec: CWSpec | undefined,
    public name: Ident,
    public members: List<TypeExpr>
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

export class EnumDefn extends AST {
  constructor(
    ctx: any,
    public spec: CWSpec | undefined,
    public name: Ident,
    public variants: List<EnumVariant>
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

export class TypeAliasDefn extends AST {
  constructor(
    ctx: any,
    public spec: CWSpec | undefined,
    public name: Ident,
    public type: TypeExpr
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

export class SourceFile extends AST {
  constructor(
    ctx: any,
    public spec: CWSpec | undefined,
    public stmts: List<TopLevelStmt>
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

type TopLevelStmt = InterfaceDefn | ContractDefn | ImportStmt;

//@Node()
export class ImportStmt extends AST {
  constructor(ctx: any, public fileName: string) {
    super(ctx);
    this.setParentForChildren();
  }
}

export class ImportAllStmt extends ImportStmt {
  constructor(ctx: any, public fileName: string) {
    super(ctx, fileName);
    this.setParentForChildren();
  }
}

export class ImportItemsStmt extends ImportStmt {
  constructor(
    ctx: any,
    public fileName: string,
    public items: List<ImportItem>
  ) {
    super(ctx, fileName);
    this.setParentForChildren();
  }
}

//@Node()
export class ImportItem extends AST {
  constructor(ctx: any, public symbol: Ident, public alias?: Ident) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class InterfaceDefn extends AST {
  constructor(
    ctx: any,
    public spec: CWSpec | undefined,
    public name: Ident,
    public body: List<InterfaceItem>,
    public baseInterfaces?: List<Ident>
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class ContractDefn extends AST {
  constructor(
    ctx: any,
    public spec: CWSpec | undefined,
    public name: Ident,
    public body: List<ContractItem>,
    public baseContracts?: List<Ident>,
    public interfaces?: List<Ident>
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

export type InterfaceItem =
  | ErrorDefn
  | List<ErrorDefn>
  | EventDefn
  | List<EventDefn>
  | StateDefn
  | List<StateDefn>
  | InstantiateDecl
  | ExecDecl
  | List<ExecDecl>
  | QueryDecl
  | List<QueryDecl>
  | MigrateDecl;
export type ContractItem =
  | ErrorDefn
  | List<ErrorDefn>
  | EventDefn
  | List<EventDefn>
  | StateDefn
  | List<StateDefn>
  | InstantiateDefn
  | ExecDefn
  | List<ExecDefn>
  | QueryDefn
  | List<QueryDefn>
  | MigrateDefn;

//@Node()
export class ErrorDefn extends StructDefn {}

//@Node()
export class EventDefn extends StructDefn {}

export class StateDefn extends AST {
  constructor(ctx: any, public key: Ident, public type: TypeExpr) {
    super();
  }
}

//@Node()
export class ItemDefn extends StateDefn {
  constructor(
    ctx: any,
    public spec: CWSpec | undefined,
    key: Ident,
    type: TypeExpr
  ) {
    super(ctx, key, type);
    this.setParentForChildren();
  }
}

//@Node()
export class MapDefn extends StateDefn {
  constructor(
    ctx: any,
    public spec: CWSpec | undefined,
    key: Ident,
    public mapKeys: List<MapDefnKey>,
    type: TypeExpr
  ) {
    super(ctx, key, type);
    this.setParentForChildren();
  }
}

//@Node()
export class MapDefnKey extends AST {
  constructor(ctx: any, public name: Ident | undefined, public type: TypeExpr) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class FnDefn extends AST {
  constructor(
    ctx: any,
    public spec: CWSpec | undefined,
    public name: Ident | undefined,
    public args: List<FnArg>,
    public returnType: TypeExpr | undefined,
    public body: List<Stmt>
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class InstantiateDefn extends FnDefn {}

//@Node()
export class ExecDefn extends FnDefn {}

//@Node()
export class QueryDefn extends FnDefn {}

export class MigrateDefn extends FnDefn {}

export class FnDecl extends AST {
  constructor(
    ctx: any,
    public spec: CWSpec | undefined,
    public name: Ident | undefined,
    public args: List<FnArg>,
    public returnType: TypeExpr | undefined
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

export class InstantiateDecl extends FnDecl {}

export class ExecDecl extends FnDecl {}

export class QueryDecl extends FnDecl {}

export class MigrateDecl extends FnDecl {}

//@Node()
export class FnArg extends AST {
  constructor(
    ctx: any,
    public name: Ident,
    public option: boolean,
    public type: TypeExpr
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

//TODO: change
type Stmt = any;

//@Node()
export class LetStmt extends AST {
  constructor(ctx: any, public lhs: LetLHS, public rhs: Expr) {
    super(ctx);
    this.setParentForChildren();
  }
}

export type LetLHS = IdentLHS | StructUnpackLHS;

//@Node()
export class IdentLHS extends AST {
  constructor(ctx: any, public name: Ident, public type?: TypeExpr) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class StructUnpackLHS extends AST {
  constructor(ctx: any, public names: List<Ident>) {
    super(ctx);
    this.setParentForChildren();
  }
}

export type AssignLHS =
  | IdentAssignLHS
  | MemberAssignLHS
  | TableAssignLHS
  | StateItemAssignLHS
  | StateMapAssignLHS;

//@Node()
export class AssignStmt extends AST {
  constructor(
    ctx: any,
    public lhs: AssignLHS,
    public assignOp: string,
    public rhs: Expr
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class IdentAssignLHS extends AST {
  constructor(ctx: any, public ident: Ident) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class MemberAssignLHS extends AST {
  constructor(ctx: any, public obj: Expr, public member: Ident) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class TableAssignLHS extends AST {
  constructor(ctx: any, public table: Expr, public key: Expr) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class InnerPath extends AST {
  constructor(ctx: any, public name: Ident, public tableKey?: Expr) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class StateItemAssignLHS extends AST {
  constructor(ctx: any, public key: Ident, public inner?: List<InnerPath>) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class StateMapAssignLHS extends AST {
  constructor(
    ctx: any,
    public key: Ident,
    public mapKeys: List<Expr>,
    public inner?: List<InnerPath>
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class IfExpr extends AST {
  constructor(
    ctx: any,
    public ifClause: IfClauseVariant,
    public elseIfClauses: List<IfClauseVariant>,
    public elseClause: List<Stmt>
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

type IfClauseVariant = IfClause | IfLetClause;

//@Node()
export class IfClause extends AST {
  constructor(ctx: any, public predicate: Expr, public body: List<Stmt>) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class IfLetClause extends AST {
  constructor(ctx: any, public letStmt: LetStmt, public body: List<Stmt>) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class ForInStmt extends AST {
  constructor(
    ctx: any,
    public lhs: LetLHS,
    public iterable: Expr,
    public body: List<Stmt>
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class ForTimesStmt extends AST {
  constructor(ctx: any, public expr: Expr, public body: List<Stmt>) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class ExecStmt extends AST {
  constructor(ctx: any, public expr: Expr) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class EmitStmt extends AST {
  constructor(ctx: any, public expr: Expr) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class ReturnStmt extends AST {
  constructor(ctx: any, public expr: Expr) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class FailStmt extends AST {
  constructor(ctx: any, public expr: Expr) {
    super(ctx);
    this.setParentForChildren();
  }
}

// TODO: change
export type Expr = any;

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

type EnumVariant = EnumVariantStruct | EnumVariantTuple;

//@Node()
export class EnumVariantStruct extends AST {
  constructor(
    ctx: any,
    public name: Ident,
    public members: List<StructMember>
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
export class EnumVariantTuple extends AST {
  constructor(ctx: any, public name: Ident, public members: List<TypeExpr>) {
    super(ctx);
    this.setParentForChildren();
  }
}

//@Node()
// export class EnumVariantUnit extends AST {
//   constructor(ctx: any, public name: Ident) {
//     super(ctx);
//     this.setParentForChildren();
//   }
// }

//@Node()
export class StructMember extends AST {
  constructor(
    ctx: any,
    public spec: CWSpec | undefined,
    public name: Ident,
    public option: boolean,
    public type: TypeExpr
  ) {
    super(ctx);
    this.setParentForChildren();
  }
}

export class EmptyAST extends AST {}

export namespace Ext {
  export class ExtAST extends AST {}
  export class State extends ExtAST {
    constructor(public key: string) {
      super();
      this.setParentForChildren();
    }
  }

  export class SpecialVariable extends ExtAST {
    constructor(public ns: string, public member: string) {
      super();
      this.setParentForChildren();
    }
  }
}

export class CWScriptASTVisitor extends AbstractParseTreeVisitor<AST>
  implements CWScriptParserVisitor<AST> {
  protected defaultResult(): AST {
    return new EmptyAST();
  }

  visitSourceFile(ctx: SourceFileContext): SourceFile {
    let stmts = ctx.topLevelStmt() || [];
    return new SourceFile(
      ctx,
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      new List(
        ctx.topLevelStmt(),
        stmts.map(stmt => this.visit(stmt)) as Stmt[]
      )
    );
  }

  visitImportAllStmt(ctx: ImportAllStmtContext): ImportAllStmt {
    let fileName = ctx._fileName.text!.replace(/^["'](.+(?=["']$))["']$/, '$1');
    return new ImportAllStmt(ctx, fileName);
  }

  visitImportItem(ctx: ImportItemContext): ImportItem {
    return new ImportItem(
      ctx,
      this.visitIdent(ctx._symbol),
      ctx._alias ? this.visitIdent(ctx._alias) : undefined
    );
  }

  visitImportItemsStmt(ctx: ImportItemsStmtContext): ImportItemsStmt {
    let fileName = ctx._fileName.text!.replace(/^["'](.+(?=["']$))["']$/, '$1');
    let items = ctx._items._importItems.map(item => this.visitImportItem(item));

    return new ImportItemsStmt(ctx, fileName, new List(ctx, items));
  }

  visitTypePath(ctx: TypePathContext): TypePath {
    let root = ctx._root ? true : false;
    let paths = ctx.pathList().ident() || [];
    return new TypePath(
      ctx,
      root,
      new List(
        ctx,
        paths.map(path => this.visitIdent(path))
      )
    );
  }

  visitParamzdTypeExpr(ctx: ParamzdTypeExprContext): ParamzdTypeExpr {
    return new ParamzdTypeExpr(
      ctx,
      this.visit(ctx.typeExpr()) as TypeExpr,
      new List(
        ctx.typeParam(),
        ctx
          .typeParam()
          .typeExpr()
          .map(expr => this.visit(expr)) as TypeExpr[]
      )
    );
  }

  visitTupleTypeExpr(ctx: TupleTypeExprContext): TupleTypeExpr {
    return new TupleTypeExpr(
      ctx,
      new List(ctx, ctx.typeExpr().map(expr => this.visit(expr)) as TypeExpr[])
    );
  }

  visitShortOptionTypeExpr(
    ctx: ShortOptionTypeExprContext
  ): ShortOptionTypeExpr {
    return new ShortOptionTypeExpr(ctx, this.visit(ctx.typeExpr()) as TypeExpr);
  }

  visitShortVecTypeExpr(ctx: ShortVecTypeExprContext): ShortVecTypeExpr {
    return new ShortVecTypeExpr(ctx, this.visit(ctx.typeExpr()) as TypeExpr);
  }

  visitRefTypeExpr(ctx: RefTypeExprContext): RefTypeExpr {
    return new RefTypeExpr(ctx, this.visit(ctx.typeExpr()) as TypeExpr);
  }

  visitReflectiveTypeExpr(ctx: ReflectiveTypeExprContext): ReflectiveTypeExpr {
    return new ReflectiveTypeExpr(
      ctx,
      this.visit(ctx.typeExpr()) as TypeExpr,
      this.visitIdent(ctx.ident())
    );
  }

  visitIdent(ctx: IdentContext): Ident {
    return new Ident(ctx, ctx.text);
  }

  visitIdentList(ctx: IdentListContext): List<Ident> {
    return new List(
      ctx,
      ctx._symbols.map(x => this.visitIdent(x))
    );
  }

  visitCwspec(ctx: CwspecContext): CWSpec {
    return new CWSpec(ctx, ctx.text);
  }

  visitInterfaceBody(ctx: InterfaceBodyContext): List<InterfaceItem> {
    let items = ctx.interfaceItem() || [];
    return new List(ctx, items.map(x => this.visit(x)) as ContractItem[]);
  }

  visitInterfaceDefn(ctx: InterfaceDefnContext): InterfaceDefn {
    return new InterfaceDefn(
      ctx,
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      this.visitIdent(ctx._name),
      this.visitInterfaceBody(ctx.interfaceBody()),
      ctx._baseInterfaces ? this.visitIdentList(ctx._baseInterfaces) : undefined
    );
  }

  visitContractBody(ctx: ContractBodyContext): List<ContractItem> {
    let items = ctx.contractItem() || [];
    return new List(ctx, items.map(x => this.visit(x)) as ContractItem[]);
  }

  visitContractDefn(ctx: ContractDefnContext): ContractDefn {
    return new ContractDefn(
      ctx,
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      this.visitIdent(ctx._name),
      this.visitContractBody(ctx.contractBody()),
      ctx._baseContracts ? this.visitIdentList(ctx._baseContracts) : undefined,
      ctx._interfaces ? this.visitIdentList(ctx._interfaces) : undefined
    );
  }

  visitStructMember(ctx: StructMemberContext): StructMember {
    return new StructMember(
      ctx,
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      this.visitIdent(ctx._name),
      ctx._option ? true : false,
      this.visit(ctx._valueType) as TypeExpr
    );
  }

  visitStructDefn(ctx: StructDefnContext): StructDefn | TupleStructDefn {
    let enumVariant = ctx.enumVariant();
    let variants = {
      struct: enumVariant.enumVariant_struct(),
      tuple: enumVariant.enumVariant_tuple(),
    };

    if (variants.struct !== undefined) {
      let x = this.visitEnumVariant_struct(variants.struct);

      return new StructDefn(
        ctx,
        ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
        x.name,
        x.members
      );
    } else if (variants.tuple !== undefined) {
      let x = this.visitEnumVariant_tuple(variants.tuple);
      return new TupleStructDefn(
        ctx,
        ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
        x.name,
        x.members
      );
    }

    throw new Error('Unreachable');
  }

  visitEnumVariant_struct(ctx: EnumVariant_structContext): EnumVariantStruct {
    let parenStructMembers = ctx.parenStructMembers();
    let curlyStructMembers = ctx.curlyStructMembers();

    if (parenStructMembers !== undefined) {
      return new EnumVariantStruct(
        ctx,
        this.visitIdent(ctx._name),
        new List(
          parenStructMembers,
          parenStructMembers.structMember().map(x => this.visitStructMember(x))
        )
      );
    } else if (curlyStructMembers !== undefined) {
      return new EnumVariantStruct(
        ctx,
        this.visitIdent(ctx._name),
        new List(
          curlyStructMembers,
          curlyStructMembers.structMember().map(x => this.visitStructMember(x))
        )
      );
    } else {
      throw new Error('unreachable');
    }
  }

  visitEnumVariant_tuple(ctx: EnumVariant_tupleContext): EnumVariantTuple {
    return new EnumVariantTuple(
      ctx,
      this.visitIdent(ctx._name),
      new List(
        ctx.tupleMembers(),
        ctx
          .tupleMembers()
          .typeExpr()
          .map(x => this.visit(x) as TypeExpr)
      )
    );
  }

  // visitEnumVariant_unit(ctx: EnumVariant_unitContext): EnumVariantUnit {
  //   return new EnumVariantUnit(ctx, this.visitIdent(ctx._name));
  // }

  visitErrorDefn(ctx: ErrorDefnContext): ErrorDefn {
    let struct = this.visitEnumVariant_struct(ctx.enumVariant_struct());

    return new ErrorDefn(
      ctx,
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      struct.name,
      struct.members
    );
  }

  visitEventDefn(ctx: EventDefnContext): EventDefn {
    let struct = this.visitEnumVariant_struct(ctx.enumVariant_struct());

    return new EventDefn(
      ctx,
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      struct.name,
      struct.members
    );
  }

  visitErrorDefnBlock(ctx: ErrorDefnBlockContext): List<ErrorDefn> {
    let defns = ctx.errorDefnBlock_item() || [];
    return new List(
      ctx,
      defns.map(x => this.visitErrorDefn(x as ErrorDefnContext))
    );
  }

  visitEventDefnBlock(ctx: EventDefnBlockContext): List<EventDefn> {
    let defns = ctx.eventDefnBlock_item() || [];
    return new List(
      ctx,
      defns.map(x => this.visitEventDefn(x as EventDefnContext))
    );
  }

  visitStateItemDefn(ctx: StateItemDefnContext): ItemDefn {
    let item = ctx._item;
    return new ItemDefn(
      ctx,
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      this.visitIdent(item._key),
      this.visit(item._valueType) as TypeExpr
    );
  }

  visitStateMapDefn(ctx: StateMapDefnContext): MapDefn {
    let map = ctx._map;
    let mapKeys = ctx._map._mapKeys.mapDefnKey() || [];
    return new MapDefn(
      ctx,
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      this.visitIdent(map._key),
      new List(
        ctx._map._mapKeys,
        mapKeys.map(x => this.visitMapDefnKey(x))
      ),
      this.visit(map._valueType) as TypeExpr
    );
  }

  visitStateDefnBlock(ctx: StateDefnBlockContext): List<StateDefn> {
    let items = ctx.stateDefnBlock_item() || [];
    return new List(
      ctx,
      items.map(x => {
        if (x instanceof StateBlockItemDefnContext) {
          return this.visitStateItemDefn(x as StateItemDefnContext);
        } else {
          return this.visitStateMapDefn(x as StateMapDefnContext);
        }
      }) as StateDefn[]
    );
  }

  visitMapDefnKey(ctx: MapDefnKeyContext): MapDefnKey {
    return new MapDefnKey(
      ctx,
      ctx._keyName ? this.visitIdent(ctx._keyName) : undefined,
      this.visit(ctx._keyType) as TypeExpr
    );
  }

  visitFnArgs(ctx: FnArgsContext): List<FnArg> {
    let fnArgs = ctx.fnArgList()?.fnArg() || [];
    return new List(
      ctx,
      fnArgs.map(x => this.visitFnArg(x))
    );
  }

  visitFnArg(ctx: FnArgContext): FnArg {
    return new FnArg(
      ctx,
      this.visitIdent(ctx._argName),
      ctx._option ? true : false,
      this.visit(ctx._argType) as TypeExpr
    );
  }

  visitNormalFnBody(ctx: NormalFnBodyContext): List<Stmt> {
    let stmts = ctx.stmt() || [];
    return new List(ctx, stmts.map(x => this.visit(x)) as Stmt[]);
  }

  visitArrowFnBody(ctx: ArrowFnBodyContext): List<Stmt> {
    let stmt = ctx.stmt();
    return stmt
      ? new List(ctx, [this.visit(stmt)])
      : new List<Stmt>(ctx.stmt(), []);
  }

  visitFnDefn(ctx: FnDefnContext): FnDefn {
    let fn = ctx.namedFnDefn();
    let fnType = fn.fnType();
    return new ExecDefn(
      ctx,
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      this.visitIdent(fn._fnName),
      this.visitFnArgs(fn.fnArgs()),
      fnType ? (this.visit(fnType) as TypeExpr) : undefined,
      this.visit(fn.fnBody()) as List<Stmt>
    );
  }

  visitInstantiateDefn(ctx: InstantiateDefnContext): InstantiateDefn {
    let fnType = ctx.fnType();
    return new InstantiateDefn(
      ctx,
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      undefined,
      this.visitFnArgs(ctx.fnArgs()),
      fnType ? (this.visit(fnType) as TypeExpr) : undefined,
      this.visit(ctx.fnBody()) as List<Stmt>
    );
  }

  visitExecDefn(ctx: ExecDefnContext): ExecDefn {
    let fn = ctx.namedFnDefn();
    let fnType = fn.fnType();
    return new ExecDefn(
      ctx,
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      this.visitIdent(fn._fnName),
      this.visitFnArgs(fn.fnArgs()),
      fnType ? (this.visit(fnType) as TypeExpr) : undefined,
      this.visit(fn.fnBody()) as List<Stmt>
    );
  }

  visitExecDefnBlock(ctx: ExecDefnBlockContext): List<ExecDefn> {
    let defns = ctx.execDefnBlock_item() || [];
    return new List(
      ctx,
      defns.map(x => this.visitExecDefn(x as ExecDefnContext))
    );
  }

  visitQueryDefn(ctx: QueryDefnContext): QueryDefn {
    let fn = ctx.namedFnDefn();
    let fnType = fn.fnType();
    return new QueryDefn(
      ctx,
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      this.visitIdent(fn._fnName),
      this.visitFnArgs(fn.fnArgs()),
      fnType ? (this.visit(fnType) as TypeExpr) : undefined,
      this.visit(fn.fnBody()) as List<Stmt>
    );
  }

  visitMigrateDefn(ctx: MigrateDefnContext): MigrateDefn {
    let fnType = ctx.fnType();
    return new MigrateDefn(
      ctx,
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      undefined,
      this.visitFnArgs(ctx.fnArgs()),
      fnType ? (this.visit(fnType) as TypeExpr) : undefined,
      this.visit(ctx.fnBody()) as List<Stmt>
    );
  }

  visitQueryDefnBlock(ctx: QueryDefnBlockContext): List<QueryDefn> {
    let defns = ctx.queryDefnBlock_item() || [];
    return new List(
      ctx,
      defns.map(x => this.visitQueryDefn(x as QueryDefnContext))
    );
  }

  visitInstantiateDecl(ctx: InstantiateDeclContext): InstantiateDecl {
    let fnType = ctx.fnType();
    return new InstantiateDecl(
      ctx,
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      undefined,
      this.visitFnArgs(ctx.fnArgs()),
      fnType ? (this.visit(fnType) as TypeExpr) : undefined
    );
  }

  visitExecDecl(ctx: ExecDeclContext): ExecDecl {
    let fn = ctx.namedFnDecl();
    let fnType = fn.fnType();
    return new ExecDecl(
      ctx,
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      this.visitIdent(fn._fnName),
      this.visitFnArgs(fn.fnArgs()),
      fnType ? (this.visit(fnType) as TypeExpr) : undefined
    );
  }

  visitExecDeclBlock(ctx: ExecDeclBlockContext): List<ExecDecl> {
    let defns = ctx.execDeclBlock_item() || [];
    return new List(
      ctx,
      defns.map(x => this.visitExecDecl(x as ExecDeclContext))
    );
  }

  visitQueryDecl(ctx: QueryDeclContext): QueryDecl {
    let fn = ctx.namedFnDecl();
    let fnType = fn.fnType();
    return new QueryDecl(
      ctx,
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      this.visitIdent(fn._fnName),
      this.visitFnArgs(fn.fnArgs()),
      fnType ? (this.visit(fnType) as TypeExpr) : undefined
    );
  }

  visitQueryDeclBlock(ctx: QueryDeclBlockContext): List<QueryDecl> {
    let defns = ctx.queryDeclBlock_item() || [];
    return new List(
      ctx,
      defns.map(x => this.visitQueryDecl(x as QueryDeclContext))
    );
  }

  visitMigrateDecl(ctx: MigrateDeclContext): MigrateDecl {
    let fnType = ctx.fnType();
    return new MigrateDecl(
      ctx,
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      undefined,
      this.visitFnArgs(ctx.fnArgs()),
      fnType ? (this.visit(fnType) as TypeExpr) : undefined
    );
  }

  visitUnitVal(ctx: UnitValContext): UnitVal {
    return new UnitVal(ctx);
  }

  visitTrueVal(ctx: TrueValContext): BoolVal {
    return new BoolVal(ctx, true);
  }

  visitFalseVal(ctx: FalseValContext): BoolVal {
    return new BoolVal(ctx, false);
  }

  visitIntegerVal(ctx: IntegerValContext): IntegerVal {
    return new IntegerVal(ctx, ctx.text);
  }

  visitDecimalVal(ctx: DecimalValContext): DecimalVal {
    return new DecimalVal(ctx, ctx.text);
  }

  visitStringVal(ctx: StringValContext): StringVal {
    return new StringVal(ctx, ctx.text);
  }

  visitTupleVal(ctx: TupleValContext): TupleVal {
    let type = this.visit(ctx._tupleType) as TypePath;
    let items = ctx.exprList().expr() || [];
    return new TupleVal(
      ctx,
      type,
      new List(
        ctx.exprList(),
        items.map(x => this.visit(x))
      )
    );
  }

  visitVecVal(ctx: VecValContext): VecVal {
    let items = ctx.exprList().expr() || [];
    return new VecVal(
      ctx,
      new List(
        ctx.exprList(),
        items.map(x => this.visit(x) as Expr)
      )
    );
  }

  visitStructVal(ctx: StructValContext): StructVal {
    let structVal = ctx.structVal_();
    let type = this.visit(structVal._structType) as TypePath;
    let members = structVal.structValMembers()?.structValMember() || [];
    return new StructVal(
      ctx,
      type,
      new List(
        structVal.structValMembers(),
        members.map(x => this.visitStructValMember(x))
      )
    );
  }

  visitStructValMember(ctx: StructValMemberContext): StructValMember {
    return new StructValMember(
      ctx,
      this.visitIdent(ctx._name),
      this.visit(ctx._value) as Expr
    );
  }

  visitQueryExpr(ctx: QueryExprContext): QueryExpr {
    return new QueryExpr(ctx, this.visit(ctx.expr()));
  }

  visitOrExpr(ctx: OrExprContext): OrExpr {
    let lhs = this.visit(ctx.expr(0));
    let rhs = this.visit(ctx.expr(1));
    return new OrExpr(ctx, lhs, rhs);
  }

  visitAndExpr(ctx: AndExprContext): AndExpr {
    let lhs = this.visit(ctx.expr(0));
    let rhs = this.visit(ctx.expr(1));
    return new AndExpr(ctx, lhs, rhs);
  }

  visitEqExpr(ctx: EqExprContext): CompOpExpr {
    let lhs = this.visit(ctx.expr(0));
    let rhs = this.visit(ctx.expr(1));
    return new CompOpExpr(ctx, lhs, ctx._op.text as string, rhs);
  }

  visitCompExpr(ctx: CompExprContext): CompOpExpr {
    let lhs = this.visit(ctx.expr(0));
    let rhs = this.visit(ctx.expr(1));
    return new CompOpExpr(ctx, lhs, ctx._op.text as string, rhs);
  }

  visitAddSubExpr(ctx: AddSubExprContext): ArithmeticOpExpr {
    let lhs = this.visit(ctx.expr(0));
    let rhs = this.visit(ctx.expr(1));
    return new ArithmeticOpExpr(ctx, lhs, ctx._op.text as string, rhs);
  }

  visitMultDivModExpr(ctx: MultDivModExprContext): ArithmeticOpExpr {
    let lhs = this.visit(ctx.expr(0));
    let rhs = this.visit(ctx.expr(1));
    return new ArithmeticOpExpr(ctx, lhs, ctx._op.text as string, rhs);
  }

  visitExprExpr(ctx: ExpExprContext): ExpExpr {
    let lhs = this.visit(ctx.expr(0));
    let rhs = this.visit(ctx.expr(1));
    return new ExpExpr(ctx, lhs, rhs);
  }

  visitUnaryExpr(ctx: UnaryExprContext): UnaryExpr {
    let expr = this.visit(ctx.expr());
    return new UnaryExpr(ctx, ctx._op.text as string, expr);
  }

  visitPosArgsFnCallExpr(ctx: PosArgsFnCallExprContext): PosArgsFnCallExpr {
    let fn = this.visit(ctx.expr());
    let args = ctx.exprList()?.expr() || [];
    return new PosArgsFnCallExpr(
      ctx,
      fn,
      new List(
        ctx.exprList(),
        args.map(x => this.visit(x))
      )
    );
  }

  visitNamedArgsFnCallExpr(
    ctx: NamedArgsFnCallExprContext
  ): NamedArgsFnCallExpr {
    let fn = this.visit(ctx.expr());
    let args = ctx.namedExprList()?.namedExpr() || [];
    return new NamedArgsFnCallExpr(
      ctx,
      fn,
      new List(
        ctx.namedExprList(),
        args.map(x => this.visitNamedExpr(x))
      )
    );
  }

  visitNamedExpr(ctx: NamedExprContext): NamedExpr {
    return new NamedExpr(
      ctx,
      this.visitIdent(ctx._name),
      this.visit(ctx._value)
    );
  }

  visitGroupedExpr(ctx: GroupedExprContext): Expr {
    return this.visit(ctx.expr());
  }

  visitStateItemAccessExpr(
    ctx: StateItemAccessExprContext
  ): StateItemAccessExpr {
    return new StateItemAccessExpr(ctx, this.visitIdent(ctx._key));
  }

  visitStateMapAccessExpr(ctx: StateMapAccessExprContext): StateMapAccessExpr {
    let mapKeys = new List(
      ctx,
      ctx._mapKeys.map(x => this.visit(x))
    );
    return new StateMapAccessExpr(ctx, this.visitIdent(ctx._key), mapKeys);
  }

  visitTableLookupExpr(ctx: TableLookupExprContext): TableLookupExpr {
    let table = this.visit(ctx.expr(0));
    let key = this.visit(ctx.expr(1));
    return new TableLookupExpr(ctx, table, key);
  }

  visitMemberAccessExpr(
    ctx: MemberAccessExprContext
  ): MemberAccessExpr | Ext.State | Ext.SpecialVariable {
    let obj = this.visit(ctx.expr());
    let member = this.visitIdent(ctx.ident());

    if (obj instanceof Ident) {
      switch (obj.text) {
        case 'state':
          return new Ext.State(member.text);
        case 'msg':
        case 'api':
        case 'env':
          return new Ext.SpecialVariable(obj.text, member.text);
        default:
          break;
      }
    }
    return new MemberAccessExpr(ctx, obj, member);
  }

  visitIfExpr_(ctx: IfExpr_Context): IfExpr {
    let ifClause = this.visit(ctx.ifClause_()) as IfClauseVariant;
    let elseIfClauses =
      ctx
        .elseIfClauses()
        ?.ifClause_()
        .map(x => this.visit(x) as IfClauseVariant) || [];
    let elseClause = ctx.elseClause()?.fnBody();
    return new IfExpr(
      ctx,
      ifClause,
      new List(ctx.elseIfClauses(), elseIfClauses),
      elseClause
        ? (this.visit(elseClause) as List<Stmt>)
        : new List<Stmt>(ctx.elseClause(), [])
    );
  }

  visitIfClause(ctx: IfClauseContext): IfClause {
    return new IfClause(
      ctx,
      this.visit(ctx._predicate),
      this.visit(ctx.fnBody()) as List<Stmt>
    );
  }

  visitIfLetClause(ctx: IfLetClauseContext): IfLetClause {
    return new IfLetClause(
      ctx,
      this.visit(ctx.letStmt_()) as LetStmt,
      this.visit(ctx.fnBody()) as List<Stmt>
    );
  }

  visitExecStmt(ctx: ExecStmtContext): ExecStmt {
    return new ExecStmt(ctx, this.visit(ctx.expr()));
  }

  visitReturnStmt(ctx: ReturnStmtContext): ReturnStmt {
    return new ReturnStmt(ctx, this.visit(ctx.expr()));
  }

  visitEmitStmt(ctx: EmitStmtContext): EmitStmt {
    return new EmitStmt(ctx, this.visit(ctx.expr()));
  }

  visitFailStmt(ctx: FailStmtContext): FailStmt {
    return new FailStmt(ctx, this.visit(ctx.expr()));
  }

  visitAssignStmt_(ctx: AssignStmt_Context): AssignStmt {
    let assignOp = ctx._assignOp.text!;
    let lhs = this.visit(ctx._lhs) as AssignLHS;
    let rhs = this.visit(ctx._rhs);
    return new AssignStmt(ctx, lhs, assignOp, rhs);
  }

  visitInnerPath(ctx: InnerPathContext): InnerPath {
    return new InnerPath(
      ctx,
      this.visitIdent(ctx._name),
      ctx._tableKey ? this.visit(ctx._tableKey) : undefined
    );
  }

  visitStateItemAssignLHS(ctx: StateItemAssignLHSContext): StateItemAssignLHS {
    return new StateItemAssignLHS(
      ctx,
      this.visitIdent(ctx.ident()),
      ctx._inner
        ? new List(
            ctx,
            ctx._inner._paths.map(x => this.visitInnerPath(x))
          )
        : undefined
    );
  }

  visitStateMapAssignLHS(ctx: StateMapAssignLHSContext): StateMapAssignLHS {
    let key = this.visitIdent(ctx._key);
    let mapKeys = new List(
      ctx._mapKeys,
      ctx._mapKeys.map(x => this.visit(x))
    );
    return new StateMapAssignLHS(
      ctx,
      key,
      mapKeys,
      ctx._inner
        ? new List(
            ctx,
            ctx._inner._paths.map(x => this.visitInnerPath(x))
          )
        : undefined
    );
  }

  visitIdentAssignLHS(ctx: IdentAssignLHSContext): IdentAssignLHS {
    return new IdentAssignLHS(ctx, this.visitIdent(ctx.ident()));
  }

  visitMemberAssignLHS(ctx: MemberAssignLHSContext): MemberAssignLHS {
    return new MemberAssignLHS(
      ctx,
      this.visit(ctx._obj),
      this.visitIdent(ctx._member)
    );
  }

  visitTableAssignLHS(ctx: TableAssignLHSContext): TableAssignLHS {
    return new TableAssignLHS(
      ctx,
      this.visit(ctx._table),
      this.visit(ctx._key)
    );
  }

  visitLetStmt_(ctx: LetStmt_Context): LetStmt {
    return new LetStmt(
      ctx,
      this.visit(ctx.letLHS()) as LetLHS,
      this.visit(ctx.expr()) as Expr
    );
  }

  visitIdentLHS(ctx: IdentLHSContext): IdentLHS {
    let typeExpr = ctx.typeExpr();
    return new IdentLHS(
      ctx,
      this.visitIdent(ctx.ident()),
      typeExpr ? (this.visit(typeExpr) as TypeExpr) : undefined
    );
  }

  visitStructUnpackLHS(ctx: StructUnpackLHSContext): StructUnpackLHS {
    return new StructUnpackLHS(ctx, this.visit(ctx.identList()) as List<Ident>);
  }
}
