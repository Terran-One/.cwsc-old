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
	public static readonly IMPL = 5;
	public static readonly EXTENSION = 6;
	public static readonly REQUIRES = 7;
	public static readonly EXTENDS = 8;
	public static readonly ERROR = 9;
	public static readonly EVENT = 10;
	public static readonly INSTANTIATE = 11;
	public static readonly EXEC = 12;
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
	public static readonly LET = 26;
	public static readonly FAIL = 27;
	public static readonly RETURN = 28;
	public static readonly STRUCT = 29;
	public static readonly ENUM = 30;
	public static readonly TYPE = 31;
	public static readonly EMIT = 32;
	public static readonly AS = 33;
	public static readonly LPAREN = 34;
	public static readonly RPAREN = 35;
	public static readonly LBRACK = 36;
	public static readonly RBRACK = 37;
	public static readonly LBRACE = 38;
	public static readonly RBRACE = 39;
	public static readonly DOT = 40;
	public static readonly COMMA = 41;
	public static readonly QUEST = 42;
	public static readonly EXCLAM = 43;
	public static readonly COLON = 44;
	public static readonly D_COLON = 45;
	public static readonly DOLLAR = 46;
	public static readonly HASH = 47;
	public static readonly AT = 48;
	public static readonly AMP = 49;
	public static readonly ARROW = 50;
	public static readonly FAT_ARROW = 51;
	public static readonly S_QUOTE = 52;
	public static readonly D_QUOTE = 53;
	public static readonly EQ = 54;
	public static readonly EQEQ = 55;
	public static readonly NEQ = 56;
	public static readonly PLUS = 57;
	public static readonly PLUS_EQ = 58;
	public static readonly MINUS = 59;
	public static readonly MINUS_EQ = 60;
	public static readonly MUL = 61;
	public static readonly MUL_EQ = 62;
	public static readonly DIV = 63;
	public static readonly DIV_EQ = 64;
	public static readonly MOD = 65;
	public static readonly MOD_EQ = 66;
	public static readonly LT = 67;
	public static readonly LT_EQ = 68;
	public static readonly GT = 69;
	public static readonly GT_EQ = 70;
	public static readonly POW = 71;
	public static readonly Ident = 72;
	public static readonly StringLiteral = 73;
	public static readonly IntegerLiteral = 74;
	public static readonly DecimalLiteral = 75;
	public static readonly CWSPEC_LINE_COMMENT = 76;
	public static readonly CWSPEC_BLOCK_COMMENT = 77;
	public static readonly LINE_COMMENT = 78;
	public static readonly BLOCK_COMMENT = 79;
	public static readonly WS = 80;
	public static readonly RULE_sourceFile = 0;
	public static readonly RULE_topLevelStmt = 1;
	public static readonly RULE_contractDefn = 2;
	public static readonly RULE_interfaceList = 3;
	public static readonly RULE_interfaceVal = 4;
	public static readonly RULE_interfaceDefn = 5;
	public static readonly RULE_importStmt = 6;
	public static readonly RULE_importSymbolList = 7;
	public static readonly RULE_importSymbol = 8;
	public static readonly RULE_contractBody = 9;
	public static readonly RULE_interfaceBody = 10;
	public static readonly RULE_contractItem = 11;
	public static readonly RULE_interfaceItem = 12;
	public static readonly RULE_errorDefn = 13;
	public static readonly RULE_errorDefnBlock = 14;
	public static readonly RULE_errorDefnBlock_item = 15;
	public static readonly RULE_eventDefn = 16;
	public static readonly RULE_eventDefnBlock = 17;
	public static readonly RULE_eventDefnBlock_item = 18;
	public static readonly RULE_stateDefn = 19;
	public static readonly RULE_stateDefnBlock = 20;
	public static readonly RULE_stateDefnBlock_item = 21;
	public static readonly RULE_itemDefn = 22;
	public static readonly RULE_mapDefn = 23;
	public static readonly RULE_mapDefnKeys = 24;
	public static readonly RULE_mapDefnKey = 25;
	public static readonly RULE_instantiateDefn = 26;
	public static readonly RULE_instantiateDecl = 27;
	public static readonly RULE_execDefn = 28;
	public static readonly RULE_execDefnBlock = 29;
	public static readonly RULE_execDefnBlock_item = 30;
	public static readonly RULE_execDecl = 31;
	public static readonly RULE_execDeclBlock = 32;
	public static readonly RULE_execDeclBlock_item = 33;
	public static readonly RULE_queryDefn = 34;
	public static readonly RULE_queryDefnBlock = 35;
	public static readonly RULE_queryDefnBlock_item = 36;
	public static readonly RULE_queryDecl = 37;
	public static readonly RULE_queryDeclBlock = 38;
	public static readonly RULE_queryDeclBlock_item = 39;
	public static readonly RULE_migrateDefn = 40;
	public static readonly RULE_migrateDecl = 41;
	public static readonly RULE_enumVariant = 42;
	public static readonly RULE_enumVariant_struct = 43;
	public static readonly RULE_enumVariant_tuple = 44;
	public static readonly RULE_enumVariant_unit = 45;
	public static readonly RULE_tupleMembers = 46;
	public static readonly RULE_parenStructMembers = 47;
	public static readonly RULE_curlyStructMembers = 48;
	public static readonly RULE_structMember = 49;
	public static readonly RULE_typeExpr = 50;
	public static readonly RULE_typeParam = 51;
	public static readonly RULE_pathList = 52;
	public static readonly RULE_typePath = 53;
	public static readonly RULE_typeDefn = 54;
	public static readonly RULE_structDefn = 55;
	public static readonly RULE_enumDefn = 56;
	public static readonly RULE_enumVariantList = 57;
	public static readonly RULE_typeAliasDefn = 58;
	public static readonly RULE_namedFnDecl = 59;
	public static readonly RULE_namedFnDefn = 60;
	public static readonly RULE_fnType = 61;
	public static readonly RULE_fnArgs = 62;
	public static readonly RULE_fnArgList = 63;
	public static readonly RULE_fnArg = 64;
	public static readonly RULE_fnBody = 65;
	public static readonly RULE_stmt = 66;
	public static readonly RULE_letStmt_ = 67;
	public static readonly RULE_letLHS = 68;
	public static readonly RULE_expr = 69;
	public static readonly RULE_val = 70;
	public static readonly RULE_structVal_ = 71;
	public static readonly RULE_structValMembers = 72;
	public static readonly RULE_structValMember = 73;
	public static readonly RULE_ifExpr_ = 74;
	public static readonly RULE_ifClause_ = 75;
	public static readonly RULE_elseIfClauses = 76;
	public static readonly RULE_elseClause = 77;
	public static readonly RULE_forStmt_ = 78;
	public static readonly RULE_forItem = 79;
	public static readonly RULE_identList = 80;
	public static readonly RULE_exprList = 81;
	public static readonly RULE_namedExprList = 82;
	public static readonly RULE_namedExpr = 83;
	public static readonly RULE_ident = 84;
	public static readonly RULE_cwspec = 85;
	public static readonly RULE_reservedKeyword = 86;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceFile", "topLevelStmt", "contractDefn", "interfaceList", "interfaceVal", 
		"interfaceDefn", "importStmt", "importSymbolList", "importSymbol", "contractBody", 
		"interfaceBody", "contractItem", "interfaceItem", "errorDefn", "errorDefnBlock", 
		"errorDefnBlock_item", "eventDefn", "eventDefnBlock", "eventDefnBlock_item", 
		"stateDefn", "stateDefnBlock", "stateDefnBlock_item", "itemDefn", "mapDefn", 
		"mapDefnKeys", "mapDefnKey", "instantiateDefn", "instantiateDecl", "execDefn", 
		"execDefnBlock", "execDefnBlock_item", "execDecl", "execDeclBlock", "execDeclBlock_item", 
		"queryDefn", "queryDefnBlock", "queryDefnBlock_item", "queryDecl", "queryDeclBlock", 
		"queryDeclBlock_item", "migrateDefn", "migrateDecl", "enumVariant", "enumVariant_struct", 
		"enumVariant_tuple", "enumVariant_unit", "tupleMembers", "parenStructMembers", 
		"curlyStructMembers", "structMember", "typeExpr", "typeParam", "pathList", 
		"typePath", "typeDefn", "structDefn", "enumDefn", "enumVariantList", "typeAliasDefn", 
		"namedFnDecl", "namedFnDefn", "fnType", "fnArgs", "fnArgList", "fnArg", 
		"fnBody", "stmt", "letStmt_", "letLHS", "expr", "val", "structVal_", "structValMembers", 
		"structValMember", "ifExpr_", "ifClause_", "elseIfClauses", "elseClause", 
		"forStmt_", "forItem", "identList", "exprList", "namedExprList", "namedExpr", 
		"ident", "cwspec", "reservedKeyword",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'contract'", "'interface'", "'import'", "'implements'", "'impl'", 
		"'extension'", "'requires'", "'extends'", "'error'", "'event'", "'instantiate'", 
		"'exec'", "'query'", "'migrate'", "'for'", "'in'", "'from'", "'state'", 
		"'times'", "'if'", "'else'", "'and'", "'or'", "'true'", "'false'", "'let'", 
		"'fail'", "'return'", "'struct'", "'enum'", "'type'", "'emit'", "'as'", 
		"'('", "')'", "'['", "']'", "'{'", "'}'", "'.'", "','", "'?'", "'!'", 
		"':'", "'::'", "'$'", "'#'", "'@'", "'&'", "'->'", "'=>'", "'''", "'\"'", 
		"'='", "'=='", "'!='", "'+'", "'+='", "'-'", "'-='", "'*'", "'*='", "'/'", 
		"'/='", "'%'", "'%='", "'<'", "'<='", "'>'", "'>='", "'**'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "CONTRACT", "INTERFACE", "IMPORT", "IMPLEMENTS", "IMPL", "EXTENSION", 
		"REQUIRES", "EXTENDS", "ERROR", "EVENT", "INSTANTIATE", "EXEC", "QUERY", 
		"MIGRATE", "FOR", "IN", "FROM", "STATE", "TIMES", "IF", "ELSE", "AND", 
		"OR", "TRUE", "FALSE", "LET", "FAIL", "RETURN", "STRUCT", "ENUM", "TYPE", 
		"EMIT", "AS", "LPAREN", "RPAREN", "LBRACK", "RBRACK", "LBRACE", "RBRACE", 
		"DOT", "COMMA", "QUEST", "EXCLAM", "COLON", "D_COLON", "DOLLAR", "HASH", 
		"AT", "AMP", "ARROW", "FAT_ARROW", "S_QUOTE", "D_QUOTE", "EQ", "EQEQ", 
		"NEQ", "PLUS", "PLUS_EQ", "MINUS", "MINUS_EQ", "MUL", "MUL_EQ", "DIV", 
		"DIV_EQ", "MOD", "MOD_EQ", "LT", "LT_EQ", "GT", "GT_EQ", "POW", "Ident", 
		"StringLiteral", "IntegerLiteral", "DecimalLiteral", "CWSPEC_LINE_COMMENT", 
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
			this.state = 175;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 174;
				_localctx._spec = this.cwspec();
				}
				break;
			}
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT))) !== 0) || _la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				{
				this.state = 177;
				this.topLevelStmt();
				}
				}
				this.state = 182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 183;
			this.match(CWScriptParser.EOF);
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
			this.state = 188;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 185;
				this.contractDefn();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 186;
				this.interfaceDefn();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 187;
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
			this.state = 191;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 190;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 193;
			this.match(CWScriptParser.CONTRACT);
			{
			this.state = 194;
			_localctx._name = this.ident();
			}
			this.state = 197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXTENDS) {
				{
				this.state = 195;
				this.match(CWScriptParser.EXTENDS);
				this.state = 196;
				_localctx._parents = this.identList();
				}
			}

			this.state = 201;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.IMPLEMENTS) {
				{
				this.state = 199;
				this.match(CWScriptParser.IMPLEMENTS);
				{
				this.state = 200;
				_localctx._interfaces = this.interfaceList();
				}
				}
			}

			this.state = 203;
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
	public interfaceList(): InterfaceListContext {
		let _localctx: InterfaceListContext = new InterfaceListContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CWScriptParser.RULE_interfaceList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 205;
			this.interfaceVal();
			this.state = 210;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 206;
				this.match(CWScriptParser.COMMA);
				this.state = 207;
				this.interfaceVal();
				}
				}
				this.state = 212;
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
	public interfaceVal(): InterfaceValContext {
		let _localctx: InterfaceValContext = new InterfaceValContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CWScriptParser.RULE_interfaceVal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 213;
			_localctx._interfaceName = this.ident();
			}
			this.state = 218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.LBRACK) {
				{
				this.state = 214;
				this.match(CWScriptParser.LBRACK);
				this.state = 215;
				_localctx._mixins = this.identList();
				this.state = 216;
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
	public interfaceDefn(): InterfaceDefnContext {
		let _localctx: InterfaceDefnContext = new InterfaceDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CWScriptParser.RULE_interfaceDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 221;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 220;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 223;
			this.match(CWScriptParser.INTERFACE);
			{
			this.state = 224;
			_localctx._name = this.ident();
			}
			this.state = 229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.LBRACK) {
				{
				this.state = 225;
				this.match(CWScriptParser.LBRACK);
				this.state = 226;
				_localctx._mixinName = this.ident();
				this.state = 227;
				this.match(CWScriptParser.RBRACK);
				}
			}

			this.state = 233;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXTENDS) {
				{
				this.state = 231;
				this.match(CWScriptParser.EXTENDS);
				this.state = 232;
				_localctx._parents = this.interfaceList();
				}
			}

			this.state = 235;
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
		this.enterRule(_localctx, 12, CWScriptParser.RULE_importStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 237;
			this.match(CWScriptParser.IMPORT);
			this.state = 240;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				{
				this.state = 238;
				_localctx._symbols = this.importSymbolList();
				}
				}
				break;

			case 2:
				{
				{
				this.state = 239;
				_localctx._star = this.match(CWScriptParser.MUL);
				}
				}
				break;
			}
			this.state = 242;
			this.match(CWScriptParser.FROM);
			{
			this.state = 243;
			_localctx._fileName = this.match(CWScriptParser.StringLiteral);
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
	public importSymbolList(): ImportSymbolListContext {
		let _localctx: ImportSymbolListContext = new ImportSymbolListContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CWScriptParser.RULE_importSymbolList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 245;
			_localctx._importSymbol = this.importSymbol(0);
			_localctx._importItem.push(_localctx._importSymbol);
			}
			this.state = 250;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 246;
				this.match(CWScriptParser.COMMA);
				{
				this.state = 247;
				_localctx._importSymbol = this.importSymbol(0);
				_localctx._importItem.push(_localctx._importSymbol);
				}
				}
				}
				this.state = 252;
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

	public importSymbol(): ImportSymbolContext;
	public importSymbol(_p: number): ImportSymbolContext;
	// @RuleVersion(0)
	public importSymbol(_p?: number): ImportSymbolContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ImportSymbolContext = new ImportSymbolContext(this._ctx, _parentState);
		let _prevctx: ImportSymbolContext = _localctx;
		let _startState: number = 16;
		this.enterRecursionRule(_localctx, 16, CWScriptParser.RULE_importSymbol, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 269;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				_localctx = new GroupedImportSymbolContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 254;
				this.match(CWScriptParser.LPAREN);
				this.state = 255;
				this.importSymbolList();
				this.state = 256;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 2:
				{
				_localctx = new TypePathImportSymbolContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 258;
				this.typePath();
				}
				break;

			case 3:
				{
				_localctx = new DestructureImportSymbolContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 259;
				this.typePath();
				this.state = 260;
				this.match(CWScriptParser.D_COLON);
				this.state = 261;
				this.match(CWScriptParser.LBRACE);
				this.state = 262;
				this.importSymbolList();
				this.state = 263;
				this.match(CWScriptParser.RBRACE);
				}
				break;

			case 4:
				{
				_localctx = new AllImportSymbolContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 265;
				this.typePath();
				this.state = 266;
				this.match(CWScriptParser.D_COLON);
				this.state = 267;
				this.match(CWScriptParser.MUL);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 276;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new RenamedImportSymbolContext(new ImportSymbolContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_importSymbol);
					this.state = 271;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 272;
					this.match(CWScriptParser.AS);
					this.state = 273;
					this.ident();
					}
					}
				}
				this.state = 278;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
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
	public contractBody(): ContractBodyContext {
		let _localctx: ContractBodyContext = new ContractBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CWScriptParser.RULE_contractBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 279;
			this.match(CWScriptParser.LBRACE);
			this.state = 283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.MIGRATE) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.STRUCT) | (1 << CWScriptParser.ENUM) | (1 << CWScriptParser.TYPE))) !== 0) || _la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				{
				this.state = 280;
				_localctx._items = this.contractItem();
				}
				}
				this.state = 285;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 286;
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
		this.enterRule(_localctx, 20, CWScriptParser.RULE_interfaceBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 288;
			this.match(CWScriptParser.LBRACE);
			this.state = 292;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.MIGRATE) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.STRUCT) | (1 << CWScriptParser.ENUM) | (1 << CWScriptParser.TYPE))) !== 0) || _la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				{
				this.state = 289;
				_localctx._items = this.interfaceItem();
				}
				}
				this.state = 294;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 295;
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
		this.enterRule(_localctx, 22, CWScriptParser.RULE_contractItem);
		try {
			this.state = 310;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 297;
				this.typeDefn();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 298;
				this.errorDefn();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 299;
				this.errorDefnBlock();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 300;
				this.eventDefn();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 301;
				this.eventDefnBlock();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 302;
				this.stateDefn();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 303;
				this.stateDefnBlock();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 304;
				this.instantiateDefn();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 305;
				this.execDefn();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 306;
				this.execDefnBlock();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 307;
				this.queryDefn();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 308;
				this.queryDefnBlock();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 309;
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
		this.enterRule(_localctx, 24, CWScriptParser.RULE_interfaceItem);
		try {
			this.state = 325;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 312;
				this.typeDefn();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 313;
				this.errorDefn();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 314;
				this.errorDefnBlock();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 315;
				this.eventDefn();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 316;
				this.eventDefnBlock();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 317;
				this.stateDefn();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 318;
				this.stateDefnBlock();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 319;
				this.instantiateDecl();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 320;
				this.execDecl();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 321;
				this.execDeclBlock();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 322;
				this.queryDecl();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 323;
				this.queryDeclBlock();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 324;
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
		this.enterRule(_localctx, 26, CWScriptParser.RULE_errorDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 328;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 327;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 330;
			this.match(CWScriptParser.ERROR);
			this.state = 331;
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
	public errorDefnBlock(): ErrorDefnBlockContext {
		let _localctx: ErrorDefnBlockContext = new ErrorDefnBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CWScriptParser.RULE_errorDefnBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			this.match(CWScriptParser.ERROR);
			this.state = 334;
			this.match(CWScriptParser.LBRACE);
			this.state = 338;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & ((1 << (CWScriptParser.CONTRACT - 1)) | (1 << (CWScriptParser.INTERFACE - 1)) | (1 << (CWScriptParser.IMPORT - 1)) | (1 << (CWScriptParser.IMPLEMENTS - 1)) | (1 << (CWScriptParser.EXTENDS - 1)) | (1 << (CWScriptParser.ERROR - 1)) | (1 << (CWScriptParser.EVENT - 1)) | (1 << (CWScriptParser.INSTANTIATE - 1)) | (1 << (CWScriptParser.EXEC - 1)) | (1 << (CWScriptParser.QUERY - 1)) | (1 << (CWScriptParser.MIGRATE - 1)) | (1 << (CWScriptParser.FOR - 1)) | (1 << (CWScriptParser.IN - 1)) | (1 << (CWScriptParser.FROM - 1)) | (1 << (CWScriptParser.STATE - 1)) | (1 << (CWScriptParser.TIMES - 1)) | (1 << (CWScriptParser.IF - 1)) | (1 << (CWScriptParser.ELSE - 1)) | (1 << (CWScriptParser.AND - 1)) | (1 << (CWScriptParser.OR - 1)) | (1 << (CWScriptParser.TRUE - 1)) | (1 << (CWScriptParser.FALSE - 1)) | (1 << (CWScriptParser.LET - 1)) | (1 << (CWScriptParser.RETURN - 1)) | (1 << (CWScriptParser.STRUCT - 1)) | (1 << (CWScriptParser.ENUM - 1)) | (1 << (CWScriptParser.TYPE - 1)) | (1 << (CWScriptParser.EMIT - 1)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (CWScriptParser.Ident - 72)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 72)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 72)))) !== 0)) {
				{
				{
				this.state = 335;
				this.errorDefnBlock_item();
				}
				}
				this.state = 340;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 341;
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
		this.enterRule(_localctx, 30, CWScriptParser.RULE_errorDefnBlock_item);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 344;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 343;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 346;
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
	public eventDefn(): EventDefnContext {
		let _localctx: EventDefnContext = new EventDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CWScriptParser.RULE_eventDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 349;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 348;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 351;
			this.match(CWScriptParser.EVENT);
			this.state = 352;
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
	public eventDefnBlock(): EventDefnBlockContext {
		let _localctx: EventDefnBlockContext = new EventDefnBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CWScriptParser.RULE_eventDefnBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 354;
			this.match(CWScriptParser.EVENT);
			this.state = 355;
			this.match(CWScriptParser.LBRACE);
			this.state = 359;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & ((1 << (CWScriptParser.CONTRACT - 1)) | (1 << (CWScriptParser.INTERFACE - 1)) | (1 << (CWScriptParser.IMPORT - 1)) | (1 << (CWScriptParser.IMPLEMENTS - 1)) | (1 << (CWScriptParser.EXTENDS - 1)) | (1 << (CWScriptParser.ERROR - 1)) | (1 << (CWScriptParser.EVENT - 1)) | (1 << (CWScriptParser.INSTANTIATE - 1)) | (1 << (CWScriptParser.EXEC - 1)) | (1 << (CWScriptParser.QUERY - 1)) | (1 << (CWScriptParser.MIGRATE - 1)) | (1 << (CWScriptParser.FOR - 1)) | (1 << (CWScriptParser.IN - 1)) | (1 << (CWScriptParser.FROM - 1)) | (1 << (CWScriptParser.STATE - 1)) | (1 << (CWScriptParser.TIMES - 1)) | (1 << (CWScriptParser.IF - 1)) | (1 << (CWScriptParser.ELSE - 1)) | (1 << (CWScriptParser.AND - 1)) | (1 << (CWScriptParser.OR - 1)) | (1 << (CWScriptParser.TRUE - 1)) | (1 << (CWScriptParser.FALSE - 1)) | (1 << (CWScriptParser.LET - 1)) | (1 << (CWScriptParser.RETURN - 1)) | (1 << (CWScriptParser.STRUCT - 1)) | (1 << (CWScriptParser.ENUM - 1)) | (1 << (CWScriptParser.TYPE - 1)) | (1 << (CWScriptParser.EMIT - 1)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (CWScriptParser.Ident - 72)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 72)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 72)))) !== 0)) {
				{
				{
				this.state = 356;
				this.eventDefnBlock_item();
				}
				}
				this.state = 361;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 362;
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
		this.enterRule(_localctx, 36, CWScriptParser.RULE_eventDefnBlock_item);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 365;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 364;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 367;
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
	public stateDefn(): StateDefnContext {
		let _localctx: StateDefnContext = new StateDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CWScriptParser.RULE_stateDefn);
		let _la: number;
		try {
			this.state = 379;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				_localctx = new StateItemDefnContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 370;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
					{
					this.state = 369;
					(_localctx as StateItemDefnContext)._spec = this.cwspec();
					}
				}

				this.state = 372;
				this.match(CWScriptParser.STATE);
				{
				this.state = 373;
				(_localctx as StateItemDefnContext)._item = this.itemDefn();
				}
				}
				break;

			case 2:
				_localctx = new StateMapDefnContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 375;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
					{
					this.state = 374;
					(_localctx as StateMapDefnContext)._spec = this.cwspec();
					}
				}

				this.state = 377;
				this.match(CWScriptParser.STATE);
				this.state = 378;
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
		this.enterRule(_localctx, 40, CWScriptParser.RULE_stateDefnBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 381;
			this.match(CWScriptParser.STATE);
			this.state = 382;
			this.match(CWScriptParser.LBRACE);
			this.state = 386;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & ((1 << (CWScriptParser.CONTRACT - 1)) | (1 << (CWScriptParser.INTERFACE - 1)) | (1 << (CWScriptParser.IMPORT - 1)) | (1 << (CWScriptParser.IMPLEMENTS - 1)) | (1 << (CWScriptParser.EXTENDS - 1)) | (1 << (CWScriptParser.ERROR - 1)) | (1 << (CWScriptParser.EVENT - 1)) | (1 << (CWScriptParser.INSTANTIATE - 1)) | (1 << (CWScriptParser.EXEC - 1)) | (1 << (CWScriptParser.QUERY - 1)) | (1 << (CWScriptParser.MIGRATE - 1)) | (1 << (CWScriptParser.FOR - 1)) | (1 << (CWScriptParser.IN - 1)) | (1 << (CWScriptParser.FROM - 1)) | (1 << (CWScriptParser.STATE - 1)) | (1 << (CWScriptParser.TIMES - 1)) | (1 << (CWScriptParser.IF - 1)) | (1 << (CWScriptParser.ELSE - 1)) | (1 << (CWScriptParser.AND - 1)) | (1 << (CWScriptParser.OR - 1)) | (1 << (CWScriptParser.TRUE - 1)) | (1 << (CWScriptParser.FALSE - 1)) | (1 << (CWScriptParser.LET - 1)) | (1 << (CWScriptParser.RETURN - 1)) | (1 << (CWScriptParser.STRUCT - 1)) | (1 << (CWScriptParser.ENUM - 1)) | (1 << (CWScriptParser.TYPE - 1)) | (1 << (CWScriptParser.EMIT - 1)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (CWScriptParser.Ident - 72)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 72)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 72)))) !== 0)) {
				{
				{
				this.state = 383;
				this.stateDefnBlock_item();
				}
				}
				this.state = 388;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 389;
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
		this.enterRule(_localctx, 42, CWScriptParser.RULE_stateDefnBlock_item);
		let _la: number;
		try {
			this.state = 399;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				_localctx = new StateBlockItemDefnContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 392;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
					{
					this.state = 391;
					(_localctx as StateBlockItemDefnContext)._spec = this.cwspec();
					}
				}

				{
				this.state = 394;
				(_localctx as StateBlockItemDefnContext)._item = this.itemDefn();
				}
				}
				break;

			case 2:
				_localctx = new StateBlockMapDefnContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 396;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
					{
					this.state = 395;
					(_localctx as StateBlockMapDefnContext)._spec = this.cwspec();
					}
				}

				{
				this.state = 398;
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
		this.enterRule(_localctx, 44, CWScriptParser.RULE_itemDefn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 401;
			_localctx._key = this.ident();
			}
			this.state = 402;
			this.match(CWScriptParser.COLON);
			{
			this.state = 403;
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
		this.enterRule(_localctx, 46, CWScriptParser.RULE_mapDefn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 405;
			_localctx._key = this.ident();
			}
			{
			this.state = 406;
			_localctx._mapKeys = this.mapDefnKeys();
			}
			this.state = 407;
			this.match(CWScriptParser.COLON);
			{
			this.state = 408;
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
		this.enterRule(_localctx, 48, CWScriptParser.RULE_mapDefnKeys);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 411;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 410;
				this.mapDefnKey();
				}
				}
				this.state = 413;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === CWScriptParser.LBRACK);
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
		this.enterRule(_localctx, 50, CWScriptParser.RULE_mapDefnKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 415;
			this.match(CWScriptParser.LBRACK);
			this.state = 419;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				this.state = 416;
				_localctx._keyName = this.ident();
				this.state = 417;
				this.match(CWScriptParser.COLON);
				}
				break;
			}
			{
			this.state = 421;
			_localctx._keyType = this.typeExpr(0);
			}
			this.state = 422;
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
	public instantiateDefn(): InstantiateDefnContext {
		let _localctx: InstantiateDefnContext = new InstantiateDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, CWScriptParser.RULE_instantiateDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 425;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 424;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 427;
			this.match(CWScriptParser.INSTANTIATE);
			this.state = 428;
			this.fnArgs();
			this.state = 430;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 429;
				this.fnType();
				}
			}

			this.state = 432;
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
		this.enterRule(_localctx, 54, CWScriptParser.RULE_instantiateDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 435;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 434;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 437;
			this.match(CWScriptParser.INSTANTIATE);
			this.state = 438;
			this.fnArgs();
			this.state = 440;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 439;
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
		this.enterRule(_localctx, 56, CWScriptParser.RULE_execDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 443;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 442;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 445;
			this.match(CWScriptParser.EXEC);
			this.state = 446;
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
		this.enterRule(_localctx, 58, CWScriptParser.RULE_execDefnBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 448;
			this.match(CWScriptParser.EXEC);
			this.state = 449;
			this.match(CWScriptParser.LBRACE);
			this.state = 453;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & ((1 << (CWScriptParser.CONTRACT - 1)) | (1 << (CWScriptParser.INTERFACE - 1)) | (1 << (CWScriptParser.IMPORT - 1)) | (1 << (CWScriptParser.IMPLEMENTS - 1)) | (1 << (CWScriptParser.EXTENDS - 1)) | (1 << (CWScriptParser.ERROR - 1)) | (1 << (CWScriptParser.EVENT - 1)) | (1 << (CWScriptParser.INSTANTIATE - 1)) | (1 << (CWScriptParser.EXEC - 1)) | (1 << (CWScriptParser.QUERY - 1)) | (1 << (CWScriptParser.MIGRATE - 1)) | (1 << (CWScriptParser.FOR - 1)) | (1 << (CWScriptParser.IN - 1)) | (1 << (CWScriptParser.FROM - 1)) | (1 << (CWScriptParser.STATE - 1)) | (1 << (CWScriptParser.TIMES - 1)) | (1 << (CWScriptParser.IF - 1)) | (1 << (CWScriptParser.ELSE - 1)) | (1 << (CWScriptParser.AND - 1)) | (1 << (CWScriptParser.OR - 1)) | (1 << (CWScriptParser.TRUE - 1)) | (1 << (CWScriptParser.FALSE - 1)) | (1 << (CWScriptParser.LET - 1)) | (1 << (CWScriptParser.RETURN - 1)) | (1 << (CWScriptParser.STRUCT - 1)) | (1 << (CWScriptParser.ENUM - 1)) | (1 << (CWScriptParser.TYPE - 1)) | (1 << (CWScriptParser.EMIT - 1)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (CWScriptParser.Ident - 72)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 72)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 72)))) !== 0)) {
				{
				{
				this.state = 450;
				this.execDefnBlock_item();
				}
				}
				this.state = 455;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 456;
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
		this.enterRule(_localctx, 60, CWScriptParser.RULE_execDefnBlock_item);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 459;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 458;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 461;
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
		this.enterRule(_localctx, 62, CWScriptParser.RULE_execDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 464;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 463;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 466;
			this.match(CWScriptParser.EXEC);
			this.state = 467;
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
		this.enterRule(_localctx, 64, CWScriptParser.RULE_execDeclBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 469;
			this.match(CWScriptParser.EXEC);
			this.state = 470;
			this.match(CWScriptParser.LBRACE);
			this.state = 474;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & ((1 << (CWScriptParser.CONTRACT - 1)) | (1 << (CWScriptParser.INTERFACE - 1)) | (1 << (CWScriptParser.IMPORT - 1)) | (1 << (CWScriptParser.IMPLEMENTS - 1)) | (1 << (CWScriptParser.EXTENDS - 1)) | (1 << (CWScriptParser.ERROR - 1)) | (1 << (CWScriptParser.EVENT - 1)) | (1 << (CWScriptParser.INSTANTIATE - 1)) | (1 << (CWScriptParser.EXEC - 1)) | (1 << (CWScriptParser.QUERY - 1)) | (1 << (CWScriptParser.MIGRATE - 1)) | (1 << (CWScriptParser.FOR - 1)) | (1 << (CWScriptParser.IN - 1)) | (1 << (CWScriptParser.FROM - 1)) | (1 << (CWScriptParser.STATE - 1)) | (1 << (CWScriptParser.TIMES - 1)) | (1 << (CWScriptParser.IF - 1)) | (1 << (CWScriptParser.ELSE - 1)) | (1 << (CWScriptParser.AND - 1)) | (1 << (CWScriptParser.OR - 1)) | (1 << (CWScriptParser.TRUE - 1)) | (1 << (CWScriptParser.FALSE - 1)) | (1 << (CWScriptParser.LET - 1)) | (1 << (CWScriptParser.RETURN - 1)) | (1 << (CWScriptParser.STRUCT - 1)) | (1 << (CWScriptParser.ENUM - 1)) | (1 << (CWScriptParser.TYPE - 1)) | (1 << (CWScriptParser.EMIT - 1)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (CWScriptParser.Ident - 72)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 72)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 72)))) !== 0)) {
				{
				{
				this.state = 471;
				this.execDeclBlock_item();
				}
				}
				this.state = 476;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 477;
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
		this.enterRule(_localctx, 66, CWScriptParser.RULE_execDeclBlock_item);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 480;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 479;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 482;
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
		this.enterRule(_localctx, 68, CWScriptParser.RULE_queryDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 485;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 484;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 487;
			this.match(CWScriptParser.QUERY);
			this.state = 488;
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
		this.enterRule(_localctx, 70, CWScriptParser.RULE_queryDefnBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 490;
			this.match(CWScriptParser.QUERY);
			this.state = 491;
			this.match(CWScriptParser.LBRACE);
			this.state = 495;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & ((1 << (CWScriptParser.CONTRACT - 1)) | (1 << (CWScriptParser.INTERFACE - 1)) | (1 << (CWScriptParser.IMPORT - 1)) | (1 << (CWScriptParser.IMPLEMENTS - 1)) | (1 << (CWScriptParser.EXTENDS - 1)) | (1 << (CWScriptParser.ERROR - 1)) | (1 << (CWScriptParser.EVENT - 1)) | (1 << (CWScriptParser.INSTANTIATE - 1)) | (1 << (CWScriptParser.EXEC - 1)) | (1 << (CWScriptParser.QUERY - 1)) | (1 << (CWScriptParser.MIGRATE - 1)) | (1 << (CWScriptParser.FOR - 1)) | (1 << (CWScriptParser.IN - 1)) | (1 << (CWScriptParser.FROM - 1)) | (1 << (CWScriptParser.STATE - 1)) | (1 << (CWScriptParser.TIMES - 1)) | (1 << (CWScriptParser.IF - 1)) | (1 << (CWScriptParser.ELSE - 1)) | (1 << (CWScriptParser.AND - 1)) | (1 << (CWScriptParser.OR - 1)) | (1 << (CWScriptParser.TRUE - 1)) | (1 << (CWScriptParser.FALSE - 1)) | (1 << (CWScriptParser.LET - 1)) | (1 << (CWScriptParser.RETURN - 1)) | (1 << (CWScriptParser.STRUCT - 1)) | (1 << (CWScriptParser.ENUM - 1)) | (1 << (CWScriptParser.TYPE - 1)) | (1 << (CWScriptParser.EMIT - 1)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (CWScriptParser.Ident - 72)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 72)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 72)))) !== 0)) {
				{
				{
				this.state = 492;
				this.queryDefnBlock_item();
				}
				}
				this.state = 497;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 498;
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
		this.enterRule(_localctx, 72, CWScriptParser.RULE_queryDefnBlock_item);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 501;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 500;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 503;
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
		this.enterRule(_localctx, 74, CWScriptParser.RULE_queryDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 506;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 505;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 508;
			this.match(CWScriptParser.QUERY);
			this.state = 509;
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
		this.enterRule(_localctx, 76, CWScriptParser.RULE_queryDeclBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 511;
			this.match(CWScriptParser.QUERY);
			this.state = 512;
			this.match(CWScriptParser.LBRACE);
			this.state = 516;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & ((1 << (CWScriptParser.CONTRACT - 1)) | (1 << (CWScriptParser.INTERFACE - 1)) | (1 << (CWScriptParser.IMPORT - 1)) | (1 << (CWScriptParser.IMPLEMENTS - 1)) | (1 << (CWScriptParser.EXTENDS - 1)) | (1 << (CWScriptParser.ERROR - 1)) | (1 << (CWScriptParser.EVENT - 1)) | (1 << (CWScriptParser.INSTANTIATE - 1)) | (1 << (CWScriptParser.EXEC - 1)) | (1 << (CWScriptParser.QUERY - 1)) | (1 << (CWScriptParser.MIGRATE - 1)) | (1 << (CWScriptParser.FOR - 1)) | (1 << (CWScriptParser.IN - 1)) | (1 << (CWScriptParser.FROM - 1)) | (1 << (CWScriptParser.STATE - 1)) | (1 << (CWScriptParser.TIMES - 1)) | (1 << (CWScriptParser.IF - 1)) | (1 << (CWScriptParser.ELSE - 1)) | (1 << (CWScriptParser.AND - 1)) | (1 << (CWScriptParser.OR - 1)) | (1 << (CWScriptParser.TRUE - 1)) | (1 << (CWScriptParser.FALSE - 1)) | (1 << (CWScriptParser.LET - 1)) | (1 << (CWScriptParser.RETURN - 1)) | (1 << (CWScriptParser.STRUCT - 1)) | (1 << (CWScriptParser.ENUM - 1)) | (1 << (CWScriptParser.TYPE - 1)) | (1 << (CWScriptParser.EMIT - 1)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (CWScriptParser.Ident - 72)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 72)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 72)))) !== 0)) {
				{
				{
				this.state = 513;
				this.queryDeclBlock_item();
				}
				}
				this.state = 518;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 519;
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
		this.enterRule(_localctx, 78, CWScriptParser.RULE_queryDeclBlock_item);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 522;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 521;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 524;
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
		this.enterRule(_localctx, 80, CWScriptParser.RULE_migrateDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 527;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 526;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 529;
			this.match(CWScriptParser.MIGRATE);
			this.state = 530;
			this.fnArgs();
			this.state = 532;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 531;
				this.fnType();
				}
			}

			this.state = 534;
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
		this.enterRule(_localctx, 82, CWScriptParser.RULE_migrateDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 537;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 536;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 539;
			this.match(CWScriptParser.MIGRATE);
			this.state = 540;
			this.fnArgs();
			this.state = 542;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 541;
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
		this.enterRule(_localctx, 84, CWScriptParser.RULE_enumVariant);
		try {
			this.state = 547;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 544;
				this.enumVariant_struct();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 545;
				this.enumVariant_tuple();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 546;
				this.enumVariant_unit();
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
		this.enterRule(_localctx, 86, CWScriptParser.RULE_enumVariant_struct);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 549;
			_localctx._name = this.ident();
			}
			this.state = 552;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.LPAREN:
				{
				this.state = 550;
				this.parenStructMembers();
				}
				break;
			case CWScriptParser.LBRACE:
				{
				this.state = 551;
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
		this.enterRule(_localctx, 88, CWScriptParser.RULE_enumVariant_tuple);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 554;
			_localctx._name = this.ident();
			}
			this.state = 555;
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
	public enumVariant_unit(): EnumVariant_unitContext {
		let _localctx: EnumVariant_unitContext = new EnumVariant_unitContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, CWScriptParser.RULE_enumVariant_unit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 557;
			_localctx._name = this.ident();
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
	public tupleMembers(): TupleMembersContext {
		let _localctx: TupleMembersContext = new TupleMembersContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, CWScriptParser.RULE_tupleMembers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 559;
			this.match(CWScriptParser.LPAREN);
			this.state = 560;
			this.typeExpr(0);
			this.state = 565;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 561;
				this.match(CWScriptParser.COMMA);
				this.state = 562;
				this.typeExpr(0);
				}
				}
				this.state = 567;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 568;
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
		this.enterRule(_localctx, 94, CWScriptParser.RULE_parenStructMembers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 570;
			this.match(CWScriptParser.LPAREN);
			this.state = 579;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & ((1 << (CWScriptParser.CONTRACT - 1)) | (1 << (CWScriptParser.INTERFACE - 1)) | (1 << (CWScriptParser.IMPORT - 1)) | (1 << (CWScriptParser.IMPLEMENTS - 1)) | (1 << (CWScriptParser.EXTENDS - 1)) | (1 << (CWScriptParser.ERROR - 1)) | (1 << (CWScriptParser.EVENT - 1)) | (1 << (CWScriptParser.INSTANTIATE - 1)) | (1 << (CWScriptParser.EXEC - 1)) | (1 << (CWScriptParser.QUERY - 1)) | (1 << (CWScriptParser.MIGRATE - 1)) | (1 << (CWScriptParser.FOR - 1)) | (1 << (CWScriptParser.IN - 1)) | (1 << (CWScriptParser.FROM - 1)) | (1 << (CWScriptParser.STATE - 1)) | (1 << (CWScriptParser.TIMES - 1)) | (1 << (CWScriptParser.IF - 1)) | (1 << (CWScriptParser.ELSE - 1)) | (1 << (CWScriptParser.AND - 1)) | (1 << (CWScriptParser.OR - 1)) | (1 << (CWScriptParser.TRUE - 1)) | (1 << (CWScriptParser.FALSE - 1)) | (1 << (CWScriptParser.LET - 1)) | (1 << (CWScriptParser.RETURN - 1)) | (1 << (CWScriptParser.STRUCT - 1)) | (1 << (CWScriptParser.ENUM - 1)) | (1 << (CWScriptParser.TYPE - 1)) | (1 << (CWScriptParser.EMIT - 1)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (CWScriptParser.Ident - 72)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 72)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 72)))) !== 0)) {
				{
				this.state = 571;
				this.structMember();
				this.state = 576;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 572;
					this.match(CWScriptParser.COMMA);
					this.state = 573;
					this.structMember();
					}
					}
					this.state = 578;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 581;
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
		this.enterRule(_localctx, 96, CWScriptParser.RULE_curlyStructMembers);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 583;
			this.match(CWScriptParser.LBRACE);
			this.state = 595;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & ((1 << (CWScriptParser.CONTRACT - 1)) | (1 << (CWScriptParser.INTERFACE - 1)) | (1 << (CWScriptParser.IMPORT - 1)) | (1 << (CWScriptParser.IMPLEMENTS - 1)) | (1 << (CWScriptParser.EXTENDS - 1)) | (1 << (CWScriptParser.ERROR - 1)) | (1 << (CWScriptParser.EVENT - 1)) | (1 << (CWScriptParser.INSTANTIATE - 1)) | (1 << (CWScriptParser.EXEC - 1)) | (1 << (CWScriptParser.QUERY - 1)) | (1 << (CWScriptParser.MIGRATE - 1)) | (1 << (CWScriptParser.FOR - 1)) | (1 << (CWScriptParser.IN - 1)) | (1 << (CWScriptParser.FROM - 1)) | (1 << (CWScriptParser.STATE - 1)) | (1 << (CWScriptParser.TIMES - 1)) | (1 << (CWScriptParser.IF - 1)) | (1 << (CWScriptParser.ELSE - 1)) | (1 << (CWScriptParser.AND - 1)) | (1 << (CWScriptParser.OR - 1)) | (1 << (CWScriptParser.TRUE - 1)) | (1 << (CWScriptParser.FALSE - 1)) | (1 << (CWScriptParser.LET - 1)) | (1 << (CWScriptParser.RETURN - 1)) | (1 << (CWScriptParser.STRUCT - 1)) | (1 << (CWScriptParser.ENUM - 1)) | (1 << (CWScriptParser.TYPE - 1)) | (1 << (CWScriptParser.EMIT - 1)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (CWScriptParser.Ident - 72)) | (1 << (CWScriptParser.CWSPEC_LINE_COMMENT - 72)) | (1 << (CWScriptParser.CWSPEC_BLOCK_COMMENT - 72)))) !== 0)) {
				{
				this.state = 584;
				this.structMember();
				this.state = 589;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 585;
						this.match(CWScriptParser.COMMA);
						this.state = 586;
						this.structMember();
						}
						}
					}
					this.state = 591;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
				}
				this.state = 593;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COMMA) {
					{
					this.state = 592;
					this.match(CWScriptParser.COMMA);
					}
				}

				}
			}

			this.state = 597;
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
		this.enterRule(_localctx, 98, CWScriptParser.RULE_structMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 600;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 599;
				_localctx._spec = this.cwspec();
				}
			}

			{
			this.state = 602;
			_localctx._name = this.ident();
			}
			this.state = 604;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.QUEST) {
				{
				this.state = 603;
				_localctx._option = this.match(CWScriptParser.QUEST);
				}
			}

			this.state = 606;
			this.match(CWScriptParser.COLON);
			{
			this.state = 607;
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
		let _startState: number = 100;
		this.enterRecursionRule(_localctx, 100, CWScriptParser.RULE_typeExpr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 625;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				{
				_localctx = new TypePathExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 610;
				this.typePath();
				}
				break;

			case 2:
				{
				_localctx = new TupleTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 611;
				this.match(CWScriptParser.LPAREN);
				{
				this.state = 612;
				(_localctx as TupleTypeExprContext)._typeExpr = this.typeExpr(0);
				(_localctx as TupleTypeExprContext)._members.push((_localctx as TupleTypeExprContext)._typeExpr);
				}
				this.state = 617;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 613;
					this.match(CWScriptParser.COMMA);
					this.state = 614;
					(_localctx as TupleTypeExprContext)._typeExpr = this.typeExpr(0);
					(_localctx as TupleTypeExprContext)._members.push((_localctx as TupleTypeExprContext)._typeExpr);
					}
					}
					this.state = 619;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 620;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 3:
				{
				_localctx = new RefTypeExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 622;
				this.match(CWScriptParser.AMP);
				this.state = 623;
				this.typeExpr(3);
				}
				break;

			case 4:
				{
				_localctx = new TypeDefnExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 624;
				this.typeDefn();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 639;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 637;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
					case 1:
						{
						_localctx = new ParamzdTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
						this.state = 627;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 628;
						this.typeParam();
						}
						break;

					case 2:
						{
						_localctx = new ShortOptionTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
						this.state = 629;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 630;
						this.match(CWScriptParser.QUEST);
						}
						break;

					case 3:
						{
						_localctx = new ShortVecTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
						this.state = 631;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 632;
						this.match(CWScriptParser.LBRACK);
						this.state = 633;
						this.match(CWScriptParser.RBRACK);
						}
						break;

					case 4:
						{
						_localctx = new ReflectiveTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
						this.state = 634;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 635;
						this.match(CWScriptParser.DOLLAR);
						this.state = 636;
						this.ident();
						}
						break;
					}
					}
				}
				this.state = 641;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
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
		this.enterRule(_localctx, 102, CWScriptParser.RULE_typeParam);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 642;
			this.match(CWScriptParser.LT);
			this.state = 643;
			this.typeExpr(0);
			this.state = 648;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 644;
				this.match(CWScriptParser.COMMA);
				this.state = 645;
				this.typeExpr(0);
				}
				}
				this.state = 650;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 651;
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
		this.enterRule(_localctx, 104, CWScriptParser.RULE_pathList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 653;
			this.ident();
			}
			this.state = 658;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 654;
					this.match(CWScriptParser.D_COLON);
					this.state = 655;
					this.ident();
					}
					}
				}
				this.state = 660;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
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
		this.enterRule(_localctx, 106, CWScriptParser.RULE_typePath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 662;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.D_COLON) {
				{
				this.state = 661;
				_localctx._root = this.match(CWScriptParser.D_COLON);
				}
			}

			this.state = 664;
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
		this.enterRule(_localctx, 108, CWScriptParser.RULE_typeDefn);
		try {
			this.state = 669;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 666;
				this.structDefn();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 667;
				this.enumDefn();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 668;
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
		this.enterRule(_localctx, 110, CWScriptParser.RULE_structDefn);
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
			this.match(CWScriptParser.STRUCT);
			this.state = 675;
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
		this.enterRule(_localctx, 112, CWScriptParser.RULE_enumDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 678;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 677;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 680;
			this.match(CWScriptParser.ENUM);
			{
			this.state = 681;
			_localctx._name = this.ident();
			}
			this.state = 682;
			this.match(CWScriptParser.LBRACE);
			this.state = 683;
			this.enumVariantList();
			this.state = 684;
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
		this.enterRule(_localctx, 114, CWScriptParser.RULE_enumVariantList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 699;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & ((1 << (CWScriptParser.CONTRACT - 1)) | (1 << (CWScriptParser.INTERFACE - 1)) | (1 << (CWScriptParser.IMPORT - 1)) | (1 << (CWScriptParser.IMPLEMENTS - 1)) | (1 << (CWScriptParser.EXTENDS - 1)) | (1 << (CWScriptParser.ERROR - 1)) | (1 << (CWScriptParser.EVENT - 1)) | (1 << (CWScriptParser.INSTANTIATE - 1)) | (1 << (CWScriptParser.EXEC - 1)) | (1 << (CWScriptParser.QUERY - 1)) | (1 << (CWScriptParser.MIGRATE - 1)) | (1 << (CWScriptParser.FOR - 1)) | (1 << (CWScriptParser.IN - 1)) | (1 << (CWScriptParser.FROM - 1)) | (1 << (CWScriptParser.STATE - 1)) | (1 << (CWScriptParser.TIMES - 1)) | (1 << (CWScriptParser.IF - 1)) | (1 << (CWScriptParser.ELSE - 1)) | (1 << (CWScriptParser.AND - 1)) | (1 << (CWScriptParser.OR - 1)) | (1 << (CWScriptParser.TRUE - 1)) | (1 << (CWScriptParser.FALSE - 1)) | (1 << (CWScriptParser.LET - 1)) | (1 << (CWScriptParser.RETURN - 1)) | (1 << (CWScriptParser.STRUCT - 1)) | (1 << (CWScriptParser.ENUM - 1)) | (1 << (CWScriptParser.TYPE - 1)) | (1 << (CWScriptParser.EMIT - 1)))) !== 0) || _la === CWScriptParser.Ident) {
				{
				this.state = 686;
				this.enumVariant();
				this.state = 693;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 688;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.COMMA) {
							{
							this.state = 687;
							this.match(CWScriptParser.COMMA);
							}
						}

						this.state = 690;
						this.enumVariant();
						}
						}
					}
					this.state = 695;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
				}
				this.state = 697;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COMMA) {
					{
					this.state = 696;
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
		this.enterRule(_localctx, 116, CWScriptParser.RULE_typeAliasDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 702;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
				{
				this.state = 701;
				_localctx._spec = this.cwspec();
				}
			}

			this.state = 704;
			this.match(CWScriptParser.TYPE);
			{
			this.state = 705;
			_localctx._name = this.ident();
			}
			this.state = 706;
			this.match(CWScriptParser.EQ);
			{
			this.state = 707;
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
		this.enterRule(_localctx, 118, CWScriptParser.RULE_namedFnDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 709;
			_localctx._fnName = this.ident();
			}
			this.state = 710;
			this.fnArgs();
			this.state = 712;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 711;
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
		this.enterRule(_localctx, 120, CWScriptParser.RULE_namedFnDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 714;
			_localctx._fnName = this.ident();
			}
			this.state = 715;
			this.fnArgs();
			this.state = 717;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 716;
				this.fnType();
				}
			}

			this.state = 719;
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
	public fnType(): FnTypeContext {
		let _localctx: FnTypeContext = new FnTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, CWScriptParser.RULE_fnType);
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
		this.enterRule(_localctx, 124, CWScriptParser.RULE_fnArgs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 724;
			this.match(CWScriptParser.LPAREN);
			this.state = 726;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & ((1 << (CWScriptParser.CONTRACT - 1)) | (1 << (CWScriptParser.INTERFACE - 1)) | (1 << (CWScriptParser.IMPORT - 1)) | (1 << (CWScriptParser.IMPLEMENTS - 1)) | (1 << (CWScriptParser.EXTENDS - 1)) | (1 << (CWScriptParser.ERROR - 1)) | (1 << (CWScriptParser.EVENT - 1)) | (1 << (CWScriptParser.INSTANTIATE - 1)) | (1 << (CWScriptParser.EXEC - 1)) | (1 << (CWScriptParser.QUERY - 1)) | (1 << (CWScriptParser.MIGRATE - 1)) | (1 << (CWScriptParser.FOR - 1)) | (1 << (CWScriptParser.IN - 1)) | (1 << (CWScriptParser.FROM - 1)) | (1 << (CWScriptParser.STATE - 1)) | (1 << (CWScriptParser.TIMES - 1)) | (1 << (CWScriptParser.IF - 1)) | (1 << (CWScriptParser.ELSE - 1)) | (1 << (CWScriptParser.AND - 1)) | (1 << (CWScriptParser.OR - 1)) | (1 << (CWScriptParser.TRUE - 1)) | (1 << (CWScriptParser.FALSE - 1)) | (1 << (CWScriptParser.LET - 1)) | (1 << (CWScriptParser.RETURN - 1)) | (1 << (CWScriptParser.STRUCT - 1)) | (1 << (CWScriptParser.ENUM - 1)) | (1 << (CWScriptParser.TYPE - 1)) | (1 << (CWScriptParser.EMIT - 1)))) !== 0) || _la === CWScriptParser.Ident) {
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
		this.enterRule(_localctx, 126, CWScriptParser.RULE_fnArgList);
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
		this.enterRule(_localctx, 128, CWScriptParser.RULE_fnArg);
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
		this.enterRule(_localctx, 130, CWScriptParser.RULE_fnBody);
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
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.MIGRATE) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.TIMES) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE) | (1 << CWScriptParser.LET) | (1 << CWScriptParser.FAIL) | (1 << CWScriptParser.RETURN) | (1 << CWScriptParser.STRUCT) | (1 << CWScriptParser.ENUM) | (1 << CWScriptParser.TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.EXCLAM - 32)) | (1 << (CWScriptParser.D_COLON - 32)) | (1 << (CWScriptParser.PLUS - 32)) | (1 << (CWScriptParser.MINUS - 32)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (CWScriptParser.Ident - 72)) | (1 << (CWScriptParser.StringLiteral - 72)) | (1 << (CWScriptParser.IntegerLiteral - 72)) | (1 << (CWScriptParser.DecimalLiteral - 72)))) !== 0)) {
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
		this.enterRule(_localctx, 132, CWScriptParser.RULE_stmt);
		let _la: number;
		try {
			this.state = 773;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
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
				this.expr(0);
				this.state = 759;
				(_localctx as AssignStmtContext)._assignOp = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (CWScriptParser.EQ - 54)) | (1 << (CWScriptParser.PLUS_EQ - 54)) | (1 << (CWScriptParser.MINUS_EQ - 54)) | (1 << (CWScriptParser.MUL_EQ - 54)) | (1 << (CWScriptParser.DIV_EQ - 54)) | (1 << (CWScriptParser.MOD_EQ - 54)))) !== 0))) {
					(_localctx as AssignStmtContext)._assignOp = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 760;
				this.expr(0);
				}
				break;

			case 3:
				_localctx = new IfStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 762;
				this.ifExpr_();
				}
				break;

			case 4:
				_localctx = new ForStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 763;
				this.forStmt_();
				}
				break;

			case 5:
				_localctx = new ExecStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 764;
				this.match(CWScriptParser.EXEC);
				this.state = 765;
				this.expr(0);
				}
				break;

			case 6:
				_localctx = new EmitStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 766;
				this.match(CWScriptParser.EMIT);
				this.state = 767;
				this.expr(0);
				}
				break;

			case 7:
				_localctx = new ReturnStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 768;
				this.match(CWScriptParser.RETURN);
				this.state = 769;
				this.expr(0);
				}
				break;

			case 8:
				_localctx = new FailStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 770;
				this.match(CWScriptParser.FAIL);
				this.state = 771;
				this.expr(0);
				}
				break;

			case 9:
				_localctx = new ExprStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 772;
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
		this.enterRule(_localctx, 134, CWScriptParser.RULE_letStmt_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 775;
			this.match(CWScriptParser.LET);
			this.state = 776;
			this.letLHS();
			this.state = 777;
			this.match(CWScriptParser.EQ);
			this.state = 778;
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
		this.enterRule(_localctx, 136, CWScriptParser.RULE_letLHS);
		let _la: number;
		try {
			this.state = 805;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				_localctx = new IdentLHSContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 780;
				this.ident();
				{
				this.state = 781;
				this.match(CWScriptParser.COLON);
				this.state = 782;
				this.typeExpr(0);
				}
				}
				break;

			case 2:
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

			case 3:
				_localctx = new TupleUnpackLHSFrontBackContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 788;
				this.match(CWScriptParser.LPAREN);
				{
				this.state = 789;
				(_localctx as TupleUnpackLHSFrontBackContext)._front = this.identList();
				}
				this.state = 795;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COMMA) {
					{
					this.state = 790;
					this.match(CWScriptParser.COMMA);
					this.state = 791;
					this.match(CWScriptParser.DOT);
					this.state = 792;
					this.match(CWScriptParser.DOT);
					this.state = 793;
					this.match(CWScriptParser.DOT);
					this.state = 794;
					(_localctx as TupleUnpackLHSFrontBackContext)._back = this.identList();
					}
				}

				this.state = 797;
				this.match(CWScriptParser.RBRACE);
				}
				break;

			case 4:
				_localctx = new TupleUnpackLHSBackContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 799;
				this.match(CWScriptParser.LPAREN);
				this.state = 800;
				this.match(CWScriptParser.COMMA);
				this.state = 801;
				this.match(CWScriptParser.DOT);
				this.state = 802;
				this.match(CWScriptParser.DOT);
				this.state = 803;
				this.match(CWScriptParser.DOT);
				this.state = 804;
				(_localctx as TupleUnpackLHSBackContext)._back = this.identList();
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
		let _startState: number = 138;
		this.enterRecursionRule(_localctx, 138, CWScriptParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 820;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				{
				_localctx = new GroupedExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 808;
				this.match(CWScriptParser.LPAREN);
				this.state = 809;
				this.expr(0);
				this.state = 810;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 2:
				{
				_localctx = new UnarySignExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 812;
				(_localctx as UnarySignExprContext)._sign = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === CWScriptParser.PLUS || _la === CWScriptParser.MINUS)) {
					(_localctx as UnarySignExprContext)._sign = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 813;
				this.expr(12);
				}
				break;

			case 3:
				{
				_localctx = new UnaryNotExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 814;
				this.match(CWScriptParser.EXCLAM);
				this.state = 815;
				this.expr(11);
				}
				break;

			case 4:
				{
				_localctx = new IfExpContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 816;
				this.ifExpr_();
				}
				break;

			case 5:
				{
				_localctx = new QueryExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 817;
				this.match(CWScriptParser.QUERY);
				this.state = 818;
				this.expr(2);
				}
				break;

			case 6:
				{
				_localctx = new ValExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 819;
				this.val();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 865;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 863;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 822;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 823;
						this.match(CWScriptParser.POW);
						this.state = 824;
						this.expr(11);
						}
						break;

					case 2:
						{
						_localctx = new MultDivModExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 825;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 826;
						(_localctx as MultDivModExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (CWScriptParser.MUL - 61)) | (1 << (CWScriptParser.DIV - 61)) | (1 << (CWScriptParser.MOD - 61)))) !== 0))) {
							(_localctx as MultDivModExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 827;
						this.expr(10);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 828;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 829;
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
						this.state = 830;
						this.expr(9);
						}
						break;

					case 4:
						{
						_localctx = new CompExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 831;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 832;
						(_localctx as CompExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (CWScriptParser.LT - 67)) | (1 << (CWScriptParser.LT_EQ - 67)) | (1 << (CWScriptParser.GT - 67)) | (1 << (CWScriptParser.GT_EQ - 67)))) !== 0))) {
							(_localctx as CompExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 833;
						this.expr(8);
						}
						break;

					case 5:
						{
						_localctx = new EqExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 834;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 835;
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
						this.state = 836;
						this.expr(7);
						}
						break;

					case 6:
						{
						_localctx = new AndExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 837;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 838;
						this.match(CWScriptParser.AND);
						this.state = 839;
						this.expr(6);
						}
						break;

					case 7:
						{
						_localctx = new OrExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 840;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 841;
						this.match(CWScriptParser.OR);
						this.state = 842;
						this.expr(5);
						}
						break;

					case 8:
						{
						_localctx = new MemberAccessExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 843;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 844;
						this.match(CWScriptParser.DOT);
						this.state = 845;
						this.ident();
						}
						break;

					case 9:
						{
						_localctx = new TableLookupExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 846;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 847;
						this.match(CWScriptParser.LBRACK);
						this.state = 848;
						this.expr(0);
						this.state = 849;
						this.match(CWScriptParser.RBRACK);
						}
						break;

					case 10:
						{
						_localctx = new PosArgsFnCallExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 851;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 852;
						this.match(CWScriptParser.LPAREN);
						this.state = 854;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.MIGRATE) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.TIMES) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE) | (1 << CWScriptParser.LET) | (1 << CWScriptParser.RETURN) | (1 << CWScriptParser.STRUCT) | (1 << CWScriptParser.ENUM) | (1 << CWScriptParser.TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.EXCLAM - 32)) | (1 << (CWScriptParser.D_COLON - 32)) | (1 << (CWScriptParser.PLUS - 32)) | (1 << (CWScriptParser.MINUS - 32)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (CWScriptParser.Ident - 72)) | (1 << (CWScriptParser.StringLiteral - 72)) | (1 << (CWScriptParser.IntegerLiteral - 72)) | (1 << (CWScriptParser.DecimalLiteral - 72)))) !== 0)) {
							{
							this.state = 853;
							this.exprList();
							}
						}

						this.state = 856;
						this.match(CWScriptParser.RPAREN);
						}
						break;

					case 11:
						{
						_localctx = new NamedArgsFnCallExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 857;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 858;
						this.match(CWScriptParser.LPAREN);
						this.state = 860;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & ((1 << (CWScriptParser.CONTRACT - 1)) | (1 << (CWScriptParser.INTERFACE - 1)) | (1 << (CWScriptParser.IMPORT - 1)) | (1 << (CWScriptParser.IMPLEMENTS - 1)) | (1 << (CWScriptParser.EXTENDS - 1)) | (1 << (CWScriptParser.ERROR - 1)) | (1 << (CWScriptParser.EVENT - 1)) | (1 << (CWScriptParser.INSTANTIATE - 1)) | (1 << (CWScriptParser.EXEC - 1)) | (1 << (CWScriptParser.QUERY - 1)) | (1 << (CWScriptParser.MIGRATE - 1)) | (1 << (CWScriptParser.FOR - 1)) | (1 << (CWScriptParser.IN - 1)) | (1 << (CWScriptParser.FROM - 1)) | (1 << (CWScriptParser.STATE - 1)) | (1 << (CWScriptParser.TIMES - 1)) | (1 << (CWScriptParser.IF - 1)) | (1 << (CWScriptParser.ELSE - 1)) | (1 << (CWScriptParser.AND - 1)) | (1 << (CWScriptParser.OR - 1)) | (1 << (CWScriptParser.TRUE - 1)) | (1 << (CWScriptParser.FALSE - 1)) | (1 << (CWScriptParser.LET - 1)) | (1 << (CWScriptParser.RETURN - 1)) | (1 << (CWScriptParser.STRUCT - 1)) | (1 << (CWScriptParser.ENUM - 1)) | (1 << (CWScriptParser.TYPE - 1)) | (1 << (CWScriptParser.EMIT - 1)))) !== 0) || _la === CWScriptParser.Ident) {
							{
							this.state = 859;
							this.namedExprList();
							}
						}

						this.state = 862;
						this.match(CWScriptParser.RPAREN);
						}
						break;
					}
					}
				}
				this.state = 867;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
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
		this.enterRule(_localctx, 140, CWScriptParser.RULE_val);
		try {
			this.state = 886;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				_localctx = new UnitValContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 868;
				this.match(CWScriptParser.LPAREN);
				this.state = 869;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 2:
				_localctx = new StructValContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 870;
				this.structVal_();
				}
				break;

			case 3:
				_localctx = new TupleValContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 871;
				(_localctx as TupleValContext)._tupleType = this.typePath();
				this.state = 872;
				this.match(CWScriptParser.LPAREN);
				this.state = 873;
				this.exprList();
				this.state = 874;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 4:
				_localctx = new VecValContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 876;
				this.match(CWScriptParser.LBRACK);
				this.state = 877;
				this.exprList();
				this.state = 878;
				this.match(CWScriptParser.RBRACK);
				}
				break;

			case 5:
				_localctx = new StringValContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 880;
				this.match(CWScriptParser.StringLiteral);
				}
				break;

			case 6:
				_localctx = new IntegerValContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 881;
				this.match(CWScriptParser.IntegerLiteral);
				}
				break;

			case 7:
				_localctx = new DecimalValContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 882;
				this.match(CWScriptParser.DecimalLiteral);
				}
				break;

			case 8:
				_localctx = new TrueValContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 883;
				this.match(CWScriptParser.TRUE);
				}
				break;

			case 9:
				_localctx = new FalseValContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 884;
				this.match(CWScriptParser.FALSE);
				}
				break;

			case 10:
				_localctx = new IdentValContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 885;
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
		this.enterRule(_localctx, 142, CWScriptParser.RULE_structVal_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 888;
			_localctx._structType = this.typePath();
			}
			this.state = 889;
			this.match(CWScriptParser.LBRACE);
			this.state = 891;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & ((1 << (CWScriptParser.CONTRACT - 1)) | (1 << (CWScriptParser.INTERFACE - 1)) | (1 << (CWScriptParser.IMPORT - 1)) | (1 << (CWScriptParser.IMPLEMENTS - 1)) | (1 << (CWScriptParser.EXTENDS - 1)) | (1 << (CWScriptParser.ERROR - 1)) | (1 << (CWScriptParser.EVENT - 1)) | (1 << (CWScriptParser.INSTANTIATE - 1)) | (1 << (CWScriptParser.EXEC - 1)) | (1 << (CWScriptParser.QUERY - 1)) | (1 << (CWScriptParser.MIGRATE - 1)) | (1 << (CWScriptParser.FOR - 1)) | (1 << (CWScriptParser.IN - 1)) | (1 << (CWScriptParser.FROM - 1)) | (1 << (CWScriptParser.STATE - 1)) | (1 << (CWScriptParser.TIMES - 1)) | (1 << (CWScriptParser.IF - 1)) | (1 << (CWScriptParser.ELSE - 1)) | (1 << (CWScriptParser.AND - 1)) | (1 << (CWScriptParser.OR - 1)) | (1 << (CWScriptParser.TRUE - 1)) | (1 << (CWScriptParser.FALSE - 1)) | (1 << (CWScriptParser.LET - 1)) | (1 << (CWScriptParser.RETURN - 1)) | (1 << (CWScriptParser.STRUCT - 1)) | (1 << (CWScriptParser.ENUM - 1)) | (1 << (CWScriptParser.TYPE - 1)) | (1 << (CWScriptParser.EMIT - 1)))) !== 0) || _la === CWScriptParser.Ident) {
				{
				this.state = 890;
				_localctx._members = this.structValMembers();
				}
			}

			this.state = 893;
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
		this.enterRule(_localctx, 144, CWScriptParser.RULE_structValMembers);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 895;
			this.structValMember();
			this.state = 900;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 896;
					this.match(CWScriptParser.COMMA);
					this.state = 897;
					this.structValMember();
					}
					}
				}
				this.state = 902;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
			}
			this.state = 904;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COMMA) {
				{
				this.state = 903;
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
		this.enterRule(_localctx, 146, CWScriptParser.RULE_structValMember);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 906;
			_localctx._name = this.ident();
			this.state = 907;
			this.match(CWScriptParser.COLON);
			this.state = 908;
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
		this.enterRule(_localctx, 148, CWScriptParser.RULE_ifExpr_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 910;
			this.ifClause_();
			this.state = 912;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				{
				this.state = 911;
				this.elseIfClauses();
				}
				break;
			}
			this.state = 915;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
			case 1:
				{
				this.state = 914;
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
		this.enterRule(_localctx, 150, CWScriptParser.RULE_ifClause_);
		try {
			this.state = 925;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
			case 1:
				_localctx = new IfClauseContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 917;
				this.match(CWScriptParser.IF);
				{
				this.state = 918;
				(_localctx as IfClauseContext)._predicate = this.expr(0);
				}
				this.state = 919;
				this.fnBody();
				}
				break;

			case 2:
				_localctx = new IfLetClauseContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 921;
				this.match(CWScriptParser.IF);
				this.state = 922;
				this.letStmt_();
				this.state = 923;
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
		this.enterRule(_localctx, 152, CWScriptParser.RULE_elseIfClauses);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 929;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 927;
					this.match(CWScriptParser.ELSE);
					this.state = 928;
					this.ifClause_();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 931;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
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
		this.enterRule(_localctx, 154, CWScriptParser.RULE_elseClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 933;
			this.match(CWScriptParser.ELSE);
			this.state = 934;
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
		this.enterRule(_localctx, 156, CWScriptParser.RULE_forStmt_);
		try {
			this.state = 947;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				_localctx = new ForInStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 936;
				this.match(CWScriptParser.FOR);
				this.state = 937;
				(_localctx as ForInStmtContext)._item = this.forItem();
				this.state = 938;
				this.match(CWScriptParser.IN);
				this.state = 939;
				(_localctx as ForInStmtContext)._iterItems = this.expr(0);
				this.state = 940;
				this.fnBody();
				}
				break;

			case 2:
				_localctx = new ForTimesStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 942;
				this.match(CWScriptParser.FOR);
				this.state = 943;
				this.expr(0);
				this.state = 944;
				this.match(CWScriptParser.TIMES);
				this.state = 945;
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
	public forItem(): ForItemContext {
		let _localctx: ForItemContext = new ForItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, CWScriptParser.RULE_forItem);
		try {
			this.state = 954;
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
			case CWScriptParser.LET:
			case CWScriptParser.RETURN:
			case CWScriptParser.STRUCT:
			case CWScriptParser.ENUM:
			case CWScriptParser.TYPE:
			case CWScriptParser.EMIT:
			case CWScriptParser.Ident:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 949;
				this.ident();
				}
				break;
			case CWScriptParser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 950;
				this.match(CWScriptParser.LBRACE);
				this.state = 951;
				this.identList();
				this.state = 952;
				this.match(CWScriptParser.RBRACE);
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
	public identList(): IdentListContext {
		let _localctx: IdentListContext = new IdentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, CWScriptParser.RULE_identList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 956;
			_localctx._ident = this.ident();
			_localctx._symbols.push(_localctx._ident);
			}
			this.state = 961;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 957;
					this.match(CWScriptParser.COMMA);
					{
					this.state = 958;
					_localctx._ident = this.ident();
					_localctx._symbols.push(_localctx._ident);
					}
					}
					}
				}
				this.state = 963;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
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
		this.enterRule(_localctx, 162, CWScriptParser.RULE_exprList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 964;
			this.expr(0);
			this.state = 969;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 965;
				this.match(CWScriptParser.COMMA);
				this.state = 966;
				this.expr(0);
				}
				}
				this.state = 971;
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
		this.enterRule(_localctx, 164, CWScriptParser.RULE_namedExprList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 972;
			this.namedExpr();
			this.state = 977;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 973;
				this.match(CWScriptParser.COMMA);
				this.state = 974;
				this.namedExpr();
				}
				}
				this.state = 979;
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
		this.enterRule(_localctx, 166, CWScriptParser.RULE_namedExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 980;
			_localctx._name = this.ident();
			this.state = 981;
			this.match(CWScriptParser.COLON);
			this.state = 982;
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
		this.enterRule(_localctx, 168, CWScriptParser.RULE_ident);
		try {
			this.state = 986;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.Ident:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 984;
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
			case CWScriptParser.LET:
			case CWScriptParser.RETURN:
			case CWScriptParser.STRUCT:
			case CWScriptParser.ENUM:
			case CWScriptParser.TYPE:
			case CWScriptParser.EMIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 985;
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
		this.enterRule(_localctx, 170, CWScriptParser.RULE_cwspec);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 989;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 988;
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
				this.state = 991;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
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
		this.enterRule(_localctx, 172, CWScriptParser.RULE_reservedKeyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 993;
			_la = this._input.LA(1);
			if (!(((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & ((1 << (CWScriptParser.CONTRACT - 1)) | (1 << (CWScriptParser.INTERFACE - 1)) | (1 << (CWScriptParser.IMPORT - 1)) | (1 << (CWScriptParser.IMPLEMENTS - 1)) | (1 << (CWScriptParser.EXTENDS - 1)) | (1 << (CWScriptParser.ERROR - 1)) | (1 << (CWScriptParser.EVENT - 1)) | (1 << (CWScriptParser.INSTANTIATE - 1)) | (1 << (CWScriptParser.EXEC - 1)) | (1 << (CWScriptParser.QUERY - 1)) | (1 << (CWScriptParser.MIGRATE - 1)) | (1 << (CWScriptParser.FOR - 1)) | (1 << (CWScriptParser.IN - 1)) | (1 << (CWScriptParser.FROM - 1)) | (1 << (CWScriptParser.STATE - 1)) | (1 << (CWScriptParser.TIMES - 1)) | (1 << (CWScriptParser.IF - 1)) | (1 << (CWScriptParser.ELSE - 1)) | (1 << (CWScriptParser.AND - 1)) | (1 << (CWScriptParser.OR - 1)) | (1 << (CWScriptParser.TRUE - 1)) | (1 << (CWScriptParser.FALSE - 1)) | (1 << (CWScriptParser.LET - 1)) | (1 << (CWScriptParser.RETURN - 1)) | (1 << (CWScriptParser.STRUCT - 1)) | (1 << (CWScriptParser.ENUM - 1)) | (1 << (CWScriptParser.TYPE - 1)) | (1 << (CWScriptParser.EMIT - 1)))) !== 0))) {
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
		case 8:
			return this.importSymbol_sempred(_localctx as ImportSymbolContext, predIndex);

		case 50:
			return this.typeExpr_sempred(_localctx as TypeExprContext, predIndex);

		case 69:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private importSymbol_sempred(_localctx: ImportSymbolContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private typeExpr_sempred(_localctx: TypeExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 7);

		case 2:
			return this.precpred(this._ctx, 5);

		case 3:
			return this.precpred(this._ctx, 4);

		case 4:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 10);

		case 6:
			return this.precpred(this._ctx, 9);

		case 7:
			return this.precpred(this._ctx, 8);

		case 8:
			return this.precpred(this._ctx, 7);

		case 9:
			return this.precpred(this._ctx, 6);

		case 10:
			return this.precpred(this._ctx, 5);

		case 11:
			return this.precpred(this._ctx, 4);

		case 12:
			return this.precpred(this._ctx, 16);

		case 13:
			return this.precpred(this._ctx, 15);

		case 14:
			return this.precpred(this._ctx, 14);

		case 15:
			return this.precpred(this._ctx, 13);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03R\u03E6\x04\x02" +
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
		"X\tX\x03\x02\x05\x02\xB2\n\x02\x03\x02\x07\x02\xB5\n\x02\f\x02\x0E\x02" +
		"\xB8\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x05\x03\xBF\n\x03\x03" +
		"\x04\x05\x04\xC2\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xC8\n\x04" +
		"\x03\x04\x03\x04\x05\x04\xCC\n\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
		"\x05\x07\x05\xD3\n\x05\f\x05\x0E\x05\xD6\v\x05\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x05\x06\xDD\n\x06\x03\x07\x05\x07\xE0\n\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xE8\n\x07\x03\x07\x03\x07" +
		"\x05\x07\xEC\n\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x05\b\xF3\n\b\x03" +
		"\b\x03\b\x03\b\x03\t\x03\t\x03\t\x07\t\xFB\n\t\f\t\x0E\t\xFE\v\t\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x05\n\u0110\n\n\x03\n\x03\n\x03\n\x07\n\u0115\n\n" +
		"\f\n\x0E\n\u0118\v\n\x03\v\x03\v\x07\v\u011C\n\v\f\v\x0E\v\u011F\v\v\x03" +
		"\v\x03\v\x03\f\x03\f\x07\f\u0125\n\f\f\f\x0E\f\u0128\v\f\x03\f\x03\f\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x05\r\u0139\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0148\n\x0E" +
		"\x03\x0F\x05\x0F\u014B\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03" +
		"\x10\x07\x10\u0153\n\x10\f\x10\x0E\x10\u0156\v\x10\x03\x10\x03\x10\x03" +
		"\x11\x05\x11\u015B\n\x11\x03\x11\x03\x11\x03\x12\x05\x12\u0160\n\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x07\x13\u0168\n\x13\f\x13" +
		"\x0E\x13\u016B\v\x13\x03\x13\x03\x13\x03\x14\x05\x14\u0170\n\x14\x03\x14" +
		"\x03\x14\x03\x15\x05\x15\u0175\n\x15\x03\x15\x03\x15\x03\x15\x05\x15\u017A" +
		"\n\x15\x03\x15\x03\x15\x05\x15\u017E\n\x15\x03\x16\x03\x16\x03\x16\x07" +
		"\x16\u0183\n\x16\f\x16\x0E\x16\u0186\v\x16\x03\x16\x03\x16\x03\x17\x05" +
		"\x17\u018B\n\x17\x03\x17\x03\x17\x05\x17\u018F\n\x17\x03\x17\x05\x17\u0192" +
		"\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x1A\x06\x1A\u019E\n\x1A\r\x1A\x0E\x1A\u019F\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x05\x1B\u01A6\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x05" +
		"\x1C\u01AC\n\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u01B1\n\x1C\x03\x1C\x03" +
		"\x1C\x03\x1D\x05\x1D\u01B6\n\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u01BB" +
		"\n\x1D\x03\x1E\x05\x1E\u01BE\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03" +
		"\x1F\x03\x1F\x07\x1F\u01C6\n\x1F\f\x1F\x0E\x1F\u01C9\v\x1F\x03\x1F\x03" +
		"\x1F\x03 \x05 \u01CE\n \x03 \x03 \x03!\x05!\u01D3\n!\x03!\x03!\x03!\x03" +
		"\"\x03\"\x03\"\x07\"\u01DB\n\"\f\"\x0E\"\u01DE\v\"\x03\"\x03\"\x03#\x05" +
		"#\u01E3\n#\x03#\x03#\x03$\x05$\u01E8\n$\x03$\x03$\x03$\x03%\x03%\x03%" +
		"\x07%\u01F0\n%\f%\x0E%\u01F3\v%\x03%\x03%\x03&\x05&\u01F8\n&\x03&\x03" +
		"&\x03\'\x05\'\u01FD\n\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x07(\u0205\n" +
		"(\f(\x0E(\u0208\v(\x03(\x03(\x03)\x05)\u020D\n)\x03)\x03)\x03*\x05*\u0212" +
		"\n*\x03*\x03*\x03*\x05*\u0217\n*\x03*\x03*\x03+\x05+\u021C\n+\x03+\x03" +
		"+\x03+\x05+\u0221\n+\x03,\x03,\x03,\x05,\u0226\n,\x03-\x03-\x03-\x05-" +
		"\u022B\n-\x03.\x03.\x03.\x03/\x03/\x030\x030\x030\x030\x070\u0236\n0\f" +
		"0\x0E0\u0239\v0\x030\x030\x031\x031\x031\x031\x071\u0241\n1\f1\x0E1\u0244" +
		"\v1\x051\u0246\n1\x031\x031\x032\x032\x032\x032\x072\u024E\n2\f2\x0E2" +
		"\u0251\v2\x032\x052\u0254\n2\x052\u0256\n2\x032\x032\x033\x053\u025B\n" +
		"3\x033\x033\x053\u025F\n3\x033\x033\x033\x034\x034\x034\x034\x034\x03" +
		"4\x074\u026A\n4\f4\x0E4\u026D\v4\x034\x034\x034\x034\x034\x054\u0274\n" +
		"4\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x074\u0280\n4\f4\x0E" +
		"4\u0283\v4\x035\x035\x035\x035\x075\u0289\n5\f5\x0E5\u028C\v5\x035\x03" +
		"5\x036\x036\x036\x076\u0293\n6\f6\x0E6\u0296\v6\x037\x057\u0299\n7\x03" +
		"7\x037\x038\x038\x038\x058\u02A0\n8\x039\x059\u02A3\n9\x039\x039\x039" +
		"\x03:\x05:\u02A9\n:\x03:\x03:\x03:\x03:\x03:\x03:\x03;\x03;\x05;\u02B3" +
		"\n;\x03;\x07;\u02B6\n;\f;\x0E;\u02B9\v;\x03;\x05;\u02BC\n;\x05;\u02BE" +
		"\n;\x03<\x05<\u02C1\n<\x03<\x03<\x03<\x03<\x03<\x03=\x03=\x03=\x05=\u02CB" +
		"\n=\x03>\x03>\x03>\x05>\u02D0\n>\x03>\x03>\x03?\x03?\x03?\x03@\x03@\x05" +
		"@\u02D9\n@\x03@\x03@\x03A\x03A\x03A\x07A\u02E0\nA\fA\x0EA\u02E3\vA\x03" +
		"B\x03B\x05B\u02E7\nB\x03B\x03B\x03B\x03C\x03C\x07C\u02EE\nC\fC\x0EC\u02F1" +
		"\vC\x03C\x03C\x03C\x05C\u02F6\nC\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03" +
		"D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x05D\u0308\nD\x03E\x03E\x03" +
		"E\x03E\x03E\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03" +
		"F\x03F\x03F\x03F\x05F\u031E\nF\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03" +
		"F\x05F\u0328\nF\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03" +
		"G\x03G\x03G\x05G\u0337\nG\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03" +
		"G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03" +
		"G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x05G\u0359\nG\x03G\x03" +
		"G\x03G\x03G\x05G\u035F\nG\x03G\x07G\u0362\nG\fG\x0EG\u0365\vG\x03H\x03" +
		"H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03" +
		"H\x03H\x03H\x05H\u0379\nH\x03I\x03I\x03I\x05I\u037E\nI\x03I\x03I\x03J" +
		"\x03J\x03J\x07J\u0385\nJ\fJ\x0EJ\u0388\vJ\x03J\x05J\u038B\nJ\x03K\x03" +
		"K\x03K\x03K\x03L\x03L\x05L\u0393\nL\x03L\x05L\u0396\nL\x03M\x03M\x03M" +
		"\x03M\x03M\x03M\x03M\x03M\x05M\u03A0\nM\x03N\x03N\x06N\u03A4\nN\rN\x0E" +
		"N\u03A5\x03O\x03O\x03O\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03" +
		"P\x03P\x05P\u03B6\nP\x03Q\x03Q\x03Q\x03Q\x03Q\x05Q\u03BD\nQ\x03R\x03R" +
		"\x03R\x07R\u03C2\nR\fR\x0ER\u03C5\vR\x03S\x03S\x03S\x07S\u03CA\nS\fS\x0E" +
		"S\u03CD\vS\x03T\x03T\x03T\x07T\u03D2\nT\fT\x0ET\u03D5\vT\x03U\x03U\x03" +
		"U\x03U\x03V\x03V\x05V\u03DD\nV\x03W\x06W\u03E0\nW\rW\x0EW\u03E1\x03X\x03" +
		"X\x03X\x02\x02\x05\x12f\x8CY\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
		"t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
		"\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02" +
		"\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02" +
		"\xAE\x02\x02\t\b\x0288<<>>@@BBDD\x04\x02;;==\x05\x02??AACC\x03\x02EH\x03" +
		"\x029:\x03\x02NO\x05\x02\x03\x06\n\x1C\x1E\"\x02\u0439\x02\xB1\x03\x02" +
		"\x02\x02\x04\xBE\x03\x02\x02\x02\x06\xC1\x03\x02\x02\x02\b\xCF\x03\x02" +
		"\x02\x02\n\xD7\x03\x02\x02\x02\f\xDF\x03\x02\x02\x02\x0E\xEF\x03\x02\x02" +
		"\x02\x10\xF7\x03\x02\x02\x02\x12\u010F\x03\x02\x02\x02\x14\u0119\x03\x02" +
		"\x02\x02\x16\u0122\x03\x02\x02\x02\x18\u0138\x03\x02\x02\x02\x1A\u0147" +
		"\x03\x02\x02\x02\x1C\u014A\x03\x02\x02\x02\x1E\u014F\x03\x02\x02\x02 " +
		"\u015A\x03\x02\x02\x02\"\u015F\x03\x02\x02\x02$\u0164\x03\x02\x02\x02" +
		"&\u016F\x03\x02\x02\x02(\u017D\x03\x02\x02\x02*\u017F\x03\x02\x02\x02" +
		",\u0191\x03\x02\x02\x02.\u0193\x03\x02\x02\x020\u0197\x03\x02\x02\x02" +
		"2\u019D\x03\x02\x02\x024\u01A1\x03\x02\x02\x026\u01AB\x03\x02\x02\x02" +
		"8\u01B5\x03\x02\x02\x02:\u01BD\x03\x02\x02\x02<\u01C2\x03\x02\x02\x02" +
		">\u01CD\x03\x02\x02\x02@\u01D2\x03\x02\x02\x02B\u01D7\x03\x02\x02\x02" +
		"D\u01E2\x03\x02\x02\x02F\u01E7\x03\x02\x02\x02H\u01EC\x03\x02\x02\x02" +
		"J\u01F7\x03\x02\x02\x02L\u01FC\x03\x02\x02\x02N\u0201\x03\x02\x02\x02" +
		"P\u020C\x03\x02\x02\x02R\u0211\x03\x02\x02\x02T\u021B\x03\x02\x02\x02" +
		"V\u0225\x03\x02\x02\x02X\u0227\x03\x02\x02\x02Z\u022C\x03\x02\x02\x02" +
		"\\\u022F\x03\x02\x02\x02^\u0231\x03\x02\x02\x02`\u023C\x03\x02\x02\x02" +
		"b\u0249\x03\x02\x02\x02d\u025A\x03\x02\x02\x02f\u0273\x03\x02\x02\x02" +
		"h\u0284\x03\x02\x02\x02j\u028F\x03\x02\x02\x02l\u0298\x03\x02\x02\x02" +
		"n\u029F\x03\x02\x02\x02p\u02A2\x03\x02\x02\x02r\u02A8\x03\x02\x02\x02" +
		"t\u02BD\x03\x02\x02\x02v\u02C0\x03\x02\x02\x02x\u02C7\x03\x02\x02\x02" +
		"z\u02CC\x03\x02\x02\x02|\u02D3\x03\x02\x02\x02~\u02D6\x03\x02\x02\x02" +
		"\x80\u02DC\x03\x02\x02\x02\x82\u02E4\x03\x02\x02\x02\x84\u02F5\x03\x02" +
		"\x02\x02\x86\u0307\x03\x02\x02\x02\x88\u0309\x03\x02\x02\x02\x8A\u0327" +
		"\x03\x02\x02\x02\x8C\u0336\x03\x02\x02\x02\x8E\u0378\x03\x02\x02\x02\x90" +
		"\u037A\x03\x02\x02\x02\x92\u0381\x03\x02\x02\x02\x94\u038C\x03\x02\x02" +
		"\x02\x96\u0390\x03\x02\x02\x02\x98\u039F\x03\x02\x02\x02\x9A\u03A3\x03" +
		"\x02\x02\x02\x9C\u03A7\x03\x02\x02\x02\x9E\u03B5\x03\x02\x02\x02\xA0\u03BC" +
		"\x03\x02\x02\x02\xA2\u03BE\x03\x02\x02\x02\xA4\u03C6\x03\x02\x02\x02\xA6" +
		"\u03CE\x03\x02\x02\x02\xA8\u03D6\x03\x02\x02\x02\xAA\u03DC\x03\x02\x02" +
		"\x02\xAC\u03DF\x03\x02\x02\x02\xAE\u03E3\x03\x02\x02\x02\xB0\xB2\x05\xAC" +
		"W\x02\xB1\xB0\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB6\x03\x02" +
		"\x02\x02\xB3\xB5\x05\x04\x03\x02\xB4\xB3\x03\x02\x02\x02\xB5\xB8\x03\x02" +
		"\x02\x02\xB6\xB4\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB9\x03\x02" +
		"\x02\x02\xB8\xB6\x03\x02\x02\x02\xB9\xBA\x07\x02\x02\x03\xBA\x03\x03\x02" +
		"\x02\x02\xBB\xBF\x05\x06\x04\x02\xBC\xBF\x05\f\x07\x02\xBD\xBF\x05\x0E" +
		"\b\x02\xBE\xBB\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBE\xBD\x03\x02" +
		"\x02\x02\xBF\x05\x03\x02\x02\x02\xC0\xC2\x05\xACW\x02\xC1\xC0\x03\x02" +
		"\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC4\x07\x03" +
		"\x02\x02\xC4\xC7\x05\xAAV\x02\xC5\xC6\x07\n\x02\x02\xC6\xC8\x05\xA2R\x02" +
		"\xC7\xC5\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xCB\x03\x02\x02\x02" +
		"\xC9\xCA\x07\x06\x02\x02\xCA\xCC\x05\b\x05\x02\xCB\xC9\x03\x02\x02\x02" +
		"\xCB\xCC\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xCE\x05\x14\v\x02" +
		"\xCE\x07\x03\x02\x02\x02\xCF\xD4\x05\n\x06\x02\xD0\xD1\x07+\x02\x02\xD1" +
		"\xD3\x05\n\x06\x02\xD2\xD0\x03\x02\x02\x02\xD3\xD6\x03\x02\x02\x02\xD4" +
		"\xD2\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02\xD5\t\x03\x02\x02\x02\xD6" +
		"\xD4\x03\x02\x02\x02\xD7\xDC\x05\xAAV\x02\xD8\xD9\x07&\x02\x02\xD9\xDA" +
		"\x05\xA2R\x02\xDA\xDB\x07\'\x02\x02\xDB\xDD\x03\x02\x02\x02\xDC\xD8\x03" +
		"\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\v\x03\x02\x02\x02\xDE\xE0\x05" +
		"\xACW\x02\xDF\xDE\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE1\x03" +
		"\x02\x02\x02\xE1\xE2\x07\x04\x02\x02\xE2\xE7\x05\xAAV\x02\xE3\xE4\x07" +
		"&\x02\x02\xE4\xE5\x05\xAAV\x02\xE5\xE6\x07\'\x02\x02\xE6\xE8\x03\x02\x02" +
		"\x02\xE7\xE3\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xEB\x03\x02\x02" +
		"\x02\xE9\xEA\x07\n\x02\x02\xEA\xEC\x05\b\x05\x02\xEB\xE9\x03\x02\x02\x02" +
		"\xEB\xEC\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xEE\x05\x16\f\x02" +
		"\xEE\r\x03\x02\x02\x02\xEF\xF2\x07\x05\x02\x02\xF0\xF3\x05\x10\t\x02\xF1" +
		"\xF3\x07?\x02\x02\xF2\xF0\x03\x02\x02\x02\xF2\xF1\x03\x02\x02\x02\xF2" +
		"\xF3\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF5\x07\x13\x02\x02\xF5" +
		"\xF6\x07K\x02\x02\xF6\x0F\x03\x02\x02\x02\xF7\xFC\x05\x12\n\x02\xF8\xF9" +
		"\x07+\x02\x02\xF9\xFB\x05\x12\n\x02\xFA\xF8\x03\x02\x02\x02\xFB\xFE\x03" +
		"\x02\x02\x02\xFC\xFA\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\x11\x03" +
		"\x02\x02\x02\xFE\xFC\x03\x02\x02\x02\xFF\u0100\b\n\x01\x02\u0100\u0101" +
		"\x07$\x02\x02\u0101\u0102\x05\x10\t\x02\u0102\u0103\x07%\x02\x02\u0103" +
		"\u0110\x03\x02\x02\x02\u0104\u0110\x05l7\x02\u0105\u0106\x05l7\x02\u0106" +
		"\u0107\x07/\x02\x02\u0107\u0108\x07(\x02\x02\u0108\u0109\x05\x10\t\x02" +
		"\u0109\u010A\x07)\x02\x02\u010A\u0110\x03\x02\x02\x02\u010B\u010C\x05" +
		"l7\x02\u010C\u010D\x07/\x02\x02\u010D\u010E\x07?\x02\x02\u010E\u0110\x03" +
		"\x02\x02\x02\u010F\xFF\x03\x02\x02\x02\u010F\u0104\x03\x02\x02\x02\u010F" +
		"\u0105\x03\x02\x02\x02\u010F\u010B\x03\x02\x02\x02\u0110\u0116\x03\x02" +
		"\x02\x02\u0111\u0112\f\x03\x02\x02\u0112\u0113\x07#\x02\x02\u0113\u0115" +
		"\x05\xAAV\x02\u0114\u0111\x03\x02\x02\x02\u0115\u0118\x03\x02\x02\x02" +
		"\u0116\u0114\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117\x13\x03" +
		"\x02\x02\x02\u0118\u0116\x03\x02\x02\x02\u0119\u011D\x07(\x02\x02\u011A" +
		"\u011C\x05\x18\r\x02\u011B\u011A\x03\x02\x02\x02\u011C\u011F\x03\x02\x02" +
		"\x02\u011D\u011B\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E\u0120" +
		"\x03\x02\x02\x02\u011F\u011D\x03\x02\x02\x02\u0120\u0121\x07)\x02\x02" +
		"\u0121\x15\x03\x02\x02\x02\u0122\u0126\x07(\x02\x02\u0123\u0125\x05\x1A" +
		"\x0E\x02\u0124\u0123\x03\x02\x02\x02\u0125\u0128\x03\x02\x02\x02\u0126" +
		"\u0124\x03\x02\x02\x02\u0126\u0127\x03\x02\x02\x02\u0127\u0129\x03\x02" +
		"\x02\x02\u0128\u0126\x03\x02\x02\x02\u0129\u012A\x07)\x02\x02\u012A\x17" +
		"\x03\x02\x02\x02\u012B\u0139\x05n8\x02\u012C\u0139\x05\x1C\x0F\x02\u012D" +
		"\u0139\x05\x1E\x10\x02\u012E\u0139\x05\"\x12\x02\u012F\u0139\x05$\x13" +
		"\x02\u0130\u0139\x05(\x15\x02\u0131\u0139\x05*\x16\x02\u0132\u0139\x05" +
		"6\x1C\x02\u0133\u0139\x05:\x1E\x02\u0134\u0139\x05<\x1F\x02\u0135\u0139" +
		"\x05F$\x02\u0136\u0139\x05H%\x02\u0137\u0139\x05R*\x02\u0138\u012B\x03" +
		"\x02\x02\x02\u0138\u012C\x03\x02\x02\x02\u0138\u012D\x03\x02\x02\x02\u0138" +
		"\u012E\x03\x02\x02\x02\u0138\u012F\x03\x02\x02\x02\u0138\u0130\x03\x02" +
		"\x02\x02\u0138\u0131\x03\x02\x02\x02\u0138\u0132\x03\x02\x02\x02\u0138" +
		"\u0133\x03\x02\x02\x02\u0138\u0134\x03\x02\x02\x02\u0138\u0135\x03\x02" +
		"\x02\x02\u0138\u0136\x03\x02\x02\x02\u0138\u0137\x03\x02\x02\x02\u0139" +
		"\x19\x03\x02\x02\x02\u013A\u0148\x05n8\x02\u013B\u0148\x05\x1C\x0F\x02" +
		"\u013C\u0148\x05\x1E\x10\x02\u013D\u0148\x05\"\x12\x02\u013E\u0148\x05" +
		"$\x13\x02\u013F\u0148\x05(\x15\x02\u0140\u0148\x05*\x16\x02\u0141\u0148" +
		"\x058\x1D\x02\u0142\u0148\x05@!\x02\u0143\u0148\x05B\"\x02\u0144\u0148" +
		"\x05L\'\x02\u0145\u0148\x05N(\x02\u0146\u0148\x05T+\x02\u0147\u013A\x03" +
		"\x02\x02\x02\u0147\u013B\x03\x02\x02\x02\u0147\u013C\x03\x02\x02\x02\u0147" +
		"\u013D\x03\x02\x02\x02\u0147\u013E\x03\x02\x02\x02\u0147\u013F\x03\x02" +
		"\x02\x02\u0147\u0140\x03\x02\x02\x02\u0147\u0141\x03\x02\x02\x02\u0147" +
		"\u0142\x03\x02\x02\x02\u0147\u0143\x03\x02\x02\x02\u0147\u0144\x03\x02" +
		"\x02\x02\u0147\u0145\x03\x02\x02\x02\u0147\u0146\x03\x02\x02\x02\u0148" +
		"\x1B\x03\x02\x02\x02\u0149\u014B\x05\xACW\x02\u014A\u0149\x03\x02\x02" +
		"\x02\u014A\u014B\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u014D" +
		"\x07\v\x02\x02\u014D\u014E\x05V,\x02\u014E\x1D\x03\x02\x02\x02\u014F\u0150" +
		"\x07\v\x02\x02\u0150\u0154\x07(\x02\x02\u0151\u0153\x05 \x11\x02\u0152" +
		"\u0151\x03\x02\x02\x02\u0153\u0156\x03\x02\x02\x02\u0154\u0152\x03\x02" +
		"\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155\u0157\x03\x02\x02\x02\u0156" +
		"\u0154\x03\x02\x02\x02\u0157\u0158\x07)\x02\x02\u0158\x1F\x03\x02\x02" +
		"\x02\u0159\u015B\x05\xACW\x02\u015A\u0159\x03\x02\x02\x02\u015A\u015B" +
		"\x03\x02\x02\x02\u015B\u015C\x03\x02\x02\x02\u015C\u015D\x05V,\x02\u015D" +
		"!\x03\x02\x02\x02\u015E\u0160\x05\xACW\x02\u015F\u015E\x03\x02\x02\x02" +
		"\u015F\u0160\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161\u0162\x07" +
		"\f\x02\x02\u0162\u0163\x05V,\x02\u0163#\x03\x02\x02\x02\u0164\u0165\x07" +
		"\f\x02\x02\u0165\u0169\x07(\x02\x02\u0166\u0168\x05&\x14\x02\u0167\u0166" +
		"\x03\x02\x02\x02\u0168\u016B\x03\x02\x02\x02\u0169\u0167\x03\x02\x02\x02" +
		"\u0169\u016A\x03\x02\x02\x02\u016A\u016C\x03\x02\x02\x02\u016B\u0169\x03" +
		"\x02\x02\x02\u016C\u016D\x07)\x02\x02\u016D%\x03\x02\x02\x02\u016E\u0170" +
		"\x05\xACW\x02\u016F\u016E\x03\x02\x02\x02\u016F\u0170\x03\x02\x02\x02" +
		"\u0170\u0171\x03\x02\x02\x02\u0171\u0172\x05V,\x02\u0172\'\x03\x02\x02" +
		"\x02\u0173\u0175\x05\xACW\x02\u0174\u0173\x03\x02\x02\x02\u0174\u0175" +
		"\x03\x02\x02\x02\u0175\u0176\x03\x02\x02\x02\u0176\u0177\x07\x14\x02\x02" +
		"\u0177\u017E\x05.\x18\x02\u0178\u017A\x05\xACW\x02\u0179\u0178\x03\x02" +
		"\x02\x02\u0179\u017A\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B" +
		"\u017C\x07\x14\x02\x02\u017C\u017E\x050\x19\x02\u017D\u0174\x03\x02\x02" +
		"\x02\u017D\u0179\x03\x02\x02\x02\u017E)\x03\x02\x02\x02\u017F\u0180\x07" +
		"\x14\x02\x02\u0180\u0184\x07(\x02\x02\u0181\u0183\x05,\x17\x02\u0182\u0181" +
		"\x03\x02\x02\x02\u0183\u0186\x03\x02\x02\x02\u0184\u0182\x03\x02\x02\x02" +
		"\u0184\u0185\x03\x02\x02\x02\u0185\u0187\x03\x02\x02\x02\u0186\u0184\x03" +
		"\x02\x02\x02\u0187\u0188\x07)\x02\x02\u0188+\x03\x02\x02\x02\u0189\u018B" +
		"\x05\xACW\x02\u018A\u0189\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02" +
		"\u018B\u018C\x03\x02\x02\x02\u018C\u0192\x05.\x18\x02\u018D\u018F\x05" +
		"\xACW\x02\u018E\u018D\x03\x02\x02\x02\u018E\u018F\x03\x02\x02\x02\u018F" +
		"\u0190\x03\x02\x02\x02\u0190\u0192\x050\x19\x02\u0191\u018A\x03\x02\x02" +
		"\x02\u0191\u018E\x03\x02\x02\x02\u0192-\x03\x02\x02\x02\u0193\u0194\x05" +
		"\xAAV\x02\u0194\u0195\x07.\x02\x02\u0195\u0196\x05f4\x02\u0196/\x03\x02" +
		"\x02\x02\u0197\u0198\x05\xAAV\x02\u0198\u0199\x052\x1A\x02\u0199\u019A" +
		"\x07.\x02\x02\u019A\u019B\x05f4\x02\u019B1\x03\x02\x02\x02\u019C\u019E" +
		"\x054\x1B\x02\u019D\u019C\x03\x02\x02\x02\u019E\u019F\x03\x02\x02\x02" +
		"\u019F\u019D\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A03\x03\x02" +
		"\x02\x02\u01A1\u01A5\x07&\x02\x02\u01A2\u01A3\x05\xAAV\x02\u01A3\u01A4" +
		"\x07.\x02\x02\u01A4\u01A6\x03\x02\x02\x02\u01A5\u01A2\x03\x02\x02\x02" +
		"\u01A5\u01A6\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01A8\x05" +
		"f4\x02\u01A8\u01A9\x07\'\x02\x02\u01A95\x03\x02\x02\x02\u01AA\u01AC\x05" +
		"\xACW\x02\u01AB\u01AA\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC" +
		"\u01AD\x03\x02\x02\x02\u01AD\u01AE\x07\r\x02\x02\u01AE\u01B0\x05~@\x02" +
		"\u01AF\u01B1\x05|?\x02\u01B0\u01AF\x03\x02\x02\x02\u01B0\u01B1\x03\x02" +
		"\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2\u01B3\x05\x84C\x02\u01B37\x03" +
		"\x02\x02\x02\u01B4\u01B6\x05\xACW\x02\u01B5\u01B4\x03\x02\x02\x02\u01B5" +
		"\u01B6\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01B8\x07\r\x02" +
		"\x02\u01B8\u01BA\x05~@\x02\u01B9\u01BB\x05|?\x02\u01BA\u01B9\x03\x02\x02" +
		"\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB9\x03\x02\x02\x02\u01BC\u01BE\x05" +
		"\xACW\x02\u01BD\u01BC\x03\x02\x02\x02\u01BD\u01BE\x03\x02\x02\x02\u01BE" +
		"\u01BF\x03\x02\x02\x02\u01BF\u01C0\x07\x0E\x02\x02\u01C0\u01C1\x05z>\x02" +
		"\u01C1;\x03\x02\x02\x02\u01C2\u01C3\x07\x0E\x02\x02\u01C3\u01C7\x07(\x02" +
		"\x02\u01C4\u01C6\x05> \x02\u01C5\u01C4\x03\x02\x02\x02\u01C6\u01C9\x03" +
		"\x02\x02\x02\u01C7\u01C5\x03\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8" +
		"\u01CA\x03\x02\x02\x02\u01C9\u01C7\x03\x02\x02\x02\u01CA\u01CB\x07)\x02" +
		"\x02\u01CB=\x03\x02\x02\x02\u01CC\u01CE\x05";
	private static readonly _serializedATNSegment1: string =
		"\xACW\x02\u01CD\u01CC\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE" +
		"\u01CF\x03\x02\x02\x02\u01CF\u01D0\x05z>\x02\u01D0?\x03\x02\x02\x02\u01D1" +
		"\u01D3\x05\xACW\x02\u01D2\u01D1\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02" +
		"\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4\u01D5\x07\x0E\x02\x02\u01D5\u01D6" +
		"\x05x=\x02\u01D6A\x03\x02\x02\x02\u01D7\u01D8\x07\x0E\x02\x02\u01D8\u01DC" +
		"\x07(\x02\x02\u01D9\u01DB\x05D#\x02\u01DA\u01D9\x03\x02\x02\x02\u01DB" +
		"\u01DE\x03\x02\x02\x02\u01DC\u01DA\x03\x02\x02\x02\u01DC\u01DD\x03\x02" +
		"\x02\x02\u01DD\u01DF\x03\x02\x02\x02\u01DE\u01DC\x03\x02\x02\x02\u01DF" +
		"\u01E0\x07)\x02\x02\u01E0C\x03\x02\x02\x02\u01E1\u01E3\x05\xACW\x02\u01E2" +
		"\u01E1\x03\x02\x02\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3\u01E4\x03\x02" +
		"\x02\x02\u01E4\u01E5\x05x=\x02\u01E5E\x03\x02\x02\x02\u01E6\u01E8\x05" +
		"\xACW\x02\u01E7\u01E6\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8" +
		"\u01E9\x03\x02\x02\x02\u01E9\u01EA\x07\x0F\x02\x02\u01EA\u01EB\x05z>\x02" +
		"\u01EBG\x03\x02\x02\x02\u01EC\u01ED\x07\x0F\x02\x02\u01ED\u01F1\x07(\x02" +
		"\x02\u01EE\u01F0\x05J&\x02\u01EF\u01EE\x03\x02\x02\x02\u01F0\u01F3\x03" +
		"\x02\x02\x02\u01F1\u01EF\x03\x02\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2" +
		"\u01F4\x03\x02\x02\x02\u01F3\u01F1\x03\x02\x02\x02\u01F4\u01F5\x07)\x02" +
		"\x02\u01F5I\x03\x02\x02\x02\u01F6\u01F8\x05\xACW\x02\u01F7\u01F6\x03\x02" +
		"\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8\u01F9\x03\x02\x02\x02\u01F9" +
		"\u01FA\x05z>\x02\u01FAK\x03\x02\x02\x02\u01FB\u01FD\x05\xACW\x02\u01FC" +
		"\u01FB\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02\u01FD\u01FE\x03\x02" +
		"\x02\x02\u01FE\u01FF\x07\x0F\x02\x02\u01FF\u0200\x05x=\x02\u0200M\x03" +
		"\x02\x02\x02\u0201\u0202\x07\x0F\x02\x02\u0202\u0206\x07(\x02\x02\u0203" +
		"\u0205\x05P)\x02\u0204\u0203\x03\x02\x02\x02\u0205\u0208\x03\x02\x02\x02" +
		"\u0206\u0204\x03\x02\x02\x02\u0206\u0207\x03\x02\x02\x02\u0207\u0209\x03" +
		"\x02\x02\x02\u0208\u0206\x03\x02\x02\x02\u0209\u020A\x07)\x02\x02\u020A" +
		"O\x03\x02\x02\x02\u020B\u020D\x05\xACW\x02\u020C\u020B\x03\x02\x02\x02" +
		"\u020C\u020D\x03\x02\x02\x02\u020D\u020E\x03\x02\x02\x02\u020E\u020F\x05" +
		"x=\x02\u020FQ\x03\x02\x02\x02\u0210\u0212\x05\xACW\x02\u0211\u0210\x03" +
		"\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213" +
		"\u0214\x07\x10\x02\x02\u0214\u0216\x05~@\x02\u0215\u0217\x05|?\x02\u0216" +
		"\u0215\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217\u0218\x03\x02" +
		"\x02\x02\u0218\u0219\x05\x84C\x02\u0219S\x03\x02\x02\x02\u021A\u021C\x05" +
		"\xACW\x02\u021B\u021A\x03\x02\x02\x02\u021B\u021C\x03\x02\x02\x02\u021C" +
		"\u021D\x03\x02\x02\x02\u021D\u021E\x07\x10\x02\x02\u021E\u0220\x05~@\x02" +
		"\u021F\u0221\x05|?\x02\u0220\u021F\x03\x02\x02\x02\u0220\u0221\x03\x02" +
		"\x02\x02\u0221U\x03\x02\x02\x02\u0222\u0226\x05X-\x02\u0223\u0226\x05" +
		"Z.\x02\u0224\u0226\x05\\/\x02\u0225\u0222\x03\x02\x02\x02\u0225\u0223" +
		"\x03\x02\x02\x02\u0225\u0224\x03\x02\x02\x02\u0226W\x03\x02\x02\x02\u0227" +
		"\u022A\x05\xAAV\x02\u0228\u022B\x05`1\x02\u0229\u022B\x05b2\x02\u022A" +
		"\u0228\x03\x02\x02\x02\u022A\u0229\x03\x02\x02\x02\u022BY\x03\x02\x02" +
		"\x02\u022C\u022D\x05\xAAV\x02\u022D\u022E\x05^0\x02\u022E[\x03\x02\x02" +
		"\x02\u022F\u0230\x05\xAAV\x02\u0230]\x03\x02\x02\x02\u0231\u0232\x07$" +
		"\x02\x02\u0232\u0237\x05f4\x02\u0233\u0234\x07+\x02\x02\u0234\u0236\x05" +
		"f4\x02\u0235\u0233\x03\x02\x02\x02\u0236\u0239\x03\x02\x02\x02\u0237\u0235" +
		"\x03\x02\x02\x02\u0237\u0238\x03\x02\x02\x02\u0238\u023A\x03\x02\x02\x02" +
		"\u0239\u0237\x03\x02\x02\x02\u023A\u023B\x07%\x02\x02\u023B_\x03\x02\x02" +
		"\x02\u023C\u0245\x07$\x02\x02\u023D\u0242\x05d3\x02\u023E\u023F\x07+\x02" +
		"\x02\u023F\u0241\x05d3\x02\u0240\u023E\x03\x02\x02\x02\u0241\u0244\x03" +
		"\x02\x02\x02\u0242\u0240\x03\x02\x02\x02\u0242\u0243\x03\x02\x02\x02\u0243" +
		"\u0246\x03\x02\x02\x02\u0244\u0242\x03\x02\x02\x02\u0245\u023D\x03\x02" +
		"\x02\x02\u0245\u0246\x03\x02\x02\x02\u0246\u0247\x03\x02\x02\x02\u0247" +
		"\u0248\x07%\x02\x02\u0248a\x03\x02\x02\x02\u0249\u0255\x07(\x02\x02\u024A" +
		"\u024F\x05d3\x02\u024B\u024C\x07+\x02\x02\u024C\u024E\x05d3\x02\u024D" +
		"\u024B\x03\x02\x02\x02\u024E\u0251\x03\x02\x02\x02\u024F\u024D\x03\x02" +
		"\x02\x02\u024F\u0250\x03\x02\x02\x02\u0250\u0253\x03\x02\x02\x02\u0251" +
		"\u024F\x03\x02\x02\x02\u0252\u0254\x07+\x02\x02\u0253\u0252\x03\x02\x02" +
		"\x02\u0253\u0254\x03\x02\x02\x02\u0254\u0256\x03\x02\x02\x02\u0255\u024A" +
		"\x03\x02\x02\x02\u0255\u0256\x03\x02\x02\x02\u0256\u0257\x03\x02\x02\x02" +
		"\u0257\u0258\x07)\x02\x02\u0258c\x03\x02\x02\x02\u0259\u025B\x05\xACW" +
		"\x02\u025A\u0259\x03\x02\x02\x02\u025A\u025B\x03\x02\x02\x02\u025B\u025C" +
		"\x03\x02\x02\x02\u025C\u025E\x05\xAAV\x02\u025D\u025F\x07,\x02\x02\u025E" +
		"\u025D\x03\x02\x02\x02\u025E\u025F\x03\x02\x02\x02\u025F\u0260\x03\x02" +
		"\x02\x02\u0260\u0261\x07.\x02\x02\u0261\u0262\x05f4\x02\u0262e\x03\x02" +
		"\x02\x02\u0263\u0264\b4\x01\x02\u0264\u0274\x05l7\x02\u0265\u0266\x07" +
		"$\x02\x02\u0266\u026B\x05f4\x02\u0267\u0268\x07+\x02\x02\u0268\u026A\x05" +
		"f4\x02\u0269\u0267\x03\x02\x02\x02\u026A\u026D\x03\x02\x02\x02\u026B\u0269" +
		"\x03\x02\x02\x02\u026B\u026C\x03\x02\x02\x02\u026C\u026E\x03\x02\x02\x02" +
		"\u026D\u026B\x03\x02\x02\x02\u026E\u026F\x07%\x02\x02\u026F\u0274\x03" +
		"\x02\x02\x02\u0270\u0271\x073\x02\x02\u0271\u0274\x05f4\x05\u0272\u0274" +
		"\x05n8\x02\u0273\u0263\x03\x02\x02\x02\u0273\u0265\x03\x02\x02\x02\u0273" +
		"\u0270\x03\x02\x02\x02\u0273\u0272\x03\x02\x02\x02\u0274\u0281\x03\x02" +
		"\x02\x02\u0275\u0276\f\t\x02\x02\u0276\u0280\x05h5\x02\u0277\u0278\f\x07" +
		"\x02\x02\u0278\u0280\x07,\x02\x02\u0279\u027A\f\x06\x02\x02\u027A\u027B" +
		"\x07&\x02\x02\u027B\u0280\x07\'\x02\x02\u027C\u027D\f\x04\x02\x02\u027D" +
		"\u027E\x070\x02\x02\u027E\u0280\x05\xAAV\x02\u027F\u0275\x03\x02\x02\x02" +
		"\u027F\u0277\x03\x02\x02\x02\u027F\u0279\x03\x02\x02\x02\u027F\u027C\x03" +
		"\x02\x02\x02\u0280\u0283\x03\x02\x02\x02\u0281\u027F\x03\x02\x02\x02\u0281" +
		"\u0282\x03\x02\x02\x02\u0282g\x03\x02\x02\x02\u0283\u0281\x03\x02\x02" +
		"\x02\u0284\u0285\x07E\x02\x02\u0285\u028A\x05f4\x02\u0286\u0287\x07+\x02" +
		"\x02\u0287\u0289\x05f4\x02\u0288\u0286\x03\x02\x02\x02\u0289\u028C\x03" +
		"\x02\x02\x02\u028A\u0288\x03\x02\x02\x02\u028A\u028B\x03\x02\x02\x02\u028B" +
		"\u028D\x03\x02\x02\x02\u028C\u028A\x03\x02\x02\x02\u028D\u028E\x07G\x02" +
		"\x02\u028Ei\x03\x02\x02\x02\u028F\u0294\x05\xAAV\x02\u0290\u0291\x07/" +
		"\x02\x02\u0291\u0293\x05\xAAV\x02\u0292\u0290\x03\x02\x02\x02\u0293\u0296" +
		"\x03\x02\x02\x02\u0294\u0292\x03\x02\x02\x02\u0294\u0295\x03\x02\x02\x02" +
		"\u0295k\x03\x02\x02\x02\u0296\u0294\x03\x02\x02\x02\u0297\u0299\x07/\x02" +
		"\x02\u0298\u0297\x03\x02\x02\x02\u0298\u0299\x03\x02\x02\x02\u0299\u029A" +
		"\x03\x02\x02\x02\u029A\u029B\x05j6\x02\u029Bm\x03\x02\x02\x02\u029C\u02A0" +
		"\x05p9\x02\u029D\u02A0\x05r:\x02\u029E\u02A0\x05v<\x02\u029F\u029C\x03" +
		"\x02\x02\x02\u029F\u029D\x03\x02\x02\x02\u029F\u029E\x03\x02\x02\x02\u02A0" +
		"o\x03\x02\x02\x02\u02A1\u02A3\x05\xACW\x02\u02A2\u02A1\x03\x02\x02\x02" +
		"\u02A2\u02A3\x03\x02\x02\x02\u02A3\u02A4\x03\x02\x02\x02\u02A4\u02A5\x07" +
		"\x1F\x02\x02\u02A5\u02A6\x05V,\x02\u02A6q\x03\x02\x02\x02\u02A7\u02A9" +
		"\x05\xACW\x02\u02A8\u02A7\x03\x02\x02\x02\u02A8\u02A9\x03\x02\x02\x02" +
		"\u02A9\u02AA\x03\x02\x02\x02\u02AA\u02AB\x07 \x02\x02\u02AB\u02AC\x05" +
		"\xAAV\x02\u02AC\u02AD\x07(\x02\x02\u02AD\u02AE\x05t;\x02\u02AE\u02AF\x07" +
		")\x02\x02\u02AFs\x03\x02\x02\x02\u02B0\u02B7\x05V,\x02\u02B1\u02B3\x07" +
		"+\x02\x02\u02B2\u02B1\x03\x02\x02\x02\u02B2\u02B3\x03\x02\x02\x02\u02B3" +
		"\u02B4\x03\x02\x02\x02\u02B4\u02B6\x05V,\x02\u02B5\u02B2\x03\x02\x02\x02" +
		"\u02B6\u02B9\x03\x02\x02\x02\u02B7\u02B5\x03\x02\x02\x02\u02B7\u02B8\x03" +
		"\x02\x02\x02\u02B8\u02BB\x03\x02\x02\x02\u02B9\u02B7\x03\x02\x02\x02\u02BA" +
		"\u02BC\x07+\x02\x02\u02BB\u02BA\x03\x02\x02\x02\u02BB\u02BC\x03\x02\x02" +
		"\x02\u02BC\u02BE\x03\x02\x02\x02\u02BD\u02B0\x03\x02\x02\x02\u02BD\u02BE" +
		"\x03\x02\x02\x02\u02BEu\x03\x02\x02\x02\u02BF\u02C1\x05\xACW\x02\u02C0" +
		"\u02BF\x03\x02\x02\x02\u02C0\u02C1\x03\x02\x02\x02\u02C1\u02C2\x03\x02" +
		"\x02\x02\u02C2\u02C3\x07!\x02\x02\u02C3\u02C4\x05\xAAV\x02\u02C4\u02C5" +
		"\x078\x02\x02\u02C5\u02C6\x05f4\x02\u02C6w\x03\x02\x02\x02\u02C7\u02C8" +
		"\x05\xAAV\x02\u02C8\u02CA\x05~@\x02\u02C9\u02CB\x05|?\x02\u02CA\u02C9" +
		"\x03\x02\x02\x02\u02CA\u02CB\x03\x02\x02\x02\u02CBy\x03\x02\x02\x02\u02CC" +
		"\u02CD\x05\xAAV\x02\u02CD\u02CF\x05~@\x02\u02CE\u02D0\x05|?\x02\u02CF" +
		"\u02CE\x03\x02\x02\x02\u02CF\u02D0\x03\x02\x02\x02\u02D0\u02D1\x03\x02" +
		"\x02\x02\u02D1\u02D2\x05\x84C\x02\u02D2{\x03\x02\x02\x02\u02D3\u02D4\x07" +
		"4\x02\x02\u02D4\u02D5\x05f4\x02\u02D5}\x03\x02\x02\x02\u02D6\u02D8\x07" +
		"$\x02\x02\u02D7\u02D9\x05\x80A\x02\u02D8\u02D7\x03\x02\x02\x02\u02D8\u02D9" +
		"\x03\x02\x02\x02\u02D9\u02DA\x03\x02\x02\x02\u02DA\u02DB\x07%\x02\x02" +
		"\u02DB\x7F\x03\x02\x02\x02\u02DC\u02E1\x05\x82B\x02\u02DD\u02DE\x07+\x02" +
		"\x02\u02DE\u02E0\x05\x82B\x02\u02DF\u02DD\x03\x02\x02\x02\u02E0\u02E3" +
		"\x03\x02\x02\x02\u02E1\u02DF\x03\x02\x02\x02\u02E1\u02E2\x03\x02\x02\x02" +
		"\u02E2\x81\x03\x02\x02\x02\u02E3\u02E1\x03\x02\x02\x02\u02E4\u02E6\x05" +
		"\xAAV\x02\u02E5\u02E7\x07,\x02\x02\u02E6\u02E5\x03\x02\x02\x02\u02E6\u02E7" +
		"\x03\x02\x02\x02\u02E7\u02E8\x03\x02\x02\x02\u02E8\u02E9\x07.\x02\x02" +
		"\u02E9\u02EA\x05f4\x02\u02EA\x83\x03\x02\x02\x02\u02EB\u02EF\x07(\x02" +
		"\x02\u02EC\u02EE\x05\x86D\x02\u02ED\u02EC\x03\x02\x02\x02\u02EE\u02F1" +
		"\x03\x02\x02\x02\u02EF\u02ED\x03\x02\x02\x02\u02EF\u02F0\x03\x02\x02\x02" +
		"\u02F0\u02F2\x03\x02\x02\x02\u02F1\u02EF\x03\x02\x02\x02\u02F2\u02F6\x07" +
		")\x02\x02\u02F3\u02F4\x075\x02\x02\u02F4\u02F6\x05\x86D\x02\u02F5\u02EB" +
		"\x03\x02\x02\x02\u02F5\u02F3\x03\x02\x02\x02\u02F6\x85\x03\x02\x02\x02" +
		"\u02F7\u0308\x05\x88E\x02\u02F8\u02F9\x05\x8CG\x02\u02F9\u02FA\t\x02\x02" +
		"\x02\u02FA\u02FB\x05\x8CG\x02\u02FB\u0308\x03\x02\x02\x02\u02FC\u0308" +
		"\x05\x96L\x02\u02FD\u0308\x05\x9EP\x02\u02FE\u02FF\x07\x0E\x02\x02\u02FF" +
		"\u0308\x05\x8CG\x02\u0300\u0301\x07\"\x02\x02\u0301\u0308\x05\x8CG\x02" +
		"\u0302\u0303\x07\x1E\x02\x02\u0303\u0308\x05\x8CG\x02\u0304\u0305\x07" +
		"\x1D\x02\x02\u0305\u0308\x05\x8CG\x02\u0306\u0308\x05\x8CG\x02\u0307\u02F7" +
		"\x03\x02\x02\x02\u0307\u02F8\x03\x02\x02\x02\u0307\u02FC\x03\x02\x02\x02" +
		"\u0307\u02FD\x03\x02\x02\x02\u0307\u02FE\x03\x02\x02\x02\u0307\u0300\x03" +
		"\x02\x02\x02\u0307\u0302\x03\x02\x02\x02\u0307\u0304\x03\x02\x02\x02\u0307" +
		"\u0306\x03\x02\x02\x02\u0308\x87\x03\x02\x02\x02\u0309\u030A\x07\x1C\x02" +
		"\x02\u030A\u030B\x05\x8AF\x02\u030B\u030C\x078\x02\x02\u030C\u030D\x05" +
		"\x8CG\x02\u030D\x89\x03\x02\x02\x02\u030E\u030F\x05\xAAV\x02\u030F\u0310" +
		"\x07.\x02\x02\u0310\u0311\x05f4\x02\u0311\u0328\x03\x02\x02\x02\u0312" +
		"\u0313\x07(\x02\x02\u0313\u0314\x05\xA2R\x02\u0314\u0315\x07)\x02\x02" +
		"\u0315\u0328\x03\x02\x02\x02\u0316\u0317\x07$\x02\x02\u0317\u031D\x05" +
		"\xA2R\x02\u0318\u0319\x07+\x02\x02\u0319\u031A\x07*\x02\x02\u031A\u031B" +
		"\x07*\x02\x02\u031B\u031C\x07*\x02\x02\u031C\u031E\x05\xA2R\x02\u031D" +
		"\u0318\x03\x02\x02\x02\u031D\u031E\x03\x02\x02\x02\u031E\u031F\x03\x02" +
		"\x02\x02\u031F\u0320\x07)\x02\x02\u0320\u0328\x03\x02\x02\x02\u0321\u0322" +
		"\x07$\x02\x02\u0322\u0323\x07+\x02\x02\u0323\u0324\x07*\x02\x02\u0324" +
		"\u0325\x07*\x02\x02\u0325\u0326\x07*\x02\x02\u0326\u0328\x05\xA2R\x02" +
		"\u0327\u030E\x03\x02\x02\x02\u0327\u0312\x03\x02\x02\x02\u0327\u0316\x03" +
		"\x02\x02\x02\u0327\u0321\x03\x02\x02\x02\u0328\x8B\x03\x02\x02\x02\u0329" +
		"\u032A\bG\x01\x02\u032A\u032B\x07$\x02\x02\u032B\u032C\x05\x8CG\x02\u032C" +
		"\u032D\x07%\x02\x02\u032D\u0337\x03\x02\x02\x02\u032E\u032F\t\x03\x02" +
		"\x02\u032F\u0337\x05\x8CG\x0E\u0330\u0331\x07-\x02\x02\u0331\u0337\x05" +
		"\x8CG\r\u0332\u0337\x05\x96L\x02\u0333\u0334\x07\x0F\x02\x02\u0334\u0337" +
		"\x05\x8CG\x04\u0335\u0337\x05\x8EH\x02\u0336\u0329\x03\x02\x02\x02\u0336" +
		"\u032E\x03\x02\x02\x02\u0336\u0330\x03\x02\x02\x02\u0336\u0332\x03\x02" +
		"\x02\x02\u0336\u0333\x03\x02\x02\x02\u0336\u0335\x03\x02\x02\x02\u0337" +
		"\u0363\x03\x02\x02\x02\u0338\u0339\f\f\x02\x02\u0339\u033A\x07I\x02\x02" +
		"\u033A\u0362\x05\x8CG\r\u033B\u033C\f\v\x02\x02\u033C\u033D\t\x04\x02" +
		"\x02\u033D\u0362\x05\x8CG\f\u033E\u033F\f\n\x02\x02\u033F\u0340\t\x03" +
		"\x02\x02\u0340\u0362\x05\x8CG\v\u0341\u0342\f\t\x02\x02\u0342\u0343\t" +
		"\x05\x02\x02\u0343\u0362\x05\x8CG\n\u0344\u0345\f\b\x02\x02\u0345\u0346" +
		"\t\x06\x02\x02\u0346\u0362\x05\x8CG\t\u0347\u0348\f\x07\x02\x02\u0348" +
		"\u0349\x07\x18\x02\x02\u0349\u0362\x05\x8CG\b\u034A\u034B\f\x06\x02\x02" +
		"\u034B\u034C\x07\x19\x02\x02\u034C\u0362\x05\x8CG\x07\u034D\u034E\f\x12" +
		"\x02\x02\u034E\u034F\x07*\x02\x02\u034F\u0362\x05\xAAV\x02\u0350\u0351" +
		"\f\x11\x02\x02\u0351\u0352\x07&\x02\x02\u0352\u0353\x05\x8CG\x02\u0353" +
		"\u0354\x07\'\x02\x02\u0354\u0362\x03\x02\x02\x02\u0355\u0356\f\x10\x02" +
		"\x02\u0356\u0358\x07$\x02\x02\u0357\u0359\x05\xA4S\x02\u0358\u0357\x03" +
		"\x02\x02\x02\u0358\u0359\x03\x02\x02\x02\u0359\u035A\x03\x02\x02\x02\u035A" +
		"\u0362\x07%\x02\x02\u035B\u035C\f\x0F\x02\x02\u035C\u035E\x07$\x02\x02" +
		"\u035D\u035F\x05\xA6T\x02\u035E\u035D\x03\x02\x02\x02\u035E\u035F\x03" +
		"\x02\x02\x02\u035F\u0360\x03\x02\x02\x02\u0360\u0362\x07%\x02\x02\u0361" +
		"\u0338\x03\x02\x02\x02\u0361\u033B\x03\x02\x02\x02\u0361\u033E\x03\x02" +
		"\x02\x02\u0361\u0341\x03\x02\x02\x02\u0361\u0344\x03\x02\x02\x02\u0361" +
		"\u0347\x03\x02\x02\x02\u0361\u034A\x03\x02\x02\x02\u0361\u034D\x03\x02" +
		"\x02\x02\u0361\u0350\x03\x02\x02\x02\u0361\u0355\x03\x02\x02\x02\u0361" +
		"\u035B\x03\x02\x02\x02\u0362\u0365\x03\x02\x02\x02\u0363\u0361\x03\x02" +
		"\x02\x02\u0363\u0364\x03\x02\x02\x02\u0364\x8D\x03\x02\x02\x02\u0365\u0363" +
		"\x03\x02\x02\x02\u0366\u0367\x07$\x02\x02\u0367\u0379\x07%\x02\x02\u0368" +
		"\u0379\x05\x90I\x02\u0369\u036A\x05l7\x02\u036A\u036B\x07$\x02\x02\u036B" +
		"\u036C\x05\xA4S\x02\u036C\u036D\x07%\x02\x02\u036D\u0379\x03\x02\x02\x02" +
		"\u036E\u036F\x07&\x02\x02\u036F\u0370\x05\xA4S\x02\u0370\u0371\x07\'\x02" +
		"\x02\u0371\u0379\x03\x02\x02\x02\u0372\u0379\x07K\x02\x02\u0373\u0379" +
		"\x07L\x02\x02\u0374\u0379\x07M\x02\x02\u0375\u0379\x07\x1A\x02\x02\u0376" +
		"\u0379\x07\x1B\x02\x02\u0377\u0379\x05\xAAV\x02\u0378\u0366\x03\x02\x02" +
		"\x02\u0378\u0368\x03\x02\x02\x02\u0378\u0369\x03\x02\x02\x02\u0378\u036E" +
		"\x03\x02\x02\x02\u0378\u0372\x03\x02\x02\x02\u0378\u0373\x03\x02\x02\x02" +
		"\u0378\u0374\x03\x02\x02\x02\u0378\u0375\x03\x02\x02\x02\u0378\u0376\x03" +
		"\x02\x02\x02\u0378\u0377\x03\x02\x02\x02\u0379\x8F\x03\x02\x02\x02\u037A" +
		"\u037B\x05l7\x02\u037B\u037D\x07(\x02\x02\u037C\u037E\x05\x92J\x02\u037D" +
		"\u037C\x03\x02\x02\x02\u037D\u037E\x03\x02\x02\x02\u037E\u037F\x03\x02" +
		"\x02\x02\u037F\u0380\x07)\x02\x02\u0380\x91\x03\x02\x02\x02\u0381\u0386" +
		"\x05\x94K\x02\u0382\u0383\x07+\x02\x02\u0383\u0385\x05\x94K\x02\u0384" +
		"\u0382\x03\x02\x02\x02\u0385\u0388\x03\x02\x02\x02\u0386\u0384\x03\x02" +
		"\x02\x02\u0386\u0387\x03\x02\x02\x02\u0387\u038A\x03\x02\x02\x02\u0388" +
		"\u0386\x03\x02\x02\x02\u0389\u038B\x07+\x02\x02\u038A\u0389\x03\x02\x02" +
		"\x02\u038A\u038B\x03\x02\x02\x02\u038B\x93\x03\x02\x02\x02\u038C\u038D" +
		"\x05\xAAV\x02\u038D\u038E\x07.\x02\x02\u038E\u038F\x05\x8CG\x02\u038F" +
		"\x95\x03\x02\x02\x02\u0390\u0392\x05\x98M\x02\u0391\u0393\x05\x9AN\x02" +
		"\u0392\u0391\x03\x02\x02\x02\u0392\u0393\x03\x02\x02\x02\u0393\u0395\x03" +
		"\x02\x02\x02\u0394\u0396\x05\x9CO\x02\u0395\u0394\x03\x02\x02\x02\u0395" +
		"\u0396\x03\x02\x02\x02\u0396\x97\x03\x02\x02\x02\u0397\u0398\x07\x16\x02" +
		"\x02\u0398\u0399\x05\x8CG\x02\u0399\u039A\x05\x84C\x02\u039A\u03A0\x03" +
		"\x02\x02\x02\u039B\u039C\x07\x16\x02\x02\u039C\u039D\x05\x88E\x02\u039D" +
		"\u039E\x05\x84C\x02\u039E\u03A0\x03\x02\x02\x02\u039F\u0397\x03\x02\x02" +
		"\x02\u039F\u039B\x03\x02\x02\x02\u03A0\x99\x03\x02\x02\x02\u03A1\u03A2" +
		"\x07\x17\x02\x02\u03A2\u03A4\x05\x98M\x02\u03A3\u03A1\x03\x02\x02\x02" +
		"\u03A4\u03A5\x03\x02\x02\x02\u03A5\u03A3\x03\x02\x02\x02\u03A5\u03A6\x03" +
		"\x02\x02\x02\u03A6\x9B\x03\x02\x02\x02\u03A7\u03A8\x07\x17\x02\x02\u03A8" +
		"\u03A9\x05\x84C\x02\u03A9\x9D\x03\x02\x02\x02\u03AA\u03AB\x07\x11\x02" +
		"\x02\u03AB\u03AC\x05\xA0Q\x02\u03AC\u03AD\x07\x12\x02\x02\u03AD\u03AE" +
		"\x05\x8CG\x02\u03AE\u03AF\x05\x84C\x02\u03AF\u03B6\x03\x02\x02\x02\u03B0" +
		"\u03B1\x07\x11\x02\x02\u03B1\u03B2\x05\x8CG\x02\u03B2\u03B3\x07\x15\x02" +
		"\x02\u03B3\u03B4\x05\x84C\x02\u03B4\u03B6\x03\x02\x02\x02\u03B5\u03AA" +
		"\x03\x02\x02\x02\u03B5\u03B0\x03\x02\x02\x02\u03B6\x9F\x03\x02\x02\x02" +
		"\u03B7\u03BD\x05\xAAV\x02\u03B8\u03B9\x07(\x02\x02\u03B9\u03BA\x05\xA2" +
		"R\x02\u03BA\u03BB\x07)\x02\x02\u03BB\u03BD\x03\x02\x02\x02\u03BC\u03B7" +
		"\x03\x02\x02\x02\u03BC\u03B8\x03\x02\x02\x02\u03BD\xA1\x03\x02\x02\x02" +
		"\u03BE\u03C3\x05\xAAV\x02\u03BF\u03C0\x07+\x02\x02\u03C0\u03C2\x05\xAA" +
		"V\x02\u03C1\u03BF\x03\x02\x02\x02\u03C2\u03C5\x03\x02\x02\x02\u03C3\u03C1" +
		"\x03\x02\x02\x02\u03C3\u03C4\x03\x02\x02\x02\u03C4\xA3\x03\x02\x02\x02" +
		"\u03C5\u03C3\x03\x02\x02\x02\u03C6\u03CB\x05\x8CG\x02\u03C7\u03C8\x07" +
		"+\x02\x02\u03C8\u03CA\x05\x8CG\x02\u03C9\u03C7\x03\x02\x02\x02\u03CA\u03CD" +
		"\x03\x02\x02\x02\u03CB\u03C9\x03\x02\x02\x02\u03CB\u03CC\x03\x02\x02\x02" +
		"\u03CC\xA5\x03\x02\x02\x02\u03CD\u03CB\x03\x02\x02\x02\u03CE\u03D3\x05" +
		"\xA8U\x02\u03CF\u03D0\x07+\x02\x02\u03D0\u03D2\x05\xA8U\x02\u03D1\u03CF" +
		"\x03\x02\x02\x02\u03D2\u03D5\x03\x02\x02\x02\u03D3\u03D1\x03\x02\x02\x02" +
		"\u03D3\u03D4\x03\x02\x02\x02\u03D4\xA7\x03\x02\x02\x02\u03D5\u03D3\x03" +
		"\x02\x02\x02\u03D6\u03D7\x05\xAAV\x02\u03D7\u03D8\x07.\x02\x02\u03D8\u03D9" +
		"\x05\x8CG\x02\u03D9\xA9\x03\x02\x02\x02\u03DA\u03DD\x07J\x02\x02\u03DB" +
		"\u03DD\x05\xAEX\x02\u03DC\u03DA\x03\x02\x02\x02\u03DC\u03DB\x03\x02\x02" +
		"\x02\u03DD\xAB\x03\x02\x02\x02\u03DE\u03E0\t\x07\x02\x02\u03DF\u03DE\x03" +
		"\x02\x02\x02\u03E0\u03E1\x03\x02\x02\x02\u03E1\u03DF\x03\x02\x02\x02\u03E1" +
		"\u03E2\x03\x02\x02\x02\u03E2\xAD\x03\x02\x02\x02\u03E3\u03E4\t\b\x02\x02" +
		"\u03E4\xAF\x03\x02\x02\x02o\xB1\xB6\xBE\xC1\xC7\xCB\xD4\xDC\xDF\xE7\xEB" +
		"\xF2\xFC\u010F\u0116\u011D\u0126\u0138\u0147\u014A\u0154\u015A\u015F\u0169" +
		"\u016F\u0174\u0179\u017D\u0184\u018A\u018E\u0191\u019F\u01A5\u01AB\u01B0" +
		"\u01B5\u01BA\u01BD\u01C7\u01CD\u01D2\u01DC\u01E2\u01E7\u01F1\u01F7\u01FC" +
		"\u0206\u020C\u0211\u0216\u021B\u0220\u0225\u022A\u0237\u0242\u0245\u024F" +
		"\u0253\u0255\u025A\u025E\u026B\u0273\u027F\u0281\u028A\u0294\u0298\u029F" +
		"\u02A2\u02A8\u02B2\u02B7\u02BB\u02BD\u02C0\u02CA\u02CF\u02D8\u02E1\u02E6" +
		"\u02EF\u02F5\u0307\u031D\u0327\u0336\u0358\u035E\u0361\u0363\u0378\u037D" +
		"\u0386\u038A\u0392\u0395\u039F\u03A5\u03B5\u03BC\u03C3\u03CB\u03D3\u03DC" +
		"\u03E1";
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
	public EOF(): TerminalNode { return this.getToken(CWScriptParser.EOF, 0); }
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
	public _parents!: IdentListContext;
	public _interfaces!: InterfaceListContext;
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
	public identList(): IdentListContext | undefined {
		return this.tryGetRuleContext(0, IdentListContext);
	}
	public interfaceList(): InterfaceListContext | undefined {
		return this.tryGetRuleContext(0, InterfaceListContext);
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


export class InterfaceListContext extends ParserRuleContext {
	public interfaceVal(): InterfaceValContext[];
	public interfaceVal(i: number): InterfaceValContext;
	public interfaceVal(i?: number): InterfaceValContext | InterfaceValContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceValContext);
		} else {
			return this.getRuleContext(i, InterfaceValContext);
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
	public get ruleIndex(): number { return CWScriptParser.RULE_interfaceList; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterInterfaceList) {
			listener.enterInterfaceList(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitInterfaceList) {
			listener.exitInterfaceList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitInterfaceList) {
			return visitor.visitInterfaceList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceValContext extends ParserRuleContext {
	public _interfaceName!: IdentContext;
	public _mixins!: IdentListContext;
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RBRACK, 0); }
	public identList(): IdentListContext | undefined {
		return this.tryGetRuleContext(0, IdentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_interfaceVal; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterInterfaceVal) {
			listener.enterInterfaceVal(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitInterfaceVal) {
			listener.exitInterfaceVal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitInterfaceVal) {
			return visitor.visitInterfaceVal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceDefnContext extends ParserRuleContext {
	public _spec!: CwspecContext;
	public _name!: IdentContext;
	public _mixinName!: IdentContext;
	public _parents!: InterfaceListContext;
	public INTERFACE(): TerminalNode { return this.getToken(CWScriptParser.INTERFACE, 0); }
	public interfaceBody(): InterfaceBodyContext {
		return this.getRuleContext(0, InterfaceBodyContext);
	}
	public ident(): IdentContext[];
	public ident(i: number): IdentContext;
	public ident(i?: number): IdentContext | IdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentContext);
		} else {
			return this.getRuleContext(i, IdentContext);
		}
	}
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RBRACK, 0); }
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXTENDS, 0); }
	public cwspec(): CwspecContext | undefined {
		return this.tryGetRuleContext(0, CwspecContext);
	}
	public interfaceList(): InterfaceListContext | undefined {
		return this.tryGetRuleContext(0, InterfaceListContext);
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
	public _symbols!: ImportSymbolListContext;
	public _star!: Token;
	public _fileName!: Token;
	public IMPORT(): TerminalNode { return this.getToken(CWScriptParser.IMPORT, 0); }
	public FROM(): TerminalNode { return this.getToken(CWScriptParser.FROM, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.StringLiteral, 0); }
	public importSymbolList(): ImportSymbolListContext | undefined {
		return this.tryGetRuleContext(0, ImportSymbolListContext);
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MUL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_importStmt; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterImportStmt) {
			listener.enterImportStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitImportStmt) {
			listener.exitImportStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitImportStmt) {
			return visitor.visitImportStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportSymbolListContext extends ParserRuleContext {
	public _importSymbol!: ImportSymbolContext;
	public _importItem: ImportSymbolContext[] = [];
	public importSymbol(): ImportSymbolContext[];
	public importSymbol(i: number): ImportSymbolContext;
	public importSymbol(i?: number): ImportSymbolContext | ImportSymbolContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportSymbolContext);
		} else {
			return this.getRuleContext(i, ImportSymbolContext);
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
	public get ruleIndex(): number { return CWScriptParser.RULE_importSymbolList; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterImportSymbolList) {
			listener.enterImportSymbolList(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitImportSymbolList) {
			listener.exitImportSymbolList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitImportSymbolList) {
			return visitor.visitImportSymbolList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportSymbolContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_importSymbol; }
	public copyFrom(ctx: ImportSymbolContext): void {
		super.copyFrom(ctx);
	}
}
export class GroupedImportSymbolContext extends ImportSymbolContext {
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public importSymbolList(): ImportSymbolListContext {
		return this.getRuleContext(0, ImportSymbolListContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	constructor(ctx: ImportSymbolContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterGroupedImportSymbol) {
			listener.enterGroupedImportSymbol(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitGroupedImportSymbol) {
			listener.exitGroupedImportSymbol(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitGroupedImportSymbol) {
			return visitor.visitGroupedImportSymbol(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypePathImportSymbolContext extends ImportSymbolContext {
	public typePath(): TypePathContext {
		return this.getRuleContext(0, TypePathContext);
	}
	constructor(ctx: ImportSymbolContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTypePathImportSymbol) {
			listener.enterTypePathImportSymbol(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTypePathImportSymbol) {
			listener.exitTypePathImportSymbol(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTypePathImportSymbol) {
			return visitor.visitTypePathImportSymbol(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DestructureImportSymbolContext extends ImportSymbolContext {
	public typePath(): TypePathContext {
		return this.getRuleContext(0, TypePathContext);
	}
	public D_COLON(): TerminalNode { return this.getToken(CWScriptParser.D_COLON, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public importSymbolList(): ImportSymbolListContext {
		return this.getRuleContext(0, ImportSymbolListContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	constructor(ctx: ImportSymbolContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterDestructureImportSymbol) {
			listener.enterDestructureImportSymbol(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitDestructureImportSymbol) {
			listener.exitDestructureImportSymbol(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitDestructureImportSymbol) {
			return visitor.visitDestructureImportSymbol(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AllImportSymbolContext extends ImportSymbolContext {
	public typePath(): TypePathContext {
		return this.getRuleContext(0, TypePathContext);
	}
	public D_COLON(): TerminalNode { return this.getToken(CWScriptParser.D_COLON, 0); }
	public MUL(): TerminalNode { return this.getToken(CWScriptParser.MUL, 0); }
	constructor(ctx: ImportSymbolContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterAllImportSymbol) {
			listener.enterAllImportSymbol(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitAllImportSymbol) {
			listener.exitAllImportSymbol(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitAllImportSymbol) {
			return visitor.visitAllImportSymbol(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RenamedImportSymbolContext extends ImportSymbolContext {
	public importSymbol(): ImportSymbolContext {
		return this.getRuleContext(0, ImportSymbolContext);
	}
	public AS(): TerminalNode { return this.getToken(CWScriptParser.AS, 0); }
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	constructor(ctx: ImportSymbolContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterRenamedImportSymbol) {
			listener.enterRenamedImportSymbol(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitRenamedImportSymbol) {
			listener.exitRenamedImportSymbol(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitRenamedImportSymbol) {
			return visitor.visitRenamedImportSymbol(this);
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
	public mapDefnKey(): MapDefnKeyContext[];
	public mapDefnKey(i: number): MapDefnKeyContext;
	public mapDefnKey(i?: number): MapDefnKeyContext | MapDefnKeyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MapDefnKeyContext);
		} else {
			return this.getRuleContext(i, MapDefnKeyContext);
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
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
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
	public enumVariant_unit(): EnumVariant_unitContext | undefined {
		return this.tryGetRuleContext(0, EnumVariant_unitContext);
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


export class EnumVariant_unitContext extends ParserRuleContext {
	public _name!: IdentContext;
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_enumVariant_unit; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEnumVariant_unit) {
			listener.enterEnumVariant_unit(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEnumVariant_unit) {
			listener.exitEnumVariant_unit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEnumVariant_unit) {
			return visitor.visitEnumVariant_unit(this);
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
export class ReflectiveTypeExprContext extends TypeExprContext {
	public typeExpr(): TypeExprContext {
		return this.getRuleContext(0, TypeExprContext);
	}
	public DOLLAR(): TerminalNode { return this.getToken(CWScriptParser.DOLLAR, 0); }
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterReflectiveTypeExpr) {
			listener.enterReflectiveTypeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitReflectiveTypeExpr) {
			listener.exitReflectiveTypeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitReflectiveTypeExpr) {
			return visitor.visitReflectiveTypeExpr(this);
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
	public _assignOp!: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ, 0); }
	public PLUS_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.PLUS_EQ, 0); }
	public MINUS_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MINUS_EQ, 0); }
	public MUL_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MUL_EQ, 0); }
	public DIV_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.DIV_EQ, 0); }
	public MOD_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MOD_EQ, 0); }
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
export class TupleUnpackLHSFrontBackContext extends LetLHSContext {
	public _front!: IdentListContext;
	public _back!: IdentListContext;
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public identList(): IdentListContext[];
	public identList(i: number): IdentListContext;
	public identList(i?: number): IdentListContext | IdentListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentListContext);
		} else {
			return this.getRuleContext(i, IdentListContext);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.COMMA, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.DOT);
		} else {
			return this.getToken(CWScriptParser.DOT, i);
		}
	}
	constructor(ctx: LetLHSContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTupleUnpackLHSFrontBack) {
			listener.enterTupleUnpackLHSFrontBack(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTupleUnpackLHSFrontBack) {
			listener.exitTupleUnpackLHSFrontBack(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTupleUnpackLHSFrontBack) {
			return visitor.visitTupleUnpackLHSFrontBack(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TupleUnpackLHSBackContext extends LetLHSContext {
	public _back!: IdentListContext;
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public COMMA(): TerminalNode { return this.getToken(CWScriptParser.COMMA, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.DOT);
		} else {
			return this.getToken(CWScriptParser.DOT, i);
		}
	}
	public identList(): IdentListContext {
		return this.getRuleContext(0, IdentListContext);
	}
	constructor(ctx: LetLHSContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTupleUnpackLHSBack) {
			listener.enterTupleUnpackLHSBack(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTupleUnpackLHSBack) {
			listener.exitTupleUnpackLHSBack(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTupleUnpackLHSBack) {
			return visitor.visitTupleUnpackLHSBack(this);
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
export class UnarySignExprContext extends ExprContext {
	public _sign!: Token;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MINUS, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterUnarySignExpr) {
			listener.enterUnarySignExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitUnarySignExpr) {
			listener.exitUnarySignExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitUnarySignExpr) {
			return visitor.visitUnarySignExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryNotExprContext extends ExprContext {
	public EXCLAM(): TerminalNode { return this.getToken(CWScriptParser.EXCLAM, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterUnaryNotExpr) {
			listener.enterUnaryNotExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitUnaryNotExpr) {
			listener.exitUnaryNotExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitUnaryNotExpr) {
			return visitor.visitUnaryNotExpr(this);
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
export class IfExpContext extends ExprContext {
	public ifExpr_(): IfExpr_Context {
		return this.getRuleContext(0, IfExpr_Context);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIfExp) {
			listener.enterIfExp(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIfExp) {
			listener.exitIfExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIfExp) {
			return visitor.visitIfExp(this);
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
	public _item!: ForItemContext;
	public _iterItems!: ExprContext;
	public FOR(): TerminalNode { return this.getToken(CWScriptParser.FOR, 0); }
	public IN(): TerminalNode { return this.getToken(CWScriptParser.IN, 0); }
	public fnBody(): FnBodyContext {
		return this.getRuleContext(0, FnBodyContext);
	}
	public forItem(): ForItemContext {
		return this.getRuleContext(0, ForItemContext);
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


export class ForItemContext extends ParserRuleContext {
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LBRACE, 0); }
	public identList(): IdentListContext | undefined {
		return this.tryGetRuleContext(0, IdentListContext);
	}
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_forItem; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterForItem) {
			listener.enterForItem(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitForItem) {
			listener.exitForItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitForItem) {
			return visitor.visitForItem(this);
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


