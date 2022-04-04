// Generated from /Users/william/t1/cwsc/grammar/CWScriptParser.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class CWScriptParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		CONTRACT=1, INTERFACE=2, IMPORT=3, IMPLEMENTS=4, EXTENSION=5, REQUIRES=6, 
		EXTENDS=7, ERROR=8, EVENT=9, INSTANTIATE=10, EXEC=11, QUERY=12, MIGRATE=13, 
		FOR=14, IN=15, FROM=16, STATE=17, TIMES=18, IF=19, ELSE=20, AND=21, OR=22, 
		TRUE=23, FALSE=24, FN=25, LET=26, FAIL=27, RETURN=28, STRUCT=29, ENUM=30, 
		TYPE=31, EMIT=32, AS=33, LPAREN=34, RPAREN=35, LBRACK=36, RBRACK=37, LBRACE=38, 
		RBRACE=39, DOT=40, COMMA=41, QUEST=42, EXCLAM=43, COLON=44, D_COLON=45, 
		DOLLAR=46, HASH=47, AT=48, AMP=49, ARROW=50, FAT_ARROW=51, S_QUOTE=52, 
		D_QUOTE=53, EQ=54, EQEQ=55, NEQ=56, PLUS=57, PLUS_EQ=58, MINUS=59, MINUS_EQ=60, 
		MUL=61, MUL_EQ=62, DIV=63, DIV_EQ=64, MOD=65, MOD_EQ=66, LT=67, LT_EQ=68, 
		GT=69, GT_EQ=70, POW=71, Ident=72, StringLiteral=73, IntegerLiteral=74, 
		DecimalLiteral=75, CWSPEC_LINE_COMMENT=76, CWSPEC_BLOCK_COMMENT=77, LINE_COMMENT=78, 
		BLOCK_COMMENT=79, WS=80;
	public static final int
		RULE_sourceFile = 0, RULE_topLevelStmt = 1, RULE_contractDefn = 2, RULE_interfaceDefn = 3, 
		RULE_importStmt = 4, RULE_importList = 5, RULE_importItem = 6, RULE_contractBody = 7, 
		RULE_interfaceBody = 8, RULE_contractItem = 9, RULE_interfaceItem = 10, 
		RULE_errorDefn = 11, RULE_errorDefnBlock = 12, RULE_errorDefnBlock_item = 13, 
		RULE_eventDefn = 14, RULE_eventDefnBlock = 15, RULE_eventDefnBlock_item = 16, 
		RULE_stateDefn = 17, RULE_stateDefnBlock = 18, RULE_stateDefnBlock_item = 19, 
		RULE_itemDefn = 20, RULE_mapDefn = 21, RULE_mapDefnKeys = 22, RULE_mapDefnKey = 23, 
		RULE_instantiateDefn = 24, RULE_instantiateDecl = 25, RULE_execDefn = 26, 
		RULE_execDefnBlock = 27, RULE_execDefnBlock_item = 28, RULE_execDecl = 29, 
		RULE_execDeclBlock = 30, RULE_execDeclBlock_item = 31, RULE_queryDefn = 32, 
		RULE_queryDefnBlock = 33, RULE_queryDefnBlock_item = 34, RULE_queryDecl = 35, 
		RULE_queryDeclBlock = 36, RULE_queryDeclBlock_item = 37, RULE_migrateDefn = 38, 
		RULE_migrateDecl = 39, RULE_enumVariant = 40, RULE_enumVariant_struct = 41, 
		RULE_enumVariant_tuple = 42, RULE_tupleMembers = 43, RULE_parenStructMembers = 44, 
		RULE_curlyStructMembers = 45, RULE_structMember = 46, RULE_typeExpr = 47, 
		RULE_typeParam = 48, RULE_pathList = 49, RULE_typePath = 50, RULE_typeDefn = 51, 
		RULE_structDefn = 52, RULE_enumDefn = 53, RULE_enumVariantList = 54, RULE_typeAliasDefn = 55, 
		RULE_namedFnDecl = 56, RULE_namedFnDefn = 57, RULE_fnDefn = 58, RULE_fnType = 59, 
		RULE_fnArgs = 60, RULE_fnArgList = 61, RULE_fnArg = 62, RULE_fnBody = 63, 
		RULE_stmt = 64, RULE_letStmt_ = 65, RULE_letLHS = 66, RULE_assignStmt_ = 67, 
		RULE_assignLHS = 68, RULE_innerAssign = 69, RULE_innerPath = 70, RULE_expr = 71, 
		RULE_val = 72, RULE_structVal_ = 73, RULE_structValMembers = 74, RULE_structValMember = 75, 
		RULE_ifExpr_ = 76, RULE_ifClause_ = 77, RULE_elseIfClauses = 78, RULE_elseClause = 79, 
		RULE_forStmt_ = 80, RULE_identList = 81, RULE_exprList = 82, RULE_namedExprList = 83, 
		RULE_namedExpr = 84, RULE_ident = 85, RULE_cwspec = 86, RULE_reservedKeyword = 87;
	private static String[] makeRuleNames() {
		return new String[] {
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
			"expr", "val", "structVal_", "structValMembers", "structValMember", "ifExpr_", 
			"ifClause_", "elseIfClauses", "elseClause", "forStmt_", "identList", 
			"exprList", "namedExprList", "namedExpr", "ident", "cwspec", "reservedKeyword"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'contract'", "'interface'", "'import'", "'implements'", "'extension'", 
			"'requires'", "'extends'", "'error'", "'event'", "'instantiate'", "'exec'", 
			"'query'", "'migrate'", "'for'", "'in'", "'from'", "'state'", "'times'", 
			"'if'", "'else'", "'and'", "'or'", "'true'", "'false'", "'fn'", "'let'", 
			"'fail'", "'return'", "'struct'", "'enum'", "'type'", "'emit'", "'as'", 
			"'('", "')'", "'['", "']'", "'{'", "'}'", "'.'", "','", "'?'", "'!'", 
			"':'", "'::'", "'$'", "'#'", "'@'", "'&'", "'->'", "'=>'", "'''", "'\"'", 
			"'='", "'=='", "'!='", "'+'", "'+='", "'-'", "'-='", "'*'", "'*='", "'/'", 
			"'/='", "'%'", "'%='", "'<'", "'<='", "'>'", "'>='", "'**'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "CONTRACT", "INTERFACE", "IMPORT", "IMPLEMENTS", "EXTENSION", "REQUIRES", 
			"EXTENDS", "ERROR", "EVENT", "INSTANTIATE", "EXEC", "QUERY", "MIGRATE", 
			"FOR", "IN", "FROM", "STATE", "TIMES", "IF", "ELSE", "AND", "OR", "TRUE", 
			"FALSE", "FN", "LET", "FAIL", "RETURN", "STRUCT", "ENUM", "TYPE", "EMIT", 
			"AS", "LPAREN", "RPAREN", "LBRACK", "RBRACK", "LBRACE", "RBRACE", "DOT", 
			"COMMA", "QUEST", "EXCLAM", "COLON", "D_COLON", "DOLLAR", "HASH", "AT", 
			"AMP", "ARROW", "FAT_ARROW", "S_QUOTE", "D_QUOTE", "EQ", "EQEQ", "NEQ", 
			"PLUS", "PLUS_EQ", "MINUS", "MINUS_EQ", "MUL", "MUL_EQ", "DIV", "DIV_EQ", 
			"MOD", "MOD_EQ", "LT", "LT_EQ", "GT", "GT_EQ", "POW", "Ident", "StringLiteral", 
			"IntegerLiteral", "DecimalLiteral", "CWSPEC_LINE_COMMENT", "CWSPEC_BLOCK_COMMENT", 
			"LINE_COMMENT", "BLOCK_COMMENT", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "CWScriptParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public CWScriptParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class SourceFileContext extends ParserRuleContext {
		public CwspecContext spec;
		public List<TopLevelStmtContext> topLevelStmt() {
			return getRuleContexts(TopLevelStmtContext.class);
		}
		public TopLevelStmtContext topLevelStmt(int i) {
			return getRuleContext(TopLevelStmtContext.class,i);
		}
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public SourceFileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sourceFile; }
	}

	public final SourceFileContext sourceFile() throws RecognitionException {
		SourceFileContext _localctx = new SourceFileContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_sourceFile);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(177);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
			case 1:
				{
				setState(176);
				((SourceFileContext)_localctx).spec = cwspec();
				}
				break;
			}
			setState(182);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT))) != 0) || _la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				{
				setState(179);
				topLevelStmt();
				}
				}
				setState(184);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TopLevelStmtContext extends ParserRuleContext {
		public ContractDefnContext contractDefn() {
			return getRuleContext(ContractDefnContext.class,0);
		}
		public InterfaceDefnContext interfaceDefn() {
			return getRuleContext(InterfaceDefnContext.class,0);
		}
		public ImportStmtContext importStmt() {
			return getRuleContext(ImportStmtContext.class,0);
		}
		public TopLevelStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_topLevelStmt; }
	}

	public final TopLevelStmtContext topLevelStmt() throws RecognitionException {
		TopLevelStmtContext _localctx = new TopLevelStmtContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_topLevelStmt);
		try {
			setState(188);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(185);
				contractDefn();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(186);
				interfaceDefn();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(187);
				importStmt();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ContractDefnContext extends ParserRuleContext {
		public CwspecContext spec;
		public IdentContext name;
		public IdentListContext baseContracts;
		public IdentListContext interfaces;
		public TerminalNode CONTRACT() { return getToken(CWScriptParser.CONTRACT, 0); }
		public ContractBodyContext contractBody() {
			return getRuleContext(ContractBodyContext.class,0);
		}
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode EXTENDS() { return getToken(CWScriptParser.EXTENDS, 0); }
		public TerminalNode IMPLEMENTS() { return getToken(CWScriptParser.IMPLEMENTS, 0); }
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public List<IdentListContext> identList() {
			return getRuleContexts(IdentListContext.class);
		}
		public IdentListContext identList(int i) {
			return getRuleContext(IdentListContext.class,i);
		}
		public ContractDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_contractDefn; }
	}

	public final ContractDefnContext contractDefn() throws RecognitionException {
		ContractDefnContext _localctx = new ContractDefnContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_contractDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(191);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(190);
				((ContractDefnContext)_localctx).spec = cwspec();
				}
			}

			setState(193);
			match(CONTRACT);
			{
			setState(194);
			((ContractDefnContext)_localctx).name = ident();
			}
			setState(197);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXTENDS) {
				{
				setState(195);
				match(EXTENDS);
				setState(196);
				((ContractDefnContext)_localctx).baseContracts = identList();
				}
			}

			setState(201);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IMPLEMENTS) {
				{
				setState(199);
				match(IMPLEMENTS);
				{
				setState(200);
				((ContractDefnContext)_localctx).interfaces = identList();
				}
				}
			}

			setState(203);
			contractBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InterfaceDefnContext extends ParserRuleContext {
		public CwspecContext spec;
		public IdentContext name;
		public IdentListContext baseInterfaces;
		public TerminalNode INTERFACE() { return getToken(CWScriptParser.INTERFACE, 0); }
		public InterfaceBodyContext interfaceBody() {
			return getRuleContext(InterfaceBodyContext.class,0);
		}
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode EXTENDS() { return getToken(CWScriptParser.EXTENDS, 0); }
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public IdentListContext identList() {
			return getRuleContext(IdentListContext.class,0);
		}
		public InterfaceDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_interfaceDefn; }
	}

	public final InterfaceDefnContext interfaceDefn() throws RecognitionException {
		InterfaceDefnContext _localctx = new InterfaceDefnContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_interfaceDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(206);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(205);
				((InterfaceDefnContext)_localctx).spec = cwspec();
				}
			}

			setState(208);
			match(INTERFACE);
			{
			setState(209);
			((InterfaceDefnContext)_localctx).name = ident();
			}
			setState(212);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXTENDS) {
				{
				setState(210);
				match(EXTENDS);
				setState(211);
				((InterfaceDefnContext)_localctx).baseInterfaces = identList();
				}
			}

			setState(214);
			interfaceBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ImportStmtContext extends ParserRuleContext {
		public ImportStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importStmt; }
	 
		public ImportStmtContext() { }
		public void copyFrom(ImportStmtContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ImportItemsStmtContext extends ImportStmtContext {
		public ImportListContext items;
		public Token fileName;
		public TerminalNode IMPORT() { return getToken(CWScriptParser.IMPORT, 0); }
		public TerminalNode FROM() { return getToken(CWScriptParser.FROM, 0); }
		public TerminalNode StringLiteral() { return getToken(CWScriptParser.StringLiteral, 0); }
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public ImportListContext importList() {
			return getRuleContext(ImportListContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(CWScriptParser.COMMA, 0); }
		public ImportItemsStmtContext(ImportStmtContext ctx) { copyFrom(ctx); }
	}
	public static class ImportAllStmtContext extends ImportStmtContext {
		public Token fileName;
		public TerminalNode IMPORT() { return getToken(CWScriptParser.IMPORT, 0); }
		public TerminalNode MUL() { return getToken(CWScriptParser.MUL, 0); }
		public TerminalNode FROM() { return getToken(CWScriptParser.FROM, 0); }
		public TerminalNode StringLiteral() { return getToken(CWScriptParser.StringLiteral, 0); }
		public ImportAllStmtContext(ImportStmtContext ctx) { copyFrom(ctx); }
	}

	public final ImportStmtContext importStmt() throws RecognitionException {
		ImportStmtContext _localctx = new ImportStmtContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_importStmt);
		int _la;
		try {
			setState(234);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				_localctx = new ImportAllStmtContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(216);
				match(IMPORT);
				setState(217);
				match(MUL);
				setState(218);
				match(FROM);
				{
				setState(219);
				((ImportAllStmtContext)_localctx).fileName = match(StringLiteral);
				}
				}
				break;
			case 2:
				_localctx = new ImportItemsStmtContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(220);
				match(IMPORT);
				setState(229);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case LPAREN:
					{
					{
					setState(221);
					match(LPAREN);
					{
					setState(222);
					((ImportItemsStmtContext)_localctx).items = importList();
					}
					setState(224);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==COMMA) {
						{
						setState(223);
						match(COMMA);
						}
					}

					setState(226);
					match(RPAREN);
					}
					}
					break;
				case CONTRACT:
				case INTERFACE:
				case IMPORT:
				case IMPLEMENTS:
				case EXTENDS:
				case ERROR:
				case EVENT:
				case INSTANTIATE:
				case EXEC:
				case QUERY:
				case MIGRATE:
				case FOR:
				case IN:
				case FROM:
				case STATE:
				case TIMES:
				case IF:
				case ELSE:
				case AND:
				case OR:
				case TRUE:
				case FALSE:
				case FN:
				case LET:
				case RETURN:
				case STRUCT:
				case ENUM:
				case TYPE:
				case EMIT:
				case Ident:
					{
					{
					setState(228);
					((ImportItemsStmtContext)_localctx).items = importList();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(231);
				match(FROM);
				{
				setState(232);
				((ImportItemsStmtContext)_localctx).fileName = match(StringLiteral);
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ImportListContext extends ParserRuleContext {
		public ImportItemContext importItem;
		public List<ImportItemContext> importItems = new ArrayList<ImportItemContext>();
		public List<ImportItemContext> importItem() {
			return getRuleContexts(ImportItemContext.class);
		}
		public ImportItemContext importItem(int i) {
			return getRuleContext(ImportItemContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public ImportListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importList; }
	}

	public final ImportListContext importList() throws RecognitionException {
		ImportListContext _localctx = new ImportListContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_importList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(236);
			((ImportListContext)_localctx).importItem = importItem();
			((ImportListContext)_localctx).importItems.add(((ImportListContext)_localctx).importItem);
			}
			setState(241);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(237);
					match(COMMA);
					{
					setState(238);
					((ImportListContext)_localctx).importItem = importItem();
					((ImportListContext)_localctx).importItems.add(((ImportListContext)_localctx).importItem);
					}
					}
					} 
				}
				setState(243);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ImportItemContext extends ParserRuleContext {
		public IdentContext symbol;
		public IdentContext alias;
		public List<IdentContext> ident() {
			return getRuleContexts(IdentContext.class);
		}
		public IdentContext ident(int i) {
			return getRuleContext(IdentContext.class,i);
		}
		public TerminalNode AS() { return getToken(CWScriptParser.AS, 0); }
		public ImportItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importItem; }
	}

	public final ImportItemContext importItem() throws RecognitionException {
		ImportItemContext _localctx = new ImportItemContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_importItem);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(244);
			((ImportItemContext)_localctx).symbol = ident();
			}
			setState(247);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==AS) {
				{
				setState(245);
				match(AS);
				setState(246);
				((ImportItemContext)_localctx).alias = ident();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ContractBodyContext extends ParserRuleContext {
		public ContractItemContext items;
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public List<ContractItemContext> contractItem() {
			return getRuleContexts(ContractItemContext.class);
		}
		public ContractItemContext contractItem(int i) {
			return getRuleContext(ContractItemContext.class,i);
		}
		public ContractBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_contractBody; }
	}

	public final ContractBodyContext contractBody() throws RecognitionException {
		ContractBodyContext _localctx = new ContractBodyContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_contractBody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(249);
			match(LBRACE);
			setState(253);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << MIGRATE) | (1L << STATE) | (1L << FN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE))) != 0) || _la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				{
				setState(250);
				((ContractBodyContext)_localctx).items = contractItem();
				}
				}
				setState(255);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(256);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InterfaceBodyContext extends ParserRuleContext {
		public InterfaceItemContext items;
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public List<InterfaceItemContext> interfaceItem() {
			return getRuleContexts(InterfaceItemContext.class);
		}
		public InterfaceItemContext interfaceItem(int i) {
			return getRuleContext(InterfaceItemContext.class,i);
		}
		public InterfaceBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_interfaceBody; }
	}

	public final InterfaceBodyContext interfaceBody() throws RecognitionException {
		InterfaceBodyContext _localctx = new InterfaceBodyContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_interfaceBody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(258);
			match(LBRACE);
			setState(262);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << MIGRATE) | (1L << STATE) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE))) != 0) || _la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				{
				setState(259);
				((InterfaceBodyContext)_localctx).items = interfaceItem();
				}
				}
				setState(264);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(265);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ContractItemContext extends ParserRuleContext {
		public TypeDefnContext typeDefn() {
			return getRuleContext(TypeDefnContext.class,0);
		}
		public FnDefnContext fnDefn() {
			return getRuleContext(FnDefnContext.class,0);
		}
		public ErrorDefnContext errorDefn() {
			return getRuleContext(ErrorDefnContext.class,0);
		}
		public ErrorDefnBlockContext errorDefnBlock() {
			return getRuleContext(ErrorDefnBlockContext.class,0);
		}
		public EventDefnContext eventDefn() {
			return getRuleContext(EventDefnContext.class,0);
		}
		public EventDefnBlockContext eventDefnBlock() {
			return getRuleContext(EventDefnBlockContext.class,0);
		}
		public StateDefnContext stateDefn() {
			return getRuleContext(StateDefnContext.class,0);
		}
		public StateDefnBlockContext stateDefnBlock() {
			return getRuleContext(StateDefnBlockContext.class,0);
		}
		public InstantiateDefnContext instantiateDefn() {
			return getRuleContext(InstantiateDefnContext.class,0);
		}
		public ExecDefnContext execDefn() {
			return getRuleContext(ExecDefnContext.class,0);
		}
		public ExecDefnBlockContext execDefnBlock() {
			return getRuleContext(ExecDefnBlockContext.class,0);
		}
		public QueryDefnContext queryDefn() {
			return getRuleContext(QueryDefnContext.class,0);
		}
		public QueryDefnBlockContext queryDefnBlock() {
			return getRuleContext(QueryDefnBlockContext.class,0);
		}
		public MigrateDefnContext migrateDefn() {
			return getRuleContext(MigrateDefnContext.class,0);
		}
		public ContractItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_contractItem; }
	}

	public final ContractItemContext contractItem() throws RecognitionException {
		ContractItemContext _localctx = new ContractItemContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_contractItem);
		try {
			setState(281);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(267);
				typeDefn();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(268);
				fnDefn();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(269);
				errorDefn();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(270);
				errorDefnBlock();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(271);
				eventDefn();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(272);
				eventDefnBlock();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(273);
				stateDefn();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(274);
				stateDefnBlock();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(275);
				instantiateDefn();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(276);
				execDefn();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(277);
				execDefnBlock();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(278);
				queryDefn();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(279);
				queryDefnBlock();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(280);
				migrateDefn();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InterfaceItemContext extends ParserRuleContext {
		public TypeDefnContext typeDefn() {
			return getRuleContext(TypeDefnContext.class,0);
		}
		public ErrorDefnContext errorDefn() {
			return getRuleContext(ErrorDefnContext.class,0);
		}
		public ErrorDefnBlockContext errorDefnBlock() {
			return getRuleContext(ErrorDefnBlockContext.class,0);
		}
		public EventDefnContext eventDefn() {
			return getRuleContext(EventDefnContext.class,0);
		}
		public EventDefnBlockContext eventDefnBlock() {
			return getRuleContext(EventDefnBlockContext.class,0);
		}
		public StateDefnContext stateDefn() {
			return getRuleContext(StateDefnContext.class,0);
		}
		public StateDefnBlockContext stateDefnBlock() {
			return getRuleContext(StateDefnBlockContext.class,0);
		}
		public InstantiateDeclContext instantiateDecl() {
			return getRuleContext(InstantiateDeclContext.class,0);
		}
		public ExecDeclContext execDecl() {
			return getRuleContext(ExecDeclContext.class,0);
		}
		public ExecDeclBlockContext execDeclBlock() {
			return getRuleContext(ExecDeclBlockContext.class,0);
		}
		public QueryDeclContext queryDecl() {
			return getRuleContext(QueryDeclContext.class,0);
		}
		public QueryDeclBlockContext queryDeclBlock() {
			return getRuleContext(QueryDeclBlockContext.class,0);
		}
		public MigrateDeclContext migrateDecl() {
			return getRuleContext(MigrateDeclContext.class,0);
		}
		public InterfaceItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_interfaceItem; }
	}

	public final InterfaceItemContext interfaceItem() throws RecognitionException {
		InterfaceItemContext _localctx = new InterfaceItemContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_interfaceItem);
		try {
			setState(296);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(283);
				typeDefn();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(284);
				errorDefn();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(285);
				errorDefnBlock();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(286);
				eventDefn();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(287);
				eventDefnBlock();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(288);
				stateDefn();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(289);
				stateDefnBlock();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(290);
				instantiateDecl();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(291);
				execDecl();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(292);
				execDeclBlock();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(293);
				queryDecl();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(294);
				queryDeclBlock();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(295);
				migrateDecl();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ErrorDefnContext extends ParserRuleContext {
		public CwspecContext spec;
		public TerminalNode ERROR() { return getToken(CWScriptParser.ERROR, 0); }
		public EnumVariant_structContext enumVariant_struct() {
			return getRuleContext(EnumVariant_structContext.class,0);
		}
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public ErrorDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_errorDefn; }
	}

	public final ErrorDefnContext errorDefn() throws RecognitionException {
		ErrorDefnContext _localctx = new ErrorDefnContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_errorDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(299);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(298);
				((ErrorDefnContext)_localctx).spec = cwspec();
				}
			}

			setState(301);
			match(ERROR);
			setState(302);
			enumVariant_struct();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ErrorDefnBlockContext extends ParserRuleContext {
		public TerminalNode ERROR() { return getToken(CWScriptParser.ERROR, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public List<ErrorDefnBlock_itemContext> errorDefnBlock_item() {
			return getRuleContexts(ErrorDefnBlock_itemContext.class);
		}
		public ErrorDefnBlock_itemContext errorDefnBlock_item(int i) {
			return getRuleContext(ErrorDefnBlock_itemContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public ErrorDefnBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_errorDefnBlock; }
	}

	public final ErrorDefnBlockContext errorDefnBlock() throws RecognitionException {
		ErrorDefnBlockContext _localctx = new ErrorDefnBlockContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_errorDefnBlock);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(304);
			match(ERROR);
			setState(305);
			match(LBRACE);
			setState(317);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << MIGRATE) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << TIMES) | (1L << IF) | (1L << ELSE) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT))) != 0) || ((((_la - 72)) & ~0x3f) == 0 && ((1L << (_la - 72)) & ((1L << (Ident - 72)) | (1L << (CWSPEC_LINE_COMMENT - 72)) | (1L << (CWSPEC_BLOCK_COMMENT - 72)))) != 0)) {
				{
				setState(306);
				errorDefnBlock_item();
				setState(311);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(307);
						match(COMMA);
						setState(308);
						errorDefnBlock_item();
						}
						} 
					}
					setState(313);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
				}
				setState(315);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMA) {
					{
					setState(314);
					match(COMMA);
					}
				}

				}
			}

			setState(319);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ErrorDefnBlock_itemContext extends ParserRuleContext {
		public CwspecContext spec;
		public EnumVariant_structContext enumVariant_struct() {
			return getRuleContext(EnumVariant_structContext.class,0);
		}
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public ErrorDefnBlock_itemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_errorDefnBlock_item; }
	}

	public final ErrorDefnBlock_itemContext errorDefnBlock_item() throws RecognitionException {
		ErrorDefnBlock_itemContext _localctx = new ErrorDefnBlock_itemContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_errorDefnBlock_item);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(322);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(321);
				((ErrorDefnBlock_itemContext)_localctx).spec = cwspec();
				}
			}

			setState(324);
			enumVariant_struct();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EventDefnContext extends ParserRuleContext {
		public CwspecContext spec;
		public TerminalNode EVENT() { return getToken(CWScriptParser.EVENT, 0); }
		public EnumVariant_structContext enumVariant_struct() {
			return getRuleContext(EnumVariant_structContext.class,0);
		}
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public EventDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eventDefn; }
	}

	public final EventDefnContext eventDefn() throws RecognitionException {
		EventDefnContext _localctx = new EventDefnContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_eventDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(327);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(326);
				((EventDefnContext)_localctx).spec = cwspec();
				}
			}

			setState(329);
			match(EVENT);
			setState(330);
			enumVariant_struct();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EventDefnBlockContext extends ParserRuleContext {
		public TerminalNode EVENT() { return getToken(CWScriptParser.EVENT, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public List<EventDefnBlock_itemContext> eventDefnBlock_item() {
			return getRuleContexts(EventDefnBlock_itemContext.class);
		}
		public EventDefnBlock_itemContext eventDefnBlock_item(int i) {
			return getRuleContext(EventDefnBlock_itemContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public EventDefnBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eventDefnBlock; }
	}

	public final EventDefnBlockContext eventDefnBlock() throws RecognitionException {
		EventDefnBlockContext _localctx = new EventDefnBlockContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_eventDefnBlock);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(332);
			match(EVENT);
			setState(333);
			match(LBRACE);
			setState(345);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << MIGRATE) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << TIMES) | (1L << IF) | (1L << ELSE) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT))) != 0) || ((((_la - 72)) & ~0x3f) == 0 && ((1L << (_la - 72)) & ((1L << (Ident - 72)) | (1L << (CWSPEC_LINE_COMMENT - 72)) | (1L << (CWSPEC_BLOCK_COMMENT - 72)))) != 0)) {
				{
				setState(334);
				eventDefnBlock_item();
				setState(339);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(335);
						match(COMMA);
						setState(336);
						eventDefnBlock_item();
						}
						} 
					}
					setState(341);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
				}
				setState(343);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMA) {
					{
					setState(342);
					match(COMMA);
					}
				}

				}
			}

			setState(347);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EventDefnBlock_itemContext extends ParserRuleContext {
		public CwspecContext spec;
		public EnumVariant_structContext enumVariant_struct() {
			return getRuleContext(EnumVariant_structContext.class,0);
		}
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public EventDefnBlock_itemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eventDefnBlock_item; }
	}

	public final EventDefnBlock_itemContext eventDefnBlock_item() throws RecognitionException {
		EventDefnBlock_itemContext _localctx = new EventDefnBlock_itemContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_eventDefnBlock_item);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(350);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(349);
				((EventDefnBlock_itemContext)_localctx).spec = cwspec();
				}
			}

			setState(352);
			enumVariant_struct();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StateDefnContext extends ParserRuleContext {
		public StateDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stateDefn; }
	 
		public StateDefnContext() { }
		public void copyFrom(StateDefnContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class StateMapDefnContext extends StateDefnContext {
		public CwspecContext spec;
		public MapDefnContext map;
		public TerminalNode STATE() { return getToken(CWScriptParser.STATE, 0); }
		public MapDefnContext mapDefn() {
			return getRuleContext(MapDefnContext.class,0);
		}
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public StateMapDefnContext(StateDefnContext ctx) { copyFrom(ctx); }
	}
	public static class StateItemDefnContext extends StateDefnContext {
		public CwspecContext spec;
		public ItemDefnContext item;
		public TerminalNode STATE() { return getToken(CWScriptParser.STATE, 0); }
		public ItemDefnContext itemDefn() {
			return getRuleContext(ItemDefnContext.class,0);
		}
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public StateItemDefnContext(StateDefnContext ctx) { copyFrom(ctx); }
	}

	public final StateDefnContext stateDefn() throws RecognitionException {
		StateDefnContext _localctx = new StateDefnContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_stateDefn);
		int _la;
		try {
			setState(364);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,29,_ctx) ) {
			case 1:
				_localctx = new StateItemDefnContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(355);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
					{
					setState(354);
					((StateItemDefnContext)_localctx).spec = cwspec();
					}
				}

				setState(357);
				match(STATE);
				{
				setState(358);
				((StateItemDefnContext)_localctx).item = itemDefn();
				}
				}
				break;
			case 2:
				_localctx = new StateMapDefnContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(360);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
					{
					setState(359);
					((StateMapDefnContext)_localctx).spec = cwspec();
					}
				}

				setState(362);
				match(STATE);
				setState(363);
				((StateMapDefnContext)_localctx).map = mapDefn();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StateDefnBlockContext extends ParserRuleContext {
		public TerminalNode STATE() { return getToken(CWScriptParser.STATE, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public List<StateDefnBlock_itemContext> stateDefnBlock_item() {
			return getRuleContexts(StateDefnBlock_itemContext.class);
		}
		public StateDefnBlock_itemContext stateDefnBlock_item(int i) {
			return getRuleContext(StateDefnBlock_itemContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public StateDefnBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stateDefnBlock; }
	}

	public final StateDefnBlockContext stateDefnBlock() throws RecognitionException {
		StateDefnBlockContext _localctx = new StateDefnBlockContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_stateDefnBlock);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(366);
			match(STATE);
			setState(367);
			match(LBRACE);
			setState(379);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << MIGRATE) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << TIMES) | (1L << IF) | (1L << ELSE) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT))) != 0) || ((((_la - 72)) & ~0x3f) == 0 && ((1L << (_la - 72)) & ((1L << (Ident - 72)) | (1L << (CWSPEC_LINE_COMMENT - 72)) | (1L << (CWSPEC_BLOCK_COMMENT - 72)))) != 0)) {
				{
				setState(368);
				stateDefnBlock_item();
				setState(373);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,30,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(369);
						match(COMMA);
						setState(370);
						stateDefnBlock_item();
						}
						} 
					}
					setState(375);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,30,_ctx);
				}
				setState(377);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMA) {
					{
					setState(376);
					match(COMMA);
					}
				}

				}
			}

			setState(381);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StateDefnBlock_itemContext extends ParserRuleContext {
		public StateDefnBlock_itemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stateDefnBlock_item; }
	 
		public StateDefnBlock_itemContext() { }
		public void copyFrom(StateDefnBlock_itemContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class StateBlockItemDefnContext extends StateDefnBlock_itemContext {
		public CwspecContext spec;
		public ItemDefnContext item;
		public ItemDefnContext itemDefn() {
			return getRuleContext(ItemDefnContext.class,0);
		}
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public StateBlockItemDefnContext(StateDefnBlock_itemContext ctx) { copyFrom(ctx); }
	}
	public static class StateBlockMapDefnContext extends StateDefnBlock_itemContext {
		public CwspecContext spec;
		public MapDefnContext map;
		public MapDefnContext mapDefn() {
			return getRuleContext(MapDefnContext.class,0);
		}
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public StateBlockMapDefnContext(StateDefnBlock_itemContext ctx) { copyFrom(ctx); }
	}

	public final StateDefnBlock_itemContext stateDefnBlock_item() throws RecognitionException {
		StateDefnBlock_itemContext _localctx = new StateDefnBlock_itemContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_stateDefnBlock_item);
		int _la;
		try {
			setState(391);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,35,_ctx) ) {
			case 1:
				_localctx = new StateBlockItemDefnContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(384);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
					{
					setState(383);
					((StateBlockItemDefnContext)_localctx).spec = cwspec();
					}
				}

				{
				setState(386);
				((StateBlockItemDefnContext)_localctx).item = itemDefn();
				}
				}
				break;
			case 2:
				_localctx = new StateBlockMapDefnContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(388);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
					{
					setState(387);
					((StateBlockMapDefnContext)_localctx).spec = cwspec();
					}
				}

				{
				setState(390);
				((StateBlockMapDefnContext)_localctx).map = mapDefn();
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ItemDefnContext extends ParserRuleContext {
		public IdentContext key;
		public TypeExprContext valueType;
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public ItemDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_itemDefn; }
	}

	public final ItemDefnContext itemDefn() throws RecognitionException {
		ItemDefnContext _localctx = new ItemDefnContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_itemDefn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(393);
			((ItemDefnContext)_localctx).key = ident();
			}
			setState(394);
			match(COLON);
			{
			setState(395);
			((ItemDefnContext)_localctx).valueType = typeExpr(0);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MapDefnContext extends ParserRuleContext {
		public IdentContext key;
		public MapDefnKeysContext mapKeys;
		public TypeExprContext valueType;
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public MapDefnKeysContext mapDefnKeys() {
			return getRuleContext(MapDefnKeysContext.class,0);
		}
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public MapDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mapDefn; }
	}

	public final MapDefnContext mapDefn() throws RecognitionException {
		MapDefnContext _localctx = new MapDefnContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_mapDefn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(397);
			((MapDefnContext)_localctx).key = ident();
			}
			{
			setState(398);
			((MapDefnContext)_localctx).mapKeys = mapDefnKeys();
			}
			setState(399);
			match(COLON);
			{
			setState(400);
			((MapDefnContext)_localctx).valueType = typeExpr(0);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MapDefnKeysContext extends ParserRuleContext {
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public List<MapDefnKeyContext> mapDefnKey() {
			return getRuleContexts(MapDefnKeyContext.class);
		}
		public MapDefnKeyContext mapDefnKey(int i) {
			return getRuleContext(MapDefnKeyContext.class,i);
		}
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public MapDefnKeysContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mapDefnKeys; }
	}

	public final MapDefnKeysContext mapDefnKeys() throws RecognitionException {
		MapDefnKeysContext _localctx = new MapDefnKeysContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_mapDefnKeys);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(402);
			match(LBRACK);
			setState(403);
			mapDefnKey();
			setState(408);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(404);
				match(COMMA);
				setState(405);
				mapDefnKey();
				}
				}
				setState(410);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(411);
			match(RBRACK);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MapDefnKeyContext extends ParserRuleContext {
		public IdentContext keyName;
		public TypeExprContext keyType;
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public MapDefnKeyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mapDefnKey; }
	}

	public final MapDefnKeyContext mapDefnKey() throws RecognitionException {
		MapDefnKeyContext _localctx = new MapDefnKeyContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_mapDefnKey);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(416);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,37,_ctx) ) {
			case 1:
				{
				setState(413);
				((MapDefnKeyContext)_localctx).keyName = ident();
				setState(414);
				match(COLON);
				}
				break;
			}
			{
			setState(418);
			((MapDefnKeyContext)_localctx).keyType = typeExpr(0);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InstantiateDefnContext extends ParserRuleContext {
		public CwspecContext spec;
		public TerminalNode INSTANTIATE() { return getToken(CWScriptParser.INSTANTIATE, 0); }
		public FnArgsContext fnArgs() {
			return getRuleContext(FnArgsContext.class,0);
		}
		public FnBodyContext fnBody() {
			return getRuleContext(FnBodyContext.class,0);
		}
		public FnTypeContext fnType() {
			return getRuleContext(FnTypeContext.class,0);
		}
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public InstantiateDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instantiateDefn; }
	}

	public final InstantiateDefnContext instantiateDefn() throws RecognitionException {
		InstantiateDefnContext _localctx = new InstantiateDefnContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_instantiateDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(421);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(420);
				((InstantiateDefnContext)_localctx).spec = cwspec();
				}
			}

			setState(423);
			match(INSTANTIATE);
			setState(424);
			fnArgs();
			setState(426);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(425);
				fnType();
				}
			}

			setState(428);
			fnBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InstantiateDeclContext extends ParserRuleContext {
		public CwspecContext spec;
		public TerminalNode INSTANTIATE() { return getToken(CWScriptParser.INSTANTIATE, 0); }
		public FnArgsContext fnArgs() {
			return getRuleContext(FnArgsContext.class,0);
		}
		public FnTypeContext fnType() {
			return getRuleContext(FnTypeContext.class,0);
		}
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public InstantiateDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instantiateDecl; }
	}

	public final InstantiateDeclContext instantiateDecl() throws RecognitionException {
		InstantiateDeclContext _localctx = new InstantiateDeclContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_instantiateDecl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(431);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(430);
				((InstantiateDeclContext)_localctx).spec = cwspec();
				}
			}

			setState(433);
			match(INSTANTIATE);
			setState(434);
			fnArgs();
			setState(436);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(435);
				fnType();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExecDefnContext extends ParserRuleContext {
		public CwspecContext spec;
		public TerminalNode EXEC() { return getToken(CWScriptParser.EXEC, 0); }
		public NamedFnDefnContext namedFnDefn() {
			return getRuleContext(NamedFnDefnContext.class,0);
		}
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public ExecDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_execDefn; }
	}

	public final ExecDefnContext execDefn() throws RecognitionException {
		ExecDefnContext _localctx = new ExecDefnContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_execDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(439);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(438);
				((ExecDefnContext)_localctx).spec = cwspec();
				}
			}

			setState(441);
			match(EXEC);
			setState(442);
			namedFnDefn();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExecDefnBlockContext extends ParserRuleContext {
		public TerminalNode EXEC() { return getToken(CWScriptParser.EXEC, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public List<ExecDefnBlock_itemContext> execDefnBlock_item() {
			return getRuleContexts(ExecDefnBlock_itemContext.class);
		}
		public ExecDefnBlock_itemContext execDefnBlock_item(int i) {
			return getRuleContext(ExecDefnBlock_itemContext.class,i);
		}
		public ExecDefnBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_execDefnBlock; }
	}

	public final ExecDefnBlockContext execDefnBlock() throws RecognitionException {
		ExecDefnBlockContext _localctx = new ExecDefnBlockContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_execDefnBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(444);
			match(EXEC);
			setState(445);
			match(LBRACE);
			setState(449);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << MIGRATE) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << TIMES) | (1L << IF) | (1L << ELSE) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT))) != 0) || ((((_la - 72)) & ~0x3f) == 0 && ((1L << (_la - 72)) & ((1L << (Ident - 72)) | (1L << (CWSPEC_LINE_COMMENT - 72)) | (1L << (CWSPEC_BLOCK_COMMENT - 72)))) != 0)) {
				{
				{
				setState(446);
				execDefnBlock_item();
				}
				}
				setState(451);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(452);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExecDefnBlock_itemContext extends ParserRuleContext {
		public CwspecContext spec;
		public NamedFnDefnContext namedFnDefn() {
			return getRuleContext(NamedFnDefnContext.class,0);
		}
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public ExecDefnBlock_itemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_execDefnBlock_item; }
	}

	public final ExecDefnBlock_itemContext execDefnBlock_item() throws RecognitionException {
		ExecDefnBlock_itemContext _localctx = new ExecDefnBlock_itemContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_execDefnBlock_item);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(455);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(454);
				((ExecDefnBlock_itemContext)_localctx).spec = cwspec();
				}
			}

			setState(457);
			namedFnDefn();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExecDeclContext extends ParserRuleContext {
		public CwspecContext spec;
		public TerminalNode EXEC() { return getToken(CWScriptParser.EXEC, 0); }
		public NamedFnDeclContext namedFnDecl() {
			return getRuleContext(NamedFnDeclContext.class,0);
		}
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public ExecDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_execDecl; }
	}

	public final ExecDeclContext execDecl() throws RecognitionException {
		ExecDeclContext _localctx = new ExecDeclContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_execDecl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(460);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(459);
				((ExecDeclContext)_localctx).spec = cwspec();
				}
			}

			setState(462);
			match(EXEC);
			setState(463);
			namedFnDecl();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExecDeclBlockContext extends ParserRuleContext {
		public TerminalNode EXEC() { return getToken(CWScriptParser.EXEC, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public List<ExecDeclBlock_itemContext> execDeclBlock_item() {
			return getRuleContexts(ExecDeclBlock_itemContext.class);
		}
		public ExecDeclBlock_itemContext execDeclBlock_item(int i) {
			return getRuleContext(ExecDeclBlock_itemContext.class,i);
		}
		public ExecDeclBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_execDeclBlock; }
	}

	public final ExecDeclBlockContext execDeclBlock() throws RecognitionException {
		ExecDeclBlockContext _localctx = new ExecDeclBlockContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_execDeclBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(465);
			match(EXEC);
			setState(466);
			match(LBRACE);
			setState(470);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << MIGRATE) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << TIMES) | (1L << IF) | (1L << ELSE) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT))) != 0) || ((((_la - 72)) & ~0x3f) == 0 && ((1L << (_la - 72)) & ((1L << (Ident - 72)) | (1L << (CWSPEC_LINE_COMMENT - 72)) | (1L << (CWSPEC_BLOCK_COMMENT - 72)))) != 0)) {
				{
				{
				setState(467);
				execDeclBlock_item();
				}
				}
				setState(472);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(473);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExecDeclBlock_itemContext extends ParserRuleContext {
		public CwspecContext spec;
		public NamedFnDeclContext namedFnDecl() {
			return getRuleContext(NamedFnDeclContext.class,0);
		}
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public ExecDeclBlock_itemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_execDeclBlock_item; }
	}

	public final ExecDeclBlock_itemContext execDeclBlock_item() throws RecognitionException {
		ExecDeclBlock_itemContext _localctx = new ExecDeclBlock_itemContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_execDeclBlock_item);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(476);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(475);
				((ExecDeclBlock_itemContext)_localctx).spec = cwspec();
				}
			}

			setState(478);
			namedFnDecl();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QueryDefnContext extends ParserRuleContext {
		public CwspecContext spec;
		public TerminalNode QUERY() { return getToken(CWScriptParser.QUERY, 0); }
		public NamedFnDefnContext namedFnDefn() {
			return getRuleContext(NamedFnDefnContext.class,0);
		}
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public QueryDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_queryDefn; }
	}

	public final QueryDefnContext queryDefn() throws RecognitionException {
		QueryDefnContext _localctx = new QueryDefnContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_queryDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(481);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(480);
				((QueryDefnContext)_localctx).spec = cwspec();
				}
			}

			setState(483);
			match(QUERY);
			setState(484);
			namedFnDefn();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QueryDefnBlockContext extends ParserRuleContext {
		public TerminalNode QUERY() { return getToken(CWScriptParser.QUERY, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public List<QueryDefnBlock_itemContext> queryDefnBlock_item() {
			return getRuleContexts(QueryDefnBlock_itemContext.class);
		}
		public QueryDefnBlock_itemContext queryDefnBlock_item(int i) {
			return getRuleContext(QueryDefnBlock_itemContext.class,i);
		}
		public QueryDefnBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_queryDefnBlock; }
	}

	public final QueryDefnBlockContext queryDefnBlock() throws RecognitionException {
		QueryDefnBlockContext _localctx = new QueryDefnBlockContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_queryDefnBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(486);
			match(QUERY);
			setState(487);
			match(LBRACE);
			setState(491);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << MIGRATE) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << TIMES) | (1L << IF) | (1L << ELSE) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT))) != 0) || ((((_la - 72)) & ~0x3f) == 0 && ((1L << (_la - 72)) & ((1L << (Ident - 72)) | (1L << (CWSPEC_LINE_COMMENT - 72)) | (1L << (CWSPEC_BLOCK_COMMENT - 72)))) != 0)) {
				{
				{
				setState(488);
				queryDefnBlock_item();
				}
				}
				setState(493);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(494);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QueryDefnBlock_itemContext extends ParserRuleContext {
		public CwspecContext spec;
		public NamedFnDefnContext namedFnDefn() {
			return getRuleContext(NamedFnDefnContext.class,0);
		}
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public QueryDefnBlock_itemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_queryDefnBlock_item; }
	}

	public final QueryDefnBlock_itemContext queryDefnBlock_item() throws RecognitionException {
		QueryDefnBlock_itemContext _localctx = new QueryDefnBlock_itemContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_queryDefnBlock_item);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(497);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(496);
				((QueryDefnBlock_itemContext)_localctx).spec = cwspec();
				}
			}

			setState(499);
			namedFnDefn();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QueryDeclContext extends ParserRuleContext {
		public CwspecContext spec;
		public TerminalNode QUERY() { return getToken(CWScriptParser.QUERY, 0); }
		public NamedFnDeclContext namedFnDecl() {
			return getRuleContext(NamedFnDeclContext.class,0);
		}
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public QueryDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_queryDecl; }
	}

	public final QueryDeclContext queryDecl() throws RecognitionException {
		QueryDeclContext _localctx = new QueryDeclContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_queryDecl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(502);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(501);
				((QueryDeclContext)_localctx).spec = cwspec();
				}
			}

			setState(504);
			match(QUERY);
			setState(505);
			namedFnDecl();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QueryDeclBlockContext extends ParserRuleContext {
		public TerminalNode QUERY() { return getToken(CWScriptParser.QUERY, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public List<QueryDeclBlock_itemContext> queryDeclBlock_item() {
			return getRuleContexts(QueryDeclBlock_itemContext.class);
		}
		public QueryDeclBlock_itemContext queryDeclBlock_item(int i) {
			return getRuleContext(QueryDeclBlock_itemContext.class,i);
		}
		public QueryDeclBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_queryDeclBlock; }
	}

	public final QueryDeclBlockContext queryDeclBlock() throws RecognitionException {
		QueryDeclBlockContext _localctx = new QueryDeclBlockContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_queryDeclBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(507);
			match(QUERY);
			setState(508);
			match(LBRACE);
			setState(512);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << MIGRATE) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << TIMES) | (1L << IF) | (1L << ELSE) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT))) != 0) || ((((_la - 72)) & ~0x3f) == 0 && ((1L << (_la - 72)) & ((1L << (Ident - 72)) | (1L << (CWSPEC_LINE_COMMENT - 72)) | (1L << (CWSPEC_BLOCK_COMMENT - 72)))) != 0)) {
				{
				{
				setState(509);
				queryDeclBlock_item();
				}
				}
				setState(514);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(515);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QueryDeclBlock_itemContext extends ParserRuleContext {
		public CwspecContext spec;
		public NamedFnDeclContext namedFnDecl() {
			return getRuleContext(NamedFnDeclContext.class,0);
		}
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public QueryDeclBlock_itemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_queryDeclBlock_item; }
	}

	public final QueryDeclBlock_itemContext queryDeclBlock_item() throws RecognitionException {
		QueryDeclBlock_itemContext _localctx = new QueryDeclBlock_itemContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_queryDeclBlock_item);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(518);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(517);
				((QueryDeclBlock_itemContext)_localctx).spec = cwspec();
				}
			}

			setState(520);
			namedFnDecl();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MigrateDefnContext extends ParserRuleContext {
		public CwspecContext spec;
		public TerminalNode MIGRATE() { return getToken(CWScriptParser.MIGRATE, 0); }
		public FnArgsContext fnArgs() {
			return getRuleContext(FnArgsContext.class,0);
		}
		public FnBodyContext fnBody() {
			return getRuleContext(FnBodyContext.class,0);
		}
		public FnTypeContext fnType() {
			return getRuleContext(FnTypeContext.class,0);
		}
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public MigrateDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_migrateDefn; }
	}

	public final MigrateDefnContext migrateDefn() throws RecognitionException {
		MigrateDefnContext _localctx = new MigrateDefnContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_migrateDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(523);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(522);
				((MigrateDefnContext)_localctx).spec = cwspec();
				}
			}

			setState(525);
			match(MIGRATE);
			setState(526);
			fnArgs();
			setState(528);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(527);
				fnType();
				}
			}

			setState(530);
			fnBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MigrateDeclContext extends ParserRuleContext {
		public CwspecContext spec;
		public TerminalNode MIGRATE() { return getToken(CWScriptParser.MIGRATE, 0); }
		public FnArgsContext fnArgs() {
			return getRuleContext(FnArgsContext.class,0);
		}
		public FnTypeContext fnType() {
			return getRuleContext(FnTypeContext.class,0);
		}
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public MigrateDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_migrateDecl; }
	}

	public final MigrateDeclContext migrateDecl() throws RecognitionException {
		MigrateDeclContext _localctx = new MigrateDeclContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_migrateDecl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(533);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(532);
				((MigrateDeclContext)_localctx).spec = cwspec();
				}
			}

			setState(535);
			match(MIGRATE);
			setState(536);
			fnArgs();
			setState(538);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(537);
				fnType();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumVariantContext extends ParserRuleContext {
		public EnumVariant_structContext enumVariant_struct() {
			return getRuleContext(EnumVariant_structContext.class,0);
		}
		public EnumVariant_tupleContext enumVariant_tuple() {
			return getRuleContext(EnumVariant_tupleContext.class,0);
		}
		public EnumVariantContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumVariant; }
	}

	public final EnumVariantContext enumVariant() throws RecognitionException {
		EnumVariantContext _localctx = new EnumVariantContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_enumVariant);
		try {
			setState(542);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,58,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(540);
				enumVariant_struct();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(541);
				enumVariant_tuple();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumVariant_structContext extends ParserRuleContext {
		public IdentContext name;
		public ParenStructMembersContext parenStructMembers() {
			return getRuleContext(ParenStructMembersContext.class,0);
		}
		public CurlyStructMembersContext curlyStructMembers() {
			return getRuleContext(CurlyStructMembersContext.class,0);
		}
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public EnumVariant_structContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumVariant_struct; }
	}

	public final EnumVariant_structContext enumVariant_struct() throws RecognitionException {
		EnumVariant_structContext _localctx = new EnumVariant_structContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_enumVariant_struct);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(544);
			((EnumVariant_structContext)_localctx).name = ident();
			}
			setState(547);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LPAREN:
				{
				setState(545);
				parenStructMembers();
				}
				break;
			case LBRACE:
				{
				setState(546);
				curlyStructMembers();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumVariant_tupleContext extends ParserRuleContext {
		public IdentContext name;
		public TupleMembersContext members;
		public TupleMembersContext tupleMembers() {
			return getRuleContext(TupleMembersContext.class,0);
		}
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public EnumVariant_tupleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumVariant_tuple; }
	}

	public final EnumVariant_tupleContext enumVariant_tuple() throws RecognitionException {
		EnumVariant_tupleContext _localctx = new EnumVariant_tupleContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_enumVariant_tuple);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(549);
			((EnumVariant_tupleContext)_localctx).name = ident();
			}
			setState(550);
			((EnumVariant_tupleContext)_localctx).members = tupleMembers();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TupleMembersContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public List<TypeExprContext> typeExpr() {
			return getRuleContexts(TypeExprContext.class);
		}
		public TypeExprContext typeExpr(int i) {
			return getRuleContext(TypeExprContext.class,i);
		}
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public TupleMembersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tupleMembers; }
	}

	public final TupleMembersContext tupleMembers() throws RecognitionException {
		TupleMembersContext _localctx = new TupleMembersContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_tupleMembers);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(552);
			match(LPAREN);
			setState(553);
			typeExpr(0);
			setState(558);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(554);
				match(COMMA);
				setState(555);
				typeExpr(0);
				}
				}
				setState(560);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(561);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParenStructMembersContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public List<StructMemberContext> structMember() {
			return getRuleContexts(StructMemberContext.class);
		}
		public StructMemberContext structMember(int i) {
			return getRuleContext(StructMemberContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public ParenStructMembersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parenStructMembers; }
	}

	public final ParenStructMembersContext parenStructMembers() throws RecognitionException {
		ParenStructMembersContext _localctx = new ParenStructMembersContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_parenStructMembers);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(563);
			match(LPAREN);
			setState(572);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << MIGRATE) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << TIMES) | (1L << IF) | (1L << ELSE) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT))) != 0) || ((((_la - 72)) & ~0x3f) == 0 && ((1L << (_la - 72)) & ((1L << (Ident - 72)) | (1L << (CWSPEC_LINE_COMMENT - 72)) | (1L << (CWSPEC_BLOCK_COMMENT - 72)))) != 0)) {
				{
				setState(564);
				structMember();
				setState(569);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(565);
					match(COMMA);
					setState(566);
					structMember();
					}
					}
					setState(571);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(574);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CurlyStructMembersContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public List<StructMemberContext> structMember() {
			return getRuleContexts(StructMemberContext.class);
		}
		public StructMemberContext structMember(int i) {
			return getRuleContext(StructMemberContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public CurlyStructMembersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_curlyStructMembers; }
	}

	public final CurlyStructMembersContext curlyStructMembers() throws RecognitionException {
		CurlyStructMembersContext _localctx = new CurlyStructMembersContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_curlyStructMembers);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(576);
			match(LBRACE);
			setState(588);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << MIGRATE) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << TIMES) | (1L << IF) | (1L << ELSE) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT))) != 0) || ((((_la - 72)) & ~0x3f) == 0 && ((1L << (_la - 72)) & ((1L << (Ident - 72)) | (1L << (CWSPEC_LINE_COMMENT - 72)) | (1L << (CWSPEC_BLOCK_COMMENT - 72)))) != 0)) {
				{
				setState(577);
				structMember();
				setState(582);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,63,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(578);
						match(COMMA);
						setState(579);
						structMember();
						}
						} 
					}
					setState(584);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,63,_ctx);
				}
				setState(586);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMA) {
					{
					setState(585);
					match(COMMA);
					}
				}

				}
			}

			setState(590);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StructMemberContext extends ParserRuleContext {
		public CwspecContext spec;
		public IdentContext name;
		public Token option;
		public TypeExprContext valueType;
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public TerminalNode QUEST() { return getToken(CWScriptParser.QUEST, 0); }
		public StructMemberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structMember; }
	}

	public final StructMemberContext structMember() throws RecognitionException {
		StructMemberContext _localctx = new StructMemberContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_structMember);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(593);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(592);
				((StructMemberContext)_localctx).spec = cwspec();
				}
			}

			{
			setState(595);
			((StructMemberContext)_localctx).name = ident();
			}
			setState(597);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==QUEST) {
				{
				setState(596);
				((StructMemberContext)_localctx).option = match(QUEST);
				}
			}

			setState(599);
			match(COLON);
			{
			setState(600);
			((StructMemberContext)_localctx).valueType = typeExpr(0);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeExprContext extends ParserRuleContext {
		public TypeExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeExpr; }
	 
		public TypeExprContext() { }
		public void copyFrom(TypeExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class RefTypeExprContext extends TypeExprContext {
		public TerminalNode AMP() { return getToken(CWScriptParser.AMP, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public RefTypeExprContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	public static class ParamzdTypeExprContext extends TypeExprContext {
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TypeParamContext typeParam() {
			return getRuleContext(TypeParamContext.class,0);
		}
		public ParamzdTypeExprContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	public static class TupleTypeExprContext extends TypeExprContext {
		public TypeExprContext typeExpr;
		public List<TypeExprContext> members = new ArrayList<TypeExprContext>();
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public List<TypeExprContext> typeExpr() {
			return getRuleContexts(TypeExprContext.class);
		}
		public TypeExprContext typeExpr(int i) {
			return getRuleContext(TypeExprContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public TupleTypeExprContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	public static class ShortOptionTypeExprContext extends TypeExprContext {
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TerminalNode QUEST() { return getToken(CWScriptParser.QUEST, 0); }
		public ShortOptionTypeExprContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	public static class TypeDefnExprContext extends TypeExprContext {
		public TypeDefnContext typeDefn() {
			return getRuleContext(TypeDefnContext.class,0);
		}
		public TypeDefnExprContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	public static class TypePathExprContext extends TypeExprContext {
		public TypePathContext typePath() {
			return getRuleContext(TypePathContext.class,0);
		}
		public TypePathExprContext(TypeExprContext ctx) { copyFrom(ctx); }
	}
	public static class ShortVecTypeExprContext extends TypeExprContext {
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public ShortVecTypeExprContext(TypeExprContext ctx) { copyFrom(ctx); }
	}

	public final TypeExprContext typeExpr() throws RecognitionException {
		return typeExpr(0);
	}

	private TypeExprContext typeExpr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		TypeExprContext _localctx = new TypeExprContext(_ctx, _parentState);
		TypeExprContext _prevctx = _localctx;
		int _startState = 94;
		enterRecursionRule(_localctx, 94, RULE_typeExpr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(618);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,69,_ctx) ) {
			case 1:
				{
				_localctx = new TypePathExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(603);
				typePath();
				}
				break;
			case 2:
				{
				_localctx = new TupleTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(604);
				match(LPAREN);
				{
				setState(605);
				((TupleTypeExprContext)_localctx).typeExpr = typeExpr(0);
				((TupleTypeExprContext)_localctx).members.add(((TupleTypeExprContext)_localctx).typeExpr);
				}
				setState(610);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(606);
					match(COMMA);
					setState(607);
					((TupleTypeExprContext)_localctx).typeExpr = typeExpr(0);
					((TupleTypeExprContext)_localctx).members.add(((TupleTypeExprContext)_localctx).typeExpr);
					}
					}
					setState(612);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(613);
				match(RPAREN);
				}
				break;
			case 3:
				{
				_localctx = new RefTypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(615);
				match(AMP);
				setState(616);
				typeExpr(2);
				}
				break;
			case 4:
				{
				_localctx = new TypeDefnExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(617);
				typeDefn();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(629);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,71,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(627);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,70,_ctx) ) {
					case 1:
						{
						_localctx = new ParamzdTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_typeExpr);
						setState(620);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(621);
						typeParam();
						}
						break;
					case 2:
						{
						_localctx = new ShortOptionTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_typeExpr);
						setState(622);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(623);
						match(QUEST);
						}
						break;
					case 3:
						{
						_localctx = new ShortVecTypeExprContext(new TypeExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_typeExpr);
						setState(624);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(625);
						match(LBRACK);
						setState(626);
						match(RBRACK);
						}
						break;
					}
					} 
				}
				setState(631);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,71,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class TypeParamContext extends ParserRuleContext {
		public TerminalNode LT() { return getToken(CWScriptParser.LT, 0); }
		public List<TypeExprContext> typeExpr() {
			return getRuleContexts(TypeExprContext.class);
		}
		public TypeExprContext typeExpr(int i) {
			return getRuleContext(TypeExprContext.class,i);
		}
		public TerminalNode GT() { return getToken(CWScriptParser.GT, 0); }
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public TypeParamContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeParam; }
	}

	public final TypeParamContext typeParam() throws RecognitionException {
		TypeParamContext _localctx = new TypeParamContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_typeParam);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(632);
			match(LT);
			setState(633);
			typeExpr(0);
			setState(638);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(634);
				match(COMMA);
				setState(635);
				typeExpr(0);
				}
				}
				setState(640);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(641);
			match(GT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PathListContext extends ParserRuleContext {
		public List<IdentContext> ident() {
			return getRuleContexts(IdentContext.class);
		}
		public IdentContext ident(int i) {
			return getRuleContext(IdentContext.class,i);
		}
		public List<TerminalNode> D_COLON() { return getTokens(CWScriptParser.D_COLON); }
		public TerminalNode D_COLON(int i) {
			return getToken(CWScriptParser.D_COLON, i);
		}
		public PathListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pathList; }
	}

	public final PathListContext pathList() throws RecognitionException {
		PathListContext _localctx = new PathListContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_pathList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(643);
			ident();
			}
			setState(648);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,73,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(644);
					match(D_COLON);
					setState(645);
					ident();
					}
					} 
				}
				setState(650);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,73,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypePathContext extends ParserRuleContext {
		public Token root;
		public PathListContext pathList() {
			return getRuleContext(PathListContext.class,0);
		}
		public TerminalNode D_COLON() { return getToken(CWScriptParser.D_COLON, 0); }
		public TypePathContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typePath; }
	}

	public final TypePathContext typePath() throws RecognitionException {
		TypePathContext _localctx = new TypePathContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_typePath);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(652);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==D_COLON) {
				{
				setState(651);
				((TypePathContext)_localctx).root = match(D_COLON);
				}
			}

			setState(654);
			pathList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeDefnContext extends ParserRuleContext {
		public StructDefnContext structDefn() {
			return getRuleContext(StructDefnContext.class,0);
		}
		public EnumDefnContext enumDefn() {
			return getRuleContext(EnumDefnContext.class,0);
		}
		public TypeAliasDefnContext typeAliasDefn() {
			return getRuleContext(TypeAliasDefnContext.class,0);
		}
		public TypeDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeDefn; }
	}

	public final TypeDefnContext typeDefn() throws RecognitionException {
		TypeDefnContext _localctx = new TypeDefnContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_typeDefn);
		try {
			setState(659);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,75,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(656);
				structDefn();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(657);
				enumDefn();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(658);
				typeAliasDefn();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StructDefnContext extends ParserRuleContext {
		public CwspecContext spec;
		public TerminalNode STRUCT() { return getToken(CWScriptParser.STRUCT, 0); }
		public EnumVariantContext enumVariant() {
			return getRuleContext(EnumVariantContext.class,0);
		}
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public StructDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structDefn; }
	}

	public final StructDefnContext structDefn() throws RecognitionException {
		StructDefnContext _localctx = new StructDefnContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_structDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(662);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(661);
				((StructDefnContext)_localctx).spec = cwspec();
				}
			}

			setState(664);
			match(STRUCT);
			setState(665);
			enumVariant();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumDefnContext extends ParserRuleContext {
		public CwspecContext spec;
		public IdentContext name;
		public TerminalNode ENUM() { return getToken(CWScriptParser.ENUM, 0); }
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public EnumVariantListContext enumVariantList() {
			return getRuleContext(EnumVariantListContext.class,0);
		}
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public EnumDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumDefn; }
	}

	public final EnumDefnContext enumDefn() throws RecognitionException {
		EnumDefnContext _localctx = new EnumDefnContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_enumDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(668);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(667);
				((EnumDefnContext)_localctx).spec = cwspec();
				}
			}

			setState(670);
			match(ENUM);
			{
			setState(671);
			((EnumDefnContext)_localctx).name = ident();
			}
			setState(672);
			match(LBRACE);
			setState(673);
			enumVariantList();
			setState(674);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumVariantListContext extends ParserRuleContext {
		public List<EnumVariantContext> enumVariant() {
			return getRuleContexts(EnumVariantContext.class);
		}
		public EnumVariantContext enumVariant(int i) {
			return getRuleContext(EnumVariantContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public EnumVariantListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumVariantList; }
	}

	public final EnumVariantListContext enumVariantList() throws RecognitionException {
		EnumVariantListContext _localctx = new EnumVariantListContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_enumVariantList);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(689);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << MIGRATE) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << TIMES) | (1L << IF) | (1L << ELSE) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT))) != 0) || _la==Ident) {
				{
				setState(676);
				enumVariant();
				setState(683);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,79,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(678);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==COMMA) {
							{
							setState(677);
							match(COMMA);
							}
						}

						setState(680);
						enumVariant();
						}
						} 
					}
					setState(685);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,79,_ctx);
				}
				setState(687);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMA) {
					{
					setState(686);
					match(COMMA);
					}
				}

				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeAliasDefnContext extends ParserRuleContext {
		public CwspecContext spec;
		public IdentContext name;
		public TypeExprContext typeValue;
		public TerminalNode TYPE() { return getToken(CWScriptParser.TYPE, 0); }
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public TypeAliasDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeAliasDefn; }
	}

	public final TypeAliasDefnContext typeAliasDefn() throws RecognitionException {
		TypeAliasDefnContext _localctx = new TypeAliasDefnContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_typeAliasDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(692);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(691);
				((TypeAliasDefnContext)_localctx).spec = cwspec();
				}
			}

			setState(694);
			match(TYPE);
			{
			setState(695);
			((TypeAliasDefnContext)_localctx).name = ident();
			}
			setState(696);
			match(EQ);
			{
			setState(697);
			((TypeAliasDefnContext)_localctx).typeValue = typeExpr(0);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NamedFnDeclContext extends ParserRuleContext {
		public IdentContext fnName;
		public FnArgsContext fnArgs() {
			return getRuleContext(FnArgsContext.class,0);
		}
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public FnTypeContext fnType() {
			return getRuleContext(FnTypeContext.class,0);
		}
		public NamedFnDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_namedFnDecl; }
	}

	public final NamedFnDeclContext namedFnDecl() throws RecognitionException {
		NamedFnDeclContext _localctx = new NamedFnDeclContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_namedFnDecl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(699);
			((NamedFnDeclContext)_localctx).fnName = ident();
			}
			setState(700);
			fnArgs();
			setState(702);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(701);
				fnType();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NamedFnDefnContext extends ParserRuleContext {
		public IdentContext fnName;
		public FnArgsContext fnArgs() {
			return getRuleContext(FnArgsContext.class,0);
		}
		public FnBodyContext fnBody() {
			return getRuleContext(FnBodyContext.class,0);
		}
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public FnTypeContext fnType() {
			return getRuleContext(FnTypeContext.class,0);
		}
		public NamedFnDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_namedFnDefn; }
	}

	public final NamedFnDefnContext namedFnDefn() throws RecognitionException {
		NamedFnDefnContext _localctx = new NamedFnDefnContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_namedFnDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(704);
			((NamedFnDefnContext)_localctx).fnName = ident();
			}
			setState(705);
			fnArgs();
			setState(707);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(706);
				fnType();
				}
			}

			setState(709);
			fnBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FnDefnContext extends ParserRuleContext {
		public CwspecContext spec;
		public TerminalNode FN() { return getToken(CWScriptParser.FN, 0); }
		public NamedFnDefnContext namedFnDefn() {
			return getRuleContext(NamedFnDefnContext.class,0);
		}
		public CwspecContext cwspec() {
			return getRuleContext(CwspecContext.class,0);
		}
		public FnDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fnDefn; }
	}

	public final FnDefnContext fnDefn() throws RecognitionException {
		FnDefnContext _localctx = new FnDefnContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_fnDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(712);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) {
				{
				setState(711);
				((FnDefnContext)_localctx).spec = cwspec();
				}
			}

			setState(714);
			match(FN);
			setState(715);
			namedFnDefn();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FnTypeContext extends ParserRuleContext {
		public TypeExprContext retType;
		public TerminalNode ARROW() { return getToken(CWScriptParser.ARROW, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public FnTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fnType; }
	}

	public final FnTypeContext fnType() throws RecognitionException {
		FnTypeContext _localctx = new FnTypeContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_fnType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(717);
			match(ARROW);
			setState(718);
			((FnTypeContext)_localctx).retType = typeExpr(0);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FnArgsContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public FnArgListContext fnArgList() {
			return getRuleContext(FnArgListContext.class,0);
		}
		public FnArgsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fnArgs; }
	}

	public final FnArgsContext fnArgs() throws RecognitionException {
		FnArgsContext _localctx = new FnArgsContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_fnArgs);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(720);
			match(LPAREN);
			setState(722);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << MIGRATE) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << TIMES) | (1L << IF) | (1L << ELSE) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT))) != 0) || _la==Ident) {
				{
				setState(721);
				fnArgList();
				}
			}

			setState(724);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FnArgListContext extends ParserRuleContext {
		public List<FnArgContext> fnArg() {
			return getRuleContexts(FnArgContext.class);
		}
		public FnArgContext fnArg(int i) {
			return getRuleContext(FnArgContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public FnArgListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fnArgList; }
	}

	public final FnArgListContext fnArgList() throws RecognitionException {
		FnArgListContext _localctx = new FnArgListContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_fnArgList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(726);
			fnArg();
			setState(731);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(727);
				match(COMMA);
				setState(728);
				fnArg();
				}
				}
				setState(733);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FnArgContext extends ParserRuleContext {
		public IdentContext argName;
		public Token option;
		public TypeExprContext argType;
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public TerminalNode QUEST() { return getToken(CWScriptParser.QUEST, 0); }
		public FnArgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fnArg; }
	}

	public final FnArgContext fnArg() throws RecognitionException {
		FnArgContext _localctx = new FnArgContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_fnArg);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(734);
			((FnArgContext)_localctx).argName = ident();
			}
			setState(736);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==QUEST) {
				{
				setState(735);
				((FnArgContext)_localctx).option = match(QUEST);
				}
			}

			setState(738);
			match(COLON);
			{
			setState(739);
			((FnArgContext)_localctx).argType = typeExpr(0);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FnBodyContext extends ParserRuleContext {
		public FnBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fnBody; }
	 
		public FnBodyContext() { }
		public void copyFrom(FnBodyContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class NormalFnBodyContext extends FnBodyContext {
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
		public NormalFnBodyContext(FnBodyContext ctx) { copyFrom(ctx); }
	}
	public static class ArrowFnBodyContext extends FnBodyContext {
		public TerminalNode FAT_ARROW() { return getToken(CWScriptParser.FAT_ARROW, 0); }
		public StmtContext stmt() {
			return getRuleContext(StmtContext.class,0);
		}
		public ArrowFnBodyContext(FnBodyContext ctx) { copyFrom(ctx); }
	}

	public final FnBodyContext fnBody() throws RecognitionException {
		FnBodyContext _localctx = new FnBodyContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_fnBody);
		int _la;
		try {
			setState(751);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LBRACE:
				_localctx = new NormalFnBodyContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(741);
				match(LBRACE);
				setState(745);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << MIGRATE) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << TIMES) | (1L << IF) | (1L << ELSE) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << FAIL) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT) | (1L << LPAREN) | (1L << LBRACK) | (1L << EXCLAM) | (1L << D_COLON) | (1L << PLUS) | (1L << MINUS))) != 0) || ((((_la - 72)) & ~0x3f) == 0 && ((1L << (_la - 72)) & ((1L << (Ident - 72)) | (1L << (StringLiteral - 72)) | (1L << (IntegerLiteral - 72)) | (1L << (DecimalLiteral - 72)))) != 0)) {
					{
					{
					setState(742);
					stmt();
					}
					}
					setState(747);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(748);
				match(RBRACE);
				}
				}
				break;
			case FAT_ARROW:
				_localctx = new ArrowFnBodyContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(749);
				match(FAT_ARROW);
				setState(750);
				stmt();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StmtContext extends ParserRuleContext {
		public StmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stmt; }
	 
		public StmtContext() { }
		public void copyFrom(StmtContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class FailStmtContext extends StmtContext {
		public TerminalNode FAIL() { return getToken(CWScriptParser.FAIL, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public FailStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class IfStmtContext extends StmtContext {
		public IfExpr_Context ifExpr_() {
			return getRuleContext(IfExpr_Context.class,0);
		}
		public IfStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class EmitStmtContext extends StmtContext {
		public TerminalNode EMIT() { return getToken(CWScriptParser.EMIT, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public EmitStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class ExprStmtContext extends StmtContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public ExprStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class AssignStmtContext extends StmtContext {
		public AssignStmt_Context assignStmt_() {
			return getRuleContext(AssignStmt_Context.class,0);
		}
		public AssignStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class ExecStmtContext extends StmtContext {
		public TerminalNode EXEC() { return getToken(CWScriptParser.EXEC, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public ExecStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class ForStmtContext extends StmtContext {
		public ForStmt_Context forStmt_() {
			return getRuleContext(ForStmt_Context.class,0);
		}
		public ForStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class ReturnStmtContext extends StmtContext {
		public TerminalNode RETURN() { return getToken(CWScriptParser.RETURN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public ReturnStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}
	public static class LetStmtContext extends StmtContext {
		public LetStmt_Context letStmt_() {
			return getRuleContext(LetStmt_Context.class,0);
		}
		public LetStmtContext(StmtContext ctx) { copyFrom(ctx); }
	}

	public final StmtContext stmt() throws RecognitionException {
		StmtContext _localctx = new StmtContext(_ctx, getState());
		enterRule(_localctx, 128, RULE_stmt);
		try {
			setState(766);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,91,_ctx) ) {
			case 1:
				_localctx = new LetStmtContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(753);
				letStmt_();
				}
				break;
			case 2:
				_localctx = new AssignStmtContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(754);
				assignStmt_();
				}
				break;
			case 3:
				_localctx = new IfStmtContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(755);
				ifExpr_();
				}
				break;
			case 4:
				_localctx = new ForStmtContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(756);
				forStmt_();
				}
				break;
			case 5:
				_localctx = new ExecStmtContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(757);
				match(EXEC);
				setState(758);
				expr(0);
				}
				break;
			case 6:
				_localctx = new EmitStmtContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(759);
				match(EMIT);
				setState(760);
				expr(0);
				}
				break;
			case 7:
				_localctx = new ReturnStmtContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(761);
				match(RETURN);
				setState(762);
				expr(0);
				}
				break;
			case 8:
				_localctx = new FailStmtContext(_localctx);
				enterOuterAlt(_localctx, 8);
				{
				setState(763);
				match(FAIL);
				setState(764);
				expr(0);
				}
				break;
			case 9:
				_localctx = new ExprStmtContext(_localctx);
				enterOuterAlt(_localctx, 9);
				{
				setState(765);
				expr(0);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LetStmt_Context extends ParserRuleContext {
		public TerminalNode LET() { return getToken(CWScriptParser.LET, 0); }
		public LetLHSContext letLHS() {
			return getRuleContext(LetLHSContext.class,0);
		}
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public LetStmt_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_letStmt_; }
	}

	public final LetStmt_Context letStmt_() throws RecognitionException {
		LetStmt_Context _localctx = new LetStmt_Context(_ctx, getState());
		enterRule(_localctx, 130, RULE_letStmt_);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(768);
			match(LET);
			setState(769);
			letLHS();
			setState(770);
			match(EQ);
			setState(771);
			expr(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LetLHSContext extends ParserRuleContext {
		public LetLHSContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_letLHS; }
	 
		public LetLHSContext() { }
		public void copyFrom(LetLHSContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class StructUnpackLHSContext extends LetLHSContext {
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public IdentListContext identList() {
			return getRuleContext(IdentListContext.class,0);
		}
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public StructUnpackLHSContext(LetLHSContext ctx) { copyFrom(ctx); }
	}
	public static class IdentLHSContext extends LetLHSContext {
		public TypeExprContext varType;
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public TypeExprContext typeExpr() {
			return getRuleContext(TypeExprContext.class,0);
		}
		public IdentLHSContext(LetLHSContext ctx) { copyFrom(ctx); }
	}

	public final LetLHSContext letLHS() throws RecognitionException {
		LetLHSContext _localctx = new LetLHSContext(_ctx, getState());
		enterRule(_localctx, 132, RULE_letLHS);
		int _la;
		try {
			setState(782);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CONTRACT:
			case INTERFACE:
			case IMPORT:
			case IMPLEMENTS:
			case EXTENDS:
			case ERROR:
			case EVENT:
			case INSTANTIATE:
			case EXEC:
			case QUERY:
			case MIGRATE:
			case FOR:
			case IN:
			case FROM:
			case STATE:
			case TIMES:
			case IF:
			case ELSE:
			case AND:
			case OR:
			case TRUE:
			case FALSE:
			case FN:
			case LET:
			case RETURN:
			case STRUCT:
			case ENUM:
			case TYPE:
			case EMIT:
			case Ident:
				_localctx = new IdentLHSContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(773);
				ident();
				setState(776);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COLON) {
					{
					setState(774);
					match(COLON);
					setState(775);
					((IdentLHSContext)_localctx).varType = typeExpr(0);
					}
				}

				}
				break;
			case LBRACE:
				_localctx = new StructUnpackLHSContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(778);
				match(LBRACE);
				setState(779);
				identList();
				setState(780);
				match(RBRACE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignStmt_Context extends ParserRuleContext {
		public AssignLHSContext lhs;
		public Token assignOp;
		public ExprContext rhs;
		public AssignLHSContext assignLHS() {
			return getRuleContext(AssignLHSContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode EQ() { return getToken(CWScriptParser.EQ, 0); }
		public TerminalNode PLUS_EQ() { return getToken(CWScriptParser.PLUS_EQ, 0); }
		public TerminalNode MINUS_EQ() { return getToken(CWScriptParser.MINUS_EQ, 0); }
		public TerminalNode MUL_EQ() { return getToken(CWScriptParser.MUL_EQ, 0); }
		public TerminalNode DIV_EQ() { return getToken(CWScriptParser.DIV_EQ, 0); }
		public TerminalNode MOD_EQ() { return getToken(CWScriptParser.MOD_EQ, 0); }
		public AssignStmt_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignStmt_; }
	}

	public final AssignStmt_Context assignStmt_() throws RecognitionException {
		AssignStmt_Context _localctx = new AssignStmt_Context(_ctx, getState());
		enterRule(_localctx, 134, RULE_assignStmt_);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(784);
			((AssignStmt_Context)_localctx).lhs = assignLHS();
			setState(785);
			((AssignStmt_Context)_localctx).assignOp = _input.LT(1);
			_la = _input.LA(1);
			if ( !(((((_la - 54)) & ~0x3f) == 0 && ((1L << (_la - 54)) & ((1L << (EQ - 54)) | (1L << (PLUS_EQ - 54)) | (1L << (MINUS_EQ - 54)) | (1L << (MUL_EQ - 54)) | (1L << (DIV_EQ - 54)) | (1L << (MOD_EQ - 54)))) != 0)) ) {
				((AssignStmt_Context)_localctx).assignOp = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(786);
			((AssignStmt_Context)_localctx).rhs = expr(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignLHSContext extends ParserRuleContext {
		public AssignLHSContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignLHS; }
	 
		public AssignLHSContext() { }
		public void copyFrom(AssignLHSContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class StateItemAssignLHSContext extends AssignLHSContext {
		public IdentContext key;
		public InnerAssignContext inner;
		public TerminalNode STATE() { return getToken(CWScriptParser.STATE, 0); }
		public TerminalNode DOT() { return getToken(CWScriptParser.DOT, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public InnerAssignContext innerAssign() {
			return getRuleContext(InnerAssignContext.class,0);
		}
		public StateItemAssignLHSContext(AssignLHSContext ctx) { copyFrom(ctx); }
	}
	public static class IdentAssignLHSContext extends AssignLHSContext {
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public IdentAssignLHSContext(AssignLHSContext ctx) { copyFrom(ctx); }
	}
	public static class MemberAssignLHSContext extends AssignLHSContext {
		public ExprContext obj;
		public IdentContext member;
		public TerminalNode DOT() { return getToken(CWScriptParser.DOT, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public MemberAssignLHSContext(AssignLHSContext ctx) { copyFrom(ctx); }
	}
	public static class StateMapAssignLHSContext extends AssignLHSContext {
		public IdentContext key;
		public ExprContext expr;
		public List<ExprContext> mapKeys = new ArrayList<ExprContext>();
		public InnerAssignContext inner;
		public TerminalNode STATE() { return getToken(CWScriptParser.STATE, 0); }
		public TerminalNode DOT() { return getToken(CWScriptParser.DOT, 0); }
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public InnerAssignContext innerAssign() {
			return getRuleContext(InnerAssignContext.class,0);
		}
		public StateMapAssignLHSContext(AssignLHSContext ctx) { copyFrom(ctx); }
	}
	public static class TableAssignLHSContext extends AssignLHSContext {
		public ExprContext table;
		public ExprContext key;
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TableAssignLHSContext(AssignLHSContext ctx) { copyFrom(ctx); }
	}

	public final AssignLHSContext assignLHS() throws RecognitionException {
		AssignLHSContext _localctx = new AssignLHSContext(_ctx, getState());
		enterRule(_localctx, 136, RULE_assignLHS);
		int _la;
		try {
			setState(820);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,97,_ctx) ) {
			case 1:
				_localctx = new StateItemAssignLHSContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(788);
				match(STATE);
				setState(789);
				match(DOT);
				setState(790);
				((StateItemAssignLHSContext)_localctx).key = ident();
				setState(792);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==DOT) {
					{
					setState(791);
					((StateItemAssignLHSContext)_localctx).inner = innerAssign();
					}
				}

				}
				break;
			case 2:
				_localctx = new StateMapAssignLHSContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(794);
				match(STATE);
				setState(795);
				match(DOT);
				setState(796);
				((StateMapAssignLHSContext)_localctx).key = ident();
				setState(797);
				match(LBRACK);
				{
				setState(798);
				((StateMapAssignLHSContext)_localctx).expr = expr(0);
				((StateMapAssignLHSContext)_localctx).mapKeys.add(((StateMapAssignLHSContext)_localctx).expr);
				}
				setState(803);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(799);
					match(COMMA);
					setState(800);
					((StateMapAssignLHSContext)_localctx).expr = expr(0);
					((StateMapAssignLHSContext)_localctx).mapKeys.add(((StateMapAssignLHSContext)_localctx).expr);
					}
					}
					setState(805);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(806);
				match(RBRACK);
				setState(808);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==DOT) {
					{
					setState(807);
					((StateMapAssignLHSContext)_localctx).inner = innerAssign();
					}
				}

				}
				break;
			case 3:
				_localctx = new IdentAssignLHSContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(810);
				ident();
				}
				break;
			case 4:
				_localctx = new MemberAssignLHSContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(811);
				((MemberAssignLHSContext)_localctx).obj = expr(0);
				setState(812);
				match(DOT);
				setState(813);
				((MemberAssignLHSContext)_localctx).member = ident();
				}
				break;
			case 5:
				_localctx = new TableAssignLHSContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(815);
				((TableAssignLHSContext)_localctx).table = expr(0);
				setState(816);
				match(LBRACK);
				setState(817);
				((TableAssignLHSContext)_localctx).key = expr(0);
				setState(818);
				match(RBRACK);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InnerAssignContext extends ParserRuleContext {
		public InnerPathContext innerPath;
		public List<InnerPathContext> paths = new ArrayList<InnerPathContext>();
		public List<TerminalNode> DOT() { return getTokens(CWScriptParser.DOT); }
		public TerminalNode DOT(int i) {
			return getToken(CWScriptParser.DOT, i);
		}
		public List<InnerPathContext> innerPath() {
			return getRuleContexts(InnerPathContext.class);
		}
		public InnerPathContext innerPath(int i) {
			return getRuleContext(InnerPathContext.class,i);
		}
		public InnerAssignContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_innerAssign; }
	}

	public final InnerAssignContext innerAssign() throws RecognitionException {
		InnerAssignContext _localctx = new InnerAssignContext(_ctx, getState());
		enterRule(_localctx, 138, RULE_innerAssign);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(822);
			match(DOT);
			setState(823);
			((InnerAssignContext)_localctx).innerPath = innerPath();
			((InnerAssignContext)_localctx).paths.add(((InnerAssignContext)_localctx).innerPath);
			setState(828);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==DOT) {
				{
				{
				setState(824);
				match(DOT);
				setState(825);
				((InnerAssignContext)_localctx).innerPath = innerPath();
				((InnerAssignContext)_localctx).paths.add(((InnerAssignContext)_localctx).innerPath);
				}
				}
				setState(830);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InnerPathContext extends ParserRuleContext {
		public IdentContext name;
		public ExprContext tableKey;
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public InnerPathContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_innerPath; }
	}

	public final InnerPathContext innerPath() throws RecognitionException {
		InnerPathContext _localctx = new InnerPathContext(_ctx, getState());
		enterRule(_localctx, 140, RULE_innerPath);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(831);
			((InnerPathContext)_localctx).name = ident();
			}
			setState(836);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(832);
				match(LBRACK);
				setState(833);
				((InnerPathContext)_localctx).tableKey = expr(0);
				setState(834);
				match(RBRACK);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExprContext extends ParserRuleContext {
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	 
		public ExprContext() { }
		public void copyFrom(ExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class AndExprContext extends ExprContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode AND() { return getToken(CWScriptParser.AND, 0); }
		public AndExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class IfExprContext extends ExprContext {
		public IfExpr_Context ifExpr_() {
			return getRuleContext(IfExpr_Context.class,0);
		}
		public IfExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class MultDivModExprContext extends ExprContext {
		public Token op;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode MUL() { return getToken(CWScriptParser.MUL, 0); }
		public TerminalNode DIV() { return getToken(CWScriptParser.DIV, 0); }
		public TerminalNode MOD() { return getToken(CWScriptParser.MOD, 0); }
		public MultDivModExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class QueryExprContext extends ExprContext {
		public TerminalNode QUERY() { return getToken(CWScriptParser.QUERY, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public QueryExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class PosArgsFnCallExprContext extends ExprContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public ExprListContext exprList() {
			return getRuleContext(ExprListContext.class,0);
		}
		public PosArgsFnCallExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class ValExprContext extends ExprContext {
		public ValContext val() {
			return getRuleContext(ValContext.class,0);
		}
		public ValExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class CompExprContext extends ExprContext {
		public Token op;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode LT() { return getToken(CWScriptParser.LT, 0); }
		public TerminalNode GT() { return getToken(CWScriptParser.GT, 0); }
		public TerminalNode LT_EQ() { return getToken(CWScriptParser.LT_EQ, 0); }
		public TerminalNode GT_EQ() { return getToken(CWScriptParser.GT_EQ, 0); }
		public CompExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class ExpExprContext extends ExprContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode POW() { return getToken(CWScriptParser.POW, 0); }
		public ExpExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class UnaryExprContext extends ExprContext {
		public Token op;
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PLUS() { return getToken(CWScriptParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(CWScriptParser.MINUS, 0); }
		public TerminalNode EXCLAM() { return getToken(CWScriptParser.EXCLAM, 0); }
		public UnaryExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class OrExprContext extends ExprContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode OR() { return getToken(CWScriptParser.OR, 0); }
		public OrExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class StateMapAccessExprContext extends ExprContext {
		public IdentContext key;
		public ExprContext expr;
		public List<ExprContext> mapKeys = new ArrayList<ExprContext>();
		public TerminalNode STATE() { return getToken(CWScriptParser.STATE, 0); }
		public TerminalNode DOT() { return getToken(CWScriptParser.DOT, 0); }
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public StateMapAccessExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class StateItemAccessExprContext extends ExprContext {
		public IdentContext key;
		public TerminalNode STATE() { return getToken(CWScriptParser.STATE, 0); }
		public TerminalNode DOT() { return getToken(CWScriptParser.DOT, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public StateItemAccessExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class EqExprContext extends ExprContext {
		public Token op;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode EQEQ() { return getToken(CWScriptParser.EQEQ, 0); }
		public TerminalNode NEQ() { return getToken(CWScriptParser.NEQ, 0); }
		public EqExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class NamedArgsFnCallExprContext extends ExprContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public NamedExprListContext namedExprList() {
			return getRuleContext(NamedExprListContext.class,0);
		}
		public NamedArgsFnCallExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class TableLookupExprContext extends ExprContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public TerminalNode COMMA() { return getToken(CWScriptParser.COMMA, 0); }
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public TableLookupExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class MemberAccessExprContext extends ExprContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode DOT() { return getToken(CWScriptParser.DOT, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public MemberAccessExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class AddSubExprContext extends ExprContext {
		public Token op;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode PLUS() { return getToken(CWScriptParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(CWScriptParser.MINUS, 0); }
		public AddSubExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class GroupedExprContext extends ExprContext {
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public GroupedExprContext(ExprContext ctx) { copyFrom(ctx); }
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 142;
		enterRecursionRule(_localctx, 142, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(866);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,101,_ctx) ) {
			case 1:
				{
				_localctx = new GroupedExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(839);
				match(LPAREN);
				setState(840);
				expr(0);
				setState(841);
				match(RPAREN);
				}
				break;
			case 2:
				{
				_localctx = new StateItemAccessExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(843);
				match(STATE);
				setState(844);
				match(DOT);
				setState(845);
				((StateItemAccessExprContext)_localctx).key = ident();
				}
				break;
			case 3:
				{
				_localctx = new StateMapAccessExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(846);
				match(STATE);
				setState(847);
				match(DOT);
				setState(848);
				((StateMapAccessExprContext)_localctx).key = ident();
				setState(849);
				match(LBRACK);
				{
				setState(850);
				((StateMapAccessExprContext)_localctx).expr = expr(0);
				((StateMapAccessExprContext)_localctx).mapKeys.add(((StateMapAccessExprContext)_localctx).expr);
				}
				setState(855);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(851);
					match(COMMA);
					setState(852);
					((StateMapAccessExprContext)_localctx).expr = expr(0);
					((StateMapAccessExprContext)_localctx).mapKeys.add(((StateMapAccessExprContext)_localctx).expr);
					}
					}
					setState(857);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(858);
				match(RBRACK);
				}
				break;
			case 4:
				{
				_localctx = new UnaryExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(860);
				((UnaryExprContext)_localctx).op = _input.LT(1);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << EXCLAM) | (1L << PLUS) | (1L << MINUS))) != 0)) ) {
					((UnaryExprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(861);
				expr(11);
				}
				break;
			case 5:
				{
				_localctx = new IfExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(862);
				ifExpr_();
				}
				break;
			case 6:
				{
				_localctx = new QueryExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(863);
				match(QUERY);
				setState(864);
				expr(2);
				}
				break;
			case 7:
				{
				_localctx = new ValExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(865);
				val();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(912);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,105,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(910);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,104,_ctx) ) {
					case 1:
						{
						_localctx = new ExpExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(868);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(869);
						match(POW);
						setState(870);
						expr(11);
						}
						break;
					case 2:
						{
						_localctx = new MultDivModExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(871);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(872);
						((MultDivModExprContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 61)) & ~0x3f) == 0 && ((1L << (_la - 61)) & ((1L << (MUL - 61)) | (1L << (DIV - 61)) | (1L << (MOD - 61)))) != 0)) ) {
							((MultDivModExprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(873);
						expr(10);
						}
						break;
					case 3:
						{
						_localctx = new AddSubExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(874);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(875);
						((AddSubExprContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==PLUS || _la==MINUS) ) {
							((AddSubExprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(876);
						expr(9);
						}
						break;
					case 4:
						{
						_localctx = new CompExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(877);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(878);
						((CompExprContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & ((1L << (LT - 67)) | (1L << (LT_EQ - 67)) | (1L << (GT - 67)) | (1L << (GT_EQ - 67)))) != 0)) ) {
							((CompExprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(879);
						expr(8);
						}
						break;
					case 5:
						{
						_localctx = new EqExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(880);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(881);
						((EqExprContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==EQEQ || _la==NEQ) ) {
							((EqExprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(882);
						expr(7);
						}
						break;
					case 6:
						{
						_localctx = new AndExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(883);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(884);
						match(AND);
						setState(885);
						expr(6);
						}
						break;
					case 7:
						{
						_localctx = new OrExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(886);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(887);
						match(OR);
						setState(888);
						expr(5);
						}
						break;
					case 8:
						{
						_localctx = new MemberAccessExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(889);
						if (!(precpred(_ctx, 15))) throw new FailedPredicateException(this, "precpred(_ctx, 15)");
						setState(890);
						match(DOT);
						setState(891);
						ident();
						}
						break;
					case 9:
						{
						_localctx = new TableLookupExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(892);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(893);
						match(LBRACK);
						setState(894);
						expr(0);
						setState(895);
						match(COMMA);
						setState(896);
						match(RBRACK);
						}
						break;
					case 10:
						{
						_localctx = new PosArgsFnCallExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(898);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(899);
						match(LPAREN);
						setState(901);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << MIGRATE) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << TIMES) | (1L << IF) | (1L << ELSE) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT) | (1L << LPAREN) | (1L << LBRACK) | (1L << EXCLAM) | (1L << D_COLON) | (1L << PLUS) | (1L << MINUS))) != 0) || ((((_la - 72)) & ~0x3f) == 0 && ((1L << (_la - 72)) & ((1L << (Ident - 72)) | (1L << (StringLiteral - 72)) | (1L << (IntegerLiteral - 72)) | (1L << (DecimalLiteral - 72)))) != 0)) {
							{
							setState(900);
							exprList();
							}
						}

						setState(903);
						match(RPAREN);
						}
						break;
					case 11:
						{
						_localctx = new NamedArgsFnCallExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(904);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(905);
						match(LPAREN);
						setState(907);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << MIGRATE) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << TIMES) | (1L << IF) | (1L << ELSE) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT))) != 0) || _la==Ident) {
							{
							setState(906);
							namedExprList();
							}
						}

						setState(909);
						match(RPAREN);
						}
						break;
					}
					} 
				}
				setState(914);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,105,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ValContext extends ParserRuleContext {
		public ValContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_val; }
	 
		public ValContext() { }
		public void copyFrom(ValContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class TrueValContext extends ValContext {
		public TerminalNode TRUE() { return getToken(CWScriptParser.TRUE, 0); }
		public TrueValContext(ValContext ctx) { copyFrom(ctx); }
	}
	public static class StructValContext extends ValContext {
		public StructVal_Context structVal_() {
			return getRuleContext(StructVal_Context.class,0);
		}
		public StructValContext(ValContext ctx) { copyFrom(ctx); }
	}
	public static class TupleValContext extends ValContext {
		public TypePathContext tupleType;
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public ExprListContext exprList() {
			return getRuleContext(ExprListContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public TypePathContext typePath() {
			return getRuleContext(TypePathContext.class,0);
		}
		public TupleValContext(ValContext ctx) { copyFrom(ctx); }
	}
	public static class VecValContext extends ValContext {
		public TerminalNode LBRACK() { return getToken(CWScriptParser.LBRACK, 0); }
		public ExprListContext exprList() {
			return getRuleContext(ExprListContext.class,0);
		}
		public TerminalNode RBRACK() { return getToken(CWScriptParser.RBRACK, 0); }
		public VecValContext(ValContext ctx) { copyFrom(ctx); }
	}
	public static class FalseValContext extends ValContext {
		public TerminalNode FALSE() { return getToken(CWScriptParser.FALSE, 0); }
		public FalseValContext(ValContext ctx) { copyFrom(ctx); }
	}
	public static class IdentValContext extends ValContext {
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public IdentValContext(ValContext ctx) { copyFrom(ctx); }
	}
	public static class UnitValContext extends ValContext {
		public TerminalNode LPAREN() { return getToken(CWScriptParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(CWScriptParser.RPAREN, 0); }
		public UnitValContext(ValContext ctx) { copyFrom(ctx); }
	}
	public static class StringValContext extends ValContext {
		public TerminalNode StringLiteral() { return getToken(CWScriptParser.StringLiteral, 0); }
		public StringValContext(ValContext ctx) { copyFrom(ctx); }
	}
	public static class IntegerValContext extends ValContext {
		public TerminalNode IntegerLiteral() { return getToken(CWScriptParser.IntegerLiteral, 0); }
		public IntegerValContext(ValContext ctx) { copyFrom(ctx); }
	}
	public static class DecimalValContext extends ValContext {
		public TerminalNode DecimalLiteral() { return getToken(CWScriptParser.DecimalLiteral, 0); }
		public DecimalValContext(ValContext ctx) { copyFrom(ctx); }
	}

	public final ValContext val() throws RecognitionException {
		ValContext _localctx = new ValContext(_ctx, getState());
		enterRule(_localctx, 144, RULE_val);
		try {
			setState(933);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,106,_ctx) ) {
			case 1:
				_localctx = new UnitValContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(915);
				match(LPAREN);
				setState(916);
				match(RPAREN);
				}
				break;
			case 2:
				_localctx = new StructValContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(917);
				structVal_();
				}
				break;
			case 3:
				_localctx = new TupleValContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(918);
				((TupleValContext)_localctx).tupleType = typePath();
				setState(919);
				match(LPAREN);
				setState(920);
				exprList();
				setState(921);
				match(RPAREN);
				}
				break;
			case 4:
				_localctx = new VecValContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(923);
				match(LBRACK);
				setState(924);
				exprList();
				setState(925);
				match(RBRACK);
				}
				break;
			case 5:
				_localctx = new StringValContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(927);
				match(StringLiteral);
				}
				break;
			case 6:
				_localctx = new IntegerValContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(928);
				match(IntegerLiteral);
				}
				break;
			case 7:
				_localctx = new DecimalValContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(929);
				match(DecimalLiteral);
				}
				break;
			case 8:
				_localctx = new TrueValContext(_localctx);
				enterOuterAlt(_localctx, 8);
				{
				setState(930);
				match(TRUE);
				}
				break;
			case 9:
				_localctx = new FalseValContext(_localctx);
				enterOuterAlt(_localctx, 9);
				{
				setState(931);
				match(FALSE);
				}
				break;
			case 10:
				_localctx = new IdentValContext(_localctx);
				enterOuterAlt(_localctx, 10);
				{
				setState(932);
				ident();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StructVal_Context extends ParserRuleContext {
		public TypePathContext structType;
		public StructValMembersContext members;
		public TerminalNode LBRACE() { return getToken(CWScriptParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(CWScriptParser.RBRACE, 0); }
		public TypePathContext typePath() {
			return getRuleContext(TypePathContext.class,0);
		}
		public StructValMembersContext structValMembers() {
			return getRuleContext(StructValMembersContext.class,0);
		}
		public StructVal_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structVal_; }
	}

	public final StructVal_Context structVal_() throws RecognitionException {
		StructVal_Context _localctx = new StructVal_Context(_ctx, getState());
		enterRule(_localctx, 146, RULE_structVal_);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(935);
			((StructVal_Context)_localctx).structType = typePath();
			}
			setState(936);
			match(LBRACE);
			setState(938);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << MIGRATE) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << TIMES) | (1L << IF) | (1L << ELSE) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT))) != 0) || _la==Ident) {
				{
				setState(937);
				((StructVal_Context)_localctx).members = structValMembers();
				}
			}

			setState(940);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StructValMembersContext extends ParserRuleContext {
		public List<StructValMemberContext> structValMember() {
			return getRuleContexts(StructValMemberContext.class);
		}
		public StructValMemberContext structValMember(int i) {
			return getRuleContext(StructValMemberContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public StructValMembersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structValMembers; }
	}

	public final StructValMembersContext structValMembers() throws RecognitionException {
		StructValMembersContext _localctx = new StructValMembersContext(_ctx, getState());
		enterRule(_localctx, 148, RULE_structValMembers);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(942);
			structValMember();
			setState(947);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,108,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(943);
					match(COMMA);
					setState(944);
					structValMember();
					}
					} 
				}
				setState(949);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,108,_ctx);
			}
			setState(951);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(950);
				match(COMMA);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StructValMemberContext extends ParserRuleContext {
		public IdentContext name;
		public ExprContext value;
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public StructValMemberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structValMember; }
	}

	public final StructValMemberContext structValMember() throws RecognitionException {
		StructValMemberContext _localctx = new StructValMemberContext(_ctx, getState());
		enterRule(_localctx, 150, RULE_structValMember);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(953);
			((StructValMemberContext)_localctx).name = ident();
			setState(954);
			match(COLON);
			setState(955);
			((StructValMemberContext)_localctx).value = expr(0);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IfExpr_Context extends ParserRuleContext {
		public IfClause_Context ifClause_() {
			return getRuleContext(IfClause_Context.class,0);
		}
		public ElseIfClausesContext elseIfClauses() {
			return getRuleContext(ElseIfClausesContext.class,0);
		}
		public ElseClauseContext elseClause() {
			return getRuleContext(ElseClauseContext.class,0);
		}
		public IfExpr_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifExpr_; }
	}

	public final IfExpr_Context ifExpr_() throws RecognitionException {
		IfExpr_Context _localctx = new IfExpr_Context(_ctx, getState());
		enterRule(_localctx, 152, RULE_ifExpr_);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(957);
			ifClause_();
			setState(959);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,110,_ctx) ) {
			case 1:
				{
				setState(958);
				elseIfClauses();
				}
				break;
			}
			setState(962);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,111,_ctx) ) {
			case 1:
				{
				setState(961);
				elseClause();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IfClause_Context extends ParserRuleContext {
		public IfClause_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifClause_; }
	 
		public IfClause_Context() { }
		public void copyFrom(IfClause_Context ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class IfLetClauseContext extends IfClause_Context {
		public TerminalNode IF() { return getToken(CWScriptParser.IF, 0); }
		public LetStmt_Context letStmt_() {
			return getRuleContext(LetStmt_Context.class,0);
		}
		public FnBodyContext fnBody() {
			return getRuleContext(FnBodyContext.class,0);
		}
		public IfLetClauseContext(IfClause_Context ctx) { copyFrom(ctx); }
	}
	public static class IfClauseContext extends IfClause_Context {
		public ExprContext predicate;
		public TerminalNode IF() { return getToken(CWScriptParser.IF, 0); }
		public FnBodyContext fnBody() {
			return getRuleContext(FnBodyContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public IfClauseContext(IfClause_Context ctx) { copyFrom(ctx); }
	}

	public final IfClause_Context ifClause_() throws RecognitionException {
		IfClause_Context _localctx = new IfClause_Context(_ctx, getState());
		enterRule(_localctx, 154, RULE_ifClause_);
		try {
			setState(972);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,112,_ctx) ) {
			case 1:
				_localctx = new IfClauseContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(964);
				match(IF);
				{
				setState(965);
				((IfClauseContext)_localctx).predicate = expr(0);
				}
				setState(966);
				fnBody();
				}
				break;
			case 2:
				_localctx = new IfLetClauseContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(968);
				match(IF);
				setState(969);
				letStmt_();
				setState(970);
				fnBody();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElseIfClausesContext extends ParserRuleContext {
		public List<TerminalNode> ELSE() { return getTokens(CWScriptParser.ELSE); }
		public TerminalNode ELSE(int i) {
			return getToken(CWScriptParser.ELSE, i);
		}
		public List<IfClause_Context> ifClause_() {
			return getRuleContexts(IfClause_Context.class);
		}
		public IfClause_Context ifClause_(int i) {
			return getRuleContext(IfClause_Context.class,i);
		}
		public ElseIfClausesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseIfClauses; }
	}

	public final ElseIfClausesContext elseIfClauses() throws RecognitionException {
		ElseIfClausesContext _localctx = new ElseIfClausesContext(_ctx, getState());
		enterRule(_localctx, 156, RULE_elseIfClauses);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(976); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(974);
					match(ELSE);
					setState(975);
					ifClause_();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(978); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,113,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElseClauseContext extends ParserRuleContext {
		public TerminalNode ELSE() { return getToken(CWScriptParser.ELSE, 0); }
		public FnBodyContext fnBody() {
			return getRuleContext(FnBodyContext.class,0);
		}
		public ElseClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseClause; }
	}

	public final ElseClauseContext elseClause() throws RecognitionException {
		ElseClauseContext _localctx = new ElseClauseContext(_ctx, getState());
		enterRule(_localctx, 158, RULE_elseClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(980);
			match(ELSE);
			setState(981);
			fnBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ForStmt_Context extends ParserRuleContext {
		public ForStmt_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forStmt_; }
	 
		public ForStmt_Context() { }
		public void copyFrom(ForStmt_Context ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ForInStmtContext extends ForStmt_Context {
		public LetLHSContext item;
		public ExprContext iterItems;
		public TerminalNode FOR() { return getToken(CWScriptParser.FOR, 0); }
		public TerminalNode IN() { return getToken(CWScriptParser.IN, 0); }
		public FnBodyContext fnBody() {
			return getRuleContext(FnBodyContext.class,0);
		}
		public LetLHSContext letLHS() {
			return getRuleContext(LetLHSContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public ForInStmtContext(ForStmt_Context ctx) { copyFrom(ctx); }
	}
	public static class ForTimesStmtContext extends ForStmt_Context {
		public TerminalNode FOR() { return getToken(CWScriptParser.FOR, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode TIMES() { return getToken(CWScriptParser.TIMES, 0); }
		public FnBodyContext fnBody() {
			return getRuleContext(FnBodyContext.class,0);
		}
		public ForTimesStmtContext(ForStmt_Context ctx) { copyFrom(ctx); }
	}

	public final ForStmt_Context forStmt_() throws RecognitionException {
		ForStmt_Context _localctx = new ForStmt_Context(_ctx, getState());
		enterRule(_localctx, 160, RULE_forStmt_);
		try {
			setState(994);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,114,_ctx) ) {
			case 1:
				_localctx = new ForInStmtContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(983);
				match(FOR);
				setState(984);
				((ForInStmtContext)_localctx).item = letLHS();
				setState(985);
				match(IN);
				setState(986);
				((ForInStmtContext)_localctx).iterItems = expr(0);
				setState(987);
				fnBody();
				}
				break;
			case 2:
				_localctx = new ForTimesStmtContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(989);
				match(FOR);
				setState(990);
				expr(0);
				setState(991);
				match(TIMES);
				setState(992);
				fnBody();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentListContext extends ParserRuleContext {
		public IdentContext ident;
		public List<IdentContext> symbols = new ArrayList<IdentContext>();
		public List<IdentContext> ident() {
			return getRuleContexts(IdentContext.class);
		}
		public IdentContext ident(int i) {
			return getRuleContext(IdentContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public IdentListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identList; }
	}

	public final IdentListContext identList() throws RecognitionException {
		IdentListContext _localctx = new IdentListContext(_ctx, getState());
		enterRule(_localctx, 162, RULE_identList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(996);
			((IdentListContext)_localctx).ident = ident();
			((IdentListContext)_localctx).symbols.add(((IdentListContext)_localctx).ident);
			}
			setState(1001);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(997);
				match(COMMA);
				{
				setState(998);
				((IdentListContext)_localctx).ident = ident();
				((IdentListContext)_localctx).symbols.add(((IdentListContext)_localctx).ident);
				}
				}
				}
				setState(1003);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExprListContext extends ParserRuleContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public ExprListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exprList; }
	}

	public final ExprListContext exprList() throws RecognitionException {
		ExprListContext _localctx = new ExprListContext(_ctx, getState());
		enterRule(_localctx, 164, RULE_exprList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1004);
			expr(0);
			setState(1009);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1005);
				match(COMMA);
				setState(1006);
				expr(0);
				}
				}
				setState(1011);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NamedExprListContext extends ParserRuleContext {
		public List<NamedExprContext> namedExpr() {
			return getRuleContexts(NamedExprContext.class);
		}
		public NamedExprContext namedExpr(int i) {
			return getRuleContext(NamedExprContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(CWScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(CWScriptParser.COMMA, i);
		}
		public NamedExprListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_namedExprList; }
	}

	public final NamedExprListContext namedExprList() throws RecognitionException {
		NamedExprListContext _localctx = new NamedExprListContext(_ctx, getState());
		enterRule(_localctx, 166, RULE_namedExprList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1012);
			namedExpr();
			setState(1017);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1013);
				match(COMMA);
				setState(1014);
				namedExpr();
				}
				}
				setState(1019);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NamedExprContext extends ParserRuleContext {
		public IdentContext name;
		public ExprContext value;
		public TerminalNode COLON() { return getToken(CWScriptParser.COLON, 0); }
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public NamedExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_namedExpr; }
	}

	public final NamedExprContext namedExpr() throws RecognitionException {
		NamedExprContext _localctx = new NamedExprContext(_ctx, getState());
		enterRule(_localctx, 168, RULE_namedExpr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(1020);
			((NamedExprContext)_localctx).name = ident();
			setState(1021);
			match(COLON);
			setState(1022);
			((NamedExprContext)_localctx).value = expr(0);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentContext extends ParserRuleContext {
		public TerminalNode Ident() { return getToken(CWScriptParser.Ident, 0); }
		public ReservedKeywordContext reservedKeyword() {
			return getRuleContext(ReservedKeywordContext.class,0);
		}
		public IdentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ident; }
	}

	public final IdentContext ident() throws RecognitionException {
		IdentContext _localctx = new IdentContext(_ctx, getState());
		enterRule(_localctx, 170, RULE_ident);
		try {
			setState(1026);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Ident:
				enterOuterAlt(_localctx, 1);
				{
				setState(1024);
				match(Ident);
				}
				break;
			case CONTRACT:
			case INTERFACE:
			case IMPORT:
			case IMPLEMENTS:
			case EXTENDS:
			case ERROR:
			case EVENT:
			case INSTANTIATE:
			case EXEC:
			case QUERY:
			case MIGRATE:
			case FOR:
			case IN:
			case FROM:
			case STATE:
			case TIMES:
			case IF:
			case ELSE:
			case AND:
			case OR:
			case TRUE:
			case FALSE:
			case FN:
			case LET:
			case RETURN:
			case STRUCT:
			case ENUM:
			case TYPE:
			case EMIT:
				enterOuterAlt(_localctx, 2);
				{
				setState(1025);
				reservedKeyword();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CwspecContext extends ParserRuleContext {
		public List<TerminalNode> CWSPEC_LINE_COMMENT() { return getTokens(CWScriptParser.CWSPEC_LINE_COMMENT); }
		public TerminalNode CWSPEC_LINE_COMMENT(int i) {
			return getToken(CWScriptParser.CWSPEC_LINE_COMMENT, i);
		}
		public List<TerminalNode> CWSPEC_BLOCK_COMMENT() { return getTokens(CWScriptParser.CWSPEC_BLOCK_COMMENT); }
		public TerminalNode CWSPEC_BLOCK_COMMENT(int i) {
			return getToken(CWScriptParser.CWSPEC_BLOCK_COMMENT, i);
		}
		public CwspecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cwspec; }
	}

	public final CwspecContext cwspec() throws RecognitionException {
		CwspecContext _localctx = new CwspecContext(_ctx, getState());
		enterRule(_localctx, 172, RULE_cwspec);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1029); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(1028);
					_la = _input.LA(1);
					if ( !(_la==CWSPEC_LINE_COMMENT || _la==CWSPEC_BLOCK_COMMENT) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1031); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,119,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReservedKeywordContext extends ParserRuleContext {
		public TerminalNode CONTRACT() { return getToken(CWScriptParser.CONTRACT, 0); }
		public TerminalNode INTERFACE() { return getToken(CWScriptParser.INTERFACE, 0); }
		public TerminalNode IMPORT() { return getToken(CWScriptParser.IMPORT, 0); }
		public TerminalNode IMPLEMENTS() { return getToken(CWScriptParser.IMPLEMENTS, 0); }
		public TerminalNode EXTENDS() { return getToken(CWScriptParser.EXTENDS, 0); }
		public TerminalNode ERROR() { return getToken(CWScriptParser.ERROR, 0); }
		public TerminalNode EVENT() { return getToken(CWScriptParser.EVENT, 0); }
		public TerminalNode INSTANTIATE() { return getToken(CWScriptParser.INSTANTIATE, 0); }
		public TerminalNode EXEC() { return getToken(CWScriptParser.EXEC, 0); }
		public TerminalNode QUERY() { return getToken(CWScriptParser.QUERY, 0); }
		public TerminalNode MIGRATE() { return getToken(CWScriptParser.MIGRATE, 0); }
		public TerminalNode FOR() { return getToken(CWScriptParser.FOR, 0); }
		public TerminalNode IN() { return getToken(CWScriptParser.IN, 0); }
		public TerminalNode FROM() { return getToken(CWScriptParser.FROM, 0); }
		public TerminalNode STATE() { return getToken(CWScriptParser.STATE, 0); }
		public TerminalNode TIMES() { return getToken(CWScriptParser.TIMES, 0); }
		public TerminalNode IF() { return getToken(CWScriptParser.IF, 0); }
		public TerminalNode FN() { return getToken(CWScriptParser.FN, 0); }
		public TerminalNode ELSE() { return getToken(CWScriptParser.ELSE, 0); }
		public TerminalNode AND() { return getToken(CWScriptParser.AND, 0); }
		public TerminalNode OR() { return getToken(CWScriptParser.OR, 0); }
		public TerminalNode TRUE() { return getToken(CWScriptParser.TRUE, 0); }
		public TerminalNode FALSE() { return getToken(CWScriptParser.FALSE, 0); }
		public TerminalNode LET() { return getToken(CWScriptParser.LET, 0); }
		public TerminalNode RETURN() { return getToken(CWScriptParser.RETURN, 0); }
		public TerminalNode STRUCT() { return getToken(CWScriptParser.STRUCT, 0); }
		public TerminalNode ENUM() { return getToken(CWScriptParser.ENUM, 0); }
		public TerminalNode TYPE() { return getToken(CWScriptParser.TYPE, 0); }
		public TerminalNode EMIT() { return getToken(CWScriptParser.EMIT, 0); }
		public ReservedKeywordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_reservedKeyword; }
	}

	public final ReservedKeywordContext reservedKeyword() throws RecognitionException {
		ReservedKeywordContext _localctx = new ReservedKeywordContext(_ctx, getState());
		enterRule(_localctx, 174, RULE_reservedKeyword);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1033);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONTRACT) | (1L << INTERFACE) | (1L << IMPORT) | (1L << IMPLEMENTS) | (1L << EXTENDS) | (1L << ERROR) | (1L << EVENT) | (1L << INSTANTIATE) | (1L << EXEC) | (1L << QUERY) | (1L << MIGRATE) | (1L << FOR) | (1L << IN) | (1L << FROM) | (1L << STATE) | (1L << TIMES) | (1L << IF) | (1L << ELSE) | (1L << AND) | (1L << OR) | (1L << TRUE) | (1L << FALSE) | (1L << FN) | (1L << LET) | (1L << RETURN) | (1L << STRUCT) | (1L << ENUM) | (1L << TYPE) | (1L << EMIT))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 47:
			return typeExpr_sempred((TypeExprContext)_localctx, predIndex);
		case 71:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean typeExpr_sempred(TypeExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 6);
		case 1:
			return precpred(_ctx, 4);
		case 2:
			return precpred(_ctx, 3);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 3:
			return precpred(_ctx, 10);
		case 4:
			return precpred(_ctx, 9);
		case 5:
			return precpred(_ctx, 8);
		case 6:
			return precpred(_ctx, 7);
		case 7:
			return precpred(_ctx, 6);
		case 8:
			return precpred(_ctx, 5);
		case 9:
			return precpred(_ctx, 4);
		case 10:
			return precpred(_ctx, 15);
		case 11:
			return precpred(_ctx, 14);
		case 12:
			return precpred(_ctx, 13);
		case 13:
			return precpred(_ctx, 12);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3R\u040e\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\4S\tS\4T\tT"+
		"\4U\tU\4V\tV\4W\tW\4X\tX\4Y\tY\3\2\5\2\u00b4\n\2\3\2\7\2\u00b7\n\2\f\2"+
		"\16\2\u00ba\13\2\3\3\3\3\3\3\5\3\u00bf\n\3\3\4\5\4\u00c2\n\4\3\4\3\4\3"+
		"\4\3\4\5\4\u00c8\n\4\3\4\3\4\5\4\u00cc\n\4\3\4\3\4\3\5\5\5\u00d1\n\5\3"+
		"\5\3\5\3\5\3\5\5\5\u00d7\n\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\5"+
		"\6\u00e3\n\6\3\6\3\6\3\6\5\6\u00e8\n\6\3\6\3\6\3\6\5\6\u00ed\n\6\3\7\3"+
		"\7\3\7\7\7\u00f2\n\7\f\7\16\7\u00f5\13\7\3\b\3\b\3\b\5\b\u00fa\n\b\3\t"+
		"\3\t\7\t\u00fe\n\t\f\t\16\t\u0101\13\t\3\t\3\t\3\n\3\n\7\n\u0107\n\n\f"+
		"\n\16\n\u010a\13\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\3\13\3\13\3\13\3\13\5\13\u011c\n\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f"+
		"\3\f\3\f\3\f\3\f\3\f\3\f\5\f\u012b\n\f\3\r\5\r\u012e\n\r\3\r\3\r\3\r\3"+
		"\16\3\16\3\16\3\16\3\16\7\16\u0138\n\16\f\16\16\16\u013b\13\16\3\16\5"+
		"\16\u013e\n\16\5\16\u0140\n\16\3\16\3\16\3\17\5\17\u0145\n\17\3\17\3\17"+
		"\3\20\5\20\u014a\n\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21\7\21\u0154"+
		"\n\21\f\21\16\21\u0157\13\21\3\21\5\21\u015a\n\21\5\21\u015c\n\21\3\21"+
		"\3\21\3\22\5\22\u0161\n\22\3\22\3\22\3\23\5\23\u0166\n\23\3\23\3\23\3"+
		"\23\5\23\u016b\n\23\3\23\3\23\5\23\u016f\n\23\3\24\3\24\3\24\3\24\3\24"+
		"\7\24\u0176\n\24\f\24\16\24\u0179\13\24\3\24\5\24\u017c\n\24\5\24\u017e"+
		"\n\24\3\24\3\24\3\25\5\25\u0183\n\25\3\25\3\25\5\25\u0187\n\25\3\25\5"+
		"\25\u018a\n\25\3\26\3\26\3\26\3\26\3\27\3\27\3\27\3\27\3\27\3\30\3\30"+
		"\3\30\3\30\7\30\u0199\n\30\f\30\16\30\u019c\13\30\3\30\3\30\3\31\3\31"+
		"\3\31\5\31\u01a3\n\31\3\31\3\31\3\32\5\32\u01a8\n\32\3\32\3\32\3\32\5"+
		"\32\u01ad\n\32\3\32\3\32\3\33\5\33\u01b2\n\33\3\33\3\33\3\33\5\33\u01b7"+
		"\n\33\3\34\5\34\u01ba\n\34\3\34\3\34\3\34\3\35\3\35\3\35\7\35\u01c2\n"+
		"\35\f\35\16\35\u01c5\13\35\3\35\3\35\3\36\5\36\u01ca\n\36\3\36\3\36\3"+
		"\37\5\37\u01cf\n\37\3\37\3\37\3\37\3 \3 \3 \7 \u01d7\n \f \16 \u01da\13"+
		" \3 \3 \3!\5!\u01df\n!\3!\3!\3\"\5\"\u01e4\n\"\3\"\3\"\3\"\3#\3#\3#\7"+
		"#\u01ec\n#\f#\16#\u01ef\13#\3#\3#\3$\5$\u01f4\n$\3$\3$\3%\5%\u01f9\n%"+
		"\3%\3%\3%\3&\3&\3&\7&\u0201\n&\f&\16&\u0204\13&\3&\3&\3\'\5\'\u0209\n"+
		"\'\3\'\3\'\3(\5(\u020e\n(\3(\3(\3(\5(\u0213\n(\3(\3(\3)\5)\u0218\n)\3"+
		")\3)\3)\5)\u021d\n)\3*\3*\5*\u0221\n*\3+\3+\3+\5+\u0226\n+\3,\3,\3,\3"+
		"-\3-\3-\3-\7-\u022f\n-\f-\16-\u0232\13-\3-\3-\3.\3.\3.\3.\7.\u023a\n."+
		"\f.\16.\u023d\13.\5.\u023f\n.\3.\3.\3/\3/\3/\3/\7/\u0247\n/\f/\16/\u024a"+
		"\13/\3/\5/\u024d\n/\5/\u024f\n/\3/\3/\3\60\5\60\u0254\n\60\3\60\3\60\5"+
		"\60\u0258\n\60\3\60\3\60\3\60\3\61\3\61\3\61\3\61\3\61\3\61\7\61\u0263"+
		"\n\61\f\61\16\61\u0266\13\61\3\61\3\61\3\61\3\61\3\61\5\61\u026d\n\61"+
		"\3\61\3\61\3\61\3\61\3\61\3\61\3\61\7\61\u0276\n\61\f\61\16\61\u0279\13"+
		"\61\3\62\3\62\3\62\3\62\7\62\u027f\n\62\f\62\16\62\u0282\13\62\3\62\3"+
		"\62\3\63\3\63\3\63\7\63\u0289\n\63\f\63\16\63\u028c\13\63\3\64\5\64\u028f"+
		"\n\64\3\64\3\64\3\65\3\65\3\65\5\65\u0296\n\65\3\66\5\66\u0299\n\66\3"+
		"\66\3\66\3\66\3\67\5\67\u029f\n\67\3\67\3\67\3\67\3\67\3\67\3\67\38\3"+
		"8\58\u02a9\n8\38\78\u02ac\n8\f8\168\u02af\138\38\58\u02b2\n8\58\u02b4"+
		"\n8\39\59\u02b7\n9\39\39\39\39\39\3:\3:\3:\5:\u02c1\n:\3;\3;\3;\5;\u02c6"+
		"\n;\3;\3;\3<\5<\u02cb\n<\3<\3<\3<\3=\3=\3=\3>\3>\5>\u02d5\n>\3>\3>\3?"+
		"\3?\3?\7?\u02dc\n?\f?\16?\u02df\13?\3@\3@\5@\u02e3\n@\3@\3@\3@\3A\3A\7"+
		"A\u02ea\nA\fA\16A\u02ed\13A\3A\3A\3A\5A\u02f2\nA\3B\3B\3B\3B\3B\3B\3B"+
		"\3B\3B\3B\3B\3B\3B\5B\u0301\nB\3C\3C\3C\3C\3C\3D\3D\3D\5D\u030b\nD\3D"+
		"\3D\3D\3D\5D\u0311\nD\3E\3E\3E\3E\3F\3F\3F\3F\5F\u031b\nF\3F\3F\3F\3F"+
		"\3F\3F\3F\7F\u0324\nF\fF\16F\u0327\13F\3F\3F\5F\u032b\nF\3F\3F\3F\3F\3"+
		"F\3F\3F\3F\3F\3F\5F\u0337\nF\3G\3G\3G\3G\7G\u033d\nG\fG\16G\u0340\13G"+
		"\3H\3H\3H\3H\3H\5H\u0347\nH\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I"+
		"\3I\7I\u0358\nI\fI\16I\u035b\13I\3I\3I\3I\3I\3I\3I\3I\3I\5I\u0365\nI\3"+
		"I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3"+
		"I\3I\3I\3I\3I\3I\3I\3I\3I\3I\5I\u0388\nI\3I\3I\3I\3I\5I\u038e\nI\3I\7"+
		"I\u0391\nI\fI\16I\u0394\13I\3J\3J\3J\3J\3J\3J\3J\3J\3J\3J\3J\3J\3J\3J"+
		"\3J\3J\3J\3J\5J\u03a8\nJ\3K\3K\3K\5K\u03ad\nK\3K\3K\3L\3L\3L\7L\u03b4"+
		"\nL\fL\16L\u03b7\13L\3L\5L\u03ba\nL\3M\3M\3M\3M\3N\3N\5N\u03c2\nN\3N\5"+
		"N\u03c5\nN\3O\3O\3O\3O\3O\3O\3O\3O\5O\u03cf\nO\3P\3P\6P\u03d3\nP\rP\16"+
		"P\u03d4\3Q\3Q\3Q\3R\3R\3R\3R\3R\3R\3R\3R\3R\3R\3R\5R\u03e5\nR\3S\3S\3"+
		"S\7S\u03ea\nS\fS\16S\u03ed\13S\3T\3T\3T\7T\u03f2\nT\fT\16T\u03f5\13T\3"+
		"U\3U\3U\7U\u03fa\nU\fU\16U\u03fd\13U\3V\3V\3V\3V\3W\3W\5W\u0405\nW\3X"+
		"\6X\u0408\nX\rX\16X\u0409\3Y\3Y\3Y\2\4`\u0090Z\2\4\6\b\n\f\16\20\22\24"+
		"\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtv"+
		"xz|~\u0080\u0082\u0084\u0086\u0088\u008a\u008c\u008e\u0090\u0092\u0094"+
		"\u0096\u0098\u009a\u009c\u009e\u00a0\u00a2\u00a4\u00a6\u00a8\u00aa\u00ac"+
		"\u00ae\u00b0\2\n\b\288<<>>@@BBDD\5\2--;;==\5\2??AACC\4\2;;==\3\2EH\3\2"+
		"9:\3\2NO\5\2\3\6\t\34\36\"\2\u0469\2\u00b3\3\2\2\2\4\u00be\3\2\2\2\6\u00c1"+
		"\3\2\2\2\b\u00d0\3\2\2\2\n\u00ec\3\2\2\2\f\u00ee\3\2\2\2\16\u00f6\3\2"+
		"\2\2\20\u00fb\3\2\2\2\22\u0104\3\2\2\2\24\u011b\3\2\2\2\26\u012a\3\2\2"+
		"\2\30\u012d\3\2\2\2\32\u0132\3\2\2\2\34\u0144\3\2\2\2\36\u0149\3\2\2\2"+
		" \u014e\3\2\2\2\"\u0160\3\2\2\2$\u016e\3\2\2\2&\u0170\3\2\2\2(\u0189\3"+
		"\2\2\2*\u018b\3\2\2\2,\u018f\3\2\2\2.\u0194\3\2\2\2\60\u01a2\3\2\2\2\62"+
		"\u01a7\3\2\2\2\64\u01b1\3\2\2\2\66\u01b9\3\2\2\28\u01be\3\2\2\2:\u01c9"+
		"\3\2\2\2<\u01ce\3\2\2\2>\u01d3\3\2\2\2@\u01de\3\2\2\2B\u01e3\3\2\2\2D"+
		"\u01e8\3\2\2\2F\u01f3\3\2\2\2H\u01f8\3\2\2\2J\u01fd\3\2\2\2L\u0208\3\2"+
		"\2\2N\u020d\3\2\2\2P\u0217\3\2\2\2R\u0220\3\2\2\2T\u0222\3\2\2\2V\u0227"+
		"\3\2\2\2X\u022a\3\2\2\2Z\u0235\3\2\2\2\\\u0242\3\2\2\2^\u0253\3\2\2\2"+
		"`\u026c\3\2\2\2b\u027a\3\2\2\2d\u0285\3\2\2\2f\u028e\3\2\2\2h\u0295\3"+
		"\2\2\2j\u0298\3\2\2\2l\u029e\3\2\2\2n\u02b3\3\2\2\2p\u02b6\3\2\2\2r\u02bd"+
		"\3\2\2\2t\u02c2\3\2\2\2v\u02ca\3\2\2\2x\u02cf\3\2\2\2z\u02d2\3\2\2\2|"+
		"\u02d8\3\2\2\2~\u02e0\3\2\2\2\u0080\u02f1\3\2\2\2\u0082\u0300\3\2\2\2"+
		"\u0084\u0302\3\2\2\2\u0086\u0310\3\2\2\2\u0088\u0312\3\2\2\2\u008a\u0336"+
		"\3\2\2\2\u008c\u0338\3\2\2\2\u008e\u0341\3\2\2\2\u0090\u0364\3\2\2\2\u0092"+
		"\u03a7\3\2\2\2\u0094\u03a9\3\2\2\2\u0096\u03b0\3\2\2\2\u0098\u03bb\3\2"+
		"\2\2\u009a\u03bf\3\2\2\2\u009c\u03ce\3\2\2\2\u009e\u03d2\3\2\2\2\u00a0"+
		"\u03d6\3\2\2\2\u00a2\u03e4\3\2\2\2\u00a4\u03e6\3\2\2\2\u00a6\u03ee\3\2"+
		"\2\2\u00a8\u03f6\3\2\2\2\u00aa\u03fe\3\2\2\2\u00ac\u0404\3\2\2\2\u00ae"+
		"\u0407\3\2\2\2\u00b0\u040b\3\2\2\2\u00b2\u00b4\5\u00aeX\2\u00b3\u00b2"+
		"\3\2\2\2\u00b3\u00b4\3\2\2\2\u00b4\u00b8\3\2\2\2\u00b5\u00b7\5\4\3\2\u00b6"+
		"\u00b5\3\2\2\2\u00b7\u00ba\3\2\2\2\u00b8\u00b6\3\2\2\2\u00b8\u00b9\3\2"+
		"\2\2\u00b9\3\3\2\2\2\u00ba\u00b8\3\2\2\2\u00bb\u00bf\5\6\4\2\u00bc\u00bf"+
		"\5\b\5\2\u00bd\u00bf\5\n\6\2\u00be\u00bb\3\2\2\2\u00be\u00bc\3\2\2\2\u00be"+
		"\u00bd\3\2\2\2\u00bf\5\3\2\2\2\u00c0\u00c2\5\u00aeX\2\u00c1\u00c0\3\2"+
		"\2\2\u00c1\u00c2\3\2\2\2\u00c2\u00c3\3\2\2\2\u00c3\u00c4\7\3\2\2\u00c4"+
		"\u00c7\5\u00acW\2\u00c5\u00c6\7\t\2\2\u00c6\u00c8\5\u00a4S\2\u00c7\u00c5"+
		"\3\2\2\2\u00c7\u00c8\3\2\2\2\u00c8\u00cb\3\2\2\2\u00c9\u00ca\7\6\2\2\u00ca"+
		"\u00cc\5\u00a4S\2\u00cb\u00c9\3\2\2\2\u00cb\u00cc\3\2\2\2\u00cc\u00cd"+
		"\3\2\2\2\u00cd\u00ce\5\20\t\2\u00ce\7\3\2\2\2\u00cf\u00d1\5\u00aeX\2\u00d0"+
		"\u00cf\3\2\2\2\u00d0\u00d1\3\2\2\2\u00d1\u00d2\3\2\2\2\u00d2\u00d3\7\4"+
		"\2\2\u00d3\u00d6\5\u00acW\2\u00d4\u00d5\7\t\2\2\u00d5\u00d7\5\u00a4S\2"+
		"\u00d6\u00d4\3\2\2\2\u00d6\u00d7\3\2\2\2\u00d7\u00d8\3\2\2\2\u00d8\u00d9"+
		"\5\22\n\2\u00d9\t\3\2\2\2\u00da\u00db\7\5\2\2\u00db\u00dc\7?\2\2\u00dc"+
		"\u00dd\7\22\2\2\u00dd\u00ed\7K\2\2\u00de\u00e7\7\5\2\2\u00df\u00e0\7$"+
		"\2\2\u00e0\u00e2\5\f\7\2\u00e1\u00e3\7+\2\2\u00e2\u00e1\3\2\2\2\u00e2"+
		"\u00e3\3\2\2\2\u00e3\u00e4\3\2\2\2\u00e4\u00e5\7%\2\2\u00e5\u00e8\3\2"+
		"\2\2\u00e6\u00e8\5\f\7\2\u00e7\u00df\3\2\2\2\u00e7\u00e6\3\2\2\2\u00e8"+
		"\u00e9\3\2\2\2\u00e9\u00ea\7\22\2\2\u00ea\u00eb\7K\2\2\u00eb\u00ed\3\2"+
		"\2\2\u00ec\u00da\3\2\2\2\u00ec\u00de\3\2\2\2\u00ed\13\3\2\2\2\u00ee\u00f3"+
		"\5\16\b\2\u00ef\u00f0\7+\2\2\u00f0\u00f2\5\16\b\2\u00f1\u00ef\3\2\2\2"+
		"\u00f2\u00f5\3\2\2\2\u00f3\u00f1\3\2\2\2\u00f3\u00f4\3\2\2\2\u00f4\r\3"+
		"\2\2\2\u00f5\u00f3\3\2\2\2\u00f6\u00f9\5\u00acW\2\u00f7\u00f8\7#\2\2\u00f8"+
		"\u00fa\5\u00acW\2\u00f9\u00f7\3\2\2\2\u00f9\u00fa\3\2\2\2\u00fa\17\3\2"+
		"\2\2\u00fb\u00ff\7(\2\2\u00fc\u00fe\5\24\13\2\u00fd\u00fc\3\2\2\2\u00fe"+
		"\u0101\3\2\2\2\u00ff\u00fd\3\2\2\2\u00ff\u0100\3\2\2\2\u0100\u0102\3\2"+
		"\2\2\u0101\u00ff\3\2\2\2\u0102\u0103\7)\2\2\u0103\21\3\2\2\2\u0104\u0108"+
		"\7(\2\2\u0105\u0107\5\26\f\2\u0106\u0105\3\2\2\2\u0107\u010a\3\2\2\2\u0108"+
		"\u0106\3\2\2\2\u0108\u0109\3\2\2\2\u0109\u010b\3\2\2\2\u010a\u0108\3\2"+
		"\2\2\u010b\u010c\7)\2\2\u010c\23\3\2\2\2\u010d\u011c\5h\65\2\u010e\u011c"+
		"\5v<\2\u010f\u011c\5\30\r\2\u0110\u011c\5\32\16\2\u0111\u011c\5\36\20"+
		"\2\u0112\u011c\5 \21\2\u0113\u011c\5$\23\2\u0114\u011c\5&\24\2\u0115\u011c"+
		"\5\62\32\2\u0116\u011c\5\66\34\2\u0117\u011c\58\35\2\u0118\u011c\5B\""+
		"\2\u0119\u011c\5D#\2\u011a\u011c\5N(\2\u011b\u010d\3\2\2\2\u011b\u010e"+
		"\3\2\2\2\u011b\u010f\3\2\2\2\u011b\u0110\3\2\2\2\u011b\u0111\3\2\2\2\u011b"+
		"\u0112\3\2\2\2\u011b\u0113\3\2\2\2\u011b\u0114\3\2\2\2\u011b\u0115\3\2"+
		"\2\2\u011b\u0116\3\2\2\2\u011b\u0117\3\2\2\2\u011b\u0118\3\2\2\2\u011b"+
		"\u0119\3\2\2\2\u011b\u011a\3\2\2\2\u011c\25\3\2\2\2\u011d\u012b\5h\65"+
		"\2\u011e\u012b\5\30\r\2\u011f\u012b\5\32\16\2\u0120\u012b\5\36\20\2\u0121"+
		"\u012b\5 \21\2\u0122\u012b\5$\23\2\u0123\u012b\5&\24\2\u0124\u012b\5\64"+
		"\33\2\u0125\u012b\5<\37\2\u0126\u012b\5> \2\u0127\u012b\5H%\2\u0128\u012b"+
		"\5J&\2\u0129\u012b\5P)\2\u012a\u011d\3\2\2\2\u012a\u011e\3\2\2\2\u012a"+
		"\u011f\3\2\2\2\u012a\u0120\3\2\2\2\u012a\u0121\3\2\2\2\u012a\u0122\3\2"+
		"\2\2\u012a\u0123\3\2\2\2\u012a\u0124\3\2\2\2\u012a\u0125\3\2\2\2\u012a"+
		"\u0126\3\2\2\2\u012a\u0127\3\2\2\2\u012a\u0128\3\2\2\2\u012a\u0129\3\2"+
		"\2\2\u012b\27\3\2\2\2\u012c\u012e\5\u00aeX\2\u012d\u012c\3\2\2\2\u012d"+
		"\u012e\3\2\2\2\u012e\u012f\3\2\2\2\u012f\u0130\7\n\2\2\u0130\u0131\5T"+
		"+\2\u0131\31\3\2\2\2\u0132\u0133\7\n\2\2\u0133\u013f\7(\2\2\u0134\u0139"+
		"\5\34\17\2\u0135\u0136\7+\2\2\u0136\u0138\5\34\17\2\u0137\u0135\3\2\2"+
		"\2\u0138\u013b\3\2\2\2\u0139\u0137\3\2\2\2\u0139\u013a\3\2\2\2\u013a\u013d"+
		"\3\2\2\2\u013b\u0139\3\2\2\2\u013c\u013e\7+\2\2\u013d\u013c\3\2\2\2\u013d"+
		"\u013e\3\2\2\2\u013e\u0140\3\2\2\2\u013f\u0134\3\2\2\2\u013f\u0140\3\2"+
		"\2\2\u0140\u0141\3\2\2\2\u0141\u0142\7)\2\2\u0142\33\3\2\2\2\u0143\u0145"+
		"\5\u00aeX\2\u0144\u0143\3\2\2\2\u0144\u0145\3\2\2\2\u0145\u0146\3\2\2"+
		"\2\u0146\u0147\5T+\2\u0147\35\3\2\2\2\u0148\u014a\5\u00aeX\2\u0149\u0148"+
		"\3\2\2\2\u0149\u014a\3\2\2\2\u014a\u014b\3\2\2\2\u014b\u014c\7\13\2\2"+
		"\u014c\u014d\5T+\2\u014d\37\3\2\2\2\u014e\u014f\7\13\2\2\u014f\u015b\7"+
		"(\2\2\u0150\u0155\5\"\22\2\u0151\u0152\7+\2\2\u0152\u0154\5\"\22\2\u0153"+
		"\u0151\3\2\2\2\u0154\u0157\3\2\2\2\u0155\u0153\3\2\2\2\u0155\u0156\3\2"+
		"\2\2\u0156\u0159\3\2\2\2\u0157\u0155\3\2\2\2\u0158\u015a\7+\2\2\u0159"+
		"\u0158\3\2\2\2\u0159\u015a\3\2\2\2\u015a\u015c\3\2\2\2\u015b\u0150\3\2"+
		"\2\2\u015b\u015c\3\2\2\2\u015c\u015d\3\2\2\2\u015d\u015e\7)\2\2\u015e"+
		"!\3\2\2\2\u015f\u0161\5\u00aeX\2\u0160\u015f\3\2\2\2\u0160\u0161\3\2\2"+
		"\2\u0161\u0162\3\2\2\2\u0162\u0163\5T+\2\u0163#\3\2\2\2\u0164\u0166\5"+
		"\u00aeX\2\u0165\u0164\3\2\2\2\u0165\u0166\3\2\2\2\u0166\u0167\3\2\2\2"+
		"\u0167\u0168\7\23\2\2\u0168\u016f\5*\26\2\u0169\u016b\5\u00aeX\2\u016a"+
		"\u0169\3\2\2\2\u016a\u016b\3\2\2\2\u016b\u016c\3\2\2\2\u016c\u016d\7\23"+
		"\2\2\u016d\u016f\5,\27\2\u016e\u0165\3\2\2\2\u016e\u016a\3\2\2\2\u016f"+
		"%\3\2\2\2\u0170\u0171\7\23\2\2\u0171\u017d\7(\2\2\u0172\u0177\5(\25\2"+
		"\u0173\u0174\7+\2\2\u0174\u0176\5(\25\2\u0175\u0173\3\2\2\2\u0176\u0179"+
		"\3\2\2\2\u0177\u0175\3\2\2\2\u0177\u0178\3\2\2\2\u0178\u017b\3\2\2\2\u0179"+
		"\u0177\3\2\2\2\u017a\u017c\7+\2\2\u017b\u017a\3\2\2\2\u017b\u017c\3\2"+
		"\2\2\u017c\u017e\3\2\2\2\u017d\u0172\3\2\2\2\u017d\u017e\3\2\2\2\u017e"+
		"\u017f\3\2\2\2\u017f\u0180\7)\2\2\u0180\'\3\2\2\2\u0181\u0183\5\u00ae"+
		"X\2\u0182\u0181\3\2\2\2\u0182\u0183\3\2\2\2\u0183\u0184\3\2\2\2\u0184"+
		"\u018a\5*\26\2\u0185\u0187\5\u00aeX\2\u0186\u0185\3\2\2\2\u0186\u0187"+
		"\3\2\2\2\u0187\u0188\3\2\2\2\u0188\u018a\5,\27\2\u0189\u0182\3\2\2\2\u0189"+
		"\u0186\3\2\2\2\u018a)\3\2\2\2\u018b\u018c\5\u00acW\2\u018c\u018d\7.\2"+
		"\2\u018d\u018e\5`\61\2\u018e+\3\2\2\2\u018f\u0190\5\u00acW\2\u0190\u0191"+
		"\5.\30\2\u0191\u0192\7.\2\2\u0192\u0193\5`\61\2\u0193-\3\2\2\2\u0194\u0195"+
		"\7&\2\2\u0195\u019a\5\60\31\2\u0196\u0197\7+\2\2\u0197\u0199\5\60\31\2"+
		"\u0198\u0196\3\2\2\2\u0199\u019c\3\2\2\2\u019a\u0198\3\2\2\2\u019a\u019b"+
		"\3\2\2\2\u019b\u019d\3\2\2\2\u019c\u019a\3\2\2\2\u019d\u019e\7\'\2\2\u019e"+
		"/\3\2\2\2\u019f\u01a0\5\u00acW\2\u01a0\u01a1\7.\2\2\u01a1\u01a3\3\2\2"+
		"\2\u01a2\u019f\3\2\2\2\u01a2\u01a3\3\2\2\2\u01a3\u01a4\3\2\2\2\u01a4\u01a5"+
		"\5`\61\2\u01a5\61\3\2\2\2\u01a6\u01a8\5\u00aeX\2\u01a7\u01a6\3\2\2\2\u01a7"+
		"\u01a8\3\2\2\2\u01a8\u01a9\3\2\2\2\u01a9\u01aa\7\f\2\2\u01aa\u01ac\5z"+
		">\2\u01ab\u01ad\5x=\2\u01ac\u01ab\3\2\2\2\u01ac\u01ad\3\2\2\2\u01ad\u01ae"+
		"\3\2\2\2\u01ae\u01af\5\u0080A\2\u01af\63\3\2\2\2\u01b0\u01b2\5\u00aeX"+
		"\2\u01b1\u01b0\3\2\2\2\u01b1\u01b2\3\2\2\2\u01b2\u01b3\3\2\2\2\u01b3\u01b4"+
		"\7\f\2\2\u01b4\u01b6\5z>\2\u01b5\u01b7\5x=\2\u01b6\u01b5\3\2\2\2\u01b6"+
		"\u01b7\3\2\2\2\u01b7\65\3\2\2\2\u01b8\u01ba\5\u00aeX\2\u01b9\u01b8\3\2"+
		"\2\2\u01b9\u01ba\3\2\2\2\u01ba\u01bb\3\2\2\2\u01bb\u01bc\7\r\2\2\u01bc"+
		"\u01bd\5t;\2\u01bd\67\3\2\2\2\u01be\u01bf\7\r\2\2\u01bf\u01c3\7(\2\2\u01c0"+
		"\u01c2\5:\36\2\u01c1\u01c0\3\2\2\2\u01c2\u01c5\3\2\2\2\u01c3\u01c1\3\2"+
		"\2\2\u01c3\u01c4\3\2\2\2\u01c4\u01c6\3\2\2\2\u01c5\u01c3\3\2\2\2\u01c6"+
		"\u01c7\7)\2\2\u01c79\3\2\2\2\u01c8\u01ca\5\u00aeX\2\u01c9\u01c8\3\2\2"+
		"\2\u01c9\u01ca\3\2\2\2\u01ca\u01cb\3\2\2\2\u01cb\u01cc\5t;\2\u01cc;\3"+
		"\2\2\2\u01cd\u01cf\5\u00aeX\2\u01ce\u01cd\3\2\2\2\u01ce\u01cf\3\2\2\2"+
		"\u01cf\u01d0\3\2\2\2\u01d0\u01d1\7\r\2\2\u01d1\u01d2\5r:\2\u01d2=\3\2"+
		"\2\2\u01d3\u01d4\7\r\2\2\u01d4\u01d8\7(\2\2\u01d5\u01d7\5@!\2\u01d6\u01d5"+
		"\3\2\2\2\u01d7\u01da\3\2\2\2\u01d8\u01d6\3\2\2\2\u01d8\u01d9\3\2\2\2\u01d9"+
		"\u01db\3\2\2\2\u01da\u01d8\3\2\2\2\u01db\u01dc\7)\2\2\u01dc?\3\2\2\2\u01dd"+
		"\u01df\5\u00aeX\2\u01de\u01dd\3\2\2\2\u01de\u01df\3\2\2\2\u01df\u01e0"+
		"\3\2\2\2\u01e0\u01e1\5r:\2\u01e1A\3\2\2\2\u01e2\u01e4\5\u00aeX\2\u01e3"+
		"\u01e2\3\2\2\2\u01e3\u01e4\3\2\2\2\u01e4\u01e5\3\2\2\2\u01e5\u01e6\7\16"+
		"\2\2\u01e6\u01e7\5t;\2\u01e7C\3\2\2\2\u01e8\u01e9\7\16\2\2\u01e9\u01ed"+
		"\7(\2\2\u01ea\u01ec\5F$\2\u01eb\u01ea\3\2\2\2\u01ec\u01ef\3\2\2\2\u01ed"+
		"\u01eb\3\2\2\2\u01ed\u01ee\3\2\2\2\u01ee\u01f0\3\2\2\2\u01ef\u01ed\3\2"+
		"\2\2\u01f0\u01f1\7)\2\2\u01f1E\3\2\2\2\u01f2\u01f4\5\u00aeX\2\u01f3\u01f2"+
		"\3\2\2\2\u01f3\u01f4\3\2\2\2\u01f4\u01f5\3\2\2\2\u01f5\u01f6\5t;\2\u01f6"+
		"G\3\2\2\2\u01f7\u01f9\5\u00aeX\2\u01f8\u01f7\3\2\2\2\u01f8\u01f9\3\2\2"+
		"\2\u01f9\u01fa\3\2\2\2\u01fa\u01fb\7\16\2\2\u01fb\u01fc\5r:\2\u01fcI\3"+
		"\2\2\2\u01fd\u01fe\7\16\2\2\u01fe\u0202\7(\2\2\u01ff\u0201\5L\'\2\u0200"+
		"\u01ff\3\2\2\2\u0201\u0204\3\2\2\2\u0202\u0200\3\2\2\2\u0202\u0203\3\2"+
		"\2\2\u0203\u0205\3\2\2\2\u0204\u0202\3\2\2\2\u0205\u0206\7)\2\2\u0206"+
		"K\3\2\2\2\u0207\u0209\5\u00aeX\2\u0208\u0207\3\2\2\2\u0208\u0209\3\2\2"+
		"\2\u0209\u020a\3\2\2\2\u020a\u020b\5r:\2\u020bM\3\2\2\2\u020c\u020e\5"+
		"\u00aeX\2\u020d\u020c\3\2\2\2\u020d\u020e\3\2\2\2\u020e\u020f\3\2\2\2"+
		"\u020f\u0210\7\17\2\2\u0210\u0212\5z>\2\u0211\u0213\5x=\2\u0212\u0211"+
		"\3\2\2\2\u0212\u0213\3\2\2\2\u0213\u0214\3\2\2\2\u0214\u0215\5\u0080A"+
		"\2\u0215O\3\2\2\2\u0216\u0218\5\u00aeX\2\u0217\u0216\3\2\2\2\u0217\u0218"+
		"\3\2\2\2\u0218\u0219\3\2\2\2\u0219\u021a\7\17\2\2\u021a\u021c\5z>\2\u021b"+
		"\u021d\5x=\2\u021c\u021b\3\2\2\2\u021c\u021d\3\2\2\2\u021dQ\3\2\2\2\u021e"+
		"\u0221\5T+\2\u021f\u0221\5V,\2\u0220\u021e\3\2\2\2\u0220\u021f\3\2\2\2"+
		"\u0221S\3\2\2\2\u0222\u0225\5\u00acW\2\u0223\u0226\5Z.\2\u0224\u0226\5"+
		"\\/\2\u0225\u0223\3\2\2\2\u0225\u0224\3\2\2\2\u0226U\3\2\2\2\u0227\u0228"+
		"\5\u00acW\2\u0228\u0229\5X-\2\u0229W\3\2\2\2\u022a\u022b\7$\2\2\u022b"+
		"\u0230\5`\61\2\u022c\u022d\7+\2\2\u022d\u022f\5`\61\2\u022e\u022c\3\2"+
		"\2\2\u022f\u0232\3\2\2\2\u0230\u022e\3\2\2\2\u0230\u0231\3\2\2\2\u0231"+
		"\u0233\3\2\2\2\u0232\u0230\3\2\2\2\u0233\u0234\7%\2\2\u0234Y\3\2\2\2\u0235"+
		"\u023e\7$\2\2\u0236\u023b\5^\60\2\u0237\u0238\7+\2\2\u0238\u023a\5^\60"+
		"\2\u0239\u0237\3\2\2\2\u023a\u023d\3\2\2\2\u023b\u0239\3\2\2\2\u023b\u023c"+
		"\3\2\2\2\u023c\u023f\3\2\2\2\u023d\u023b\3\2\2\2\u023e\u0236\3\2\2\2\u023e"+
		"\u023f\3\2\2\2\u023f\u0240\3\2\2\2\u0240\u0241\7%\2\2\u0241[\3\2\2\2\u0242"+
		"\u024e\7(\2\2\u0243\u0248\5^\60\2\u0244\u0245\7+\2\2\u0245\u0247\5^\60"+
		"\2\u0246\u0244\3\2\2\2\u0247\u024a\3\2\2\2\u0248\u0246\3\2\2\2\u0248\u0249"+
		"\3\2\2\2\u0249\u024c\3\2\2\2\u024a\u0248\3\2\2\2\u024b\u024d\7+\2\2\u024c"+
		"\u024b\3\2\2\2\u024c\u024d\3\2\2\2\u024d\u024f\3\2\2\2\u024e\u0243\3\2"+
		"\2\2\u024e\u024f\3\2\2\2\u024f\u0250\3\2\2\2\u0250\u0251\7)\2\2\u0251"+
		"]\3\2\2\2\u0252\u0254\5\u00aeX\2\u0253\u0252\3\2\2\2\u0253\u0254\3\2\2"+
		"\2\u0254\u0255\3\2\2\2\u0255\u0257\5\u00acW\2\u0256\u0258\7,\2\2\u0257"+
		"\u0256\3\2\2\2\u0257\u0258\3\2\2\2\u0258\u0259\3\2\2\2\u0259\u025a\7."+
		"\2\2\u025a\u025b\5`\61\2\u025b_\3\2\2\2\u025c\u025d\b\61\1\2\u025d\u026d"+
		"\5f\64\2\u025e\u025f\7$\2\2\u025f\u0264\5`\61\2\u0260\u0261\7+\2\2\u0261"+
		"\u0263\5`\61\2\u0262\u0260\3\2\2\2\u0263\u0266\3\2\2\2\u0264\u0262\3\2"+
		"\2\2\u0264\u0265\3\2\2\2\u0265\u0267\3\2\2\2\u0266\u0264\3\2\2\2\u0267"+
		"\u0268\7%\2\2\u0268\u026d\3\2\2\2\u0269\u026a\7\63\2\2\u026a\u026d\5`"+
		"\61\4\u026b\u026d\5h\65\2\u026c\u025c\3\2\2\2\u026c\u025e\3\2\2\2\u026c"+
		"\u0269\3\2\2\2\u026c\u026b\3\2\2\2\u026d\u0277\3\2\2\2\u026e\u026f\f\b"+
		"\2\2\u026f\u0276\5b\62\2\u0270\u0271\f\6\2\2\u0271\u0276\7,\2\2\u0272"+
		"\u0273\f\5\2\2\u0273\u0274\7&\2\2\u0274\u0276\7\'\2\2\u0275\u026e\3\2"+
		"\2\2\u0275\u0270\3\2\2\2\u0275\u0272\3\2\2\2\u0276\u0279\3\2\2\2\u0277"+
		"\u0275\3\2\2\2\u0277\u0278\3\2\2\2\u0278a\3\2\2\2\u0279\u0277\3\2\2\2"+
		"\u027a\u027b\7E\2\2\u027b\u0280\5`\61\2\u027c\u027d\7+\2\2\u027d\u027f"+
		"\5`\61\2\u027e\u027c\3\2\2\2\u027f\u0282\3\2\2\2\u0280\u027e\3\2\2\2\u0280"+
		"\u0281\3\2\2\2\u0281\u0283\3\2\2\2\u0282\u0280\3\2\2\2\u0283\u0284\7G"+
		"\2\2\u0284c\3\2\2\2\u0285\u028a\5\u00acW\2\u0286\u0287\7/\2\2\u0287\u0289"+
		"\5\u00acW\2\u0288\u0286\3\2\2\2\u0289\u028c\3\2\2\2\u028a\u0288\3\2\2"+
		"\2\u028a\u028b\3\2\2\2\u028be\3\2\2\2\u028c\u028a\3\2\2\2\u028d\u028f"+
		"\7/\2\2\u028e\u028d\3\2\2\2\u028e\u028f\3\2\2\2\u028f\u0290\3\2\2\2\u0290"+
		"\u0291\5d\63\2\u0291g\3\2\2\2\u0292\u0296\5j\66\2\u0293\u0296\5l\67\2"+
		"\u0294\u0296\5p9\2\u0295\u0292\3\2\2\2\u0295\u0293\3\2\2\2\u0295\u0294"+
		"\3\2\2\2\u0296i\3\2\2\2\u0297\u0299\5\u00aeX\2\u0298\u0297\3\2\2\2\u0298"+
		"\u0299\3\2\2\2\u0299\u029a\3\2\2\2\u029a\u029b\7\37\2\2\u029b\u029c\5"+
		"R*\2\u029ck\3\2\2\2\u029d\u029f\5\u00aeX\2\u029e\u029d\3\2\2\2\u029e\u029f"+
		"\3\2\2\2\u029f\u02a0\3\2\2\2\u02a0\u02a1\7 \2\2\u02a1\u02a2\5\u00acW\2"+
		"\u02a2\u02a3\7(\2\2\u02a3\u02a4\5n8\2\u02a4\u02a5\7)\2\2\u02a5m\3\2\2"+
		"\2\u02a6\u02ad\5R*\2\u02a7\u02a9\7+\2\2\u02a8\u02a7\3\2\2\2\u02a8\u02a9"+
		"\3\2\2\2\u02a9\u02aa\3\2\2\2\u02aa\u02ac\5R*\2\u02ab\u02a8\3\2\2\2\u02ac"+
		"\u02af\3\2\2\2\u02ad\u02ab\3\2\2\2\u02ad\u02ae\3\2\2\2\u02ae\u02b1\3\2"+
		"\2\2\u02af\u02ad\3\2\2\2\u02b0\u02b2\7+\2\2\u02b1\u02b0\3\2\2\2\u02b1"+
		"\u02b2\3\2\2\2\u02b2\u02b4\3\2\2\2\u02b3\u02a6\3\2\2\2\u02b3\u02b4\3\2"+
		"\2\2\u02b4o\3\2\2\2\u02b5\u02b7\5\u00aeX\2\u02b6\u02b5\3\2\2\2\u02b6\u02b7"+
		"\3\2\2\2\u02b7\u02b8\3\2\2\2\u02b8\u02b9\7!\2\2\u02b9\u02ba\5\u00acW\2"+
		"\u02ba\u02bb\78\2\2\u02bb\u02bc\5`\61\2\u02bcq\3\2\2\2\u02bd\u02be\5\u00ac"+
		"W\2\u02be\u02c0\5z>\2\u02bf\u02c1\5x=\2\u02c0\u02bf\3\2\2\2\u02c0\u02c1"+
		"\3\2\2\2\u02c1s\3\2\2\2\u02c2\u02c3\5\u00acW\2\u02c3\u02c5\5z>\2\u02c4"+
		"\u02c6\5x=\2\u02c5\u02c4\3\2\2\2\u02c5\u02c6\3\2\2\2\u02c6\u02c7\3\2\2"+
		"\2\u02c7\u02c8\5\u0080A\2\u02c8u\3\2\2\2\u02c9\u02cb\5\u00aeX\2\u02ca"+
		"\u02c9\3\2\2\2\u02ca\u02cb\3\2\2\2\u02cb\u02cc\3\2\2\2\u02cc\u02cd\7\33"+
		"\2\2\u02cd\u02ce\5t;\2\u02cew\3\2\2\2\u02cf\u02d0\7\64\2\2\u02d0\u02d1"+
		"\5`\61\2\u02d1y\3\2\2\2\u02d2\u02d4\7$\2\2\u02d3\u02d5\5|?\2\u02d4\u02d3"+
		"\3\2\2\2\u02d4\u02d5\3\2\2\2\u02d5\u02d6\3\2\2\2\u02d6\u02d7\7%\2\2\u02d7"+
		"{\3\2\2\2\u02d8\u02dd\5~@\2\u02d9\u02da\7+\2\2\u02da\u02dc\5~@\2\u02db"+
		"\u02d9\3\2\2\2\u02dc\u02df\3\2\2\2\u02dd\u02db\3\2\2\2\u02dd\u02de\3\2"+
		"\2\2\u02de}\3\2\2\2\u02df\u02dd\3\2\2\2\u02e0\u02e2\5\u00acW\2\u02e1\u02e3"+
		"\7,\2\2\u02e2\u02e1\3\2\2\2\u02e2\u02e3\3\2\2\2\u02e3\u02e4\3\2\2\2\u02e4"+
		"\u02e5\7.\2\2\u02e5\u02e6\5`\61\2\u02e6\177\3\2\2\2\u02e7\u02eb\7(\2\2"+
		"\u02e8\u02ea\5\u0082B\2\u02e9\u02e8\3\2\2\2\u02ea\u02ed\3\2\2\2\u02eb"+
		"\u02e9\3\2\2\2\u02eb\u02ec\3\2\2\2\u02ec\u02ee\3\2\2\2\u02ed\u02eb\3\2"+
		"\2\2\u02ee\u02f2\7)\2\2\u02ef\u02f0\7\65\2\2\u02f0\u02f2\5\u0082B\2\u02f1"+
		"\u02e7\3\2\2\2\u02f1\u02ef\3\2\2\2\u02f2\u0081\3\2\2\2\u02f3\u0301\5\u0084"+
		"C\2\u02f4\u0301\5\u0088E\2\u02f5\u0301\5\u009aN\2\u02f6\u0301\5\u00a2"+
		"R\2\u02f7\u02f8\7\r\2\2\u02f8\u0301\5\u0090I\2\u02f9\u02fa\7\"\2\2\u02fa"+
		"\u0301\5\u0090I\2\u02fb\u02fc\7\36\2\2\u02fc\u0301\5\u0090I\2\u02fd\u02fe"+
		"\7\35\2\2\u02fe\u0301\5\u0090I\2\u02ff\u0301\5\u0090I\2\u0300\u02f3\3"+
		"\2\2\2\u0300\u02f4\3\2\2\2\u0300\u02f5\3\2\2\2\u0300\u02f6\3\2\2\2\u0300"+
		"\u02f7\3\2\2\2\u0300\u02f9\3\2\2\2\u0300\u02fb\3\2\2\2\u0300\u02fd\3\2"+
		"\2\2\u0300\u02ff\3\2\2\2\u0301\u0083\3\2\2\2\u0302\u0303\7\34\2\2\u0303"+
		"\u0304\5\u0086D\2\u0304\u0305\78\2\2\u0305\u0306\5\u0090I\2\u0306\u0085"+
		"\3\2\2\2\u0307\u030a\5\u00acW\2\u0308\u0309\7.\2\2\u0309\u030b\5`\61\2"+
		"\u030a\u0308\3\2\2\2\u030a\u030b\3\2\2\2\u030b\u0311\3\2\2\2\u030c\u030d"+
		"\7(\2\2\u030d\u030e\5\u00a4S\2\u030e\u030f\7)\2\2\u030f\u0311\3\2\2\2"+
		"\u0310\u0307\3\2\2\2\u0310\u030c\3\2\2\2\u0311\u0087\3\2\2\2\u0312\u0313"+
		"\5\u008aF\2\u0313\u0314\t\2\2\2\u0314\u0315\5\u0090I\2\u0315\u0089\3\2"+
		"\2\2\u0316\u0317\7\23\2\2\u0317\u0318\7*\2\2\u0318\u031a\5\u00acW\2\u0319"+
		"\u031b\5\u008cG\2\u031a\u0319\3\2\2\2\u031a\u031b\3\2\2\2\u031b\u0337"+
		"\3\2\2\2\u031c\u031d\7\23\2\2\u031d\u031e\7*\2\2\u031e\u031f\5\u00acW"+
		"\2\u031f\u0320\7&\2\2\u0320\u0325\5\u0090I\2\u0321\u0322\7+\2\2\u0322"+
		"\u0324\5\u0090I\2\u0323\u0321\3\2\2\2\u0324\u0327\3\2\2\2\u0325\u0323"+
		"\3\2\2\2\u0325\u0326\3\2\2\2\u0326\u0328\3\2\2\2\u0327\u0325\3\2\2\2\u0328"+
		"\u032a\7\'\2\2\u0329\u032b\5\u008cG\2\u032a\u0329\3\2\2\2\u032a\u032b"+
		"\3\2\2\2\u032b\u0337\3\2\2\2\u032c\u0337\5\u00acW\2\u032d\u032e\5\u0090"+
		"I\2\u032e\u032f\7*\2\2\u032f\u0330\5\u00acW\2\u0330\u0337\3\2\2\2\u0331"+
		"\u0332\5\u0090I\2\u0332\u0333\7&\2\2\u0333\u0334\5\u0090I\2\u0334\u0335"+
		"\7\'\2\2\u0335\u0337\3\2\2\2\u0336\u0316\3\2\2\2\u0336\u031c\3\2\2\2\u0336"+
		"\u032c\3\2\2\2\u0336\u032d\3\2\2\2\u0336\u0331\3\2\2\2\u0337\u008b\3\2"+
		"\2\2\u0338\u0339\7*\2\2\u0339\u033e\5\u008eH\2\u033a\u033b\7*\2\2\u033b"+
		"\u033d\5\u008eH\2\u033c\u033a\3\2\2\2\u033d\u0340\3\2\2\2\u033e\u033c"+
		"\3\2\2\2\u033e\u033f\3\2\2\2\u033f\u008d\3\2\2\2\u0340\u033e\3\2\2\2\u0341"+
		"\u0346\5\u00acW\2\u0342\u0343\7&\2\2\u0343\u0344\5\u0090I\2\u0344\u0345"+
		"\7\'\2\2\u0345\u0347\3\2\2\2\u0346\u0342\3\2\2\2\u0346\u0347\3\2\2\2\u0347"+
		"\u008f\3\2\2\2\u0348\u0349\bI\1\2\u0349\u034a\7$\2\2\u034a\u034b\5\u0090"+
		"I\2\u034b\u034c\7%\2\2\u034c\u0365\3\2\2\2\u034d\u034e\7\23\2\2\u034e"+
		"\u034f\7*\2\2\u034f\u0365\5\u00acW\2\u0350\u0351\7\23\2\2\u0351\u0352"+
		"\7*\2\2\u0352\u0353\5\u00acW\2\u0353\u0354\7&\2\2\u0354\u0359\5\u0090"+
		"I\2\u0355\u0356\7+\2\2\u0356\u0358\5\u0090I\2\u0357\u0355\3\2\2\2\u0358"+
		"\u035b\3\2\2\2\u0359\u0357\3\2\2\2\u0359\u035a\3\2\2\2\u035a\u035c\3\2"+
		"\2\2\u035b\u0359\3\2\2\2\u035c\u035d\7\'\2\2\u035d\u0365\3\2\2\2\u035e"+
		"\u035f\t\3\2\2\u035f\u0365\5\u0090I\r\u0360\u0365\5\u009aN\2\u0361\u0362"+
		"\7\16\2\2\u0362\u0365\5\u0090I\4\u0363\u0365\5\u0092J\2\u0364\u0348\3"+
		"\2\2\2\u0364\u034d\3\2\2\2\u0364\u0350\3\2\2\2\u0364\u035e\3\2\2\2\u0364"+
		"\u0360\3\2\2\2\u0364\u0361\3\2\2\2\u0364\u0363\3\2\2\2\u0365\u0392\3\2"+
		"\2\2\u0366\u0367\f\f\2\2\u0367\u0368\7I\2\2\u0368\u0391\5\u0090I\r\u0369"+
		"\u036a\f\13\2\2\u036a\u036b\t\4\2\2\u036b\u0391\5\u0090I\f\u036c\u036d"+
		"\f\n\2\2\u036d\u036e\t\5\2\2\u036e\u0391\5\u0090I\13\u036f\u0370\f\t\2"+
		"\2\u0370\u0371\t\6\2\2\u0371\u0391\5\u0090I\n\u0372\u0373\f\b\2\2\u0373"+
		"\u0374\t\7\2\2\u0374\u0391\5\u0090I\t\u0375\u0376\f\7\2\2\u0376\u0377"+
		"\7\27\2\2\u0377\u0391\5\u0090I\b\u0378\u0379\f\6\2\2\u0379\u037a\7\30"+
		"\2\2\u037a\u0391\5\u0090I\7\u037b\u037c\f\21\2\2\u037c\u037d\7*\2\2\u037d"+
		"\u0391\5\u00acW\2\u037e\u037f\f\20\2\2\u037f\u0380\7&\2\2\u0380\u0381"+
		"\5\u0090I\2\u0381\u0382\7+\2\2\u0382\u0383\7\'\2\2\u0383\u0391\3\2\2\2"+
		"\u0384\u0385\f\17\2\2\u0385\u0387\7$\2\2\u0386\u0388\5\u00a6T\2\u0387"+
		"\u0386\3\2\2\2\u0387\u0388\3\2\2\2\u0388\u0389\3\2\2\2\u0389\u0391\7%"+
		"\2\2\u038a\u038b\f\16\2\2\u038b\u038d\7$\2\2\u038c\u038e\5\u00a8U\2\u038d"+
		"\u038c\3\2\2\2\u038d\u038e\3\2\2\2\u038e\u038f\3\2\2\2\u038f\u0391\7%"+
		"\2\2\u0390\u0366\3\2\2\2\u0390\u0369\3\2\2\2\u0390\u036c\3\2\2\2\u0390"+
		"\u036f\3\2\2\2\u0390\u0372\3\2\2\2\u0390\u0375\3\2\2\2\u0390\u0378\3\2"+
		"\2\2\u0390\u037b\3\2\2\2\u0390\u037e\3\2\2\2\u0390\u0384\3\2\2\2\u0390"+
		"\u038a\3\2\2\2\u0391\u0394\3\2\2\2\u0392\u0390\3\2\2\2\u0392\u0393\3\2"+
		"\2\2\u0393\u0091\3\2\2\2\u0394\u0392\3\2\2\2\u0395\u0396\7$\2\2\u0396"+
		"\u03a8\7%\2\2\u0397\u03a8\5\u0094K\2\u0398\u0399\5f\64\2\u0399\u039a\7"+
		"$\2\2\u039a\u039b\5\u00a6T\2\u039b\u039c\7%\2\2\u039c\u03a8\3\2\2\2\u039d"+
		"\u039e\7&\2\2\u039e\u039f\5\u00a6T\2\u039f\u03a0\7\'\2\2\u03a0\u03a8\3"+
		"\2\2\2\u03a1\u03a8\7K\2\2\u03a2\u03a8\7L\2\2\u03a3\u03a8\7M\2\2\u03a4"+
		"\u03a8\7\31\2\2\u03a5\u03a8\7\32\2\2\u03a6\u03a8\5\u00acW\2\u03a7\u0395"+
		"\3\2\2\2\u03a7\u0397\3\2\2\2\u03a7\u0398\3\2\2\2\u03a7\u039d\3\2\2\2\u03a7"+
		"\u03a1\3\2\2\2\u03a7\u03a2\3\2\2\2\u03a7\u03a3\3\2\2\2\u03a7\u03a4\3\2"+
		"\2\2\u03a7\u03a5\3\2\2\2\u03a7\u03a6\3\2\2\2\u03a8\u0093\3\2\2\2\u03a9"+
		"\u03aa\5f\64\2\u03aa\u03ac\7(\2\2\u03ab\u03ad\5\u0096L\2\u03ac\u03ab\3"+
		"\2\2\2\u03ac\u03ad\3\2\2\2\u03ad\u03ae\3\2\2\2\u03ae\u03af\7)\2\2\u03af"+
		"\u0095\3\2\2\2\u03b0\u03b5\5\u0098M\2\u03b1\u03b2\7+\2\2\u03b2\u03b4\5"+
		"\u0098M\2\u03b3\u03b1\3\2\2\2\u03b4\u03b7\3\2\2\2\u03b5\u03b3\3\2\2\2"+
		"\u03b5\u03b6\3\2\2\2\u03b6\u03b9\3\2\2\2\u03b7\u03b5\3\2\2\2\u03b8\u03ba"+
		"\7+\2\2\u03b9\u03b8\3\2\2\2\u03b9\u03ba\3\2\2\2\u03ba\u0097\3\2\2\2\u03bb"+
		"\u03bc\5\u00acW\2\u03bc\u03bd\7.\2\2\u03bd\u03be\5\u0090I\2\u03be\u0099"+
		"\3\2\2\2\u03bf\u03c1\5\u009cO\2\u03c0\u03c2\5\u009eP\2\u03c1\u03c0\3\2"+
		"\2\2\u03c1\u03c2\3\2\2\2\u03c2\u03c4\3\2\2\2\u03c3\u03c5\5\u00a0Q\2\u03c4"+
		"\u03c3\3\2\2\2\u03c4\u03c5\3\2\2\2\u03c5\u009b\3\2\2\2\u03c6\u03c7\7\25"+
		"\2\2\u03c7\u03c8\5\u0090I\2\u03c8\u03c9\5\u0080A\2\u03c9\u03cf\3\2\2\2"+
		"\u03ca\u03cb\7\25\2\2\u03cb\u03cc\5\u0084C\2\u03cc\u03cd\5\u0080A\2\u03cd"+
		"\u03cf\3\2\2\2\u03ce\u03c6\3\2\2\2\u03ce\u03ca\3\2\2\2\u03cf\u009d\3\2"+
		"\2\2\u03d0\u03d1\7\26\2\2\u03d1\u03d3\5\u009cO\2\u03d2\u03d0\3\2\2\2\u03d3"+
		"\u03d4\3\2\2\2\u03d4\u03d2\3\2\2\2\u03d4\u03d5\3\2\2\2\u03d5\u009f\3\2"+
		"\2\2\u03d6\u03d7\7\26\2\2\u03d7\u03d8\5\u0080A\2\u03d8\u00a1\3\2\2\2\u03d9"+
		"\u03da\7\20\2\2\u03da\u03db\5\u0086D\2\u03db\u03dc\7\21\2\2\u03dc\u03dd"+
		"\5\u0090I\2\u03dd\u03de\5\u0080A\2\u03de\u03e5\3\2\2\2\u03df\u03e0\7\20"+
		"\2\2\u03e0\u03e1\5\u0090I\2\u03e1\u03e2\7\24\2\2\u03e2\u03e3\5\u0080A"+
		"\2\u03e3\u03e5\3\2\2\2\u03e4\u03d9\3\2\2\2\u03e4\u03df\3\2\2\2\u03e5\u00a3"+
		"\3\2\2\2\u03e6\u03eb\5\u00acW\2\u03e7\u03e8\7+\2\2\u03e8\u03ea\5\u00ac"+
		"W\2\u03e9\u03e7\3\2\2\2\u03ea\u03ed\3\2\2\2\u03eb\u03e9\3\2\2\2\u03eb"+
		"\u03ec\3\2\2\2\u03ec\u00a5\3\2\2\2\u03ed\u03eb\3\2\2\2\u03ee\u03f3\5\u0090"+
		"I\2\u03ef\u03f0\7+\2\2\u03f0\u03f2\5\u0090I\2\u03f1\u03ef\3\2\2\2\u03f2"+
		"\u03f5\3\2\2\2\u03f3\u03f1\3\2\2\2\u03f3\u03f4\3\2\2\2\u03f4\u00a7\3\2"+
		"\2\2\u03f5\u03f3\3\2\2\2\u03f6\u03fb\5\u00aaV\2\u03f7\u03f8\7+\2\2\u03f8"+
		"\u03fa\5\u00aaV\2\u03f9\u03f7\3\2\2\2\u03fa\u03fd\3\2\2\2\u03fb\u03f9"+
		"\3\2\2\2\u03fb\u03fc\3\2\2\2\u03fc\u00a9\3\2\2\2\u03fd\u03fb\3\2\2\2\u03fe"+
		"\u03ff\5\u00acW\2\u03ff\u0400\7.\2\2\u0400\u0401\5\u0090I\2\u0401\u00ab"+
		"\3\2\2\2\u0402\u0405\7J\2\2\u0403\u0405\5\u00b0Y\2\u0404\u0402\3\2\2\2"+
		"\u0404\u0403\3\2\2\2\u0405\u00ad\3\2\2\2\u0406\u0408\t\b\2\2\u0407\u0406"+
		"\3\2\2\2\u0408\u0409\3\2\2\2\u0409\u0407\3\2\2\2\u0409\u040a\3\2\2\2\u040a"+
		"\u00af\3\2\2\2\u040b\u040c\t\t\2\2\u040c\u00b1\3\2\2\2z\u00b3\u00b8\u00be"+
		"\u00c1\u00c7\u00cb\u00d0\u00d6\u00e2\u00e7\u00ec\u00f3\u00f9\u00ff\u0108"+
		"\u011b\u012a\u012d\u0139\u013d\u013f\u0144\u0149\u0155\u0159\u015b\u0160"+
		"\u0165\u016a\u016e\u0177\u017b\u017d\u0182\u0186\u0189\u019a\u01a2\u01a7"+
		"\u01ac\u01b1\u01b6\u01b9\u01c3\u01c9\u01ce\u01d8\u01de\u01e3\u01ed\u01f3"+
		"\u01f8\u0202\u0208\u020d\u0212\u0217\u021c\u0220\u0225\u0230\u023b\u023e"+
		"\u0248\u024c\u024e\u0253\u0257\u0264\u026c\u0275\u0277\u0280\u028a\u028e"+
		"\u0295\u0298\u029e\u02a8\u02ad\u02b1\u02b3\u02b6\u02c0\u02c5\u02ca\u02d4"+
		"\u02dd\u02e2\u02eb\u02f1\u0300\u030a\u0310\u031a\u0325\u032a\u0336\u033e"+
		"\u0346\u0359\u0364\u0387\u038d\u0390\u0392\u03a7\u03ac\u03b5\u03b9\u03c1"+
		"\u03c4\u03ce\u03d4\u03e4\u03eb\u03f3\u03fb\u0404\u0409";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}