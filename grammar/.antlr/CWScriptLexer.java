// Generated from /Users/william/t1/cwsc/grammar/CWScriptLexer.g4 by ANTLR 4.8
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class CWScriptLexer extends Lexer {
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
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"CONTRACT", "INTERFACE", "IMPORT", "IMPLEMENTS", "EXTENSION", "REQUIRES", 
			"EXTENDS", "ERROR", "EVENT", "INSTANTIATE", "EXEC", "QUERY", "MIGRATE", 
			"FOR", "IN", "FROM", "STATE", "TIMES", "IF", "ELSE", "AND", "OR", "TRUE", 
			"FALSE", "FN", "LET", "FAIL", "RETURN", "STRUCT", "ENUM", "TYPE", "EMIT", 
			"AS", "LPAREN", "RPAREN", "LBRACK", "RBRACK", "LBRACE", "RBRACE", "DOT", 
			"COMMA", "QUEST", "EXCLAM", "COLON", "D_COLON", "DOLLAR", "HASH", "AT", 
			"AMP", "ARROW", "FAT_ARROW", "S_QUOTE", "D_QUOTE", "EQ", "EQEQ", "NEQ", 
			"PLUS", "PLUS_EQ", "MINUS", "MINUS_EQ", "MUL", "MUL_EQ", "DIV", "DIV_EQ", 
			"MOD", "MOD_EQ", "LT", "LT_EQ", "GT", "GT_EQ", "POW", "Ident", "StringLiteral", 
			"DoubleQuotedStringCharacter", "IntegerLiteral", "DecimalLiteral", "DecimalDigits", 
			"CWSPEC_LINE_COMMENT", "CWSPEC_BLOCK_COMMENT", "LINE_COMMENT", "BLOCK_COMMENT", 
			"WS"
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


	public CWScriptLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "CWScriptLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2R\u0229\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\4S\tS\3\2\3"+
		"\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3"+
		"\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7"+
		"\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3"+
		"\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3"+
		"\13\3\13\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3"+
		"\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\20\3\20\3\20\3\21\3\21\3"+
		"\21\3\21\3\21\3\22\3\22\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23\3"+
		"\23\3\24\3\24\3\24\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3\26\3\26\3\27\3"+
		"\27\3\27\3\30\3\30\3\30\3\30\3\30\3\31\3\31\3\31\3\31\3\31\3\31\3\32\3"+
		"\32\3\32\3\33\3\33\3\33\3\33\3\34\3\34\3\34\3\34\3\34\3\35\3\35\3\35\3"+
		"\35\3\35\3\35\3\35\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\37\3\37\3\37\3"+
		"\37\3\37\3 \3 \3 \3 \3 \3!\3!\3!\3!\3!\3\"\3\"\3\"\3#\3#\3$\3$\3%\3%\3"+
		"&\3&\3\'\3\'\3(\3(\3)\3)\3*\3*\3+\3+\3,\3,\3-\3-\3.\3.\3.\3/\3/\3\60\3"+
		"\60\3\61\3\61\3\62\3\62\3\63\3\63\3\63\3\64\3\64\3\64\3\65\3\65\3\66\3"+
		"\66\3\67\3\67\38\38\38\39\39\39\3:\3:\3;\3;\3;\3<\3<\3=\3=\3=\3>\3>\3"+
		"?\3?\3?\3@\3@\3A\3A\3A\3B\3B\3C\3C\3C\3D\3D\3E\3E\3E\3F\3F\3G\3G\3G\3"+
		"H\3H\3H\3I\3I\7I\u01cc\nI\fI\16I\u01cf\13I\3J\3J\7J\u01d3\nJ\fJ\16J\u01d6"+
		"\13J\3J\3J\3K\3K\3K\5K\u01dd\nK\3L\3L\3M\5M\u01e2\nM\3M\3M\3M\3N\3N\5"+
		"N\u01e9\nN\3N\7N\u01ec\nN\fN\16N\u01ef\13N\3O\3O\3O\3O\3O\7O\u01f6\nO"+
		"\fO\16O\u01f9\13O\3O\6O\u01fc\nO\rO\16O\u01fd\3P\3P\3P\3P\3P\7P\u0205"+
		"\nP\fP\16P\u0208\13P\3P\3P\3P\3Q\3Q\3Q\3Q\7Q\u0211\nQ\fQ\16Q\u0214\13"+
		"Q\3Q\3Q\3R\3R\3R\3R\7R\u021c\nR\fR\16R\u021f\13R\3R\3R\3R\3R\3R\3S\3S"+
		"\3S\3S\5\u01f7\u0206\u021d\2T\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13"+
		"\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61"+
		"\32\63\33\65\34\67\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]\60_\61"+
		"a\62c\63e\64g\65i\66k\67m8o9q:s;u<w=y>{?}@\177A\u0081B\u0083C\u0085D\u0087"+
		"E\u0089F\u008bG\u008dH\u008fI\u0091J\u0093K\u0095\2\u0097L\u0099M\u009b"+
		"\2\u009dN\u009fO\u00a1P\u00a3Q\u00a5R\3\2\b\5\2C\\aac|\6\2\62;C\\aac|"+
		"\6\2\f\f\17\17$$^^\3\2\62;\4\2\f\f\17\17\5\2\13\f\17\17\"\"\2\u0231\2"+
		"\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2"+
		"\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2"+
		"\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2"+
		"\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2"+
		"\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2"+
		"\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2"+
		"\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U"+
		"\3\2\2\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2"+
		"\2\2\2c\3\2\2\2\2e\3\2\2\2\2g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2\2m\3\2\2\2"+
		"\2o\3\2\2\2\2q\3\2\2\2\2s\3\2\2\2\2u\3\2\2\2\2w\3\2\2\2\2y\3\2\2\2\2{"+
		"\3\2\2\2\2}\3\2\2\2\2\177\3\2\2\2\2\u0081\3\2\2\2\2\u0083\3\2\2\2\2\u0085"+
		"\3\2\2\2\2\u0087\3\2\2\2\2\u0089\3\2\2\2\2\u008b\3\2\2\2\2\u008d\3\2\2"+
		"\2\2\u008f\3\2\2\2\2\u0091\3\2\2\2\2\u0093\3\2\2\2\2\u0097\3\2\2\2\2\u0099"+
		"\3\2\2\2\2\u009d\3\2\2\2\2\u009f\3\2\2\2\2\u00a1\3\2\2\2\2\u00a3\3\2\2"+
		"\2\2\u00a5\3\2\2\2\3\u00a7\3\2\2\2\5\u00b0\3\2\2\2\7\u00ba\3\2\2\2\t\u00c1"+
		"\3\2\2\2\13\u00cc\3\2\2\2\r\u00d6\3\2\2\2\17\u00df\3\2\2\2\21\u00e7\3"+
		"\2\2\2\23\u00ed\3\2\2\2\25\u00f3\3\2\2\2\27\u00ff\3\2\2\2\31\u0104\3\2"+
		"\2\2\33\u010a\3\2\2\2\35\u0112\3\2\2\2\37\u0116\3\2\2\2!\u0119\3\2\2\2"+
		"#\u011e\3\2\2\2%\u0124\3\2\2\2\'\u012a\3\2\2\2)\u012d\3\2\2\2+\u0132\3"+
		"\2\2\2-\u0136\3\2\2\2/\u0139\3\2\2\2\61\u013e\3\2\2\2\63\u0144\3\2\2\2"+
		"\65\u0147\3\2\2\2\67\u014b\3\2\2\29\u0150\3\2\2\2;\u0157\3\2\2\2=\u015e"+
		"\3\2\2\2?\u0163\3\2\2\2A\u0168\3\2\2\2C\u016d\3\2\2\2E\u0170\3\2\2\2G"+
		"\u0172\3\2\2\2I\u0174\3\2\2\2K\u0176\3\2\2\2M\u0178\3\2\2\2O\u017a\3\2"+
		"\2\2Q\u017c\3\2\2\2S\u017e\3\2\2\2U\u0180\3\2\2\2W\u0182\3\2\2\2Y\u0184"+
		"\3\2\2\2[\u0186\3\2\2\2]\u0189\3\2\2\2_\u018b\3\2\2\2a\u018d\3\2\2\2c"+
		"\u018f\3\2\2\2e\u0191\3\2\2\2g\u0194\3\2\2\2i\u0197\3\2\2\2k\u0199\3\2"+
		"\2\2m\u019b\3\2\2\2o\u019d\3\2\2\2q\u01a0\3\2\2\2s\u01a3\3\2\2\2u\u01a5"+
		"\3\2\2\2w\u01a8\3\2\2\2y\u01aa\3\2\2\2{\u01ad\3\2\2\2}\u01af\3\2\2\2\177"+
		"\u01b2\3\2\2\2\u0081\u01b4\3\2\2\2\u0083\u01b7\3\2\2\2\u0085\u01b9\3\2"+
		"\2\2\u0087\u01bc\3\2\2\2\u0089\u01be\3\2\2\2\u008b\u01c1\3\2\2\2\u008d"+
		"\u01c3\3\2\2\2\u008f\u01c6\3\2\2\2\u0091\u01c9\3\2\2\2\u0093\u01d0\3\2"+
		"\2\2\u0095\u01dc\3\2\2\2\u0097\u01de\3\2\2\2\u0099\u01e1\3\2\2\2\u009b"+
		"\u01e6\3\2\2\2\u009d\u01fb\3\2\2\2\u009f\u01ff\3\2\2\2\u00a1\u020c\3\2"+
		"\2\2\u00a3\u0217\3\2\2\2\u00a5\u0225\3\2\2\2\u00a7\u00a8\7e\2\2\u00a8"+
		"\u00a9\7q\2\2\u00a9\u00aa\7p\2\2\u00aa\u00ab\7v\2\2\u00ab\u00ac\7t\2\2"+
		"\u00ac\u00ad\7c\2\2\u00ad\u00ae\7e\2\2\u00ae\u00af\7v\2\2\u00af\4\3\2"+
		"\2\2\u00b0\u00b1\7k\2\2\u00b1\u00b2\7p\2\2\u00b2\u00b3\7v\2\2\u00b3\u00b4"+
		"\7g\2\2\u00b4\u00b5\7t\2\2\u00b5\u00b6\7h\2\2\u00b6\u00b7\7c\2\2\u00b7"+
		"\u00b8\7e\2\2\u00b8\u00b9\7g\2\2\u00b9\6\3\2\2\2\u00ba\u00bb\7k\2\2\u00bb"+
		"\u00bc\7o\2\2\u00bc\u00bd\7r\2\2\u00bd\u00be\7q\2\2\u00be\u00bf\7t\2\2"+
		"\u00bf\u00c0\7v\2\2\u00c0\b\3\2\2\2\u00c1\u00c2\7k\2\2\u00c2\u00c3\7o"+
		"\2\2\u00c3\u00c4\7r\2\2\u00c4\u00c5\7n\2\2\u00c5\u00c6\7g\2\2\u00c6\u00c7"+
		"\7o\2\2\u00c7\u00c8\7g\2\2\u00c8\u00c9\7p\2\2\u00c9\u00ca\7v\2\2\u00ca"+
		"\u00cb\7u\2\2\u00cb\n\3\2\2\2\u00cc\u00cd\7g\2\2\u00cd\u00ce\7z\2\2\u00ce"+
		"\u00cf\7v\2\2\u00cf\u00d0\7g\2\2\u00d0\u00d1\7p\2\2\u00d1\u00d2\7u\2\2"+
		"\u00d2\u00d3\7k\2\2\u00d3\u00d4\7q\2\2\u00d4\u00d5\7p\2\2\u00d5\f\3\2"+
		"\2\2\u00d6\u00d7\7t\2\2\u00d7\u00d8\7g\2\2\u00d8\u00d9\7s\2\2\u00d9\u00da"+
		"\7w\2\2\u00da\u00db\7k\2\2\u00db\u00dc\7t\2\2\u00dc\u00dd\7g\2\2\u00dd"+
		"\u00de\7u\2\2\u00de\16\3\2\2\2\u00df\u00e0\7g\2\2\u00e0\u00e1\7z\2\2\u00e1"+
		"\u00e2\7v\2\2\u00e2\u00e3\7g\2\2\u00e3\u00e4\7p\2\2\u00e4\u00e5\7f\2\2"+
		"\u00e5\u00e6\7u\2\2\u00e6\20\3\2\2\2\u00e7\u00e8\7g\2\2\u00e8\u00e9\7"+
		"t\2\2\u00e9\u00ea\7t\2\2\u00ea\u00eb\7q\2\2\u00eb\u00ec\7t\2\2\u00ec\22"+
		"\3\2\2\2\u00ed\u00ee\7g\2\2\u00ee\u00ef\7x\2\2\u00ef\u00f0\7g\2\2\u00f0"+
		"\u00f1\7p\2\2\u00f1\u00f2\7v\2\2\u00f2\24\3\2\2\2\u00f3\u00f4\7k\2\2\u00f4"+
		"\u00f5\7p\2\2\u00f5\u00f6\7u\2\2\u00f6\u00f7\7v\2\2\u00f7\u00f8\7c\2\2"+
		"\u00f8\u00f9\7p\2\2\u00f9\u00fa\7v\2\2\u00fa\u00fb\7k\2\2\u00fb\u00fc"+
		"\7c\2\2\u00fc\u00fd\7v\2\2\u00fd\u00fe\7g\2\2\u00fe\26\3\2\2\2\u00ff\u0100"+
		"\7g\2\2\u0100\u0101\7z\2\2\u0101\u0102\7g\2\2\u0102\u0103\7e\2\2\u0103"+
		"\30\3\2\2\2\u0104\u0105\7s\2\2\u0105\u0106\7w\2\2\u0106\u0107\7g\2\2\u0107"+
		"\u0108\7t\2\2\u0108\u0109\7{\2\2\u0109\32\3\2\2\2\u010a\u010b\7o\2\2\u010b"+
		"\u010c\7k\2\2\u010c\u010d\7i\2\2\u010d\u010e\7t\2\2\u010e\u010f\7c\2\2"+
		"\u010f\u0110\7v\2\2\u0110\u0111\7g\2\2\u0111\34\3\2\2\2\u0112\u0113\7"+
		"h\2\2\u0113\u0114\7q\2\2\u0114\u0115\7t\2\2\u0115\36\3\2\2\2\u0116\u0117"+
		"\7k\2\2\u0117\u0118\7p\2\2\u0118 \3\2\2\2\u0119\u011a\7h\2\2\u011a\u011b"+
		"\7t\2\2\u011b\u011c\7q\2\2\u011c\u011d\7o\2\2\u011d\"\3\2\2\2\u011e\u011f"+
		"\7u\2\2\u011f\u0120\7v\2\2\u0120\u0121\7c\2\2\u0121\u0122\7v\2\2\u0122"+
		"\u0123\7g\2\2\u0123$\3\2\2\2\u0124\u0125\7v\2\2\u0125\u0126\7k\2\2\u0126"+
		"\u0127\7o\2\2\u0127\u0128\7g\2\2\u0128\u0129\7u\2\2\u0129&\3\2\2\2\u012a"+
		"\u012b\7k\2\2\u012b\u012c\7h\2\2\u012c(\3\2\2\2\u012d\u012e\7g\2\2\u012e"+
		"\u012f\7n\2\2\u012f\u0130\7u\2\2\u0130\u0131\7g\2\2\u0131*\3\2\2\2\u0132"+
		"\u0133\7c\2\2\u0133\u0134\7p\2\2\u0134\u0135\7f\2\2\u0135,\3\2\2\2\u0136"+
		"\u0137\7q\2\2\u0137\u0138\7t\2\2\u0138.\3\2\2\2\u0139\u013a\7v\2\2\u013a"+
		"\u013b\7t\2\2\u013b\u013c\7w\2\2\u013c\u013d\7g\2\2\u013d\60\3\2\2\2\u013e"+
		"\u013f\7h\2\2\u013f\u0140\7c\2\2\u0140\u0141\7n\2\2\u0141\u0142\7u\2\2"+
		"\u0142\u0143\7g\2\2\u0143\62\3\2\2\2\u0144\u0145\7h\2\2\u0145\u0146\7"+
		"p\2\2\u0146\64\3\2\2\2\u0147\u0148\7n\2\2\u0148\u0149\7g\2\2\u0149\u014a"+
		"\7v\2\2\u014a\66\3\2\2\2\u014b\u014c\7h\2\2\u014c\u014d\7c\2\2\u014d\u014e"+
		"\7k\2\2\u014e\u014f\7n\2\2\u014f8\3\2\2\2\u0150\u0151\7t\2\2\u0151\u0152"+
		"\7g\2\2\u0152\u0153\7v\2\2\u0153\u0154\7w\2\2\u0154\u0155\7t\2\2\u0155"+
		"\u0156\7p\2\2\u0156:\3\2\2\2\u0157\u0158\7u\2\2\u0158\u0159\7v\2\2\u0159"+
		"\u015a\7t\2\2\u015a\u015b\7w\2\2\u015b\u015c\7e\2\2\u015c\u015d\7v\2\2"+
		"\u015d<\3\2\2\2\u015e\u015f\7g\2\2\u015f\u0160\7p\2\2\u0160\u0161\7w\2"+
		"\2\u0161\u0162\7o\2\2\u0162>\3\2\2\2\u0163\u0164\7v\2\2\u0164\u0165\7"+
		"{\2\2\u0165\u0166\7r\2\2\u0166\u0167\7g\2\2\u0167@\3\2\2\2\u0168\u0169"+
		"\7g\2\2\u0169\u016a\7o\2\2\u016a\u016b\7k\2\2\u016b\u016c\7v\2\2\u016c"+
		"B\3\2\2\2\u016d\u016e\7c\2\2\u016e\u016f\7u\2\2\u016fD\3\2\2\2\u0170\u0171"+
		"\7*\2\2\u0171F\3\2\2\2\u0172\u0173\7+\2\2\u0173H\3\2\2\2\u0174\u0175\7"+
		"]\2\2\u0175J\3\2\2\2\u0176\u0177\7_\2\2\u0177L\3\2\2\2\u0178\u0179\7}"+
		"\2\2\u0179N\3\2\2\2\u017a\u017b\7\177\2\2\u017bP\3\2\2\2\u017c\u017d\7"+
		"\60\2\2\u017dR\3\2\2\2\u017e\u017f\7.\2\2\u017fT\3\2\2\2\u0180\u0181\7"+
		"A\2\2\u0181V\3\2\2\2\u0182\u0183\7#\2\2\u0183X\3\2\2\2\u0184\u0185\7<"+
		"\2\2\u0185Z\3\2\2\2\u0186\u0187\7<\2\2\u0187\u0188\7<\2\2\u0188\\\3\2"+
		"\2\2\u0189\u018a\7&\2\2\u018a^\3\2\2\2\u018b\u018c\7%\2\2\u018c`\3\2\2"+
		"\2\u018d\u018e\7B\2\2\u018eb\3\2\2\2\u018f\u0190\7(\2\2\u0190d\3\2\2\2"+
		"\u0191\u0192\7/\2\2\u0192\u0193\7@\2\2\u0193f\3\2\2\2\u0194\u0195\7?\2"+
		"\2\u0195\u0196\7@\2\2\u0196h\3\2\2\2\u0197\u0198\7)\2\2\u0198j\3\2\2\2"+
		"\u0199\u019a\7$\2\2\u019al\3\2\2\2\u019b\u019c\7?\2\2\u019cn\3\2\2\2\u019d"+
		"\u019e\7?\2\2\u019e\u019f\7?\2\2\u019fp\3\2\2\2\u01a0\u01a1\7#\2\2\u01a1"+
		"\u01a2\7?\2\2\u01a2r\3\2\2\2\u01a3\u01a4\7-\2\2\u01a4t\3\2\2\2\u01a5\u01a6"+
		"\7-\2\2\u01a6\u01a7\7?\2\2\u01a7v\3\2\2\2\u01a8\u01a9\7/\2\2\u01a9x\3"+
		"\2\2\2\u01aa\u01ab\7/\2\2\u01ab\u01ac\7?\2\2\u01acz\3\2\2\2\u01ad\u01ae"+
		"\7,\2\2\u01ae|\3\2\2\2\u01af\u01b0\7,\2\2\u01b0\u01b1\7?\2\2\u01b1~\3"+
		"\2\2\2\u01b2\u01b3\7\61\2\2\u01b3\u0080\3\2\2\2\u01b4\u01b5\7\61\2\2\u01b5"+
		"\u01b6\7?\2\2\u01b6\u0082\3\2\2\2\u01b7\u01b8\7\'\2\2\u01b8\u0084\3\2"+
		"\2\2\u01b9\u01ba\7\'\2\2\u01ba\u01bb\7?\2\2\u01bb\u0086\3\2\2\2\u01bc"+
		"\u01bd\7>\2\2\u01bd\u0088\3\2\2\2\u01be\u01bf\7>\2\2\u01bf\u01c0\7?\2"+
		"\2\u01c0\u008a\3\2\2\2\u01c1\u01c2\7@\2\2\u01c2\u008c\3\2\2\2\u01c3\u01c4"+
		"\7@\2\2\u01c4\u01c5\7?\2\2\u01c5\u008e\3\2\2\2\u01c6\u01c7\7,\2\2\u01c7"+
		"\u01c8\7,\2\2\u01c8\u0090\3\2\2\2\u01c9\u01cd\t\2\2\2\u01ca\u01cc\t\3"+
		"\2\2\u01cb\u01ca\3\2\2\2\u01cc\u01cf\3\2\2\2\u01cd\u01cb\3\2\2\2\u01cd"+
		"\u01ce\3\2\2\2\u01ce\u0092\3\2\2\2\u01cf\u01cd\3\2\2\2\u01d0\u01d4\5k"+
		"\66\2\u01d1\u01d3\5\u0095K\2\u01d2\u01d1\3\2\2\2\u01d3\u01d6\3\2\2\2\u01d4"+
		"\u01d2\3\2\2\2\u01d4\u01d5\3\2\2\2\u01d5\u01d7\3\2\2\2\u01d6\u01d4\3\2"+
		"\2\2\u01d7\u01d8\5k\66\2\u01d8\u0094\3\2\2\2\u01d9\u01dd\n\4\2\2\u01da"+
		"\u01db\7^\2\2\u01db\u01dd\13\2\2\2\u01dc\u01d9\3\2\2\2\u01dc\u01da\3\2"+
		"\2\2\u01dd\u0096\3\2\2\2\u01de\u01df\5\u009bN\2\u01df\u0098\3\2\2\2\u01e0"+
		"\u01e2\5\u009bN\2\u01e1\u01e0\3\2\2\2\u01e1\u01e2\3\2\2\2\u01e2\u01e3"+
		"\3\2\2\2\u01e3\u01e4\5Q)\2\u01e4\u01e5\5\u009bN\2\u01e5\u009a\3\2\2\2"+
		"\u01e6\u01ed\t\5\2\2\u01e7\u01e9\7a\2\2\u01e8\u01e7\3\2\2\2\u01e8\u01e9"+
		"\3\2\2\2\u01e9\u01ea\3\2\2\2\u01ea\u01ec\t\5\2\2\u01eb\u01e8\3\2\2\2\u01ec"+
		"\u01ef\3\2\2\2\u01ed\u01eb\3\2\2\2\u01ed\u01ee\3\2\2\2\u01ee\u009c\3\2"+
		"\2\2\u01ef\u01ed\3\2\2\2\u01f0\u01f1\7\61\2\2\u01f1\u01f2\7\61\2\2\u01f2"+
		"\u01f3\7\61\2\2\u01f3\u01f7\3\2\2\2\u01f4\u01f6\13\2\2\2\u01f5\u01f4\3"+
		"\2\2\2\u01f6\u01f9\3\2\2\2\u01f7\u01f8\3\2\2\2\u01f7\u01f5\3\2\2\2\u01f8"+
		"\u01fa\3\2\2\2\u01f9\u01f7\3\2\2\2\u01fa\u01fc\t\6\2\2\u01fb\u01f0\3\2"+
		"\2\2\u01fc\u01fd\3\2\2\2\u01fd\u01fb\3\2\2\2\u01fd\u01fe\3\2\2\2\u01fe"+
		"\u009e\3\2\2\2\u01ff\u0200\7\61\2\2\u0200\u0201\7,\2\2\u0201\u0202\7,"+
		"\2\2\u0202\u0206\3\2\2\2\u0203\u0205\13\2\2\2\u0204\u0203\3\2\2\2\u0205"+
		"\u0208\3\2\2\2\u0206\u0207\3\2\2\2\u0206\u0204\3\2\2\2\u0207\u0209\3\2"+
		"\2\2\u0208\u0206\3\2\2\2\u0209\u020a\7,\2\2\u020a\u020b\7\61\2\2\u020b"+
		"\u00a0\3\2\2\2\u020c\u020d\7\61\2\2\u020d\u020e\7\61\2\2\u020e\u0212\3"+
		"\2\2\2\u020f\u0211\n\6\2\2\u0210\u020f\3\2\2\2\u0211\u0214\3\2\2\2\u0212"+
		"\u0210\3\2\2\2\u0212\u0213\3\2\2\2\u0213\u0215\3\2\2\2\u0214\u0212\3\2"+
		"\2\2\u0215\u0216\bQ\2\2\u0216\u00a2\3\2\2\2\u0217\u0218\7\61\2\2\u0218"+
		"\u0219\7,\2\2\u0219\u021d\3\2\2\2\u021a\u021c\13\2\2\2\u021b\u021a\3\2"+
		"\2\2\u021c\u021f\3\2\2\2\u021d\u021e\3\2\2\2\u021d\u021b\3\2\2\2\u021e"+
		"\u0220\3\2\2\2\u021f\u021d\3\2\2\2\u0220\u0221\7,\2\2\u0221\u0222\7\61"+
		"\2\2\u0222\u0223\3\2\2\2\u0223\u0224\bR\2\2\u0224\u00a4\3\2\2\2\u0225"+
		"\u0226\t\7\2\2\u0226\u0227\3\2\2\2\u0227\u0228\bS\2\2\u0228\u00a6\3\2"+
		"\2\2\16\2\u01cd\u01d4\u01dc\u01e1\u01e8\u01ed\u01f7\u01fd\u0206\u0212"+
		"\u021d\3\2\3\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}