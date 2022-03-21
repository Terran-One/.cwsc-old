lexer grammar CWScriptLexer;

// KEYWORDS
CONTRACT: 'contract';
INTERFACE: 'interface';
IMPORT: 'import';
IMPLEMENTS: 'implements';
IMPL: 'impl';
EXTENSION: 'extension';
REQUIRES: 'requires';
EXTENDS: 'extends';
ERROR: 'error';
EVENT: 'event';
INSTANTIATE: 'instantiate';
EXEC: 'exec';
QUERY: 'query';
MIGRATE: 'migrate';
FOR: 'for';
IN: 'in';
FROM: 'from';
STATE: 'state';
TIMES: 'times';
IF: 'if';
ELSE: 'else';
AND: 'and';
OR: 'or';
TRUE: 'true';
FALSE: 'false';
LET: 'let';
FAIL: 'fail';
RETURN: 'return';
STRUCT: 'struct';
ENUM: 'enum';
TYPE: 'type';
EMIT: 'emit';
AS: 'as';

// PUNCTUATION
LPAREN: '(';
RPAREN: ')';
LBRACK: '[';
RBRACK: ']';
LBRACE: '{';
RBRACE: '}';
DOT: '.';
COMMA: ',';
QUEST: '?';
EXCLAM: '!';
COLON: ':';
D_COLON: '::';
DOLLAR: '$';
HASH: '#';
AT: '@';
AMP: '&';
ARROW: '->';
FAT_ARROW: '=>';
S_QUOTE: '\'';
D_QUOTE: '"';

EQ: '='; // OPS
EQEQ: '==';
NEQ: '!=';
PLUS: '+';
PLUS_EQ: '+=';
MINUS: '-';
MINUS_EQ: '-=';
MUL: '*';
MUL_EQ: '*=';
DIV: '/';
DIV_EQ: '/=';
MOD: '%';
MOD_EQ: '%=';
LT: '<';
LT_EQ: '<=';
GT: '>';
GT_EQ: '>=';
POW: '**';

// Identifiers
Ident: [_a-zA-Z][_a-zA-Z0-9]*;

// Strings
StringLiteral: D_QUOTE DoubleQuotedStringCharacter* D_QUOTE;
fragment DoubleQuotedStringCharacter: ~["\r\n\\] | ('\\' .);

// Numbers
IntegerLiteral: DecimalDigits;
DecimalLiteral: (DecimalDigits? DOT DecimalDigits);
fragment DecimalDigits: [0-9] ( '_'? [0-9])*;

// Comments
CWSPEC_LINE_COMMENT: ('///' .*? [\r\n])+;
CWSPEC_BLOCK_COMMENT: '/**' .*? '*/';

LINE_COMMENT: '//' ~[\r\n]* -> channel(HIDDEN);
BLOCK_COMMENT: '/*' .*? '*/' -> channel(HIDDEN);

// Whitespace
WS: [\r\n\t ] -> channel(HIDDEN);
