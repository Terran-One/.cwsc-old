// Generated from /Users/lukewilson/git/terra/cwsc/grammar/CWScriptLexer.g4 by ANTLR 4.8
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
		EXTENDS=7, ERROR=8, EVENT=9, INSTANTIATE=10, EXEC=11, EXECUTE_NOW=12, 
		QUERY=13, MIGRATE=14, FOR=15, IN=16, FROM=17, STATE=18, TIMES=19, IF=20, 
		ELSE=21, AND=22, OR=23, TRUE=24, FALSE=25, FN=26, LET=27, FAIL=28, RETURN=29, 
		STRUCT=30, ENUM=31, TYPE=32, EMIT=33, AS=34, LPAREN=35, RPAREN=36, LBRACK=37, 
		RBRACK=38, LBRACE=39, RBRACE=40, DOT=41, COMMA=42, QUEST=43, EXCLAM=44, 
		COLON=45, D_COLON=46, DOLLAR=47, HASH=48, AT=49, AMP=50, ARROW=51, FAT_ARROW=52, 
		S_QUOTE=53, D_QUOTE=54, EQ=55, EQEQ=56, NEQ=57, PLUS=58, PLUS_EQ=59, MINUS=60, 
		MINUS_EQ=61, MUL=62, MUL_EQ=63, DIV=64, DIV_EQ=65, MOD=66, MOD_EQ=67, 
		LT=68, LT_EQ=69, GT=70, GT_EQ=71, POW=72, Ident=73, StringLiteral=74, 
		IntegerLiteral=75, DecimalLiteral=76, CWSPEC_LINE_COMMENT=77, CWSPEC_BLOCK_COMMENT=78, 
		LINE_COMMENT=79, BLOCK_COMMENT=80, WS=81;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"CONTRACT", "INTERFACE", "IMPORT", "IMPLEMENTS", "EXTENSION", "REQUIRES", 
			"EXTENDS", "ERROR", "EVENT", "INSTANTIATE", "EXEC", "EXECUTE_NOW", "QUERY", 
			"MIGRATE", "FOR", "IN", "FROM", "STATE", "TIMES", "IF", "ELSE", "AND", 
			"OR", "TRUE", "FALSE", "FN", "LET", "FAIL", "RETURN", "STRUCT", "ENUM", 
			"TYPE", "EMIT", "AS", "LPAREN", "RPAREN", "LBRACK", "RBRACK", "LBRACE", 
			"RBRACE", "DOT", "COMMA", "QUEST", "EXCLAM", "COLON", "D_COLON", "DOLLAR", 
			"HASH", "AT", "AMP", "ARROW", "FAT_ARROW", "S_QUOTE", "D_QUOTE", "EQ", 
			"EQEQ", "NEQ", "PLUS", "PLUS_EQ", "MINUS", "MINUS_EQ", "MUL", "MUL_EQ", 
			"DIV", "DIV_EQ", "MOD", "MOD_EQ", "LT", "LT_EQ", "GT", "GT_EQ", "POW", 
			"Ident", "StringLiteral", "DoubleQuotedStringCharacter", "IntegerLiteral", 
			"DecimalLiteral", "DecimalDigits", "CWSPEC_LINE_COMMENT", "CWSPEC_BLOCK_COMMENT", 
			"LINE_COMMENT", "BLOCK_COMMENT", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'contract'", "'interface'", "'import'", "'implements'", "'extension'", 
			"'requires'", "'extends'", "'error'", "'event'", "'instantiate'", "'exec'", 
			"'execute!'", "'query'", "'migrate'", "'for'", "'in'", "'from'", "'state'", 
			"'times'", "'if'", "'else'", "'and'", "'or'", "'true'", "'false'", "'fn'", 
			"'let'", "'fail'", "'return'", "'struct'", "'enum'", "'type'", "'emit'", 
			"'as'", "'('", "')'", "'['", "']'", "'{'", "'}'", "'.'", "','", "'?'", 
			"'!'", "':'", "'::'", "'$'", "'#'", "'@'", "'&'", "'->'", "'=>'", "'''", 
			"'\"'", "'='", "'=='", "'!='", "'+'", "'+='", "'-'", "'-='", "'*'", "'*='", 
			"'/'", "'/='", "'%'", "'%='", "'<'", "'<='", "'>'", "'>='", "'**'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "CONTRACT", "INTERFACE", "IMPORT", "IMPLEMENTS", "EXTENSION", "REQUIRES", 
			"EXTENDS", "ERROR", "EVENT", "INSTANTIATE", "EXEC", "EXECUTE_NOW", "QUERY", 
			"MIGRATE", "FOR", "IN", "FROM", "STATE", "TIMES", "IF", "ELSE", "AND", 
			"OR", "TRUE", "FALSE", "FN", "LET", "FAIL", "RETURN", "STRUCT", "ENUM", 
			"TYPE", "EMIT", "AS", "LPAREN", "RPAREN", "LBRACK", "RBRACK", "LBRACE", 
			"RBRACE", "DOT", "COMMA", "QUEST", "EXCLAM", "COLON", "D_COLON", "DOLLAR", 
			"HASH", "AT", "AMP", "ARROW", "FAT_ARROW", "S_QUOTE", "D_QUOTE", "EQ", 
			"EQEQ", "NEQ", "PLUS", "PLUS_EQ", "MINUS", "MINUS_EQ", "MUL", "MUL_EQ", 
			"DIV", "DIV_EQ", "MOD", "MOD_EQ", "LT", "LT_EQ", "GT", "GT_EQ", "POW", 
			"Ident", "StringLiteral", "IntegerLiteral", "DecimalLiteral", "CWSPEC_LINE_COMMENT", 
			"CWSPEC_BLOCK_COMMENT", "LINE_COMMENT", "BLOCK_COMMENT", "WS"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2S\u0234\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\4S\tS\4T\tT"+
		"\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5"+
		"\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3"+
		"\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t"+
		"\3\n\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3"+
		"\r\3\16\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3"+
		"\17\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3\22\3\23\3"+
		"\23\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24\3\24\3\25\3\25\3\25\3"+
		"\26\3\26\3\26\3\26\3\26\3\27\3\27\3\27\3\27\3\30\3\30\3\30\3\31\3\31\3"+
		"\31\3\31\3\31\3\32\3\32\3\32\3\32\3\32\3\32\3\33\3\33\3\33\3\34\3\34\3"+
		"\34\3\34\3\35\3\35\3\35\3\35\3\35\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3"+
		"\37\3\37\3\37\3\37\3\37\3\37\3\37\3 \3 \3 \3 \3 \3!\3!\3!\3!\3!\3\"\3"+
		"\"\3\"\3\"\3\"\3#\3#\3#\3$\3$\3%\3%\3&\3&\3\'\3\'\3(\3(\3)\3)\3*\3*\3"+
		"+\3+\3,\3,\3-\3-\3.\3.\3/\3/\3/\3\60\3\60\3\61\3\61\3\62\3\62\3\63\3\63"+
		"\3\64\3\64\3\64\3\65\3\65\3\65\3\66\3\66\3\67\3\67\38\38\39\39\39\3:\3"+
		":\3:\3;\3;\3<\3<\3<\3=\3=\3>\3>\3>\3?\3?\3@\3@\3@\3A\3A\3B\3B\3B\3C\3"+
		"C\3D\3D\3D\3E\3E\3F\3F\3F\3G\3G\3H\3H\3H\3I\3I\3I\3J\3J\7J\u01d7\nJ\f"+
		"J\16J\u01da\13J\3K\3K\7K\u01de\nK\fK\16K\u01e1\13K\3K\3K\3L\3L\3L\5L\u01e8"+
		"\nL\3M\3M\3N\5N\u01ed\nN\3N\3N\3N\3O\3O\5O\u01f4\nO\3O\7O\u01f7\nO\fO"+
		"\16O\u01fa\13O\3P\3P\3P\3P\3P\7P\u0201\nP\fP\16P\u0204\13P\3P\6P\u0207"+
		"\nP\rP\16P\u0208\3Q\3Q\3Q\3Q\3Q\7Q\u0210\nQ\fQ\16Q\u0213\13Q\3Q\3Q\3Q"+
		"\3R\3R\3R\3R\7R\u021c\nR\fR\16R\u021f\13R\3R\3R\3S\3S\3S\3S\7S\u0227\n"+
		"S\fS\16S\u022a\13S\3S\3S\3S\3S\3S\3T\3T\3T\3T\5\u0202\u0211\u0228\2U\3"+
		"\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37"+
		"\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34\67\359\36;\37="+
		" ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]\60_\61a\62c\63e\64g\65i\66k\67m8o9"+
		"q:s;u<w=y>{?}@\177A\u0081B\u0083C\u0085D\u0087E\u0089F\u008bG\u008dH\u008f"+
		"I\u0091J\u0093K\u0095L\u0097\2\u0099M\u009bN\u009d\2\u009fO\u00a1P\u00a3"+
		"Q\u00a5R\u00a7S\3\2\b\5\2C\\aac|\6\2\62;C\\aac|\6\2\f\f\17\17$$^^\3\2"+
		"\62;\4\2\f\f\17\17\5\2\13\f\17\17\"\"\2\u023c\2\3\3\2\2\2\2\5\3\2\2\2"+
		"\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3"+
		"\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2"+
		"\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2"+
		"\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2"+
		"\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2"+
		"\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2"+
		"\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y"+
		"\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3\2"+
		"\2\2\2g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2\2m\3\2\2\2\2o\3\2\2\2\2q\3\2\2\2"+
		"\2s\3\2\2\2\2u\3\2\2\2\2w\3\2\2\2\2y\3\2\2\2\2{\3\2\2\2\2}\3\2\2\2\2\177"+
		"\3\2\2\2\2\u0081\3\2\2\2\2\u0083\3\2\2\2\2\u0085\3\2\2\2\2\u0087\3\2\2"+
		"\2\2\u0089\3\2\2\2\2\u008b\3\2\2\2\2\u008d\3\2\2\2\2\u008f\3\2\2\2\2\u0091"+
		"\3\2\2\2\2\u0093\3\2\2\2\2\u0095\3\2\2\2\2\u0099\3\2\2\2\2\u009b\3\2\2"+
		"\2\2\u009f\3\2\2\2\2\u00a1\3\2\2\2\2\u00a3\3\2\2\2\2\u00a5\3\2\2\2\2\u00a7"+
		"\3\2\2\2\3\u00a9\3\2\2\2\5\u00b2\3\2\2\2\7\u00bc\3\2\2\2\t\u00c3\3\2\2"+
		"\2\13\u00ce\3\2\2\2\r\u00d8\3\2\2\2\17\u00e1\3\2\2\2\21\u00e9\3\2\2\2"+
		"\23\u00ef\3\2\2\2\25\u00f5\3\2\2\2\27\u0101\3\2\2\2\31\u0106\3\2\2\2\33"+
		"\u010f\3\2\2\2\35\u0115\3\2\2\2\37\u011d\3\2\2\2!\u0121\3\2\2\2#\u0124"+
		"\3\2\2\2%\u0129\3\2\2\2\'\u012f\3\2\2\2)\u0135\3\2\2\2+\u0138\3\2\2\2"+
		"-\u013d\3\2\2\2/\u0141\3\2\2\2\61\u0144\3\2\2\2\63\u0149\3\2\2\2\65\u014f"+
		"\3\2\2\2\67\u0152\3\2\2\29\u0156\3\2\2\2;\u015b\3\2\2\2=\u0162\3\2\2\2"+
		"?\u0169\3\2\2\2A\u016e\3\2\2\2C\u0173\3\2\2\2E\u0178\3\2\2\2G\u017b\3"+
		"\2\2\2I\u017d\3\2\2\2K\u017f\3\2\2\2M\u0181\3\2\2\2O\u0183\3\2\2\2Q\u0185"+
		"\3\2\2\2S\u0187\3\2\2\2U\u0189\3\2\2\2W\u018b\3\2\2\2Y\u018d\3\2\2\2["+
		"\u018f\3\2\2\2]\u0191\3\2\2\2_\u0194\3\2\2\2a\u0196\3\2\2\2c\u0198\3\2"+
		"\2\2e\u019a\3\2\2\2g\u019c\3\2\2\2i\u019f\3\2\2\2k\u01a2\3\2\2\2m\u01a4"+
		"\3\2\2\2o\u01a6\3\2\2\2q\u01a8\3\2\2\2s\u01ab\3\2\2\2u\u01ae\3\2\2\2w"+
		"\u01b0\3\2\2\2y\u01b3\3\2\2\2{\u01b5\3\2\2\2}\u01b8\3\2\2\2\177\u01ba"+
		"\3\2\2\2\u0081\u01bd\3\2\2\2\u0083\u01bf\3\2\2\2\u0085\u01c2\3\2\2\2\u0087"+
		"\u01c4\3\2\2\2\u0089\u01c7\3\2\2\2\u008b\u01c9\3\2\2\2\u008d\u01cc\3\2"+
		"\2\2\u008f\u01ce\3\2\2\2\u0091\u01d1\3\2\2\2\u0093\u01d4\3\2\2\2\u0095"+
		"\u01db\3\2\2\2\u0097\u01e7\3\2\2\2\u0099\u01e9\3\2\2\2\u009b\u01ec\3\2"+
		"\2\2\u009d\u01f1\3\2\2\2\u009f\u0206\3\2\2\2\u00a1\u020a\3\2\2\2\u00a3"+
		"\u0217\3\2\2\2\u00a5\u0222\3\2\2\2\u00a7\u0230\3\2\2\2\u00a9\u00aa\7e"+
		"\2\2\u00aa\u00ab\7q\2\2\u00ab\u00ac\7p\2\2\u00ac\u00ad\7v\2\2\u00ad\u00ae"+
		"\7t\2\2\u00ae\u00af\7c\2\2\u00af\u00b0\7e\2\2\u00b0\u00b1\7v\2\2\u00b1"+
		"\4\3\2\2\2\u00b2\u00b3\7k\2\2\u00b3\u00b4\7p\2\2\u00b4\u00b5\7v\2\2\u00b5"+
		"\u00b6\7g\2\2\u00b6\u00b7\7t\2\2\u00b7\u00b8\7h\2\2\u00b8\u00b9\7c\2\2"+
		"\u00b9\u00ba\7e\2\2\u00ba\u00bb\7g\2\2\u00bb\6\3\2\2\2\u00bc\u00bd\7k"+
		"\2\2\u00bd\u00be\7o\2\2\u00be\u00bf\7r\2\2\u00bf\u00c0\7q\2\2\u00c0\u00c1"+
		"\7t\2\2\u00c1\u00c2\7v\2\2\u00c2\b\3\2\2\2\u00c3\u00c4\7k\2\2\u00c4\u00c5"+
		"\7o\2\2\u00c5\u00c6\7r\2\2\u00c6\u00c7\7n\2\2\u00c7\u00c8\7g\2\2\u00c8"+
		"\u00c9\7o\2\2\u00c9\u00ca\7g\2\2\u00ca\u00cb\7p\2\2\u00cb\u00cc\7v\2\2"+
		"\u00cc\u00cd\7u\2\2\u00cd\n\3\2\2\2\u00ce\u00cf\7g\2\2\u00cf\u00d0\7z"+
		"\2\2\u00d0\u00d1\7v\2\2\u00d1\u00d2\7g\2\2\u00d2\u00d3\7p\2\2\u00d3\u00d4"+
		"\7u\2\2\u00d4\u00d5\7k\2\2\u00d5\u00d6\7q\2\2\u00d6\u00d7\7p\2\2\u00d7"+
		"\f\3\2\2\2\u00d8\u00d9\7t\2\2\u00d9\u00da\7g\2\2\u00da\u00db\7s\2\2\u00db"+
		"\u00dc\7w\2\2\u00dc\u00dd\7k\2\2\u00dd\u00de\7t\2\2\u00de\u00df\7g\2\2"+
		"\u00df\u00e0\7u\2\2\u00e0\16\3\2\2\2\u00e1\u00e2\7g\2\2\u00e2\u00e3\7"+
		"z\2\2\u00e3\u00e4\7v\2\2\u00e4\u00e5\7g\2\2\u00e5\u00e6\7p\2\2\u00e6\u00e7"+
		"\7f\2\2\u00e7\u00e8\7u\2\2\u00e8\20\3\2\2\2\u00e9\u00ea\7g\2\2\u00ea\u00eb"+
		"\7t\2\2\u00eb\u00ec\7t\2\2\u00ec\u00ed\7q\2\2\u00ed\u00ee\7t\2\2\u00ee"+
		"\22\3\2\2\2\u00ef\u00f0\7g\2\2\u00f0\u00f1\7x\2\2\u00f1\u00f2\7g\2\2\u00f2"+
		"\u00f3\7p\2\2\u00f3\u00f4\7v\2\2\u00f4\24\3\2\2\2\u00f5\u00f6\7k\2\2\u00f6"+
		"\u00f7\7p\2\2\u00f7\u00f8\7u\2\2\u00f8\u00f9\7v\2\2\u00f9\u00fa\7c\2\2"+
		"\u00fa\u00fb\7p\2\2\u00fb\u00fc\7v\2\2\u00fc\u00fd\7k\2\2\u00fd\u00fe"+
		"\7c\2\2\u00fe\u00ff\7v\2\2\u00ff\u0100\7g\2\2\u0100\26\3\2\2\2\u0101\u0102"+
		"\7g\2\2\u0102\u0103\7z\2\2\u0103\u0104\7g\2\2\u0104\u0105\7e\2\2\u0105"+
		"\30\3\2\2\2\u0106\u0107\7g\2\2\u0107\u0108\7z\2\2\u0108\u0109\7g\2\2\u0109"+
		"\u010a\7e\2\2\u010a\u010b\7w\2\2\u010b\u010c\7v\2\2\u010c\u010d\7g\2\2"+
		"\u010d\u010e\7#\2\2\u010e\32\3\2\2\2\u010f\u0110\7s\2\2\u0110\u0111\7"+
		"w\2\2\u0111\u0112\7g\2\2\u0112\u0113\7t\2\2\u0113\u0114\7{\2\2\u0114\34"+
		"\3\2\2\2\u0115\u0116\7o\2\2\u0116\u0117\7k\2\2\u0117\u0118\7i\2\2\u0118"+
		"\u0119\7t\2\2\u0119\u011a\7c\2\2\u011a\u011b\7v\2\2\u011b\u011c\7g\2\2"+
		"\u011c\36\3\2\2\2\u011d\u011e\7h\2\2\u011e\u011f\7q\2\2\u011f\u0120\7"+
		"t\2\2\u0120 \3\2\2\2\u0121\u0122\7k\2\2\u0122\u0123\7p\2\2\u0123\"\3\2"+
		"\2\2\u0124\u0125\7h\2\2\u0125\u0126\7t\2\2\u0126\u0127\7q\2\2\u0127\u0128"+
		"\7o\2\2\u0128$\3\2\2\2\u0129\u012a\7u\2\2\u012a\u012b\7v\2\2\u012b\u012c"+
		"\7c\2\2\u012c\u012d\7v\2\2\u012d\u012e\7g\2\2\u012e&\3\2\2\2\u012f\u0130"+
		"\7v\2\2\u0130\u0131\7k\2\2\u0131\u0132\7o\2\2\u0132\u0133\7g\2\2\u0133"+
		"\u0134\7u\2\2\u0134(\3\2\2\2\u0135\u0136\7k\2\2\u0136\u0137\7h\2\2\u0137"+
		"*\3\2\2\2\u0138\u0139\7g\2\2\u0139\u013a\7n\2\2\u013a\u013b\7u\2\2\u013b"+
		"\u013c\7g\2\2\u013c,\3\2\2\2\u013d\u013e\7c\2\2\u013e\u013f\7p\2\2\u013f"+
		"\u0140\7f\2\2\u0140.\3\2\2\2\u0141\u0142\7q\2\2\u0142\u0143\7t\2\2\u0143"+
		"\60\3\2\2\2\u0144\u0145\7v\2\2\u0145\u0146\7t\2\2\u0146\u0147\7w\2\2\u0147"+
		"\u0148\7g\2\2\u0148\62\3\2\2\2\u0149\u014a\7h\2\2\u014a\u014b\7c\2\2\u014b"+
		"\u014c\7n\2\2\u014c\u014d\7u\2\2\u014d\u014e\7g\2\2\u014e\64\3\2\2\2\u014f"+
		"\u0150\7h\2\2\u0150\u0151\7p\2\2\u0151\66\3\2\2\2\u0152\u0153\7n\2\2\u0153"+
		"\u0154\7g\2\2\u0154\u0155\7v\2\2\u01558\3\2\2\2\u0156\u0157\7h\2\2\u0157"+
		"\u0158\7c\2\2\u0158\u0159\7k\2\2\u0159\u015a\7n\2\2\u015a:\3\2\2\2\u015b"+
		"\u015c\7t\2\2\u015c\u015d\7g\2\2\u015d\u015e\7v\2\2\u015e\u015f\7w\2\2"+
		"\u015f\u0160\7t\2\2\u0160\u0161\7p\2\2\u0161<\3\2\2\2\u0162\u0163\7u\2"+
		"\2\u0163\u0164\7v\2\2\u0164\u0165\7t\2\2\u0165\u0166\7w\2\2\u0166\u0167"+
		"\7e\2\2\u0167\u0168\7v\2\2\u0168>\3\2\2\2\u0169\u016a\7g\2\2\u016a\u016b"+
		"\7p\2\2\u016b\u016c\7w\2\2\u016c\u016d\7o\2\2\u016d@\3\2\2\2\u016e\u016f"+
		"\7v\2\2\u016f\u0170\7{\2\2\u0170\u0171\7r\2\2\u0171\u0172\7g\2\2\u0172"+
		"B\3\2\2\2\u0173\u0174\7g\2\2\u0174\u0175\7o\2\2\u0175\u0176\7k\2\2\u0176"+
		"\u0177\7v\2\2\u0177D\3\2\2\2\u0178\u0179\7c\2\2\u0179\u017a\7u\2\2\u017a"+
		"F\3\2\2\2\u017b\u017c\7*\2\2\u017cH\3\2\2\2\u017d\u017e\7+\2\2\u017eJ"+
		"\3\2\2\2\u017f\u0180\7]\2\2\u0180L\3\2\2\2\u0181\u0182\7_\2\2\u0182N\3"+
		"\2\2\2\u0183\u0184\7}\2\2\u0184P\3\2\2\2\u0185\u0186\7\177\2\2\u0186R"+
		"\3\2\2\2\u0187\u0188\7\60\2\2\u0188T\3\2\2\2\u0189\u018a\7.\2\2\u018a"+
		"V\3\2\2\2\u018b\u018c\7A\2\2\u018cX\3\2\2\2\u018d\u018e\7#\2\2\u018eZ"+
		"\3\2\2\2\u018f\u0190\7<\2\2\u0190\\\3\2\2\2\u0191\u0192\7<\2\2\u0192\u0193"+
		"\7<\2\2\u0193^\3\2\2\2\u0194\u0195\7&\2\2\u0195`\3\2\2\2\u0196\u0197\7"+
		"%\2\2\u0197b\3\2\2\2\u0198\u0199\7B\2\2\u0199d\3\2\2\2\u019a\u019b\7("+
		"\2\2\u019bf\3\2\2\2\u019c\u019d\7/\2\2\u019d\u019e\7@\2\2\u019eh\3\2\2"+
		"\2\u019f\u01a0\7?\2\2\u01a0\u01a1\7@\2\2\u01a1j\3\2\2\2\u01a2\u01a3\7"+
		")\2\2\u01a3l\3\2\2\2\u01a4\u01a5\7$\2\2\u01a5n\3\2\2\2\u01a6\u01a7\7?"+
		"\2\2\u01a7p\3\2\2\2\u01a8\u01a9\7?\2\2\u01a9\u01aa\7?\2\2\u01aar\3\2\2"+
		"\2\u01ab\u01ac\7#\2\2\u01ac\u01ad\7?\2\2\u01adt\3\2\2\2\u01ae\u01af\7"+
		"-\2\2\u01afv\3\2\2\2\u01b0\u01b1\7-\2\2\u01b1\u01b2\7?\2\2\u01b2x\3\2"+
		"\2\2\u01b3\u01b4\7/\2\2\u01b4z\3\2\2\2\u01b5\u01b6\7/\2\2\u01b6\u01b7"+
		"\7?\2\2\u01b7|\3\2\2\2\u01b8\u01b9\7,\2\2\u01b9~\3\2\2\2\u01ba\u01bb\7"+
		",\2\2\u01bb\u01bc\7?\2\2\u01bc\u0080\3\2\2\2\u01bd\u01be\7\61\2\2\u01be"+
		"\u0082\3\2\2\2\u01bf\u01c0\7\61\2\2\u01c0\u01c1\7?\2\2\u01c1\u0084\3\2"+
		"\2\2\u01c2\u01c3\7\'\2\2\u01c3\u0086\3\2\2\2\u01c4\u01c5\7\'\2\2\u01c5"+
		"\u01c6\7?\2\2\u01c6\u0088\3\2\2\2\u01c7\u01c8\7>\2\2\u01c8\u008a\3\2\2"+
		"\2\u01c9\u01ca\7>\2\2\u01ca\u01cb\7?\2\2\u01cb\u008c\3\2\2\2\u01cc\u01cd"+
		"\7@\2\2\u01cd\u008e\3\2\2\2\u01ce\u01cf\7@\2\2\u01cf\u01d0\7?\2\2\u01d0"+
		"\u0090\3\2\2\2\u01d1\u01d2\7,\2\2\u01d2\u01d3\7,\2\2\u01d3\u0092\3\2\2"+
		"\2\u01d4\u01d8\t\2\2\2\u01d5\u01d7\t\3\2\2\u01d6\u01d5\3\2\2\2\u01d7\u01da"+
		"\3\2\2\2\u01d8\u01d6\3\2\2\2\u01d8\u01d9\3\2\2\2\u01d9\u0094\3\2\2\2\u01da"+
		"\u01d8\3\2\2\2\u01db\u01df\5m\67\2\u01dc\u01de\5\u0097L\2\u01dd\u01dc"+
		"\3\2\2\2\u01de\u01e1\3\2\2\2\u01df\u01dd\3\2\2\2\u01df\u01e0\3\2\2\2\u01e0"+
		"\u01e2\3\2\2\2\u01e1\u01df\3\2\2\2\u01e2\u01e3\5m\67\2\u01e3\u0096\3\2"+
		"\2\2\u01e4\u01e8\n\4\2\2\u01e5\u01e6\7^\2\2\u01e6\u01e8\13\2\2\2\u01e7"+
		"\u01e4\3\2\2\2\u01e7\u01e5\3\2\2\2\u01e8\u0098\3\2\2\2\u01e9\u01ea\5\u009d"+
		"O\2\u01ea\u009a\3\2\2\2\u01eb\u01ed\5\u009dO\2\u01ec\u01eb\3\2\2\2\u01ec"+
		"\u01ed\3\2\2\2\u01ed\u01ee\3\2\2\2\u01ee\u01ef\5S*\2\u01ef\u01f0\5\u009d"+
		"O\2\u01f0\u009c\3\2\2\2\u01f1\u01f8\t\5\2\2\u01f2\u01f4\7a\2\2\u01f3\u01f2"+
		"\3\2\2\2\u01f3\u01f4\3\2\2\2\u01f4\u01f5\3\2\2\2\u01f5\u01f7\t\5\2\2\u01f6"+
		"\u01f3\3\2\2\2\u01f7\u01fa\3\2\2\2\u01f8\u01f6\3\2\2\2\u01f8\u01f9\3\2"+
		"\2\2\u01f9\u009e\3\2\2\2\u01fa\u01f8\3\2\2\2\u01fb\u01fc\7\61\2\2\u01fc"+
		"\u01fd\7\61\2\2\u01fd\u01fe\7\61\2\2\u01fe\u0202\3\2\2\2\u01ff\u0201\13"+
		"\2\2\2\u0200\u01ff\3\2\2\2\u0201\u0204\3\2\2\2\u0202\u0203\3\2\2\2\u0202"+
		"\u0200\3\2\2\2\u0203\u0205\3\2\2\2\u0204\u0202\3\2\2\2\u0205\u0207\t\6"+
		"\2\2\u0206\u01fb\3\2\2\2\u0207\u0208\3\2\2\2\u0208\u0206\3\2\2\2\u0208"+
		"\u0209\3\2\2\2\u0209\u00a0\3\2\2\2\u020a\u020b\7\61\2\2\u020b\u020c\7"+
		",\2\2\u020c\u020d\7,\2\2\u020d\u0211\3\2\2\2\u020e\u0210\13\2\2\2\u020f"+
		"\u020e\3\2\2\2\u0210\u0213\3\2\2\2\u0211\u0212\3\2\2\2\u0211\u020f\3\2"+
		"\2\2\u0212\u0214\3\2\2\2\u0213\u0211\3\2\2\2\u0214\u0215\7,\2\2\u0215"+
		"\u0216\7\61\2\2\u0216\u00a2\3\2\2\2\u0217\u0218\7\61\2\2\u0218\u0219\7"+
		"\61\2\2\u0219\u021d\3\2\2\2\u021a\u021c\n\6\2\2\u021b\u021a\3\2\2\2\u021c"+
		"\u021f\3\2\2\2\u021d\u021b\3\2\2\2\u021d\u021e\3\2\2\2\u021e\u0220\3\2"+
		"\2\2\u021f\u021d\3\2\2\2\u0220\u0221\bR\2\2\u0221\u00a4\3\2\2\2\u0222"+
		"\u0223\7\61\2\2\u0223\u0224\7,\2\2\u0224\u0228\3\2\2\2\u0225\u0227\13"+
		"\2\2\2\u0226\u0225\3\2\2\2\u0227\u022a\3\2\2\2\u0228\u0229\3\2\2\2\u0228"+
		"\u0226\3\2\2\2\u0229\u022b\3\2\2\2\u022a\u0228\3\2\2\2\u022b\u022c\7,"+
		"\2\2\u022c\u022d\7\61\2\2\u022d\u022e\3\2\2\2\u022e\u022f\bS\2\2\u022f"+
		"\u00a6\3\2\2\2\u0230\u0231\t\7\2\2\u0231\u0232\3\2\2\2\u0232\u0233\bT"+
		"\2\2\u0233\u00a8\3\2\2\2\16\2\u01d8\u01df\u01e7\u01ec\u01f3\u01f8\u0202"+
		"\u0208\u0211\u021d\u0228\3\2\3\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}