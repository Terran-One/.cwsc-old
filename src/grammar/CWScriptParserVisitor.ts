// Generated from ./grammar/CWScriptParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { StateItemAssignLHSContext } from "./CWScriptParser";
import { StateMapAssignLHSContext } from "./CWScriptParser";
import { IdentAssignLHSContext } from "./CWScriptParser";
import { MemberAssignLHSContext } from "./CWScriptParser";
import { TableAssignLHSContext } from "./CWScriptParser";
import { StateBlockItemDefnContext } from "./CWScriptParser";
import { StateBlockMapDefnContext } from "./CWScriptParser";
import { ForInStmtContext } from "./CWScriptParser";
import { ForTimesStmtContext } from "./CWScriptParser";
import { IfClauseContext } from "./CWScriptParser";
import { IfLetClauseContext } from "./CWScriptParser";
import { StateItemDefnContext } from "./CWScriptParser";
import { StateMapDefnContext } from "./CWScriptParser";
import { UnitValContext } from "./CWScriptParser";
import { StructValContext } from "./CWScriptParser";
import { TupleValContext } from "./CWScriptParser";
import { VecValContext } from "./CWScriptParser";
import { StringValContext } from "./CWScriptParser";
import { IntegerValContext } from "./CWScriptParser";
import { DecimalValContext } from "./CWScriptParser";
import { TrueValContext } from "./CWScriptParser";
import { FalseValContext } from "./CWScriptParser";
import { IdentValContext } from "./CWScriptParser";
import { ImportAllStmtContext } from "./CWScriptParser";
import { ImportItemsStmtContext } from "./CWScriptParser";
import { NormalFnBodyContext } from "./CWScriptParser";
import { ArrowFnBodyContext } from "./CWScriptParser";
import { IdentLHSContext } from "./CWScriptParser";
import { StructUnpackLHSContext } from "./CWScriptParser";
import { GroupedExprContext } from "./CWScriptParser";
import { StateItemAccessExprContext } from "./CWScriptParser";
import { StateMapAccessExprContext } from "./CWScriptParser";
import { MemberAccessExprContext } from "./CWScriptParser";
import { TableLookupExprContext } from "./CWScriptParser";
import { PosArgsFnCallExprContext } from "./CWScriptParser";
import { NamedArgsFnCallExprContext } from "./CWScriptParser";
import { UnaryExprContext } from "./CWScriptParser";
import { ExpExprContext } from "./CWScriptParser";
import { MultDivModExprContext } from "./CWScriptParser";
import { AddSubExprContext } from "./CWScriptParser";
import { CompExprContext } from "./CWScriptParser";
import { EqExprContext } from "./CWScriptParser";
import { AndExprContext } from "./CWScriptParser";
import { OrExprContext } from "./CWScriptParser";
import { IfExprContext } from "./CWScriptParser";
import { QueryExprContext } from "./CWScriptParser";
import { ValExprContext } from "./CWScriptParser";
import { TypePathExprContext } from "./CWScriptParser";
import { ParamzdTypeExprContext } from "./CWScriptParser";
import { TupleTypeExprContext } from "./CWScriptParser";
import { ShortOptionTypeExprContext } from "./CWScriptParser";
import { ShortVecTypeExprContext } from "./CWScriptParser";
import { RefTypeExprContext } from "./CWScriptParser";
import { TypeDefnExprContext } from "./CWScriptParser";
import { LetStmtContext } from "./CWScriptParser";
import { AssignStmtContext } from "./CWScriptParser";
import { IfStmtContext } from "./CWScriptParser";
import { ForStmtContext } from "./CWScriptParser";
import { ExecStmtContext } from "./CWScriptParser";
import { ExecuteNowStmtContext } from "./CWScriptParser";
import { EmitStmtContext } from "./CWScriptParser";
import { ReturnStmtContext } from "./CWScriptParser";
import { FailStmtContext } from "./CWScriptParser";
import { ExprStmtContext } from "./CWScriptParser";
import { SourceFileContext } from "./CWScriptParser";
import { TopLevelStmtContext } from "./CWScriptParser";
import { ContractDefnContext } from "./CWScriptParser";
import { InterfaceDefnContext } from "./CWScriptParser";
import { ImportStmtContext } from "./CWScriptParser";
import { ImportListContext } from "./CWScriptParser";
import { ImportItemContext } from "./CWScriptParser";
import { ContractBodyContext } from "./CWScriptParser";
import { InterfaceBodyContext } from "./CWScriptParser";
import { ContractItemContext } from "./CWScriptParser";
import { InterfaceItemContext } from "./CWScriptParser";
import { ErrorDefnContext } from "./CWScriptParser";
import { ErrorDefnBlockContext } from "./CWScriptParser";
import { ErrorDefnBlock_itemContext } from "./CWScriptParser";
import { EventDefnContext } from "./CWScriptParser";
import { EventDefnBlockContext } from "./CWScriptParser";
import { EventDefnBlock_itemContext } from "./CWScriptParser";
import { StateDefnContext } from "./CWScriptParser";
import { StateDefnBlockContext } from "./CWScriptParser";
import { StateDefnBlock_itemContext } from "./CWScriptParser";
import { ItemDefnContext } from "./CWScriptParser";
import { MapDefnContext } from "./CWScriptParser";
import { MapDefnKeysContext } from "./CWScriptParser";
import { MapDefnKeyContext } from "./CWScriptParser";
import { InstantiateDefnContext } from "./CWScriptParser";
import { InstantiateDeclContext } from "./CWScriptParser";
import { ExecDefnContext } from "./CWScriptParser";
import { ExecDefnBlockContext } from "./CWScriptParser";
import { ExecDefnBlock_itemContext } from "./CWScriptParser";
import { ExecDeclContext } from "./CWScriptParser";
import { ExecDeclBlockContext } from "./CWScriptParser";
import { ExecDeclBlock_itemContext } from "./CWScriptParser";
import { QueryDefnContext } from "./CWScriptParser";
import { QueryDefnBlockContext } from "./CWScriptParser";
import { QueryDefnBlock_itemContext } from "./CWScriptParser";
import { QueryDeclContext } from "./CWScriptParser";
import { QueryDeclBlockContext } from "./CWScriptParser";
import { QueryDeclBlock_itemContext } from "./CWScriptParser";
import { MigrateDefnContext } from "./CWScriptParser";
import { MigrateDeclContext } from "./CWScriptParser";
import { EnumVariantContext } from "./CWScriptParser";
import { EnumVariant_structContext } from "./CWScriptParser";
import { EnumVariant_tupleContext } from "./CWScriptParser";
import { TupleMembersContext } from "./CWScriptParser";
import { ParenStructMembersContext } from "./CWScriptParser";
import { CurlyStructMembersContext } from "./CWScriptParser";
import { StructMemberContext } from "./CWScriptParser";
import { TypeExprContext } from "./CWScriptParser";
import { TypeParamContext } from "./CWScriptParser";
import { PathListContext } from "./CWScriptParser";
import { TypePathContext } from "./CWScriptParser";
import { TypeDefnContext } from "./CWScriptParser";
import { StructDefnContext } from "./CWScriptParser";
import { EnumDefnContext } from "./CWScriptParser";
import { EnumVariantListContext } from "./CWScriptParser";
import { TypeAliasDefnContext } from "./CWScriptParser";
import { NamedFnDeclContext } from "./CWScriptParser";
import { NamedFnDefnContext } from "./CWScriptParser";
import { FnDefnContext } from "./CWScriptParser";
import { FnTypeContext } from "./CWScriptParser";
import { FnArgsContext } from "./CWScriptParser";
import { FnArgListContext } from "./CWScriptParser";
import { FnArgContext } from "./CWScriptParser";
import { FnBodyContext } from "./CWScriptParser";
import { StmtContext } from "./CWScriptParser";
import { LetStmt_Context } from "./CWScriptParser";
import { LetLHSContext } from "./CWScriptParser";
import { AssignStmt_Context } from "./CWScriptParser";
import { AssignLHSContext } from "./CWScriptParser";
import { InnerAssignContext } from "./CWScriptParser";
import { InnerPathContext } from "./CWScriptParser";
import { MsgContext } from "./CWScriptParser";
import { ExprContext } from "./CWScriptParser";
import { ValContext } from "./CWScriptParser";
import { StructVal_Context } from "./CWScriptParser";
import { StructValMembersContext } from "./CWScriptParser";
import { StructValMemberContext } from "./CWScriptParser";
import { IfExpr_Context } from "./CWScriptParser";
import { IfClause_Context } from "./CWScriptParser";
import { ElseIfClausesContext } from "./CWScriptParser";
import { ElseClauseContext } from "./CWScriptParser";
import { ForStmt_Context } from "./CWScriptParser";
import { IdentListContext } from "./CWScriptParser";
import { ExprListContext } from "./CWScriptParser";
import { NamedExprListContext } from "./CWScriptParser";
import { NamedExprContext } from "./CWScriptParser";
import { IdentContext } from "./CWScriptParser";
import { CwspecContext } from "./CWScriptParser";
import { ReservedKeywordContext } from "./CWScriptParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CWScriptParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CWScriptParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `StateItemAssignLHS`
	 * labeled alternative in `CWScriptParser.assignLHS`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateItemAssignLHS?: (ctx: StateItemAssignLHSContext) => Result;

	/**
	 * Visit a parse tree produced by the `StateMapAssignLHS`
	 * labeled alternative in `CWScriptParser.assignLHS`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateMapAssignLHS?: (ctx: StateMapAssignLHSContext) => Result;

	/**
	 * Visit a parse tree produced by the `IdentAssignLHS`
	 * labeled alternative in `CWScriptParser.assignLHS`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentAssignLHS?: (ctx: IdentAssignLHSContext) => Result;

	/**
	 * Visit a parse tree produced by the `MemberAssignLHS`
	 * labeled alternative in `CWScriptParser.assignLHS`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberAssignLHS?: (ctx: MemberAssignLHSContext) => Result;

	/**
	 * Visit a parse tree produced by the `TableAssignLHS`
	 * labeled alternative in `CWScriptParser.assignLHS`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableAssignLHS?: (ctx: TableAssignLHSContext) => Result;

	/**
	 * Visit a parse tree produced by the `StateBlockItemDefn`
	 * labeled alternative in `CWScriptParser.stateDefnBlock_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateBlockItemDefn?: (ctx: StateBlockItemDefnContext) => Result;

	/**
	 * Visit a parse tree produced by the `StateBlockMapDefn`
	 * labeled alternative in `CWScriptParser.stateDefnBlock_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateBlockMapDefn?: (ctx: StateBlockMapDefnContext) => Result;

	/**
	 * Visit a parse tree produced by the `ForInStmt`
	 * labeled alternative in `CWScriptParser.forStmt_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForInStmt?: (ctx: ForInStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `ForTimesStmt`
	 * labeled alternative in `CWScriptParser.forStmt_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForTimesStmt?: (ctx: ForTimesStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `IfClause`
	 * labeled alternative in `CWScriptParser.ifClause_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfClause?: (ctx: IfClauseContext) => Result;

	/**
	 * Visit a parse tree produced by the `IfLetClause`
	 * labeled alternative in `CWScriptParser.ifClause_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfLetClause?: (ctx: IfLetClauseContext) => Result;

	/**
	 * Visit a parse tree produced by the `StateItemDefn`
	 * labeled alternative in `CWScriptParser.stateDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateItemDefn?: (ctx: StateItemDefnContext) => Result;

	/**
	 * Visit a parse tree produced by the `StateMapDefn`
	 * labeled alternative in `CWScriptParser.stateDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateMapDefn?: (ctx: StateMapDefnContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnitVal`
	 * labeled alternative in `CWScriptParser.val`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnitVal?: (ctx: UnitValContext) => Result;

	/**
	 * Visit a parse tree produced by the `StructVal`
	 * labeled alternative in `CWScriptParser.val`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructVal?: (ctx: StructValContext) => Result;

	/**
	 * Visit a parse tree produced by the `TupleVal`
	 * labeled alternative in `CWScriptParser.val`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleVal?: (ctx: TupleValContext) => Result;

	/**
	 * Visit a parse tree produced by the `VecVal`
	 * labeled alternative in `CWScriptParser.val`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVecVal?: (ctx: VecValContext) => Result;

	/**
	 * Visit a parse tree produced by the `StringVal`
	 * labeled alternative in `CWScriptParser.val`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringVal?: (ctx: StringValContext) => Result;

	/**
	 * Visit a parse tree produced by the `IntegerVal`
	 * labeled alternative in `CWScriptParser.val`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerVal?: (ctx: IntegerValContext) => Result;

	/**
	 * Visit a parse tree produced by the `DecimalVal`
	 * labeled alternative in `CWScriptParser.val`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimalVal?: (ctx: DecimalValContext) => Result;

	/**
	 * Visit a parse tree produced by the `TrueVal`
	 * labeled alternative in `CWScriptParser.val`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrueVal?: (ctx: TrueValContext) => Result;

	/**
	 * Visit a parse tree produced by the `FalseVal`
	 * labeled alternative in `CWScriptParser.val`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFalseVal?: (ctx: FalseValContext) => Result;

	/**
	 * Visit a parse tree produced by the `IdentVal`
	 * labeled alternative in `CWScriptParser.val`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentVal?: (ctx: IdentValContext) => Result;

	/**
	 * Visit a parse tree produced by the `ImportAllStmt`
	 * labeled alternative in `CWScriptParser.importStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportAllStmt?: (ctx: ImportAllStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `ImportItemsStmt`
	 * labeled alternative in `CWScriptParser.importStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportItemsStmt?: (ctx: ImportItemsStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `NormalFnBody`
	 * labeled alternative in `CWScriptParser.fnBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalFnBody?: (ctx: NormalFnBodyContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArrowFnBody`
	 * labeled alternative in `CWScriptParser.fnBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrowFnBody?: (ctx: ArrowFnBodyContext) => Result;

	/**
	 * Visit a parse tree produced by the `IdentLHS`
	 * labeled alternative in `CWScriptParser.letLHS`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentLHS?: (ctx: IdentLHSContext) => Result;

	/**
	 * Visit a parse tree produced by the `StructUnpackLHS`
	 * labeled alternative in `CWScriptParser.letLHS`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructUnpackLHS?: (ctx: StructUnpackLHSContext) => Result;

	/**
	 * Visit a parse tree produced by the `GroupedExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupedExpr?: (ctx: GroupedExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `StateItemAccessExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateItemAccessExpr?: (ctx: StateItemAccessExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `StateMapAccessExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateMapAccessExpr?: (ctx: StateMapAccessExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `MemberAccessExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberAccessExpr?: (ctx: MemberAccessExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `TableLookupExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableLookupExpr?: (ctx: TableLookupExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `PosArgsFnCallExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPosArgsFnCallExpr?: (ctx: PosArgsFnCallExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `NamedArgsFnCallExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedArgsFnCallExpr?: (ctx: NamedArgsFnCallExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnaryExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpr?: (ctx: UnaryExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExpExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpExpr?: (ctx: ExpExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `MultDivModExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultDivModExpr?: (ctx: MultDivModExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `AddSubExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddSubExpr?: (ctx: AddSubExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `CompExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompExpr?: (ctx: CompExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `EqExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqExpr?: (ctx: EqExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `AndExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExpr?: (ctx: AndExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `OrExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrExpr?: (ctx: OrExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `IfExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfExpr?: (ctx: IfExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `QueryExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryExpr?: (ctx: QueryExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `ValExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValExpr?: (ctx: ValExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `TypePathExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypePathExpr?: (ctx: TypePathExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `ParamzdTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParamzdTypeExpr?: (ctx: ParamzdTypeExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `TupleTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleTypeExpr?: (ctx: TupleTypeExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `ShortOptionTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShortOptionTypeExpr?: (ctx: ShortOptionTypeExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `ShortVecTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShortVecTypeExpr?: (ctx: ShortVecTypeExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `RefTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefTypeExpr?: (ctx: RefTypeExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `TypeDefnExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDefnExpr?: (ctx: TypeDefnExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `LetStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetStmt?: (ctx: LetStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `AssignStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignStmt?: (ctx: AssignStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `IfStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStmt?: (ctx: IfStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `ForStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStmt?: (ctx: ForStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExecStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecStmt?: (ctx: ExecStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExecuteNowStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecuteNowStmt?: (ctx: ExecuteNowStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `EmitStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmitStmt?: (ctx: EmitStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `ReturnStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStmt?: (ctx: ReturnStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `FailStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFailStmt?: (ctx: FailStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprStmt?: (ctx: ExprStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.sourceFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSourceFile?: (ctx: SourceFileContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.topLevelStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTopLevelStmt?: (ctx: TopLevelStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.contractDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContractDefn?: (ctx: ContractDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.interfaceDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceDefn?: (ctx: InterfaceDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.importStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportStmt?: (ctx: ImportStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.importList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportList?: (ctx: ImportListContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.importItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportItem?: (ctx: ImportItemContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.contractBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContractBody?: (ctx: ContractBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.interfaceBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceBody?: (ctx: InterfaceBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.contractItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContractItem?: (ctx: ContractItemContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.interfaceItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceItem?: (ctx: InterfaceItemContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.errorDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErrorDefn?: (ctx: ErrorDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.errorDefnBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErrorDefnBlock?: (ctx: ErrorDefnBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.errorDefnBlock_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErrorDefnBlock_item?: (ctx: ErrorDefnBlock_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.eventDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEventDefn?: (ctx: EventDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.eventDefnBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEventDefnBlock?: (ctx: EventDefnBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.eventDefnBlock_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEventDefnBlock_item?: (ctx: EventDefnBlock_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.stateDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateDefn?: (ctx: StateDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.stateDefnBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateDefnBlock?: (ctx: StateDefnBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.stateDefnBlock_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateDefnBlock_item?: (ctx: StateDefnBlock_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.itemDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItemDefn?: (ctx: ItemDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.mapDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapDefn?: (ctx: MapDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.mapDefnKeys`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapDefnKeys?: (ctx: MapDefnKeysContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.mapDefnKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapDefnKey?: (ctx: MapDefnKeyContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.instantiateDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstantiateDefn?: (ctx: InstantiateDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.instantiateDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstantiateDecl?: (ctx: InstantiateDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.execDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecDefn?: (ctx: ExecDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.execDefnBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecDefnBlock?: (ctx: ExecDefnBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.execDefnBlock_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecDefnBlock_item?: (ctx: ExecDefnBlock_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.execDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecDecl?: (ctx: ExecDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.execDeclBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecDeclBlock?: (ctx: ExecDeclBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.execDeclBlock_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecDeclBlock_item?: (ctx: ExecDeclBlock_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.queryDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryDefn?: (ctx: QueryDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.queryDefnBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryDefnBlock?: (ctx: QueryDefnBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.queryDefnBlock_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryDefnBlock_item?: (ctx: QueryDefnBlock_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.queryDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryDecl?: (ctx: QueryDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.queryDeclBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryDeclBlock?: (ctx: QueryDeclBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.queryDeclBlock_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryDeclBlock_item?: (ctx: QueryDeclBlock_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.migrateDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMigrateDefn?: (ctx: MigrateDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.migrateDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMigrateDecl?: (ctx: MigrateDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.enumVariant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumVariant?: (ctx: EnumVariantContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.enumVariant_struct`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumVariant_struct?: (ctx: EnumVariant_structContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.enumVariant_tuple`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumVariant_tuple?: (ctx: EnumVariant_tupleContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.tupleMembers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleMembers?: (ctx: TupleMembersContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.parenStructMembers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenStructMembers?: (ctx: ParenStructMembersContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.curlyStructMembers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurlyStructMembers?: (ctx: CurlyStructMembersContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.structMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructMember?: (ctx: StructMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeExpr?: (ctx: TypeExprContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.typeParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParam?: (ctx: TypeParamContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.pathList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPathList?: (ctx: PathListContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.typePath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypePath?: (ctx: TypePathContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.typeDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDefn?: (ctx: TypeDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.structDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructDefn?: (ctx: StructDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.enumDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumDefn?: (ctx: EnumDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.enumVariantList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumVariantList?: (ctx: EnumVariantListContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.typeAliasDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeAliasDefn?: (ctx: TypeAliasDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.namedFnDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedFnDecl?: (ctx: NamedFnDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.namedFnDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedFnDefn?: (ctx: NamedFnDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.fnDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFnDefn?: (ctx: FnDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.fnType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFnType?: (ctx: FnTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.fnArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFnArgs?: (ctx: FnArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.fnArgList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFnArgList?: (ctx: FnArgListContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.fnArg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFnArg?: (ctx: FnArgContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.fnBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFnBody?: (ctx: FnBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt?: (ctx: StmtContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.letStmt_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetStmt_?: (ctx: LetStmt_Context) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.letLHS`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetLHS?: (ctx: LetLHSContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.assignStmt_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignStmt_?: (ctx: AssignStmt_Context) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.assignLHS`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignLHS?: (ctx: AssignLHSContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.innerAssign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInnerAssign?: (ctx: InnerAssignContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.innerPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInnerPath?: (ctx: InnerPathContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.msg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMsg?: (ctx: MsgContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.val`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVal?: (ctx: ValContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.structVal_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructVal_?: (ctx: StructVal_Context) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.structValMembers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructValMembers?: (ctx: StructValMembersContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.structValMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructValMember?: (ctx: StructValMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.ifExpr_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfExpr_?: (ctx: IfExpr_Context) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.ifClause_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfClause_?: (ctx: IfClause_Context) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.elseIfClauses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseIfClauses?: (ctx: ElseIfClausesContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.elseClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseClause?: (ctx: ElseClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.forStmt_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStmt_?: (ctx: ForStmt_Context) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.identList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentList?: (ctx: IdentListContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.exprList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprList?: (ctx: ExprListContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.namedExprList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedExprList?: (ctx: NamedExprListContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.namedExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedExpr?: (ctx: NamedExprContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.ident`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdent?: (ctx: IdentContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.cwspec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCwspec?: (ctx: CwspecContext) => Result;

	/**
	 * Visit a parse tree produced by `CWScriptParser.reservedKeyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReservedKeyword?: (ctx: ReservedKeywordContext) => Result;
}

