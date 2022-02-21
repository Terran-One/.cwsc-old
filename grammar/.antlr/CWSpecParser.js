// Generated from /Users/william/t1/cwsc/grammar/CWSpecParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var grammarFileName = "CWSpecParser.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001e\u0149\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0003\u0002\u0003\u0002\u0006",
    "\u00025\n\u0002\r\u0002\u000e\u00026\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0005\u0003=\n\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    "A\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003F\n\u0003\u0003",
    "\u0003\u0005\u0003I\n\u0003\u0003\u0004\u0003\u0004\u0007\u0004M\n\u0004",
    "\f\u0004\u000e\u0004P\u000b\u0004\u0003\u0004\u0006\u0004S\n\u0004\r",
    "\u0004\u000e\u0004T\u0003\u0005\u0006\u0005X\n\u0005\r\u0005\u000e\u0005",
    "Y\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006_\n\u0006\f\u0006\u000e",
    "\u0006b\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0007\u0006i\n\u0006\f\u0006\u000e\u0006l\u000b\u0006\u0003",
    "\u0006\u0003\u0006\u0005\u0006p\n\u0006\u0003\u0007\u0005\u0007s\n\u0007",
    "\u0003\u0007\u0006\u0007v\n\u0007\r\u0007\u000e\u0007w\u0003\u0007\u0007",
    "\u0007{\n\u0007\f\u0007\u000e\u0007~\u000b\u0007\u0003\b\u0003\b\u0005",
    "\b\u0082\n\b\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0006",
    "\u000b\u008a\n\u000b\r\u000b\u000e\u000b\u008b\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u0097\n\f",
    "\u0003\r\u0003\r\u0005\r\u009b\n\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0006\u000e\u00a0\n\u000e\r\u000e\u000e\u000e\u00a1\u0003\u000e\u0007",
    "\u000e\u00a5\n\u000e\f\u000e\u000e\u000e\u00a8\u000b\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0006\u000f\u00af\n",
    "\u000f\r\u000f\u000e\u000f\u00b0\u0003\u000f\u0007\u000f\u00b4\n\u000f",
    "\f\u000f\u000e\u000f\u00b7\u000b\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0006\u0010\u00be\n\u0010\r\u0010\u000e",
    "\u0010\u00bf\u0003\u0010\u0007\u0010\u00c3\n\u0010\f\u0010\u000e\u0010",
    "\u00c6\u000b\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0006\u0011\u00cd\n\u0011\r\u0011\u000e\u0011\u00ce\u0003\u0011",
    "\u0003\u0011\u0006\u0011\u00d3\n\u0011\r\u0011\u000e\u0011\u00d4\u0003",
    "\u0011\u0007\u0011\u00d8\n\u0011\f\u0011\u000e\u0011\u00db\u000b\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0006\u0012",
    "\u00e2\n\u0012\r\u0012\u000e\u0012\u00e3\u0003\u0012\u0007\u0012\u00e7",
    "\n\u0012\f\u0012\u000e\u0012\u00ea\u000b\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0006\u0013\u00f1\n\u0013\r\u0013",
    "\u000e\u0013\u00f2\u0003\u0013\u0007\u0013\u00f6\n\u0013\f\u0013\u000e",
    "\u0013\u00f9\u000b\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0006\u0014\u0100\n\u0014\r\u0014\u000e\u0014\u0101\u0003",
    "\u0014\u0003\u0014\u0006\u0014\u0106\n\u0014\r\u0014\u000e\u0014\u0107",
    "\u0003\u0014\u0007\u0014\u010b\n\u0014\f\u0014\u000e\u0014\u010e\u000b",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0006",
    "\u0015\u0115\n\u0015\r\u0015\u000e\u0015\u0116\u0003\u0015\u0007\u0015",
    "\u011a\n\u0015\f\u0015\u000e\u0015\u011d\u000b\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0006\u0015\u0124\n\u0015",
    "\r\u0015\u000e\u0015\u0125\u0003\u0015\u0007\u0015\u0129\n\u0015\f\u0015",
    "\u000e\u0015\u012c\u000b\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u0130",
    "\n\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0006\u0016\u0135\n\u0016",
    "\r\u0016\u000e\u0016\u0136\u0003\u0016\u0007\u0016\u013a\n\u0016\f\u0016",
    "\u000e\u0016\u013d\u000b\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003",
    "\u0017\u0005\u0017\u0143\n\u0017\u0003\u0018\u0003\u0018\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0002\u0002\u001a\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.0\u0002\u0007",
    "\u0004\u0002\u0003\u0003\u000b\r\u0003\u0002\u0010\u0015\u0004\u0002",
    "\u0003\u0003\f\f\u0006\u0002\u0003\u0003\u0005\u0005\u000b\u000b\r\r",
    "\u0003\u0002\u0004\u0005\u0002\u0163\u00024\u0003\u0002\u0002\u0002",
    "\u0004H\u0003\u0002\u0002\u0002\u0006R\u0003\u0002\u0002\u0002\bW\u0003",
    "\u0002\u0002\u0002\no\u0003\u0002\u0002\u0002\fr\u0003\u0002\u0002\u0002",
    "\u000e\u0081\u0003\u0002\u0002\u0002\u0010\u0083\u0003\u0002\u0002\u0002",
    "\u0012\u0086\u0003\u0002\u0002\u0002\u0014\u0089\u0003\u0002\u0002\u0002",
    "\u0016\u0096\u0003\u0002\u0002\u0002\u0018\u0098\u0003\u0002\u0002\u0002",
    "\u001a\u009c\u0003\u0002\u0002\u0002\u001c\u00ab\u0003\u0002\u0002\u0002",
    "\u001e\u00ba\u0003\u0002\u0002\u0002 \u00c9\u0003\u0002\u0002\u0002",
    "\"\u00de\u0003\u0002\u0002\u0002$\u00ed\u0003\u0002\u0002\u0002&\u00fc",
    "\u0003\u0002\u0002\u0002(\u012f\u0003\u0002\u0002\u0002*\u0131\u0003",
    "\u0002\u0002\u0002,\u0142\u0003\u0002\u0002\u0002.\u0144\u0003\u0002",
    "\u0002\u00020\u0146\u0003\u0002\u0002\u000225\u0005\u0004\u0003\u0002",
    "35\u0007\u0004\u0002\u000242\u0003\u0002\u0002\u000243\u0003\u0002\u0002",
    "\u000256\u0003\u0002\u0002\u000264\u0003\u0002\u0002\u000267\u0003\u0002",
    "\u0002\u000278\u0003\u0002\u0002\u000289\u0007\u0002\u0002\u00039\u0003",
    "\u0003\u0002\u0002\u0002:<\u0005\b\u0005\u0002;=\u0005\u0006\u0004\u0002",
    "<;\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002=I\u0003\u0002\u0002",
    "\u0002>@\u0005\b\u0005\u0002?A\u0005\u0006\u0004\u0002@?\u0003\u0002",
    "\u0002\u0002@A\u0003\u0002\u0002\u0002AB\u0003\u0002\u0002\u0002BC\u0005",
    "\u0014\u000b\u0002CI\u0003\u0002\u0002\u0002DF\u0005\u0006\u0004\u0002",
    "ED\u0003\u0002\u0002\u0002EF\u0003\u0002\u0002\u0002FG\u0003\u0002\u0002",
    "\u0002GI\u0005\u0014\u000b\u0002H:\u0003\u0002\u0002\u0002H>\u0003\u0002",
    "\u0002\u0002HE\u0003\u0002\u0002\u0002I\u0005\u0003\u0002\u0002\u0002",
    "JN\u0007\b\u0002\u0002KM\u0007\u0005\u0002\u0002LK\u0003\u0002\u0002",
    "\u0002MP\u0003\u0002\u0002\u0002NL\u0003\u0002\u0002\u0002NO\u0003\u0002",
    "\u0002\u0002OQ\u0003\u0002\u0002\u0002PN\u0003\u0002\u0002\u0002QS\u0007",
    "\u0004\u0002\u0002RJ\u0003\u0002\u0002\u0002ST\u0003\u0002\u0002\u0002",
    "TR\u0003\u0002\u0002\u0002TU\u0003\u0002\u0002\u0002U\u0007\u0003\u0002",
    "\u0002\u0002VX\u0005\n\u0006\u0002WV\u0003\u0002\u0002\u0002XY\u0003",
    "\u0002\u0002\u0002YW\u0003\u0002\u0002\u0002YZ\u0003\u0002\u0002\u0002",
    "Z\t\u0003\u0002\u0002\u0002[\\\u0007\b\u0002\u0002\\`\u0005\f\u0007",
    "\u0002]_\u0005\u000e\b\u0002^]\u0003\u0002\u0002\u0002_b\u0003\u0002",
    "\u0002\u0002`^\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002\u0002ac\u0003",
    "\u0002\u0002\u0002b`\u0003\u0002\u0002\u0002cd\u0007\u0004\u0002\u0002",
    "dp\u0003\u0002\u0002\u0002ef\u0007\b\u0002\u0002fj\u0005\u0010\t\u0002",
    "gi\u0005\u000e\b\u0002hg\u0003\u0002\u0002\u0002il\u0003\u0002\u0002",
    "\u0002jh\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002\u0002km\u0003\u0002",
    "\u0002\u0002lj\u0003\u0002\u0002\u0002mn\u0007\u0004\u0002\u0002np\u0003",
    "\u0002\u0002\u0002o[\u0003\u0002\u0002\u0002oe\u0003\u0002\u0002\u0002",
    "p\u000b\u0003\u0002\u0002\u0002qs\u0007\u0005\u0002\u0002rq\u0003\u0002",
    "\u0002\u0002rs\u0003\u0002\u0002\u0002su\u0003\u0002\u0002\u0002tv\u0005",
    "\u0012\n\u0002ut\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002w",
    "u\u0003\u0002\u0002\u0002wx\u0003\u0002\u0002\u0002x|\u0003\u0002\u0002",
    "\u0002y{\u0005.\u0018\u0002zy\u0003\u0002\u0002\u0002{~\u0003\u0002",
    "\u0002\u0002|z\u0003\u0002\u0002\u0002|}\u0003\u0002\u0002\u0002}\r",
    "\u0003\u0002\u0002\u0002~|\u0003\u0002\u0002\u0002\u007f\u0082\u0005",
    "\u0010\t\u0002\u0080\u0082\u0005.\u0018\u0002\u0081\u007f\u0003\u0002",
    "\u0002\u0002\u0081\u0080\u0003\u0002\u0002\u0002\u0082\u000f\u0003\u0002",
    "\u0002\u0002\u0083\u0084\u0007\u001d\u0002\u0002\u0084\u0085\u0007\u001e",
    "\u0002\u0002\u0085\u0011\u0003\u0002\u0002\u0002\u0086\u0087\t\u0002",
    "\u0002\u0002\u0087\u0013\u0003\u0002\u0002\u0002\u0088\u008a\u0005\u0016",
    "\f\u0002\u0089\u0088\u0003\u0002\u0002\u0002\u008a\u008b\u0003\u0002",
    "\u0002\u0002\u008b\u0089\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002",
    "\u0002\u0002\u008c\u0015\u0003\u0002\u0002\u0002\u008d\u0097\u0005\u001a",
    "\u000e\u0002\u008e\u0097\u0005\u001c\u000f\u0002\u008f\u0097\u0005\u001e",
    "\u0010\u0002\u0090\u0097\u0005 \u0011\u0002\u0091\u0097\u0005\"\u0012",
    "\u0002\u0092\u0097\u0005$\u0013\u0002\u0093\u0097\u0005&\u0014\u0002",
    "\u0094\u0097\u0005(\u0015\u0002\u0095\u0097\u0005*\u0016\u0002\u0096",
    "\u008d\u0003\u0002\u0002\u0002\u0096\u008e\u0003\u0002\u0002\u0002\u0096",
    "\u008f\u0003\u0002\u0002\u0002\u0096\u0090\u0003\u0002\u0002\u0002\u0096",
    "\u0091\u0003\u0002\u0002\u0002\u0096\u0092\u0003\u0002\u0002\u0002\u0096",
    "\u0093\u0003\u0002\u0002\u0002\u0096\u0094\u0003\u0002\u0002\u0002\u0096",
    "\u0095\u0003\u0002\u0002\u0002\u0097\u0017\u0003\u0002\u0002\u0002\u0098",
    "\u009a\u0007\b\u0002\u0002\u0099\u009b\u0007\u0005\u0002\u0002\u009a",
    "\u0099\u0003\u0002\u0002\u0002\u009a\u009b\u0003\u0002\u0002\u0002\u009b",
    "\u0019\u0003\u0002\u0002\u0002\u009c\u009d\u0005\u0018\r\u0002\u009d",
    "\u009f\u0007\u000e\u0002\u0002\u009e\u00a0\u0007\u0005\u0002\u0002\u009f",
    "\u009e\u0003\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002\u0002\u0002\u00a1",
    "\u009f\u0003\u0002\u0002\u0002\u00a1\u00a2\u0003\u0002\u0002\u0002\u00a2",
    "\u00a6\u0003\u0002\u0002\u0002\u00a3\u00a5\u0005,\u0017\u0002\u00a4",
    "\u00a3\u0003\u0002\u0002\u0002\u00a5\u00a8\u0003\u0002\u0002\u0002\u00a6",
    "\u00a4\u0003\u0002\u0002\u0002\u00a6\u00a7\u0003\u0002\u0002\u0002\u00a7",
    "\u00a9\u0003\u0002\u0002\u0002\u00a8\u00a6\u0003\u0002\u0002\u0002\u00a9",
    "\u00aa\u0007\u0004\u0002\u0002\u00aa\u001b\u0003\u0002\u0002\u0002\u00ab",
    "\u00ac\u0005\u0018\r\u0002\u00ac\u00ae\u0007\u000f\u0002\u0002\u00ad",
    "\u00af\u0007\u0005\u0002\u0002\u00ae\u00ad\u0003\u0002\u0002\u0002\u00af",
    "\u00b0\u0003\u0002\u0002\u0002\u00b0\u00ae\u0003\u0002\u0002\u0002\u00b0",
    "\u00b1\u0003\u0002\u0002\u0002\u00b1\u00b5\u0003\u0002\u0002\u0002\u00b2",
    "\u00b4\u0005,\u0017\u0002\u00b3\u00b2\u0003\u0002\u0002\u0002\u00b4",
    "\u00b7\u0003\u0002\u0002\u0002\u00b5\u00b3\u0003\u0002\u0002\u0002\u00b5",
    "\u00b6\u0003\u0002\u0002\u0002\u00b6\u00b8\u0003\u0002\u0002\u0002\u00b7",
    "\u00b5\u0003\u0002\u0002\u0002\u00b8\u00b9\u0007\u0004\u0002\u0002\u00b9",
    "\u001d\u0003\u0002\u0002\u0002\u00ba\u00bb\u0005\u0018\r\u0002\u00bb",
    "\u00bd\t\u0003\u0002\u0002\u00bc\u00be\u0007\u0005\u0002\u0002\u00bd",
    "\u00bc\u0003\u0002\u0002\u0002\u00be\u00bf\u0003\u0002\u0002\u0002\u00bf",
    "\u00bd\u0003\u0002\u0002\u0002\u00bf\u00c0\u0003\u0002\u0002\u0002\u00c0",
    "\u00c4\u0003\u0002\u0002\u0002\u00c1\u00c3\u0005,\u0017\u0002\u00c2",
    "\u00c1\u0003\u0002\u0002\u0002\u00c3\u00c6\u0003\u0002\u0002\u0002\u00c4",
    "\u00c2\u0003\u0002\u0002\u0002\u00c4\u00c5\u0003\u0002\u0002\u0002\u00c5",
    "\u00c7\u0003\u0002\u0002\u0002\u00c6\u00c4\u0003\u0002\u0002\u0002\u00c7",
    "\u00c8\u0007\u0004\u0002\u0002\u00c8\u001f\u0003\u0002\u0002\u0002\u00c9",
    "\u00ca\u0005\u0018\r\u0002\u00ca\u00cc\u0007\u0016\u0002\u0002\u00cb",
    "\u00cd\u0007\u0005\u0002\u0002\u00cc\u00cb\u0003\u0002\u0002\u0002\u00cd",
    "\u00ce\u0003\u0002\u0002\u0002\u00ce\u00cc\u0003\u0002\u0002\u0002\u00ce",
    "\u00cf\u0003\u0002\u0002\u0002\u00cf\u00d0\u0003\u0002\u0002\u0002\u00d0",
    "\u00d2\u0007\u0003\u0002\u0002\u00d1\u00d3\u0007\u0005\u0002\u0002\u00d2",
    "\u00d1\u0003\u0002\u0002\u0002\u00d3\u00d4\u0003\u0002\u0002\u0002\u00d4",
    "\u00d2\u0003\u0002\u0002\u0002\u00d4\u00d5\u0003\u0002\u0002\u0002\u00d5",
    "\u00d9\u0003\u0002\u0002\u0002\u00d6\u00d8\u0005,\u0017\u0002\u00d7",
    "\u00d6\u0003\u0002\u0002\u0002\u00d8\u00db\u0003\u0002\u0002\u0002\u00d9",
    "\u00d7\u0003\u0002\u0002\u0002\u00d9\u00da\u0003\u0002\u0002\u0002\u00da",
    "\u00dc\u0003\u0002\u0002\u0002\u00db\u00d9\u0003\u0002\u0002\u0002\u00dc",
    "\u00dd\u0007\u0004\u0002\u0002\u00dd!\u0003\u0002\u0002\u0002\u00de",
    "\u00df\u0005\u0018\r\u0002\u00df\u00e1\u0007\u0017\u0002\u0002\u00e0",
    "\u00e2\u0007\u0005\u0002\u0002\u00e1\u00e0\u0003\u0002\u0002\u0002\u00e2",
    "\u00e3\u0003\u0002\u0002\u0002\u00e3\u00e1\u0003\u0002\u0002\u0002\u00e3",
    "\u00e4\u0003\u0002\u0002\u0002\u00e4\u00e8\u0003\u0002\u0002\u0002\u00e5",
    "\u00e7\u0005,\u0017\u0002\u00e6\u00e5\u0003\u0002\u0002\u0002\u00e7",
    "\u00ea\u0003\u0002\u0002\u0002\u00e8\u00e6\u0003\u0002\u0002\u0002\u00e8",
    "\u00e9\u0003\u0002\u0002\u0002\u00e9\u00eb\u0003\u0002\u0002\u0002\u00ea",
    "\u00e8\u0003\u0002\u0002\u0002\u00eb\u00ec\u0007\u0004\u0002\u0002\u00ec",
    "#\u0003\u0002\u0002\u0002\u00ed\u00ee\u0005\u0018\r\u0002\u00ee\u00f0",
    "\u0007\u0018\u0002\u0002\u00ef\u00f1\u0007\u0005\u0002\u0002\u00f0\u00ef",
    "\u0003\u0002\u0002\u0002\u00f1\u00f2\u0003\u0002\u0002\u0002\u00f2\u00f0",
    "\u0003\u0002\u0002\u0002\u00f2\u00f3\u0003\u0002\u0002\u0002\u00f3\u00f7",
    "\u0003\u0002\u0002\u0002\u00f4\u00f6\u0005,\u0017\u0002\u00f5\u00f4",
    "\u0003\u0002\u0002\u0002\u00f6\u00f9\u0003\u0002\u0002\u0002\u00f7\u00f5",
    "\u0003\u0002\u0002\u0002\u00f7\u00f8\u0003\u0002\u0002\u0002\u00f8\u00fa",
    "\u0003\u0002\u0002\u0002\u00f9\u00f7\u0003\u0002\u0002\u0002\u00fa\u00fb",
    "\u0007\u0004\u0002\u0002\u00fb%\u0003\u0002\u0002\u0002\u00fc\u00fd",
    "\u0005\u0018\r\u0002\u00fd\u00ff\u0007\u0019\u0002\u0002\u00fe\u0100",
    "\u0007\u0005\u0002\u0002\u00ff\u00fe\u0003\u0002\u0002\u0002\u0100\u0101",
    "\u0003\u0002\u0002\u0002\u0101\u00ff\u0003\u0002\u0002\u0002\u0101\u0102",
    "\u0003\u0002\u0002\u0002\u0102\u0103\u0003\u0002\u0002\u0002\u0103\u0105",
    "\t\u0004\u0002\u0002\u0104\u0106\u0007\u0005\u0002\u0002\u0105\u0104",
    "\u0003\u0002\u0002\u0002\u0106\u0107\u0003\u0002\u0002\u0002\u0107\u0105",
    "\u0003\u0002\u0002\u0002\u0107\u0108\u0003\u0002\u0002\u0002\u0108\u010c",
    "\u0003\u0002\u0002\u0002\u0109\u010b\u0005,\u0017\u0002\u010a\u0109",
    "\u0003\u0002\u0002\u0002\u010b\u010e\u0003\u0002\u0002\u0002\u010c\u010a",
    "\u0003\u0002\u0002\u0002\u010c\u010d\u0003\u0002\u0002\u0002\u010d\u010f",
    "\u0003\u0002\u0002\u0002\u010e\u010c\u0003\u0002\u0002\u0002\u010f\u0110",
    "\u0007\u0004\u0002\u0002\u0110\'\u0003\u0002\u0002\u0002\u0111\u0112",
    "\u0005\u0018\r\u0002\u0112\u0114\u0007\u001a\u0002\u0002\u0113\u0115",
    "\u0007\u0005\u0002\u0002\u0114\u0113\u0003\u0002\u0002\u0002\u0115\u0116",
    "\u0003\u0002\u0002\u0002\u0116\u0114\u0003\u0002\u0002\u0002\u0116\u0117",
    "\u0003\u0002\u0002\u0002\u0117\u011b\u0003\u0002\u0002\u0002\u0118\u011a",
    "\u0005,\u0017\u0002\u0119\u0118\u0003\u0002\u0002\u0002\u011a\u011d",
    "\u0003\u0002\u0002\u0002\u011b\u0119\u0003\u0002\u0002\u0002\u011b\u011c",
    "\u0003\u0002\u0002\u0002\u011c\u011e\u0003\u0002\u0002\u0002\u011d\u011b",
    "\u0003\u0002\u0002\u0002\u011e\u011f\u0007\u0004\u0002\u0002\u011f\u0130",
    "\u0003\u0002\u0002\u0002\u0120\u0121\u0005\u0018\r\u0002\u0121\u0123",
    "\u0007\u001b\u0002\u0002\u0122\u0124\u0007\u0005\u0002\u0002\u0123\u0122",
    "\u0003\u0002\u0002\u0002\u0124\u0125\u0003\u0002\u0002\u0002\u0125\u0123",
    "\u0003\u0002\u0002\u0002\u0125\u0126\u0003\u0002\u0002\u0002\u0126\u012a",
    "\u0003\u0002\u0002\u0002\u0127\u0129\u0005,\u0017\u0002\u0128\u0127",
    "\u0003\u0002\u0002\u0002\u0129\u012c\u0003\u0002\u0002\u0002\u012a\u0128",
    "\u0003\u0002\u0002\u0002\u012a\u012b\u0003\u0002\u0002\u0002\u012b\u012d",
    "\u0003\u0002\u0002\u0002\u012c\u012a\u0003\u0002\u0002\u0002\u012d\u012e",
    "\u0007\u0004\u0002\u0002\u012e\u0130\u0003\u0002\u0002\u0002\u012f\u0111",
    "\u0003\u0002\u0002\u0002\u012f\u0120\u0003\u0002\u0002\u0002\u0130)",
    "\u0003\u0002\u0002\u0002\u0131\u0132\u0005\u0018\r\u0002\u0132\u0134",
    "\u0007\u001c\u0002\u0002\u0133\u0135\u0007\u0005\u0002\u0002\u0134\u0133",
    "\u0003\u0002\u0002\u0002\u0135\u0136\u0003\u0002\u0002\u0002\u0136\u0134",
    "\u0003\u0002\u0002\u0002\u0136\u0137\u0003\u0002\u0002\u0002\u0137\u013b",
    "\u0003\u0002\u0002\u0002\u0138\u013a\u0005,\u0017\u0002\u0139\u0138",
    "\u0003\u0002\u0002\u0002\u013a\u013d\u0003\u0002\u0002\u0002\u013b\u0139",
    "\u0003\u0002\u0002\u0002\u013b\u013c\u0003\u0002\u0002\u0002\u013c\u013e",
    "\u0003\u0002\u0002\u0002\u013d\u013b\u0003\u0002\u0002\u0002\u013e\u013f",
    "\u0007\u0004\u0002\u0002\u013f+\u0003\u0002\u0002\u0002\u0140\u0143",
    "\u0005\u0010\t\u0002\u0141\u0143\u0005.\u0018\u0002\u0142\u0140\u0003",
    "\u0002\u0002\u0002\u0142\u0141\u0003\u0002\u0002\u0002\u0143-\u0003",
    "\u0002\u0002\u0002\u0144\u0145\t\u0005\u0002\u0002\u0145/\u0003\u0002",
    "\u0002\u0002\u0146\u0147\t\u0006\u0002\u0002\u01471\u0003\u0002\u0002",
    "\u0002-46<@EHNTY`jorw|\u0081\u008b\u0096\u009a\u00a1\u00a6\u00b0\u00b5",
    "\u00bf\u00c4\u00ce\u00d4\u00d9\u00e3\u00e8\u00f2\u00f7\u0101\u0107\u010c",
    "\u0116\u011b\u0125\u012a\u012f\u0136\u013b\u0142"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, "'/**'", "'*/'", "'///'", null, 
                     null, "'*'", null, null, "'@title'", "'@author'", "'@note'", 
                     "'@info'", "'@tip'", null, "'@danger'", "'@details'", 
                     "'@param'", null, null, null, "'@key'" ];

var symbolicNames = [ null, "IDENT", "NL", "SPACE", "CWSPEC_BLOCK_START", 
                      "CWSPEC_BLOCK_END", "CWSPEC_LINE_START", "CONTINUE_LINE", 
                      "InlineMacro", "STAR", "INTEGER", "TEXT", "T_TITLE", 
                      "T_AUTHOR", "T_NOTE", "T_INFO", "T_TIP", "T_WARNING", 
                      "T_DANGER", "T_DETAILS", "T_PARAM", "T_RETURNS", "T_RESPONSE", 
                      "T_MEMBER", "T_KEY", "T_KEY_named", "T_VALUE", "AT", 
                      "COLON" ];

var ruleNames =  [ "cwspec", "cwspecLines", "wsLines", "descriptionLines", 
                   "descriptionLine", "descriptionStart", "descriptionElement", 
                   "inlineMacro", "nonTag", "tagSectionLines", "tagSectionLine", 
                   "ts_start", "titleLine", "authorLine", "admonitionLine", 
                   "paramLine", "returnsLine", "responseLine", "memberLine", 
                   "keyLine", "valueLine", "lineElement", "textElement", 
                   "skipWs" ];

function CWSpecParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

CWSpecParser.prototype = Object.create(antlr4.Parser.prototype);
CWSpecParser.prototype.constructor = CWSpecParser;

Object.defineProperty(CWSpecParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

CWSpecParser.EOF = antlr4.Token.EOF;
CWSpecParser.IDENT = 1;
CWSpecParser.NL = 2;
CWSpecParser.SPACE = 3;
CWSpecParser.CWSPEC_BLOCK_START = 4;
CWSpecParser.CWSPEC_BLOCK_END = 5;
CWSpecParser.CWSPEC_LINE_START = 6;
CWSpecParser.CONTINUE_LINE = 7;
CWSpecParser.InlineMacro = 8;
CWSpecParser.STAR = 9;
CWSpecParser.INTEGER = 10;
CWSpecParser.TEXT = 11;
CWSpecParser.T_TITLE = 12;
CWSpecParser.T_AUTHOR = 13;
CWSpecParser.T_NOTE = 14;
CWSpecParser.T_INFO = 15;
CWSpecParser.T_TIP = 16;
CWSpecParser.T_WARNING = 17;
CWSpecParser.T_DANGER = 18;
CWSpecParser.T_DETAILS = 19;
CWSpecParser.T_PARAM = 20;
CWSpecParser.T_RETURNS = 21;
CWSpecParser.T_RESPONSE = 22;
CWSpecParser.T_MEMBER = 23;
CWSpecParser.T_KEY = 24;
CWSpecParser.T_KEY_named = 25;
CWSpecParser.T_VALUE = 26;
CWSpecParser.AT = 27;
CWSpecParser.COLON = 28;

CWSpecParser.RULE_cwspec = 0;
CWSpecParser.RULE_cwspecLines = 1;
CWSpecParser.RULE_wsLines = 2;
CWSpecParser.RULE_descriptionLines = 3;
CWSpecParser.RULE_descriptionLine = 4;
CWSpecParser.RULE_descriptionStart = 5;
CWSpecParser.RULE_descriptionElement = 6;
CWSpecParser.RULE_inlineMacro = 7;
CWSpecParser.RULE_nonTag = 8;
CWSpecParser.RULE_tagSectionLines = 9;
CWSpecParser.RULE_tagSectionLine = 10;
CWSpecParser.RULE_ts_start = 11;
CWSpecParser.RULE_titleLine = 12;
CWSpecParser.RULE_authorLine = 13;
CWSpecParser.RULE_admonitionLine = 14;
CWSpecParser.RULE_paramLine = 15;
CWSpecParser.RULE_returnsLine = 16;
CWSpecParser.RULE_responseLine = 17;
CWSpecParser.RULE_memberLine = 18;
CWSpecParser.RULE_keyLine = 19;
CWSpecParser.RULE_valueLine = 20;
CWSpecParser.RULE_lineElement = 21;
CWSpecParser.RULE_textElement = 22;
CWSpecParser.RULE_skipWs = 23;


function CwspecContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CWSpecParser.RULE_cwspec;
    return this;
}

CwspecContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CwspecContext.prototype.constructor = CwspecContext;

CwspecContext.prototype.EOF = function() {
    return this.getToken(CWSpecParser.EOF, 0);
};

CwspecContext.prototype.cwspecLines = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CwspecLinesContext);
    } else {
        return this.getTypedRuleContext(CwspecLinesContext,i);
    }
};

CwspecContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CWSpecParser.NL);
    } else {
        return this.getToken(CWSpecParser.NL, i);
    }
};





CWSpecParser.CwspecContext = CwspecContext;

CWSpecParser.prototype.cwspec = function() {

    var localctx = new CwspecContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, CWSpecParser.RULE_cwspec);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 50;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case CWSpecParser.CWSPEC_LINE_START:
                this.state = 48;
                this.cwspecLines();
                break;
            case CWSpecParser.NL:
                this.state = 49;
                this.match(CWSpecParser.NL);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 52; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===CWSpecParser.NL || _la===CWSpecParser.CWSPEC_LINE_START);
        this.state = 54;
        this.match(CWSpecParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CwspecLinesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CWSpecParser.RULE_cwspecLines;
    return this;
}

CwspecLinesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CwspecLinesContext.prototype.constructor = CwspecLinesContext;

CwspecLinesContext.prototype.descriptionLines = function() {
    return this.getTypedRuleContext(DescriptionLinesContext,0);
};

CwspecLinesContext.prototype.wsLines = function() {
    return this.getTypedRuleContext(WsLinesContext,0);
};

CwspecLinesContext.prototype.tagSectionLines = function() {
    return this.getTypedRuleContext(TagSectionLinesContext,0);
};




CWSpecParser.CwspecLinesContext = CwspecLinesContext;

CWSpecParser.prototype.cwspecLines = function() {

    var localctx = new CwspecLinesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, CWSpecParser.RULE_cwspecLines);
    try {
        this.state = 70;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 56;
            this.descriptionLines();
            this.state = 58;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
            if(la_===1) {
                this.state = 57;
                this.wsLines();

            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 60;
            this.descriptionLines();
            this.state = 62;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
            if(la_===1) {
                this.state = 61;
                this.wsLines();

            }
            this.state = 64;
            this.tagSectionLines();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 67;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
            if(la_===1) {
                this.state = 66;
                this.wsLines();

            }
            this.state = 69;
            this.tagSectionLines();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function WsLinesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CWSpecParser.RULE_wsLines;
    return this;
}

WsLinesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WsLinesContext.prototype.constructor = WsLinesContext;

WsLinesContext.prototype.CWSPEC_LINE_START = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CWSpecParser.CWSPEC_LINE_START);
    } else {
        return this.getToken(CWSpecParser.CWSPEC_LINE_START, i);
    }
};


WsLinesContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CWSpecParser.NL);
    } else {
        return this.getToken(CWSpecParser.NL, i);
    }
};


WsLinesContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CWSpecParser.SPACE);
    } else {
        return this.getToken(CWSpecParser.SPACE, i);
    }
};





CWSpecParser.WsLinesContext = WsLinesContext;

CWSpecParser.prototype.wsLines = function() {

    var localctx = new WsLinesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, CWSpecParser.RULE_wsLines);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 80; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 72;
        		this.match(CWSpecParser.CWSPEC_LINE_START);
        		this.state = 76;
        		this._errHandler.sync(this);
        		_la = this._input.LA(1);
        		while(_la===CWSpecParser.SPACE) {
        		    this.state = 73;
        		    this.match(CWSpecParser.SPACE);
        		    this.state = 78;
        		    this._errHandler.sync(this);
        		    _la = this._input.LA(1);
        		}
        		this.state = 79;
        		this.match(CWSpecParser.NL);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 82; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,7, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DescriptionLinesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CWSpecParser.RULE_descriptionLines;
    return this;
}

DescriptionLinesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DescriptionLinesContext.prototype.constructor = DescriptionLinesContext;

DescriptionLinesContext.prototype.descriptionLine = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DescriptionLineContext);
    } else {
        return this.getTypedRuleContext(DescriptionLineContext,i);
    }
};




CWSpecParser.DescriptionLinesContext = DescriptionLinesContext;

CWSpecParser.prototype.descriptionLines = function() {

    var localctx = new DescriptionLinesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, CWSpecParser.RULE_descriptionLines);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 85; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 84;
        		this.descriptionLine();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 87; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,8, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DescriptionLineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CWSpecParser.RULE_descriptionLine;
    return this;
}

DescriptionLineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DescriptionLineContext.prototype.constructor = DescriptionLineContext;

DescriptionLineContext.prototype.CWSPEC_LINE_START = function() {
    return this.getToken(CWSpecParser.CWSPEC_LINE_START, 0);
};

DescriptionLineContext.prototype.descriptionStart = function() {
    return this.getTypedRuleContext(DescriptionStartContext,0);
};

DescriptionLineContext.prototype.NL = function() {
    return this.getToken(CWSpecParser.NL, 0);
};

DescriptionLineContext.prototype.descriptionElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DescriptionElementContext);
    } else {
        return this.getTypedRuleContext(DescriptionElementContext,i);
    }
};

DescriptionLineContext.prototype.inlineMacro = function() {
    return this.getTypedRuleContext(InlineMacroContext,0);
};




CWSpecParser.DescriptionLineContext = DescriptionLineContext;

CWSpecParser.prototype.descriptionLine = function() {

    var localctx = new DescriptionLineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, CWSpecParser.RULE_descriptionLine);
    var _la = 0; // Token type
    try {
        this.state = 109;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 89;
            this.match(CWSpecParser.CWSPEC_LINE_START);
            this.state = 90;
            this.descriptionStart();
            this.state = 94;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CWSpecParser.IDENT) | (1 << CWSpecParser.SPACE) | (1 << CWSpecParser.STAR) | (1 << CWSpecParser.TEXT) | (1 << CWSpecParser.AT))) !== 0)) {
                this.state = 91;
                this.descriptionElement();
                this.state = 96;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 97;
            this.match(CWSpecParser.NL);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 99;
            this.match(CWSpecParser.CWSPEC_LINE_START);
            this.state = 100;
            this.inlineMacro();
            this.state = 104;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CWSpecParser.IDENT) | (1 << CWSpecParser.SPACE) | (1 << CWSpecParser.STAR) | (1 << CWSpecParser.TEXT) | (1 << CWSpecParser.AT))) !== 0)) {
                this.state = 101;
                this.descriptionElement();
                this.state = 106;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 107;
            this.match(CWSpecParser.NL);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DescriptionStartContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CWSpecParser.RULE_descriptionStart;
    return this;
}

DescriptionStartContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DescriptionStartContext.prototype.constructor = DescriptionStartContext;

DescriptionStartContext.prototype.SPACE = function() {
    return this.getToken(CWSpecParser.SPACE, 0);
};

DescriptionStartContext.prototype.nonTag = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NonTagContext);
    } else {
        return this.getTypedRuleContext(NonTagContext,i);
    }
};

DescriptionStartContext.prototype.textElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TextElementContext);
    } else {
        return this.getTypedRuleContext(TextElementContext,i);
    }
};




CWSpecParser.DescriptionStartContext = DescriptionStartContext;

CWSpecParser.prototype.descriptionStart = function() {

    var localctx = new DescriptionStartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, CWSpecParser.RULE_descriptionStart);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 112;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===CWSpecParser.SPACE) {
            this.state = 111;
            this.match(CWSpecParser.SPACE);
        }

        this.state = 115; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 114;
        		this.nonTag();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 117; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,13, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 122;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 119;
                this.textElement(); 
            }
            this.state = 124;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DescriptionElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CWSpecParser.RULE_descriptionElement;
    return this;
}

DescriptionElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DescriptionElementContext.prototype.constructor = DescriptionElementContext;

DescriptionElementContext.prototype.inlineMacro = function() {
    return this.getTypedRuleContext(InlineMacroContext,0);
};

DescriptionElementContext.prototype.textElement = function() {
    return this.getTypedRuleContext(TextElementContext,0);
};




CWSpecParser.DescriptionElementContext = DescriptionElementContext;

CWSpecParser.prototype.descriptionElement = function() {

    var localctx = new DescriptionElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, CWSpecParser.RULE_descriptionElement);
    try {
        this.state = 127;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CWSpecParser.AT:
            this.enterOuterAlt(localctx, 1);
            this.state = 125;
            this.inlineMacro();
            break;
        case CWSpecParser.IDENT:
        case CWSpecParser.SPACE:
        case CWSpecParser.STAR:
        case CWSpecParser.TEXT:
            this.enterOuterAlt(localctx, 2);
            this.state = 126;
            this.textElement();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function InlineMacroContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CWSpecParser.RULE_inlineMacro;
    return this;
}

InlineMacroContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InlineMacroContext.prototype.constructor = InlineMacroContext;

InlineMacroContext.prototype.AT = function() {
    return this.getToken(CWSpecParser.AT, 0);
};

InlineMacroContext.prototype.COLON = function() {
    return this.getToken(CWSpecParser.COLON, 0);
};




CWSpecParser.InlineMacroContext = InlineMacroContext;

CWSpecParser.prototype.inlineMacro = function() {

    var localctx = new InlineMacroContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, CWSpecParser.RULE_inlineMacro);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
        this.match(CWSpecParser.AT);
        this.state = 130;
        this.match(CWSpecParser.COLON);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NonTagContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CWSpecParser.RULE_nonTag;
    return this;
}

NonTagContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NonTagContext.prototype.constructor = NonTagContext;

NonTagContext.prototype.TEXT = function() {
    return this.getToken(CWSpecParser.TEXT, 0);
};

NonTagContext.prototype.IDENT = function() {
    return this.getToken(CWSpecParser.IDENT, 0);
};

NonTagContext.prototype.INTEGER = function() {
    return this.getToken(CWSpecParser.INTEGER, 0);
};

NonTagContext.prototype.STAR = function() {
    return this.getToken(CWSpecParser.STAR, 0);
};




CWSpecParser.NonTagContext = NonTagContext;

CWSpecParser.prototype.nonTag = function() {

    var localctx = new NonTagContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, CWSpecParser.RULE_nonTag);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 132;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CWSpecParser.IDENT) | (1 << CWSpecParser.STAR) | (1 << CWSpecParser.INTEGER) | (1 << CWSpecParser.TEXT))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TagSectionLinesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CWSpecParser.RULE_tagSectionLines;
    return this;
}

TagSectionLinesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TagSectionLinesContext.prototype.constructor = TagSectionLinesContext;

TagSectionLinesContext.prototype.tagSectionLine = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TagSectionLineContext);
    } else {
        return this.getTypedRuleContext(TagSectionLineContext,i);
    }
};




CWSpecParser.TagSectionLinesContext = TagSectionLinesContext;

CWSpecParser.prototype.tagSectionLines = function() {

    var localctx = new TagSectionLinesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, CWSpecParser.RULE_tagSectionLines);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 135; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 134;
        		this.tagSectionLine();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 137; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,16, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TagSectionLineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CWSpecParser.RULE_tagSectionLine;
    return this;
}

TagSectionLineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TagSectionLineContext.prototype.constructor = TagSectionLineContext;

TagSectionLineContext.prototype.titleLine = function() {
    return this.getTypedRuleContext(TitleLineContext,0);
};

TagSectionLineContext.prototype.authorLine = function() {
    return this.getTypedRuleContext(AuthorLineContext,0);
};

TagSectionLineContext.prototype.admonitionLine = function() {
    return this.getTypedRuleContext(AdmonitionLineContext,0);
};

TagSectionLineContext.prototype.paramLine = function() {
    return this.getTypedRuleContext(ParamLineContext,0);
};

TagSectionLineContext.prototype.returnsLine = function() {
    return this.getTypedRuleContext(ReturnsLineContext,0);
};

TagSectionLineContext.prototype.responseLine = function() {
    return this.getTypedRuleContext(ResponseLineContext,0);
};

TagSectionLineContext.prototype.memberLine = function() {
    return this.getTypedRuleContext(MemberLineContext,0);
};

TagSectionLineContext.prototype.keyLine = function() {
    return this.getTypedRuleContext(KeyLineContext,0);
};

TagSectionLineContext.prototype.valueLine = function() {
    return this.getTypedRuleContext(ValueLineContext,0);
};




CWSpecParser.TagSectionLineContext = TagSectionLineContext;

CWSpecParser.prototype.tagSectionLine = function() {

    var localctx = new TagSectionLineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, CWSpecParser.RULE_tagSectionLine);
    try {
        this.state = 148;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 139;
            this.titleLine();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 140;
            this.authorLine();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 141;
            this.admonitionLine();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 142;
            this.paramLine();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 143;
            this.returnsLine();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 144;
            this.responseLine();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 145;
            this.memberLine();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 146;
            this.keyLine();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 147;
            this.valueLine();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Ts_startContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CWSpecParser.RULE_ts_start;
    return this;
}

Ts_startContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Ts_startContext.prototype.constructor = Ts_startContext;

Ts_startContext.prototype.CWSPEC_LINE_START = function() {
    return this.getToken(CWSpecParser.CWSPEC_LINE_START, 0);
};

Ts_startContext.prototype.SPACE = function() {
    return this.getToken(CWSpecParser.SPACE, 0);
};




CWSpecParser.Ts_startContext = Ts_startContext;

CWSpecParser.prototype.ts_start = function() {

    var localctx = new Ts_startContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, CWSpecParser.RULE_ts_start);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 150;
        this.match(CWSpecParser.CWSPEC_LINE_START);
        this.state = 152;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===CWSpecParser.SPACE) {
            this.state = 151;
            this.match(CWSpecParser.SPACE);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TitleLineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CWSpecParser.RULE_titleLine;
    this._lineElement = null; // LineElementContext
    this.elements = []; // of LineElementContexts
    return this;
}

TitleLineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TitleLineContext.prototype.constructor = TitleLineContext;

TitleLineContext.prototype.ts_start = function() {
    return this.getTypedRuleContext(Ts_startContext,0);
};

TitleLineContext.prototype.T_TITLE = function() {
    return this.getToken(CWSpecParser.T_TITLE, 0);
};

TitleLineContext.prototype.NL = function() {
    return this.getToken(CWSpecParser.NL, 0);
};

TitleLineContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CWSpecParser.SPACE);
    } else {
        return this.getToken(CWSpecParser.SPACE, i);
    }
};


TitleLineContext.prototype.lineElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LineElementContext);
    } else {
        return this.getTypedRuleContext(LineElementContext,i);
    }
};




CWSpecParser.TitleLineContext = TitleLineContext;

CWSpecParser.prototype.titleLine = function() {

    var localctx = new TitleLineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, CWSpecParser.RULE_titleLine);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 154;
        this.ts_start();
        this.state = 155;
        this.match(CWSpecParser.T_TITLE);
        this.state = 157; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 156;
        		this.match(CWSpecParser.SPACE);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 159; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,19, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 164;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CWSpecParser.IDENT) | (1 << CWSpecParser.SPACE) | (1 << CWSpecParser.STAR) | (1 << CWSpecParser.TEXT) | (1 << CWSpecParser.AT))) !== 0)) {
            this.state = 161;
            localctx._lineElement = this.lineElement();
            localctx.elements.push(localctx._lineElement);
            this.state = 166;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 167;
        this.match(CWSpecParser.NL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AuthorLineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CWSpecParser.RULE_authorLine;
    this._lineElement = null; // LineElementContext
    this.elements = []; // of LineElementContexts
    return this;
}

AuthorLineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AuthorLineContext.prototype.constructor = AuthorLineContext;

AuthorLineContext.prototype.ts_start = function() {
    return this.getTypedRuleContext(Ts_startContext,0);
};

AuthorLineContext.prototype.T_AUTHOR = function() {
    return this.getToken(CWSpecParser.T_AUTHOR, 0);
};

AuthorLineContext.prototype.NL = function() {
    return this.getToken(CWSpecParser.NL, 0);
};

AuthorLineContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CWSpecParser.SPACE);
    } else {
        return this.getToken(CWSpecParser.SPACE, i);
    }
};


AuthorLineContext.prototype.lineElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LineElementContext);
    } else {
        return this.getTypedRuleContext(LineElementContext,i);
    }
};




CWSpecParser.AuthorLineContext = AuthorLineContext;

CWSpecParser.prototype.authorLine = function() {

    var localctx = new AuthorLineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, CWSpecParser.RULE_authorLine);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 169;
        this.ts_start();
        this.state = 170;
        this.match(CWSpecParser.T_AUTHOR);
        this.state = 172; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 171;
        		this.match(CWSpecParser.SPACE);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 174; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,21, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 179;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CWSpecParser.IDENT) | (1 << CWSpecParser.SPACE) | (1 << CWSpecParser.STAR) | (1 << CWSpecParser.TEXT) | (1 << CWSpecParser.AT))) !== 0)) {
            this.state = 176;
            localctx._lineElement = this.lineElement();
            localctx.elements.push(localctx._lineElement);
            this.state = 181;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 182;
        this.match(CWSpecParser.NL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AdmonitionLineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CWSpecParser.RULE_admonitionLine;
    this.admType = null; // Token
    this._lineElement = null; // LineElementContext
    this.elements = []; // of LineElementContexts
    return this;
}

AdmonitionLineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AdmonitionLineContext.prototype.constructor = AdmonitionLineContext;

AdmonitionLineContext.prototype.ts_start = function() {
    return this.getTypedRuleContext(Ts_startContext,0);
};

AdmonitionLineContext.prototype.NL = function() {
    return this.getToken(CWSpecParser.NL, 0);
};

AdmonitionLineContext.prototype.T_NOTE = function() {
    return this.getToken(CWSpecParser.T_NOTE, 0);
};

AdmonitionLineContext.prototype.T_INFO = function() {
    return this.getToken(CWSpecParser.T_INFO, 0);
};

AdmonitionLineContext.prototype.T_TIP = function() {
    return this.getToken(CWSpecParser.T_TIP, 0);
};

AdmonitionLineContext.prototype.T_WARNING = function() {
    return this.getToken(CWSpecParser.T_WARNING, 0);
};

AdmonitionLineContext.prototype.T_DANGER = function() {
    return this.getToken(CWSpecParser.T_DANGER, 0);
};

AdmonitionLineContext.prototype.T_DETAILS = function() {
    return this.getToken(CWSpecParser.T_DETAILS, 0);
};

AdmonitionLineContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CWSpecParser.SPACE);
    } else {
        return this.getToken(CWSpecParser.SPACE, i);
    }
};


AdmonitionLineContext.prototype.lineElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LineElementContext);
    } else {
        return this.getTypedRuleContext(LineElementContext,i);
    }
};




CWSpecParser.AdmonitionLineContext = AdmonitionLineContext;

CWSpecParser.prototype.admonitionLine = function() {

    var localctx = new AdmonitionLineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, CWSpecParser.RULE_admonitionLine);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 184;
        this.ts_start();

        this.state = 185;
        localctx.admType = this._input.LT(1);
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CWSpecParser.T_NOTE) | (1 << CWSpecParser.T_INFO) | (1 << CWSpecParser.T_TIP) | (1 << CWSpecParser.T_WARNING) | (1 << CWSpecParser.T_DANGER) | (1 << CWSpecParser.T_DETAILS))) !== 0))) {
            localctx.admType = this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 187; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 186;
        		this.match(CWSpecParser.SPACE);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 189; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,23, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 194;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CWSpecParser.IDENT) | (1 << CWSpecParser.SPACE) | (1 << CWSpecParser.STAR) | (1 << CWSpecParser.TEXT) | (1 << CWSpecParser.AT))) !== 0)) {
            this.state = 191;
            localctx._lineElement = this.lineElement();
            localctx.elements.push(localctx._lineElement);
            this.state = 196;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 197;
        this.match(CWSpecParser.NL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ParamLineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CWSpecParser.RULE_paramLine;
    this.paramName = null; // Token
    this._lineElement = null; // LineElementContext
    this.elements = []; // of LineElementContexts
    return this;
}

ParamLineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParamLineContext.prototype.constructor = ParamLineContext;

ParamLineContext.prototype.ts_start = function() {
    return this.getTypedRuleContext(Ts_startContext,0);
};

ParamLineContext.prototype.T_PARAM = function() {
    return this.getToken(CWSpecParser.T_PARAM, 0);
};

ParamLineContext.prototype.NL = function() {
    return this.getToken(CWSpecParser.NL, 0);
};

ParamLineContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CWSpecParser.SPACE);
    } else {
        return this.getToken(CWSpecParser.SPACE, i);
    }
};


ParamLineContext.prototype.IDENT = function() {
    return this.getToken(CWSpecParser.IDENT, 0);
};

ParamLineContext.prototype.lineElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LineElementContext);
    } else {
        return this.getTypedRuleContext(LineElementContext,i);
    }
};




CWSpecParser.ParamLineContext = ParamLineContext;

CWSpecParser.prototype.paramLine = function() {

    var localctx = new ParamLineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, CWSpecParser.RULE_paramLine);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 199;
        this.ts_start();
        this.state = 200;
        this.match(CWSpecParser.T_PARAM);
        this.state = 202; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 201;
            this.match(CWSpecParser.SPACE);
            this.state = 204; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===CWSpecParser.SPACE);

        this.state = 206;
        localctx.paramName = this.match(CWSpecParser.IDENT);
        this.state = 208; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 207;
        		this.match(CWSpecParser.SPACE);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 210; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,26, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 215;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CWSpecParser.IDENT) | (1 << CWSpecParser.SPACE) | (1 << CWSpecParser.STAR) | (1 << CWSpecParser.TEXT) | (1 << CWSpecParser.AT))) !== 0)) {
            this.state = 212;
            localctx._lineElement = this.lineElement();
            localctx.elements.push(localctx._lineElement);
            this.state = 217;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 218;
        this.match(CWSpecParser.NL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ReturnsLineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CWSpecParser.RULE_returnsLine;
    this._lineElement = null; // LineElementContext
    this.elements = []; // of LineElementContexts
    return this;
}

ReturnsLineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnsLineContext.prototype.constructor = ReturnsLineContext;

ReturnsLineContext.prototype.ts_start = function() {
    return this.getTypedRuleContext(Ts_startContext,0);
};

ReturnsLineContext.prototype.T_RETURNS = function() {
    return this.getToken(CWSpecParser.T_RETURNS, 0);
};

ReturnsLineContext.prototype.NL = function() {
    return this.getToken(CWSpecParser.NL, 0);
};

ReturnsLineContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CWSpecParser.SPACE);
    } else {
        return this.getToken(CWSpecParser.SPACE, i);
    }
};


ReturnsLineContext.prototype.lineElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LineElementContext);
    } else {
        return this.getTypedRuleContext(LineElementContext,i);
    }
};




CWSpecParser.ReturnsLineContext = ReturnsLineContext;

CWSpecParser.prototype.returnsLine = function() {

    var localctx = new ReturnsLineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, CWSpecParser.RULE_returnsLine);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 220;
        this.ts_start();
        this.state = 221;
        this.match(CWSpecParser.T_RETURNS);
        this.state = 223; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 222;
        		this.match(CWSpecParser.SPACE);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 225; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,28, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 230;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CWSpecParser.IDENT) | (1 << CWSpecParser.SPACE) | (1 << CWSpecParser.STAR) | (1 << CWSpecParser.TEXT) | (1 << CWSpecParser.AT))) !== 0)) {
            this.state = 227;
            localctx._lineElement = this.lineElement();
            localctx.elements.push(localctx._lineElement);
            this.state = 232;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 233;
        this.match(CWSpecParser.NL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ResponseLineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CWSpecParser.RULE_responseLine;
    this._lineElement = null; // LineElementContext
    this.elements = []; // of LineElementContexts
    return this;
}

ResponseLineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ResponseLineContext.prototype.constructor = ResponseLineContext;

ResponseLineContext.prototype.ts_start = function() {
    return this.getTypedRuleContext(Ts_startContext,0);
};

ResponseLineContext.prototype.T_RESPONSE = function() {
    return this.getToken(CWSpecParser.T_RESPONSE, 0);
};

ResponseLineContext.prototype.NL = function() {
    return this.getToken(CWSpecParser.NL, 0);
};

ResponseLineContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CWSpecParser.SPACE);
    } else {
        return this.getToken(CWSpecParser.SPACE, i);
    }
};


ResponseLineContext.prototype.lineElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LineElementContext);
    } else {
        return this.getTypedRuleContext(LineElementContext,i);
    }
};




CWSpecParser.ResponseLineContext = ResponseLineContext;

CWSpecParser.prototype.responseLine = function() {

    var localctx = new ResponseLineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, CWSpecParser.RULE_responseLine);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 235;
        this.ts_start();
        this.state = 236;
        this.match(CWSpecParser.T_RESPONSE);
        this.state = 238; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 237;
        		this.match(CWSpecParser.SPACE);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 240; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,30, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 245;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CWSpecParser.IDENT) | (1 << CWSpecParser.SPACE) | (1 << CWSpecParser.STAR) | (1 << CWSpecParser.TEXT) | (1 << CWSpecParser.AT))) !== 0)) {
            this.state = 242;
            localctx._lineElement = this.lineElement();
            localctx.elements.push(localctx._lineElement);
            this.state = 247;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 248;
        this.match(CWSpecParser.NL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MemberLineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CWSpecParser.RULE_memberLine;
    this.memberName = null; // Token
    this._lineElement = null; // LineElementContext
    this.elements = []; // of LineElementContexts
    return this;
}

MemberLineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MemberLineContext.prototype.constructor = MemberLineContext;

MemberLineContext.prototype.ts_start = function() {
    return this.getTypedRuleContext(Ts_startContext,0);
};

MemberLineContext.prototype.T_MEMBER = function() {
    return this.getToken(CWSpecParser.T_MEMBER, 0);
};

MemberLineContext.prototype.NL = function() {
    return this.getToken(CWSpecParser.NL, 0);
};

MemberLineContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CWSpecParser.SPACE);
    } else {
        return this.getToken(CWSpecParser.SPACE, i);
    }
};


MemberLineContext.prototype.IDENT = function() {
    return this.getToken(CWSpecParser.IDENT, 0);
};

MemberLineContext.prototype.INTEGER = function() {
    return this.getToken(CWSpecParser.INTEGER, 0);
};

MemberLineContext.prototype.lineElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LineElementContext);
    } else {
        return this.getTypedRuleContext(LineElementContext,i);
    }
};




CWSpecParser.MemberLineContext = MemberLineContext;

CWSpecParser.prototype.memberLine = function() {

    var localctx = new MemberLineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, CWSpecParser.RULE_memberLine);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 250;
        this.ts_start();
        this.state = 251;
        this.match(CWSpecParser.T_MEMBER);
        this.state = 253; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 252;
            this.match(CWSpecParser.SPACE);
            this.state = 255; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===CWSpecParser.SPACE);

        this.state = 257;
        localctx.memberName = this._input.LT(1);
        _la = this._input.LA(1);
        if(!(_la===CWSpecParser.IDENT || _la===CWSpecParser.INTEGER)) {
            localctx.memberName = this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 259; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 258;
        		this.match(CWSpecParser.SPACE);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 261; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,33, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 266;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CWSpecParser.IDENT) | (1 << CWSpecParser.SPACE) | (1 << CWSpecParser.STAR) | (1 << CWSpecParser.TEXT) | (1 << CWSpecParser.AT))) !== 0)) {
            this.state = 263;
            localctx._lineElement = this.lineElement();
            localctx.elements.push(localctx._lineElement);
            this.state = 268;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 269;
        this.match(CWSpecParser.NL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function KeyLineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CWSpecParser.RULE_keyLine;
    return this;
}

KeyLineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeyLineContext.prototype.constructor = KeyLineContext;


 
KeyLineContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function KeyLine_namedContext(parser, ctx) {
	KeyLineContext.call(this, parser);
    this._lineElement = null; // LineElementContext;
    this.elements = []; // of LineElementContexts;
    KeyLineContext.prototype.copyFrom.call(this, ctx);
    return this;
}

KeyLine_namedContext.prototype = Object.create(KeyLineContext.prototype);
KeyLine_namedContext.prototype.constructor = KeyLine_namedContext;

CWSpecParser.KeyLine_namedContext = KeyLine_namedContext;

KeyLine_namedContext.prototype.ts_start = function() {
    return this.getTypedRuleContext(Ts_startContext,0);
};

KeyLine_namedContext.prototype.T_KEY_named = function() {
    return this.getToken(CWSpecParser.T_KEY_named, 0);
};

KeyLine_namedContext.prototype.NL = function() {
    return this.getToken(CWSpecParser.NL, 0);
};

KeyLine_namedContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CWSpecParser.SPACE);
    } else {
        return this.getToken(CWSpecParser.SPACE, i);
    }
};


KeyLine_namedContext.prototype.lineElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LineElementContext);
    } else {
        return this.getTypedRuleContext(LineElementContext,i);
    }
};

function KeyLineNormalContext(parser, ctx) {
	KeyLineContext.call(this, parser);
    this._lineElement = null; // LineElementContext;
    this.elements = []; // of LineElementContexts;
    KeyLineContext.prototype.copyFrom.call(this, ctx);
    return this;
}

KeyLineNormalContext.prototype = Object.create(KeyLineContext.prototype);
KeyLineNormalContext.prototype.constructor = KeyLineNormalContext;

CWSpecParser.KeyLineNormalContext = KeyLineNormalContext;

KeyLineNormalContext.prototype.ts_start = function() {
    return this.getTypedRuleContext(Ts_startContext,0);
};

KeyLineNormalContext.prototype.T_KEY = function() {
    return this.getToken(CWSpecParser.T_KEY, 0);
};

KeyLineNormalContext.prototype.NL = function() {
    return this.getToken(CWSpecParser.NL, 0);
};

KeyLineNormalContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CWSpecParser.SPACE);
    } else {
        return this.getToken(CWSpecParser.SPACE, i);
    }
};


KeyLineNormalContext.prototype.lineElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LineElementContext);
    } else {
        return this.getTypedRuleContext(LineElementContext,i);
    }
};


CWSpecParser.KeyLineContext = KeyLineContext;

CWSpecParser.prototype.keyLine = function() {

    var localctx = new KeyLineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, CWSpecParser.RULE_keyLine);
    var _la = 0; // Token type
    try {
        this.state = 301;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
        switch(la_) {
        case 1:
            localctx = new KeyLineNormalContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 271;
            this.ts_start();
            this.state = 272;
            this.match(CWSpecParser.T_KEY);
            this.state = 274; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 273;
            		this.match(CWSpecParser.SPACE);
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 276; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,35, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 281;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CWSpecParser.IDENT) | (1 << CWSpecParser.SPACE) | (1 << CWSpecParser.STAR) | (1 << CWSpecParser.TEXT) | (1 << CWSpecParser.AT))) !== 0)) {
                this.state = 278;
                localctx._lineElement = this.lineElement();
                localctx.elements.push(localctx._lineElement);
                this.state = 283;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 284;
            this.match(CWSpecParser.NL);
            break;

        case 2:
            localctx = new KeyLine_namedContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 286;
            this.ts_start();
            this.state = 287;
            this.match(CWSpecParser.T_KEY_named);
            this.state = 289; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 288;
            		this.match(CWSpecParser.SPACE);
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 291; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,37, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 296;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CWSpecParser.IDENT) | (1 << CWSpecParser.SPACE) | (1 << CWSpecParser.STAR) | (1 << CWSpecParser.TEXT) | (1 << CWSpecParser.AT))) !== 0)) {
                this.state = 293;
                localctx._lineElement = this.lineElement();
                localctx.elements.push(localctx._lineElement);
                this.state = 298;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 299;
            this.match(CWSpecParser.NL);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ValueLineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CWSpecParser.RULE_valueLine;
    this._lineElement = null; // LineElementContext
    this.elements = []; // of LineElementContexts
    return this;
}

ValueLineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueLineContext.prototype.constructor = ValueLineContext;

ValueLineContext.prototype.ts_start = function() {
    return this.getTypedRuleContext(Ts_startContext,0);
};

ValueLineContext.prototype.T_VALUE = function() {
    return this.getToken(CWSpecParser.T_VALUE, 0);
};

ValueLineContext.prototype.NL = function() {
    return this.getToken(CWSpecParser.NL, 0);
};

ValueLineContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CWSpecParser.SPACE);
    } else {
        return this.getToken(CWSpecParser.SPACE, i);
    }
};


ValueLineContext.prototype.lineElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LineElementContext);
    } else {
        return this.getTypedRuleContext(LineElementContext,i);
    }
};




CWSpecParser.ValueLineContext = ValueLineContext;

CWSpecParser.prototype.valueLine = function() {

    var localctx = new ValueLineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, CWSpecParser.RULE_valueLine);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 303;
        this.ts_start();
        this.state = 304;
        this.match(CWSpecParser.T_VALUE);
        this.state = 306; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 305;
        		this.match(CWSpecParser.SPACE);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 308; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,40, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 313;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CWSpecParser.IDENT) | (1 << CWSpecParser.SPACE) | (1 << CWSpecParser.STAR) | (1 << CWSpecParser.TEXT) | (1 << CWSpecParser.AT))) !== 0)) {
            this.state = 310;
            localctx._lineElement = this.lineElement();
            localctx.elements.push(localctx._lineElement);
            this.state = 315;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 316;
        this.match(CWSpecParser.NL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LineElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CWSpecParser.RULE_lineElement;
    return this;
}

LineElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LineElementContext.prototype.constructor = LineElementContext;

LineElementContext.prototype.inlineMacro = function() {
    return this.getTypedRuleContext(InlineMacroContext,0);
};

LineElementContext.prototype.textElement = function() {
    return this.getTypedRuleContext(TextElementContext,0);
};




CWSpecParser.LineElementContext = LineElementContext;

CWSpecParser.prototype.lineElement = function() {

    var localctx = new LineElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, CWSpecParser.RULE_lineElement);
    try {
        this.state = 320;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CWSpecParser.AT:
            this.enterOuterAlt(localctx, 1);
            this.state = 318;
            this.inlineMacro();
            break;
        case CWSpecParser.IDENT:
        case CWSpecParser.SPACE:
        case CWSpecParser.STAR:
        case CWSpecParser.TEXT:
            this.enterOuterAlt(localctx, 2);
            this.state = 319;
            this.textElement();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TextElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CWSpecParser.RULE_textElement;
    return this;
}

TextElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TextElementContext.prototype.constructor = TextElementContext;

TextElementContext.prototype.TEXT = function() {
    return this.getToken(CWSpecParser.TEXT, 0);
};

TextElementContext.prototype.IDENT = function() {
    return this.getToken(CWSpecParser.IDENT, 0);
};

TextElementContext.prototype.SPACE = function() {
    return this.getToken(CWSpecParser.SPACE, 0);
};

TextElementContext.prototype.STAR = function() {
    return this.getToken(CWSpecParser.STAR, 0);
};




CWSpecParser.TextElementContext = TextElementContext;

CWSpecParser.prototype.textElement = function() {

    var localctx = new TextElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, CWSpecParser.RULE_textElement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 322;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CWSpecParser.IDENT) | (1 << CWSpecParser.SPACE) | (1 << CWSpecParser.STAR) | (1 << CWSpecParser.TEXT))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SkipWsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CWSpecParser.RULE_skipWs;
    return this;
}

SkipWsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SkipWsContext.prototype.constructor = SkipWsContext;

SkipWsContext.prototype.SPACE = function() {
    return this.getToken(CWSpecParser.SPACE, 0);
};

SkipWsContext.prototype.NL = function() {
    return this.getToken(CWSpecParser.NL, 0);
};




CWSpecParser.SkipWsContext = SkipWsContext;

CWSpecParser.prototype.skipWs = function() {

    var localctx = new SkipWsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, CWSpecParser.RULE_skipWs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 324;
        _la = this._input.LA(1);
        if(!(_la===CWSpecParser.NL || _la===CWSpecParser.SPACE)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.CWSpecParser = CWSpecParser;
