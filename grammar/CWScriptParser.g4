parser grammar CWScriptParser;

options {
	language = JavaScript;
	tokenVocab = CWScriptLexer;
}

// Files contain 1 or more topLevelStatement
sourceFile: (spec = cwspec)? topLevelStmt* EOF;
topLevelStmt: contractDefn | interfaceDefn | importStmt;

// Contract Block
contractDefn:
	(spec = cwspec)? CONTRACT (name = ident) (
		EXTENDS parents = identList
	)? (IMPLEMENTS (interfaces = interfaceList))? contractBody;

interfaceList: interfaceVal (COMMA interfaceVal)*;

interfaceVal: (interfaceName = ident) (
		LBRACK mixins = identList RBRACK
	)?;

// Interface 
interfaceDefn:
	(spec = cwspec)? INTERFACE (name = ident) (
		LBRACK mixinName = ident RBRACK
	)? (EXTENDS parents = interfaceList)? interfaceBody;

// Import Statement
importStmt:
	IMPORT ((symbols = importSymbolList) | (star = MUL))? FROM (
		fileName = StringLiteral
	);

importSymbolList: (importItem += importSymbol) (
		COMMA (importItem += importSymbol)
	)*;
importSymbol:
	LPAREN importSymbolList RPAREN						# GroupedImportSymbol
	| typePath											# TypePathImportSymbol
	| typePath D_COLON LBRACE importSymbolList RBRACE	# DestructureImportSymbol
	| typePath D_COLON MUL								# AllImportSymbol
	| importSymbol AS ident								# RenamedImportSymbol;

contractBody: LBRACE (items = contractItem)* RBRACE;
interfaceBody: LBRACE (items = interfaceItem)* RBRACE;

contractItem:
	typeDefn
	| errorDefn
	| errorDefnBlock
	| eventDefn
	| eventDefnBlock
	| stateDefn
	| stateDefnBlock
	| instantiateDefn
	| execDefn
	| execDefnBlock
	| queryDefn
	| queryDefnBlock
	| migrateDefn;

interfaceItem:
	typeDefn
	| errorDefn
	| errorDefnBlock
	| eventDefn
	| eventDefnBlock
	| stateDefn
	| stateDefnBlock
	| instantiateDecl
	| execDecl
	| execDeclBlock
	| queryDecl
	| queryDeclBlock
	| migrateDecl;

// Errors
errorDefn: (spec = cwspec)? ERROR enumVariant;
errorDefnBlock: ERROR LBRACE errorDefnBlock_item* RBRACE;
errorDefnBlock_item: (spec = cwspec)? enumVariant;

// Events
eventDefn: (spec = cwspec)? EVENT enumVariant;
eventDefnBlock: EVENT LBRACE eventDefnBlock_item* RBRACE;
eventDefnBlock_item: (spec = cwspec)? enumVariant;

// State
stateDefn: (spec = cwspec)? STATE (item = itemDefn)	# StateItemDefn
	| (spec = cwspec)? STATE map = mapDefn			# StateMapDefn;

stateDefnBlock: STATE LBRACE stateDefnBlock_item* RBRACE;
stateDefnBlock_item: (spec = cwspec)? (item = itemDefn)	# StateBlockItemDefn
	| (spec = cwspec)? (map = mapDefn)					# StateBlockMapDefn;

// State > Item 
itemDefn: (key = ident) COLON (valueType = typeExpr);

// State > Map
mapDefn:
	(key = ident) (mapKeys = mapDefnKeys) COLON (
		valueType = typeExpr
	);

mapDefnKeys: mapDefnKey+;
mapDefnKey:
	LBRACK (keyName = ident COLON)? (keyType = typeExpr) RBRACK;

// Instantiate
instantiateDefn: (spec = cwspec)? INSTANTIATE fnArgs fnType? fnBody;
instantiateDecl: (spec = cwspec)? INSTANTIATE fnArgs fnType?;

// Exec Defn
execDefn: (spec = cwspec)? EXEC namedFnDefn;
execDefnBlock: EXEC LBRACE execDefnBlock_item* RBRACE;
execDefnBlock_item: (spec = cwspec)? namedFnDefn;

// Exec Decl
execDecl: (spec = cwspec)? EXEC namedFnDecl;
execDeclBlock: EXEC LBRACE execDeclBlock_item* RBRACE;
execDeclBlock_item: (spec = cwspec)? namedFnDecl;

// Query Defn
queryDefn: (spec = cwspec)? QUERY namedFnDefn;
queryDefnBlock: QUERY LBRACE queryDefnBlock_item* RBRACE;
queryDefnBlock_item: (spec = cwspec)? namedFnDefn;

// Query Decl
queryDecl: (spec = cwspec)? QUERY namedFnDecl;
queryDeclBlock: QUERY LBRACE queryDeclBlock_item* RBRACE;
queryDeclBlock_item: (spec = cwspec)? namedFnDecl;

migrateDefn: (spec = cwspec)? MIGRATE fnArgs fnType? fnBody;
migrateDecl: (spec = cwspec)? MIGRATE fnArgs fnType?;

// Enum Variants
enumVariant:
	enumVariant_struct
	| enumVariant_tuple
	| enumVariant_unit;

enumVariant_struct: (name = ident) (
		parenStructMembers
		| curlyStructMembers
	);

enumVariant_tuple: (name = ident) members = tupleMembers;
enumVariant_unit: (name = ident);

// Tuple Variants
tupleMembers: LPAREN typeExpr (COMMA typeExpr)* RPAREN;
parenStructMembers:
	LPAREN (structMember (COMMA structMember)*)? RPAREN;
curlyStructMembers:
	LBRACE (structMember (COMMA structMember)* COMMA?)? RBRACE;
structMember: (spec = cwspec)? (name = ident) (option = QUEST)? COLON (
		valueType = typeExpr
	);

// Type Expressions
typeExpr:
	typePath															# TypePathExpr
	| typeExpr typeParam												# ParamzdTypeExpr
	| LPAREN (members += typeExpr) (COMMA members += typeExpr)* RPAREN	# TupleTypeExpr
	| typeExpr QUEST													# ShortOptionTypeExpr
	| typeExpr LBRACK RBRACK											# ShortVecTypeExpr
	| AMP typeExpr														# RefTypeExpr
	| typeExpr DOLLAR ident												# ReflectiveTypeExpr
	| typeDefn															# TypeDefnExpr;

typeParam: LT typeExpr (COMMA typeExpr)* GT;
pathList: (ident) (D_COLON ident)*;
typePath: (root = D_COLON)? pathList;
typeDefn: structDefn | enumDefn | typeAliasDefn;

structDefn: (spec = cwspec)? STRUCT enumVariant;
enumDefn:
	(spec = cwspec)? ENUM (name = ident) LBRACE enumVariantList RBRACE;
enumVariantList: (enumVariant (COMMA? enumVariant)* COMMA?)?;
typeAliasDefn: (spec = cwspec)? TYPE (name = ident) EQ (
		typeValue = typeExpr
	);

// Functions
namedFnDecl: (fnName = ident) fnArgs fnType?;
namedFnDefn: (fnName = ident) fnArgs fnType? fnBody;

fnType: (ARROW retType = typeExpr);
fnArgs: LPAREN fnArgList? RPAREN;
fnArgList: fnArg (COMMA fnArg)*;
fnArg: (argName = ident) (option = QUEST)? COLON (
		argType = typeExpr
	);
fnBody: (LBRACE (stmt)* RBRACE)	# NormalFnBody
	| (FAT_ARROW stmt)			# ArrowFnBody;

// Statements
stmt:
	letStmt_															# LetStmt
	| expr (EQ | PLUS_EQ | MINUS_EQ | MUL_EQ | DIV_EQ | MOD_EQ) expr	# AssignStmt
	| ifExpr_															# IfStmt
	| forStmt_															# ForStmt
	| EXEC expr															# ExecStmt
	| EMIT expr															# EmitStmt
	| RETURN expr														# ReturnStmt
	| FAIL expr															# FailStmt
	| expr																# ExprStmt;

letStmt_: LET letLHS EQ expr;
letLHS: ident (COLON typeExpr)? | LBRACE identList RBRACE;

// Expressions
expr:
	LPAREN expr RPAREN						# GroupedExpr
	| expr DOT ident						# MemberAccessExpr
	| expr LBRACK expr RBRACK				# TableLookupExpr
	| expr LPAREN (exprList)? RPAREN		# PosArgsFnCallExpr
	| expr LPAREN (namedExprList)? RPAREN	# NamedArgsFnCallExpr
	| (PLUS | MINUS) expr					# UnarySignExpr
	| EXCLAM expr							# UnaryNotExpr
	| expr POW expr							# ExpExpr
	| expr (MUL | DIV | MOD) expr			# MultDivModExpr
	| expr (PLUS | MINUS) expr				# AddSubExpr
	| expr (LT | GT | LT_EQ | GT_EQ) expr	# CompExpr
	| expr (EQEQ | NEQ) expr				# EqExpr
	| expr AND expr							# AndExpr
	| expr OR expr							# OrExpr
	| ifExpr_								# IfExp
	| QUERY expr							# QueryExpr
	| val									# ValExpr;

val: // Values
	LPAREN RPAREN				# UnitVal
	| structVal_				# StructVal
	| LPAREN exprList RPAREN	# TupleStructVal
	| LBRACK exprList RBRACK	# VecVal
	| StringLiteral				# StringVal
	| IntegerLiteral			# IntegerVal
	| DecimalLiteral			# DecimalVal
	| TRUE						# TrueVal
	| FALSE						# FalseVal
	| ident						# IdentVal;

// Struct Val
structVal_: (structType = typePath) LBRACE (
		members = structValMembers
	)? RBRACE;

structValMembers:
	structValMember (COMMA structValMember)* COMMA?;
structValMember: (name = ident COLON value = expr);

// If Statements (also can be considered Exprs)
ifExpr_: ifClause_ elseIfClauses? elseClause?;
ifClause_:
	IF (predicate = expr) fnBody	# IfClause
	| IF letStmt_ fnBody			# IfLetClause;
elseIfClauses: (ELSE ifClause_)+;
elseClause: ELSE fnBody;

// For Loops
forStmt_:
	FOR item = forItem IN iterItems = expr fnBody	# ForInStmt
	| FOR expr TIMES fnBody							# ForTimesStmt;

forItem: ident | (LBRACE identList RBRACE);
identList: (symbols += ident) (COMMA (symbols += ident))*;

// Function Calls
exprList: expr (COMMA expr)*;
namedExprList: namedExpr (COMMA namedExpr)*;
namedExpr: (name = ident COLON value = expr);

// Lexer

ident: Ident | reservedKeyword;
cwspec: (CWSPEC_LINE_COMMENT | CWSPEC_BLOCK_COMMENT)+;

reservedKeyword:
	CONTRACT
	| INTERFACE
	| IMPORT
	| IMPLEMENTS
	| EXTENDS
	| ERROR
	| EVENT
	| INSTANTIATE
	| EXEC
	| QUERY
	| MIGRATE
	| FOR
	| IN
	| FROM
	| STATE
	| TIMES
	| IF
	| ELSE
	| AND
	| OR
	| TRUE
	| FALSE
	| LET
	| RETURN
	| STRUCT
	| ENUM
	| TYPE
	| EMIT;
