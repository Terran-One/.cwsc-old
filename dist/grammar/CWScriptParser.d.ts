import { ATN } from "antlr4ts/atn/ATN";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { RuleContext } from "antlr4ts/RuleContext";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { CWScriptParserListener } from "./CWScriptParserListener";
import { CWScriptParserVisitor } from "./CWScriptParserVisitor";
export declare class CWScriptParser extends Parser {
    static readonly CONTRACT = 1;
    static readonly INTERFACE = 2;
    static readonly IMPORT = 3;
    static readonly IMPLEMENTS = 4;
    static readonly EXTENSION = 5;
    static readonly REQUIRES = 6;
    static readonly EXTENDS = 7;
    static readonly ERROR = 8;
    static readonly EVENT = 9;
    static readonly INSTANTIATE = 10;
    static readonly EXEC = 11;
    static readonly EXECUTE_NOW = 12;
    static readonly QUERY = 13;
    static readonly MIGRATE = 14;
    static readonly FOR = 15;
    static readonly IN = 16;
    static readonly FROM = 17;
    static readonly STATE = 18;
    static readonly TIMES = 19;
    static readonly IF = 20;
    static readonly ELSE = 21;
    static readonly AND = 22;
    static readonly OR = 23;
    static readonly TRUE = 24;
    static readonly FALSE = 25;
    static readonly FN = 26;
    static readonly LET = 27;
    static readonly FAIL = 28;
    static readonly RETURN = 29;
    static readonly STRUCT = 30;
    static readonly ENUM = 31;
    static readonly TYPE = 32;
    static readonly EMIT = 33;
    static readonly AS = 34;
    static readonly LPAREN = 35;
    static readonly RPAREN = 36;
    static readonly LBRACK = 37;
    static readonly RBRACK = 38;
    static readonly LBRACE = 39;
    static readonly RBRACE = 40;
    static readonly DOT = 41;
    static readonly COMMA = 42;
    static readonly QUEST = 43;
    static readonly EXCLAM = 44;
    static readonly COLON = 45;
    static readonly D_COLON = 46;
    static readonly DOLLAR = 47;
    static readonly HASH = 48;
    static readonly AT = 49;
    static readonly AMP = 50;
    static readonly ARROW = 51;
    static readonly FAT_ARROW = 52;
    static readonly S_QUOTE = 53;
    static readonly D_QUOTE = 54;
    static readonly EQ = 55;
    static readonly EQEQ = 56;
    static readonly NEQ = 57;
    static readonly PLUS = 58;
    static readonly PLUS_EQ = 59;
    static readonly MINUS = 60;
    static readonly MINUS_EQ = 61;
    static readonly MUL = 62;
    static readonly MUL_EQ = 63;
    static readonly DIV = 64;
    static readonly DIV_EQ = 65;
    static readonly MOD = 66;
    static readonly MOD_EQ = 67;
    static readonly LT = 68;
    static readonly LT_EQ = 69;
    static readonly GT = 70;
    static readonly GT_EQ = 71;
    static readonly POW = 72;
    static readonly Ident = 73;
    static readonly StringLiteral = 74;
    static readonly IntegerLiteral = 75;
    static readonly DecimalLiteral = 76;
    static readonly CWSPEC_LINE_COMMENT = 77;
    static readonly CWSPEC_BLOCK_COMMENT = 78;
    static readonly LINE_COMMENT = 79;
    static readonly BLOCK_COMMENT = 80;
    static readonly WS = 81;
    static readonly RULE_sourceFile = 0;
    static readonly RULE_topLevelStmt = 1;
    static readonly RULE_contractDefn = 2;
    static readonly RULE_interfaceDefn = 3;
    static readonly RULE_importStmt = 4;
    static readonly RULE_importList = 5;
    static readonly RULE_importItem = 6;
    static readonly RULE_contractBody = 7;
    static readonly RULE_interfaceBody = 8;
    static readonly RULE_contractItem = 9;
    static readonly RULE_interfaceItem = 10;
    static readonly RULE_errorDefn = 11;
    static readonly RULE_errorDefnBlock = 12;
    static readonly RULE_errorDefnBlock_item = 13;
    static readonly RULE_eventDefn = 14;
    static readonly RULE_eventDefnBlock = 15;
    static readonly RULE_eventDefnBlock_item = 16;
    static readonly RULE_stateDefn = 17;
    static readonly RULE_stateDefnBlock = 18;
    static readonly RULE_stateDefnBlock_item = 19;
    static readonly RULE_itemDefn = 20;
    static readonly RULE_mapDefn = 21;
    static readonly RULE_mapDefnKeys = 22;
    static readonly RULE_mapDefnKey = 23;
    static readonly RULE_instantiateDefn = 24;
    static readonly RULE_instantiateDecl = 25;
    static readonly RULE_execDefn = 26;
    static readonly RULE_execDefnBlock = 27;
    static readonly RULE_execDefnBlock_item = 28;
    static readonly RULE_execDecl = 29;
    static readonly RULE_execDeclBlock = 30;
    static readonly RULE_execDeclBlock_item = 31;
    static readonly RULE_queryDefn = 32;
    static readonly RULE_queryDefnBlock = 33;
    static readonly RULE_queryDefnBlock_item = 34;
    static readonly RULE_queryDecl = 35;
    static readonly RULE_queryDeclBlock = 36;
    static readonly RULE_queryDeclBlock_item = 37;
    static readonly RULE_migrateDefn = 38;
    static readonly RULE_migrateDecl = 39;
    static readonly RULE_enumVariant = 40;
    static readonly RULE_enumVariant_struct = 41;
    static readonly RULE_enumVariant_tuple = 42;
    static readonly RULE_tupleMembers = 43;
    static readonly RULE_parenStructMembers = 44;
    static readonly RULE_curlyStructMembers = 45;
    static readonly RULE_structMember = 46;
    static readonly RULE_typeExpr = 47;
    static readonly RULE_typeParam = 48;
    static readonly RULE_pathList = 49;
    static readonly RULE_typePath = 50;
    static readonly RULE_typeDefn = 51;
    static readonly RULE_structDefn = 52;
    static readonly RULE_enumDefn = 53;
    static readonly RULE_enumVariantList = 54;
    static readonly RULE_typeAliasDefn = 55;
    static readonly RULE_namedFnDecl = 56;
    static readonly RULE_namedFnDefn = 57;
    static readonly RULE_fnDefn = 58;
    static readonly RULE_fnType = 59;
    static readonly RULE_fnArgs = 60;
    static readonly RULE_fnArgList = 61;
    static readonly RULE_fnArg = 62;
    static readonly RULE_fnBody = 63;
    static readonly RULE_stmt = 64;
    static readonly RULE_letStmt_ = 65;
    static readonly RULE_letLHS = 66;
    static readonly RULE_assignStmt_ = 67;
    static readonly RULE_assignLHS = 68;
    static readonly RULE_innerAssign = 69;
    static readonly RULE_innerPath = 70;
    static readonly RULE_msg = 71;
    static readonly RULE_expr = 72;
    static readonly RULE_val = 73;
    static readonly RULE_structVal_ = 74;
    static readonly RULE_structValMembers = 75;
    static readonly RULE_structValMember = 76;
    static readonly RULE_ifExpr_ = 77;
    static readonly RULE_ifClause_ = 78;
    static readonly RULE_elseIfClauses = 79;
    static readonly RULE_elseClause = 80;
    static readonly RULE_forStmt_ = 81;
    static readonly RULE_identList = 82;
    static readonly RULE_exprList = 83;
    static readonly RULE_namedExprList = 84;
    static readonly RULE_namedExpr = 85;
    static readonly RULE_ident = 86;
    static readonly RULE_cwspec = 87;
    static readonly RULE_reservedKeyword = 88;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    get vocabulary(): Vocabulary;
    get grammarFileName(): string;
    get ruleNames(): string[];
    get serializedATN(): string;
    protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException;
    constructor(input: TokenStream);
    sourceFile(): SourceFileContext;
    topLevelStmt(): TopLevelStmtContext;
    contractDefn(): ContractDefnContext;
    interfaceDefn(): InterfaceDefnContext;
    importStmt(): ImportStmtContext;
    importList(): ImportListContext;
    importItem(): ImportItemContext;
    contractBody(): ContractBodyContext;
    interfaceBody(): InterfaceBodyContext;
    contractItem(): ContractItemContext;
    interfaceItem(): InterfaceItemContext;
    errorDefn(): ErrorDefnContext;
    errorDefnBlock(): ErrorDefnBlockContext;
    errorDefnBlock_item(): ErrorDefnBlock_itemContext;
    eventDefn(): EventDefnContext;
    eventDefnBlock(): EventDefnBlockContext;
    eventDefnBlock_item(): EventDefnBlock_itemContext;
    stateDefn(): StateDefnContext;
    stateDefnBlock(): StateDefnBlockContext;
    stateDefnBlock_item(): StateDefnBlock_itemContext;
    itemDefn(): ItemDefnContext;
    mapDefn(): MapDefnContext;
    mapDefnKeys(): MapDefnKeysContext;
    mapDefnKey(): MapDefnKeyContext;
    instantiateDefn(): InstantiateDefnContext;
    instantiateDecl(): InstantiateDeclContext;
    execDefn(): ExecDefnContext;
    execDefnBlock(): ExecDefnBlockContext;
    execDefnBlock_item(): ExecDefnBlock_itemContext;
    execDecl(): ExecDeclContext;
    execDeclBlock(): ExecDeclBlockContext;
    execDeclBlock_item(): ExecDeclBlock_itemContext;
    queryDefn(): QueryDefnContext;
    queryDefnBlock(): QueryDefnBlockContext;
    queryDefnBlock_item(): QueryDefnBlock_itemContext;
    queryDecl(): QueryDeclContext;
    queryDeclBlock(): QueryDeclBlockContext;
    queryDeclBlock_item(): QueryDeclBlock_itemContext;
    migrateDefn(): MigrateDefnContext;
    migrateDecl(): MigrateDeclContext;
    enumVariant(): EnumVariantContext;
    enumVariant_struct(): EnumVariant_structContext;
    enumVariant_tuple(): EnumVariant_tupleContext;
    tupleMembers(): TupleMembersContext;
    parenStructMembers(): ParenStructMembersContext;
    curlyStructMembers(): CurlyStructMembersContext;
    structMember(): StructMemberContext;
    typeExpr(): TypeExprContext;
    typeExpr(_p: number): TypeExprContext;
    typeParam(): TypeParamContext;
    pathList(): PathListContext;
    typePath(): TypePathContext;
    typeDefn(): TypeDefnContext;
    structDefn(): StructDefnContext;
    enumDefn(): EnumDefnContext;
    enumVariantList(): EnumVariantListContext;
    typeAliasDefn(): TypeAliasDefnContext;
    namedFnDecl(): NamedFnDeclContext;
    namedFnDefn(): NamedFnDefnContext;
    fnDefn(): FnDefnContext;
    fnType(): FnTypeContext;
    fnArgs(): FnArgsContext;
    fnArgList(): FnArgListContext;
    fnArg(): FnArgContext;
    fnBody(): FnBodyContext;
    stmt(): StmtContext;
    letStmt_(): LetStmt_Context;
    letLHS(): LetLHSContext;
    assignStmt_(): AssignStmt_Context;
    assignLHS(): AssignLHSContext;
    innerAssign(): InnerAssignContext;
    innerPath(): InnerPathContext;
    msg(): MsgContext;
    expr(): ExprContext;
    expr(_p: number): ExprContext;
    val(): ValContext;
    structVal_(): StructVal_Context;
    structValMembers(): StructValMembersContext;
    structValMember(): StructValMemberContext;
    ifExpr_(): IfExpr_Context;
    ifClause_(): IfClause_Context;
    elseIfClauses(): ElseIfClausesContext;
    elseClause(): ElseClauseContext;
    forStmt_(): ForStmt_Context;
    identList(): IdentListContext;
    exprList(): ExprListContext;
    namedExprList(): NamedExprListContext;
    namedExpr(): NamedExprContext;
    ident(): IdentContext;
    cwspec(): CwspecContext;
    reservedKeyword(): ReservedKeywordContext;
    sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private typeExpr_sempred;
    private expr_sempred;
    private static readonly _serializedATNSegments;
    private static readonly _serializedATNSegment0;
    private static readonly _serializedATNSegment1;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static get _ATN(): ATN;
}
export declare class SourceFileContext extends ParserRuleContext {
    _spec: CwspecContext;
    topLevelStmt(): TopLevelStmtContext[];
    topLevelStmt(i: number): TopLevelStmtContext;
    cwspec(): CwspecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class TopLevelStmtContext extends ParserRuleContext {
    contractDefn(): ContractDefnContext | undefined;
    interfaceDefn(): InterfaceDefnContext | undefined;
    importStmt(): ImportStmtContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ContractDefnContext extends ParserRuleContext {
    _spec: CwspecContext;
    _name: IdentContext;
    _baseContracts: IdentListContext;
    _interfaces: IdentListContext;
    CONTRACT(): TerminalNode;
    contractBody(): ContractBodyContext;
    ident(): IdentContext | undefined;
    EXTENDS(): TerminalNode | undefined;
    IMPLEMENTS(): TerminalNode | undefined;
    cwspec(): CwspecContext | undefined;
    identList(): IdentListContext[];
    identList(i: number): IdentListContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class InterfaceDefnContext extends ParserRuleContext {
    _spec: CwspecContext;
    _name: IdentContext;
    _baseInterfaces: IdentListContext;
    INTERFACE(): TerminalNode;
    interfaceBody(): InterfaceBodyContext;
    ident(): IdentContext | undefined;
    EXTENDS(): TerminalNode | undefined;
    cwspec(): CwspecContext | undefined;
    identList(): IdentListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ImportStmtContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ImportStmtContext): void;
}
export declare class ImportAllStmtContext extends ImportStmtContext {
    _fileName: Token;
    IMPORT(): TerminalNode;
    MUL(): TerminalNode;
    FROM(): TerminalNode;
    StringLiteral(): TerminalNode | undefined;
    constructor(ctx: ImportStmtContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ImportItemsStmtContext extends ImportStmtContext {
    _items: ImportListContext;
    _fileName: Token;
    IMPORT(): TerminalNode;
    FROM(): TerminalNode;
    StringLiteral(): TerminalNode | undefined;
    LPAREN(): TerminalNode | undefined;
    RPAREN(): TerminalNode | undefined;
    importList(): ImportListContext | undefined;
    COMMA(): TerminalNode | undefined;
    constructor(ctx: ImportStmtContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ImportListContext extends ParserRuleContext {
    _importItem: ImportItemContext;
    _importItems: ImportItemContext[];
    importItem(): ImportItemContext[];
    importItem(i: number): ImportItemContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ImportItemContext extends ParserRuleContext {
    _symbol: IdentContext;
    _alias: IdentContext;
    ident(): IdentContext[];
    ident(i: number): IdentContext;
    AS(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ContractBodyContext extends ParserRuleContext {
    _items: ContractItemContext;
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    contractItem(): ContractItemContext[];
    contractItem(i: number): ContractItemContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class InterfaceBodyContext extends ParserRuleContext {
    _items: InterfaceItemContext;
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    interfaceItem(): InterfaceItemContext[];
    interfaceItem(i: number): InterfaceItemContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ContractItemContext extends ParserRuleContext {
    typeDefn(): TypeDefnContext | undefined;
    fnDefn(): FnDefnContext | undefined;
    errorDefn(): ErrorDefnContext | undefined;
    errorDefnBlock(): ErrorDefnBlockContext | undefined;
    eventDefn(): EventDefnContext | undefined;
    eventDefnBlock(): EventDefnBlockContext | undefined;
    stateDefn(): StateDefnContext | undefined;
    stateDefnBlock(): StateDefnBlockContext | undefined;
    instantiateDefn(): InstantiateDefnContext | undefined;
    execDefn(): ExecDefnContext | undefined;
    execDefnBlock(): ExecDefnBlockContext | undefined;
    queryDefn(): QueryDefnContext | undefined;
    queryDefnBlock(): QueryDefnBlockContext | undefined;
    migrateDefn(): MigrateDefnContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class InterfaceItemContext extends ParserRuleContext {
    typeDefn(): TypeDefnContext | undefined;
    errorDefn(): ErrorDefnContext | undefined;
    errorDefnBlock(): ErrorDefnBlockContext | undefined;
    eventDefn(): EventDefnContext | undefined;
    eventDefnBlock(): EventDefnBlockContext | undefined;
    stateDefn(): StateDefnContext | undefined;
    stateDefnBlock(): StateDefnBlockContext | undefined;
    instantiateDecl(): InstantiateDeclContext | undefined;
    execDecl(): ExecDeclContext | undefined;
    execDeclBlock(): ExecDeclBlockContext | undefined;
    queryDecl(): QueryDeclContext | undefined;
    queryDeclBlock(): QueryDeclBlockContext | undefined;
    migrateDecl(): MigrateDeclContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ErrorDefnContext extends ParserRuleContext {
    _spec: CwspecContext;
    ERROR(): TerminalNode;
    enumVariant_struct(): EnumVariant_structContext;
    cwspec(): CwspecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ErrorDefnBlockContext extends ParserRuleContext {
    ERROR(): TerminalNode;
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    errorDefnBlock_item(): ErrorDefnBlock_itemContext[];
    errorDefnBlock_item(i: number): ErrorDefnBlock_itemContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ErrorDefnBlock_itemContext extends ParserRuleContext {
    _spec: CwspecContext;
    enumVariant_struct(): EnumVariant_structContext;
    cwspec(): CwspecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class EventDefnContext extends ParserRuleContext {
    _spec: CwspecContext;
    EVENT(): TerminalNode;
    enumVariant_struct(): EnumVariant_structContext;
    cwspec(): CwspecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class EventDefnBlockContext extends ParserRuleContext {
    EVENT(): TerminalNode;
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    eventDefnBlock_item(): EventDefnBlock_itemContext[];
    eventDefnBlock_item(i: number): EventDefnBlock_itemContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class EventDefnBlock_itemContext extends ParserRuleContext {
    _spec: CwspecContext;
    enumVariant_struct(): EnumVariant_structContext;
    cwspec(): CwspecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class StateDefnContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: StateDefnContext): void;
}
export declare class StateItemDefnContext extends StateDefnContext {
    _spec: CwspecContext;
    _item: ItemDefnContext;
    STATE(): TerminalNode;
    itemDefn(): ItemDefnContext | undefined;
    cwspec(): CwspecContext | undefined;
    constructor(ctx: StateDefnContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class StateMapDefnContext extends StateDefnContext {
    _spec: CwspecContext;
    _map: MapDefnContext;
    STATE(): TerminalNode;
    mapDefn(): MapDefnContext;
    cwspec(): CwspecContext | undefined;
    constructor(ctx: StateDefnContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class StateDefnBlockContext extends ParserRuleContext {
    STATE(): TerminalNode;
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    stateDefnBlock_item(): StateDefnBlock_itemContext[];
    stateDefnBlock_item(i: number): StateDefnBlock_itemContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class StateDefnBlock_itemContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: StateDefnBlock_itemContext): void;
}
export declare class StateBlockItemDefnContext extends StateDefnBlock_itemContext {
    _spec: CwspecContext;
    _item: ItemDefnContext;
    itemDefn(): ItemDefnContext | undefined;
    cwspec(): CwspecContext | undefined;
    constructor(ctx: StateDefnBlock_itemContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class StateBlockMapDefnContext extends StateDefnBlock_itemContext {
    _spec: CwspecContext;
    _map: MapDefnContext;
    mapDefn(): MapDefnContext | undefined;
    cwspec(): CwspecContext | undefined;
    constructor(ctx: StateDefnBlock_itemContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ItemDefnContext extends ParserRuleContext {
    _key: IdentContext;
    _valueType: TypeExprContext;
    COLON(): TerminalNode;
    ident(): IdentContext | undefined;
    typeExpr(): TypeExprContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class MapDefnContext extends ParserRuleContext {
    _key: IdentContext;
    _mapKeys: MapDefnKeysContext;
    _valueType: TypeExprContext;
    COLON(): TerminalNode;
    ident(): IdentContext | undefined;
    mapDefnKeys(): MapDefnKeysContext | undefined;
    typeExpr(): TypeExprContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class MapDefnKeysContext extends ParserRuleContext {
    LBRACK(): TerminalNode;
    mapDefnKey(): MapDefnKeyContext[];
    mapDefnKey(i: number): MapDefnKeyContext;
    RBRACK(): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class MapDefnKeyContext extends ParserRuleContext {
    _keyName: IdentContext;
    _keyType: TypeExprContext;
    COLON(): TerminalNode | undefined;
    typeExpr(): TypeExprContext | undefined;
    ident(): IdentContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class InstantiateDefnContext extends ParserRuleContext {
    _spec: CwspecContext;
    INSTANTIATE(): TerminalNode;
    fnArgs(): FnArgsContext;
    fnBody(): FnBodyContext;
    fnType(): FnTypeContext | undefined;
    cwspec(): CwspecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class InstantiateDeclContext extends ParserRuleContext {
    _spec: CwspecContext;
    INSTANTIATE(): TerminalNode;
    fnArgs(): FnArgsContext;
    fnType(): FnTypeContext | undefined;
    cwspec(): CwspecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ExecDefnContext extends ParserRuleContext {
    _spec: CwspecContext;
    EXEC(): TerminalNode;
    namedFnDefn(): NamedFnDefnContext;
    cwspec(): CwspecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ExecDefnBlockContext extends ParserRuleContext {
    EXEC(): TerminalNode;
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    execDefnBlock_item(): ExecDefnBlock_itemContext[];
    execDefnBlock_item(i: number): ExecDefnBlock_itemContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ExecDefnBlock_itemContext extends ParserRuleContext {
    _spec: CwspecContext;
    namedFnDefn(): NamedFnDefnContext;
    cwspec(): CwspecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ExecDeclContext extends ParserRuleContext {
    _spec: CwspecContext;
    EXEC(): TerminalNode;
    namedFnDecl(): NamedFnDeclContext;
    cwspec(): CwspecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ExecDeclBlockContext extends ParserRuleContext {
    EXEC(): TerminalNode;
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    execDeclBlock_item(): ExecDeclBlock_itemContext[];
    execDeclBlock_item(i: number): ExecDeclBlock_itemContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ExecDeclBlock_itemContext extends ParserRuleContext {
    _spec: CwspecContext;
    namedFnDecl(): NamedFnDeclContext;
    cwspec(): CwspecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class QueryDefnContext extends ParserRuleContext {
    _spec: CwspecContext;
    QUERY(): TerminalNode;
    namedFnDefn(): NamedFnDefnContext;
    cwspec(): CwspecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class QueryDefnBlockContext extends ParserRuleContext {
    QUERY(): TerminalNode;
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    queryDefnBlock_item(): QueryDefnBlock_itemContext[];
    queryDefnBlock_item(i: number): QueryDefnBlock_itemContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class QueryDefnBlock_itemContext extends ParserRuleContext {
    _spec: CwspecContext;
    namedFnDefn(): NamedFnDefnContext;
    cwspec(): CwspecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class QueryDeclContext extends ParserRuleContext {
    _spec: CwspecContext;
    QUERY(): TerminalNode;
    namedFnDecl(): NamedFnDeclContext;
    cwspec(): CwspecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class QueryDeclBlockContext extends ParserRuleContext {
    QUERY(): TerminalNode;
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    queryDeclBlock_item(): QueryDeclBlock_itemContext[];
    queryDeclBlock_item(i: number): QueryDeclBlock_itemContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class QueryDeclBlock_itemContext extends ParserRuleContext {
    _spec: CwspecContext;
    namedFnDecl(): NamedFnDeclContext;
    cwspec(): CwspecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class MigrateDefnContext extends ParserRuleContext {
    _spec: CwspecContext;
    MIGRATE(): TerminalNode;
    fnArgs(): FnArgsContext;
    fnBody(): FnBodyContext;
    fnType(): FnTypeContext | undefined;
    cwspec(): CwspecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class MigrateDeclContext extends ParserRuleContext {
    _spec: CwspecContext;
    MIGRATE(): TerminalNode;
    fnArgs(): FnArgsContext;
    fnType(): FnTypeContext | undefined;
    cwspec(): CwspecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class EnumVariantContext extends ParserRuleContext {
    enumVariant_struct(): EnumVariant_structContext | undefined;
    enumVariant_tuple(): EnumVariant_tupleContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class EnumVariant_structContext extends ParserRuleContext {
    _name: IdentContext;
    parenStructMembers(): ParenStructMembersContext | undefined;
    curlyStructMembers(): CurlyStructMembersContext | undefined;
    ident(): IdentContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class EnumVariant_tupleContext extends ParserRuleContext {
    _name: IdentContext;
    _members: TupleMembersContext;
    tupleMembers(): TupleMembersContext;
    ident(): IdentContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class TupleMembersContext extends ParserRuleContext {
    LPAREN(): TerminalNode;
    typeExpr(): TypeExprContext[];
    typeExpr(i: number): TypeExprContext;
    RPAREN(): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ParenStructMembersContext extends ParserRuleContext {
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    structMember(): StructMemberContext[];
    structMember(i: number): StructMemberContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class CurlyStructMembersContext extends ParserRuleContext {
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    structMember(): StructMemberContext[];
    structMember(i: number): StructMemberContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class StructMemberContext extends ParserRuleContext {
    _spec: CwspecContext;
    _name: IdentContext;
    _option: Token;
    _valueType: TypeExprContext;
    COLON(): TerminalNode;
    ident(): IdentContext | undefined;
    typeExpr(): TypeExprContext | undefined;
    cwspec(): CwspecContext | undefined;
    QUEST(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class TypeExprContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: TypeExprContext): void;
}
export declare class TypePathExprContext extends TypeExprContext {
    typePath(): TypePathContext;
    constructor(ctx: TypeExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ParamzdTypeExprContext extends TypeExprContext {
    typeExpr(): TypeExprContext;
    typeParam(): TypeParamContext;
    constructor(ctx: TypeExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class TupleTypeExprContext extends TypeExprContext {
    _typeExpr: TypeExprContext;
    _members: TypeExprContext[];
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    typeExpr(): TypeExprContext[];
    typeExpr(i: number): TypeExprContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: TypeExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ShortOptionTypeExprContext extends TypeExprContext {
    typeExpr(): TypeExprContext;
    QUEST(): TerminalNode;
    constructor(ctx: TypeExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ShortVecTypeExprContext extends TypeExprContext {
    typeExpr(): TypeExprContext;
    LBRACK(): TerminalNode;
    RBRACK(): TerminalNode;
    constructor(ctx: TypeExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class RefTypeExprContext extends TypeExprContext {
    AMP(): TerminalNode;
    typeExpr(): TypeExprContext;
    constructor(ctx: TypeExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class TypeDefnExprContext extends TypeExprContext {
    typeDefn(): TypeDefnContext;
    constructor(ctx: TypeExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class TypeParamContext extends ParserRuleContext {
    LT(): TerminalNode;
    typeExpr(): TypeExprContext[];
    typeExpr(i: number): TypeExprContext;
    GT(): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class PathListContext extends ParserRuleContext {
    ident(): IdentContext[];
    ident(i: number): IdentContext;
    D_COLON(): TerminalNode[];
    D_COLON(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class TypePathContext extends ParserRuleContext {
    _root: Token;
    pathList(): PathListContext;
    D_COLON(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class TypeDefnContext extends ParserRuleContext {
    structDefn(): StructDefnContext | undefined;
    enumDefn(): EnumDefnContext | undefined;
    typeAliasDefn(): TypeAliasDefnContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class StructDefnContext extends ParserRuleContext {
    _spec: CwspecContext;
    STRUCT(): TerminalNode;
    enumVariant(): EnumVariantContext;
    cwspec(): CwspecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class EnumDefnContext extends ParserRuleContext {
    _spec: CwspecContext;
    _name: IdentContext;
    ENUM(): TerminalNode;
    LBRACE(): TerminalNode;
    enumVariantList(): EnumVariantListContext;
    RBRACE(): TerminalNode;
    ident(): IdentContext | undefined;
    cwspec(): CwspecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class EnumVariantListContext extends ParserRuleContext {
    enumVariant(): EnumVariantContext[];
    enumVariant(i: number): EnumVariantContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class TypeAliasDefnContext extends ParserRuleContext {
    _spec: CwspecContext;
    _name: IdentContext;
    _typeValue: TypeExprContext;
    TYPE(): TerminalNode;
    EQ(): TerminalNode;
    ident(): IdentContext | undefined;
    typeExpr(): TypeExprContext | undefined;
    cwspec(): CwspecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class NamedFnDeclContext extends ParserRuleContext {
    _fnName: IdentContext;
    fnArgs(): FnArgsContext;
    ident(): IdentContext | undefined;
    fnType(): FnTypeContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class NamedFnDefnContext extends ParserRuleContext {
    _fnName: IdentContext;
    fnArgs(): FnArgsContext;
    fnBody(): FnBodyContext;
    ident(): IdentContext | undefined;
    fnType(): FnTypeContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class FnDefnContext extends ParserRuleContext {
    _spec: CwspecContext;
    FN(): TerminalNode;
    namedFnDefn(): NamedFnDefnContext;
    cwspec(): CwspecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class FnTypeContext extends ParserRuleContext {
    _retType: TypeExprContext;
    ARROW(): TerminalNode | undefined;
    typeExpr(): TypeExprContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class FnArgsContext extends ParserRuleContext {
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    fnArgList(): FnArgListContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class FnArgListContext extends ParserRuleContext {
    fnArg(): FnArgContext[];
    fnArg(i: number): FnArgContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class FnArgContext extends ParserRuleContext {
    _argName: IdentContext;
    _option: Token;
    _argType: TypeExprContext;
    COLON(): TerminalNode;
    ident(): IdentContext | undefined;
    typeExpr(): TypeExprContext | undefined;
    QUEST(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class FnBodyContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: FnBodyContext): void;
}
export declare class NormalFnBodyContext extends FnBodyContext {
    LBRACE(): TerminalNode | undefined;
    RBRACE(): TerminalNode | undefined;
    stmt(): StmtContext[];
    stmt(i: number): StmtContext;
    constructor(ctx: FnBodyContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ArrowFnBodyContext extends FnBodyContext {
    FAT_ARROW(): TerminalNode | undefined;
    stmt(): StmtContext | undefined;
    constructor(ctx: FnBodyContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class StmtContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: StmtContext): void;
}
export declare class LetStmtContext extends StmtContext {
    letStmt_(): LetStmt_Context;
    constructor(ctx: StmtContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class AssignStmtContext extends StmtContext {
    assignStmt_(): AssignStmt_Context;
    constructor(ctx: StmtContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class IfStmtContext extends StmtContext {
    ifExpr_(): IfExpr_Context;
    constructor(ctx: StmtContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ForStmtContext extends StmtContext {
    forStmt_(): ForStmt_Context;
    constructor(ctx: StmtContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ExecStmtContext extends StmtContext {
    EXEC(): TerminalNode;
    expr(): ExprContext;
    constructor(ctx: StmtContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ExecuteNowStmtContext extends StmtContext {
    EXECUTE_NOW(): TerminalNode;
    msg(): MsgContext;
    constructor(ctx: StmtContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class EmitStmtContext extends StmtContext {
    EMIT(): TerminalNode;
    expr(): ExprContext;
    constructor(ctx: StmtContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ReturnStmtContext extends StmtContext {
    RETURN(): TerminalNode;
    expr(): ExprContext;
    constructor(ctx: StmtContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class FailStmtContext extends StmtContext {
    FAIL(): TerminalNode;
    expr(): ExprContext;
    constructor(ctx: StmtContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ExprStmtContext extends StmtContext {
    expr(): ExprContext;
    constructor(ctx: StmtContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class LetStmt_Context extends ParserRuleContext {
    LET(): TerminalNode;
    letLHS(): LetLHSContext;
    EQ(): TerminalNode;
    expr(): ExprContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class LetLHSContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: LetLHSContext): void;
}
export declare class IdentLHSContext extends LetLHSContext {
    _varType: TypeExprContext;
    ident(): IdentContext;
    COLON(): TerminalNode | undefined;
    typeExpr(): TypeExprContext | undefined;
    constructor(ctx: LetLHSContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class StructUnpackLHSContext extends LetLHSContext {
    LBRACE(): TerminalNode;
    identList(): IdentListContext;
    RBRACE(): TerminalNode;
    constructor(ctx: LetLHSContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class AssignStmt_Context extends ParserRuleContext {
    _lhs: AssignLHSContext;
    _assignOp: Token;
    _rhs: ExprContext;
    assignLHS(): AssignLHSContext;
    expr(): ExprContext;
    EQ(): TerminalNode | undefined;
    PLUS_EQ(): TerminalNode | undefined;
    MINUS_EQ(): TerminalNode | undefined;
    MUL_EQ(): TerminalNode | undefined;
    DIV_EQ(): TerminalNode | undefined;
    MOD_EQ(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class AssignLHSContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: AssignLHSContext): void;
}
export declare class StateItemAssignLHSContext extends AssignLHSContext {
    _key: IdentContext;
    _inner: InnerAssignContext;
    STATE(): TerminalNode;
    DOT(): TerminalNode;
    ident(): IdentContext;
    innerAssign(): InnerAssignContext | undefined;
    constructor(ctx: AssignLHSContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class StateMapAssignLHSContext extends AssignLHSContext {
    _key: IdentContext;
    _expr: ExprContext;
    _mapKeys: ExprContext[];
    _inner: InnerAssignContext;
    STATE(): TerminalNode;
    DOT(): TerminalNode;
    LBRACK(): TerminalNode;
    RBRACK(): TerminalNode;
    ident(): IdentContext;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    innerAssign(): InnerAssignContext | undefined;
    constructor(ctx: AssignLHSContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class IdentAssignLHSContext extends AssignLHSContext {
    ident(): IdentContext;
    constructor(ctx: AssignLHSContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class MemberAssignLHSContext extends AssignLHSContext {
    _obj: ExprContext;
    _member: IdentContext;
    DOT(): TerminalNode;
    expr(): ExprContext;
    ident(): IdentContext;
    constructor(ctx: AssignLHSContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class TableAssignLHSContext extends AssignLHSContext {
    _table: ExprContext;
    _key: ExprContext;
    LBRACK(): TerminalNode;
    RBRACK(): TerminalNode;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    constructor(ctx: AssignLHSContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class InnerAssignContext extends ParserRuleContext {
    _innerPath: InnerPathContext;
    _paths: InnerPathContext[];
    DOT(): TerminalNode[];
    DOT(i: number): TerminalNode;
    innerPath(): InnerPathContext[];
    innerPath(i: number): InnerPathContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class InnerPathContext extends ParserRuleContext {
    _name: IdentContext;
    _tableKey: ExprContext;
    ident(): IdentContext | undefined;
    LBRACK(): TerminalNode | undefined;
    RBRACK(): TerminalNode | undefined;
    expr(): ExprContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class MsgContext extends ParserRuleContext {
    HASH(): TerminalNode;
    expr(): ExprContext;
    DOT(): TerminalNode;
    ident(): IdentContext;
    LPAREN(): TerminalNode;
    exprList(): ExprListContext;
    RPAREN(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ExprContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ExprContext): void;
}
export declare class GroupedExprContext extends ExprContext {
    LPAREN(): TerminalNode;
    expr(): ExprContext;
    RPAREN(): TerminalNode;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class StateItemAccessExprContext extends ExprContext {
    _key: IdentContext;
    STATE(): TerminalNode;
    DOT(): TerminalNode;
    ident(): IdentContext;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class StateMapAccessExprContext extends ExprContext {
    _key: IdentContext;
    _expr: ExprContext;
    _mapKeys: ExprContext[];
    STATE(): TerminalNode;
    DOT(): TerminalNode;
    LBRACK(): TerminalNode;
    RBRACK(): TerminalNode;
    ident(): IdentContext;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class MemberAccessExprContext extends ExprContext {
    expr(): ExprContext;
    DOT(): TerminalNode;
    ident(): IdentContext;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class TableLookupExprContext extends ExprContext {
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    LBRACK(): TerminalNode;
    COMMA(): TerminalNode;
    RBRACK(): TerminalNode;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class PosArgsFnCallExprContext extends ExprContext {
    expr(): ExprContext;
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    exprList(): ExprListContext | undefined;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class NamedArgsFnCallExprContext extends ExprContext {
    expr(): ExprContext;
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    namedExprList(): NamedExprListContext | undefined;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class UnaryExprContext extends ExprContext {
    _op: Token;
    expr(): ExprContext;
    PLUS(): TerminalNode | undefined;
    MINUS(): TerminalNode | undefined;
    EXCLAM(): TerminalNode | undefined;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ExpExprContext extends ExprContext {
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    POW(): TerminalNode;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class MultDivModExprContext extends ExprContext {
    _op: Token;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    MUL(): TerminalNode | undefined;
    DIV(): TerminalNode | undefined;
    MOD(): TerminalNode | undefined;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class AddSubExprContext extends ExprContext {
    _op: Token;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    PLUS(): TerminalNode | undefined;
    MINUS(): TerminalNode | undefined;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class CompExprContext extends ExprContext {
    _op: Token;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    LT(): TerminalNode | undefined;
    GT(): TerminalNode | undefined;
    LT_EQ(): TerminalNode | undefined;
    GT_EQ(): TerminalNode | undefined;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class EqExprContext extends ExprContext {
    _op: Token;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    EQEQ(): TerminalNode | undefined;
    NEQ(): TerminalNode | undefined;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class AndExprContext extends ExprContext {
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    AND(): TerminalNode;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class OrExprContext extends ExprContext {
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    OR(): TerminalNode;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class IfExprContext extends ExprContext {
    ifExpr_(): IfExpr_Context;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class QueryExprContext extends ExprContext {
    QUERY(): TerminalNode;
    expr(): ExprContext;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ValExprContext extends ExprContext {
    val(): ValContext;
    constructor(ctx: ExprContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ValContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ValContext): void;
}
export declare class UnitValContext extends ValContext {
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    constructor(ctx: ValContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class StructValContext extends ValContext {
    structVal_(): StructVal_Context;
    constructor(ctx: ValContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class TupleValContext extends ValContext {
    _tupleType: TypePathContext;
    LPAREN(): TerminalNode;
    exprList(): ExprListContext;
    RPAREN(): TerminalNode;
    typePath(): TypePathContext;
    constructor(ctx: ValContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class VecValContext extends ValContext {
    LBRACK(): TerminalNode;
    exprList(): ExprListContext;
    RBRACK(): TerminalNode;
    constructor(ctx: ValContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class StringValContext extends ValContext {
    StringLiteral(): TerminalNode;
    constructor(ctx: ValContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class IntegerValContext extends ValContext {
    IntegerLiteral(): TerminalNode;
    constructor(ctx: ValContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class DecimalValContext extends ValContext {
    DecimalLiteral(): TerminalNode;
    constructor(ctx: ValContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class TrueValContext extends ValContext {
    TRUE(): TerminalNode;
    constructor(ctx: ValContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class FalseValContext extends ValContext {
    FALSE(): TerminalNode;
    constructor(ctx: ValContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class IdentValContext extends ValContext {
    ident(): IdentContext;
    constructor(ctx: ValContext);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class StructVal_Context extends ParserRuleContext {
    _structType: TypePathContext;
    _members: StructValMembersContext;
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    typePath(): TypePathContext | undefined;
    structValMembers(): StructValMembersContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class StructValMembersContext extends ParserRuleContext {
    structValMember(): StructValMemberContext[];
    structValMember(i: number): StructValMemberContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class StructValMemberContext extends ParserRuleContext {
    _name: IdentContext;
    _value: ExprContext;
    COLON(): TerminalNode | undefined;
    ident(): IdentContext | undefined;
    expr(): ExprContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class IfExpr_Context extends ParserRuleContext {
    ifClause_(): IfClause_Context;
    elseIfClauses(): ElseIfClausesContext | undefined;
    elseClause(): ElseClauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class IfClause_Context extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: IfClause_Context): void;
}
export declare class IfClauseContext extends IfClause_Context {
    _predicate: ExprContext;
    IF(): TerminalNode;
    fnBody(): FnBodyContext;
    expr(): ExprContext | undefined;
    constructor(ctx: IfClause_Context);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class IfLetClauseContext extends IfClause_Context {
    IF(): TerminalNode;
    letStmt_(): LetStmt_Context;
    fnBody(): FnBodyContext;
    constructor(ctx: IfClause_Context);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ElseIfClausesContext extends ParserRuleContext {
    ELSE(): TerminalNode[];
    ELSE(i: number): TerminalNode;
    ifClause_(): IfClause_Context[];
    ifClause_(i: number): IfClause_Context;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ElseClauseContext extends ParserRuleContext {
    ELSE(): TerminalNode;
    fnBody(): FnBodyContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ForStmt_Context extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ForStmt_Context): void;
}
export declare class ForInStmtContext extends ForStmt_Context {
    _item: LetLHSContext;
    _iterItems: ExprContext;
    FOR(): TerminalNode;
    IN(): TerminalNode;
    fnBody(): FnBodyContext;
    letLHS(): LetLHSContext;
    expr(): ExprContext;
    constructor(ctx: ForStmt_Context);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ForTimesStmtContext extends ForStmt_Context {
    FOR(): TerminalNode;
    expr(): ExprContext;
    TIMES(): TerminalNode;
    fnBody(): FnBodyContext;
    constructor(ctx: ForStmt_Context);
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class IdentListContext extends ParserRuleContext {
    _ident: IdentContext;
    _symbols: IdentContext[];
    ident(): IdentContext[];
    ident(i: number): IdentContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ExprListContext extends ParserRuleContext {
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class NamedExprListContext extends ParserRuleContext {
    namedExpr(): NamedExprContext[];
    namedExpr(i: number): NamedExprContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class NamedExprContext extends ParserRuleContext {
    _name: IdentContext;
    _value: ExprContext;
    COLON(): TerminalNode | undefined;
    ident(): IdentContext | undefined;
    expr(): ExprContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class IdentContext extends ParserRuleContext {
    Ident(): TerminalNode | undefined;
    reservedKeyword(): ReservedKeywordContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class CwspecContext extends ParserRuleContext {
    CWSPEC_LINE_COMMENT(): TerminalNode[];
    CWSPEC_LINE_COMMENT(i: number): TerminalNode;
    CWSPEC_BLOCK_COMMENT(): TerminalNode[];
    CWSPEC_BLOCK_COMMENT(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
export declare class ReservedKeywordContext extends ParserRuleContext {
    CONTRACT(): TerminalNode | undefined;
    INTERFACE(): TerminalNode | undefined;
    IMPORT(): TerminalNode | undefined;
    IMPLEMENTS(): TerminalNode | undefined;
    EXTENDS(): TerminalNode | undefined;
    ERROR(): TerminalNode | undefined;
    EVENT(): TerminalNode | undefined;
    INSTANTIATE(): TerminalNode | undefined;
    EXEC(): TerminalNode | undefined;
    QUERY(): TerminalNode | undefined;
    MIGRATE(): TerminalNode | undefined;
    FOR(): TerminalNode | undefined;
    IN(): TerminalNode | undefined;
    FROM(): TerminalNode | undefined;
    STATE(): TerminalNode | undefined;
    TIMES(): TerminalNode | undefined;
    IF(): TerminalNode | undefined;
    FN(): TerminalNode | undefined;
    ELSE(): TerminalNode | undefined;
    AND(): TerminalNode | undefined;
    OR(): TerminalNode | undefined;
    TRUE(): TerminalNode | undefined;
    FALSE(): TerminalNode | undefined;
    LET(): TerminalNode | undefined;
    RETURN(): TerminalNode | undefined;
    STRUCT(): TerminalNode | undefined;
    ENUM(): TerminalNode | undefined;
    TYPE(): TerminalNode | undefined;
    EMIT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CWScriptParserListener): void;
    exitRule(listener: CWScriptParserListener): void;
    accept<Result>(visitor: CWScriptParserVisitor<Result>): Result;
}
