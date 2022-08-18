// Generated from ./grammar/CWScriptParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
import { StructExprContext } from "./CWScriptParser";
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
import { ContrExprContext } from "./CWScriptParser";
import { TypePathExprContext } from "./CWScriptParser";
import { ParamzdTypeExprContext } from "./CWScriptParser";
import { TupleTypeExprContext } from "./CWScriptParser";
import { ShortOptionTypeExprContext } from "./CWScriptParser";
import { ShortVecTypeExprContext } from "./CWScriptParser";
import { RefTypeExprContext } from "./CWScriptParser";
import { AddrExprContext } from "./CWScriptParser";
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
 * This interface defines a complete listener for a parse tree produced by
 * `CWScriptParser`.
 */
export interface CWScriptParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `StateItemAssignLHS`
	 * labeled alternative in `CWScriptParser.assignLHS`.
	 * @param ctx the parse tree
	 */
	enterStateItemAssignLHS?: (ctx: StateItemAssignLHSContext) => void;
	/**
	 * Exit a parse tree produced by the `StateItemAssignLHS`
	 * labeled alternative in `CWScriptParser.assignLHS`.
	 * @param ctx the parse tree
	 */
	exitStateItemAssignLHS?: (ctx: StateItemAssignLHSContext) => void;

	/**
	 * Enter a parse tree produced by the `StateMapAssignLHS`
	 * labeled alternative in `CWScriptParser.assignLHS`.
	 * @param ctx the parse tree
	 */
	enterStateMapAssignLHS?: (ctx: StateMapAssignLHSContext) => void;
	/**
	 * Exit a parse tree produced by the `StateMapAssignLHS`
	 * labeled alternative in `CWScriptParser.assignLHS`.
	 * @param ctx the parse tree
	 */
	exitStateMapAssignLHS?: (ctx: StateMapAssignLHSContext) => void;

	/**
	 * Enter a parse tree produced by the `IdentAssignLHS`
	 * labeled alternative in `CWScriptParser.assignLHS`.
	 * @param ctx the parse tree
	 */
	enterIdentAssignLHS?: (ctx: IdentAssignLHSContext) => void;
	/**
	 * Exit a parse tree produced by the `IdentAssignLHS`
	 * labeled alternative in `CWScriptParser.assignLHS`.
	 * @param ctx the parse tree
	 */
	exitIdentAssignLHS?: (ctx: IdentAssignLHSContext) => void;

	/**
	 * Enter a parse tree produced by the `MemberAssignLHS`
	 * labeled alternative in `CWScriptParser.assignLHS`.
	 * @param ctx the parse tree
	 */
	enterMemberAssignLHS?: (ctx: MemberAssignLHSContext) => void;
	/**
	 * Exit a parse tree produced by the `MemberAssignLHS`
	 * labeled alternative in `CWScriptParser.assignLHS`.
	 * @param ctx the parse tree
	 */
	exitMemberAssignLHS?: (ctx: MemberAssignLHSContext) => void;

	/**
	 * Enter a parse tree produced by the `TableAssignLHS`
	 * labeled alternative in `CWScriptParser.assignLHS`.
	 * @param ctx the parse tree
	 */
	enterTableAssignLHS?: (ctx: TableAssignLHSContext) => void;
	/**
	 * Exit a parse tree produced by the `TableAssignLHS`
	 * labeled alternative in `CWScriptParser.assignLHS`.
	 * @param ctx the parse tree
	 */
	exitTableAssignLHS?: (ctx: TableAssignLHSContext) => void;

	/**
	 * Enter a parse tree produced by the `StateBlockItemDefn`
	 * labeled alternative in `CWScriptParser.stateDefnBlock_item`.
	 * @param ctx the parse tree
	 */
	enterStateBlockItemDefn?: (ctx: StateBlockItemDefnContext) => void;
	/**
	 * Exit a parse tree produced by the `StateBlockItemDefn`
	 * labeled alternative in `CWScriptParser.stateDefnBlock_item`.
	 * @param ctx the parse tree
	 */
	exitStateBlockItemDefn?: (ctx: StateBlockItemDefnContext) => void;

	/**
	 * Enter a parse tree produced by the `StateBlockMapDefn`
	 * labeled alternative in `CWScriptParser.stateDefnBlock_item`.
	 * @param ctx the parse tree
	 */
	enterStateBlockMapDefn?: (ctx: StateBlockMapDefnContext) => void;
	/**
	 * Exit a parse tree produced by the `StateBlockMapDefn`
	 * labeled alternative in `CWScriptParser.stateDefnBlock_item`.
	 * @param ctx the parse tree
	 */
	exitStateBlockMapDefn?: (ctx: StateBlockMapDefnContext) => void;

	/**
	 * Enter a parse tree produced by the `ForInStmt`
	 * labeled alternative in `CWScriptParser.forStmt_`.
	 * @param ctx the parse tree
	 */
	enterForInStmt?: (ctx: ForInStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `ForInStmt`
	 * labeled alternative in `CWScriptParser.forStmt_`.
	 * @param ctx the parse tree
	 */
	exitForInStmt?: (ctx: ForInStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `ForTimesStmt`
	 * labeled alternative in `CWScriptParser.forStmt_`.
	 * @param ctx the parse tree
	 */
	enterForTimesStmt?: (ctx: ForTimesStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `ForTimesStmt`
	 * labeled alternative in `CWScriptParser.forStmt_`.
	 * @param ctx the parse tree
	 */
	exitForTimesStmt?: (ctx: ForTimesStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `IfClause`
	 * labeled alternative in `CWScriptParser.ifClause_`.
	 * @param ctx the parse tree
	 */
	enterIfClause?: (ctx: IfClauseContext) => void;
	/**
	 * Exit a parse tree produced by the `IfClause`
	 * labeled alternative in `CWScriptParser.ifClause_`.
	 * @param ctx the parse tree
	 */
	exitIfClause?: (ctx: IfClauseContext) => void;

	/**
	 * Enter a parse tree produced by the `IfLetClause`
	 * labeled alternative in `CWScriptParser.ifClause_`.
	 * @param ctx the parse tree
	 */
	enterIfLetClause?: (ctx: IfLetClauseContext) => void;
	/**
	 * Exit a parse tree produced by the `IfLetClause`
	 * labeled alternative in `CWScriptParser.ifClause_`.
	 * @param ctx the parse tree
	 */
	exitIfLetClause?: (ctx: IfLetClauseContext) => void;

	/**
	 * Enter a parse tree produced by the `StateItemDefn`
	 * labeled alternative in `CWScriptParser.stateDefn`.
	 * @param ctx the parse tree
	 */
	enterStateItemDefn?: (ctx: StateItemDefnContext) => void;
	/**
	 * Exit a parse tree produced by the `StateItemDefn`
	 * labeled alternative in `CWScriptParser.stateDefn`.
	 * @param ctx the parse tree
	 */
	exitStateItemDefn?: (ctx: StateItemDefnContext) => void;

	/**
	 * Enter a parse tree produced by the `StateMapDefn`
	 * labeled alternative in `CWScriptParser.stateDefn`.
	 * @param ctx the parse tree
	 */
	enterStateMapDefn?: (ctx: StateMapDefnContext) => void;
	/**
	 * Exit a parse tree produced by the `StateMapDefn`
	 * labeled alternative in `CWScriptParser.stateDefn`.
	 * @param ctx the parse tree
	 */
	exitStateMapDefn?: (ctx: StateMapDefnContext) => void;

	/**
	 * Enter a parse tree produced by the `UnitVal`
	 * labeled alternative in `CWScriptParser.val`.
	 * @param ctx the parse tree
	 */
	enterUnitVal?: (ctx: UnitValContext) => void;
	/**
	 * Exit a parse tree produced by the `UnitVal`
	 * labeled alternative in `CWScriptParser.val`.
	 * @param ctx the parse tree
	 */
	exitUnitVal?: (ctx: UnitValContext) => void;

	/**
	 * Enter a parse tree produced by the `StructVal`
	 * labeled alternative in `CWScriptParser.val`.
	 * @param ctx the parse tree
	 */
	enterStructVal?: (ctx: StructValContext) => void;
	/**
	 * Exit a parse tree produced by the `StructVal`
	 * labeled alternative in `CWScriptParser.val`.
	 * @param ctx the parse tree
	 */
	exitStructVal?: (ctx: StructValContext) => void;

	/**
	 * Enter a parse tree produced by the `TupleVal`
	 * labeled alternative in `CWScriptParser.val`.
	 * @param ctx the parse tree
	 */
	enterTupleVal?: (ctx: TupleValContext) => void;
	/**
	 * Exit a parse tree produced by the `TupleVal`
	 * labeled alternative in `CWScriptParser.val`.
	 * @param ctx the parse tree
	 */
	exitTupleVal?: (ctx: TupleValContext) => void;

	/**
	 * Enter a parse tree produced by the `VecVal`
	 * labeled alternative in `CWScriptParser.val`.
	 * @param ctx the parse tree
	 */
	enterVecVal?: (ctx: VecValContext) => void;
	/**
	 * Exit a parse tree produced by the `VecVal`
	 * labeled alternative in `CWScriptParser.val`.
	 * @param ctx the parse tree
	 */
	exitVecVal?: (ctx: VecValContext) => void;

	/**
	 * Enter a parse tree produced by the `StringVal`
	 * labeled alternative in `CWScriptParser.val`.
	 * @param ctx the parse tree
	 */
	enterStringVal?: (ctx: StringValContext) => void;
	/**
	 * Exit a parse tree produced by the `StringVal`
	 * labeled alternative in `CWScriptParser.val`.
	 * @param ctx the parse tree
	 */
	exitStringVal?: (ctx: StringValContext) => void;

	/**
	 * Enter a parse tree produced by the `IntegerVal`
	 * labeled alternative in `CWScriptParser.val`.
	 * @param ctx the parse tree
	 */
	enterIntegerVal?: (ctx: IntegerValContext) => void;
	/**
	 * Exit a parse tree produced by the `IntegerVal`
	 * labeled alternative in `CWScriptParser.val`.
	 * @param ctx the parse tree
	 */
	exitIntegerVal?: (ctx: IntegerValContext) => void;

	/**
	 * Enter a parse tree produced by the `DecimalVal`
	 * labeled alternative in `CWScriptParser.val`.
	 * @param ctx the parse tree
	 */
	enterDecimalVal?: (ctx: DecimalValContext) => void;
	/**
	 * Exit a parse tree produced by the `DecimalVal`
	 * labeled alternative in `CWScriptParser.val`.
	 * @param ctx the parse tree
	 */
	exitDecimalVal?: (ctx: DecimalValContext) => void;

	/**
	 * Enter a parse tree produced by the `TrueVal`
	 * labeled alternative in `CWScriptParser.val`.
	 * @param ctx the parse tree
	 */
	enterTrueVal?: (ctx: TrueValContext) => void;
	/**
	 * Exit a parse tree produced by the `TrueVal`
	 * labeled alternative in `CWScriptParser.val`.
	 * @param ctx the parse tree
	 */
	exitTrueVal?: (ctx: TrueValContext) => void;

	/**
	 * Enter a parse tree produced by the `FalseVal`
	 * labeled alternative in `CWScriptParser.val`.
	 * @param ctx the parse tree
	 */
	enterFalseVal?: (ctx: FalseValContext) => void;
	/**
	 * Exit a parse tree produced by the `FalseVal`
	 * labeled alternative in `CWScriptParser.val`.
	 * @param ctx the parse tree
	 */
	exitFalseVal?: (ctx: FalseValContext) => void;

	/**
	 * Enter a parse tree produced by the `IdentVal`
	 * labeled alternative in `CWScriptParser.val`.
	 * @param ctx the parse tree
	 */
	enterIdentVal?: (ctx: IdentValContext) => void;
	/**
	 * Exit a parse tree produced by the `IdentVal`
	 * labeled alternative in `CWScriptParser.val`.
	 * @param ctx the parse tree
	 */
	exitIdentVal?: (ctx: IdentValContext) => void;

	/**
	 * Enter a parse tree produced by the `ImportAllStmt`
	 * labeled alternative in `CWScriptParser.importStmt`.
	 * @param ctx the parse tree
	 */
	enterImportAllStmt?: (ctx: ImportAllStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `ImportAllStmt`
	 * labeled alternative in `CWScriptParser.importStmt`.
	 * @param ctx the parse tree
	 */
	exitImportAllStmt?: (ctx: ImportAllStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `ImportItemsStmt`
	 * labeled alternative in `CWScriptParser.importStmt`.
	 * @param ctx the parse tree
	 */
	enterImportItemsStmt?: (ctx: ImportItemsStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `ImportItemsStmt`
	 * labeled alternative in `CWScriptParser.importStmt`.
	 * @param ctx the parse tree
	 */
	exitImportItemsStmt?: (ctx: ImportItemsStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `NormalFnBody`
	 * labeled alternative in `CWScriptParser.fnBody`.
	 * @param ctx the parse tree
	 */
	enterNormalFnBody?: (ctx: NormalFnBodyContext) => void;
	/**
	 * Exit a parse tree produced by the `NormalFnBody`
	 * labeled alternative in `CWScriptParser.fnBody`.
	 * @param ctx the parse tree
	 */
	exitNormalFnBody?: (ctx: NormalFnBodyContext) => void;

	/**
	 * Enter a parse tree produced by the `ArrowFnBody`
	 * labeled alternative in `CWScriptParser.fnBody`.
	 * @param ctx the parse tree
	 */
	enterArrowFnBody?: (ctx: ArrowFnBodyContext) => void;
	/**
	 * Exit a parse tree produced by the `ArrowFnBody`
	 * labeled alternative in `CWScriptParser.fnBody`.
	 * @param ctx the parse tree
	 */
	exitArrowFnBody?: (ctx: ArrowFnBodyContext) => void;

	/**
	 * Enter a parse tree produced by the `IdentLHS`
	 * labeled alternative in `CWScriptParser.letLHS`.
	 * @param ctx the parse tree
	 */
	enterIdentLHS?: (ctx: IdentLHSContext) => void;
	/**
	 * Exit a parse tree produced by the `IdentLHS`
	 * labeled alternative in `CWScriptParser.letLHS`.
	 * @param ctx the parse tree
	 */
	exitIdentLHS?: (ctx: IdentLHSContext) => void;

	/**
	 * Enter a parse tree produced by the `StructUnpackLHS`
	 * labeled alternative in `CWScriptParser.letLHS`.
	 * @param ctx the parse tree
	 */
	enterStructUnpackLHS?: (ctx: StructUnpackLHSContext) => void;
	/**
	 * Exit a parse tree produced by the `StructUnpackLHS`
	 * labeled alternative in `CWScriptParser.letLHS`.
	 * @param ctx the parse tree
	 */
	exitStructUnpackLHS?: (ctx: StructUnpackLHSContext) => void;

	/**
	 * Enter a parse tree produced by the `GroupedExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterGroupedExpr?: (ctx: GroupedExprContext) => void;
	/**
	 * Exit a parse tree produced by the `GroupedExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitGroupedExpr?: (ctx: GroupedExprContext) => void;

	/**
	 * Enter a parse tree produced by the `StateItemAccessExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterStateItemAccessExpr?: (ctx: StateItemAccessExprContext) => void;
	/**
	 * Exit a parse tree produced by the `StateItemAccessExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitStateItemAccessExpr?: (ctx: StateItemAccessExprContext) => void;

	/**
	 * Enter a parse tree produced by the `StateMapAccessExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterStateMapAccessExpr?: (ctx: StateMapAccessExprContext) => void;
	/**
	 * Exit a parse tree produced by the `StateMapAccessExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitStateMapAccessExpr?: (ctx: StateMapAccessExprContext) => void;

	/**
	 * Enter a parse tree produced by the `MemberAccessExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterMemberAccessExpr?: (ctx: MemberAccessExprContext) => void;
	/**
	 * Exit a parse tree produced by the `MemberAccessExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitMemberAccessExpr?: (ctx: MemberAccessExprContext) => void;

	/**
	 * Enter a parse tree produced by the `TableLookupExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterTableLookupExpr?: (ctx: TableLookupExprContext) => void;
	/**
	 * Exit a parse tree produced by the `TableLookupExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitTableLookupExpr?: (ctx: TableLookupExprContext) => void;

	/**
	 * Enter a parse tree produced by the `PosArgsFnCallExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterPosArgsFnCallExpr?: (ctx: PosArgsFnCallExprContext) => void;
	/**
	 * Exit a parse tree produced by the `PosArgsFnCallExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitPosArgsFnCallExpr?: (ctx: PosArgsFnCallExprContext) => void;

	/**
	 * Enter a parse tree produced by the `NamedArgsFnCallExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterNamedArgsFnCallExpr?: (ctx: NamedArgsFnCallExprContext) => void;
	/**
	 * Exit a parse tree produced by the `NamedArgsFnCallExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitNamedArgsFnCallExpr?: (ctx: NamedArgsFnCallExprContext) => void;

	/**
	 * Enter a parse tree produced by the `StructExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterStructExpr?: (ctx: StructExprContext) => void;
	/**
	 * Exit a parse tree produced by the `StructExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitStructExpr?: (ctx: StructExprContext) => void;

	/**
	 * Enter a parse tree produced by the `UnaryExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpr?: (ctx: UnaryExprContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpr?: (ctx: UnaryExprContext) => void;

	/**
	 * Enter a parse tree produced by the `ExpExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpExpr?: (ctx: ExpExprContext) => void;
	/**
	 * Exit a parse tree produced by the `ExpExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpExpr?: (ctx: ExpExprContext) => void;

	/**
	 * Enter a parse tree produced by the `MultDivModExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterMultDivModExpr?: (ctx: MultDivModExprContext) => void;
	/**
	 * Exit a parse tree produced by the `MultDivModExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitMultDivModExpr?: (ctx: MultDivModExprContext) => void;

	/**
	 * Enter a parse tree produced by the `AddSubExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAddSubExpr?: (ctx: AddSubExprContext) => void;
	/**
	 * Exit a parse tree produced by the `AddSubExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAddSubExpr?: (ctx: AddSubExprContext) => void;

	/**
	 * Enter a parse tree produced by the `CompExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterCompExpr?: (ctx: CompExprContext) => void;
	/**
	 * Exit a parse tree produced by the `CompExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitCompExpr?: (ctx: CompExprContext) => void;

	/**
	 * Enter a parse tree produced by the `EqExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterEqExpr?: (ctx: EqExprContext) => void;
	/**
	 * Exit a parse tree produced by the `EqExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitEqExpr?: (ctx: EqExprContext) => void;

	/**
	 * Enter a parse tree produced by the `AndExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAndExpr?: (ctx: AndExprContext) => void;
	/**
	 * Exit a parse tree produced by the `AndExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAndExpr?: (ctx: AndExprContext) => void;

	/**
	 * Enter a parse tree produced by the `OrExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterOrExpr?: (ctx: OrExprContext) => void;
	/**
	 * Exit a parse tree produced by the `OrExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitOrExpr?: (ctx: OrExprContext) => void;

	/**
	 * Enter a parse tree produced by the `IfExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterIfExpr?: (ctx: IfExprContext) => void;
	/**
	 * Exit a parse tree produced by the `IfExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitIfExpr?: (ctx: IfExprContext) => void;

	/**
	 * Enter a parse tree produced by the `QueryExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterQueryExpr?: (ctx: QueryExprContext) => void;
	/**
	 * Exit a parse tree produced by the `QueryExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitQueryExpr?: (ctx: QueryExprContext) => void;

	/**
	 * Enter a parse tree produced by the `ValExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterValExpr?: (ctx: ValExprContext) => void;
	/**
	 * Exit a parse tree produced by the `ValExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitValExpr?: (ctx: ValExprContext) => void;

	/**
	 * Enter a parse tree produced by the `ContrExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterContrExpr?: (ctx: ContrExprContext) => void;
	/**
	 * Exit a parse tree produced by the `ContrExpr`
	 * labeled alternative in `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitContrExpr?: (ctx: ContrExprContext) => void;

	/**
	 * Enter a parse tree produced by the `TypePathExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	enterTypePathExpr?: (ctx: TypePathExprContext) => void;
	/**
	 * Exit a parse tree produced by the `TypePathExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	exitTypePathExpr?: (ctx: TypePathExprContext) => void;

	/**
	 * Enter a parse tree produced by the `ParamzdTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	enterParamzdTypeExpr?: (ctx: ParamzdTypeExprContext) => void;
	/**
	 * Exit a parse tree produced by the `ParamzdTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	exitParamzdTypeExpr?: (ctx: ParamzdTypeExprContext) => void;

	/**
	 * Enter a parse tree produced by the `TupleTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	enterTupleTypeExpr?: (ctx: TupleTypeExprContext) => void;
	/**
	 * Exit a parse tree produced by the `TupleTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	exitTupleTypeExpr?: (ctx: TupleTypeExprContext) => void;

	/**
	 * Enter a parse tree produced by the `ShortOptionTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	enterShortOptionTypeExpr?: (ctx: ShortOptionTypeExprContext) => void;
	/**
	 * Exit a parse tree produced by the `ShortOptionTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	exitShortOptionTypeExpr?: (ctx: ShortOptionTypeExprContext) => void;

	/**
	 * Enter a parse tree produced by the `ShortVecTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	enterShortVecTypeExpr?: (ctx: ShortVecTypeExprContext) => void;
	/**
	 * Exit a parse tree produced by the `ShortVecTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	exitShortVecTypeExpr?: (ctx: ShortVecTypeExprContext) => void;

	/**
	 * Enter a parse tree produced by the `RefTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	enterRefTypeExpr?: (ctx: RefTypeExprContext) => void;
	/**
	 * Exit a parse tree produced by the `RefTypeExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	exitRefTypeExpr?: (ctx: RefTypeExprContext) => void;

	/**
	 * Enter a parse tree produced by the `AddrExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	enterAddrExpr?: (ctx: AddrExprContext) => void;
	/**
	 * Exit a parse tree produced by the `AddrExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	exitAddrExpr?: (ctx: AddrExprContext) => void;

	/**
	 * Enter a parse tree produced by the `TypeDefnExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	enterTypeDefnExpr?: (ctx: TypeDefnExprContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeDefnExpr`
	 * labeled alternative in `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	exitTypeDefnExpr?: (ctx: TypeDefnExprContext) => void;

	/**
	 * Enter a parse tree produced by the `LetStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterLetStmt?: (ctx: LetStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `LetStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitLetStmt?: (ctx: LetStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `AssignStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterAssignStmt?: (ctx: AssignStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `AssignStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitAssignStmt?: (ctx: AssignStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `IfStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterIfStmt?: (ctx: IfStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `IfStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitIfStmt?: (ctx: IfStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `ForStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterForStmt?: (ctx: ForStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `ForStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitForStmt?: (ctx: ForStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `ExecStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterExecStmt?: (ctx: ExecStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `ExecStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitExecStmt?: (ctx: ExecStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `ExecuteNowStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterExecuteNowStmt?: (ctx: ExecuteNowStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `ExecuteNowStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitExecuteNowStmt?: (ctx: ExecuteNowStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `EmitStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterEmitStmt?: (ctx: EmitStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `EmitStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitEmitStmt?: (ctx: EmitStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `ReturnStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterReturnStmt?: (ctx: ReturnStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `ReturnStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitReturnStmt?: (ctx: ReturnStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `FailStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterFailStmt?: (ctx: FailStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `FailStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitFailStmt?: (ctx: FailStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `ExprStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterExprStmt?: (ctx: ExprStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `ExprStmt`
	 * labeled alternative in `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitExprStmt?: (ctx: ExprStmtContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.sourceFile`.
	 * @param ctx the parse tree
	 */
	enterSourceFile?: (ctx: SourceFileContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.sourceFile`.
	 * @param ctx the parse tree
	 */
	exitSourceFile?: (ctx: SourceFileContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.topLevelStmt`.
	 * @param ctx the parse tree
	 */
	enterTopLevelStmt?: (ctx: TopLevelStmtContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.topLevelStmt`.
	 * @param ctx the parse tree
	 */
	exitTopLevelStmt?: (ctx: TopLevelStmtContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.contractDefn`.
	 * @param ctx the parse tree
	 */
	enterContractDefn?: (ctx: ContractDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.contractDefn`.
	 * @param ctx the parse tree
	 */
	exitContractDefn?: (ctx: ContractDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.interfaceDefn`.
	 * @param ctx the parse tree
	 */
	enterInterfaceDefn?: (ctx: InterfaceDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.interfaceDefn`.
	 * @param ctx the parse tree
	 */
	exitInterfaceDefn?: (ctx: InterfaceDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.importStmt`.
	 * @param ctx the parse tree
	 */
	enterImportStmt?: (ctx: ImportStmtContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.importStmt`.
	 * @param ctx the parse tree
	 */
	exitImportStmt?: (ctx: ImportStmtContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.importList`.
	 * @param ctx the parse tree
	 */
	enterImportList?: (ctx: ImportListContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.importList`.
	 * @param ctx the parse tree
	 */
	exitImportList?: (ctx: ImportListContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.importItem`.
	 * @param ctx the parse tree
	 */
	enterImportItem?: (ctx: ImportItemContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.importItem`.
	 * @param ctx the parse tree
	 */
	exitImportItem?: (ctx: ImportItemContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.contractBody`.
	 * @param ctx the parse tree
	 */
	enterContractBody?: (ctx: ContractBodyContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.contractBody`.
	 * @param ctx the parse tree
	 */
	exitContractBody?: (ctx: ContractBodyContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.interfaceBody`.
	 * @param ctx the parse tree
	 */
	enterInterfaceBody?: (ctx: InterfaceBodyContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.interfaceBody`.
	 * @param ctx the parse tree
	 */
	exitInterfaceBody?: (ctx: InterfaceBodyContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.contractItem`.
	 * @param ctx the parse tree
	 */
	enterContractItem?: (ctx: ContractItemContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.contractItem`.
	 * @param ctx the parse tree
	 */
	exitContractItem?: (ctx: ContractItemContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.interfaceItem`.
	 * @param ctx the parse tree
	 */
	enterInterfaceItem?: (ctx: InterfaceItemContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.interfaceItem`.
	 * @param ctx the parse tree
	 */
	exitInterfaceItem?: (ctx: InterfaceItemContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.errorDefn`.
	 * @param ctx the parse tree
	 */
	enterErrorDefn?: (ctx: ErrorDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.errorDefn`.
	 * @param ctx the parse tree
	 */
	exitErrorDefn?: (ctx: ErrorDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.errorDefnBlock`.
	 * @param ctx the parse tree
	 */
	enterErrorDefnBlock?: (ctx: ErrorDefnBlockContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.errorDefnBlock`.
	 * @param ctx the parse tree
	 */
	exitErrorDefnBlock?: (ctx: ErrorDefnBlockContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.errorDefnBlock_item`.
	 * @param ctx the parse tree
	 */
	enterErrorDefnBlock_item?: (ctx: ErrorDefnBlock_itemContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.errorDefnBlock_item`.
	 * @param ctx the parse tree
	 */
	exitErrorDefnBlock_item?: (ctx: ErrorDefnBlock_itemContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.eventDefn`.
	 * @param ctx the parse tree
	 */
	enterEventDefn?: (ctx: EventDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.eventDefn`.
	 * @param ctx the parse tree
	 */
	exitEventDefn?: (ctx: EventDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.eventDefnBlock`.
	 * @param ctx the parse tree
	 */
	enterEventDefnBlock?: (ctx: EventDefnBlockContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.eventDefnBlock`.
	 * @param ctx the parse tree
	 */
	exitEventDefnBlock?: (ctx: EventDefnBlockContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.eventDefnBlock_item`.
	 * @param ctx the parse tree
	 */
	enterEventDefnBlock_item?: (ctx: EventDefnBlock_itemContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.eventDefnBlock_item`.
	 * @param ctx the parse tree
	 */
	exitEventDefnBlock_item?: (ctx: EventDefnBlock_itemContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.stateDefn`.
	 * @param ctx the parse tree
	 */
	enterStateDefn?: (ctx: StateDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.stateDefn`.
	 * @param ctx the parse tree
	 */
	exitStateDefn?: (ctx: StateDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.stateDefnBlock`.
	 * @param ctx the parse tree
	 */
	enterStateDefnBlock?: (ctx: StateDefnBlockContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.stateDefnBlock`.
	 * @param ctx the parse tree
	 */
	exitStateDefnBlock?: (ctx: StateDefnBlockContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.stateDefnBlock_item`.
	 * @param ctx the parse tree
	 */
	enterStateDefnBlock_item?: (ctx: StateDefnBlock_itemContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.stateDefnBlock_item`.
	 * @param ctx the parse tree
	 */
	exitStateDefnBlock_item?: (ctx: StateDefnBlock_itemContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.itemDefn`.
	 * @param ctx the parse tree
	 */
	enterItemDefn?: (ctx: ItemDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.itemDefn`.
	 * @param ctx the parse tree
	 */
	exitItemDefn?: (ctx: ItemDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.mapDefn`.
	 * @param ctx the parse tree
	 */
	enterMapDefn?: (ctx: MapDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.mapDefn`.
	 * @param ctx the parse tree
	 */
	exitMapDefn?: (ctx: MapDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.mapDefnKeys`.
	 * @param ctx the parse tree
	 */
	enterMapDefnKeys?: (ctx: MapDefnKeysContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.mapDefnKeys`.
	 * @param ctx the parse tree
	 */
	exitMapDefnKeys?: (ctx: MapDefnKeysContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.mapDefnKey`.
	 * @param ctx the parse tree
	 */
	enterMapDefnKey?: (ctx: MapDefnKeyContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.mapDefnKey`.
	 * @param ctx the parse tree
	 */
	exitMapDefnKey?: (ctx: MapDefnKeyContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.instantiateDefn`.
	 * @param ctx the parse tree
	 */
	enterInstantiateDefn?: (ctx: InstantiateDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.instantiateDefn`.
	 * @param ctx the parse tree
	 */
	exitInstantiateDefn?: (ctx: InstantiateDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.instantiateDecl`.
	 * @param ctx the parse tree
	 */
	enterInstantiateDecl?: (ctx: InstantiateDeclContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.instantiateDecl`.
	 * @param ctx the parse tree
	 */
	exitInstantiateDecl?: (ctx: InstantiateDeclContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.execDefn`.
	 * @param ctx the parse tree
	 */
	enterExecDefn?: (ctx: ExecDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.execDefn`.
	 * @param ctx the parse tree
	 */
	exitExecDefn?: (ctx: ExecDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.execDefnBlock`.
	 * @param ctx the parse tree
	 */
	enterExecDefnBlock?: (ctx: ExecDefnBlockContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.execDefnBlock`.
	 * @param ctx the parse tree
	 */
	exitExecDefnBlock?: (ctx: ExecDefnBlockContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.execDefnBlock_item`.
	 * @param ctx the parse tree
	 */
	enterExecDefnBlock_item?: (ctx: ExecDefnBlock_itemContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.execDefnBlock_item`.
	 * @param ctx the parse tree
	 */
	exitExecDefnBlock_item?: (ctx: ExecDefnBlock_itemContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.execDecl`.
	 * @param ctx the parse tree
	 */
	enterExecDecl?: (ctx: ExecDeclContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.execDecl`.
	 * @param ctx the parse tree
	 */
	exitExecDecl?: (ctx: ExecDeclContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.execDeclBlock`.
	 * @param ctx the parse tree
	 */
	enterExecDeclBlock?: (ctx: ExecDeclBlockContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.execDeclBlock`.
	 * @param ctx the parse tree
	 */
	exitExecDeclBlock?: (ctx: ExecDeclBlockContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.execDeclBlock_item`.
	 * @param ctx the parse tree
	 */
	enterExecDeclBlock_item?: (ctx: ExecDeclBlock_itemContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.execDeclBlock_item`.
	 * @param ctx the parse tree
	 */
	exitExecDeclBlock_item?: (ctx: ExecDeclBlock_itemContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.queryDefn`.
	 * @param ctx the parse tree
	 */
	enterQueryDefn?: (ctx: QueryDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.queryDefn`.
	 * @param ctx the parse tree
	 */
	exitQueryDefn?: (ctx: QueryDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.queryDefnBlock`.
	 * @param ctx the parse tree
	 */
	enterQueryDefnBlock?: (ctx: QueryDefnBlockContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.queryDefnBlock`.
	 * @param ctx the parse tree
	 */
	exitQueryDefnBlock?: (ctx: QueryDefnBlockContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.queryDefnBlock_item`.
	 * @param ctx the parse tree
	 */
	enterQueryDefnBlock_item?: (ctx: QueryDefnBlock_itemContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.queryDefnBlock_item`.
	 * @param ctx the parse tree
	 */
	exitQueryDefnBlock_item?: (ctx: QueryDefnBlock_itemContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.queryDecl`.
	 * @param ctx the parse tree
	 */
	enterQueryDecl?: (ctx: QueryDeclContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.queryDecl`.
	 * @param ctx the parse tree
	 */
	exitQueryDecl?: (ctx: QueryDeclContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.queryDeclBlock`.
	 * @param ctx the parse tree
	 */
	enterQueryDeclBlock?: (ctx: QueryDeclBlockContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.queryDeclBlock`.
	 * @param ctx the parse tree
	 */
	exitQueryDeclBlock?: (ctx: QueryDeclBlockContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.queryDeclBlock_item`.
	 * @param ctx the parse tree
	 */
	enterQueryDeclBlock_item?: (ctx: QueryDeclBlock_itemContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.queryDeclBlock_item`.
	 * @param ctx the parse tree
	 */
	exitQueryDeclBlock_item?: (ctx: QueryDeclBlock_itemContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.migrateDefn`.
	 * @param ctx the parse tree
	 */
	enterMigrateDefn?: (ctx: MigrateDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.migrateDefn`.
	 * @param ctx the parse tree
	 */
	exitMigrateDefn?: (ctx: MigrateDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.migrateDecl`.
	 * @param ctx the parse tree
	 */
	enterMigrateDecl?: (ctx: MigrateDeclContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.migrateDecl`.
	 * @param ctx the parse tree
	 */
	exitMigrateDecl?: (ctx: MigrateDeclContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.enumVariant`.
	 * @param ctx the parse tree
	 */
	enterEnumVariant?: (ctx: EnumVariantContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.enumVariant`.
	 * @param ctx the parse tree
	 */
	exitEnumVariant?: (ctx: EnumVariantContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.enumVariant_struct`.
	 * @param ctx the parse tree
	 */
	enterEnumVariant_struct?: (ctx: EnumVariant_structContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.enumVariant_struct`.
	 * @param ctx the parse tree
	 */
	exitEnumVariant_struct?: (ctx: EnumVariant_structContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.enumVariant_tuple`.
	 * @param ctx the parse tree
	 */
	enterEnumVariant_tuple?: (ctx: EnumVariant_tupleContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.enumVariant_tuple`.
	 * @param ctx the parse tree
	 */
	exitEnumVariant_tuple?: (ctx: EnumVariant_tupleContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.tupleMembers`.
	 * @param ctx the parse tree
	 */
	enterTupleMembers?: (ctx: TupleMembersContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.tupleMembers`.
	 * @param ctx the parse tree
	 */
	exitTupleMembers?: (ctx: TupleMembersContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.parenStructMembers`.
	 * @param ctx the parse tree
	 */
	enterParenStructMembers?: (ctx: ParenStructMembersContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.parenStructMembers`.
	 * @param ctx the parse tree
	 */
	exitParenStructMembers?: (ctx: ParenStructMembersContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.curlyStructMembers`.
	 * @param ctx the parse tree
	 */
	enterCurlyStructMembers?: (ctx: CurlyStructMembersContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.curlyStructMembers`.
	 * @param ctx the parse tree
	 */
	exitCurlyStructMembers?: (ctx: CurlyStructMembersContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.structMember`.
	 * @param ctx the parse tree
	 */
	enterStructMember?: (ctx: StructMemberContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.structMember`.
	 * @param ctx the parse tree
	 */
	exitStructMember?: (ctx: StructMemberContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	enterTypeExpr?: (ctx: TypeExprContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.typeExpr`.
	 * @param ctx the parse tree
	 */
	exitTypeExpr?: (ctx: TypeExprContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.typeParam`.
	 * @param ctx the parse tree
	 */
	enterTypeParam?: (ctx: TypeParamContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.typeParam`.
	 * @param ctx the parse tree
	 */
	exitTypeParam?: (ctx: TypeParamContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.pathList`.
	 * @param ctx the parse tree
	 */
	enterPathList?: (ctx: PathListContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.pathList`.
	 * @param ctx the parse tree
	 */
	exitPathList?: (ctx: PathListContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.typePath`.
	 * @param ctx the parse tree
	 */
	enterTypePath?: (ctx: TypePathContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.typePath`.
	 * @param ctx the parse tree
	 */
	exitTypePath?: (ctx: TypePathContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.typeDefn`.
	 * @param ctx the parse tree
	 */
	enterTypeDefn?: (ctx: TypeDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.typeDefn`.
	 * @param ctx the parse tree
	 */
	exitTypeDefn?: (ctx: TypeDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.structDefn`.
	 * @param ctx the parse tree
	 */
	enterStructDefn?: (ctx: StructDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.structDefn`.
	 * @param ctx the parse tree
	 */
	exitStructDefn?: (ctx: StructDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.enumDefn`.
	 * @param ctx the parse tree
	 */
	enterEnumDefn?: (ctx: EnumDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.enumDefn`.
	 * @param ctx the parse tree
	 */
	exitEnumDefn?: (ctx: EnumDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.enumVariantList`.
	 * @param ctx the parse tree
	 */
	enterEnumVariantList?: (ctx: EnumVariantListContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.enumVariantList`.
	 * @param ctx the parse tree
	 */
	exitEnumVariantList?: (ctx: EnumVariantListContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.typeAliasDefn`.
	 * @param ctx the parse tree
	 */
	enterTypeAliasDefn?: (ctx: TypeAliasDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.typeAliasDefn`.
	 * @param ctx the parse tree
	 */
	exitTypeAliasDefn?: (ctx: TypeAliasDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.namedFnDecl`.
	 * @param ctx the parse tree
	 */
	enterNamedFnDecl?: (ctx: NamedFnDeclContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.namedFnDecl`.
	 * @param ctx the parse tree
	 */
	exitNamedFnDecl?: (ctx: NamedFnDeclContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.namedFnDefn`.
	 * @param ctx the parse tree
	 */
	enterNamedFnDefn?: (ctx: NamedFnDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.namedFnDefn`.
	 * @param ctx the parse tree
	 */
	exitNamedFnDefn?: (ctx: NamedFnDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.fnDefn`.
	 * @param ctx the parse tree
	 */
	enterFnDefn?: (ctx: FnDefnContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.fnDefn`.
	 * @param ctx the parse tree
	 */
	exitFnDefn?: (ctx: FnDefnContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.fnType`.
	 * @param ctx the parse tree
	 */
	enterFnType?: (ctx: FnTypeContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.fnType`.
	 * @param ctx the parse tree
	 */
	exitFnType?: (ctx: FnTypeContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.fnArgs`.
	 * @param ctx the parse tree
	 */
	enterFnArgs?: (ctx: FnArgsContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.fnArgs`.
	 * @param ctx the parse tree
	 */
	exitFnArgs?: (ctx: FnArgsContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.fnArgList`.
	 * @param ctx the parse tree
	 */
	enterFnArgList?: (ctx: FnArgListContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.fnArgList`.
	 * @param ctx the parse tree
	 */
	exitFnArgList?: (ctx: FnArgListContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.fnArg`.
	 * @param ctx the parse tree
	 */
	enterFnArg?: (ctx: FnArgContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.fnArg`.
	 * @param ctx the parse tree
	 */
	exitFnArg?: (ctx: FnArgContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.fnBody`.
	 * @param ctx the parse tree
	 */
	enterFnBody?: (ctx: FnBodyContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.fnBody`.
	 * @param ctx the parse tree
	 */
	exitFnBody?: (ctx: FnBodyContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmt?: (ctx: StmtContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmt?: (ctx: StmtContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.letStmt_`.
	 * @param ctx the parse tree
	 */
	enterLetStmt_?: (ctx: LetStmt_Context) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.letStmt_`.
	 * @param ctx the parse tree
	 */
	exitLetStmt_?: (ctx: LetStmt_Context) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.letLHS`.
	 * @param ctx the parse tree
	 */
	enterLetLHS?: (ctx: LetLHSContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.letLHS`.
	 * @param ctx the parse tree
	 */
	exitLetLHS?: (ctx: LetLHSContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.assignStmt_`.
	 * @param ctx the parse tree
	 */
	enterAssignStmt_?: (ctx: AssignStmt_Context) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.assignStmt_`.
	 * @param ctx the parse tree
	 */
	exitAssignStmt_?: (ctx: AssignStmt_Context) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.assignLHS`.
	 * @param ctx the parse tree
	 */
	enterAssignLHS?: (ctx: AssignLHSContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.assignLHS`.
	 * @param ctx the parse tree
	 */
	exitAssignLHS?: (ctx: AssignLHSContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.innerAssign`.
	 * @param ctx the parse tree
	 */
	enterInnerAssign?: (ctx: InnerAssignContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.innerAssign`.
	 * @param ctx the parse tree
	 */
	exitInnerAssign?: (ctx: InnerAssignContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.innerPath`.
	 * @param ctx the parse tree
	 */
	enterInnerPath?: (ctx: InnerPathContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.innerPath`.
	 * @param ctx the parse tree
	 */
	exitInnerPath?: (ctx: InnerPathContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.msg`.
	 * @param ctx the parse tree
	 */
	enterMsg?: (ctx: MsgContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.msg`.
	 * @param ctx the parse tree
	 */
	exitMsg?: (ctx: MsgContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.val`.
	 * @param ctx the parse tree
	 */
	enterVal?: (ctx: ValContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.val`.
	 * @param ctx the parse tree
	 */
	exitVal?: (ctx: ValContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.structVal_`.
	 * @param ctx the parse tree
	 */
	enterStructVal_?: (ctx: StructVal_Context) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.structVal_`.
	 * @param ctx the parse tree
	 */
	exitStructVal_?: (ctx: StructVal_Context) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.structValMembers`.
	 * @param ctx the parse tree
	 */
	enterStructValMembers?: (ctx: StructValMembersContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.structValMembers`.
	 * @param ctx the parse tree
	 */
	exitStructValMembers?: (ctx: StructValMembersContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.structValMember`.
	 * @param ctx the parse tree
	 */
	enterStructValMember?: (ctx: StructValMemberContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.structValMember`.
	 * @param ctx the parse tree
	 */
	exitStructValMember?: (ctx: StructValMemberContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.ifExpr_`.
	 * @param ctx the parse tree
	 */
	enterIfExpr_?: (ctx: IfExpr_Context) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.ifExpr_`.
	 * @param ctx the parse tree
	 */
	exitIfExpr_?: (ctx: IfExpr_Context) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.ifClause_`.
	 * @param ctx the parse tree
	 */
	enterIfClause_?: (ctx: IfClause_Context) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.ifClause_`.
	 * @param ctx the parse tree
	 */
	exitIfClause_?: (ctx: IfClause_Context) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.elseIfClauses`.
	 * @param ctx the parse tree
	 */
	enterElseIfClauses?: (ctx: ElseIfClausesContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.elseIfClauses`.
	 * @param ctx the parse tree
	 */
	exitElseIfClauses?: (ctx: ElseIfClausesContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.elseClause`.
	 * @param ctx the parse tree
	 */
	enterElseClause?: (ctx: ElseClauseContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.elseClause`.
	 * @param ctx the parse tree
	 */
	exitElseClause?: (ctx: ElseClauseContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.forStmt_`.
	 * @param ctx the parse tree
	 */
	enterForStmt_?: (ctx: ForStmt_Context) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.forStmt_`.
	 * @param ctx the parse tree
	 */
	exitForStmt_?: (ctx: ForStmt_Context) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.identList`.
	 * @param ctx the parse tree
	 */
	enterIdentList?: (ctx: IdentListContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.identList`.
	 * @param ctx the parse tree
	 */
	exitIdentList?: (ctx: IdentListContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.exprList`.
	 * @param ctx the parse tree
	 */
	enterExprList?: (ctx: ExprListContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.exprList`.
	 * @param ctx the parse tree
	 */
	exitExprList?: (ctx: ExprListContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.namedExprList`.
	 * @param ctx the parse tree
	 */
	enterNamedExprList?: (ctx: NamedExprListContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.namedExprList`.
	 * @param ctx the parse tree
	 */
	exitNamedExprList?: (ctx: NamedExprListContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.namedExpr`.
	 * @param ctx the parse tree
	 */
	enterNamedExpr?: (ctx: NamedExprContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.namedExpr`.
	 * @param ctx the parse tree
	 */
	exitNamedExpr?: (ctx: NamedExprContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.ident`.
	 * @param ctx the parse tree
	 */
	enterIdent?: (ctx: IdentContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.ident`.
	 * @param ctx the parse tree
	 */
	exitIdent?: (ctx: IdentContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.cwspec`.
	 * @param ctx the parse tree
	 */
	enterCwspec?: (ctx: CwspecContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.cwspec`.
	 * @param ctx the parse tree
	 */
	exitCwspec?: (ctx: CwspecContext) => void;

	/**
	 * Enter a parse tree produced by `CWScriptParser.reservedKeyword`.
	 * @param ctx the parse tree
	 */
	enterReservedKeyword?: (ctx: ReservedKeywordContext) => void;
	/**
	 * Exit a parse tree produced by `CWScriptParser.reservedKeyword`.
	 * @param ctx the parse tree
	 */
	exitReservedKeyword?: (ctx: ReservedKeywordContext) => void;
}

