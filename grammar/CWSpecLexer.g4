lexer grammar CWSpecLexer;

options {
	language = JavaScript;
}

IDENT: [a-zA-Z_][a-zA-Z0-9_]+;
NL: '\r'? '\n';
SPACE: (' ' | '\t')+;
CWSPEC_BLOCK_START: '/**';
CWSPEC_BLOCK_END: '*/';
CWSPEC_LINE_START: '///';
CONTINUE_LINE:
	'\\' SPACE? NL SPACE? CWSPEC_LINE_START -> channel(HIDDEN);
InlineMacro: '@:' IDENT? '`' (.*?) '`';
STAR: '*';
INTEGER: [0-9]+;
TEXT: ~[\n\r\t ]+;

// tags
T_TITLE: '@title';
T_AUTHOR: '@author';
T_NOTE: '@note';
T_INFO: '@info';
T_TIP: '@tip';
T_WARNING: '@warning' | '@warn';
T_DANGER: '@danger';
T_DETAILS: '@details';
T_PARAM: '@param';
T_RETURNS: '@returns' | '@ret';
T_RESPONSE: '@response' | '@resp';
T_MEMBER: '@member' | '@mem';
T_KEY: '@key';
T_KEY_named: '@key:' IDENT;
T_VALUE: '@value' | '@val';

fragment Tag:
	T_TITLE
	| T_AUTHOR
	| T_NOTE
	| T_INFO
	| T_TIP
	| T_WARNING
	| T_DANGER
	| T_DETAILS
	| T_PARAM
	| T_RETURNS
	| T_RESPONSE
	| T_MEMBER
	| T_KEY
	| T_VALUE;
