parser grammar CWSpecParser;

options {
	language = JavaScript;
	tokenVocab = CWSpecLexer;
}

cwspec: (cwspecLines | NL)+ EOF;

cwspecLines:
	descriptionLines wsLines?
	| descriptionLines wsLines? tagSectionLines
	| wsLines? tagSectionLines;

wsLines: (CWSPEC_LINE_START SPACE* NL)+;
descriptionLines: descriptionLine+;

// Text, cannot start with @
descriptionLine:
	(CWSPEC_LINE_START descriptionStart descriptionElement* NL)
	| (CWSPEC_LINE_START inlineMacro descriptionElement* NL);

descriptionStart: SPACE? nonTag+ textElement*;
descriptionElement: inlineMacro | textElement;

// Inline Macro
inlineMacro: AT COLON;

nonTag: (TEXT | IDENT | INTEGER | STAR);

tagSectionLines: tagSectionLine+;
tagSectionLine:
	titleLine
	| authorLine
	| admonitionLine
	| paramLine
	| returnsLine
	| responseLine
	| memberLine
	| keyLine
	| valueLine;

ts_start: CWSPEC_LINE_START SPACE?;

titleLine:
	ts_start T_TITLE SPACE+ (elements += lineElement)* NL;
authorLine:
	ts_start T_AUTHOR SPACE+ (elements += lineElement)* NL;
admonitionLine:
	ts_start (
		admType = (
			T_NOTE
			| T_INFO
			| T_TIP
			| T_WARNING
			| T_DANGER
			| T_DETAILS
		) SPACE+ (elements += lineElement)*
	) NL;
paramLine:
	ts_start T_PARAM SPACE+ (paramName = IDENT) SPACE+ (
		elements += lineElement
	)* NL;
returnsLine:
	ts_start T_RETURNS SPACE+ (elements += lineElement)* NL;
responseLine:
	ts_start T_RESPONSE SPACE+ (elements += lineElement)* NL;
memberLine:
	ts_start T_MEMBER SPACE+ (memberName = (IDENT | INTEGER)) SPACE+ (
		elements += lineElement
	)* NL;
keyLine:
	ts_start T_KEY SPACE+ (elements += lineElement)* NL			# KeyLineNormal
	| ts_start T_KEY_named SPACE+ (elements += lineElement)* NL	# KeyLine_named;
valueLine:
	ts_start T_VALUE SPACE+ (elements += lineElement)* NL;

lineElement: inlineMacro | textElement;

textElement: (TEXT | IDENT | SPACE | STAR);
skipWs: SPACE | NL;
