import {
  CWScriptParser,
  CwspecContext,
  IdentContext,
  InterfaceDefnContext,
  InterfaceItemContext,
  IdentListContext,
  SourceFileContext,
  InterfaceListContext,
  InterfaceValContext,
  ContractDefnContext,
  ImportSymbolContext,
  EnumVariant_structContext,
  StructMemberContext,
  EnumVariant_tupleContext,
  EnumVariant_unitContext,
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
} from './grammar/CWScriptParser';
import { CWScriptParserVisitor } from './grammar/CWScriptParserVisitor';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

export class AST {}

export class CWSpec extends AST {
  constructor(public text: string) {
    super();
  }
}

export class Ident extends AST {
  constructor(public text: string) {
    super();
  }
}

export class List<T extends AST> extends AST {
  constructor(public elements: T[]) {
    super();
  }
}

export class SourceFile extends AST {
  constructor(public spec?: any, public stmts?: List<TopLevelStmt>) {
    super();
  }
}

type TopLevelStmt = InterfaceDefn | ContractDefn | ImportStmt;

export class InterfaceVal extends AST {
  constructor(public name: Ident, public mixins?: List<Ident>) {
    super();
  }
}

export class ImportStmt extends AST {
  constructor(
    public fileName: string,
    public symbols?: List<ImportSymbol>,
    public star?: boolean
  ) {
    super();
  }
}

export class GroupedImportSymbol extends List<ImportSymbol> {}
export class TypePathImportSymbol extends AST {
  constructor(public path: TypePath) {
    super();
  }
}
export class DestructureImportSymbol extends AST {
  constructor(public path: TypePath, public symbols: List<ImportSymbol>) {
    super();
  }
}
export class AllImportSymbol extends AST {
  constructor(public path: TypePath) {
    super();
  }
}
export class RenamedImportSymbol extends AST {
  constructor(public symbol: ImportSymbol, public name: Ident) {
    super();
  }
}

// TODO: change
type TypePath = any;

type ImportSymbol =
  | GroupedImportSymbol
  | TypePathImportSymbol
  | DestructureImportSymbol
  | AllImportSymbol
  | RenamedImportSymbol;

export class InterfaceDefn extends AST {
  constructor(
    public spec: CWSpec | undefined,
    public name: Ident,
    public body: any,
    public parents?: List<InterfaceVal>,
    public mixinName?: Ident
  ) {
    super();
  }
}

export class ContractDefn extends AST {
  constructor(
    public spec: CWSpec | undefined,
    public name: Ident,
    public body: List<ContractItem>,
    public parents?: List<Ident>,
    public interfaces?: List<InterfaceVal>
  ) {
    super();
  }
}

export type ContractItem = ErrorDefn;

export class ErrorDefn extends AST {
  constructor(
    public spec: CWSpec | undefined,
    public enumVariant: EnumVariant
  ) {
    super();
  }
}

export class EventDefn extends AST {
  constructor(
    public spec: CWSpec | undefined,
    public enumVariant: EnumVariant
  ) {
    super();
  }
}

export type StateDefn = ItemDefn | MapDefn;

export class ItemDefn extends AST {
  constructor(
    public spec: CWSpec | undefined,
    public key: Ident,
    public type: TypeExpr
  ) {
    super();
  }
}

export class MapDefn extends AST {
  constructor(
    public spec: CWSpec | undefined,
    public key: Ident,
    public mapKeys: List<MapDefnKey>,
    public type: List<TypeExpr>
  ) {
    super();
  }
}

export class MapDefnKey extends AST {
  constructor(public name: Ident, public type: TypeExpr) {
    super();
  }
}

export class FnDefn extends AST {
  constructor(
    public spec: CWSpec | undefined,
    public name: Ident | undefined,
    public args: List<FnArg>,
    public returnType: TypeExpr | undefined,
    public body: List<Stmt>
  ) {
    super();
  }
}

export class InstantiateDefn extends FnDefn {}
export class ExecDefn extends FnDefn {}
export class QueryDefn extends FnDefn {}

export class FnArg extends AST {
  constructor(
    public name: Ident,
    public option: boolean,
    public type: TypeExpr
  ) {
    super();
  }
}

//TODO: change
type Stmt = any;

export class LetStmt extends AST {
  constructor(public lhs: LetLHS, public rhs: Expr) {
    super();
  }
}

export type LetLHS = IdentLHS | StructUnpackLHS | TupleUnpackLHS;

export class IdentLHS extends AST {
  constructor(public name: Ident, public type?: TypeExpr) {
    super();
  }
}

export class StructUnpackLHS extends AST {
  constructor(public names: List<Ident>) {
    super();
  }
}

export class TupleUnpackLHS extends AST {
  constructor(public front?: List<Ident>, public back?: List<Ident>) {
    super();
  }
}

export class AssignStmt extends AST {
  constructor(public lhs: Expr, public assignOp: string, public rhs: Expr) {
    super();
  }
}

export class IfExpr extends AST {
  constructor(
    public cond: Expr,
    public thenStmt: List<Stmt>,
    public elseStmt?: List<Stmt>
  ) {
    super();
  }
}

export class ForInStmt extends AST {
  constructor(
    public lhs: LetLHS,
    public iterable: Expr,
    public body: List<Stmt>
  ) {
    super();
  }
}

export class ForTimesStmt extends AST {
  constructor(public expr: Expr, public body: List<Stmt>) {
    super();
  }
}

export class ExecStmt extends AST {
  constructor(public expr: Expr) {
    super();
  }
}

export class EmitStmt extends AST {
  constructor(public expr: Expr) {
    super();
  }
}

export class ReturnStmt extends AST {
  constructor(public expr: Expr) {
    super();
  }
}

// TODO: change
export type Expr = any;

export class MemberAccessExpr extends AST {
  constructor(public lhs: Expr, public member: Ident) {
    super();
  }
}

export class TableLookupExpr extends AST {
  constructor(public lhs: Expr, public key: Expr) {
    super();
  }
}

export class PosArgsFnCallExpr extends AST {
  constructor(public fn: Expr, public args: List<Expr>) {
    super();
  }
}

export class NamedArgsFnCallExpr extends AST {
  constructor(public fn: Expr, public args: List<NamedExpr>) {
    super();
  }
}

export class UnarySignExpr extends AST {
  constructor(public sign: string, public expr: Expr) {
    super();
  }
}

export class UnaryNotExpr extends AST {
  constructor(public expr: Expr) {
    super();
  }
}

export class ExpExpr extends AST {
  constructor(public expr: Expr) {
    super();
  }
}

export class ArithmeticOpExpr extends AST {
  constructor(public lhs: Expr, public op: string, public rhs: Expr) {
    super();
  }
}

export class CompOpExpr extends AST {
  constructor(public lhs: Expr, public op: string, public rhs: Expr) {
    super();
  }
}

export class AndExpr extends AST {
  constructor(public lhs: Expr, public rhs: Expr) {
    super();
  }
}

export class OrExpr extends AST {
  constructor(public lhs: Expr, public rhs: Expr) {
    super();
  }
}

export class QueryExpr extends AST {
  constructor(public expr: Expr) {
    super();
  }
}

export class UnitVal extends AST {
  constructor() {
    super();
  }
}

export class StructVal extends AST {
  constructor(public type: TypePath, public members: List<StructValMember>) {
    super();
  }
}

export class StructValMember extends AST {
  constructor(public name: Ident, public value: Expr) {
    super();
  }
}

export class NamedExpr extends AST {
  constructor(public name: Ident, public value: Expr) {
    super();
  }
}

export class TupleVal extends AST {
  constructor(public type: TypePath, public members: List<Expr>) {
    super();
  }
}

export class VecVal extends AST {
  constructor(public type: TypePath, public elements: List<Expr>) {
    super();
  }
}

export class StringVal extends AST {
  constructor(public value: string) {
    super();
  }
}

export class IntegerVal extends AST {
  constructor(public value: string) {
    super();
  }
}

export class DecimalVal extends AST {
  constructor(public value: string) {
    super();
  }
}

export class BoolVal extends AST {
  constructor(public value: boolean) {
    super();
  }
}

type EnumVariant = EnumVariantStruct | EnumVariantTuple | EnumVariantUnit;

export class EnumVariantStruct extends AST {
  constructor(public name: Ident, public members: List<StructMember>) {
    super();
  }
}

export class EnumVariantTuple extends AST {
  constructor(public name: Ident, public members: List<TypeExpr>) {
    super();
  }
}

export class EnumVariantUnit extends AST {
  constructor(public name: Ident) {
    super();
  }
}

export class StructMember extends AST {
  constructor(
    public spec: CWSpec | undefined,
    public name: Ident,
    public option: boolean,
    public type: TypeExpr
  ) {
    super();
  }
}

// TODO: change
type TypeExpr = any;

export class CWScriptASTVisitor extends AbstractParseTreeVisitor<AST>
  implements CWScriptParserVisitor<AST> {
  protected defaultResult(): AST {
    return new AST();
  }

  visitSourceFile(ctx: SourceFileContext): SourceFile {
    return new SourceFile(
      ctx._spec,
      ctx.children?.map(child => this.visit(child)) as
        | List<TopLevelStmt>
        | undefined
    );
  }

  visitIdent(ctx: IdentContext): Ident {
    return new Ident(ctx.text);
  }

  visitIdentList(ctx: IdentListContext): List<Ident> {
    return new List(ctx._symbols.map(x => this.visitIdent(x)));
  }

  visitInterfaceList(ctx: InterfaceListContext): List<InterfaceVal> {
    return new List(ctx.interfaceVal().map(x => this.visitInterfaceVal(x)));
  }

  visitInterfaceVal(ctx: InterfaceValContext): InterfaceVal {
    return new InterfaceVal(
      this.visitIdent(ctx._interfaceName),
      ctx._mixins ? this.visitIdentList(ctx._mixins) : undefined
    );
  }

  visitCwspec(ctx: CwspecContext): CWSpec {
    return new CWSpec(ctx.text);
  }

  visitInterfaceDefn(ctx: InterfaceDefnContext): InterfaceDefn {
    return new InterfaceDefn(
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      this.visitIdent(ctx._name),
      this.visit(ctx.interfaceBody()),
      ctx._parents ? this.visitInterfaceList(ctx._parents) : undefined,
      ctx._mixinName ? this.visitIdent(ctx._mixinName) : undefined
    );
  }

  visitContractBody(ctx: ContractBodyContext): List<ContractItem> {
    let items = ctx.contractItem() || [];
    return new List(items.map(x => this.visit(x)) as ContractItem[]);
  }

  visitContractDefn(ctx: ContractDefnContext): ContractDefn {
    return new ContractDefn(
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      this.visitIdent(ctx._name),
      this.visitContractBody(ctx.contractBody()),
      ctx._parents ? this.visitIdentList(ctx._parents) : undefined,
      ctx._interfaces ? this.visitInterfaceList(ctx._interfaces) : undefined
    );
  }

  visitStructMember(ctx: StructMemberContext): StructMember {
    return new StructMember(
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      this.visitIdent(ctx._name),
      ctx._option ? true : false,
      this.visit(ctx._valueType) as TypeExpr
    );
  }

  visitEnumVariant_struct(ctx: EnumVariant_structContext): EnumVariantStruct {
    let parenStructMembers = ctx.parenStructMembers();
    let curlyStructMembers = ctx.curlyStructMembers();

    if (parenStructMembers !== undefined) {
      return new EnumVariantStruct(
        this.visitIdent(ctx._name),
        new List(
          parenStructMembers.structMember().map(x => this.visitStructMember(x))
        )
      );
    } else if (curlyStructMembers !== undefined) {
      return new EnumVariantStruct(
        this.visitIdent(ctx._name),
        new List(
          curlyStructMembers.structMember().map(x => this.visitStructMember(x))
        )
      );
    } else {
      throw new Error('unreachable');
    }
  }

  visitEnumVariant_tuple(ctx: EnumVariant_tupleContext): EnumVariantTuple {
    return new EnumVariantTuple(
      this.visitIdent(ctx._name),
      new List(
        ctx
          .tupleMembers()
          .typeExpr()
          .map(x => this.visit(x))
      )
    );
  }

  visitEnumVariant_unit(ctx: EnumVariant_unitContext): EnumVariantUnit {
    return new EnumVariantUnit(this.visitIdent(ctx._name));
  }

  visitErrorDefn(ctx: ErrorDefnContext): ErrorDefn {
    return new ErrorDefn(
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      this.visit(ctx.enumVariant()) as EnumVariant
    );
  }

  visitEventDefn(ctx: EventDefnContext): EventDefn {
    return new EventDefn(
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      this.visit(ctx.enumVariant()) as EnumVariant
    );
  }

  visitErrorDefnBlock(ctx: ErrorDefnBlockContext): List<ErrorDefn> {
    let defns = ctx.errorDefnBlock_item() || [];
    return new List(defns.map(x => this.visitErrorDefn(x as ErrorDefnContext)));
  }

  visitEventDefnBlock(ctx: EventDefnBlockContext): List<EventDefn> {
    let defns = ctx.eventDefnBlock_item() || [];
    return new List(defns.map(x => this.visitEventDefn(x as EventDefnContext)));
  }

  visitStateItemDefn(ctx: StateItemDefnContext): ItemDefn {
    let item = ctx._item;
    return new ItemDefn(
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      this.visitIdent(item._key),
      this.visit(item._valueType) as TypeExpr
    );
  }

  visitStateMapDefn(ctx: StateMapDefnContext): MapDefn {
    let map = ctx._map;
    let mapKeys = ctx._map._mapKeys.mapDefnKey() || [];
    return new MapDefn(
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      this.visitIdent(map._key),
      new List(mapKeys.map(x => this.visitMapDefnKey(x))),
      this.visit(map._valueType) as TypeExpr
    );
  }

  visitStateDefnBlock(ctx: StateDefnBlockContext): List<StateDefn> {
    let items = ctx.stateDefnBlock_item() || [];
    return new List(
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
      this.visitIdent(ctx._keyName),
      this.visit(ctx._keyType) as TypeExpr
    );
  }

  visitFnArgs(ctx: FnArgsContext): List<FnArg> {
    let fnArgs = ctx.fnArgList()?.fnArg() || [];
    return new List(fnArgs.map(x => this.visitFnArg(x)));
  }

  visitFnArg(ctx: FnArgContext): FnArg {
    return new FnArg(
      this.visitIdent(ctx._argName),
      ctx._option ? true : false,
      this.visit(ctx._argType) as TypeExpr
    );
  }

  visitNormalFnBody(ctx: NormalFnBodyContext): List<Stmt> {
    let stmts = ctx.stmt() || [];
    return new List(stmts.map(x => this.visit(x)) as Stmt[]);
  }

  visitArrowFnBody(ctx: ArrowFnBodyContext): List<Stmt> {
    let stmt = ctx.stmt();
    return stmt ? new List([this.visit(stmt)]) : new List<Stmt>([]);
  }

  visitInstantiateDefn(ctx: InstantiateDefnContext): InstantiateDefn {
    let fnType = ctx.fnType();
    return new InstantiateDefn(
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      undefined,
      this.visitFnArgs(ctx.fnArgs()),
      fnType ? (this.visit(fnType) as TypeExpr) : null,
      this.visit(ctx.fnBody()) as List<Stmt>
    );
  }

  visitExecDefn(ctx: ExecDefnContext): ExecDefn {
    let fn = ctx.namedFnDefn();
    let fnType = fn.fnType();
    return new ExecDefn(
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      this.visitIdent(fn._fnName),
      this.visitFnArgs(fn.fnArgs()),
      fnType ? (this.visit(fnType) as TypeExpr) : null,
      this.visit(fn.fnBody()) as List<Stmt>
    );
  }

  visitExecDefnBlock(ctx: ExecDefnBlockContext): List<ExecDefn> {
    let defns = ctx.execDefnBlock_item() || [];
    return new List(defns.map(x => this.visitExecDefn(x as ExecDefnContext)));
  }

  visitQueryDefn(ctx: QueryDefnContext): QueryDefn {
    let fn = ctx.namedFnDefn();
    let fnType = fn.fnType();
    return new QueryDefn(
      ctx._spec ? this.visitCwspec(ctx._spec) : undefined,
      this.visitIdent(fn._fnName),
      this.visitFnArgs(fn.fnArgs()),
      fnType ? (this.visit(fnType) as TypeExpr) : null,
      this.visit(fn.fnBody()) as List<Stmt>
    );
  }

  visitQueryDefnBlock(ctx: QueryDefnBlockContext): List<QueryDefn> {
    let defns = ctx.queryDefnBlock_item() || [];
    return new List(defns.map(x => this.visitQueryDefn(x as QueryDefnContext)));
  }

  visitUnitVal(ctx: UnitValContext): UnitVal {
    return new UnitVal();
  }

  visitTrueVal(ctx: TrueValContext): BoolVal {
    return new BoolVal(true);
  }

  visitFalseVal(ctx: FalseValContext): BoolVal {
    return new BoolVal(false);
  }

  visitIntegerVal(ctx: IntegerValContext): IntegerVal {
    return new IntegerVal(ctx.text);
  }

  visitDecimalVal(ctx: DecimalValContext): DecimalVal {
    return new DecimalVal(ctx.text);
  }

  visitStringVal(ctx: StringValContext): StringVal {
    return new StringVal(ctx.text);
  }

  visitTupleVal(ctx: TupleValContext): TupleVal {
    let type = this.visit(ctx._tupleType) as TypeExpr;
    let items = ctx.exprList().expr() || [];
    return new TupleVal(type, new List(items.map(x => this.visit(x))));
  }
}
