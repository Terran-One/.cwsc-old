// Generated from ./grammar/CWScriptParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CWScriptParserListener } from "./CWScriptParserListener";
import { CWScriptParserVisitor } from "./CWScriptParserVisitor";


export class CWScriptParser extends Parser {
	public static readonly CONTRACT = 1;
	public static readonly INTERFACE = 2;
	public static readonly IMPORT = 3;
	public static readonly IMPLEMENTS = 4;
	public static readonly EXTENSION = 5;
	public static readonly REQUIRES = 6;
	public static readonly EXTENDS = 7;
	public static readonly ERROR = 8;
	public static readonly EVENT = 9;
	public static readonly INSTANTIATE = 10;
	public static readonly EXEC = 11;
	public static readonly EXECUTE_NOW = 12;
	public static readonly QUERY = 13;
	public static readonly MIGRATE = 14;
	public static readonly FOR = 15;
	public static readonly IN = 16;
	public static readonly FROM = 17;
	public static readonly STATE = 18;
	public static readonly TIMES = 19;
	public static readonly IF = 20;
	public static readonly ELSE = 21;
	public static readonly AND = 22;
	public static readonly OR = 23;
	public static readonly TRUE = 24;
	public static readonly FALSE = 25;
	public static readonly FN = 26;
	public static readonly LET = 27;
	public static readonly FAIL = 28;
	public static readonly RETURN = 29;
	public static readonly STRUCT = 30;
	public static readonly ENUM = 31;
	public static readonly TYPE = 32;
	public static readonly EMIT = 33;
	public static readonly AS = 34;
	public static readonly LPAREN = 35;
	public static readonly RPAREN = 36;
	public static readonly LBRACK = 37;
	public static readonly RBRACK = 38;
	public static readonly LBRACE = 39;
	public static readonly RBRACE = 40;
	public static readonly DOT = 41;
	public static readonly COMMA = 42;
	public static readonly QUEST = 43;
	public static readonly EXCLAM = 44;
	public static readonly COLON = 45;
	public static readonly D_COLON = 46;
	public static readonly DOLLAR = 47;
	public static readonly HASH = 48;
	public static readonly AT = 49;
	public static readonly AMP = 50;
	public static readonly ARROW = 51;
	public static readonly FAT_ARROW = 52;
	public static readonly S_QUOTE = 53;
	public static readonly D_QUOTE = 54;
	public static readonly EQ = 55;
	public static readonly EQEQ = 56;
	public static readonly NEQ = 57;
	public static readonly PLUS = 58;
	public static readonly PLUS_EQ = 59;
	public static readonly MINUS = 60;
	public static readonly MINUS_EQ = 61;
	public static readonly MUL = 62;
	public static readonly MUL_EQ = 63;
	public static readonly DIV = 64;
	public static readonly DIV_EQ = 65;
	public static readonly MOD = 66;
	public static readonly MOD_EQ = 67;
	public static readonly LT = 68;
	public static readonly LT_EQ = 69;
	public static readonly GT = 70;
	public static readonly GT_EQ = 71;
	public static readonly POW = 72;
	public static readonly Ident = 73;
	public static readonly StringLiteral = 74;
	public static readonly IntegerLiteral = 75;
	public static readonly DecimalLiteral = 76;
	public static readonly CWSPEC_LINE_COMMENT = 77;
	public static readonly CWSPEC_BLOCK_COMMENT = 78;
	public static readonly LINE_COMMENT = 79;
	public static readonly BLOCK_COMMENT = 80;
	public static readonly WS = 81;
	public static readonly RULE_sourceFile = 0;
	public static readonly RULE_topLevelStmt = 1;
	public static readonly RULE_contractDefn = 2;
	public static readonly RULE_interfaceDefn = 3;
	public static readonly RULE_importStmt = 4;
	public static readonly RULE_importList = 5;
	public static readonly RULE_importItem = 6;
	public static readonly RULE_contractBody = 7;
	public static readonly RULE_interfaceBody = 8;
	public static readonly RULE_contractItem = 9;
	public static readonly RULE_interfaceItem = 10;
	public static readonly RULE_errorDefn = 11;
	public static readonly RULE_errorDefnBlock = 12;
	public static readonly RULE_errorDefnBlock_item = 13;
	public static readonly RULE_eventDefn = 14;
	public static readonly RULE_eventDefnBlock = 15;
	public static readonly RULE_eventDefnBlock_item = 16;
	public static readonly RULE_stateDefn = 17;
	public static readonly RULE_stateDefnBlock = 18;
	public static readonly RULE_stateDefnBlock_item = 19;
	public static readonly RULE_itemDefn = 20;
	public static readonly RULE_mapDefn = 21;
	public static readonly RULE_mapDefnKeys = 22;
	public static readonly RULE_mapDefnKey = 23;
	public static readonly RULE_instantiateDefn = 24;
	public static readonly RULE_instantiateDecl = 25;
	public static readonly RULE_execDefn = 26;
	public static readonly RULE_execDefnBlock = 27;
	public static readonly RULE_execDefnBlock_item = 28;
	public static readonly RULE_execDecl = 29;
	public static readonly RULE_execDeclBlock = 30;
	public static readonly RULE_execDeclBlock_item = 31;
	public static readonly RULE_queryDefn = 32;
	public static readonly RULE_queryDefnBlock = 33;
	public static readonly RULE_queryDefnBlock_item = 34;
	public static readonly RULE_queryDecl = 35;
	public static readonly RULE_queryDeclBlock = 36;
	public static readonly RULE_queryDeclBlock_item = 37;
	public static readonly RULE_migrateDefn = 38;
	public static readonly RULE_migrateDecl = 39;
	public static readonly RULE_enumVariant = 40;
	public static readonly RULE_enumVariant_struct = 41;
	public static readonly RULE_enumVariant_tuple = 42;
	public static readonly RULE_tupleMembers = 43;
	public static readonly RULE_parenStructMembers = 44;
	public static readonly RULE_curlyStructMembers = 45;
	public static readonly RULE_structMember = 46;
	public static readonly RULE_typeExpr = 47;
	public static readonly RULE_typeParam = 48;
	public static readonly RULE_pathList = 49;
	public static readonly RULE_typePath = 50;
	public static readonly RULE_typeDefn = 51;
	public static readonly RULE_structDefn = 52;
	public static readonly RULE_enumDefn = 53;
	public static readonly RULE_enumVariantList = 54;
	public static readonly RULE_typeAliasDefn = 55;
	public static readonly RULE_namedFnDecl = 56;
	public static readonly RULE_namedFnDefn = 57;
	public static readonly RULE_fnDefn = 58;
	public static readonly RULE_fnType = 59;
	public static readonly RULE_fnArgs = 60;
	public static readonly RULE_fnArgList = 61;
	public static readonly RULE_fnArg = 62;
	public static readonly RULE_fnBody = 63;
	public static readonly RULE_stmt = 64;
	public static readonly RULE_letStmt_ = 65;
	public static readonly RULE_letLHS = 66;
	public static readonly RULE_assignStmt_ = 67;
	public static readonly RULE_assignLHS = 68;
	public static readonly RULE_innerAssign = 69;
	public static readonly RULE_innerPath = 70;
	public static readonly RULE_msg = 71;
	public static readonly RULE_expr = 72;
	public static readonly RULE_val = 73;
	public static readonly RULE_structVal_ = 74;
	public static readonly RULE_structValMembers = 75;
	public static readonly RULE_structValMember = 76;
	public static readonly RULE_ifExpr_ = 77;
	public static readonly RULE_ifClause_ = 78;
	public static readonly RULE_elseIfClauses = 79;
	public static readonly RULE_elseClause = 80;
	public static readonly RULE_forStmt_ = 81;
	public static readonly RULE_identList = 82;
	public static readonly RULE_exprList = 83;
	public static readonly RULE_namedExprList = 84;
	public static readonly RULE_namedExpr = 85;
	public static readonly RULE_ident = 86;
	public static readonly RULE_cwspec = 87;
	public static readonly RULE_reservedKeyword = 88;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceFile", "topLevelStmt", "contractDefn", "interfaceDefn", "importStmt", 
		"importList", "importItem", "contractBody", "interfaceBody", "contractItem", 
		"interfaceItem", "errorDefn", "errorDefnBlock", "errorDefnBlock_item", 
		"eventDefn", "eventDefnBlock", "eventDefnBlock_item", "stateDefn", "stateDefnBlock", 
		"stateDefnBlock_item", "itemDefn", "mapDefn", "mapDefnKeys", "mapDefnKey", 
		"instantiateDefn", "instantiateDecl", "execDefn", "execDefnBlock", "execDefnBlock_item", 
		"execDecl", "execDeclBlock", "execDeclBlock_item", "queryDefn", "queryDefnBlock", 
		"queryDefnBlock_item", "queryDecl", "queryDeclBlock", "queryDeclBlock_item", 
		"migrateDefn", "migrateDecl", "enumVariant", "enumVariant_struct", "enumVariant_tuple", 
		"tupleMembers", "parenStructMembers", "curlyStructMembers", "structMember", 
		"typeExpr", "typeParam", "pathList", "typePath", "typeDefn", "structDefn", 
		"enumDefn", "enumVariantList", "typeAliasDefn", "namedFnDecl", "namedFnDefn", 
		"fnDefn", "fnType", "fnArgs", "fnArgList", "fnArg", "fnBody", "stmt", 
		"letStmt_", "letLHS", "assignStmt_", "assignLHS", "innerAssign", "innerPath", 
		"msg", "expr", "val", "structVal_", "structValMembers", "structValMember", 
		"ifExpr_", "ifClause_", "elseIfClauses", "elseClause", "forStmt_", "identList", 
		"exprList", "namedExprList", "namedExpr", "ident", "cwspec", "reservedKeyword",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'contract'", "'interface'", "'import'", "'implements'", "'extension'", 
		"'requires'", "'extends'", "'error'", "'event'", "'instantiate'", "'exec'", 
		"'execute!'", "'query'", "'migrate'", "'for'", "'in'", "'from'", "'state'", 
		"'times'", "'if'", "'else'", "'and'", "'or'", "'true'", "'false'", "'fn'", 
		"'let'", "'fail'", "'return'", "'struct'", "'enum'", "'type'", "'emit'", 
		"'as'", "'('", "')'", "'['", "']'", "'{'", "'}'", "'.'", "','", "'?'", 
		"'!'", "':'", "'::'", "'$'", "'#'", "'@'", "'&'", "'->'", "'=>'", "'''", 
		"'\"'", "'='", "'=='", "'!='", "'+'", "'+='", "'-'", "'-='", "'*'", "'*='", 
		"'/'", "'/='", "'%'", "'%='", "'<'", "'<='", "'>'", "'>='", "'**'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "CONTRACT", "INTERFACE", "IMPORT", "IMPLEMENTS", "EXTENSION", 
		"REQUIRES", "EXTENDS", "ERROR", "EVENT", "INSTANTIATE", "EXEC", "EXECUTE_NOW", 
		"QUERY", "MIGRATE", "FOR", "IN", "FROM", "STATE", "TIMES", "IF", "ELSE", 
		"AND", "OR", "TRUE", "FALSE", "FN", "LET", "FAIL", "RETURN", "STRUCT", 
		"ENUM", "TYPE", "EMIT", "AS", "LPAREN", "RPAREN", "LBRACK", "RBRACK", 
		"LBRACE", "RBRACE", "DOT", "COMMA", "QUEST", "EXCLAM", "COLON", "D_COLON", 
		"DOLLAR", "HASH", "AT", "AMP", "ARROW", "FAT_ARROW", "S_QUOTE", "D_QUOTE", 
		"EQ", "EQEQ", "NEQ", "PLUS", "PLUS_EQ", "MINUS", "MINUS_EQ", "MUL", "MUL_EQ", 
		"DIV", "DIV_EQ", "MOD", "MOD_EQ", "LT", "LT_EQ", "GT", "GT_EQ", "POW", 
		"Ident", "StringLiteral", "IntegerLiteral", "DecimalLiteral", "CWSPEC_LINE_COMMENT", 
		"CWSPEC_BLOCK_COMMENT", "LINE_COMMENT", "BLOCK_COMMENT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CWScriptParser._LITERAL_NAMES, CWScriptParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CWScriptParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CWScriptParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return CWScriptParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CWScriptParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CWScriptParser._ATN, this);
	}
	// @RuleVersion(0)
	public sourceFile(): SourceFileContext {
		let _localctx: SourceFileContext = new SourceFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CWScriptParser.RULE_sourceFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 178;
				_localctx._spec = this.cwspec();
				}
				break;
			}
			this.state = 184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT))) !== 0) || _la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				{
				this.state = 181;
				this.topLevelStmt();
				}
				}
				this.state = 186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public topLevelStmt(): TopLevelStmtContext {
		let _localctx: TopLevelStmtContext = new TopLevelStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CWScriptParser.RULE_topLevelStmt);
		try {
			this.state = 190;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 187;
				this.contractDefn();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 188;
				this.interfaceDefn();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 189;
				this.importStmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contractDefn(): ContractDefnContext {
		let _localctx: ContractDefnContext = new ContractDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CWScriptParser.RULE_contractDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 192;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 195;
			this.match(CWScriptParser.CONTRACT);
			{
			this.state = 196;
			_localctx._name = this.ident();
			}
			this.state = 199;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXTENDS) {
				{
				this.state = 197;
				this.match(CWScriptParser.EXTENDS);
				this.state = 198;
				_localctx._baseContracts = this.identList();
				}
			}

			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.IMPLEMENTS) {
				{
				this.state = 201;
				this.match(CWScriptParser.IMPLEMENTS);
				{
				this.state = 202;
				_localctx._interfaces = this.identList();
				}
				}
			}

			this.state = 205;
			this.contractBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceDefn(): InterfaceDefnContext {
		let _localctx: InterfaceDefnContext = new InterfaceDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CWScriptParser.RULE_interfaceDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 207;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 210;
			this.match(CWScriptParser.INTERFACE);
			{
			this.state = 211;
			_localctx._name = this.ident();
			}
			this.state = 214;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXTENDS) {
				{
				this.state = 212;
				this.match(CWScriptParser.EXTENDS);
				this.state = 213;
				_localctx._baseInterfaces = this.identList();
				}
			}

			this.state = 216;
			this.interfaceBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importStmt(): ImportStmtContext {
		let _localctx: ImportStmtContext = new ImportStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CWScriptParser.RULE_importStmt);
		let _la: number;
		try {
			this.state = 236;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				_localctx = new ImportAllStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 218;
				this.match(CWScriptParser.IMPORT);
				this.state = 219;
				this.match(CWScriptParser.MUL);
				this.state = 220;
				this.match(CWScriptParser.FROM);
				{
				this.state = 221;
				(_localctx as ImportAllStmtContext)._fileName = this.match(CWScriptParser.StringLiteral);
				}
				}
				break;

			case 2:
				_localctx = new ImportItemsStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 222;
				this.match(CWScriptParser.IMPORT);
				this.state = 231;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CWScriptParser.LPAREN:
					{
					{
					this.state = 223;
					this.match(CWScriptParser.LPAREN);
					{
					this.state = 224;
					(_localctx as ImportItemsStmtContext)._items = this.importList();
					}
					this.state = 226;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CWScriptParser.COMMA) {
						{
						this.state = 225;
						this.match(CWScriptParser.COMMA);
						}
					}

					this.state = 228;
					this.match(CWScriptParser.RPAREN);
					}
					}
					break;
				case CWScriptParser.CONTRACT:
				case CWScriptParser.INTERFACE:
				case CWScriptParser.IMPORT:
				case CWScriptParser.IMPLEMENTS:
				case CWScriptParser.EXTENDS:
				case CWScriptParser.ERROR:
				case CWScriptParser.EVENT:
				case CWScriptParser.INSTANTIATE:
				case CWScriptParser.EXEC:
				case CWScriptParser.QUERY:
				case CWScriptParser.MIGRATE:
				case CWScriptParser.FOR:
				case CWScriptParser.IN:
				case CWScriptParser.FROM:
				case CWScriptParser.STATE:
				case CWScriptParser.TIMES:
				case CWScriptParser.IF:
				case CWScriptParser.ELSE:
				case CWScriptParser.AND:
				case CWScriptParser.OR:
				case CWScriptParser.TRUE:
				case CWScriptParser.FALSE:
				case CWScriptParser.FN:
				case CWScriptParser.LET:
				case CWScriptParser.RETURN:
				case CWScriptParser.STRUCT:
				case CWScriptParser.ENUM:
				case CWScriptParser.TYPE:
				case CWScriptParser.EMIT:
				case CWScriptParser.Ident:
					{
					{
					this.state = 230;
					(_localctx as ImportItemsStmtContext)._items = this.importList();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 233;
				this.match(CWScriptParser.FROM);
				{
				this.state = 234;
				(_localctx as ImportItemsStmtContext)._fileName = this.match(CWScriptParser.StringLiteral);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importList(): ImportListContext {
		let _localctx: ImportListContext = new ImportListContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CWScriptParser.RULE_importList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 238;
			_localctx._importItem = this.importItem();
			_localctx._importItems.push(_localctx._importItem);
			}
			this.state = 243;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 239;
					this.match(CWScriptParser.COMMA);
					{
					this.state = 240;
					_localctx._importItem = this.importItem();
					_localctx._importItems.push(_localctx._importItem);
					}
					}
					}
				}
				this.state = 245;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importItem(): ImportItemContext {
		let _localctx: ImportItemContext = new ImportItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CWScriptParser.RULE_importItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 246;
			_localctx._symbol = this.ident();
			}
			this.state = 249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.AS) {
				{
				this.state = 247;
				this.match(CWScriptParser.AS);
				this.state = 248;
				_localctx._alias = this.ident();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contractBody(): ContractBodyContext {
		let _localctx: ContractBodyContext = new ContractBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CWScriptParser.RULE_contractBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 251;
			this.match(CWScriptParser.LBRACE);
			this.state = 255;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (CWScriptParser.ERROR - 8)) | (1 << (CWScriptParser.EVENT - 8)) | (1 << (CWScriptParser.INSTANTIATE - 8)) | (1 << (CWScriptParser.EXEC - 8)) | (1 << (CWScriptParser.QUERY - 8)) | (1 << (CWScriptParser.MIGRATE - 8)) | (1 << (CWScriptParser.STATE - 8)) | (1 << (CWScriptParser.FN - 8)) | (1 << (CWScriptParser.STRUCT - 8)) | (1 << (CWScriptParser.ENUM - 8)) | (1 << (CWScriptParser.TYPE - 8)))) !== 0) || _la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				{
				this.state = 252;
				_localctx._items = this.contractItem();
				}
				}
				this.state = 257;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 258;
			this.match(CWScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceBody(): InterfaceBodyContext {
		let _localctx: InterfaceBodyContext = new InterfaceBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CWScriptParser.RULE_interfaceBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 260;
			this.match(CWScriptParser.LBRACE);
			this.state = 264;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (CWScriptParser.ERROR - 8)) | (1 << (CWScriptParser.EVENT - 8)) | (1 << (CWScriptParser.INSTANTIATE - 8)) | (1 << (CWScriptParser.EXEC - 8)) | (1 << (CWScriptParser.QUERY - 8)) | (1 << (CWScriptParser.MIGRATE - 8)) | (1 << (CWScriptParser.STATE - 8)) | (1 << (CWScriptParser.STRUCT - 8)) | (1 << (CWScriptParser.ENUM - 8)) | (1 << (CWScriptParser.TYPE - 8)))) !== 0) || _la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				{
				this.state = 261;
				_localctx._items = this.interfaceItem();
				}
				}
				this.state = 266;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 267;
			this.match(CWScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contractItem(): ContractItemContext {
		let _localctx: ContractItemContext = new ContractItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CWScriptParser.RULE_contractItem);
		try {
			this.state = 283;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 269;
				this.typeDefn();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 270;
				this.fnDefn();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 271;
				this.errorDefn();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 272;
				this.errorDefnBlock();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 273;
				this.eventDefn();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 274;
				this.eventDefnBlock();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 275;
				this.stateDefn();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 276;
				this.stateDefnBlock();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 277;
				this.instantiateDefn();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 278;
				this.execDefn();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 279;
				this.execDefnBlock();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 280;
				this.queryDefn();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 281;
				this.queryDefnBlock();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 282;
				this.migrateDefn();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceItem(): InterfaceItemContext {
		let _localctx: InterfaceItemContext = new InterfaceItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CWScriptParser.RULE_interfaceItem);
		try {
			this.state = 298;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 285;
				this.typeDefn();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 286;
				this.errorDefn();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 287;
				this.errorDefnBlock();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 288;
				this.eventDefn();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 289;
				this.eventDefnBlock();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 290;
				this.stateDefn();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 291;
				this.stateDefnBlock();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 292;
				this.instantiateDecl();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 293;
				this.execDecl();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 294;
				this.execDeclBlock();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 295;
				this.queryDecl();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 296;
				this.queryDeclBlock();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 297;
				this.migrateDecl();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public errorDefn(): ErrorDefnContext {
		let _localctx: ErrorDefnContext = new ErrorDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CWScriptParser.RULE_errorDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 300;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 303;
			this.match(CWScriptParser.ERROR);
			this.state = 304;
			this.enumVariant_struct();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public errorDefnBlock(): ErrorDefnBlockContext {
		let _localctx: ErrorDefnBlockContext = new ErrorDefnBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CWScriptParser.RULE_errorDefnBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 306;
			this.match(CWScriptParser.ERROR);
			this.state = 307;
			this.match(CWScriptParser.LBRACE);
			this.state = 319;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.MIGRATE) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.TIMES) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE) | (1 << CWScriptParser.FN) | (1 << CWScriptParser.LET) | (1 << CWScriptParser.RETURN) | (1 << CWScriptParser.STRUCT) | (1 << CWScriptParser.ENUM))) !== 0) || _la === CWScriptParser.TYPE || _la === CWScriptParser.EMIT || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (CWScriptParser.Ident - 73)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 73)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 73)))) !== 0)) {
				{
				this.state = 308;
				this.errorDefnBlock_item();
				this.state = 313;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 309;
						this.match(CWScriptParser.COMMA);
						this.state = 310;
						this.errorDefnBlock_item();
						}
						}
					}
					this.state = 315;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
				}
				this.state = 317;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COMMA) {
					{
					this.state = 316;
					this.match(CWScriptParser.COMMA);
					}
				}

				}
			}

			this.state = 321;
			this.match(CWScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public errorDefnBlock_item(): ErrorDefnBlock_itemContext {
		let _localctx: ErrorDefnBlock_itemContext = new ErrorDefnBlock_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CWScriptParser.RULE_errorDefnBlock_item);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 324;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 323;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 326;
			this.enumVariant_struct();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventDefn(): EventDefnContext {
		let _localctx: EventDefnContext = new EventDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CWScriptParser.RULE_eventDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 329;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 328;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 331;
			this.match(CWScriptParser.EVENT);
			this.state = 332;
			this.enumVariant_struct();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventDefnBlock(): EventDefnBlockContext {
		let _localctx: EventDefnBlockContext = new EventDefnBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, CWScriptParser.RULE_eventDefnBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
			this.match(CWScriptParser.EVENT);
			this.state = 335;
			this.match(CWScriptParser.LBRACE);
			this.state = 347;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.MIGRATE) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.TIMES) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE) | (1 << CWScriptParser.FN) | (1 << CWScriptParser.LET) | (1 << CWScriptParser.RETURN) | (1 << CWScriptParser.STRUCT) | (1 << CWScriptParser.ENUM))) !== 0) || _la === CWScriptParser.TYPE || _la === CWScriptParser.EMIT || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (CWScriptParser.Ident - 73)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 73)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 73)))) !== 0)) {
				{
				this.state = 336;
				this.eventDefnBlock_item();
				this.state = 341;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 337;
						this.match(CWScriptParser.COMMA);
						this.state = 338;
						this.eventDefnBlock_item();
						}
						}
					}
					this.state = 343;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
				}
				this.state = 345;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COMMA) {
					{
					this.state = 344;
					this.match(CWScriptParser.COMMA);
					}
				}

				}
			}

			this.state = 349;
			this.match(CWScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventDefnBlock_item(): EventDefnBlock_itemContext {
		let _localctx: EventDefnBlock_itemContext = new EventDefnBlock_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CWScriptParser.RULE_eventDefnBlock_item);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 351;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 354;
			this.enumVariant_struct();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stateDefn(): StateDefnContext {
		let _localctx: StateDefnContext = new StateDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CWScriptParser.RULE_stateDefn);
		let _la: number;
		try {
			this.state = 366;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				_localctx = new StateItemDefnContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 357;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
					{
					this.state = 356;
					(_localctx as StateItemDefnContext)._spec = this.cwspec();
					}
				}

				this.state = 359;
				this.match(CWScriptParser.STATE);
				{
				this.state = 360;
				(_localctx as StateItemDefnContext)._item = this.itemDefn();
				}
				}
				break;

			case 2:
				_localctx = new StateMapDefnContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 362;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
					{
					this.state = 361;
					(_localctx as StateMapDefnContext)._spec = this.cwspec();
					}
				}

				this.state = 364;
				this.match(CWScriptParser.STATE);
				this.state = 365;
				(_localctx as StateMapDefnContext)._map = this.mapDefn();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stateDefnBlock(): StateDefnBlockContext {
		let _localctx: StateDefnBlockContext = new StateDefnBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CWScriptParser.RULE_stateDefnBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
			this.match(CWScriptParser.STATE);
			this.state = 369;
			this.match(CWScriptParser.LBRACE);
			this.state = 381;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.MIGRATE) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.TIMES) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE) | (1 << CWScriptParser.FN) | (1 << CWScriptParser.LET) | (1 << CWScriptParser.RETURN) | (1 << CWScriptParser.STRUCT) | (1 << CWScriptParser.ENUM))) !== 0) || _la === CWScriptParser.TYPE || _la === CWScriptParser.EMIT || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (CWScriptParser.Ident - 73)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 73)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 73)))) !== 0)) {
				{
				this.state = 370;
				this.stateDefnBlock_item();
				this.state = 375;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 371;
						this.match(CWScriptParser.COMMA);
						this.state = 372;
						this.stateDefnBlock_item();
						}
						}
					}
					this.state = 377;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
				}
				this.state = 379;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COMMA) {
					{
					this.state = 378;
					this.match(CWScriptParser.COMMA);
					}
				}

				}
			}

			this.state = 383;
			this.match(CWScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stateDefnBlock_item(): StateDefnBlock_itemContext {
		let _localctx: StateDefnBlock_itemContext = new StateDefnBlock_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CWScriptParser.RULE_stateDefnBlock_item);
		let _la: number;
		try {
			this.state = 393;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				_localctx = new StateBlockItemDefnContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 386;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
					{
					this.state = 385;
					(_localctx as StateBlockItemDefnContext)._spec = this.cwspec();
					}
				}

				{
				this.state = 388;
				(_localctx as StateBlockItemDefnContext)._item = this.itemDefn();
				}
				}
				break;

			case 2:
				_localctx = new StateBlockMapDefnContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 390;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
					{
					this.state = 389;
					(_localctx as StateBlockMapDefnContext)._spec = this.cwspec();
					}
				}

				{
				this.state = 392;
				(_localctx as StateBlockMapDefnContext)._map = this.mapDefn();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public itemDefn(): ItemDefnContext {
		let _localctx: ItemDefnContext = new ItemDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, CWScriptParser.RULE_itemDefn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 395;
			_localctx._key = this.ident();
			}
			this.state = 396;
			this.match(CWScriptParser.COLON);
			{
			this.state = 397;
			_localctx._valueType = this.typeExpr(0);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapDefn(): MapDefnContext {
		let _localctx: MapDefnContext = new MapDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, CWScriptParser.RULE_mapDefn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 399;
			_localctx._key = this.ident();
			}
			{
			this.state = 400;
			_localctx._mapKeys = this.mapDefnKeys();
			}
			this.state = 401;
			this.match(CWScriptParser.COLON);
			{
			this.state = 402;
			_localctx._valueType = this.typeExpr(0);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapDefnKeys(): MapDefnKeysContext {
		let _localctx: MapDefnKeysContext = new MapDefnKeysContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, CWScriptParser.RULE_mapDefnKeys);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 404;
			this.match(CWScriptParser.LBRACK);
			this.state = 405;
			this.mapDefnKey();
			this.state = 410;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 406;
				this.match(CWScriptParser.COMMA);
				this.state = 407;
				this.mapDefnKey();
				}
				}
				this.state = 412;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 413;
			this.match(CWScriptParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapDefnKey(): MapDefnKeyContext {
		let _localctx: MapDefnKeyContext = new MapDefnKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, CWScriptParser.RULE_mapDefnKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 418;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				{
				this.state = 415;
				_localctx._keyName = this.ident();
				this.state = 416;
				this.match(CWScriptParser.COLON);
				}
				break;
			}
			{
			this.state = 420;
			_localctx._keyType = this.typeExpr(0);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instantiateDefn(): InstantiateDefnContext {
		let _localctx: InstantiateDefnContext = new InstantiateDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, CWScriptParser.RULE_instantiateDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 423;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 422;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 425;
			this.match(CWScriptParser.INSTANTIATE);
			this.state = 426;
			this.fnArgs();
			this.state = 428;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 427;
				this.fnType();
				}
			}

			this.state = 430;
			this.fnBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instantiateDecl(): InstantiateDeclContext {
		let _localctx: InstantiateDeclContext = new InstantiateDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, CWScriptParser.RULE_instantiateDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 433;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 432;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 435;
			this.match(CWScriptParser.INSTANTIATE);
			this.state = 436;
			this.fnArgs();
			this.state = 438;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 437;
				this.fnType();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public execDefn(): ExecDefnContext {
		let _localctx: ExecDefnContext = new ExecDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, CWScriptParser.RULE_execDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 441;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 440;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 443;
			this.match(CWScriptParser.EXEC);
			this.state = 444;
			this.namedFnDefn();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public execDefnBlock(): ExecDefnBlockContext {
		let _localctx: ExecDefnBlockContext = new ExecDefnBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, CWScriptParser.RULE_execDefnBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 446;
			this.match(CWScriptParser.EXEC);
			this.state = 447;
			this.match(CWScriptParser.LBRACE);
			this.state = 451;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.MIGRATE) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.TIMES) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE) | (1 << CWScriptParser.FN) | (1 << CWScriptParser.LET) | (1 << CWScriptParser.RETURN) | (1 << CWScriptParser.STRUCT) | (1 << CWScriptParser.ENUM))) !== 0) || _la === CWScriptParser.TYPE || _la === CWScriptParser.EMIT || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (CWScriptParser.Ident - 73)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 73)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 73)))) !== 0)) {
				{
				{
				this.state = 448;
				this.execDefnBlock_item();
				}
				}
				this.state = 453;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 454;
			this.match(CWScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public execDefnBlock_item(): ExecDefnBlock_itemContext {
		let _localctx: ExecDefnBlock_itemContext = new ExecDefnBlock_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, CWScriptParser.RULE_execDefnBlock_item);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 457;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 456;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 459;
			this.namedFnDefn();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public execDecl(): ExecDeclContext {
		let _localctx: ExecDeclContext = new ExecDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, CWScriptParser.RULE_execDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 462;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 461;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 464;
			this.match(CWScriptParser.EXEC);
			this.state = 465;
			this.namedFnDecl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public execDeclBlock(): ExecDeclBlockContext {
		let _localctx: ExecDeclBlockContext = new ExecDeclBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, CWScriptParser.RULE_execDeclBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 467;
			this.match(CWScriptParser.EXEC);
			this.state = 468;
			this.match(CWScriptParser.LBRACE);
			this.state = 472;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.MIGRATE) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.TIMES) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE) | (1 << CWScriptParser.FN) | (1 << CWScriptParser.LET) | (1 << CWScriptParser.RETURN) | (1 << CWScriptParser.STRUCT) | (1 << CWScriptParser.ENUM))) !== 0) || _la === CWScriptParser.TYPE || _la === CWScriptParser.EMIT || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (CWScriptParser.Ident - 73)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 73)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 73)))) !== 0)) {
				{
				{
				this.state = 469;
				this.execDeclBlock_item();
				}
				}
				this.state = 474;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 475;
			this.match(CWScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public execDeclBlock_item(): ExecDeclBlock_itemContext {
		let _localctx: ExecDeclBlock_itemContext = new ExecDeclBlock_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, CWScriptParser.RULE_execDeclBlock_item);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 478;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 477;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 480;
			this.namedFnDecl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queryDefn(): QueryDefnContext {
		let _localctx: QueryDefnContext = new QueryDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, CWScriptParser.RULE_queryDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 483;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 482;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 485;
			this.match(CWScriptParser.QUERY);
			this.state = 486;
			this.namedFnDefn();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queryDefnBlock(): QueryDefnBlockContext {
		let _localctx: QueryDefnBlockContext = new QueryDefnBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, CWScriptParser.RULE_queryDefnBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 488;
			this.match(CWScriptParser.QUERY);
			this.state = 489;
			this.match(CWScriptParser.LBRACE);
			this.state = 493;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.MIGRATE) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.TIMES) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE) | (1 << CWScriptParser.FN) | (1 << CWScriptParser.LET) | (1 << CWScriptParser.RETURN) | (1 << CWScriptParser.STRUCT) | (1 << CWScriptParser.ENUM))) !== 0) || _la === CWScriptParser.TYPE || _la === CWScriptParser.EMIT || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (CWScriptParser.Ident - 73)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 73)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 73)))) !== 0)) {
				{
				{
				this.state = 490;
				this.queryDefnBlock_item();
				}
				}
				this.state = 495;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 496;
			this.match(CWScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queryDefnBlock_item(): QueryDefnBlock_itemContext {
		let _localctx: QueryDefnBlock_itemContext = new QueryDefnBlock_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, CWScriptParser.RULE_queryDefnBlock_item);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 499;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 498;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 501;
			this.namedFnDefn();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queryDecl(): QueryDeclContext {
		let _localctx: QueryDeclContext = new QueryDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, CWScriptParser.RULE_queryDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 504;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 503;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 506;
			this.match(CWScriptParser.QUERY);
			this.state = 507;
			this.namedFnDecl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queryDeclBlock(): QueryDeclBlockContext {
		let _localctx: QueryDeclBlockContext = new QueryDeclBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, CWScriptParser.RULE_queryDeclBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 509;
			this.match(CWScriptParser.QUERY);
			this.state = 510;
			this.match(CWScriptParser.LBRACE);
			this.state = 514;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.MIGRATE) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.TIMES) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE) | (1 << CWScriptParser.FN) | (1 << CWScriptParser.LET) | (1 << CWScriptParser.RETURN) | (1 << CWScriptParser.STRUCT) | (1 << CWScriptParser.ENUM))) !== 0) || _la === CWScriptParser.TYPE || _la === CWScriptParser.EMIT || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (CWScriptParser.Ident - 73)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 73)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 73)))) !== 0)) {
				{
				{
				this.state = 511;
				this.queryDeclBlock_item();
				}
				}
				this.state = 516;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 517;
			this.match(CWScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queryDeclBlock_item(): QueryDeclBlock_itemContext {
		let _localctx: QueryDeclBlock_itemContext = new QueryDeclBlock_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, CWScriptParser.RULE_queryDeclBlock_item);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 520;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 519;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 522;
			this.namedFnDecl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public migrateDefn(): MigrateDefnContext {
		let _localctx: MigrateDefnContext = new MigrateDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, CWScriptParser.RULE_migrateDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 525;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 524;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 527;
			this.match(CWScriptParser.MIGRATE);
			this.state = 528;
			this.fnArgs();
			this.state = 530;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 529;
				this.fnType();
				}
			}

			this.state = 532;
			this.fnBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public migrateDecl(): MigrateDeclContext {
		let _localctx: MigrateDeclContext = new MigrateDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, CWScriptParser.RULE_migrateDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 535;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 534;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 537;
			this.match(CWScriptParser.MIGRATE);
			this.state = 538;
			this.fnArgs();
			this.state = 540;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 539;
				this.fnType();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumVariant(): EnumVariantContext {
		let _localctx: EnumVariantContext = new EnumVariantContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, CWScriptParser.RULE_enumVariant);
		try {
			this.state = 544;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 542;
				this.enumVariant_struct();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 543;
				this.enumVariant_tuple();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumVariant_struct(): EnumVariant_structContext {
		let _localctx: EnumVariant_structContext = new EnumVariant_structContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, CWScriptParser.RULE_enumVariant_struct);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 546;
			_localctx._name = this.ident();
			}
			this.state = 549;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.LPAREN:
				{
				this.state = 547;
				this.parenStructMembers();
				}
				break;
			case CWScriptParser.LBRACE:
				{
				this.state = 548;
				this.curlyStructMembers();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumVariant_tuple(): EnumVariant_tupleContext {
		let _localctx: EnumVariant_tupleContext = new EnumVariant_tupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, CWScriptParser.RULE_enumVariant_tuple);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 551;
			_localctx._name = this.ident();
			}
			this.state = 552;
			_localctx._members = this.tupleMembers();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tupleMembers(): TupleMembersContext {
		let _localctx: TupleMembersContext = new TupleMembersContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, CWScriptParser.RULE_tupleMembers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 554;
			this.match(CWScriptParser.LPAREN);
			this.state = 555;
			this.typeExpr(0);
			this.state = 560;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 556;
				this.match(CWScriptParser.COMMA);
				this.state = 557;
				this.typeExpr(0);
				}
				}
				this.state = 562;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 563;
			this.match(CWScriptParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parenStructMembers(): ParenStructMembersContext {
		let _localctx: ParenStructMembersContext = new ParenStructMembersContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, CWScriptParser.RULE_parenStructMembers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 565;
			this.match(CWScriptParser.LPAREN);
			this.state = 574;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.MIGRATE) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.TIMES) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE) | (1 << CWScriptParser.FN) | (1 << CWScriptParser.LET) | (1 << CWScriptParser.RETURN) | (1 << CWScriptParser.STRUCT) | (1 << CWScriptParser.ENUM))) !== 0) || _la === CWScriptParser.TYPE || _la === CWScriptParser.EMIT || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (CWScriptParser.Ident - 73)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 73)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 73)))) !== 0)) {
				{
				this.state = 566;
				this.structMember();
				this.state = 571;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 567;
					this.match(CWScriptParser.COMMA);
					this.state = 568;
					this.structMember();
					}
					}
					this.state = 573;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 576;
			this.match(CWScriptParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public curlyStructMembers(): CurlyStructMembersContext {
		let _localctx: CurlyStructMembersContext = new CurlyStructMembersContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, CWScriptParser.RULE_curlyStructMembers);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 578;
			this.match(CWScriptParser.LBRACE);
			this.state = 590;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.MIGRATE) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.TIMES) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE) | (1 << CWScriptParser.FN) | (1 << CWScriptParser.LET) | (1 << CWScriptParser.RETURN) | (1 << CWScriptParser.STRUCT) | (1 << CWScriptParser.ENUM))) !== 0) || _la === CWScriptParser.TYPE || _la === CWScriptParser.EMIT || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (CWScriptParser.Ident - 73)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 73)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 73)))) !== 0)) {
				{
				this.state = 579;
				this.structMember();
				this.state = 584;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 580;
						this.match(CWScriptParser.COMMA);
						this.state = 581;
						this.structMember();
						}
						}
					}
					this.state = 586;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
				}
				this.state = 588;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COMMA) {
					{
					this.state = 587;
					this.match(CWScriptParser.COMMA);
					}
				}

				}
			}

			this.state = 592;
			this.match(CWScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structMember(): StructMemberContext {
		let _localctx: StructMemberContext = new StructMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, CWScriptParser.RULE_structMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 595;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 594;
				_localctx._spec = this.cwspec();
				}
			}

			{
			this.state = 597;
			_localctx._name = this.ident();
			}
			this.state = 599;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.QUEST) {
				{
				this.state = 598;
				_localctx._option = this.match(CWScriptParser.QUEST);
				}
			}

			this.state = 601;
			this.match(CWScriptParser.COLON);
			{
			this.state = 602;
			_localctx._valueType = this.typeExpr(0);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public typeExpr(): TypeExprContext;
	public typeExpr(_p: number): TypeExprContext;
	// @RuleVersion(0)
	public typeExpr(_p?: number): TypeExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeExprContext = new TypeExprContext(this._ctx, _parentState);
		let _prevctx: TypeExprContext = _localctx;
		let _startState: number = 94;
		this.enterRecursionRule(_localctx, 94, CWScriptParser.RULE_typeExpr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 622;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				{
				_localctx = new TypePathExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 605;
				this.typePath();
				}
				break;

			case 2:
				{
				_localctx = new TupleTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 606;
				this.match(CWScriptParser.LPAREN);
				{
				this.state = 607;
				(_localctx as TupleTypeExprContext)._typeExpr = this.typeExpr(0);
				(_localctx as TupleTypeExprContext)._members.push((_localctx as TupleTypeExprContext)._typeExpr);
				}
				this.state = 612;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 608;
					this.match(CWScriptParser.COMMA);
					this.state = 609;
					(_localctx as TupleTypeExprContext)._typeExpr = this.typeExpr(0);
					(_localctx as TupleTypeExprContext)._members.push((_localctx as TupleTypeExprContext)._typeExpr);
					}
					}
					this.state = 614;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 615;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 3:
				{
				_localctx = new RefTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 617;
				this.match(CWScriptParser.AMP);
				this.state = 618;
				this.typeExpr(3);
				}
				break;

			case 4:
				{
				_localctx = new AddrExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 619;
				this.match(CWScriptParser.AT);
				this.state = 620;
				this.typeExpr(2);
				}
				break;

			case 5:
				{
				_localctx = new TypeDefnExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 621;
				this.typeDefn();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 633;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 631;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
					case 1:
						{
						_localctx = new ParamzdTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
						this.state = 624;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 625;
						this.typeParam();
						}
						break;

					case 2:
						{
						_localctx = new ShortOptionTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
						this.state = 626;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 627;
						this.match(CWScriptParser.QUEST);
						}
						break;

					case 3:
						{
						_localctx = new ShortVecTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
						this.state = 628;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 629;
						this.match(CWScriptParser.LBRACK);
						this.state = 630;
						this.match(CWScriptParser.RBRACK);
						}
						break;
					}
					}
				}
				this.state = 635;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParam(): TypeParamContext {
		let _localctx: TypeParamContext = new TypeParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, CWScriptParser.RULE_typeParam);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 636;
			this.match(CWScriptParser.LT);
			this.state = 637;
			this.typeExpr(0);
			this.state = 642;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 638;
				this.match(CWScriptParser.COMMA);
				this.state = 639;
				this.typeExpr(0);
				}
				}
				this.state = 644;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 645;
			this.match(CWScriptParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pathList(): PathListContext {
		let _localctx: PathListContext = new PathListContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, CWScriptParser.RULE_pathList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 647;
			this.ident();
			}
			this.state = 652;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 648;
					this.match(CWScriptParser.D_COLON);
					this.state = 649;
					this.ident();
					}
					}
				}
				this.state = 654;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typePath(): TypePathContext {
		let _localctx: TypePathContext = new TypePathContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, CWScriptParser.RULE_typePath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 656;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.D_COLON) {
				{
				this.state = 655;
				_localctx._root = this.match(CWScriptParser.D_COLON);
				}
			}

			this.state = 658;
			this.pathList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDefn(): TypeDefnContext {
		let _localctx: TypeDefnContext = new TypeDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, CWScriptParser.RULE_typeDefn);
		try {
			this.state = 663;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 660;
				this.structDefn();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 661;
				this.enumDefn();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 662;
				this.typeAliasDefn();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structDefn(): StructDefnContext {
		let _localctx: StructDefnContext = new StructDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, CWScriptParser.RULE_structDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 666;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 665;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 668;
			this.match(CWScriptParser.STRUCT);
			this.state = 669;
			this.enumVariant();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumDefn(): EnumDefnContext {
		let _localctx: EnumDefnContext = new EnumDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, CWScriptParser.RULE_enumDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 672;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 671;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 674;
			this.match(CWScriptParser.ENUM);
			{
			this.state = 675;
			_localctx._name = this.ident();
			}
			this.state = 676;
			this.match(CWScriptParser.LBRACE);
			this.state = 677;
			this.enumVariantList();
			this.state = 678;
			this.match(CWScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumVariantList(): EnumVariantListContext {
		let _localctx: EnumVariantListContext = new EnumVariantListContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, CWScriptParser.RULE_enumVariantList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 693;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.MIGRATE) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.TIMES) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE) | (1 << CWScriptParser.FN) | (1 << CWScriptParser.LET) | (1 << CWScriptParser.RETURN) | (1 << CWScriptParser.STRUCT) | (1 << CWScriptParser.ENUM))) !== 0) || _la === CWScriptParser.TYPE || _la === CWScriptParser.EMIT || _la === CWScriptParser.Ident) {
				{
				this.state = 680;
				this.enumVariant();
				this.state = 687;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 682;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.COMMA) {
							{
							this.state = 681;
							this.match(CWScriptParser.COMMA);
							}
						}

						this.state = 684;
						this.enumVariant();
						}
						}
					}
					this.state = 689;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
				}
				this.state = 691;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COMMA) {
					{
					this.state = 690;
					this.match(CWScriptParser.COMMA);
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeAliasDefn(): TypeAliasDefnContext {
		let _localctx: TypeAliasDefnContext = new TypeAliasDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, CWScriptParser.RULE_typeAliasDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 696;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 695;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 698;
			this.match(CWScriptParser.TYPE);
			{
			this.state = 699;
			_localctx._name = this.ident();
			}
			this.state = 700;
			this.match(CWScriptParser.EQ);
			{
			this.state = 701;
			_localctx._typeValue = this.typeExpr(0);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedFnDecl(): NamedFnDeclContext {
		let _localctx: NamedFnDeclContext = new NamedFnDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, CWScriptParser.RULE_namedFnDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 703;
			_localctx._fnName = this.ident();
			}
			this.state = 704;
			this.fnArgs();
			this.state = 706;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 705;
				this.fnType();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedFnDefn(): NamedFnDefnContext {
		let _localctx: NamedFnDefnContext = new NamedFnDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, CWScriptParser.RULE_namedFnDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 708;
			_localctx._fnName = this.ident();
			}
			this.state = 709;
			this.fnArgs();
			this.state = 711;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 710;
				this.fnType();
				}
			}

			this.state = 713;
			this.fnBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fnDefn(): FnDefnContext {
		let _localctx: FnDefnContext = new FnDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, CWScriptParser.RULE_fnDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 716;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 715;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 718;
			this.match(CWScriptParser.FN);
			this.state = 719;
			this.namedFnDefn();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fnType(): FnTypeContext {
		let _localctx: FnTypeContext = new FnTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, CWScriptParser.RULE_fnType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 721;
			this.match(CWScriptParser.ARROW);
			this.state = 722;
			_localctx._retType = this.typeExpr(0);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fnArgs(): FnArgsContext {
		let _localctx: FnArgsContext = new FnArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, CWScriptParser.RULE_fnArgs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 724;
			this.match(CWScriptParser.LPAREN);
			this.state = 726;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.MIGRATE) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.TIMES) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE) | (1 << CWScriptParser.FN) | (1 << CWScriptParser.LET) | (1 << CWScriptParser.RETURN) | (1 << CWScriptParser.STRUCT) | (1 << CWScriptParser.ENUM))) !== 0) || _la === CWScriptParser.TYPE || _la === CWScriptParser.EMIT || _la === CWScriptParser.Ident) {
				{
				this.state = 725;
				this.fnArgList();
				}
			}

			this.state = 728;
			this.match(CWScriptParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fnArgList(): FnArgListContext {
		let _localctx: FnArgListContext = new FnArgListContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, CWScriptParser.RULE_fnArgList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 730;
			this.fnArg();
			this.state = 735;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 731;
				this.match(CWScriptParser.COMMA);
				this.state = 732;
				this.fnArg();
				}
				}
				this.state = 737;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fnArg(): FnArgContext {
		let _localctx: FnArgContext = new FnArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, CWScriptParser.RULE_fnArg);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 738;
			_localctx._argName = this.ident();
			}
			this.state = 740;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.QUEST) {
				{
				this.state = 739;
				_localctx._option = this.match(CWScriptParser.QUEST);
				}
			}

			this.state = 742;
			this.match(CWScriptParser.COLON);
			{
			this.state = 743;
			_localctx._argType = this.typeExpr(0);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fnBody(): FnBodyContext {
		let _localctx: FnBodyContext = new FnBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, CWScriptParser.RULE_fnBody);
		let _la: number;
		try {
			this.state = 755;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.LBRACE:
				_localctx = new NormalFnBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 745;
				this.match(CWScriptParser.LBRACE);
				this.state = 749;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.EXECUTE_NOW) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.MIGRATE) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.TIMES) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE) | (1 << CWScriptParser.FN) | (1 << CWScriptParser.LET) | (1 << CWScriptParser.FAIL) | (1 << CWScriptParser.RETURN) | (1 << CWScriptParser.STRUCT) | (1 << CWScriptParser.ENUM))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.EXCLAM - 32)) | (1 << (CWScriptParser.D_COLON - 32)) | (1 << (CWScriptParser.PLUS - 32)) | (1 << (CWScriptParser.MINUS - 32)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (CWScriptParser.Ident - 73)) | (1 << (CWScriptParser.StringLiteral - 73)) | (1 << (CWScriptParser.IntegerLiteral - 73)) | (1 << (CWScriptParser.DecimalLiteral - 73)))) !== 0)) {
					{
					{
					this.state = 746;
					this.stmt();
					}
					}
					this.state = 751;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 752;
				this.match(CWScriptParser.RBRACE);
				}
				}
				break;
			case CWScriptParser.FAT_ARROW:
				_localctx = new ArrowFnBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 753;
				this.match(CWScriptParser.FAT_ARROW);
				this.state = 754;
				this.stmt();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, CWScriptParser.RULE_stmt);
		try {
			this.state = 772;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
			case 1:
				_localctx = new LetStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 757;
				this.letStmt_();
				}
				break;

			case 2:
				_localctx = new AssignStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 758;
				this.assignStmt_();
				}
				break;

			case 3:
				_localctx = new IfStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 759;
				this.ifExpr_();
				}
				break;

			case 4:
				_localctx = new ForStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 760;
				this.forStmt_();
				}
				break;

			case 5:
				_localctx = new ExecStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 761;
				this.match(CWScriptParser.EXEC);
				this.state = 762;
				this.expr(0);
				}
				break;

			case 6:
				_localctx = new ExecuteNowStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 763;
				this.match(CWScriptParser.EXECUTE_NOW);
				this.state = 764;
				this.msg();
				}
				break;

			case 7:
				_localctx = new EmitStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 765;
				this.match(CWScriptParser.EMIT);
				this.state = 766;
				this.expr(0);
				}
				break;

			case 8:
				_localctx = new ReturnStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 767;
				this.match(CWScriptParser.RETURN);
				this.state = 768;
				this.expr(0);
				}
				break;

			case 9:
				_localctx = new FailStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 769;
				this.match(CWScriptParser.FAIL);
				this.state = 770;
				this.expr(0);
				}
				break;

			case 10:
				_localctx = new ExprStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 771;
				this.expr(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public letStmt_(): LetStmt_Context {
		let _localctx: LetStmt_Context = new LetStmt_Context(this._ctx, this.state);
		this.enterRule(_localctx, 130, CWScriptParser.RULE_letStmt_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 774;
			this.match(CWScriptParser.LET);
			this.state = 775;
			this.letLHS();
			this.state = 776;
			this.match(CWScriptParser.EQ);
			this.state = 777;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public letLHS(): LetLHSContext {
		let _localctx: LetLHSContext = new LetLHSContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, CWScriptParser.RULE_letLHS);
		let _la: number;
		try {
			this.state = 788;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.CONTRACT:
			case CWScriptParser.INTERFACE:
			case CWScriptParser.IMPORT:
			case CWScriptParser.IMPLEMENTS:
			case CWScriptParser.EXTENDS:
			case CWScriptParser.ERROR:
			case CWScriptParser.EVENT:
			case CWScriptParser.INSTANTIATE:
			case CWScriptParser.EXEC:
			case CWScriptParser.QUERY:
			case CWScriptParser.MIGRATE:
			case CWScriptParser.FOR:
			case CWScriptParser.IN:
			case CWScriptParser.FROM:
			case CWScriptParser.STATE:
			case CWScriptParser.TIMES:
			case CWScriptParser.IF:
			case CWScriptParser.ELSE:
			case CWScriptParser.AND:
			case CWScriptParser.OR:
			case CWScriptParser.TRUE:
			case CWScriptParser.FALSE:
			case CWScriptParser.FN:
			case CWScriptParser.LET:
			case CWScriptParser.RETURN:
			case CWScriptParser.STRUCT:
			case CWScriptParser.ENUM:
			case CWScriptParser.TYPE:
			case CWScriptParser.EMIT:
			case CWScriptParser.Ident:
				_localctx = new IdentLHSContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 779;
				this.ident();
				this.state = 782;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COLON) {
					{
					this.state = 780;
					this.match(CWScriptParser.COLON);
					this.state = 781;
					(_localctx as IdentLHSContext)._varType = this.typeExpr(0);
					}
				}

				}
				break;
			case CWScriptParser.LBRACE:
				_localctx = new StructUnpackLHSContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 784;
				this.match(CWScriptParser.LBRACE);
				this.state = 785;
				this.identList();
				this.state = 786;
				this.match(CWScriptParser.RBRACE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignStmt_(): AssignStmt_Context {
		let _localctx: AssignStmt_Context = new AssignStmt_Context(this._ctx, this.state);
		this.enterRule(_localctx, 134, CWScriptParser.RULE_assignStmt_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 790;
			_localctx._lhs = this.assignLHS();
			this.state = 791;
			_localctx._assignOp = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (CWScriptParser.EQ - 55)) | (1 << (CWScriptParser.PLUS_EQ - 55)) | (1 << (CWScriptParser.MINUS_EQ - 55)) | (1 << (CWScriptParser.MUL_EQ - 55)) | (1 << (CWScriptParser.DIV_EQ - 55)) | (1 << (CWScriptParser.MOD_EQ - 55)))) !== 0))) {
				_localctx._assignOp = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 792;
			_localctx._rhs = this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignLHS(): AssignLHSContext {
		let _localctx: AssignLHSContext = new AssignLHSContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, CWScriptParser.RULE_assignLHS);
		let _la: number;
		try {
			this.state = 826;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				_localctx = new StateItemAssignLHSContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 794;
				this.match(CWScriptParser.STATE);
				this.state = 795;
				this.match(CWScriptParser.DOT);
				this.state = 796;
				(_localctx as StateItemAssignLHSContext)._key = this.ident();
				this.state = 798;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.DOT) {
					{
					this.state = 797;
					(_localctx as StateItemAssignLHSContext)._inner = this.innerAssign();
					}
				}

				}
				break;

			case 2:
				_localctx = new StateMapAssignLHSContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 800;
				this.match(CWScriptParser.STATE);
				this.state = 801;
				this.match(CWScriptParser.DOT);
				this.state = 802;
				(_localctx as StateMapAssignLHSContext)._key = this.ident();
				this.state = 803;
				this.match(CWScriptParser.LBRACK);
				{
				this.state = 804;
				(_localctx as StateMapAssignLHSContext)._expr = this.expr(0);
				(_localctx as StateMapAssignLHSContext)._mapKeys.push((_localctx as StateMapAssignLHSContext)._expr);
				}
				this.state = 809;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 805;
					this.match(CWScriptParser.COMMA);
					this.state = 806;
					(_localctx as StateMapAssignLHSContext)._expr = this.expr(0);
					(_localctx as StateMapAssignLHSContext)._mapKeys.push((_localctx as StateMapAssignLHSContext)._expr);
					}
					}
					this.state = 811;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 812;
				this.match(CWScriptParser.RBRACK);
				this.state = 814;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.DOT) {
					{
					this.state = 813;
					(_localctx as StateMapAssignLHSContext)._inner = this.innerAssign();
					}
				}

				}
				break;

			case 3:
				_localctx = new IdentAssignLHSContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 816;
				this.ident();
				}
				break;

			case 4:
				_localctx = new MemberAssignLHSContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 817;
				(_localctx as MemberAssignLHSContext)._obj = this.expr(0);
				this.state = 818;
				this.match(CWScriptParser.DOT);
				this.state = 819;
				(_localctx as MemberAssignLHSContext)._member = this.ident();
				}
				break;

			case 5:
				_localctx = new TableAssignLHSContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 821;
				(_localctx as TableAssignLHSContext)._table = this.expr(0);
				this.state = 822;
				this.match(CWScriptParser.LBRACK);
				this.state = 823;
				(_localctx as TableAssignLHSContext)._key = this.expr(0);
				this.state = 824;
				this.match(CWScriptParser.RBRACK);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public innerAssign(): InnerAssignContext {
		let _localctx: InnerAssignContext = new InnerAssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, CWScriptParser.RULE_innerAssign);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 828;
			this.match(CWScriptParser.DOT);
			this.state = 829;
			_localctx._innerPath = this.innerPath();
			_localctx._paths.push(_localctx._innerPath);
			this.state = 834;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.DOT) {
				{
				{
				this.state = 830;
				this.match(CWScriptParser.DOT);
				this.state = 831;
				_localctx._innerPath = this.innerPath();
				_localctx._paths.push(_localctx._innerPath);
				}
				}
				this.state = 836;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public innerPath(): InnerPathContext {
		let _localctx: InnerPathContext = new InnerPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, CWScriptParser.RULE_innerPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 837;
			_localctx._name = this.ident();
			}
			this.state = 842;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.LBRACK) {
				{
				this.state = 838;
				this.match(CWScriptParser.LBRACK);
				this.state = 839;
				_localctx._tableKey = this.expr(0);
				this.state = 840;
				this.match(CWScriptParser.RBRACK);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public msg(): MsgContext {
		let _localctx: MsgContext = new MsgContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, CWScriptParser.RULE_msg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 844;
			this.match(CWScriptParser.HASH);
			this.state = 845;
			this.expr(0);
			this.state = 846;
			this.match(CWScriptParser.DOT);
			this.state = 847;
			this.ident();
			this.state = 848;
			this.match(CWScriptParser.LPAREN);
			this.state = 849;
			this.exprList();
			this.state = 850;
			this.match(CWScriptParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 144;
		this.enterRecursionRule(_localctx, 144, CWScriptParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 891;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				{
				_localctx = new GroupedExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 853;
				this.match(CWScriptParser.LPAREN);
				this.state = 854;
				this.expr(0);
				this.state = 855;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 2:
				{
				_localctx = new StateItemAccessExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 857;
				this.match(CWScriptParser.STATE);
				this.state = 858;
				this.match(CWScriptParser.DOT);
				this.state = 859;
				(_localctx as StateItemAccessExprContext)._key = this.ident();
				}
				break;

			case 3:
				{
				_localctx = new StateMapAccessExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 860;
				this.match(CWScriptParser.STATE);
				this.state = 861;
				this.match(CWScriptParser.DOT);
				this.state = 862;
				(_localctx as StateMapAccessExprContext)._key = this.ident();
				this.state = 863;
				this.match(CWScriptParser.LBRACK);
				{
				this.state = 864;
				(_localctx as StateMapAccessExprContext)._expr = this.expr(0);
				(_localctx as StateMapAccessExprContext)._mapKeys.push((_localctx as StateMapAccessExprContext)._expr);
				}
				this.state = 869;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 865;
					this.match(CWScriptParser.COMMA);
					this.state = 866;
					(_localctx as StateMapAccessExprContext)._expr = this.expr(0);
					(_localctx as StateMapAccessExprContext)._mapKeys.push((_localctx as StateMapAccessExprContext)._expr);
					}
					}
					this.state = 871;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 872;
				this.match(CWScriptParser.RBRACK);
				}
				break;

			case 4:
				{
				_localctx = new StructExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 874;
				this.ident();
				this.state = 875;
				this.match(CWScriptParser.LBRACE);
				this.state = 877;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.MIGRATE) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.TIMES) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE) | (1 << CWScriptParser.FN) | (1 << CWScriptParser.LET) | (1 << CWScriptParser.RETURN) | (1 << CWScriptParser.STRUCT) | (1 << CWScriptParser.ENUM))) !== 0) || _la === CWScriptParser.TYPE || _la === CWScriptParser.EMIT || _la === CWScriptParser.Ident) {
					{
					this.state = 876;
					this.namedExprList();
					}
				}

				this.state = 879;
				this.match(CWScriptParser.RBRACE);
				}
				break;

			case 5:
				{
				_localctx = new UnaryExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 881;
				(_localctx as UnaryExprContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (CWScriptParser.EXCLAM - 44)) | (1 << (CWScriptParser.PLUS - 44)) | (1 << (CWScriptParser.MINUS - 44)))) !== 0))) {
					(_localctx as UnaryExprContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 882;
				this.expr(12);
				}
				break;

			case 6:
				{
				_localctx = new IfExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 883;
				this.ifExpr_();
				}
				break;

			case 7:
				{
				_localctx = new QueryExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 884;
				this.match(CWScriptParser.QUERY);
				this.state = 885;
				this.expr(3);
				}
				break;

			case 8:
				{
				_localctx = new ValExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 886;
				this.val();
				}
				break;

			case 9:
				{
				_localctx = new ContrExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 887;
				this.ident();
				this.state = 888;
				this.match(CWScriptParser.AT);
				this.state = 889;
				this.expr(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 937;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 935;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 893;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 894;
						this.match(CWScriptParser.POW);
						this.state = 895;
						this.expr(12);
						}
						break;

					case 2:
						{
						_localctx = new MultDivModExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 896;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 897;
						(_localctx as MultDivModExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (CWScriptParser.MUL - 62)) | (1 << (CWScriptParser.DIV - 62)) | (1 << (CWScriptParser.MOD - 62)))) !== 0))) {
							(_localctx as MultDivModExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 898;
						this.expr(11);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 899;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 900;
						(_localctx as AddSubExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === CWScriptParser.PLUS || _la === CWScriptParser.MINUS)) {
							(_localctx as AddSubExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 901;
						this.expr(10);
						}
						break;

					case 4:
						{
						_localctx = new CompExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 902;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 903;
						(_localctx as CompExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (CWScriptParser.LT - 68)) | (1 << (CWScriptParser.LT_EQ - 68)) | (1 << (CWScriptParser.GT - 68)) | (1 << (CWScriptParser.GT_EQ - 68)))) !== 0))) {
							(_localctx as CompExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 904;
						this.expr(9);
						}
						break;

					case 5:
						{
						_localctx = new EqExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 905;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 906;
						(_localctx as EqExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === CWScriptParser.EQEQ || _la === CWScriptParser.NEQ)) {
							(_localctx as EqExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 907;
						this.expr(8);
						}
						break;

					case 6:
						{
						_localctx = new AndExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 908;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 909;
						this.match(CWScriptParser.AND);
						this.state = 910;
						this.expr(7);
						}
						break;

					case 7:
						{
						_localctx = new OrExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 911;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 912;
						this.match(CWScriptParser.OR);
						this.state = 913;
						this.expr(6);
						}
						break;

					case 8:
						{
						_localctx = new MemberAccessExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 914;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 915;
						this.match(CWScriptParser.DOT);
						this.state = 916;
						this.ident();
						}
						break;

					case 9:
						{
						_localctx = new TableLookupExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 917;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 918;
						this.match(CWScriptParser.LBRACK);
						this.state = 919;
						this.expr(0);
						this.state = 920;
						this.match(CWScriptParser.COMMA);
						this.state = 921;
						this.match(CWScriptParser.RBRACK);
						}
						break;

					case 10:
						{
						_localctx = new PosArgsFnCallExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 923;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 924;
						this.match(CWScriptParser.LPAREN);
						this.state = 926;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.MIGRATE) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.TIMES) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE) | (1 << CWScriptParser.FN) | (1 << CWScriptParser.LET) | (1 << CWScriptParser.RETURN) | (1 << CWScriptParser.STRUCT) | (1 << CWScriptParser.ENUM))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.EXCLAM - 32)) | (1 << (CWScriptParser.D_COLON - 32)) | (1 << (CWScriptParser.PLUS - 32)) | (1 << (CWScriptParser.MINUS - 32)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (CWScriptParser.Ident - 73)) | (1 << (CWScriptParser.StringLiteral - 73)) | (1 << (CWScriptParser.IntegerLiteral - 73)) | (1 << (CWScriptParser.DecimalLiteral - 73)))) !== 0)) {
							{
							this.state = 925;
							this.exprList();
							}
						}

						this.state = 928;
						this.match(CWScriptParser.RPAREN);
						}
						break;

					case 11:
						{
						_localctx = new NamedArgsFnCallExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 929;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 930;
						this.match(CWScriptParser.LPAREN);
						this.state = 932;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.MIGRATE) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.TIMES) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE) | (1 << CWScriptParser.FN) | (1 << CWScriptParser.LET) | (1 << CWScriptParser.RETURN) | (1 << CWScriptParser.STRUCT) | (1 << CWScriptParser.ENUM))) !== 0) || _la === CWScriptParser.TYPE || _la === CWScriptParser.EMIT || _la === CWScriptParser.Ident) {
							{
							this.state = 931;
							this.namedExprList();
							}
						}

						this.state = 934;
						this.match(CWScriptParser.RPAREN);
						}
						break;
					}
					}
				}
				this.state = 939;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public val(): ValContext {
		let _localctx: ValContext = new ValContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, CWScriptParser.RULE_val);
		try {
			this.state = 958;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				_localctx = new UnitValContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 940;
				this.match(CWScriptParser.LPAREN);
				this.state = 941;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 2:
				_localctx = new StructValContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 942;
				this.structVal_();
				}
				break;

			case 3:
				_localctx = new TupleValContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 943;
				(_localctx as TupleValContext)._tupleType = this.typePath();
				this.state = 944;
				this.match(CWScriptParser.LPAREN);
				this.state = 945;
				this.exprList();
				this.state = 946;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 4:
				_localctx = new VecValContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 948;
				this.match(CWScriptParser.LBRACK);
				this.state = 949;
				this.exprList();
				this.state = 950;
				this.match(CWScriptParser.RBRACK);
				}
				break;

			case 5:
				_localctx = new StringValContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 952;
				this.match(CWScriptParser.StringLiteral);
				}
				break;

			case 6:
				_localctx = new IntegerValContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 953;
				this.match(CWScriptParser.IntegerLiteral);
				}
				break;

			case 7:
				_localctx = new DecimalValContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 954;
				this.match(CWScriptParser.DecimalLiteral);
				}
				break;

			case 8:
				_localctx = new TrueValContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 955;
				this.match(CWScriptParser.TRUE);
				}
				break;

			case 9:
				_localctx = new FalseValContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 956;
				this.match(CWScriptParser.FALSE);
				}
				break;

			case 10:
				_localctx = new IdentValContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 957;
				this.ident();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structVal_(): StructVal_Context {
		let _localctx: StructVal_Context = new StructVal_Context(this._ctx, this.state);
		this.enterRule(_localctx, 148, CWScriptParser.RULE_structVal_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 960;
			_localctx._structType = this.typePath();
			}
			this.state = 961;
			this.match(CWScriptParser.LBRACE);
			this.state = 963;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.MIGRATE) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.TIMES) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE) | (1 << CWScriptParser.FN) | (1 << CWScriptParser.LET) | (1 << CWScriptParser.RETURN) | (1 << CWScriptParser.STRUCT) | (1 << CWScriptParser.ENUM))) !== 0) || _la === CWScriptParser.TYPE || _la === CWScriptParser.EMIT || _la === CWScriptParser.Ident) {
				{
				this.state = 962;
				_localctx._members = this.structValMembers();
				}
			}

			this.state = 965;
			this.match(CWScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structValMembers(): StructValMembersContext {
		let _localctx: StructValMembersContext = new StructValMembersContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, CWScriptParser.RULE_structValMembers);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 967;
			this.structValMember();
			this.state = 972;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 968;
					this.match(CWScriptParser.COMMA);
					this.state = 969;
					this.structValMember();
					}
					}
				}
				this.state = 974;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
			}
			this.state = 976;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COMMA) {
				{
				this.state = 975;
				this.match(CWScriptParser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structValMember(): StructValMemberContext {
		let _localctx: StructValMemberContext = new StructValMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, CWScriptParser.RULE_structValMember);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 978;
			_localctx._name = this.ident();
			this.state = 979;
			this.match(CWScriptParser.COLON);
			this.state = 980;
			_localctx._value = this.expr(0);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifExpr_(): IfExpr_Context {
		let _localctx: IfExpr_Context = new IfExpr_Context(this._ctx, this.state);
		this.enterRule(_localctx, 154, CWScriptParser.RULE_ifExpr_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 982;
			this.ifClause_();
			this.state = 984;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
			case 1:
				{
				this.state = 983;
				this.elseIfClauses();
				}
				break;
			}
			this.state = 987;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				{
				this.state = 986;
				this.elseClause();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifClause_(): IfClause_Context {
		let _localctx: IfClause_Context = new IfClause_Context(this._ctx, this.state);
		this.enterRule(_localctx, 156, CWScriptParser.RULE_ifClause_);
		try {
			this.state = 997;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 113, this._ctx) ) {
			case 1:
				_localctx = new IfClauseContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 989;
				this.match(CWScriptParser.IF);
				{
				this.state = 990;
				(_localctx as IfClauseContext)._predicate = this.expr(0);
				}
				this.state = 991;
				this.fnBody();
				}
				break;

			case 2:
				_localctx = new IfLetClauseContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 993;
				this.match(CWScriptParser.IF);
				this.state = 994;
				this.letStmt_();
				this.state = 995;
				this.fnBody();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elseIfClauses(): ElseIfClausesContext {
		let _localctx: ElseIfClausesContext = new ElseIfClausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, CWScriptParser.RULE_elseIfClauses);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1001;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 999;
					this.match(CWScriptParser.ELSE);
					this.state = 1000;
					this.ifClause_();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1003;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elseClause(): ElseClauseContext {
		let _localctx: ElseClauseContext = new ElseClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, CWScriptParser.RULE_elseClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1005;
			this.match(CWScriptParser.ELSE);
			this.state = 1006;
			this.fnBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStmt_(): ForStmt_Context {
		let _localctx: ForStmt_Context = new ForStmt_Context(this._ctx, this.state);
		this.enterRule(_localctx, 162, CWScriptParser.RULE_forStmt_);
		try {
			this.state = 1019;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 115, this._ctx) ) {
			case 1:
				_localctx = new ForInStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1008;
				this.match(CWScriptParser.FOR);
				this.state = 1009;
				(_localctx as ForInStmtContext)._item = this.letLHS();
				this.state = 1010;
				this.match(CWScriptParser.IN);
				this.state = 1011;
				(_localctx as ForInStmtContext)._iterItems = this.expr(0);
				this.state = 1012;
				this.fnBody();
				}
				break;

			case 2:
				_localctx = new ForTimesStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1014;
				this.match(CWScriptParser.FOR);
				this.state = 1015;
				this.expr(0);
				this.state = 1016;
				this.match(CWScriptParser.TIMES);
				this.state = 1017;
				this.fnBody();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identList(): IdentListContext {
		let _localctx: IdentListContext = new IdentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, CWScriptParser.RULE_identList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1021;
			_localctx._ident = this.ident();
			_localctx._symbols.push(_localctx._ident);
			}
			this.state = 1026;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 1022;
				this.match(CWScriptParser.COMMA);
				{
				this.state = 1023;
				_localctx._ident = this.ident();
				_localctx._symbols.push(_localctx._ident);
				}
				}
				}
				this.state = 1028;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exprList(): ExprListContext {
		let _localctx: ExprListContext = new ExprListContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, CWScriptParser.RULE_exprList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1029;
			this.expr(0);
			this.state = 1034;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 1030;
				this.match(CWScriptParser.COMMA);
				this.state = 1031;
				this.expr(0);
				}
				}
				this.state = 1036;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedExprList(): NamedExprListContext {
		let _localctx: NamedExprListContext = new NamedExprListContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, CWScriptParser.RULE_namedExprList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1037;
			this.namedExpr();
			this.state = 1042;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 1038;
				this.match(CWScriptParser.COMMA);
				this.state = 1039;
				this.namedExpr();
				}
				}
				this.state = 1044;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedExpr(): NamedExprContext {
		let _localctx: NamedExprContext = new NamedExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, CWScriptParser.RULE_namedExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1045;
			_localctx._name = this.ident();
			this.state = 1046;
			this.match(CWScriptParser.COLON);
			this.state = 1047;
			_localctx._value = this.expr(0);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ident(): IdentContext {
		let _localctx: IdentContext = new IdentContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, CWScriptParser.RULE_ident);
		try {
			this.state = 1051;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.Ident:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1049;
				this.match(CWScriptParser.Ident);
				}
				break;
			case CWScriptParser.CONTRACT:
			case CWScriptParser.INTERFACE:
			case CWScriptParser.IMPORT:
			case CWScriptParser.IMPLEMENTS:
			case CWScriptParser.EXTENDS:
			case CWScriptParser.ERROR:
			case CWScriptParser.EVENT:
			case CWScriptParser.INSTANTIATE:
			case CWScriptParser.EXEC:
			case CWScriptParser.QUERY:
			case CWScriptParser.MIGRATE:
			case CWScriptParser.FOR:
			case CWScriptParser.IN:
			case CWScriptParser.FROM:
			case CWScriptParser.STATE:
			case CWScriptParser.TIMES:
			case CWScriptParser.IF:
			case CWScriptParser.ELSE:
			case CWScriptParser.AND:
			case CWScriptParser.OR:
			case CWScriptParser.TRUE:
			case CWScriptParser.FALSE:
			case CWScriptParser.FN:
			case CWScriptParser.LET:
			case CWScriptParser.RETURN:
			case CWScriptParser.STRUCT:
			case CWScriptParser.ENUM:
			case CWScriptParser.TYPE:
			case CWScriptParser.EMIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1050;
				this.reservedKeyword();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cwspec(): CwspecContext {
		let _localctx: CwspecContext = new CwspecContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, CWScriptParser.RULE_cwspec);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1054;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1053;
					_la = this._input.LA(1);
					if (!(_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1056;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reservedKeyword(): ReservedKeywordContext {
		let _localctx: ReservedKeywordContext = new ReservedKeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, CWScriptParser.RULE_reservedKeyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1058;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.MIGRATE) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.TIMES) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE) | (1 << CWScriptParser.FN) | (1 << CWScriptParser.LET) | (1 << CWScriptParser.RETURN) | (1 << CWScriptParser.STRUCT) | (1 << CWScriptParser.ENUM))) !== 0) || _la === CWScriptParser.TYPE || _la === CWScriptParser.EMIT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 47:
			return this.typeExpr_sempred(_localctx as TypeExprContext, predIndex);

		case 72:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private typeExpr_sempred(_localctx: TypeExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 7);

		case 1:
			return this.precpred(this._ctx, 5);

		case 2:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 11);

		case 4:
			return this.precpred(this._ctx, 10);

		case 5:
			return this.precpred(this._ctx, 9);

		case 6:
			return this.precpred(this._ctx, 8);

		case 7:
			return this.precpred(this._ctx, 7);

		case 8:
			return this.precpred(this._ctx, 6);

		case 9:
			return this.precpred(this._ctx, 5);

		case 10:
			return this.precpred(this._ctx, 17);

		case 11:
			return this.precpred(this._ctx, 16);

		case 12:
			return this.precpred(this._ctx, 15);

		case 13:
			return this.precpred(this._ctx, 14);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03S\u0427\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x03\x02\x05\x02\xB6\n\x02\x03\x02\x07\x02\xB9\n\x02" +
		"\f\x02\x0E\x02\xBC\v\x02\x03\x03\x03\x03\x03\x03\x05\x03\xC1\n\x03\x03" +
		"\x04\x05\x04\xC4\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xCA\n\x04" +
		"\x03\x04\x03\x04\x05\x04\xCE\n\x04\x03\x04\x03\x04\x03\x05\x05\x05\xD3" +
		"\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xD9\n\x05\x03\x05\x03\x05" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06" +
		"\xE5\n\x06\x03\x06\x03\x06\x03\x06\x05\x06\xEA\n\x06\x03\x06\x03\x06\x03" +
		"\x06\x05\x06\xEF\n\x06\x03\x07\x03\x07\x03\x07\x07\x07\xF4\n\x07\f\x07" +
		"\x0E\x07\xF7\v\x07\x03\b\x03\b\x03\b\x05\b\xFC\n\b\x03\t\x03\t\x07\t\u0100" +
		"\n\t\f\t\x0E\t\u0103\v\t\x03\t\x03\t\x03\n\x03\n\x07\n\u0109\n\n\f\n\x0E" +
		"\n\u010C\v\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\u011E\n\v\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u012D" +
		"\n\f\x03\r\x05\r\u0130\n\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x07\x0E\u013A\n\x0E\f\x0E\x0E\x0E\u013D\v\x0E\x03\x0E\x05" +
		"\x0E\u0140\n\x0E\x05\x0E\u0142\n\x0E\x03\x0E\x03\x0E\x03\x0F\x05\x0F\u0147" +
		"\n\x0F\x03\x0F\x03\x0F\x03\x10\x05\x10\u014C\n\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u0156\n\x11\f\x11" +
		"\x0E\x11\u0159\v\x11\x03\x11\x05\x11\u015C\n\x11\x05\x11\u015E\n\x11\x03" +
		"\x11\x03\x11\x03\x12\x05\x12\u0163\n\x12\x03\x12\x03\x12\x03\x13\x05\x13" +
		"\u0168\n\x13\x03\x13\x03\x13\x03\x13\x05\x13\u016D\n\x13\x03\x13\x03\x13" +
		"\x05\x13\u0171\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\u0178" +
		"\n\x14\f\x14\x0E\x14\u017B\v\x14\x03\x14\x05\x14\u017E\n\x14\x05\x14\u0180" +
		"\n\x14\x03\x14\x03\x14\x03\x15\x05\x15\u0185\n\x15\x03\x15\x03\x15\x05" +
		"\x15\u0189\n\x15\x03\x15\x05\x15\u018C\n\x15\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x07\x18\u019B\n\x18\f\x18\x0E\x18\u019E\v\x18\x03\x18\x03\x18\x03" +
		"\x19\x03\x19\x03\x19\x05\x19\u01A5\n\x19\x03\x19\x03\x19\x03\x1A\x05\x1A" +
		"\u01AA\n\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u01AF\n\x1A\x03\x1A\x03\x1A" +
		"\x03\x1B\x05\x1B\u01B4\n\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u01B9\n\x1B" +
		"\x03\x1C\x05\x1C\u01BC\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03" +
		"\x1D\x07\x1D\u01C4\n\x1D\f\x1D\x0E\x1D\u01C7\v\x1D\x03\x1D\x03\x1D\x03" +
		"\x1E\x05\x1E\u01CC\n\x1E\x03\x1E\x03\x1E\x03\x1F\x05\x1F\u01D1\n\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x07 \u01D9\n \f \x0E \u01DC\v \x03" +
		" \x03 \x03!\x05!\u01E1\n!\x03!\x03!\x03\"\x05\"\u01E6\n\"\x03\"\x03\"" +
		"\x03\"\x03#\x03#\x03#\x07#\u01EE\n#\f#\x0E#\u01F1\v#\x03#\x03#\x03$\x05" +
		"$\u01F6\n$\x03$\x03$\x03%\x05%\u01FB\n%\x03%\x03%\x03%\x03&\x03&\x03&" +
		"\x07&\u0203\n&\f&\x0E&\u0206\v&\x03&\x03&\x03\'\x05\'\u020B\n\'\x03\'" +
		"\x03\'\x03(\x05(\u0210\n(\x03(\x03(\x03(\x05(\u0215\n(\x03(\x03(\x03)" +
		"\x05)\u021A\n)\x03)\x03)\x03)\x05)\u021F\n)\x03*\x03*\x05*\u0223\n*\x03" +
		"+\x03+\x03+\x05+\u0228\n+\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x07-\u0231" +
		"\n-\f-\x0E-\u0234\v-\x03-\x03-\x03.\x03.\x03.\x03.\x07.\u023C\n.\f.\x0E" +
		".\u023F\v.\x05.\u0241\n.\x03.\x03.\x03/\x03/\x03/\x03/\x07/\u0249\n/\f" +
		"/\x0E/\u024C\v/\x03/\x05/\u024F\n/\x05/\u0251\n/\x03/\x03/\x030\x050\u0256" +
		"\n0\x030\x030\x050\u025A\n0\x030\x030\x030\x031\x031\x031\x031\x031\x03" +
		"1\x071\u0265\n1\f1\x0E1\u0268\v1\x031\x031\x031\x031\x031\x031\x031\x05" +
		"1\u0271\n1\x031\x031\x031\x031\x031\x031\x031\x071\u027A\n1\f1\x0E1\u027D" +
		"\v1\x032\x032\x032\x032\x072\u0283\n2\f2\x0E2\u0286\v2\x032\x032\x033" +
		"\x033\x033\x073\u028D\n3\f3\x0E3\u0290\v3\x034\x054\u0293\n4\x034\x03" +
		"4\x035\x035\x035\x055\u029A\n5\x036\x056\u029D\n6\x036\x036\x036\x037" +
		"\x057\u02A3\n7\x037\x037\x037\x037\x037\x037\x038\x038\x058\u02AD\n8\x03" +
		"8\x078\u02B0\n8\f8\x0E8\u02B3\v8\x038\x058\u02B6\n8\x058\u02B8\n8\x03" +
		"9\x059\u02BB\n9\x039\x039\x039\x039\x039\x03:\x03:\x03:\x05:\u02C5\n:" +
		"\x03;\x03;\x03;\x05;\u02CA\n;\x03;\x03;\x03<\x05<\u02CF\n<\x03<\x03<\x03" +
		"<\x03=\x03=\x03=\x03>\x03>\x05>\u02D9\n>\x03>\x03>\x03?\x03?\x03?\x07" +
		"?\u02E0\n?\f?\x0E?\u02E3\v?\x03@\x03@\x05@\u02E7\n@\x03@\x03@\x03@\x03" +
		"A\x03A\x07A\u02EE\nA\fA\x0EA\u02F1\vA\x03A\x03A\x03A\x05A\u02F6\nA\x03" +
		"B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03" +
		"B\x05B\u0307\nB\x03C\x03C\x03C\x03C\x03C\x03D\x03D\x03D\x05D\u0311\nD" +
		"\x03D\x03D\x03D\x03D\x05D\u0317\nD\x03E\x03E\x03E\x03E\x03F\x03F\x03F" +
		"\x03F\x05F\u0321\nF\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x07F\u032A\nF\f" +
		"F\x0EF\u032D\vF\x03F\x03F\x05F\u0331\nF\x03F\x03F\x03F\x03F\x03F\x03F" +
		"\x03F\x03F\x03F\x03F\x05F\u033D\nF\x03G\x03G\x03G\x03G\x07G\u0343\nG\f" +
		"G\x0EG\u0346\vG\x03H\x03H\x03H\x03H\x03H\x05H\u034D\nH\x03I\x03I\x03I" +
		"\x03I\x03I\x03I\x03I\x03I\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
		"J\x03J\x03J\x03J\x03J\x03J\x03J\x07J\u0366\nJ\fJ\x0EJ\u0369\vJ\x03J\x03" +
		"J\x03J\x03J\x03J\x05J\u0370\nJ\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
		"J\x03J\x03J\x03J\x03J\x05J\u037E\nJ\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
		"J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
		"J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x05J\u03A1" +
		"\nJ\x03J\x03J\x03J\x03J\x05J\u03A7\nJ\x03J\x07J\u03AA\nJ\fJ\x0EJ\u03AD" +
		"\vJ\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03" +
		"K\x03K\x03K\x03K\x03K\x05K\u03C1\nK\x03L\x03L\x03L\x05L\u03C6\nL\x03L" +
		"\x03L\x03M\x03M\x03M\x07M\u03CD\nM\fM\x0EM\u03D0\vM\x03M\x05M\u03D3\n" +
		"M\x03N\x03N\x03N\x03N\x03O\x03O\x05O\u03DB\nO\x03O\x05O\u03DE\nO\x03P" +
		"\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x05P\u03E8\nP\x03Q\x03Q\x06Q\u03EC" +
		"\nQ\rQ\x0EQ\u03ED\x03R\x03R\x03R\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03" +
		"S\x03S\x03S\x03S\x05S\u03FE\nS\x03T\x03T\x03T\x07T\u0403\nT\fT\x0ET\u0406" +
		"\vT\x03U\x03U\x03U\x07U\u040B\nU\fU\x0EU\u040E\vU\x03V\x03V\x03V\x07V" +
		"\u0413\nV\fV\x0EV\u0416\vV\x03W\x03W\x03W\x03W\x03X\x03X\x05X\u041E\n" +
		"X\x03Y\x06Y\u0421\nY\rY\x0EY\u0422\x03Z\x03Z\x03Z\x02\x02\x04`\x92[\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02" +
		",\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02" +
		"H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02" +
		"d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02" +
		"\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02" +
		"\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02" +
		"\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\x02\n" +
		"\b\x0299==??AACCEE\x05\x02..<<>>\x05\x02@@BBDD\x04\x02<<>>\x03\x02FI\x03" +
		"\x02:;\x03\x02OP\x06\x02\x03\x06\t\r\x0F\x1D\x1F#\x02\u0486\x02\xB5\x03" +
		"\x02\x02\x02\x04\xC0\x03\x02\x02\x02\x06\xC3\x03\x02\x02\x02\b\xD2\x03" +
		"\x02\x02\x02\n\xEE\x03\x02\x02\x02\f\xF0\x03\x02\x02\x02\x0E\xF8\x03\x02" +
		"\x02\x02\x10\xFD\x03\x02\x02\x02\x12\u0106\x03\x02\x02\x02\x14\u011D\x03" +
		"\x02\x02\x02\x16\u012C\x03\x02\x02\x02\x18\u012F\x03\x02\x02\x02\x1A\u0134" +
		"\x03\x02\x02\x02\x1C\u0146\x03\x02\x02\x02\x1E\u014B\x03\x02\x02\x02 " +
		"\u0150\x03\x02\x02\x02\"\u0162\x03\x02\x02\x02$\u0170\x03\x02\x02\x02" +
		"&\u0172\x03\x02\x02\x02(\u018B\x03\x02\x02\x02*\u018D\x03\x02\x02\x02" +
		",\u0191\x03\x02\x02\x02.\u0196\x03\x02\x02\x020\u01A4\x03\x02\x02\x02" +
		"2\u01A9\x03\x02\x02\x024\u01B3\x03\x02\x02\x026\u01BB\x03\x02\x02\x02" +
		"8\u01C0\x03\x02\x02\x02:\u01CB\x03\x02\x02\x02<\u01D0\x03\x02\x02\x02" +
		">\u01D5\x03\x02\x02\x02@\u01E0\x03\x02\x02\x02B\u01E5\x03\x02\x02\x02" +
		"D\u01EA\x03\x02\x02\x02F\u01F5\x03\x02\x02\x02H\u01FA\x03\x02\x02\x02" +
		"J\u01FF\x03\x02\x02\x02L\u020A\x03\x02\x02\x02N\u020F\x03\x02\x02\x02" +
		"P\u0219\x03\x02\x02\x02R\u0222\x03\x02\x02\x02T\u0224\x03\x02\x02\x02" +
		"V\u0229\x03\x02\x02\x02X\u022C\x03\x02\x02\x02Z\u0237\x03\x02\x02\x02" +
		"\\\u0244\x03\x02\x02\x02^\u0255\x03\x02\x02\x02`\u0270\x03\x02\x02\x02" +
		"b\u027E\x03\x02\x02\x02d\u0289\x03\x02\x02\x02f\u0292\x03\x02\x02\x02" +
		"h\u0299\x03\x02\x02\x02j\u029C\x03\x02\x02\x02l\u02A2\x03\x02\x02\x02" +
		"n\u02B7\x03\x02\x02\x02p\u02BA\x03\x02\x02\x02r\u02C1\x03\x02\x02\x02" +
		"t\u02C6\x03\x02\x02\x02v\u02CE\x03\x02\x02\x02x\u02D3\x03\x02\x02\x02" +
		"z\u02D6\x03\x02\x02\x02|\u02DC\x03\x02\x02\x02~\u02E4\x03\x02\x02\x02" +
		"\x80\u02F5\x03\x02\x02\x02\x82\u0306\x03\x02\x02\x02\x84\u0308\x03\x02" +
		"\x02\x02\x86\u0316\x03\x02\x02\x02\x88\u0318\x03\x02\x02\x02\x8A\u033C" +
		"\x03\x02\x02\x02\x8C\u033E\x03\x02\x02\x02\x8E\u0347\x03\x02\x02\x02\x90" +
		"\u034E\x03\x02\x02\x02\x92\u037D\x03\x02\x02\x02\x94\u03C0\x03\x02\x02" +
		"\x02\x96\u03C2\x03\x02\x02\x02\x98\u03C9\x03\x02\x02\x02\x9A\u03D4\x03" +
		"\x02\x02\x02\x9C\u03D8\x03\x02\x02\x02\x9E\u03E7\x03\x02\x02\x02\xA0\u03EB" +
		"\x03\x02\x02\x02\xA2\u03EF\x03\x02\x02\x02\xA4\u03FD\x03\x02\x02\x02\xA6" +
		"\u03FF\x03\x02\x02\x02\xA8\u0407\x03\x02\x02\x02\xAA\u040F\x03\x02\x02" +
		"\x02\xAC\u0417\x03\x02\x02\x02\xAE\u041D\x03\x02\x02\x02\xB0\u0420\x03" +
		"\x02\x02\x02\xB2\u0424\x03\x02\x02\x02\xB4\xB6\x05\xB0Y\x02\xB5\xB4\x03" +
		"\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xBA\x03\x02\x02\x02\xB7\xB9\x05" +
		"\x04\x03\x02\xB8\xB7\x03\x02\x02\x02\xB9\xBC\x03\x02\x02\x02\xBA\xB8\x03" +
		"\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\x03\x03\x02\x02\x02\xBC\xBA\x03" +
		"\x02\x02\x02\xBD\xC1\x05\x06\x04\x02\xBE\xC1\x05\b\x05\x02\xBF\xC1\x05" +
		"\n\x06\x02\xC0\xBD\x03\x02\x02\x02\xC0\xBE\x03\x02\x02\x02\xC0\xBF\x03" +
		"\x02\x02\x02\xC1\x05\x03\x02\x02\x02\xC2\xC4\x05\xB0Y\x02\xC3\xC2\x03" +
		"\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\xC6\x07" +
		"\x03\x02\x02\xC6\xC9\x05\xAEX\x02\xC7\xC8\x07\t\x02\x02\xC8\xCA\x05\xA6" +
		"T\x02\xC9\xC7\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\xCD\x03\x02" +
		"\x02\x02\xCB\xCC\x07\x06\x02\x02\xCC\xCE\x05\xA6T\x02\xCD\xCB\x03\x02" +
		"\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD0\x05\x10" +
		"\t\x02\xD0\x07\x03\x02\x02\x02\xD1\xD3\x05\xB0Y\x02\xD2\xD1\x03\x02\x02" +
		"\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD5\x07\x04\x02" +
		"\x02\xD5\xD8\x05\xAEX\x02\xD6\xD7\x07\t\x02\x02\xD7\xD9\x05\xA6T\x02\xD8" +
		"\xD6\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA" +
		"\xDB\x05\x12\n\x02\xDB\t\x03\x02\x02\x02\xDC\xDD\x07\x05\x02\x02\xDD\xDE" +
		"\x07@\x02\x02\xDE\xDF\x07\x13\x02\x02\xDF\xEF\x07L\x02\x02\xE0\xE9\x07" +
		"\x05\x02\x02\xE1\xE2\x07%\x02\x02\xE2\xE4\x05\f\x07\x02\xE3\xE5\x07,\x02" +
		"\x02\xE4\xE3\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE6\x03\x02\x02" +
		"\x02\xE6\xE7\x07&\x02\x02\xE7\xEA\x03\x02\x02\x02\xE8\xEA\x05\f\x07\x02" +
		"\xE9\xE1\x03\x02\x02\x02\xE9\xE8\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02" +
		"\xEB\xEC\x07\x13\x02\x02\xEC\xED\x07L\x02\x02\xED\xEF\x03\x02\x02\x02" +
		"\xEE\xDC\x03\x02\x02\x02\xEE\xE0\x03\x02\x02\x02\xEF\v\x03\x02\x02\x02" +
		"\xF0\xF5\x05\x0E\b\x02\xF1\xF2\x07,\x02\x02\xF2\xF4\x05\x0E\b\x02\xF3" +
		"\xF1\x03\x02\x02\x02\xF4\xF7\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF5" +
		"\xF6\x03\x02\x02\x02\xF6\r\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF8" +
		"\xFB\x05\xAEX\x02\xF9\xFA\x07$\x02\x02\xFA\xFC\x05\xAEX\x02\xFB\xF9\x03" +
		"\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\x0F\x03\x02\x02\x02\xFD\u0101" +
		"\x07)\x02\x02\xFE\u0100\x05\x14\v\x02\xFF\xFE\x03\x02\x02\x02\u0100\u0103" +
		"\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02" +
		"\u0102\u0104\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02\u0104\u0105\x07" +
		"*\x02\x02\u0105\x11\x03\x02\x02\x02\u0106\u010A\x07)\x02\x02\u0107\u0109" +
		"\x05\x16\f\x02\u0108\u0107\x03\x02\x02\x02\u0109\u010C\x03\x02\x02\x02" +
		"\u010A\u0108\x03\x02\x02\x02\u010A\u010B\x03\x02\x02\x02\u010B\u010D\x03" +
		"\x02\x02\x02\u010C\u010A\x03\x02\x02\x02\u010D\u010E\x07*\x02\x02\u010E" +
		"\x13\x03\x02\x02\x02\u010F\u011E\x05h5\x02\u0110\u011E\x05v<\x02\u0111" +
		"\u011E\x05\x18\r\x02\u0112\u011E\x05\x1A\x0E\x02\u0113\u011E\x05\x1E\x10" +
		"\x02\u0114\u011E\x05 \x11\x02\u0115\u011E\x05$\x13\x02\u0116\u011E\x05" +
		"&\x14\x02\u0117\u011E\x052\x1A\x02\u0118\u011E\x056\x1C\x02\u0119\u011E" +
		"\x058\x1D\x02\u011A\u011E\x05B\"\x02\u011B\u011E\x05D#\x02\u011C\u011E" +
		"\x05N(\x02\u011D\u010F\x03\x02\x02\x02\u011D\u0110\x03\x02\x02\x02\u011D" +
		"\u0111\x03\x02\x02\x02\u011D\u0112\x03\x02\x02\x02\u011D\u0113\x03\x02" +
		"\x02\x02\u011D\u0114\x03\x02\x02\x02\u011D\u0115\x03\x02\x02\x02\u011D" +
		"\u0116\x03\x02\x02\x02\u011D\u0117\x03\x02\x02\x02\u011D\u0118\x03\x02" +
		"\x02\x02\u011D\u0119\x03\x02\x02\x02\u011D\u011A\x03\x02\x02\x02\u011D" +
		"\u011B\x03\x02\x02\x02\u011D\u011C\x03\x02\x02\x02\u011E\x15\x03\x02\x02" +
		"\x02\u011F\u012D\x05h5\x02\u0120\u012D\x05\x18\r\x02\u0121\u012D\x05\x1A" +
		"\x0E\x02\u0122\u012D\x05\x1E\x10\x02\u0123\u012D\x05 \x11\x02\u0124\u012D" +
		"\x05$\x13\x02\u0125\u012D\x05&\x14\x02\u0126\u012D\x054\x1B\x02\u0127" +
		"\u012D\x05<\x1F\x02\u0128\u012D\x05> \x02\u0129\u012D\x05H%\x02\u012A" +
		"\u012D\x05J&\x02\u012B\u012D\x05P)\x02\u012C\u011F\x03\x02\x02\x02\u012C" +
		"\u0120\x03\x02\x02\x02\u012C\u0121\x03\x02\x02\x02\u012C\u0122\x03\x02" +
		"\x02\x02\u012C\u0123\x03\x02\x02\x02\u012C\u0124\x03\x02\x02\x02\u012C" +
		"\u0125\x03\x02\x02\x02\u012C\u0126\x03\x02\x02\x02\u012C\u0127\x03\x02" +
		"\x02\x02\u012C\u0128\x03\x02\x02\x02\u012C\u0129\x03\x02\x02\x02\u012C" +
		"\u012A\x03\x02\x02\x02\u012C\u012B\x03\x02\x02\x02\u012D\x17\x03\x02\x02" +
		"\x02\u012E\u0130\x05\xB0Y\x02\u012F\u012E\x03\x02\x02\x02\u012F\u0130" +
		"\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131\u0132\x07\n\x02\x02" +
		"\u0132\u0133\x05T+\x02\u0133\x19\x03\x02\x02\x02\u0134\u0135\x07\n\x02" +
		"\x02\u0135\u0141\x07)\x02\x02\u0136\u013B\x05\x1C\x0F\x02\u0137\u0138" +
		"\x07,\x02\x02\u0138\u013A\x05\x1C\x0F\x02\u0139\u0137\x03\x02\x02\x02" +
		"\u013A\u013D\x03\x02\x02\x02\u013B\u0139\x03\x02\x02\x02\u013B\u013C\x03" +
		"\x02\x02\x02\u013C\u013F\x03\x02\x02\x02\u013D\u013B\x03\x02\x02\x02\u013E" +
		"\u0140\x07,\x02\x02\u013F\u013E\x03\x02\x02\x02\u013F\u0140\x03\x02\x02" +
		"\x02\u0140\u0142\x03\x02\x02\x02\u0141\u0136\x03\x02\x02\x02\u0141\u0142" +
		"\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0144\x07*\x02\x02" +
		"\u0144\x1B\x03\x02\x02\x02\u0145\u0147\x05\xB0Y\x02\u0146\u0145\x03\x02" +
		"\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148" +
		"\u0149\x05T+\x02\u0149\x1D\x03\x02\x02\x02\u014A\u014C\x05\xB0Y\x02\u014B" +
		"\u014A\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u014D\x03\x02" +
		"\x02\x02\u014D\u014E\x07\v\x02\x02\u014E\u014F\x05T+\x02\u014F\x1F\x03" +
		"\x02\x02\x02\u0150\u0151\x07\v\x02\x02\u0151\u015D\x07)\x02\x02\u0152" +
		"\u0157\x05\"\x12\x02\u0153\u0154\x07,\x02\x02\u0154\u0156\x05\"\x12\x02" +
		"\u0155\u0153\x03\x02\x02\x02\u0156\u0159\x03\x02\x02\x02\u0157\u0155\x03" +
		"\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158\u015B\x03\x02\x02\x02\u0159" +
		"\u0157\x03\x02\x02\x02\u015A\u015C\x07,\x02\x02\u015B\u015A\x03\x02\x02" +
		"\x02\u015B\u015C\x03\x02\x02\x02\u015C\u015E\x03\x02\x02\x02\u015D\u0152" +
		"\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02" +
		"\u015F\u0160\x07*\x02\x02\u0160!\x03\x02\x02\x02\u0161\u0163\x05\xB0Y" +
		"\x02\u0162\u0161\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163\u0164" +
		"\x03\x02\x02\x02\u0164\u0165\x05T+\x02\u0165#\x03\x02\x02\x02\u0166\u0168" +
		"\x05\xB0Y\x02\u0167\u0166\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02" +
		"\u0168\u0169\x03\x02\x02\x02\u0169\u016A\x07\x14\x02\x02\u016A\u0171\x05" +
		"*\x16\x02\u016B\u016D\x05\xB0Y\x02\u016C\u016B\x03\x02\x02\x02\u016C\u016D" +
		"\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E\u016F\x07\x14\x02\x02" +
		"\u016F\u0171\x05,\x17\x02\u0170\u0167\x03\x02\x02\x02\u0170\u016C\x03" +
		"\x02\x02\x02\u0171%\x03\x02\x02\x02\u0172\u0173\x07\x14\x02\x02\u0173" +
		"\u017F\x07)\x02\x02\u0174\u0179\x05(\x15\x02\u0175\u0176\x07,\x02\x02" +
		"\u0176\u0178\x05(\x15\x02\u0177\u0175\x03\x02\x02\x02\u0178\u017B\x03" +
		"\x02\x02\x02\u0179\u0177\x03\x02\x02\x02\u0179\u017A\x03\x02\x02\x02\u017A" +
		"\u017D\x03\x02\x02\x02\u017B\u0179\x03\x02\x02\x02\u017C\u017E\x07,\x02" +
		"\x02\u017D\u017C\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E\u0180" +
		"\x03\x02\x02\x02\u017F\u0174\x03\x02\x02\x02\u017F\u0180\x03\x02\x02\x02" +
		"\u0180\u0181\x03\x02\x02\x02\u0181\u0182\x07*\x02\x02\u0182\'\x03\x02" +
		"\x02\x02\u0183\u0185\x05\xB0Y\x02\u0184\u0183\x03\x02\x02\x02\u0184\u0185" +
		"\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u018C\x05*\x16\x02" +
		"\u0187\u0189\x05\xB0Y\x02\u0188\u0187\x03\x02\x02\x02\u0188\u0189\x03" +
		"\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\u018C\x05,\x17\x02\u018B" +
		"\u0184\x03\x02\x02\x02\u018B\u0188\x03\x02\x02\x02\u018C)\x03\x02\x02" +
		"\x02\u018D\u018E\x05\xAEX\x02\u018E\u018F\x07/\x02\x02\u018F\u0190\x05" +
		"`1\x02\u0190+\x03\x02\x02\x02\u0191\u0192\x05\xAEX\x02\u0192\u0193\x05" +
		".\x18\x02\u0193\u0194\x07/\x02\x02\u0194\u0195\x05`1\x02\u0195-\x03\x02" +
		"\x02\x02\u0196\u0197\x07\'\x02\x02\u0197\u019C\x050\x19\x02\u0198\u0199" +
		"\x07,\x02\x02\u0199\u019B\x050\x19\x02\u019A\u0198\x03\x02\x02\x02\u019B" +
		"\u019E\x03\x02\x02\x02\u019C\u019A\x03\x02\x02\x02\u019C\u019D\x03\x02" +
		"\x02\x02\u019D\u019F\x03\x02\x02\x02\u019E\u019C\x03\x02\x02\x02\u019F" +
		"\u01A0\x07(\x02\x02\u01A0/\x03\x02\x02\x02\u01A1\u01A2\x05\xAEX\x02\u01A2" +
		"\u01A3\x07/\x02\x02\u01A3\u01A5\x03\x02\x02\x02\u01A4\u01A1\x03\x02\x02" +
		"\x02\u01A4\u01A5\x03\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6\u01A7" +
		"\x05`1\x02\u01A71\x03\x02\x02\x02\u01A8\u01AA\x05\xB0Y\x02\u01A9\u01A8" +
		"\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA\u01AB\x03\x02\x02\x02" +
		"\u01AB\u01AC\x07\f\x02\x02\u01AC\u01AE\x05z>\x02\u01AD\u01AF\x05x=\x02" +
		"\u01AE\u01AD\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02\u01AF\u01B0\x03" +
		"\x02\x02\x02\u01B0\u01B1\x05\x80A\x02\u01B13\x03\x02\x02\x02\u01B2\u01B4" +
		"\x05\xB0Y\x02\u01B3\u01B2\x03\x02\x02\x02\u01B3\u01B4\x03\x02\x02\x02" +
		"\u01B4\u01B5\x03\x02\x02\x02\u01B5\u01B6\x07";
	private static readonly _serializedATNSegment1: string =
		"\f\x02\x02\u01B6\u01B8\x05z>\x02\u01B7\u01B9\x05x=\x02\u01B8\u01B7\x03" +
		"\x02\x02\x02\u01B8\u01B9\x03\x02\x02\x02\u01B95\x03\x02\x02\x02\u01BA" +
		"\u01BC\x05\xB0Y\x02\u01BB\u01BA\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02" +
		"\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD\u01BE\x07\r\x02\x02\u01BE\u01BF" +
		"\x05t;\x02\u01BF7\x03\x02\x02\x02\u01C0\u01C1\x07\r\x02\x02\u01C1\u01C5" +
		"\x07)\x02\x02\u01C2\u01C4\x05:\x1E\x02\u01C3\u01C2\x03\x02\x02\x02\u01C4" +
		"\u01C7\x03\x02\x02\x02\u01C5\u01C3\x03\x02\x02\x02\u01C5\u01C6\x03\x02" +
		"\x02\x02\u01C6\u01C8\x03\x02\x02\x02\u01C7\u01C5\x03\x02\x02\x02\u01C8" +
		"\u01C9\x07*\x02\x02\u01C99\x03\x02\x02\x02\u01CA\u01CC\x05\xB0Y\x02\u01CB" +
		"\u01CA\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CC\u01CD\x03\x02" +
		"\x02\x02\u01CD\u01CE\x05t;\x02\u01CE;\x03\x02\x02\x02\u01CF\u01D1\x05" +
		"\xB0Y\x02\u01D0\u01CF\x03\x02\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1" +
		"\u01D2\x03\x02\x02\x02\u01D2\u01D3\x07\r\x02\x02\u01D3\u01D4\x05r:\x02" +
		"\u01D4=\x03\x02\x02\x02\u01D5\u01D6\x07\r\x02\x02\u01D6\u01DA\x07)\x02" +
		"\x02\u01D7\u01D9\x05@!\x02\u01D8\u01D7\x03\x02\x02\x02\u01D9\u01DC\x03" +
		"\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB" +
		"\u01DD\x03\x02\x02\x02\u01DC\u01DA\x03\x02\x02\x02\u01DD\u01DE\x07*\x02" +
		"\x02\u01DE?\x03\x02\x02\x02\u01DF\u01E1\x05\xB0Y\x02\u01E0\u01DF\x03\x02" +
		"\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2" +
		"\u01E3\x05r:\x02\u01E3A\x03\x02\x02\x02\u01E4\u01E6\x05\xB0Y\x02\u01E5" +
		"\u01E4\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02\u01E6\u01E7\x03\x02" +
		"\x02\x02\u01E7\u01E8\x07\x0F\x02\x02\u01E8\u01E9\x05t;\x02\u01E9C\x03" +
		"\x02\x02\x02\u01EA\u01EB\x07\x0F\x02\x02\u01EB\u01EF\x07)\x02\x02\u01EC" +
		"\u01EE\x05F$\x02\u01ED\u01EC\x03\x02\x02\x02\u01EE\u01F1\x03\x02\x02\x02" +
		"\u01EF\u01ED\x03\x02\x02\x02\u01EF\u01F0\x03\x02\x02\x02\u01F0\u01F2\x03" +
		"\x02\x02\x02\u01F1\u01EF\x03\x02\x02\x02\u01F2\u01F3\x07*\x02\x02\u01F3" +
		"E\x03\x02\x02\x02\u01F4\u01F6\x05\xB0Y\x02\u01F5\u01F4\x03\x02\x02\x02" +
		"\u01F5\u01F6\x03\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7\u01F8\x05" +
		"t;\x02\u01F8G\x03\x02\x02\x02\u01F9\u01FB\x05\xB0Y\x02\u01FA\u01F9\x03" +
		"\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB\u01FC\x03\x02\x02\x02\u01FC" +
		"\u01FD\x07\x0F\x02\x02\u01FD\u01FE\x05r:\x02\u01FEI\x03\x02\x02\x02\u01FF" +
		"\u0200\x07\x0F\x02\x02\u0200\u0204\x07)\x02\x02\u0201\u0203\x05L\'\x02" +
		"\u0202\u0201\x03\x02\x02\x02\u0203\u0206\x03\x02\x02\x02\u0204\u0202\x03" +
		"\x02\x02\x02\u0204\u0205\x03\x02\x02\x02\u0205\u0207\x03\x02\x02\x02\u0206" +
		"\u0204\x03\x02\x02\x02\u0207\u0208\x07*\x02\x02\u0208K\x03\x02\x02\x02" +
		"\u0209\u020B\x05\xB0Y\x02\u020A\u0209\x03\x02\x02\x02\u020A\u020B\x03" +
		"\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C\u020D\x05r:\x02\u020DM" +
		"\x03\x02\x02\x02\u020E\u0210\x05\xB0Y\x02\u020F\u020E\x03\x02\x02\x02" +
		"\u020F\u0210\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211\u0212\x07" +
		"\x10\x02\x02\u0212\u0214\x05z>\x02\u0213\u0215\x05x=\x02\u0214\u0213\x03" +
		"\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215\u0216\x03\x02\x02\x02\u0216" +
		"\u0217\x05\x80A\x02\u0217O\x03\x02\x02\x02\u0218\u021A\x05\xB0Y\x02\u0219" +
		"\u0218\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A\u021B\x03\x02" +
		"\x02\x02\u021B\u021C\x07\x10\x02\x02\u021C\u021E\x05z>\x02\u021D\u021F" +
		"\x05x=\x02\u021E\u021D\x03\x02\x02\x02\u021E\u021F\x03\x02\x02\x02\u021F" +
		"Q\x03\x02\x02\x02\u0220\u0223\x05T+\x02\u0221\u0223\x05V,\x02\u0222\u0220" +
		"\x03\x02\x02\x02\u0222\u0221\x03\x02\x02\x02\u0223S\x03\x02\x02\x02\u0224" +
		"\u0227\x05\xAEX\x02\u0225\u0228\x05Z.\x02\u0226\u0228\x05\\/\x02\u0227" +
		"\u0225\x03\x02\x02\x02\u0227\u0226\x03\x02\x02\x02\u0228U\x03\x02\x02" +
		"\x02\u0229\u022A\x05\xAEX\x02\u022A\u022B\x05X-\x02\u022BW\x03\x02\x02" +
		"\x02\u022C\u022D\x07%\x02\x02\u022D\u0232\x05`1\x02\u022E\u022F\x07,\x02" +
		"\x02\u022F\u0231\x05`1\x02\u0230\u022E\x03\x02\x02\x02\u0231\u0234\x03" +
		"\x02\x02\x02\u0232\u0230\x03\x02\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233" +
		"\u0235\x03\x02\x02\x02\u0234\u0232\x03\x02\x02\x02\u0235\u0236\x07&\x02" +
		"\x02\u0236Y\x03\x02\x02\x02\u0237\u0240\x07%\x02\x02\u0238\u023D\x05^" +
		"0\x02\u0239\u023A\x07,\x02\x02\u023A\u023C\x05^0\x02\u023B\u0239\x03\x02" +
		"\x02\x02\u023C\u023F\x03\x02\x02\x02\u023D\u023B\x03\x02\x02\x02\u023D" +
		"\u023E\x03\x02\x02\x02\u023E\u0241\x03\x02\x02\x02\u023F\u023D\x03\x02" +
		"\x02\x02\u0240\u0238\x03\x02\x02\x02\u0240\u0241\x03\x02\x02\x02\u0241" +
		"\u0242\x03\x02\x02\x02\u0242\u0243\x07&\x02\x02\u0243[\x03\x02\x02\x02" +
		"\u0244\u0250\x07)\x02\x02\u0245\u024A\x05^0\x02\u0246\u0247\x07,\x02\x02" +
		"\u0247\u0249\x05^0\x02\u0248\u0246\x03\x02\x02\x02\u0249\u024C\x03\x02" +
		"\x02\x02\u024A\u0248\x03\x02\x02\x02\u024A\u024B\x03\x02\x02\x02\u024B" +
		"\u024E\x03\x02\x02\x02\u024C\u024A\x03\x02\x02\x02\u024D\u024F\x07,\x02" +
		"\x02\u024E\u024D\x03\x02\x02\x02\u024E\u024F\x03\x02\x02\x02\u024F\u0251" +
		"\x03\x02\x02\x02\u0250\u0245\x03\x02\x02\x02\u0250\u0251\x03\x02\x02\x02" +
		"\u0251\u0252\x03\x02\x02\x02\u0252\u0253\x07*\x02\x02\u0253]\x03\x02\x02" +
		"\x02\u0254\u0256\x05\xB0Y\x02\u0255\u0254\x03\x02\x02\x02\u0255\u0256" +
		"\x03\x02\x02\x02\u0256\u0257\x03\x02\x02\x02\u0257\u0259\x05\xAEX\x02" +
		"\u0258\u025A\x07-\x02\x02\u0259\u0258\x03\x02\x02\x02\u0259\u025A\x03" +
		"\x02\x02\x02\u025A\u025B\x03\x02\x02\x02\u025B\u025C\x07/\x02\x02\u025C" +
		"\u025D\x05`1\x02\u025D_\x03\x02\x02\x02\u025E\u025F\b1\x01\x02\u025F\u0271" +
		"\x05f4\x02\u0260\u0261\x07%\x02\x02\u0261\u0266\x05`1\x02\u0262\u0263" +
		"\x07,\x02\x02\u0263\u0265\x05`1\x02\u0264\u0262\x03\x02\x02\x02\u0265" +
		"\u0268\x03\x02\x02\x02\u0266\u0264\x03\x02\x02\x02\u0266\u0267\x03\x02" +
		"\x02\x02\u0267\u0269\x03\x02\x02\x02\u0268\u0266\x03\x02\x02\x02\u0269" +
		"\u026A\x07&\x02\x02\u026A\u0271\x03\x02\x02\x02\u026B\u026C\x074\x02\x02" +
		"\u026C\u0271\x05`1\x05\u026D\u026E\x073\x02\x02\u026E\u0271\x05`1\x04" +
		"\u026F\u0271\x05h5\x02\u0270\u025E\x03\x02\x02\x02\u0270\u0260\x03\x02" +
		"\x02\x02\u0270\u026B\x03\x02\x02\x02\u0270\u026D\x03\x02\x02\x02\u0270" +
		"\u026F\x03\x02\x02\x02\u0271\u027B\x03\x02\x02\x02\u0272\u0273\f\t\x02" +
		"\x02\u0273\u027A\x05b2\x02\u0274\u0275\f\x07\x02\x02\u0275\u027A\x07-" +
		"\x02\x02\u0276\u0277\f\x06\x02\x02\u0277\u0278\x07\'\x02\x02\u0278\u027A" +
		"\x07(\x02\x02\u0279\u0272\x03\x02\x02\x02\u0279\u0274\x03\x02\x02\x02" +
		"\u0279\u0276\x03\x02\x02\x02\u027A\u027D\x03\x02\x02\x02\u027B\u0279\x03" +
		"\x02\x02\x02\u027B\u027C\x03\x02\x02\x02\u027Ca\x03\x02\x02\x02\u027D" +
		"\u027B\x03\x02\x02\x02\u027E\u027F\x07F\x02\x02\u027F\u0284\x05`1\x02" +
		"\u0280\u0281\x07,\x02\x02\u0281\u0283\x05`1\x02\u0282\u0280\x03\x02\x02" +
		"\x02\u0283\u0286\x03\x02\x02\x02\u0284\u0282\x03\x02\x02\x02\u0284\u0285" +
		"\x03\x02\x02\x02\u0285\u0287\x03\x02\x02\x02\u0286\u0284\x03\x02\x02\x02" +
		"\u0287\u0288\x07H\x02\x02\u0288c\x03\x02\x02\x02\u0289\u028E\x05\xAEX" +
		"\x02\u028A\u028B\x070\x02\x02\u028B\u028D\x05\xAEX\x02\u028C\u028A\x03" +
		"\x02\x02\x02\u028D\u0290\x03\x02\x02\x02\u028E\u028C\x03\x02\x02\x02\u028E" +
		"\u028F\x03\x02\x02\x02\u028Fe\x03\x02\x02\x02\u0290\u028E\x03\x02\x02" +
		"\x02\u0291\u0293\x070\x02\x02\u0292\u0291\x03\x02\x02\x02\u0292\u0293" +
		"\x03\x02\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294\u0295\x05d3\x02\u0295" +
		"g\x03\x02\x02\x02\u0296\u029A\x05j6\x02\u0297\u029A\x05l7\x02\u0298\u029A" +
		"\x05p9\x02\u0299\u0296\x03\x02\x02\x02\u0299\u0297\x03\x02\x02\x02\u0299" +
		"\u0298\x03\x02\x02\x02\u029Ai\x03\x02\x02\x02\u029B\u029D\x05\xB0Y\x02" +
		"\u029C\u029B\x03\x02\x02\x02\u029C\u029D\x03\x02\x02\x02\u029D\u029E\x03" +
		"\x02\x02\x02\u029E\u029F\x07 \x02\x02\u029F\u02A0\x05R*\x02\u02A0k\x03" +
		"\x02\x02\x02\u02A1\u02A3\x05\xB0Y\x02\u02A2\u02A1\x03\x02\x02\x02\u02A2" +
		"\u02A3\x03\x02\x02\x02\u02A3\u02A4\x03\x02\x02\x02\u02A4\u02A5\x07!\x02" +
		"\x02\u02A5\u02A6\x05\xAEX\x02\u02A6\u02A7\x07)\x02\x02\u02A7\u02A8\x05" +
		"n8\x02\u02A8\u02A9\x07*\x02\x02\u02A9m\x03\x02\x02\x02\u02AA\u02B1\x05" +
		"R*\x02\u02AB\u02AD\x07,\x02\x02\u02AC\u02AB\x03\x02\x02\x02\u02AC\u02AD" +
		"\x03\x02\x02\x02\u02AD\u02AE\x03\x02\x02\x02\u02AE\u02B0\x05R*\x02\u02AF" +
		"\u02AC\x03\x02\x02\x02\u02B0\u02B3\x03\x02\x02\x02\u02B1\u02AF\x03\x02" +
		"\x02\x02\u02B1\u02B2\x03\x02\x02\x02\u02B2\u02B5\x03\x02\x02\x02\u02B3" +
		"\u02B1\x03\x02\x02\x02\u02B4\u02B6\x07,\x02\x02\u02B5\u02B4\x03\x02\x02" +
		"\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6\u02B8\x03\x02\x02\x02\u02B7\u02AA" +
		"\x03\x02\x02\x02\u02B7\u02B8\x03\x02\x02\x02\u02B8o\x03\x02\x02\x02\u02B9" +
		"\u02BB\x05\xB0Y\x02\u02BA\u02B9\x03\x02\x02\x02\u02BA\u02BB\x03\x02\x02" +
		"\x02\u02BB\u02BC\x03\x02\x02\x02\u02BC\u02BD\x07\"\x02\x02\u02BD\u02BE" +
		"\x05\xAEX\x02\u02BE\u02BF\x079\x02\x02\u02BF\u02C0\x05`1\x02\u02C0q\x03" +
		"\x02\x02\x02\u02C1\u02C2\x05\xAEX\x02\u02C2\u02C4\x05z>\x02\u02C3\u02C5" +
		"\x05x=\x02\u02C4\u02C3\x03\x02\x02\x02\u02C4\u02C5\x03\x02\x02\x02\u02C5" +
		"s\x03\x02\x02\x02\u02C6\u02C7\x05\xAEX\x02\u02C7\u02C9\x05z>\x02\u02C8" +
		"\u02CA\x05x=\x02\u02C9\u02C8\x03\x02\x02\x02\u02C9\u02CA\x03\x02\x02\x02" +
		"\u02CA\u02CB\x03\x02\x02\x02\u02CB\u02CC\x05\x80A\x02\u02CCu\x03\x02\x02" +
		"\x02\u02CD\u02CF\x05\xB0Y\x02\u02CE\u02CD\x03\x02\x02\x02\u02CE\u02CF" +
		"\x03\x02\x02\x02\u02CF\u02D0\x03\x02\x02\x02\u02D0\u02D1\x07\x1C\x02\x02" +
		"\u02D1\u02D2\x05t;\x02\u02D2w\x03\x02\x02\x02\u02D3\u02D4\x075\x02\x02" +
		"\u02D4\u02D5\x05`1\x02\u02D5y\x03\x02\x02\x02\u02D6\u02D8\x07%\x02\x02" +
		"\u02D7\u02D9\x05|?\x02\u02D8\u02D7\x03\x02\x02\x02\u02D8\u02D9\x03\x02" +
		"\x02\x02\u02D9\u02DA\x03\x02\x02\x02\u02DA\u02DB\x07&\x02\x02\u02DB{\x03" +
		"\x02\x02\x02\u02DC\u02E1\x05~@\x02\u02DD\u02DE\x07,\x02\x02\u02DE\u02E0" +
		"\x05~@\x02\u02DF\u02DD\x03\x02\x02\x02\u02E0\u02E3\x03\x02\x02\x02\u02E1" +
		"\u02DF\x03\x02\x02\x02\u02E1\u02E2\x03\x02\x02\x02\u02E2}\x03\x02\x02" +
		"\x02\u02E3\u02E1\x03\x02\x02\x02\u02E4\u02E6\x05\xAEX\x02\u02E5\u02E7" +
		"\x07-\x02\x02\u02E6\u02E5\x03\x02\x02\x02\u02E6\u02E7\x03\x02\x02\x02" +
		"\u02E7\u02E8\x03\x02\x02\x02\u02E8\u02E9\x07/\x02\x02\u02E9\u02EA\x05" +
		"`1\x02\u02EA\x7F\x03\x02\x02\x02\u02EB\u02EF\x07)\x02\x02\u02EC\u02EE" +
		"\x05\x82B\x02\u02ED\u02EC\x03\x02\x02\x02\u02EE\u02F1\x03\x02\x02\x02" +
		"\u02EF\u02ED\x03\x02\x02\x02\u02EF\u02F0\x03\x02\x02\x02\u02F0\u02F2\x03" +
		"\x02\x02\x02\u02F1\u02EF\x03\x02\x02\x02\u02F2\u02F6\x07*\x02\x02\u02F3" +
		"\u02F4\x076\x02\x02\u02F4\u02F6\x05\x82B\x02\u02F5\u02EB\x03\x02\x02\x02" +
		"\u02F5\u02F3\x03\x02\x02\x02\u02F6\x81\x03\x02\x02\x02\u02F7\u0307\x05" +
		"\x84C\x02\u02F8\u0307\x05\x88E\x02\u02F9\u0307\x05\x9CO\x02\u02FA\u0307" +
		"\x05\xA4S\x02\u02FB\u02FC\x07\r\x02\x02\u02FC\u0307\x05\x92J\x02\u02FD" +
		"\u02FE\x07\x0E\x02\x02\u02FE\u0307\x05\x90I\x02\u02FF\u0300\x07#\x02\x02" +
		"\u0300\u0307\x05\x92J\x02\u0301\u0302\x07\x1F\x02\x02\u0302\u0307\x05" +
		"\x92J\x02\u0303\u0304\x07\x1E\x02\x02\u0304\u0307\x05\x92J\x02\u0305\u0307" +
		"\x05\x92J\x02\u0306\u02F7\x03\x02\x02\x02\u0306\u02F8\x03\x02\x02\x02" +
		"\u0306\u02F9\x03\x02\x02\x02\u0306\u02FA\x03\x02\x02\x02\u0306\u02FB\x03" +
		"\x02\x02\x02\u0306\u02FD\x03\x02\x02\x02\u0306\u02FF\x03\x02\x02\x02\u0306" +
		"\u0301\x03\x02\x02\x02\u0306\u0303\x03\x02\x02\x02\u0306\u0305\x03\x02" +
		"\x02\x02\u0307\x83\x03\x02\x02\x02\u0308\u0309\x07\x1D\x02\x02\u0309\u030A" +
		"\x05\x86D\x02\u030A\u030B\x079\x02\x02\u030B\u030C\x05\x92J\x02\u030C" +
		"\x85\x03\x02\x02\x02\u030D\u0310\x05\xAEX\x02\u030E\u030F\x07/\x02\x02" +
		"\u030F\u0311\x05`1\x02\u0310\u030E\x03\x02\x02\x02\u0310\u0311\x03\x02" +
		"\x02\x02\u0311\u0317\x03\x02\x02\x02\u0312\u0313\x07)\x02\x02\u0313\u0314" +
		"\x05\xA6T\x02\u0314\u0315\x07*\x02\x02\u0315\u0317\x03\x02\x02\x02\u0316" +
		"\u030D\x03\x02\x02\x02\u0316\u0312\x03\x02\x02\x02\u0317\x87\x03\x02\x02" +
		"\x02\u0318\u0319\x05\x8AF\x02\u0319\u031A\t\x02\x02\x02\u031A\u031B\x05" +
		"\x92J\x02\u031B\x89\x03\x02\x02\x02\u031C\u031D\x07\x14\x02\x02\u031D" +
		"\u031E\x07+\x02\x02\u031E\u0320\x05\xAEX\x02\u031F\u0321\x05\x8CG\x02" +
		"\u0320\u031F\x03\x02\x02\x02\u0320\u0321\x03\x02\x02\x02\u0321\u033D\x03" +
		"\x02\x02\x02\u0322\u0323\x07\x14\x02\x02\u0323\u0324\x07+\x02\x02\u0324" +
		"\u0325\x05\xAEX\x02\u0325\u0326\x07\'\x02\x02\u0326\u032B\x05\x92J\x02" +
		"\u0327\u0328\x07,\x02\x02\u0328\u032A\x05\x92J\x02\u0329\u0327\x03\x02" +
		"\x02\x02\u032A\u032D\x03\x02\x02\x02\u032B\u0329\x03\x02\x02\x02\u032B" +
		"\u032C\x03\x02\x02\x02\u032C\u032E\x03\x02\x02\x02\u032D\u032B\x03\x02" +
		"\x02\x02\u032E\u0330\x07(\x02\x02\u032F\u0331\x05\x8CG\x02\u0330\u032F" +
		"\x03\x02\x02\x02\u0330\u0331\x03\x02\x02\x02\u0331\u033D\x03\x02\x02\x02" +
		"\u0332\u033D\x05\xAEX\x02\u0333\u0334\x05\x92J\x02\u0334\u0335\x07+\x02" +
		"\x02\u0335\u0336\x05\xAEX\x02\u0336\u033D\x03\x02\x02\x02\u0337\u0338" +
		"\x05\x92J\x02\u0338\u0339\x07\'\x02\x02\u0339\u033A\x05\x92J\x02\u033A" +
		"\u033B\x07(\x02\x02\u033B\u033D\x03\x02\x02\x02\u033C\u031C\x03\x02\x02" +
		"\x02\u033C\u0322\x03\x02\x02\x02\u033C\u0332\x03\x02\x02\x02\u033C\u0333" +
		"\x03\x02\x02\x02\u033C\u0337\x03\x02\x02\x02\u033D\x8B\x03\x02\x02\x02" +
		"\u033E\u033F\x07+\x02\x02\u033F\u0344\x05\x8EH\x02\u0340\u0341\x07+\x02" +
		"\x02\u0341\u0343\x05\x8EH\x02\u0342\u0340\x03\x02\x02\x02\u0343\u0346" +
		"\x03\x02\x02\x02\u0344\u0342\x03\x02\x02\x02\u0344\u0345\x03\x02\x02\x02" +
		"\u0345\x8D\x03\x02\x02\x02\u0346\u0344\x03\x02\x02\x02\u0347\u034C\x05" +
		"\xAEX\x02\u0348\u0349\x07\'\x02\x02\u0349\u034A\x05\x92J\x02\u034A\u034B" +
		"\x07(\x02\x02\u034B\u034D\x03\x02\x02\x02\u034C\u0348\x03\x02\x02\x02" +
		"\u034C\u034D\x03\x02\x02\x02\u034D\x8F\x03\x02\x02\x02\u034E\u034F\x07" +
		"2\x02\x02\u034F\u0350\x05\x92J\x02\u0350\u0351\x07+\x02\x02\u0351\u0352" +
		"\x05\xAEX\x02\u0352\u0353\x07%\x02\x02\u0353\u0354\x05\xA8U\x02\u0354" +
		"\u0355\x07&\x02\x02\u0355\x91\x03\x02\x02\x02\u0356\u0357\bJ\x01\x02\u0357" +
		"\u0358\x07%\x02\x02\u0358\u0359\x05\x92J\x02\u0359\u035A\x07&\x02\x02" +
		"\u035A\u037E\x03\x02\x02\x02\u035B\u035C\x07\x14\x02\x02\u035C\u035D\x07" +
		"+\x02\x02\u035D\u037E\x05\xAEX\x02\u035E\u035F\x07\x14\x02\x02\u035F\u0360" +
		"\x07+\x02\x02\u0360\u0361\x05\xAEX\x02\u0361\u0362\x07\'\x02\x02\u0362" +
		"\u0367\x05\x92J\x02\u0363\u0364\x07,\x02\x02\u0364\u0366\x05\x92J\x02" +
		"\u0365\u0363\x03\x02\x02\x02\u0366\u0369\x03\x02\x02\x02\u0367\u0365\x03" +
		"\x02\x02\x02\u0367\u0368\x03\x02\x02\x02\u0368\u036A\x03\x02\x02\x02\u0369" +
		"\u0367\x03\x02\x02\x02\u036A\u036B\x07(\x02\x02\u036B\u037E\x03\x02\x02" +
		"\x02\u036C\u036D\x05\xAEX\x02\u036D\u036F\x07)\x02\x02\u036E\u0370\x05" +
		"\xAAV\x02\u036F\u036E\x03\x02\x02\x02\u036F\u0370\x03\x02\x02\x02\u0370" +
		"\u0371\x03\x02\x02\x02\u0371\u0372\x07*\x02\x02\u0372\u037E\x03\x02\x02" +
		"\x02\u0373\u0374\t\x03\x02\x02\u0374\u037E\x05\x92J\x0E\u0375\u037E\x05" +
		"\x9CO\x02\u0376\u0377\x07\x0F\x02\x02\u0377\u037E\x05\x92J\x05\u0378\u037E" +
		"\x05\x94K\x02\u0379\u037A\x05\xAEX\x02\u037A\u037B\x073\x02\x02\u037B" +
		"\u037C\x05\x92J\x03\u037C\u037E\x03\x02\x02\x02\u037D\u0356\x03\x02\x02" +
		"\x02\u037D\u035B\x03\x02\x02\x02\u037D\u035E\x03\x02\x02\x02\u037D\u036C" +
		"\x03\x02\x02\x02\u037D\u0373\x03\x02\x02\x02\u037D\u0375\x03\x02\x02\x02" +
		"\u037D\u0376\x03\x02\x02\x02\u037D\u0378\x03\x02\x02\x02\u037D\u0379\x03" +
		"\x02\x02\x02\u037E\u03AB\x03\x02\x02\x02\u037F\u0380\f\r\x02\x02\u0380" +
		"\u0381\x07J\x02\x02\u0381\u03AA\x05\x92J\x0E\u0382\u0383\f\f\x02\x02\u0383" +
		"\u0384\t\x04\x02\x02\u0384\u03AA\x05\x92J\r\u0385\u0386\f\v\x02\x02\u0386" +
		"\u0387\t\x05\x02\x02\u0387\u03AA\x05\x92J\f\u0388\u0389\f\n\x02\x02\u0389" +
		"\u038A\t\x06\x02\x02\u038A\u03AA\x05\x92J\v\u038B\u038C\f\t\x02\x02\u038C" +
		"\u038D\t\x07\x02\x02\u038D\u03AA\x05\x92J\n\u038E\u038F\f\b\x02\x02\u038F" +
		"\u0390\x07\x18\x02\x02\u0390\u03AA\x05\x92J\t\u0391\u0392\f\x07\x02\x02" +
		"\u0392\u0393\x07\x19\x02\x02\u0393\u03AA\x05\x92J\b\u0394\u0395\f\x13" +
		"\x02\x02\u0395\u0396\x07+\x02\x02\u0396\u03AA\x05\xAEX\x02\u0397\u0398" +
		"\f\x12\x02\x02\u0398\u0399\x07\'\x02\x02\u0399\u039A\x05\x92J\x02\u039A" +
		"\u039B\x07,\x02\x02\u039B\u039C\x07(\x02\x02\u039C\u03AA\x03\x02\x02\x02" +
		"\u039D\u039E\f\x11\x02\x02\u039E\u03A0\x07%\x02\x02\u039F\u03A1\x05\xA8" +
		"U\x02\u03A0\u039F\x03\x02\x02\x02\u03A0\u03A1\x03\x02\x02\x02\u03A1\u03A2" +
		"\x03\x02\x02\x02\u03A2\u03AA\x07&\x02\x02\u03A3\u03A4\f\x10\x02\x02\u03A4" +
		"\u03A6\x07%\x02\x02\u03A5\u03A7\x05\xAAV\x02\u03A6\u03A5\x03\x02\x02\x02" +
		"\u03A6\u03A7\x03\x02\x02\x02\u03A7\u03A8\x03\x02\x02\x02\u03A8\u03AA\x07" +
		"&\x02\x02\u03A9\u037F\x03\x02\x02\x02\u03A9\u0382\x03\x02\x02\x02\u03A9" +
		"\u0385\x03\x02\x02\x02\u03A9\u0388\x03\x02\x02\x02\u03A9\u038B\x03\x02" +
		"\x02\x02\u03A9\u038E\x03\x02\x02\x02\u03A9\u0391\x03\x02\x02\x02\u03A9" +
		"\u0394\x03\x02\x02\x02\u03A9\u0397\x03\x02\x02\x02\u03A9\u039D\x03\x02" +
		"\x02\x02\u03A9\u03A3\x03\x02\x02\x02\u03AA\u03AD\x03\x02\x02\x02\u03AB" +
		"\u03A9\x03\x02\x02\x02\u03AB\u03AC\x03\x02\x02\x02\u03AC\x93\x03\x02\x02" +
		"\x02\u03AD\u03AB\x03\x02\x02\x02\u03AE\u03AF\x07%\x02\x02\u03AF\u03C1" +
		"\x07&\x02\x02\u03B0\u03C1\x05\x96L\x02\u03B1\u03B2\x05f4\x02\u03B2\u03B3" +
		"\x07%\x02\x02\u03B3\u03B4\x05\xA8U\x02\u03B4\u03B5\x07&\x02\x02\u03B5" +
		"\u03C1\x03\x02\x02\x02\u03B6\u03B7\x07\'\x02\x02\u03B7\u03B8\x05\xA8U" +
		"\x02\u03B8\u03B9\x07(\x02\x02\u03B9\u03C1\x03\x02\x02\x02\u03BA\u03C1" +
		"\x07L\x02\x02\u03BB\u03C1\x07M\x02\x02\u03BC\u03C1\x07N\x02\x02\u03BD" +
		"\u03C1\x07\x1A\x02\x02\u03BE\u03C1\x07\x1B\x02\x02\u03BF\u03C1\x05\xAE" +
		"X\x02\u03C0\u03AE\x03\x02\x02\x02\u03C0\u03B0\x03\x02\x02\x02\u03C0\u03B1" +
		"\x03\x02\x02\x02\u03C0\u03B6\x03\x02\x02\x02\u03C0\u03BA\x03\x02\x02\x02" +
		"\u03C0\u03BB\x03\x02\x02\x02\u03C0\u03BC\x03\x02\x02\x02\u03C0\u03BD\x03" +
		"\x02\x02\x02\u03C0\u03BE\x03\x02\x02\x02\u03C0\u03BF\x03\x02\x02\x02\u03C1" +
		"\x95\x03\x02\x02\x02\u03C2\u03C3\x05f4\x02\u03C3\u03C5\x07)\x02\x02\u03C4" +
		"\u03C6\x05\x98M\x02\u03C5\u03C4\x03\x02\x02\x02\u03C5\u03C6\x03\x02\x02" +
		"\x02\u03C6\u03C7\x03\x02\x02\x02\u03C7\u03C8\x07*\x02\x02\u03C8\x97\x03" +
		"\x02\x02\x02\u03C9\u03CE\x05\x9AN\x02\u03CA\u03CB\x07,\x02\x02\u03CB\u03CD" +
		"\x05\x9AN\x02\u03CC\u03CA\x03\x02\x02\x02\u03CD\u03D0\x03\x02\x02\x02" +
		"\u03CE\u03CC\x03\x02\x02\x02\u03CE\u03CF\x03\x02\x02\x02\u03CF\u03D2\x03" +
		"\x02\x02\x02\u03D0\u03CE\x03\x02\x02\x02\u03D1\u03D3\x07,\x02\x02\u03D2" +
		"\u03D1\x03\x02\x02\x02\u03D2\u03D3\x03\x02\x02\x02\u03D3\x99\x03\x02\x02" +
		"\x02\u03D4\u03D5\x05\xAEX\x02\u03D5\u03D6\x07/\x02\x02\u03D6\u03D7\x05" +
		"\x92J\x02\u03D7\x9B\x03\x02\x02\x02\u03D8\u03DA\x05\x9EP\x02\u03D9\u03DB" +
		"\x05\xA0Q\x02\u03DA\u03D9\x03\x02\x02\x02\u03DA\u03DB\x03\x02\x02\x02" +
		"\u03DB\u03DD\x03\x02\x02\x02\u03DC\u03DE\x05\xA2R\x02\u03DD\u03DC\x03" +
		"\x02\x02\x02\u03DD\u03DE\x03\x02\x02\x02\u03DE\x9D\x03\x02\x02\x02\u03DF" +
		"\u03E0\x07\x16\x02\x02\u03E0\u03E1\x05\x92J\x02\u03E1\u03E2\x05\x80A\x02" +
		"\u03E2\u03E8\x03\x02\x02\x02\u03E3\u03E4\x07\x16\x02\x02\u03E4\u03E5\x05" +
		"\x84C\x02\u03E5\u03E6\x05\x80A\x02\u03E6\u03E8\x03\x02\x02\x02\u03E7\u03DF" +
		"\x03\x02\x02\x02\u03E7\u03E3\x03\x02\x02\x02\u03E8\x9F\x03\x02\x02\x02" +
		"\u03E9\u03EA\x07\x17\x02\x02\u03EA\u03EC\x05\x9EP\x02\u03EB\u03E9\x03" +
		"\x02\x02\x02\u03EC\u03ED\x03\x02\x02\x02\u03ED\u03EB\x03\x02\x02\x02\u03ED" +
		"\u03EE\x03\x02\x02\x02\u03EE\xA1\x03\x02\x02\x02\u03EF\u03F0\x07\x17\x02" +
		"\x02\u03F0\u03F1\x05\x80A\x02\u03F1\xA3\x03\x02\x02\x02\u03F2\u03F3\x07" +
		"\x11\x02\x02\u03F3\u03F4\x05\x86D\x02\u03F4\u03F5\x07\x12\x02\x02\u03F5" +
		"\u03F6\x05\x92J\x02\u03F6\u03F7\x05\x80A\x02\u03F7\u03FE\x03\x02\x02\x02" +
		"\u03F8\u03F9\x07\x11\x02\x02\u03F9\u03FA\x05\x92J\x02\u03FA\u03FB\x07" +
		"\x15\x02\x02\u03FB\u03FC\x05\x80A\x02\u03FC\u03FE\x03\x02\x02\x02\u03FD" +
		"\u03F2\x03\x02\x02\x02\u03FD\u03F8\x03\x02\x02\x02\u03FE\xA5\x03\x02\x02" +
		"\x02\u03FF\u0404\x05\xAEX\x02\u0400\u0401\x07,\x02\x02\u0401\u0403\x05" +
		"\xAEX\x02\u0402\u0400\x03\x02\x02\x02\u0403\u0406\x03\x02\x02\x02\u0404" +
		"\u0402\x03\x02\x02\x02\u0404\u0405\x03\x02\x02\x02\u0405\xA7\x03\x02\x02" +
		"\x02\u0406\u0404\x03\x02\x02\x02\u0407\u040C\x05\x92J\x02\u0408\u0409" +
		"\x07,\x02\x02\u0409\u040B\x05\x92J\x02\u040A\u0408\x03\x02\x02\x02\u040B" +
		"\u040E\x03\x02\x02\x02\u040C\u040A\x03\x02\x02\x02\u040C\u040D\x03\x02" +
		"\x02\x02\u040D\xA9\x03\x02\x02\x02\u040E\u040C\x03\x02\x02\x02\u040F\u0414" +
		"\x05\xACW\x02\u0410\u0411\x07,\x02\x02\u0411\u0413\x05\xACW\x02\u0412" +
		"\u0410\x03\x02\x02\x02\u0413\u0416\x03\x02\x02\x02\u0414\u0412\x03\x02" +
		"\x02\x02\u0414\u0415\x03\x02\x02\x02\u0415\xAB\x03\x02\x02\x02\u0416\u0414" +
		"\x03\x02\x02\x02\u0417\u0418\x05\xAEX\x02\u0418\u0419\x07/\x02\x02\u0419" +
		"\u041A\x05\x92J\x02\u041A\xAD\x03\x02\x02\x02\u041B\u041E\x07K\x02\x02" +
		"\u041C\u041E\x05\xB2Z\x02\u041D\u041B\x03\x02\x02\x02\u041D\u041C\x03" +
		"\x02\x02\x02\u041E\xAF\x03\x02\x02\x02\u041F\u0421\t\b\x02\x02\u0420\u041F" +
		"\x03\x02\x02\x02\u0421\u0422\x03\x02\x02\x02\u0422\u0420\x03\x02\x02\x02" +
		"\u0422\u0423\x03\x02\x02\x02\u0423\xB1\x03\x02\x02\x02\u0424\u0425\t\t" +
		"\x02\x02\u0425\xB3\x03\x02\x02\x02{\xB5\xBA\xC0\xC3\xC9\xCD\xD2\xD8\xE4" +
		"\xE9\xEE\xF5\xFB\u0101\u010A\u011D\u012C\u012F\u013B\u013F\u0141\u0146" +
		"\u014B\u0157\u015B\u015D\u0162\u0167\u016C\u0170\u0179\u017D\u017F\u0184" +
		"\u0188\u018B\u019C\u01A4\u01A9\u01AE\u01B3\u01B8\u01BB\u01C5\u01CB\u01D0" +
		"\u01DA\u01E0\u01E5\u01EF\u01F5\u01FA\u0204\u020A\u020F\u0214\u0219\u021E" +
		"\u0222\u0227\u0232\u023D\u0240\u024A\u024E\u0250\u0255\u0259\u0266\u0270" +
		"\u0279\u027B\u0284\u028E\u0292\u0299\u029C\u02A2\u02AC\u02B1\u02B5\u02B7" +
		"\u02BA\u02C4\u02C9\u02CE\u02D8\u02E1\u02E6\u02EF\u02F5\u0306\u0310\u0316" +
		"\u0320\u032B\u0330\u033C\u0344\u034C\u0367\u036F\u037D\u03A0\u03A6\u03A9" +
		"\u03AB\u03C0\u03C5\u03CE\u03D2\u03DA\u03DD\u03E7\u03ED\u03FD\u0404\u040C" +
		"\u0414\u041D\u0422";
	public static readonly _serializedATN: string = Utils.join(
		[
			CWScriptParser._serializedATNSegment0,
			CWScriptParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CWScriptParser.__ATN) {
			CWScriptParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CWScriptParser._serializedATN));
		}

		return CWScriptParser.__ATN;
	}

}

export class SourceFileContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public topLevelStmt(): TopLevelStmtContext[];
	public topLevelStmt(i: number): TopLevelStmtContext;
	public topLevelStmt(i?: number): TopLevelStmtContext | TopLevelStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TopLevelStmtContext);
		} else {
			return this.getRuleContext(i, TopLevelStmtContext);
		}
	}
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_sourceFile; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterSourceFile) {
			listener.enterSourceFile(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitSourceFile) {
			listener.exitSourceFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitSourceFile) {
			return visitor.visitSourceFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TopLevelStmtContext extends ParserRuleContext {
	public contractDefn(): ContractDefnContext | undefined {
		return this.tryGetRuleContext(0, ContractDefnContext);
	}
	public interfaceDefn(): InterfaceDefnContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDefnContext);
	}
	public importStmt(): ImportStmtContext | undefined {
		return this.tryGetRuleContext(0, ImportStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_topLevelStmt; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTopLevelStmt) {
			listener.enterTopLevelStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTopLevelStmt) {
			listener.exitTopLevelStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTopLevelStmt) {
			return visitor.visitTopLevelStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContractDefnContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public _name!: IdentContext;
	public _baseContracts!: IdentListContext;
	public _interfaces!: IdentListContext;
	public CONTRACT(): TerminalNode { return this.getToken(CWScriptParser.CONTRACT, 0); }
	public contractBody(): ContractBodyContext {
		return this.getRuleContext(0, ContractBodyContext);
	}
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXTENDS, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.IMPLEMENTS, 0); }
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	public identList(): IdentListContext[];
	public identList(i: number): IdentListContext;
	public identList(i?: number): IdentListContext | IdentListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentListContext);
		} else {
			return this.getRuleContext(i, IdentListContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_contractDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterContractDefn) {
			listener.enterContractDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitContractDefn) {
			listener.exitContractDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitContractDefn) {
			return visitor.visitContractDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceDefnContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public _name!: IdentContext;
	public _baseInterfaces!: IdentListContext;
	public INTERFACE(): TerminalNode { return this.getToken(CWScriptParser.INTERFACE, 0); }
	public interfaceBody(): InterfaceBodyContext {
		return this.getRuleContext(0, InterfaceBodyContext);
	}
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXTENDS, 0); }
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	public identList(): IdentListContext | undefined {
		return this.tryGetRuleContext(0, IdentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_interfaceDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterInterfaceDefn) {
			listener.enterInterfaceDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitInterfaceDefn) {
			listener.exitInterfaceDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitInterfaceDefn) {
			return visitor.visitInterfaceDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportStmtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_importStmt; }
	public copyFrom(ctx: ImportStmtContext): void {
		super.copyFrom(ctx);
	}
}
export class ImportAllStmtContext extends ImportStmtContext {
	public _fileName!: Token;
	public IMPORT(): TerminalNode { return this.getToken(CWScriptParser.IMPORT, 0); }
	public MUL(): TerminalNode { return this.getToken(CWScriptParser.MUL, 0); }
	public FROM(): TerminalNode { return this.getToken(CWScriptParser.FROM, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.StringLiteral, 0); }
	constructor(ctx: ImportStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterImportAllStmt) {
			listener.enterImportAllStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitImportAllStmt) {
			listener.exitImportAllStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitImportAllStmt) {
			return visitor.visitImportAllStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ImportItemsStmtContext extends ImportStmtContext {
	public _items!: ImportListContext;
	public _fileName!: Token;
	public IMPORT(): TerminalNode { return this.getToken(CWScriptParser.IMPORT, 0); }
	public FROM(): TerminalNode { return this.getToken(CWScriptParser.FROM, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.StringLiteral, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RPAREN, 0); }
	public importList(): ImportListContext | undefined {
		return this.tryGetRuleContext(0, ImportListContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.COMMA, 0); }
	constructor(ctx: ImportStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterImportItemsStmt) {
			listener.enterImportItemsStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitImportItemsStmt) {
			listener.exitImportItemsStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitImportItemsStmt) {
			return visitor.visitImportItemsStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportListContext extends ParserRuleContext {
	public _importItem!: ImportItemContext;
	public _importItems: ImportItemContext[] = [];
	public importItem(): ImportItemContext[];
	public importItem(i: number): ImportItemContext;
	public importItem(i?: number): ImportItemContext | ImportItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportItemContext);
		} else {
			return this.getRuleContext(i, ImportItemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_importList; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterImportList) {
			listener.enterImportList(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitImportList) {
			listener.exitImportList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitImportList) {
			return visitor.visitImportList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportItemContext extends ParserRuleContext {
	public _symbol!: IdentContext;
	public _alias!: IdentContext;
	public ident(): IdentContext[];
	public ident(i: number): IdentContext;
	public ident(i?: number): IdentContext | IdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentContext);
		} else {
			return this.getRuleContext(i, IdentContext);
		}
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_importItem; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterImportItem) {
			listener.enterImportItem(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitImportItem) {
			listener.exitImportItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitImportItem) {
			return visitor.visitImportItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContractBodyContext extends ParserRuleContext {
	public _items!: ContractItemContext;
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public contractItem(): ContractItemContext[];
	public contractItem(i: number): ContractItemContext;
	public contractItem(i?: number): ContractItemContext | ContractItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ContractItemContext);
		} else {
			return this.getRuleContext(i, ContractItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_contractBody; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterContractBody) {
			listener.enterContractBody(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitContractBody) {
			listener.exitContractBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitContractBody) {
			return visitor.visitContractBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceBodyContext extends ParserRuleContext {
	public _items!: InterfaceItemContext;
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public interfaceItem(): InterfaceItemContext[];
	public interfaceItem(i: number): InterfaceItemContext;
	public interfaceItem(i?: number): InterfaceItemContext | InterfaceItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceItemContext);
		} else {
			return this.getRuleContext(i, InterfaceItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_interfaceBody; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterInterfaceBody) {
			listener.enterInterfaceBody(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitInterfaceBody) {
			listener.exitInterfaceBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitInterfaceBody) {
			return visitor.visitInterfaceBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContractItemContext extends ParserRuleContext {
	public typeDefn(): TypeDefnContext | undefined {
		return this.tryGetRuleContext(0, TypeDefnContext);
	}
	public fnDefn(): FnDefnContext | undefined {
		return this.tryGetRuleContext(0, FnDefnContext);
	}
	public errorDefn(): ErrorDefnContext | undefined {
		return this.tryGetRuleContext(0, ErrorDefnContext);
	}
	public errorDefnBlock(): ErrorDefnBlockContext | undefined {
		return this.tryGetRuleContext(0, ErrorDefnBlockContext);
	}
	public eventDefn(): EventDefnContext | undefined {
		return this.tryGetRuleContext(0, EventDefnContext);
	}
	public eventDefnBlock(): EventDefnBlockContext | undefined {
		return this.tryGetRuleContext(0, EventDefnBlockContext);
	}
	public stateDefn(): StateDefnContext | undefined {
		return this.tryGetRuleContext(0, StateDefnContext);
	}
	public stateDefnBlock(): StateDefnBlockContext | undefined {
		return this.tryGetRuleContext(0, StateDefnBlockContext);
	}
	public instantiateDefn(): InstantiateDefnContext | undefined {
		return this.tryGetRuleContext(0, InstantiateDefnContext);
	}
	public execDefn(): ExecDefnContext | undefined {
		return this.tryGetRuleContext(0, ExecDefnContext);
	}
	public execDefnBlock(): ExecDefnBlockContext | undefined {
		return this.tryGetRuleContext(0, ExecDefnBlockContext);
	}
	public queryDefn(): QueryDefnContext | undefined {
		return this.tryGetRuleContext(0, QueryDefnContext);
	}
	public queryDefnBlock(): QueryDefnBlockContext | undefined {
		return this.tryGetRuleContext(0, QueryDefnBlockContext);
	}
	public migrateDefn(): MigrateDefnContext | undefined {
		return this.tryGetRuleContext(0, MigrateDefnContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_contractItem; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterContractItem) {
			listener.enterContractItem(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitContractItem) {
			listener.exitContractItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitContractItem) {
			return visitor.visitContractItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceItemContext extends ParserRuleContext {
	public typeDefn(): TypeDefnContext | undefined {
		return this.tryGetRuleContext(0, TypeDefnContext);
	}
	public errorDefn(): ErrorDefnContext | undefined {
		return this.tryGetRuleContext(0, ErrorDefnContext);
	}
	public errorDefnBlock(): ErrorDefnBlockContext | undefined {
		return this.tryGetRuleContext(0, ErrorDefnBlockContext);
	}
	public eventDefn(): EventDefnContext | undefined {
		return this.tryGetRuleContext(0, EventDefnContext);
	}
	public eventDefnBlock(): EventDefnBlockContext | undefined {
		return this.tryGetRuleContext(0, EventDefnBlockContext);
	}
	public stateDefn(): StateDefnContext | undefined {
		return this.tryGetRuleContext(0, StateDefnContext);
	}
	public stateDefnBlock(): StateDefnBlockContext | undefined {
		return this.tryGetRuleContext(0, StateDefnBlockContext);
	}
	public instantiateDecl(): InstantiateDeclContext | undefined {
		return this.tryGetRuleContext(0, InstantiateDeclContext);
	}
	public execDecl(): ExecDeclContext | undefined {
		return this.tryGetRuleContext(0, ExecDeclContext);
	}
	public execDeclBlock(): ExecDeclBlockContext | undefined {
		return this.tryGetRuleContext(0, ExecDeclBlockContext);
	}
	public queryDecl(): QueryDeclContext | undefined {
		return this.tryGetRuleContext(0, QueryDeclContext);
	}
	public queryDeclBlock(): QueryDeclBlockContext | undefined {
		return this.tryGetRuleContext(0, QueryDeclBlockContext);
	}
	public migrateDecl(): MigrateDeclContext | undefined {
		return this.tryGetRuleContext(0, MigrateDeclContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_interfaceItem; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterInterfaceItem) {
			listener.enterInterfaceItem(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitInterfaceItem) {
			listener.exitInterfaceItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitInterfaceItem) {
			return visitor.visitInterfaceItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorDefnContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public ERROR(): TerminalNode { return this.getToken(CWScriptParser.ERROR, 0); }
	public enumVariant_struct(): EnumVariant_structContext {
		return this.getRuleContext(0, EnumVariant_structContext);
	}
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_errorDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterErrorDefn) {
			listener.enterErrorDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitErrorDefn) {
			listener.exitErrorDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitErrorDefn) {
			return visitor.visitErrorDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorDefnBlockContext extends ParserRuleContext {
	public ERROR(): TerminalNode { return this.getToken(CWScriptParser.ERROR, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public errorDefnBlock_item(): ErrorDefnBlock_itemContext[];
	public errorDefnBlock_item(i: number): ErrorDefnBlock_itemContext;
	public errorDefnBlock_item(i?: number): ErrorDefnBlock_itemContext | ErrorDefnBlock_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ErrorDefnBlock_itemContext);
		} else {
			return this.getRuleContext(i, ErrorDefnBlock_itemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_errorDefnBlock; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterErrorDefnBlock) {
			listener.enterErrorDefnBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitErrorDefnBlock) {
			listener.exitErrorDefnBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitErrorDefnBlock) {
			return visitor.visitErrorDefnBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorDefnBlock_itemContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public enumVariant_struct(): EnumVariant_structContext {
		return this.getRuleContext(0, EnumVariant_structContext);
	}
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_errorDefnBlock_item; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterErrorDefnBlock_item) {
			listener.enterErrorDefnBlock_item(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitErrorDefnBlock_item) {
			listener.exitErrorDefnBlock_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitErrorDefnBlock_item) {
			return visitor.visitErrorDefnBlock_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventDefnContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public EVENT(): TerminalNode { return this.getToken(CWScriptParser.EVENT, 0); }
	public enumVariant_struct(): EnumVariant_structContext {
		return this.getRuleContext(0, EnumVariant_structContext);
	}
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_eventDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEventDefn) {
			listener.enterEventDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEventDefn) {
			listener.exitEventDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEventDefn) {
			return visitor.visitEventDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventDefnBlockContext extends ParserRuleContext {
	public EVENT(): TerminalNode { return this.getToken(CWScriptParser.EVENT, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public eventDefnBlock_item(): EventDefnBlock_itemContext[];
	public eventDefnBlock_item(i: number): EventDefnBlock_itemContext;
	public eventDefnBlock_item(i?: number): EventDefnBlock_itemContext | EventDefnBlock_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EventDefnBlock_itemContext);
		} else {
			return this.getRuleContext(i, EventDefnBlock_itemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_eventDefnBlock; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEventDefnBlock) {
			listener.enterEventDefnBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEventDefnBlock) {
			listener.exitEventDefnBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEventDefnBlock) {
			return visitor.visitEventDefnBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventDefnBlock_itemContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public enumVariant_struct(): EnumVariant_structContext {
		return this.getRuleContext(0, EnumVariant_structContext);
	}
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_eventDefnBlock_item; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEventDefnBlock_item) {
			listener.enterEventDefnBlock_item(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEventDefnBlock_item) {
			listener.exitEventDefnBlock_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEventDefnBlock_item) {
			return visitor.visitEventDefnBlock_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateDefnContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_stateDefn; }
	public copyFrom(ctx: StateDefnContext): void {
		super.copyFrom(ctx);
	}
}
export class StateItemDefnContext extends StateDefnContext {
	public _spec!: CwspecContext;
	public _item!: ItemDefnContext;
	public STATE(): TerminalNode { return this.getToken(CWScriptParser.STATE, 0); }
	public itemDefn(): ItemDefnContext | undefined {
		return this.tryGetRuleContext(0, ItemDefnContext);
	}
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(ctx: StateDefnContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStateItemDefn) {
			listener.enterStateItemDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStateItemDefn) {
			listener.exitStateItemDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStateItemDefn) {
			return visitor.visitStateItemDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StateMapDefnContext extends StateDefnContext {
	public _spec!: CwspecContext;
	public _map!: MapDefnContext;
	public STATE(): TerminalNode { return this.getToken(CWScriptParser.STATE, 0); }
	public mapDefn(): MapDefnContext {
		return this.getRuleContext(0, MapDefnContext);
	}
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(ctx: StateDefnContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStateMapDefn) {
			listener.enterStateMapDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStateMapDefn) {
			listener.exitStateMapDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStateMapDefn) {
			return visitor.visitStateMapDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateDefnBlockContext extends ParserRuleContext {
	public STATE(): TerminalNode { return this.getToken(CWScriptParser.STATE, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public stateDefnBlock_item(): StateDefnBlock_itemContext[];
	public stateDefnBlock_item(i: number): StateDefnBlock_itemContext;
	public stateDefnBlock_item(i?: number): StateDefnBlock_itemContext | StateDefnBlock_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StateDefnBlock_itemContext);
		} else {
			return this.getRuleContext(i, StateDefnBlock_itemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_stateDefnBlock; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStateDefnBlock) {
			listener.enterStateDefnBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStateDefnBlock) {
			listener.exitStateDefnBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStateDefnBlock) {
			return visitor.visitStateDefnBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateDefnBlock_itemContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_stateDefnBlock_item; }
	public copyFrom(ctx: StateDefnBlock_itemContext): void {
		super.copyFrom(ctx);
	}
}
export class StateBlockItemDefnContext extends StateDefnBlock_itemContext {
	public _spec!: CwspecContext;
	public _item!: ItemDefnContext;
	public itemDefn(): ItemDefnContext | undefined {
		return this.tryGetRuleContext(0, ItemDefnContext);
	}
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(ctx: StateDefnBlock_itemContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStateBlockItemDefn) {
			listener.enterStateBlockItemDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStateBlockItemDefn) {
			listener.exitStateBlockItemDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStateBlockItemDefn) {
			return visitor.visitStateBlockItemDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StateBlockMapDefnContext extends StateDefnBlock_itemContext {
	public _spec!: CwspecContext;
	public _map!: MapDefnContext;
	public mapDefn(): MapDefnContext | undefined {
		return this.tryGetRuleContext(0, MapDefnContext);
	}
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(ctx: StateDefnBlock_itemContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStateBlockMapDefn) {
			listener.enterStateBlockMapDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStateBlockMapDefn) {
			listener.exitStateBlockMapDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStateBlockMapDefn) {
			return visitor.visitStateBlockMapDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ItemDefnContext extends ParserRuleContext {
	public _key!: IdentContext;
	public _valueType!: TypeExprContext;
	public COLON(): TerminalNode { return this.getToken(CWScriptParser.COLON, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_itemDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterItemDefn) {
			listener.enterItemDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitItemDefn) {
			listener.exitItemDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitItemDefn) {
			return visitor.visitItemDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapDefnContext extends ParserRuleContext {
	public _key!: IdentContext;
	public _mapKeys!: MapDefnKeysContext;
	public _valueType!: TypeExprContext;
	public COLON(): TerminalNode { return this.getToken(CWScriptParser.COLON, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public mapDefnKeys(): MapDefnKeysContext | undefined {
		return this.tryGetRuleContext(0, MapDefnKeysContext);
	}
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_mapDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterMapDefn) {
			listener.enterMapDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitMapDefn) {
			listener.exitMapDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitMapDefn) {
			return visitor.visitMapDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapDefnKeysContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public mapDefnKey(): MapDefnKeyContext[];
	public mapDefnKey(i: number): MapDefnKeyContext;
	public mapDefnKey(i?: number): MapDefnKeyContext | MapDefnKeyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MapDefnKeyContext);
		} else {
			return this.getRuleContext(i, MapDefnKeyContext);
		}
	}
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_mapDefnKeys; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterMapDefnKeys) {
			listener.enterMapDefnKeys(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitMapDefnKeys) {
			listener.exitMapDefnKeys(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitMapDefnKeys) {
			return visitor.visitMapDefnKeys(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapDefnKeyContext extends ParserRuleContext {
	public _keyName!: IdentContext;
	public _keyType!: TypeExprContext;
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.COLON, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_mapDefnKey; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterMapDefnKey) {
			listener.enterMapDefnKey(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitMapDefnKey) {
			listener.exitMapDefnKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitMapDefnKey) {
			return visitor.visitMapDefnKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstantiateDefnContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public INSTANTIATE(): TerminalNode { return this.getToken(CWScriptParser.INSTANTIATE, 0); }
	public fnArgs(): FnArgsContext {
		return this.getRuleContext(0, FnArgsContext);
	}
	public fnBody(): FnBodyContext {
		return this.getRuleContext(0, FnBodyContext);
	}
	public fnType(): FnTypeContext | undefined {
		return this.tryGetRuleContext(0, FnTypeContext);
	}
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_instantiateDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterInstantiateDefn) {
			listener.enterInstantiateDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitInstantiateDefn) {
			listener.exitInstantiateDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitInstantiateDefn) {
			return visitor.visitInstantiateDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstantiateDeclContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public INSTANTIATE(): TerminalNode { return this.getToken(CWScriptParser.INSTANTIATE, 0); }
	public fnArgs(): FnArgsContext {
		return this.getRuleContext(0, FnArgsContext);
	}
	public fnType(): FnTypeContext | undefined {
		return this.tryGetRuleContext(0, FnTypeContext);
	}
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_instantiateDecl; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterInstantiateDecl) {
			listener.enterInstantiateDecl(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitInstantiateDecl) {
			listener.exitInstantiateDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitInstantiateDecl) {
			return visitor.visitInstantiateDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExecDefnContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public EXEC(): TerminalNode { return this.getToken(CWScriptParser.EXEC, 0); }
	public namedFnDefn(): NamedFnDefnContext {
		return this.getRuleContext(0, NamedFnDefnContext);
	}
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_execDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterExecDefn) {
			listener.enterExecDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitExecDefn) {
			listener.exitExecDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitExecDefn) {
			return visitor.visitExecDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExecDefnBlockContext extends ParserRuleContext {
	public EXEC(): TerminalNode { return this.getToken(CWScriptParser.EXEC, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public execDefnBlock_item(): ExecDefnBlock_itemContext[];
	public execDefnBlock_item(i: number): ExecDefnBlock_itemContext;
	public execDefnBlock_item(i?: number): ExecDefnBlock_itemContext | ExecDefnBlock_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExecDefnBlock_itemContext);
		} else {
			return this.getRuleContext(i, ExecDefnBlock_itemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_execDefnBlock; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterExecDefnBlock) {
			listener.enterExecDefnBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitExecDefnBlock) {
			listener.exitExecDefnBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitExecDefnBlock) {
			return visitor.visitExecDefnBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExecDefnBlock_itemContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public namedFnDefn(): NamedFnDefnContext {
		return this.getRuleContext(0, NamedFnDefnContext);
	}
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_execDefnBlock_item; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterExecDefnBlock_item) {
			listener.enterExecDefnBlock_item(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitExecDefnBlock_item) {
			listener.exitExecDefnBlock_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitExecDefnBlock_item) {
			return visitor.visitExecDefnBlock_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExecDeclContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public EXEC(): TerminalNode { return this.getToken(CWScriptParser.EXEC, 0); }
	public namedFnDecl(): NamedFnDeclContext {
		return this.getRuleContext(0, NamedFnDeclContext);
	}
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_execDecl; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterExecDecl) {
			listener.enterExecDecl(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitExecDecl) {
			listener.exitExecDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitExecDecl) {
			return visitor.visitExecDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExecDeclBlockContext extends ParserRuleContext {
	public EXEC(): TerminalNode { return this.getToken(CWScriptParser.EXEC, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public execDeclBlock_item(): ExecDeclBlock_itemContext[];
	public execDeclBlock_item(i: number): ExecDeclBlock_itemContext;
	public execDeclBlock_item(i?: number): ExecDeclBlock_itemContext | ExecDeclBlock_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExecDeclBlock_itemContext);
		} else {
			return this.getRuleContext(i, ExecDeclBlock_itemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_execDeclBlock; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterExecDeclBlock) {
			listener.enterExecDeclBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitExecDeclBlock) {
			listener.exitExecDeclBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitExecDeclBlock) {
			return visitor.visitExecDeclBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExecDeclBlock_itemContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public namedFnDecl(): NamedFnDeclContext {
		return this.getRuleContext(0, NamedFnDeclContext);
	}
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_execDeclBlock_item; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterExecDeclBlock_item) {
			listener.enterExecDeclBlock_item(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitExecDeclBlock_item) {
			listener.exitExecDeclBlock_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitExecDeclBlock_item) {
			return visitor.visitExecDeclBlock_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryDefnContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public QUERY(): TerminalNode { return this.getToken(CWScriptParser.QUERY, 0); }
	public namedFnDefn(): NamedFnDefnContext {
		return this.getRuleContext(0, NamedFnDefnContext);
	}
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_queryDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterQueryDefn) {
			listener.enterQueryDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitQueryDefn) {
			listener.exitQueryDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitQueryDefn) {
			return visitor.visitQueryDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryDefnBlockContext extends ParserRuleContext {
	public QUERY(): TerminalNode { return this.getToken(CWScriptParser.QUERY, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public queryDefnBlock_item(): QueryDefnBlock_itemContext[];
	public queryDefnBlock_item(i: number): QueryDefnBlock_itemContext;
	public queryDefnBlock_item(i?: number): QueryDefnBlock_itemContext | QueryDefnBlock_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QueryDefnBlock_itemContext);
		} else {
			return this.getRuleContext(i, QueryDefnBlock_itemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_queryDefnBlock; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterQueryDefnBlock) {
			listener.enterQueryDefnBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitQueryDefnBlock) {
			listener.exitQueryDefnBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitQueryDefnBlock) {
			return visitor.visitQueryDefnBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryDefnBlock_itemContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public namedFnDefn(): NamedFnDefnContext {
		return this.getRuleContext(0, NamedFnDefnContext);
	}
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_queryDefnBlock_item; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterQueryDefnBlock_item) {
			listener.enterQueryDefnBlock_item(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitQueryDefnBlock_item) {
			listener.exitQueryDefnBlock_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitQueryDefnBlock_item) {
			return visitor.visitQueryDefnBlock_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryDeclContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public QUERY(): TerminalNode { return this.getToken(CWScriptParser.QUERY, 0); }
	public namedFnDecl(): NamedFnDeclContext {
		return this.getRuleContext(0, NamedFnDeclContext);
	}
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_queryDecl; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterQueryDecl) {
			listener.enterQueryDecl(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitQueryDecl) {
			listener.exitQueryDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitQueryDecl) {
			return visitor.visitQueryDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryDeclBlockContext extends ParserRuleContext {
	public QUERY(): TerminalNode { return this.getToken(CWScriptParser.QUERY, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public queryDeclBlock_item(): QueryDeclBlock_itemContext[];
	public queryDeclBlock_item(i: number): QueryDeclBlock_itemContext;
	public queryDeclBlock_item(i?: number): QueryDeclBlock_itemContext | QueryDeclBlock_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QueryDeclBlock_itemContext);
		} else {
			return this.getRuleContext(i, QueryDeclBlock_itemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_queryDeclBlock; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterQueryDeclBlock) {
			listener.enterQueryDeclBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitQueryDeclBlock) {
			listener.exitQueryDeclBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitQueryDeclBlock) {
			return visitor.visitQueryDeclBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryDeclBlock_itemContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public namedFnDecl(): NamedFnDeclContext {
		return this.getRuleContext(0, NamedFnDeclContext);
	}
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_queryDeclBlock_item; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterQueryDeclBlock_item) {
			listener.enterQueryDeclBlock_item(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitQueryDeclBlock_item) {
			listener.exitQueryDeclBlock_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitQueryDeclBlock_item) {
			return visitor.visitQueryDeclBlock_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MigrateDefnContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public MIGRATE(): TerminalNode { return this.getToken(CWScriptParser.MIGRATE, 0); }
	public fnArgs(): FnArgsContext {
		return this.getRuleContext(0, FnArgsContext);
	}
	public fnBody(): FnBodyContext {
		return this.getRuleContext(0, FnBodyContext);
	}
	public fnType(): FnTypeContext | undefined {
		return this.tryGetRuleContext(0, FnTypeContext);
	}
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_migrateDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterMigrateDefn) {
			listener.enterMigrateDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitMigrateDefn) {
			listener.exitMigrateDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitMigrateDefn) {
			return visitor.visitMigrateDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MigrateDeclContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public MIGRATE(): TerminalNode { return this.getToken(CWScriptParser.MIGRATE, 0); }
	public fnArgs(): FnArgsContext {
		return this.getRuleContext(0, FnArgsContext);
	}
	public fnType(): FnTypeContext | undefined {
		return this.tryGetRuleContext(0, FnTypeContext);
	}
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_migrateDecl; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterMigrateDecl) {
			listener.enterMigrateDecl(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitMigrateDecl) {
			listener.exitMigrateDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitMigrateDecl) {
			return visitor.visitMigrateDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumVariantContext extends ParserRuleContext {
	public enumVariant_struct(): EnumVariant_structContext | undefined {
		return this.tryGetRuleContext(0, EnumVariant_structContext);
	}
	public enumVariant_tuple(): EnumVariant_tupleContext | undefined {
		return this.tryGetRuleContext(0, EnumVariant_tupleContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_enumVariant; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEnumVariant) {
			listener.enterEnumVariant(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEnumVariant) {
			listener.exitEnumVariant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEnumVariant) {
			return visitor.visitEnumVariant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumVariant_structContext extends ParserRuleContext {
	public _name!: IdentContext;
	public parenStructMembers(): ParenStructMembersContext | undefined {
		return this.tryGetRuleContext(0, ParenStructMembersContext);
	}
	public curlyStructMembers(): CurlyStructMembersContext | undefined {
		return this.tryGetRuleContext(0, CurlyStructMembersContext);
	}
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_enumVariant_struct; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEnumVariant_struct) {
			listener.enterEnumVariant_struct(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEnumVariant_struct) {
			listener.exitEnumVariant_struct(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEnumVariant_struct) {
			return visitor.visitEnumVariant_struct(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumVariant_tupleContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _members!: TupleMembersContext;
	public tupleMembers(): TupleMembersContext {
		return this.getRuleContext(0, TupleMembersContext);
	}
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_enumVariant_tuple; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEnumVariant_tuple) {
			listener.enterEnumVariant_tuple(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEnumVariant_tuple) {
			listener.exitEnumVariant_tuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEnumVariant_tuple) {
			return visitor.visitEnumVariant_tuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleMembersContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public typeExpr(): TypeExprContext[];
	public typeExpr(i: number): TypeExprContext;
	public typeExpr(i?: number): TypeExprContext | TypeExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeExprContext);
		} else {
			return this.getRuleContext(i, TypeExprContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_tupleMembers; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTupleMembers) {
			listener.enterTupleMembers(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTupleMembers) {
			listener.exitTupleMembers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTupleMembers) {
			return visitor.visitTupleMembers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParenStructMembersContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public structMember(): StructMemberContext[];
	public structMember(i: number): StructMemberContext;
	public structMember(i?: number): StructMemberContext | StructMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructMemberContext);
		} else {
			return this.getRuleContext(i, StructMemberContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_parenStructMembers; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterParenStructMembers) {
			listener.enterParenStructMembers(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitParenStructMembers) {
			listener.exitParenStructMembers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitParenStructMembers) {
			return visitor.visitParenStructMembers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CurlyStructMembersContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public structMember(): StructMemberContext[];
	public structMember(i: number): StructMemberContext;
	public structMember(i?: number): StructMemberContext | StructMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructMemberContext);
		} else {
			return this.getRuleContext(i, StructMemberContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_curlyStructMembers; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterCurlyStructMembers) {
			listener.enterCurlyStructMembers(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitCurlyStructMembers) {
			listener.exitCurlyStructMembers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitCurlyStructMembers) {
			return visitor.visitCurlyStructMembers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructMemberContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public _name!: IdentContext;
	public _option!: Token;
	public _valueType!: TypeExprContext;
	public COLON(): TerminalNode { return this.getToken(CWScriptParser.COLON, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	public QUEST(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.QUEST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_structMember; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStructMember) {
			listener.enterStructMember(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStructMember) {
			listener.exitStructMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStructMember) {
			return visitor.visitStructMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_typeExpr; }
	public copyFrom(ctx: TypeExprContext): void {
		super.copyFrom(ctx);
	}
}
export class TypePathExprContext extends TypeExprContext {
	public typePath(): TypePathContext {
		return this.getRuleContext(0, TypePathContext);
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTypePathExpr) {
			listener.enterTypePathExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTypePathExpr) {
			listener.exitTypePathExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTypePathExpr) {
			return visitor.visitTypePathExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParamzdTypeExprContext extends TypeExprContext {
	public typeExpr(): TypeExprContext {
		return this.getRuleContext(0, TypeExprContext);
	}
	public typeParam(): TypeParamContext {
		return this.getRuleContext(0, TypeParamContext);
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterParamzdTypeExpr) {
			listener.enterParamzdTypeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitParamzdTypeExpr) {
			listener.exitParamzdTypeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitParamzdTypeExpr) {
			return visitor.visitParamzdTypeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TupleTypeExprContext extends TypeExprContext {
	public _typeExpr!: TypeExprContext;
	public _members: TypeExprContext[] = [];
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public typeExpr(): TypeExprContext[];
	public typeExpr(i: number): TypeExprContext;
	public typeExpr(i?: number): TypeExprContext | TypeExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeExprContext);
		} else {
			return this.getRuleContext(i, TypeExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTupleTypeExpr) {
			listener.enterTupleTypeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTupleTypeExpr) {
			listener.exitTupleTypeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTupleTypeExpr) {
			return visitor.visitTupleTypeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShortOptionTypeExprContext extends TypeExprContext {
	public typeExpr(): TypeExprContext {
		return this.getRuleContext(0, TypeExprContext);
	}
	public QUEST(): TerminalNode { return this.getToken(CWScriptParser.QUEST, 0); }
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterShortOptionTypeExpr) {
			listener.enterShortOptionTypeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitShortOptionTypeExpr) {
			listener.exitShortOptionTypeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitShortOptionTypeExpr) {
			return visitor.visitShortOptionTypeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShortVecTypeExprContext extends TypeExprContext {
	public typeExpr(): TypeExprContext {
		return this.getRuleContext(0, TypeExprContext);
	}
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterShortVecTypeExpr) {
			listener.enterShortVecTypeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitShortVecTypeExpr) {
			listener.exitShortVecTypeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitShortVecTypeExpr) {
			return visitor.visitShortVecTypeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RefTypeExprContext extends TypeExprContext {
	public AMP(): TerminalNode { return this.getToken(CWScriptParser.AMP, 0); }
	public typeExpr(): TypeExprContext {
		return this.getRuleContext(0, TypeExprContext);
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterRefTypeExpr) {
			listener.enterRefTypeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitRefTypeExpr) {
			listener.exitRefTypeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitRefTypeExpr) {
			return visitor.visitRefTypeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddrExprContext extends TypeExprContext {
	public AT(): TerminalNode { return this.getToken(CWScriptParser.AT, 0); }
	public typeExpr(): TypeExprContext {
		return this.getRuleContext(0, TypeExprContext);
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterAddrExpr) {
			listener.enterAddrExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitAddrExpr) {
			listener.exitAddrExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitAddrExpr) {
			return visitor.visitAddrExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeDefnExprContext extends TypeExprContext {
	public typeDefn(): TypeDefnContext {
		return this.getRuleContext(0, TypeDefnContext);
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTypeDefnExpr) {
			listener.enterTypeDefnExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTypeDefnExpr) {
			listener.exitTypeDefnExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTypeDefnExpr) {
			return visitor.visitTypeDefnExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParamContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(CWScriptParser.LT, 0); }
	public typeExpr(): TypeExprContext[];
	public typeExpr(i: number): TypeExprContext;
	public typeExpr(i?: number): TypeExprContext | TypeExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeExprContext);
		} else {
			return this.getRuleContext(i, TypeExprContext);
		}
	}
	public GT(): TerminalNode { return this.getToken(CWScriptParser.GT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_typeParam; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTypeParam) {
			listener.enterTypeParam(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTypeParam) {
			listener.exitTypeParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTypeParam) {
			return visitor.visitTypeParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PathListContext extends ParserRuleContext {
	public ident(): IdentContext[];
	public ident(i: number): IdentContext;
	public ident(i?: number): IdentContext | IdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentContext);
		} else {
			return this.getRuleContext(i, IdentContext);
		}
	}
	public D_COLON(): TerminalNode[];
	public D_COLON(i: number): TerminalNode;
	public D_COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.D_COLON);
		} else {
			return this.getToken(CWScriptParser.D_COLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_pathList; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterPathList) {
			listener.enterPathList(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitPathList) {
			listener.exitPathList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitPathList) {
			return visitor.visitPathList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypePathContext extends ParserRuleContext {
	public _root!: Token;
	public pathList(): PathListContext {
		return this.getRuleContext(0, PathListContext);
	}
	public D_COLON(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.D_COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_typePath; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTypePath) {
			listener.enterTypePath(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTypePath) {
			listener.exitTypePath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTypePath) {
			return visitor.visitTypePath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDefnContext extends ParserRuleContext {
	public structDefn(): StructDefnContext | undefined {
		return this.tryGetRuleContext(0, StructDefnContext);
	}
	public enumDefn(): EnumDefnContext | undefined {
		return this.tryGetRuleContext(0, EnumDefnContext);
	}
	public typeAliasDefn(): TypeAliasDefnContext | undefined {
		return this.tryGetRuleContext(0, TypeAliasDefnContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_typeDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTypeDefn) {
			listener.enterTypeDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTypeDefn) {
			listener.exitTypeDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTypeDefn) {
			return visitor.visitTypeDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDefnContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public STRUCT(): TerminalNode { return this.getToken(CWScriptParser.STRUCT, 0); }
	public enumVariant(): EnumVariantContext {
		return this.getRuleContext(0, EnumVariantContext);
	}
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_structDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStructDefn) {
			listener.enterStructDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStructDefn) {
			listener.exitStructDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStructDefn) {
			return visitor.visitStructDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDefnContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public _name!: IdentContext;
	public ENUM(): TerminalNode { return this.getToken(CWScriptParser.ENUM, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public enumVariantList(): EnumVariantListContext {
		return this.getRuleContext(0, EnumVariantListContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_enumDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEnumDefn) {
			listener.enterEnumDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEnumDefn) {
			listener.exitEnumDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEnumDefn) {
			return visitor.visitEnumDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumVariantListContext extends ParserRuleContext {
	public enumVariant(): EnumVariantContext[];
	public enumVariant(i: number): EnumVariantContext;
	public enumVariant(i?: number): EnumVariantContext | EnumVariantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumVariantContext);
		} else {
			return this.getRuleContext(i, EnumVariantContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_enumVariantList; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEnumVariantList) {
			listener.enterEnumVariantList(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEnumVariantList) {
			listener.exitEnumVariantList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEnumVariantList) {
			return visitor.visitEnumVariantList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeAliasDefnContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public _name!: IdentContext;
	public _typeValue!: TypeExprContext;
	public TYPE(): TerminalNode { return this.getToken(CWScriptParser.TYPE, 0); }
	public EQ(): TerminalNode { return this.getToken(CWScriptParser.EQ, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_typeAliasDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTypeAliasDefn) {
			listener.enterTypeAliasDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTypeAliasDefn) {
			listener.exitTypeAliasDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTypeAliasDefn) {
			return visitor.visitTypeAliasDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedFnDeclContext extends ParserRuleContext {
	public _fnName!: IdentContext;
	public fnArgs(): FnArgsContext {
		return this.getRuleContext(0, FnArgsContext);
	}
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public fnType(): FnTypeContext | undefined {
		return this.tryGetRuleContext(0, FnTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_namedFnDecl; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterNamedFnDecl) {
			listener.enterNamedFnDecl(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitNamedFnDecl) {
			listener.exitNamedFnDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitNamedFnDecl) {
			return visitor.visitNamedFnDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedFnDefnContext extends ParserRuleContext {
	public _fnName!: IdentContext;
	public fnArgs(): FnArgsContext {
		return this.getRuleContext(0, FnArgsContext);
	}
	public fnBody(): FnBodyContext {
		return this.getRuleContext(0, FnBodyContext);
	}
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public fnType(): FnTypeContext | undefined {
		return this.tryGetRuleContext(0, FnTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_namedFnDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterNamedFnDefn) {
			listener.enterNamedFnDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitNamedFnDefn) {
			listener.exitNamedFnDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitNamedFnDefn) {
			return visitor.visitNamedFnDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FnDefnContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public FN(): TerminalNode { return this.getToken(CWScriptParser.FN, 0); }
	public namedFnDefn(): NamedFnDefnContext {
		return this.getRuleContext(0, NamedFnDefnContext);
	}
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_fnDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterFnDefn) {
			listener.enterFnDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitFnDefn) {
			listener.exitFnDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitFnDefn) {
			return visitor.visitFnDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FnTypeContext extends ParserRuleContext {
	public _retType!: TypeExprContext;
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ARROW, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_fnType; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterFnType) {
			listener.enterFnType(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitFnType) {
			listener.exitFnType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitFnType) {
			return visitor.visitFnType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FnArgsContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public fnArgList(): FnArgListContext | undefined {
		return this.tryGetRuleContext(0, FnArgListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_fnArgs; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterFnArgs) {
			listener.enterFnArgs(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitFnArgs) {
			listener.exitFnArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitFnArgs) {
			return visitor.visitFnArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FnArgListContext extends ParserRuleContext {
	public fnArg(): FnArgContext[];
	public fnArg(i: number): FnArgContext;
	public fnArg(i?: number): FnArgContext | FnArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FnArgContext);
		} else {
			return this.getRuleContext(i, FnArgContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_fnArgList; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterFnArgList) {
			listener.enterFnArgList(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitFnArgList) {
			listener.exitFnArgList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitFnArgList) {
			return visitor.visitFnArgList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FnArgContext extends ParserRuleContext {
	public _argName!: IdentContext;
	public _option!: Token;
	public _argType!: TypeExprContext;
	public COLON(): TerminalNode { return this.getToken(CWScriptParser.COLON, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	public QUEST(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.QUEST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_fnArg; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterFnArg) {
			listener.enterFnArg(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitFnArg) {
			listener.exitFnArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitFnArg) {
			return visitor.visitFnArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FnBodyContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_fnBody; }
	public copyFrom(ctx: FnBodyContext): void {
		super.copyFrom(ctx);
	}
}
export class NormalFnBodyContext extends FnBodyContext {
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RBRACE, 0); }
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(ctx: FnBodyContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterNormalFnBody) {
			listener.enterNormalFnBody(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitNormalFnBody) {
			listener.exitNormalFnBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitNormalFnBody) {
			return visitor.visitNormalFnBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrowFnBodyContext extends FnBodyContext {
	public FAT_ARROW(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.FAT_ARROW, 0); }
	public stmt(): StmtContext | undefined {
		return this.tryGetRuleContext(0, StmtContext);
	}
	constructor(ctx: FnBodyContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterArrowFnBody) {
			listener.enterArrowFnBody(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitArrowFnBody) {
			listener.exitArrowFnBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitArrowFnBody) {
			return visitor.visitArrowFnBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_stmt; }
	public copyFrom(ctx: StmtContext): void {
		super.copyFrom(ctx);
	}
}
export class LetStmtContext extends StmtContext {
	public letStmt_(): LetStmt_Context {
		return this.getRuleContext(0, LetStmt_Context);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterLetStmt) {
			listener.enterLetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitLetStmt) {
			listener.exitLetStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitLetStmt) {
			return visitor.visitLetStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignStmtContext extends StmtContext {
	public assignStmt_(): AssignStmt_Context {
		return this.getRuleContext(0, AssignStmt_Context);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterAssignStmt) {
			listener.enterAssignStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitAssignStmt) {
			listener.exitAssignStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitAssignStmt) {
			return visitor.visitAssignStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfStmtContext extends StmtContext {
	public ifExpr_(): IfExpr_Context {
		return this.getRuleContext(0, IfExpr_Context);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIfStmt) {
			listener.enterIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIfStmt) {
			listener.exitIfStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIfStmt) {
			return visitor.visitIfStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForStmtContext extends StmtContext {
	public forStmt_(): ForStmt_Context {
		return this.getRuleContext(0, ForStmt_Context);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterForStmt) {
			listener.enterForStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitForStmt) {
			listener.exitForStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitForStmt) {
			return visitor.visitForStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecStmtContext extends StmtContext {
	public EXEC(): TerminalNode { return this.getToken(CWScriptParser.EXEC, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterExecStmt) {
			listener.enterExecStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitExecStmt) {
			listener.exitExecStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitExecStmt) {
			return visitor.visitExecStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecuteNowStmtContext extends StmtContext {
	public EXECUTE_NOW(): TerminalNode { return this.getToken(CWScriptParser.EXECUTE_NOW, 0); }
	public msg(): MsgContext {
		return this.getRuleContext(0, MsgContext);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterExecuteNowStmt) {
			listener.enterExecuteNowStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitExecuteNowStmt) {
			listener.exitExecuteNowStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitExecuteNowStmt) {
			return visitor.visitExecuteNowStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EmitStmtContext extends StmtContext {
	public EMIT(): TerminalNode { return this.getToken(CWScriptParser.EMIT, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEmitStmt) {
			listener.enterEmitStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEmitStmt) {
			listener.exitEmitStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEmitStmt) {
			return visitor.visitEmitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReturnStmtContext extends StmtContext {
	public RETURN(): TerminalNode { return this.getToken(CWScriptParser.RETURN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterReturnStmt) {
			listener.enterReturnStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitReturnStmt) {
			listener.exitReturnStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitReturnStmt) {
			return visitor.visitReturnStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FailStmtContext extends StmtContext {
	public FAIL(): TerminalNode { return this.getToken(CWScriptParser.FAIL, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterFailStmt) {
			listener.enterFailStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitFailStmt) {
			listener.exitFailStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitFailStmt) {
			return visitor.visitFailStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprStmtContext extends StmtContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterExprStmt) {
			listener.enterExprStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitExprStmt) {
			listener.exitExprStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitExprStmt) {
			return visitor.visitExprStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LetStmt_Context extends ParserRuleContext {
	public LET(): TerminalNode { return this.getToken(CWScriptParser.LET, 0); }
	public letLHS(): LetLHSContext {
		return this.getRuleContext(0, LetLHSContext);
	}
	public EQ(): TerminalNode { return this.getToken(CWScriptParser.EQ, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_letStmt_; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterLetStmt_) {
			listener.enterLetStmt_(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitLetStmt_) {
			listener.exitLetStmt_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitLetStmt_) {
			return visitor.visitLetStmt_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LetLHSContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_letLHS; }
	public copyFrom(ctx: LetLHSContext): void {
		super.copyFrom(ctx);
	}
}
export class IdentLHSContext extends LetLHSContext {
	public _varType!: TypeExprContext;
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.COLON, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(ctx: LetLHSContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIdentLHS) {
			listener.enterIdentLHS(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIdentLHS) {
			listener.exitIdentLHS(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIdentLHS) {
			return visitor.visitIdentLHS(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StructUnpackLHSContext extends LetLHSContext {
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public identList(): IdentListContext {
		return this.getRuleContext(0, IdentListContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	constructor(ctx: LetLHSContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStructUnpackLHS) {
			listener.enterStructUnpackLHS(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStructUnpackLHS) {
			listener.exitStructUnpackLHS(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStructUnpackLHS) {
			return visitor.visitStructUnpackLHS(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignStmt_Context extends ParserRuleContext {
	public _lhs!: AssignLHSContext;
	public _assignOp!: Token;
	public _rhs!: ExprContext;
	public assignLHS(): AssignLHSContext {
		return this.getRuleContext(0, AssignLHSContext);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ, 0); }
	public PLUS_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.PLUS_EQ, 0); }
	public MINUS_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MINUS_EQ, 0); }
	public MUL_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MUL_EQ, 0); }
	public DIV_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.DIV_EQ, 0); }
	public MOD_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MOD_EQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_assignStmt_; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterAssignStmt_) {
			listener.enterAssignStmt_(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitAssignStmt_) {
			listener.exitAssignStmt_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitAssignStmt_) {
			return visitor.visitAssignStmt_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignLHSContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_assignLHS; }
	public copyFrom(ctx: AssignLHSContext): void {
		super.copyFrom(ctx);
	}
}
export class StateItemAssignLHSContext extends AssignLHSContext {
	public _key!: IdentContext;
	public _inner!: InnerAssignContext;
	public STATE(): TerminalNode { return this.getToken(CWScriptParser.STATE, 0); }
	public DOT(): TerminalNode { return this.getToken(CWScriptParser.DOT, 0); }
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	public innerAssign(): InnerAssignContext | undefined {
		return this.tryGetRuleContext(0, InnerAssignContext);
	}
	constructor(ctx: AssignLHSContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStateItemAssignLHS) {
			listener.enterStateItemAssignLHS(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStateItemAssignLHS) {
			listener.exitStateItemAssignLHS(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStateItemAssignLHS) {
			return visitor.visitStateItemAssignLHS(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StateMapAssignLHSContext extends AssignLHSContext {
	public _key!: IdentContext;
	public _expr!: ExprContext;
	public _mapKeys: ExprContext[] = [];
	public _inner!: InnerAssignContext;
	public STATE(): TerminalNode { return this.getToken(CWScriptParser.STATE, 0); }
	public DOT(): TerminalNode { return this.getToken(CWScriptParser.DOT, 0); }
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	public innerAssign(): InnerAssignContext | undefined {
		return this.tryGetRuleContext(0, InnerAssignContext);
	}
	constructor(ctx: AssignLHSContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStateMapAssignLHS) {
			listener.enterStateMapAssignLHS(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStateMapAssignLHS) {
			listener.exitStateMapAssignLHS(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStateMapAssignLHS) {
			return visitor.visitStateMapAssignLHS(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentAssignLHSContext extends AssignLHSContext {
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	constructor(ctx: AssignLHSContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIdentAssignLHS) {
			listener.enterIdentAssignLHS(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIdentAssignLHS) {
			listener.exitIdentAssignLHS(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIdentAssignLHS) {
			return visitor.visitIdentAssignLHS(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MemberAssignLHSContext extends AssignLHSContext {
	public _obj!: ExprContext;
	public _member!: IdentContext;
	public DOT(): TerminalNode { return this.getToken(CWScriptParser.DOT, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	constructor(ctx: AssignLHSContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterMemberAssignLHS) {
			listener.enterMemberAssignLHS(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitMemberAssignLHS) {
			listener.exitMemberAssignLHS(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitMemberAssignLHS) {
			return visitor.visitMemberAssignLHS(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TableAssignLHSContext extends AssignLHSContext {
	public _table!: ExprContext;
	public _key!: ExprContext;
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: AssignLHSContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTableAssignLHS) {
			listener.enterTableAssignLHS(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTableAssignLHS) {
			listener.exitTableAssignLHS(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTableAssignLHS) {
			return visitor.visitTableAssignLHS(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InnerAssignContext extends ParserRuleContext {
	public _innerPath!: InnerPathContext;
	public _paths: InnerPathContext[] = [];
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.DOT);
		} else {
			return this.getToken(CWScriptParser.DOT, i);
		}
	}
	public innerPath(): InnerPathContext[];
	public innerPath(i: number): InnerPathContext;
	public innerPath(i?: number): InnerPathContext | InnerPathContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InnerPathContext);
		} else {
			return this.getRuleContext(i, InnerPathContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_innerAssign; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterInnerAssign) {
			listener.enterInnerAssign(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitInnerAssign) {
			listener.exitInnerAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitInnerAssign) {
			return visitor.visitInnerAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InnerPathContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _tableKey!: ExprContext;
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RBRACK, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_innerPath; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterInnerPath) {
			listener.enterInnerPath(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitInnerPath) {
			listener.exitInnerPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitInnerPath) {
			return visitor.visitInnerPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MsgContext extends ParserRuleContext {
	public HASH(): TerminalNode { return this.getToken(CWScriptParser.HASH, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public DOT(): TerminalNode { return this.getToken(CWScriptParser.DOT, 0); }
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public exprList(): ExprListContext {
		return this.getRuleContext(0, ExprListContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_msg; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterMsg) {
			listener.enterMsg(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitMsg) {
			listener.exitMsg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitMsg) {
			return visitor.visitMsg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class GroupedExprContext extends ExprContext {
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterGroupedExpr) {
			listener.enterGroupedExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitGroupedExpr) {
			listener.exitGroupedExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitGroupedExpr) {
			return visitor.visitGroupedExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StateItemAccessExprContext extends ExprContext {
	public _key!: IdentContext;
	public STATE(): TerminalNode { return this.getToken(CWScriptParser.STATE, 0); }
	public DOT(): TerminalNode { return this.getToken(CWScriptParser.DOT, 0); }
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStateItemAccessExpr) {
			listener.enterStateItemAccessExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStateItemAccessExpr) {
			listener.exitStateItemAccessExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStateItemAccessExpr) {
			return visitor.visitStateItemAccessExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StateMapAccessExprContext extends ExprContext {
	public _key!: IdentContext;
	public _expr!: ExprContext;
	public _mapKeys: ExprContext[] = [];
	public STATE(): TerminalNode { return this.getToken(CWScriptParser.STATE, 0); }
	public DOT(): TerminalNode { return this.getToken(CWScriptParser.DOT, 0); }
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStateMapAccessExpr) {
			listener.enterStateMapAccessExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStateMapAccessExpr) {
			listener.exitStateMapAccessExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStateMapAccessExpr) {
			return visitor.visitStateMapAccessExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MemberAccessExprContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public DOT(): TerminalNode { return this.getToken(CWScriptParser.DOT, 0); }
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterMemberAccessExpr) {
			listener.enterMemberAccessExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitMemberAccessExpr) {
			listener.exitMemberAccessExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitMemberAccessExpr) {
			return visitor.visitMemberAccessExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TableLookupExprContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public COMMA(): TerminalNode { return this.getToken(CWScriptParser.COMMA, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTableLookupExpr) {
			listener.enterTableLookupExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTableLookupExpr) {
			listener.exitTableLookupExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTableLookupExpr) {
			return visitor.visitTableLookupExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PosArgsFnCallExprContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public exprList(): ExprListContext | undefined {
		return this.tryGetRuleContext(0, ExprListContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterPosArgsFnCallExpr) {
			listener.enterPosArgsFnCallExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitPosArgsFnCallExpr) {
			listener.exitPosArgsFnCallExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitPosArgsFnCallExpr) {
			return visitor.visitPosArgsFnCallExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NamedArgsFnCallExprContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public namedExprList(): NamedExprListContext | undefined {
		return this.tryGetRuleContext(0, NamedExprListContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterNamedArgsFnCallExpr) {
			listener.enterNamedArgsFnCallExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitNamedArgsFnCallExpr) {
			listener.exitNamedArgsFnCallExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitNamedArgsFnCallExpr) {
			return visitor.visitNamedArgsFnCallExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StructExprContext extends ExprContext {
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public namedExprList(): NamedExprListContext | undefined {
		return this.tryGetRuleContext(0, NamedExprListContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStructExpr) {
			listener.enterStructExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStructExpr) {
			listener.exitStructExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStructExpr) {
			return visitor.visitStructExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryExprContext extends ExprContext {
	public _op!: Token;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MINUS, 0); }
	public EXCLAM(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXCLAM, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterUnaryExpr) {
			listener.enterUnaryExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitUnaryExpr) {
			listener.exitUnaryExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitUnaryExpr) {
			return visitor.visitUnaryExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpExprContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public POW(): TerminalNode { return this.getToken(CWScriptParser.POW, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterExpExpr) {
			listener.enterExpExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitExpExpr) {
			listener.exitExpExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitExpExpr) {
			return visitor.visitExpExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultDivModExprContext extends ExprContext {
	public _op!: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MOD, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterMultDivModExpr) {
			listener.enterMultDivModExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitMultDivModExpr) {
			listener.exitMultDivModExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitMultDivModExpr) {
			return visitor.visitMultDivModExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddSubExprContext extends ExprContext {
	public _op!: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MINUS, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterAddSubExpr) {
			listener.enterAddSubExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitAddSubExpr) {
			listener.exitAddSubExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitAddSubExpr) {
			return visitor.visitAddSubExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CompExprContext extends ExprContext {
	public _op!: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public LT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.GT, 0); }
	public LT_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LT_EQ, 0); }
	public GT_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.GT_EQ, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterCompExpr) {
			listener.enterCompExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitCompExpr) {
			listener.exitCompExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitCompExpr) {
			return visitor.visitCompExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqExprContext extends ExprContext {
	public _op!: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public EQEQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQEQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.NEQ, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEqExpr) {
			listener.enterEqExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEqExpr) {
			listener.exitEqExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEqExpr) {
			return visitor.visitEqExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AndExprContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public AND(): TerminalNode { return this.getToken(CWScriptParser.AND, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterAndExpr) {
			listener.enterAndExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitAndExpr) {
			listener.exitAndExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitAndExpr) {
			return visitor.visitAndExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrExprContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public OR(): TerminalNode { return this.getToken(CWScriptParser.OR, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterOrExpr) {
			listener.enterOrExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitOrExpr) {
			listener.exitOrExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitOrExpr) {
			return visitor.visitOrExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfExprContext extends ExprContext {
	public ifExpr_(): IfExpr_Context {
		return this.getRuleContext(0, IfExpr_Context);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIfExpr) {
			listener.enterIfExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIfExpr) {
			listener.exitIfExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIfExpr) {
			return visitor.visitIfExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QueryExprContext extends ExprContext {
	public QUERY(): TerminalNode { return this.getToken(CWScriptParser.QUERY, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterQueryExpr) {
			listener.enterQueryExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitQueryExpr) {
			listener.exitQueryExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitQueryExpr) {
			return visitor.visitQueryExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ValExprContext extends ExprContext {
	public val(): ValContext {
		return this.getRuleContext(0, ValContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterValExpr) {
			listener.enterValExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitValExpr) {
			listener.exitValExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitValExpr) {
			return visitor.visitValExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ContrExprContext extends ExprContext {
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	public AT(): TerminalNode { return this.getToken(CWScriptParser.AT, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterContrExpr) {
			listener.enterContrExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitContrExpr) {
			listener.exitContrExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitContrExpr) {
			return visitor.visitContrExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_val; }
	public copyFrom(ctx: ValContext): void {
		super.copyFrom(ctx);
	}
}
export class UnitValContext extends ValContext {
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	constructor(ctx: ValContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterUnitVal) {
			listener.enterUnitVal(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitUnitVal) {
			listener.exitUnitVal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitUnitVal) {
			return visitor.visitUnitVal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StructValContext extends ValContext {
	public structVal_(): StructVal_Context {
		return this.getRuleContext(0, StructVal_Context);
	}
	constructor(ctx: ValContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStructVal) {
			listener.enterStructVal(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStructVal) {
			listener.exitStructVal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStructVal) {
			return visitor.visitStructVal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TupleValContext extends ValContext {
	public _tupleType!: TypePathContext;
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public exprList(): ExprListContext {
		return this.getRuleContext(0, ExprListContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public typePath(): TypePathContext {
		return this.getRuleContext(0, TypePathContext);
	}
	constructor(ctx: ValContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTupleVal) {
			listener.enterTupleVal(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTupleVal) {
			listener.exitTupleVal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTupleVal) {
			return visitor.visitTupleVal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VecValContext extends ValContext {
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public exprList(): ExprListContext {
		return this.getRuleContext(0, ExprListContext);
	}
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	constructor(ctx: ValContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterVecVal) {
			listener.enterVecVal(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitVecVal) {
			listener.exitVecVal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitVecVal) {
			return visitor.visitVecVal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringValContext extends ValContext {
	public StringLiteral(): TerminalNode { return this.getToken(CWScriptParser.StringLiteral, 0); }
	constructor(ctx: ValContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStringVal) {
			listener.enterStringVal(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStringVal) {
			listener.exitStringVal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStringVal) {
			return visitor.visitStringVal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntegerValContext extends ValContext {
	public IntegerLiteral(): TerminalNode { return this.getToken(CWScriptParser.IntegerLiteral, 0); }
	constructor(ctx: ValContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIntegerVal) {
			listener.enterIntegerVal(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIntegerVal) {
			listener.exitIntegerVal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIntegerVal) {
			return visitor.visitIntegerVal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DecimalValContext extends ValContext {
	public DecimalLiteral(): TerminalNode { return this.getToken(CWScriptParser.DecimalLiteral, 0); }
	constructor(ctx: ValContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterDecimalVal) {
			listener.enterDecimalVal(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitDecimalVal) {
			listener.exitDecimalVal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitDecimalVal) {
			return visitor.visitDecimalVal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TrueValContext extends ValContext {
	public TRUE(): TerminalNode { return this.getToken(CWScriptParser.TRUE, 0); }
	constructor(ctx: ValContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTrueVal) {
			listener.enterTrueVal(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTrueVal) {
			listener.exitTrueVal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTrueVal) {
			return visitor.visitTrueVal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FalseValContext extends ValContext {
	public FALSE(): TerminalNode { return this.getToken(CWScriptParser.FALSE, 0); }
	constructor(ctx: ValContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterFalseVal) {
			listener.enterFalseVal(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitFalseVal) {
			listener.exitFalseVal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitFalseVal) {
			return visitor.visitFalseVal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentValContext extends ValContext {
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	constructor(ctx: ValContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIdentVal) {
			listener.enterIdentVal(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIdentVal) {
			listener.exitIdentVal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIdentVal) {
			return visitor.visitIdentVal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructVal_Context extends ParserRuleContext {
	public _structType!: TypePathContext;
	public _members!: StructValMembersContext;
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public typePath(): TypePathContext | undefined {
		return this.tryGetRuleContext(0, TypePathContext);
	}
	public structValMembers(): StructValMembersContext | undefined {
		return this.tryGetRuleContext(0, StructValMembersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_structVal_; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStructVal_) {
			listener.enterStructVal_(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStructVal_) {
			listener.exitStructVal_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStructVal_) {
			return visitor.visitStructVal_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructValMembersContext extends ParserRuleContext {
	public structValMember(): StructValMemberContext[];
	public structValMember(i: number): StructValMemberContext;
	public structValMember(i?: number): StructValMemberContext | StructValMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructValMemberContext);
		} else {
			return this.getRuleContext(i, StructValMemberContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_structValMembers; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStructValMembers) {
			listener.enterStructValMembers(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStructValMembers) {
			listener.exitStructValMembers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStructValMembers) {
			return visitor.visitStructValMembers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructValMemberContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _value!: ExprContext;
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.COLON, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_structValMember; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStructValMember) {
			listener.enterStructValMember(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStructValMember) {
			listener.exitStructValMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStructValMember) {
			return visitor.visitStructValMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfExpr_Context extends ParserRuleContext {
	public ifClause_(): IfClause_Context {
		return this.getRuleContext(0, IfClause_Context);
	}
	public elseIfClauses(): ElseIfClausesContext | undefined {
		return this.tryGetRuleContext(0, ElseIfClausesContext);
	}
	public elseClause(): ElseClauseContext | undefined {
		return this.tryGetRuleContext(0, ElseClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_ifExpr_; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIfExpr_) {
			listener.enterIfExpr_(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIfExpr_) {
			listener.exitIfExpr_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIfExpr_) {
			return visitor.visitIfExpr_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfClause_Context extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_ifClause_; }
	public copyFrom(ctx: IfClause_Context): void {
		super.copyFrom(ctx);
	}
}
export class IfClauseContext extends IfClause_Context {
	public _predicate!: ExprContext;
	public IF(): TerminalNode { return this.getToken(CWScriptParser.IF, 0); }
	public fnBody(): FnBodyContext {
		return this.getRuleContext(0, FnBodyContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: IfClause_Context) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIfClause) {
			listener.enterIfClause(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIfClause) {
			listener.exitIfClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIfClause) {
			return visitor.visitIfClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfLetClauseContext extends IfClause_Context {
	public IF(): TerminalNode { return this.getToken(CWScriptParser.IF, 0); }
	public letStmt_(): LetStmt_Context {
		return this.getRuleContext(0, LetStmt_Context);
	}
	public fnBody(): FnBodyContext {
		return this.getRuleContext(0, FnBodyContext);
	}
	constructor(ctx: IfClause_Context) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIfLetClause) {
			listener.enterIfLetClause(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIfLetClause) {
			listener.exitIfLetClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIfLetClause) {
			return visitor.visitIfLetClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseIfClausesContext extends ParserRuleContext {
	public ELSE(): TerminalNode[];
	public ELSE(i: number): TerminalNode;
	public ELSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.ELSE);
		} else {
			return this.getToken(CWScriptParser.ELSE, i);
		}
	}
	public ifClause_(): IfClause_Context[];
	public ifClause_(i: number): IfClause_Context;
	public ifClause_(i?: number): IfClause_Context | IfClause_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(IfClause_Context);
		} else {
			return this.getRuleContext(i, IfClause_Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_elseIfClauses; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterElseIfClauses) {
			listener.enterElseIfClauses(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitElseIfClauses) {
			listener.exitElseIfClauses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitElseIfClauses) {
			return visitor.visitElseIfClauses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseClauseContext extends ParserRuleContext {
	public ELSE(): TerminalNode { return this.getToken(CWScriptParser.ELSE, 0); }
	public fnBody(): FnBodyContext {
		return this.getRuleContext(0, FnBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_elseClause; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterElseClause) {
			listener.enterElseClause(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitElseClause) {
			listener.exitElseClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitElseClause) {
			return visitor.visitElseClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStmt_Context extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_forStmt_; }
	public copyFrom(ctx: ForStmt_Context): void {
		super.copyFrom(ctx);
	}
}
export class ForInStmtContext extends ForStmt_Context {
	public _item!: LetLHSContext;
	public _iterItems!: ExprContext;
	public FOR(): TerminalNode { return this.getToken(CWScriptParser.FOR, 0); }
	public IN(): TerminalNode { return this.getToken(CWScriptParser.IN, 0); }
	public fnBody(): FnBodyContext {
		return this.getRuleContext(0, FnBodyContext);
	}
	public letLHS(): LetLHSContext {
		return this.getRuleContext(0, LetLHSContext);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ForStmt_Context) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterForInStmt) {
			listener.enterForInStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitForInStmt) {
			listener.exitForInStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitForInStmt) {
			return visitor.visitForInStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForTimesStmtContext extends ForStmt_Context {
	public FOR(): TerminalNode { return this.getToken(CWScriptParser.FOR, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public TIMES(): TerminalNode { return this.getToken(CWScriptParser.TIMES, 0); }
	public fnBody(): FnBodyContext {
		return this.getRuleContext(0, FnBodyContext);
	}
	constructor(ctx: ForStmt_Context) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterForTimesStmt) {
			listener.enterForTimesStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitForTimesStmt) {
			listener.exitForTimesStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitForTimesStmt) {
			return visitor.visitForTimesStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentListContext extends ParserRuleContext {
	public _ident!: IdentContext;
	public _symbols: IdentContext[] = [];
	public ident(): IdentContext[];
	public ident(i: number): IdentContext;
	public ident(i?: number): IdentContext | IdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentContext);
		} else {
			return this.getRuleContext(i, IdentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_identList; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIdentList) {
			listener.enterIdentList(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIdentList) {
			listener.exitIdentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIdentList) {
			return visitor.visitIdentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprListContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_exprList; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterExprList) {
			listener.enterExprList(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitExprList) {
			listener.exitExprList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitExprList) {
			return visitor.visitExprList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedExprListContext extends ParserRuleContext {
	public namedExpr(): NamedExprContext[];
	public namedExpr(i: number): NamedExprContext;
	public namedExpr(i?: number): NamedExprContext | NamedExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedExprContext);
		} else {
			return this.getRuleContext(i, NamedExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_namedExprList; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterNamedExprList) {
			listener.enterNamedExprList(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitNamedExprList) {
			listener.exitNamedExprList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitNamedExprList) {
			return visitor.visitNamedExprList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedExprContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _value!: ExprContext;
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.COLON, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_namedExpr; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterNamedExpr) {
			listener.enterNamedExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitNamedExpr) {
			listener.exitNamedExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitNamedExpr) {
			return visitor.visitNamedExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentContext extends ParserRuleContext {
	public Ident(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.Ident, 0); }
	public reservedKeyword(): ReservedKeywordContext | undefined {
		return this.tryGetRuleContext(0, ReservedKeywordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_ident; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIdent) {
			listener.enterIdent(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIdent) {
			listener.exitIdent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIdent) {
			return visitor.visitIdent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CwspecContext extends ParserRuleContext {
	public CWSPEC_LINE_COMMENT(): TerminalNode[];
	public CWSPEC_LINE_COMMENT(i: number): TerminalNode;
	public CWSPEC_LINE_COMMENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.CWSPEC_LINE_COMMENT);
		} else {
			return this.getToken(CWScriptParser.CWSPEC_LINE_COMMENT, i);
		}
	}
	public CWSPEC_BLOCK_COMMENT(): TerminalNode[];
	public CWSPEC_BLOCK_COMMENT(i: number): TerminalNode;
	public CWSPEC_BLOCK_COMMENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.CWSPEC_BLOCK_COMMENT);
		} else {
			return this.getToken(CWScriptParser.CWSPEC_BLOCK_COMMENT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_cwspec; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterCwspec) {
			listener.enterCwspec(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitCwspec) {
			listener.exitCwspec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitCwspec) {
			return visitor.visitCwspec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReservedKeywordContext extends ParserRuleContext {
	public CONTRACT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.CONTRACT, 0); }
	public INTERFACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.INTERFACE, 0); }
	public IMPORT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.IMPORT, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.IMPLEMENTS, 0); }
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXTENDS, 0); }
	public ERROR(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ERROR, 0); }
	public EVENT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EVENT, 0); }
	public INSTANTIATE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.INSTANTIATE, 0); }
	public EXEC(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXEC, 0); }
	public QUERY(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.QUERY, 0); }
	public MIGRATE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MIGRATE, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.FOR, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.IN, 0); }
	public FROM(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.FROM, 0); }
	public STATE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.STATE, 0); }
	public TIMES(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.TIMES, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.IF, 0); }
	public FN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.FN, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ELSE, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.OR, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.FALSE, 0); }
	public LET(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LET, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RETURN, 0); }
	public STRUCT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.STRUCT, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ENUM, 0); }
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.TYPE, 0); }
	public EMIT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EMIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_reservedKeyword; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterReservedKeyword) {
			listener.enterReservedKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitReservedKeyword) {
			listener.exitReservedKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitReservedKeyword) {
			return visitor.visitReservedKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


