"use strict";
// Generated from ./grammar/CWScriptParser.g4 by ANTLR 4.9.0-SNAPSHOT
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumVariant_tupleContext = exports.EnumVariant_structContext = exports.EnumVariantContext = exports.MigrateDeclContext = exports.MigrateDefnContext = exports.QueryDeclBlock_itemContext = exports.QueryDeclBlockContext = exports.QueryDeclContext = exports.QueryDefnBlock_itemContext = exports.QueryDefnBlockContext = exports.QueryDefnContext = exports.ExecDeclBlock_itemContext = exports.ExecDeclBlockContext = exports.ExecDeclContext = exports.ExecDefnBlock_itemContext = exports.ExecDefnBlockContext = exports.ExecDefnContext = exports.InstantiateDeclContext = exports.InstantiateDefnContext = exports.MapDefnKeyContext = exports.MapDefnKeysContext = exports.MapDefnContext = exports.ItemDefnContext = exports.StateBlockMapDefnContext = exports.StateBlockItemDefnContext = exports.StateDefnBlock_itemContext = exports.StateDefnBlockContext = exports.StateMapDefnContext = exports.StateItemDefnContext = exports.StateDefnContext = exports.EventDefnBlock_itemContext = exports.EventDefnBlockContext = exports.EventDefnContext = exports.ErrorDefnBlock_itemContext = exports.ErrorDefnBlockContext = exports.ErrorDefnContext = exports.InterfaceItemContext = exports.ContractItemContext = exports.InterfaceBodyContext = exports.ContractBodyContext = exports.ImportItemContext = exports.ImportListContext = exports.ImportItemsStmtContext = exports.ImportAllStmtContext = exports.ImportStmtContext = exports.InterfaceDefnContext = exports.ContractDefnContext = exports.TopLevelStmtContext = exports.SourceFileContext = exports.CWScriptParser = void 0;
exports.IdentAssignLHSContext = exports.StateMapAssignLHSContext = exports.StateItemAssignLHSContext = exports.AssignLHSContext = exports.AssignStmt_Context = exports.StructUnpackLHSContext = exports.IdentLHSContext = exports.LetLHSContext = exports.LetStmt_Context = exports.ExprStmtContext = exports.FailStmtContext = exports.ReturnStmtContext = exports.EmitStmtContext = exports.ExecuteNowStmtContext = exports.ExecStmtContext = exports.ForStmtContext = exports.IfStmtContext = exports.AssignStmtContext = exports.LetStmtContext = exports.StmtContext = exports.ArrowFnBodyContext = exports.NormalFnBodyContext = exports.FnBodyContext = exports.FnArgContext = exports.FnArgListContext = exports.FnArgsContext = exports.FnTypeContext = exports.FnDefnContext = exports.NamedFnDefnContext = exports.NamedFnDeclContext = exports.TypeAliasDefnContext = exports.EnumVariantListContext = exports.EnumDefnContext = exports.StructDefnContext = exports.TypeDefnContext = exports.TypePathContext = exports.PathListContext = exports.TypeParamContext = exports.TypeDefnExprContext = exports.RefTypeExprContext = exports.ShortVecTypeExprContext = exports.ShortOptionTypeExprContext = exports.TupleTypeExprContext = exports.ParamzdTypeExprContext = exports.TypePathExprContext = exports.TypeExprContext = exports.StructMemberContext = exports.CurlyStructMembersContext = exports.ParenStructMembersContext = exports.TupleMembersContext = void 0;
exports.NamedExprListContext = exports.ExprListContext = exports.IdentListContext = exports.ForTimesStmtContext = exports.ForInStmtContext = exports.ForStmt_Context = exports.ElseClauseContext = exports.ElseIfClausesContext = exports.IfLetClauseContext = exports.IfClauseContext = exports.IfClause_Context = exports.IfExpr_Context = exports.StructValMemberContext = exports.StructValMembersContext = exports.StructVal_Context = exports.IdentValContext = exports.FalseValContext = exports.TrueValContext = exports.DecimalValContext = exports.IntegerValContext = exports.StringValContext = exports.VecValContext = exports.TupleValContext = exports.StructValContext = exports.UnitValContext = exports.ValContext = exports.ValExprContext = exports.QueryExprContext = exports.IfExprContext = exports.OrExprContext = exports.AndExprContext = exports.EqExprContext = exports.CompExprContext = exports.AddSubExprContext = exports.MultDivModExprContext = exports.ExpExprContext = exports.UnaryExprContext = exports.NamedArgsFnCallExprContext = exports.PosArgsFnCallExprContext = exports.TableLookupExprContext = exports.MemberAccessExprContext = exports.StateMapAccessExprContext = exports.StateItemAccessExprContext = exports.GroupedExprContext = exports.ExprContext = exports.MsgContext = exports.InnerPathContext = exports.InnerAssignContext = exports.TableAssignLHSContext = exports.MemberAssignLHSContext = void 0;
exports.ReservedKeywordContext = exports.CwspecContext = exports.IdentContext = exports.NamedExprContext = void 0;
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class CWScriptParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(CWScriptParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return CWScriptParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "CWScriptParser.g4"; }
    // @Override
    get ruleNames() { return CWScriptParser.ruleNames; }
    // @Override
    get serializedATN() { return CWScriptParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    // @RuleVersion(0)
    sourceFile() {
        let _localctx = new SourceFileContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, CWScriptParser.RULE_sourceFile);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 179;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    topLevelStmt() {
        let _localctx = new TopLevelStmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, CWScriptParser.RULE_topLevelStmt);
        try {
            this.state = 190;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    contractDefn() {
        let _localctx = new ContractDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, CWScriptParser.RULE_contractDefn);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    interfaceDefn() {
        let _localctx = new InterfaceDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, CWScriptParser.RULE_interfaceDefn);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    importStmt() {
        let _localctx = new ImportStmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, CWScriptParser.RULE_importStmt);
        let _la;
        try {
            this.state = 236;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
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
                            _localctx._fileName = this.match(CWScriptParser.StringLiteral);
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
                                            _localctx._items = this.importList();
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
                                        _localctx._items = this.importList();
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 233;
                        this.match(CWScriptParser.FROM);
                        {
                            this.state = 234;
                            _localctx._fileName = this.match(CWScriptParser.StringLiteral);
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    importList() {
        let _localctx = new ImportListContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, CWScriptParser.RULE_importList);
        try {
            let _alt;
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
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    importItem() {
        let _localctx = new ImportItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, CWScriptParser.RULE_importItem);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    contractBody() {
        let _localctx = new ContractBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, CWScriptParser.RULE_contractBody);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    interfaceBody() {
        let _localctx = new InterfaceBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, CWScriptParser.RULE_interfaceBody);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    contractItem() {
        let _localctx = new ContractItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, CWScriptParser.RULE_contractItem);
        try {
            this.state = 283;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    interfaceItem() {
        let _localctx = new InterfaceItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, CWScriptParser.RULE_interfaceItem);
        try {
            this.state = 298;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    errorDefn() {
        let _localctx = new ErrorDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, CWScriptParser.RULE_errorDefn);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    errorDefnBlock() {
        let _localctx = new ErrorDefnBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, CWScriptParser.RULE_errorDefnBlock);
        let _la;
        try {
            let _alt;
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
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    errorDefnBlock_item() {
        let _localctx = new ErrorDefnBlock_itemContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, CWScriptParser.RULE_errorDefnBlock_item);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    eventDefn() {
        let _localctx = new EventDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, CWScriptParser.RULE_eventDefn);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    eventDefnBlock() {
        let _localctx = new EventDefnBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, CWScriptParser.RULE_eventDefnBlock);
        let _la;
        try {
            let _alt;
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
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    eventDefnBlock_item() {
        let _localctx = new EventDefnBlock_itemContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, CWScriptParser.RULE_eventDefnBlock_item);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    stateDefn() {
        let _localctx = new StateDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, CWScriptParser.RULE_stateDefn);
        let _la;
        try {
            this.state = 366;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
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
                                _localctx._spec = this.cwspec();
                            }
                        }
                        this.state = 359;
                        this.match(CWScriptParser.STATE);
                        {
                            this.state = 360;
                            _localctx._item = this.itemDefn();
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
                                _localctx._spec = this.cwspec();
                            }
                        }
                        this.state = 364;
                        this.match(CWScriptParser.STATE);
                        this.state = 365;
                        _localctx._map = this.mapDefn();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    stateDefnBlock() {
        let _localctx = new StateDefnBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, CWScriptParser.RULE_stateDefnBlock);
        let _la;
        try {
            let _alt;
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
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    stateDefnBlock_item() {
        let _localctx = new StateDefnBlock_itemContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, CWScriptParser.RULE_stateDefnBlock_item);
        let _la;
        try {
            this.state = 393;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
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
                                _localctx._spec = this.cwspec();
                            }
                        }
                        {
                            this.state = 388;
                            _localctx._item = this.itemDefn();
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
                                _localctx._spec = this.cwspec();
                            }
                        }
                        {
                            this.state = 392;
                            _localctx._map = this.mapDefn();
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    itemDefn() {
        let _localctx = new ItemDefnContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    mapDefn() {
        let _localctx = new MapDefnContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    mapDefnKeys() {
        let _localctx = new MapDefnKeysContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, CWScriptParser.RULE_mapDefnKeys);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    mapDefnKey() {
        let _localctx = new MapDefnKeyContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, CWScriptParser.RULE_mapDefnKey);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 418;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 37, this._ctx)) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    instantiateDefn() {
        let _localctx = new InstantiateDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, CWScriptParser.RULE_instantiateDefn);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    instantiateDecl() {
        let _localctx = new InstantiateDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, CWScriptParser.RULE_instantiateDecl);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    execDefn() {
        let _localctx = new ExecDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, CWScriptParser.RULE_execDefn);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    execDefnBlock() {
        let _localctx = new ExecDefnBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, CWScriptParser.RULE_execDefnBlock);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    execDefnBlock_item() {
        let _localctx = new ExecDefnBlock_itemContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, CWScriptParser.RULE_execDefnBlock_item);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    execDecl() {
        let _localctx = new ExecDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, CWScriptParser.RULE_execDecl);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    execDeclBlock() {
        let _localctx = new ExecDeclBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, CWScriptParser.RULE_execDeclBlock);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    execDeclBlock_item() {
        let _localctx = new ExecDeclBlock_itemContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, CWScriptParser.RULE_execDeclBlock_item);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    queryDefn() {
        let _localctx = new QueryDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, CWScriptParser.RULE_queryDefn);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    queryDefnBlock() {
        let _localctx = new QueryDefnBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, CWScriptParser.RULE_queryDefnBlock);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    queryDefnBlock_item() {
        let _localctx = new QueryDefnBlock_itemContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, CWScriptParser.RULE_queryDefnBlock_item);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    queryDecl() {
        let _localctx = new QueryDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, CWScriptParser.RULE_queryDecl);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    queryDeclBlock() {
        let _localctx = new QueryDeclBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, CWScriptParser.RULE_queryDeclBlock);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    queryDeclBlock_item() {
        let _localctx = new QueryDeclBlock_itemContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, CWScriptParser.RULE_queryDeclBlock_item);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    migrateDefn() {
        let _localctx = new MigrateDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, CWScriptParser.RULE_migrateDefn);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    migrateDecl() {
        let _localctx = new MigrateDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, CWScriptParser.RULE_migrateDecl);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    enumVariant() {
        let _localctx = new EnumVariantContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, CWScriptParser.RULE_enumVariant);
        try {
            this.state = 544;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 58, this._ctx)) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    enumVariant_struct() {
        let _localctx = new EnumVariant_structContext(this._ctx, this.state);
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
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    enumVariant_tuple() {
        let _localctx = new EnumVariant_tupleContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    tupleMembers() {
        let _localctx = new TupleMembersContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, CWScriptParser.RULE_tupleMembers);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    parenStructMembers() {
        let _localctx = new ParenStructMembersContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, CWScriptParser.RULE_parenStructMembers);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    curlyStructMembers() {
        let _localctx = new CurlyStructMembersContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, CWScriptParser.RULE_curlyStructMembers);
        let _la;
        try {
            let _alt;
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
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    structMember() {
        let _localctx = new StructMemberContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, CWScriptParser.RULE_structMember);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeExpr(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new TypeExprContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 94;
        this.enterRecursionRule(_localctx, 94, CWScriptParser.RULE_typeExpr, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 620;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 69, this._ctx)) {
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
                                _localctx._typeExpr = this.typeExpr(0);
                                _localctx._members.push(_localctx._typeExpr);
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
                                        _localctx._typeExpr = this.typeExpr(0);
                                        _localctx._members.push(_localctx._typeExpr);
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
                            this.typeExpr(2);
                        }
                        break;
                    case 4:
                        {
                            _localctx = new TypeDefnExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 619;
                            this.typeDefn();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 631;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 629;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 70, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ParamzdTypeExprContext(new TypeExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
                                        this.state = 622;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 623;
                                        this.typeParam();
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ShortOptionTypeExprContext(new TypeExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
                                        this.state = 624;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 625;
                                        this.match(CWScriptParser.QUEST);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new ShortVecTypeExprContext(new TypeExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
                                        this.state = 626;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 627;
                                        this.match(CWScriptParser.LBRACK);
                                        this.state = 628;
                                        this.match(CWScriptParser.RBRACK);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 633;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeParam() {
        let _localctx = new TypeParamContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, CWScriptParser.RULE_typeParam);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 634;
                this.match(CWScriptParser.LT);
                this.state = 635;
                this.typeExpr(0);
                this.state = 640;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CWScriptParser.COMMA) {
                    {
                        {
                            this.state = 636;
                            this.match(CWScriptParser.COMMA);
                            this.state = 637;
                            this.typeExpr(0);
                        }
                    }
                    this.state = 642;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 643;
                this.match(CWScriptParser.GT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    pathList() {
        let _localctx = new PathListContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, CWScriptParser.RULE_pathList);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 645;
                    this.ident();
                }
                this.state = 650;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 646;
                                this.match(CWScriptParser.D_COLON);
                                this.state = 647;
                                this.ident();
                            }
                        }
                    }
                    this.state = 652;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typePath() {
        let _localctx = new TypePathContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, CWScriptParser.RULE_typePath);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 654;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CWScriptParser.D_COLON) {
                    {
                        this.state = 653;
                        _localctx._root = this.match(CWScriptParser.D_COLON);
                    }
                }
                this.state = 656;
                this.pathList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeDefn() {
        let _localctx = new TypeDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, CWScriptParser.RULE_typeDefn);
        try {
            this.state = 661;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 75, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 658;
                        this.structDefn();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 659;
                        this.enumDefn();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 660;
                        this.typeAliasDefn();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    structDefn() {
        let _localctx = new StructDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, CWScriptParser.RULE_structDefn);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 664;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
                    {
                        this.state = 663;
                        _localctx._spec = this.cwspec();
                    }
                }
                this.state = 666;
                this.match(CWScriptParser.STRUCT);
                this.state = 667;
                this.enumVariant();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    enumDefn() {
        let _localctx = new EnumDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, CWScriptParser.RULE_enumDefn);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 670;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
                    {
                        this.state = 669;
                        _localctx._spec = this.cwspec();
                    }
                }
                this.state = 672;
                this.match(CWScriptParser.ENUM);
                {
                    this.state = 673;
                    _localctx._name = this.ident();
                }
                this.state = 674;
                this.match(CWScriptParser.LBRACE);
                this.state = 675;
                this.enumVariantList();
                this.state = 676;
                this.match(CWScriptParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    enumVariantList() {
        let _localctx = new EnumVariantListContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, CWScriptParser.RULE_enumVariantList);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 691;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.MIGRATE) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.TIMES) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE) | (1 << CWScriptParser.FN) | (1 << CWScriptParser.LET) | (1 << CWScriptParser.RETURN) | (1 << CWScriptParser.STRUCT) | (1 << CWScriptParser.ENUM))) !== 0) || _la === CWScriptParser.TYPE || _la === CWScriptParser.EMIT || _la === CWScriptParser.Ident) {
                    {
                        this.state = 678;
                        this.enumVariant();
                        this.state = 685;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 680;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === CWScriptParser.COMMA) {
                                            {
                                                this.state = 679;
                                                this.match(CWScriptParser.COMMA);
                                            }
                                        }
                                        this.state = 682;
                                        this.enumVariant();
                                    }
                                }
                            }
                            this.state = 687;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
                        }
                        this.state = 689;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CWScriptParser.COMMA) {
                            {
                                this.state = 688;
                                this.match(CWScriptParser.COMMA);
                            }
                        }
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeAliasDefn() {
        let _localctx = new TypeAliasDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, CWScriptParser.RULE_typeAliasDefn);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 694;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
                    {
                        this.state = 693;
                        _localctx._spec = this.cwspec();
                    }
                }
                this.state = 696;
                this.match(CWScriptParser.TYPE);
                {
                    this.state = 697;
                    _localctx._name = this.ident();
                }
                this.state = 698;
                this.match(CWScriptParser.EQ);
                {
                    this.state = 699;
                    _localctx._typeValue = this.typeExpr(0);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    namedFnDecl() {
        let _localctx = new NamedFnDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, CWScriptParser.RULE_namedFnDecl);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 701;
                    _localctx._fnName = this.ident();
                }
                this.state = 702;
                this.fnArgs();
                this.state = 704;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CWScriptParser.ARROW) {
                    {
                        this.state = 703;
                        this.fnType();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    namedFnDefn() {
        let _localctx = new NamedFnDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, CWScriptParser.RULE_namedFnDefn);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 706;
                    _localctx._fnName = this.ident();
                }
                this.state = 707;
                this.fnArgs();
                this.state = 709;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CWScriptParser.ARROW) {
                    {
                        this.state = 708;
                        this.fnType();
                    }
                }
                this.state = 711;
                this.fnBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    fnDefn() {
        let _localctx = new FnDefnContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, CWScriptParser.RULE_fnDefn);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 714;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT) {
                    {
                        this.state = 713;
                        _localctx._spec = this.cwspec();
                    }
                }
                this.state = 716;
                this.match(CWScriptParser.FN);
                this.state = 717;
                this.namedFnDefn();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    fnType() {
        let _localctx = new FnTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, CWScriptParser.RULE_fnType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 719;
                    this.match(CWScriptParser.ARROW);
                    this.state = 720;
                    _localctx._retType = this.typeExpr(0);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    fnArgs() {
        let _localctx = new FnArgsContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, CWScriptParser.RULE_fnArgs);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 722;
                this.match(CWScriptParser.LPAREN);
                this.state = 724;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.MIGRATE) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.TIMES) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE) | (1 << CWScriptParser.FN) | (1 << CWScriptParser.LET) | (1 << CWScriptParser.RETURN) | (1 << CWScriptParser.STRUCT) | (1 << CWScriptParser.ENUM))) !== 0) || _la === CWScriptParser.TYPE || _la === CWScriptParser.EMIT || _la === CWScriptParser.Ident) {
                    {
                        this.state = 723;
                        this.fnArgList();
                    }
                }
                this.state = 726;
                this.match(CWScriptParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    fnArgList() {
        let _localctx = new FnArgListContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, CWScriptParser.RULE_fnArgList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 728;
                this.fnArg();
                this.state = 733;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CWScriptParser.COMMA) {
                    {
                        {
                            this.state = 729;
                            this.match(CWScriptParser.COMMA);
                            this.state = 730;
                            this.fnArg();
                        }
                    }
                    this.state = 735;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    fnArg() {
        let _localctx = new FnArgContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, CWScriptParser.RULE_fnArg);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 736;
                    _localctx._argName = this.ident();
                }
                this.state = 738;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CWScriptParser.QUEST) {
                    {
                        this.state = 737;
                        _localctx._option = this.match(CWScriptParser.QUEST);
                    }
                }
                this.state = 740;
                this.match(CWScriptParser.COLON);
                {
                    this.state = 741;
                    _localctx._argType = this.typeExpr(0);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    fnBody() {
        let _localctx = new FnBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, CWScriptParser.RULE_fnBody);
        let _la;
        try {
            this.state = 753;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CWScriptParser.LBRACE:
                    _localctx = new NormalFnBodyContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 743;
                            this.match(CWScriptParser.LBRACE);
                            this.state = 747;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.EXECUTE_NOW) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.MIGRATE) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.TIMES) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE) | (1 << CWScriptParser.FN) | (1 << CWScriptParser.LET) | (1 << CWScriptParser.FAIL) | (1 << CWScriptParser.RETURN) | (1 << CWScriptParser.STRUCT) | (1 << CWScriptParser.ENUM))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.EXCLAM - 32)) | (1 << (CWScriptParser.D_COLON - 32)) | (1 << (CWScriptParser.PLUS - 32)) | (1 << (CWScriptParser.MINUS - 32)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (CWScriptParser.Ident - 73)) | (1 << (CWScriptParser.StringLiteral - 73)) | (1 << (CWScriptParser.IntegerLiteral - 73)) | (1 << (CWScriptParser.DecimalLiteral - 73)))) !== 0)) {
                                {
                                    {
                                        this.state = 744;
                                        this.stmt();
                                    }
                                }
                                this.state = 749;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 750;
                            this.match(CWScriptParser.RBRACE);
                        }
                    }
                    break;
                case CWScriptParser.FAT_ARROW:
                    _localctx = new ArrowFnBodyContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        {
                            this.state = 751;
                            this.match(CWScriptParser.FAT_ARROW);
                            this.state = 752;
                            this.stmt();
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    stmt() {
        let _localctx = new StmtContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, CWScriptParser.RULE_stmt);
        try {
            this.state = 770;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 91, this._ctx)) {
                case 1:
                    _localctx = new LetStmtContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 755;
                        this.letStmt_();
                    }
                    break;
                case 2:
                    _localctx = new AssignStmtContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 756;
                        this.assignStmt_();
                    }
                    break;
                case 3:
                    _localctx = new IfStmtContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 757;
                        this.ifExpr_();
                    }
                    break;
                case 4:
                    _localctx = new ForStmtContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 758;
                        this.forStmt_();
                    }
                    break;
                case 5:
                    _localctx = new ExecStmtContext(_localctx);
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 759;
                        this.match(CWScriptParser.EXEC);
                        this.state = 760;
                        this.expr(0);
                    }
                    break;
                case 6:
                    _localctx = new ExecuteNowStmtContext(_localctx);
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 761;
                        this.match(CWScriptParser.EXECUTE_NOW);
                        this.state = 762;
                        this.msg();
                    }
                    break;
                case 7:
                    _localctx = new EmitStmtContext(_localctx);
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 763;
                        this.match(CWScriptParser.EMIT);
                        this.state = 764;
                        this.expr(0);
                    }
                    break;
                case 8:
                    _localctx = new ReturnStmtContext(_localctx);
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 765;
                        this.match(CWScriptParser.RETURN);
                        this.state = 766;
                        this.expr(0);
                    }
                    break;
                case 9:
                    _localctx = new FailStmtContext(_localctx);
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 767;
                        this.match(CWScriptParser.FAIL);
                        this.state = 768;
                        this.expr(0);
                    }
                    break;
                case 10:
                    _localctx = new ExprStmtContext(_localctx);
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 769;
                        this.expr(0);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    letStmt_() {
        let _localctx = new LetStmt_Context(this._ctx, this.state);
        this.enterRule(_localctx, 130, CWScriptParser.RULE_letStmt_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 772;
                this.match(CWScriptParser.LET);
                this.state = 773;
                this.letLHS();
                this.state = 774;
                this.match(CWScriptParser.EQ);
                this.state = 775;
                this.expr(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    letLHS() {
        let _localctx = new LetLHSContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, CWScriptParser.RULE_letLHS);
        let _la;
        try {
            this.state = 786;
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
                        this.state = 777;
                        this.ident();
                        this.state = 780;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CWScriptParser.COLON) {
                            {
                                this.state = 778;
                                this.match(CWScriptParser.COLON);
                                this.state = 779;
                                _localctx._varType = this.typeExpr(0);
                            }
                        }
                    }
                    break;
                case CWScriptParser.LBRACE:
                    _localctx = new StructUnpackLHSContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 782;
                        this.match(CWScriptParser.LBRACE);
                        this.state = 783;
                        this.identList();
                        this.state = 784;
                        this.match(CWScriptParser.RBRACE);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    assignStmt_() {
        let _localctx = new AssignStmt_Context(this._ctx, this.state);
        this.enterRule(_localctx, 134, CWScriptParser.RULE_assignStmt_);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 788;
                _localctx._lhs = this.assignLHS();
                this.state = 789;
                _localctx._assignOp = this._input.LT(1);
                _la = this._input.LA(1);
                if (!(((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (CWScriptParser.EQ - 55)) | (1 << (CWScriptParser.PLUS_EQ - 55)) | (1 << (CWScriptParser.MINUS_EQ - 55)) | (1 << (CWScriptParser.MUL_EQ - 55)) | (1 << (CWScriptParser.DIV_EQ - 55)) | (1 << (CWScriptParser.MOD_EQ - 55)))) !== 0))) {
                    _localctx._assignOp = this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 790;
                _localctx._rhs = this.expr(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    assignLHS() {
        let _localctx = new AssignLHSContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, CWScriptParser.RULE_assignLHS);
        let _la;
        try {
            this.state = 824;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 97, this._ctx)) {
                case 1:
                    _localctx = new StateItemAssignLHSContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 792;
                        this.match(CWScriptParser.STATE);
                        this.state = 793;
                        this.match(CWScriptParser.DOT);
                        this.state = 794;
                        _localctx._key = this.ident();
                        this.state = 796;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CWScriptParser.DOT) {
                            {
                                this.state = 795;
                                _localctx._inner = this.innerAssign();
                            }
                        }
                    }
                    break;
                case 2:
                    _localctx = new StateMapAssignLHSContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 798;
                        this.match(CWScriptParser.STATE);
                        this.state = 799;
                        this.match(CWScriptParser.DOT);
                        this.state = 800;
                        _localctx._key = this.ident();
                        this.state = 801;
                        this.match(CWScriptParser.LBRACK);
                        {
                            this.state = 802;
                            _localctx._expr = this.expr(0);
                            _localctx._mapKeys.push(_localctx._expr);
                        }
                        this.state = 807;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === CWScriptParser.COMMA) {
                            {
                                {
                                    this.state = 803;
                                    this.match(CWScriptParser.COMMA);
                                    this.state = 804;
                                    _localctx._expr = this.expr(0);
                                    _localctx._mapKeys.push(_localctx._expr);
                                }
                            }
                            this.state = 809;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 810;
                        this.match(CWScriptParser.RBRACK);
                        this.state = 812;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === CWScriptParser.DOT) {
                            {
                                this.state = 811;
                                _localctx._inner = this.innerAssign();
                            }
                        }
                    }
                    break;
                case 3:
                    _localctx = new IdentAssignLHSContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 814;
                        this.ident();
                    }
                    break;
                case 4:
                    _localctx = new MemberAssignLHSContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 815;
                        _localctx._obj = this.expr(0);
                        this.state = 816;
                        this.match(CWScriptParser.DOT);
                        this.state = 817;
                        _localctx._member = this.ident();
                    }
                    break;
                case 5:
                    _localctx = new TableAssignLHSContext(_localctx);
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 819;
                        _localctx._table = this.expr(0);
                        this.state = 820;
                        this.match(CWScriptParser.LBRACK);
                        this.state = 821;
                        _localctx._key = this.expr(0);
                        this.state = 822;
                        this.match(CWScriptParser.RBRACK);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    innerAssign() {
        let _localctx = new InnerAssignContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, CWScriptParser.RULE_innerAssign);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 826;
                    this.match(CWScriptParser.DOT);
                    this.state = 827;
                    _localctx._innerPath = this.innerPath();
                    _localctx._paths.push(_localctx._innerPath);
                    this.state = 832;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === CWScriptParser.DOT) {
                        {
                            {
                                this.state = 828;
                                this.match(CWScriptParser.DOT);
                                this.state = 829;
                                _localctx._innerPath = this.innerPath();
                                _localctx._paths.push(_localctx._innerPath);
                            }
                        }
                        this.state = 834;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    innerPath() {
        let _localctx = new InnerPathContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, CWScriptParser.RULE_innerPath);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 835;
                    _localctx._name = this.ident();
                }
                this.state = 840;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CWScriptParser.LBRACK) {
                    {
                        this.state = 836;
                        this.match(CWScriptParser.LBRACK);
                        this.state = 837;
                        _localctx._tableKey = this.expr(0);
                        this.state = 838;
                        this.match(CWScriptParser.RBRACK);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    msg() {
        let _localctx = new MsgContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, CWScriptParser.RULE_msg);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 842;
                this.match(CWScriptParser.HASH);
                this.state = 843;
                this.expr(0);
                this.state = 844;
                this.match(CWScriptParser.DOT);
                this.state = 845;
                this.ident();
                this.state = 846;
                this.match(CWScriptParser.LPAREN);
                this.state = 847;
                this.exprList();
                this.state = 848;
                this.match(CWScriptParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expr(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExprContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 144;
        this.enterRecursionRule(_localctx, 144, CWScriptParser.RULE_expr, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 878;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 101, this._ctx)) {
                    case 1:
                        {
                            _localctx = new GroupedExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 851;
                            this.match(CWScriptParser.LPAREN);
                            this.state = 852;
                            this.expr(0);
                            this.state = 853;
                            this.match(CWScriptParser.RPAREN);
                        }
                        break;
                    case 2:
                        {
                            _localctx = new StateItemAccessExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 855;
                            this.match(CWScriptParser.STATE);
                            this.state = 856;
                            this.match(CWScriptParser.DOT);
                            this.state = 857;
                            _localctx._key = this.ident();
                        }
                        break;
                    case 3:
                        {
                            _localctx = new StateMapAccessExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 858;
                            this.match(CWScriptParser.STATE);
                            this.state = 859;
                            this.match(CWScriptParser.DOT);
                            this.state = 860;
                            _localctx._key = this.ident();
                            this.state = 861;
                            this.match(CWScriptParser.LBRACK);
                            {
                                this.state = 862;
                                _localctx._expr = this.expr(0);
                                _localctx._mapKeys.push(_localctx._expr);
                            }
                            this.state = 867;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === CWScriptParser.COMMA) {
                                {
                                    {
                                        this.state = 863;
                                        this.match(CWScriptParser.COMMA);
                                        this.state = 864;
                                        _localctx._expr = this.expr(0);
                                        _localctx._mapKeys.push(_localctx._expr);
                                    }
                                }
                                this.state = 869;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 870;
                            this.match(CWScriptParser.RBRACK);
                        }
                        break;
                    case 4:
                        {
                            _localctx = new UnaryExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 872;
                            _localctx._op = this._input.LT(1);
                            _la = this._input.LA(1);
                            if (!(((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (CWScriptParser.EXCLAM - 44)) | (1 << (CWScriptParser.PLUS - 44)) | (1 << (CWScriptParser.MINUS - 44)))) !== 0))) {
                                _localctx._op = this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 873;
                            this.expr(11);
                        }
                        break;
                    case 5:
                        {
                            _localctx = new IfExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 874;
                            this.ifExpr_();
                        }
                        break;
                    case 6:
                        {
                            _localctx = new QueryExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 875;
                            this.match(CWScriptParser.QUERY);
                            this.state = 876;
                            this.expr(2);
                        }
                        break;
                    case 7:
                        {
                            _localctx = new ValExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 877;
                            this.val();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 924;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 922;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 104, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExpExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
                                        this.state = 880;
                                        if (!(this.precpred(this._ctx, 10))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
                                        }
                                        this.state = 881;
                                        this.match(CWScriptParser.POW);
                                        this.state = 882;
                                        this.expr(11);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new MultDivModExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
                                        this.state = 883;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 884;
                                        _localctx._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (CWScriptParser.MUL - 62)) | (1 << (CWScriptParser.DIV - 62)) | (1 << (CWScriptParser.MOD - 62)))) !== 0))) {
                                            _localctx._op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 885;
                                        this.expr(10);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new AddSubExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
                                        this.state = 886;
                                        if (!(this.precpred(this._ctx, 8))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
                                        }
                                        this.state = 887;
                                        _localctx._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(_la === CWScriptParser.PLUS || _la === CWScriptParser.MINUS)) {
                                            _localctx._op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 888;
                                        this.expr(9);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new CompExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
                                        this.state = 889;
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
                                        }
                                        this.state = 890;
                                        _localctx._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (CWScriptParser.LT - 68)) | (1 << (CWScriptParser.LT_EQ - 68)) | (1 << (CWScriptParser.GT - 68)) | (1 << (CWScriptParser.GT_EQ - 68)))) !== 0))) {
                                            _localctx._op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 891;
                                        this.expr(8);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new EqExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
                                        this.state = 892;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 893;
                                        _localctx._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(_la === CWScriptParser.EQEQ || _la === CWScriptParser.NEQ)) {
                                            _localctx._op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 894;
                                        this.expr(7);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new AndExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
                                        this.state = 895;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 896;
                                        this.match(CWScriptParser.AND);
                                        this.state = 897;
                                        this.expr(6);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new OrExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
                                        this.state = 898;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 899;
                                        this.match(CWScriptParser.OR);
                                        this.state = 900;
                                        this.expr(5);
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new MemberAccessExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
                                        this.state = 901;
                                        if (!(this.precpred(this._ctx, 15))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
                                        }
                                        this.state = 902;
                                        this.match(CWScriptParser.DOT);
                                        this.state = 903;
                                        this.ident();
                                    }
                                    break;
                                case 9:
                                    {
                                        _localctx = new TableLookupExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
                                        this.state = 904;
                                        if (!(this.precpred(this._ctx, 14))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
                                        }
                                        this.state = 905;
                                        this.match(CWScriptParser.LBRACK);
                                        this.state = 906;
                                        this.expr(0);
                                        this.state = 907;
                                        this.match(CWScriptParser.COMMA);
                                        this.state = 908;
                                        this.match(CWScriptParser.RBRACK);
                                    }
                                    break;
                                case 10:
                                    {
                                        _localctx = new PosArgsFnCallExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
                                        this.state = 910;
                                        if (!(this.precpred(this._ctx, 13))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
                                        }
                                        this.state = 911;
                                        this.match(CWScriptParser.LPAREN);
                                        this.state = 913;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.MIGRATE) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.TIMES) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE) | (1 << CWScriptParser.FN) | (1 << CWScriptParser.LET) | (1 << CWScriptParser.RETURN) | (1 << CWScriptParser.STRUCT) | (1 << CWScriptParser.ENUM))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.EXCLAM - 32)) | (1 << (CWScriptParser.D_COLON - 32)) | (1 << (CWScriptParser.PLUS - 32)) | (1 << (CWScriptParser.MINUS - 32)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (CWScriptParser.Ident - 73)) | (1 << (CWScriptParser.StringLiteral - 73)) | (1 << (CWScriptParser.IntegerLiteral - 73)) | (1 << (CWScriptParser.DecimalLiteral - 73)))) !== 0)) {
                                            {
                                                this.state = 912;
                                                this.exprList();
                                            }
                                        }
                                        this.state = 915;
                                        this.match(CWScriptParser.RPAREN);
                                    }
                                    break;
                                case 11:
                                    {
                                        _localctx = new NamedArgsFnCallExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
                                        this.state = 916;
                                        if (!(this.precpred(this._ctx, 12))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
                                        }
                                        this.state = 917;
                                        this.match(CWScriptParser.LPAREN);
                                        this.state = 919;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.MIGRATE) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.TIMES) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE) | (1 << CWScriptParser.FN) | (1 << CWScriptParser.LET) | (1 << CWScriptParser.RETURN) | (1 << CWScriptParser.STRUCT) | (1 << CWScriptParser.ENUM))) !== 0) || _la === CWScriptParser.TYPE || _la === CWScriptParser.EMIT || _la === CWScriptParser.Ident) {
                                            {
                                                this.state = 918;
                                                this.namedExprList();
                                            }
                                        }
                                        this.state = 921;
                                        this.match(CWScriptParser.RPAREN);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 926;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    val() {
        let _localctx = new ValContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, CWScriptParser.RULE_val);
        try {
            this.state = 945;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 106, this._ctx)) {
                case 1:
                    _localctx = new UnitValContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 927;
                        this.match(CWScriptParser.LPAREN);
                        this.state = 928;
                        this.match(CWScriptParser.RPAREN);
                    }
                    break;
                case 2:
                    _localctx = new StructValContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 929;
                        this.structVal_();
                    }
                    break;
                case 3:
                    _localctx = new TupleValContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 930;
                        _localctx._tupleType = this.typePath();
                        this.state = 931;
                        this.match(CWScriptParser.LPAREN);
                        this.state = 932;
                        this.exprList();
                        this.state = 933;
                        this.match(CWScriptParser.RPAREN);
                    }
                    break;
                case 4:
                    _localctx = new VecValContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 935;
                        this.match(CWScriptParser.LBRACK);
                        this.state = 936;
                        this.exprList();
                        this.state = 937;
                        this.match(CWScriptParser.RBRACK);
                    }
                    break;
                case 5:
                    _localctx = new StringValContext(_localctx);
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 939;
                        this.match(CWScriptParser.StringLiteral);
                    }
                    break;
                case 6:
                    _localctx = new IntegerValContext(_localctx);
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 940;
                        this.match(CWScriptParser.IntegerLiteral);
                    }
                    break;
                case 7:
                    _localctx = new DecimalValContext(_localctx);
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 941;
                        this.match(CWScriptParser.DecimalLiteral);
                    }
                    break;
                case 8:
                    _localctx = new TrueValContext(_localctx);
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 942;
                        this.match(CWScriptParser.TRUE);
                    }
                    break;
                case 9:
                    _localctx = new FalseValContext(_localctx);
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 943;
                        this.match(CWScriptParser.FALSE);
                    }
                    break;
                case 10:
                    _localctx = new IdentValContext(_localctx);
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 944;
                        this.ident();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    structVal_() {
        let _localctx = new StructVal_Context(this._ctx, this.state);
        this.enterRule(_localctx, 148, CWScriptParser.RULE_structVal_);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 947;
                    _localctx._structType = this.typePath();
                }
                this.state = 948;
                this.match(CWScriptParser.LBRACE);
                this.state = 950;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.MIGRATE) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.TIMES) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE) | (1 << CWScriptParser.FN) | (1 << CWScriptParser.LET) | (1 << CWScriptParser.RETURN) | (1 << CWScriptParser.STRUCT) | (1 << CWScriptParser.ENUM))) !== 0) || _la === CWScriptParser.TYPE || _la === CWScriptParser.EMIT || _la === CWScriptParser.Ident) {
                    {
                        this.state = 949;
                        _localctx._members = this.structValMembers();
                    }
                }
                this.state = 952;
                this.match(CWScriptParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    structValMembers() {
        let _localctx = new StructValMembersContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, CWScriptParser.RULE_structValMembers);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 954;
                this.structValMember();
                this.state = 959;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 955;
                                this.match(CWScriptParser.COMMA);
                                this.state = 956;
                                this.structValMember();
                            }
                        }
                    }
                    this.state = 961;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
                }
                this.state = 963;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === CWScriptParser.COMMA) {
                    {
                        this.state = 962;
                        this.match(CWScriptParser.COMMA);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    structValMember() {
        let _localctx = new StructValMemberContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, CWScriptParser.RULE_structValMember);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 965;
                    _localctx._name = this.ident();
                    this.state = 966;
                    this.match(CWScriptParser.COLON);
                    this.state = 967;
                    _localctx._value = this.expr(0);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    ifExpr_() {
        let _localctx = new IfExpr_Context(this._ctx, this.state);
        this.enterRule(_localctx, 154, CWScriptParser.RULE_ifExpr_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 969;
                this.ifClause_();
                this.state = 971;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 110, this._ctx)) {
                    case 1:
                        {
                            this.state = 970;
                            this.elseIfClauses();
                        }
                        break;
                }
                this.state = 974;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 111, this._ctx)) {
                    case 1:
                        {
                            this.state = 973;
                            this.elseClause();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    ifClause_() {
        let _localctx = new IfClause_Context(this._ctx, this.state);
        this.enterRule(_localctx, 156, CWScriptParser.RULE_ifClause_);
        try {
            this.state = 984;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 112, this._ctx)) {
                case 1:
                    _localctx = new IfClauseContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 976;
                        this.match(CWScriptParser.IF);
                        {
                            this.state = 977;
                            _localctx._predicate = this.expr(0);
                        }
                        this.state = 978;
                        this.fnBody();
                    }
                    break;
                case 2:
                    _localctx = new IfLetClauseContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 980;
                        this.match(CWScriptParser.IF);
                        this.state = 981;
                        this.letStmt_();
                        this.state = 982;
                        this.fnBody();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    elseIfClauses() {
        let _localctx = new ElseIfClausesContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, CWScriptParser.RULE_elseIfClauses);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 988;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 986;
                                    this.match(CWScriptParser.ELSE);
                                    this.state = 987;
                                    this.ifClause_();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 990;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    elseClause() {
        let _localctx = new ElseClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, CWScriptParser.RULE_elseClause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 992;
                this.match(CWScriptParser.ELSE);
                this.state = 993;
                this.fnBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    forStmt_() {
        let _localctx = new ForStmt_Context(this._ctx, this.state);
        this.enterRule(_localctx, 162, CWScriptParser.RULE_forStmt_);
        try {
            this.state = 1006;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 114, this._ctx)) {
                case 1:
                    _localctx = new ForInStmtContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 995;
                        this.match(CWScriptParser.FOR);
                        this.state = 996;
                        _localctx._item = this.letLHS();
                        this.state = 997;
                        this.match(CWScriptParser.IN);
                        this.state = 998;
                        _localctx._iterItems = this.expr(0);
                        this.state = 999;
                        this.fnBody();
                    }
                    break;
                case 2:
                    _localctx = new ForTimesStmtContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1001;
                        this.match(CWScriptParser.FOR);
                        this.state = 1002;
                        this.expr(0);
                        this.state = 1003;
                        this.match(CWScriptParser.TIMES);
                        this.state = 1004;
                        this.fnBody();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    identList() {
        let _localctx = new IdentListContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, CWScriptParser.RULE_identList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1008;
                    _localctx._ident = this.ident();
                    _localctx._symbols.push(_localctx._ident);
                }
                this.state = 1013;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CWScriptParser.COMMA) {
                    {
                        {
                            this.state = 1009;
                            this.match(CWScriptParser.COMMA);
                            {
                                this.state = 1010;
                                _localctx._ident = this.ident();
                                _localctx._symbols.push(_localctx._ident);
                            }
                        }
                    }
                    this.state = 1015;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    exprList() {
        let _localctx = new ExprListContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, CWScriptParser.RULE_exprList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1016;
                this.expr(0);
                this.state = 1021;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CWScriptParser.COMMA) {
                    {
                        {
                            this.state = 1017;
                            this.match(CWScriptParser.COMMA);
                            this.state = 1018;
                            this.expr(0);
                        }
                    }
                    this.state = 1023;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    namedExprList() {
        let _localctx = new NamedExprListContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, CWScriptParser.RULE_namedExprList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1024;
                this.namedExpr();
                this.state = 1029;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === CWScriptParser.COMMA) {
                    {
                        {
                            this.state = 1025;
                            this.match(CWScriptParser.COMMA);
                            this.state = 1026;
                            this.namedExpr();
                        }
                    }
                    this.state = 1031;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    namedExpr() {
        let _localctx = new NamedExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, CWScriptParser.RULE_namedExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 1032;
                    _localctx._name = this.ident();
                    this.state = 1033;
                    this.match(CWScriptParser.COLON);
                    this.state = 1034;
                    _localctx._value = this.expr(0);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    ident() {
        let _localctx = new IdentContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, CWScriptParser.RULE_ident);
        try {
            this.state = 1038;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CWScriptParser.Ident:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1036;
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
                        this.state = 1037;
                        this.reservedKeyword();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    cwspec() {
        let _localctx = new CwspecContext(this._ctx, this.state);
        this.enterRule(_localctx, 174, CWScriptParser.RULE_cwspec);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1041;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 1040;
                                    _la = this._input.LA(1);
                                    if (!(_la === CWScriptParser.CWSPEC_LINE_COMMENT || _la === CWScriptParser.CWSPEC_BLOCK_COMMENT)) {
                                        this._errHandler.recoverInline(this);
                                    }
                                    else {
                                        if (this._input.LA(1) === Token_1.Token.EOF) {
                                            this.matchedEOF = true;
                                        }
                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 1043;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    reservedKeyword() {
        let _localctx = new ReservedKeywordContext(this._ctx, this.state);
        this.enterRule(_localctx, 176, CWScriptParser.RULE_reservedKeyword);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1045;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.MIGRATE) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.TIMES) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR) | (1 << CWScriptParser.TRUE) | (1 << CWScriptParser.FALSE) | (1 << CWScriptParser.FN) | (1 << CWScriptParser.LET) | (1 << CWScriptParser.RETURN) | (1 << CWScriptParser.STRUCT) | (1 << CWScriptParser.ENUM))) !== 0) || _la === CWScriptParser.TYPE || _la === CWScriptParser.EMIT)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    sempred(_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 47:
                return this.typeExpr_sempred(_localctx, predIndex);
            case 72:
                return this.expr_sempred(_localctx, predIndex);
        }
        return true;
    }
    typeExpr_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 6);
            case 1:
                return this.precpred(this._ctx, 4);
            case 2:
                return this.precpred(this._ctx, 3);
        }
        return true;
    }
    expr_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 3:
                return this.precpred(this._ctx, 10);
            case 4:
                return this.precpred(this._ctx, 9);
            case 5:
                return this.precpred(this._ctx, 8);
            case 6:
                return this.precpred(this._ctx, 7);
            case 7:
                return this.precpred(this._ctx, 6);
            case 8:
                return this.precpred(this._ctx, 5);
            case 9:
                return this.precpred(this._ctx, 4);
            case 10:
                return this.precpred(this._ctx, 15);
            case 11:
                return this.precpred(this._ctx, 14);
            case 12:
                return this.precpred(this._ctx, 13);
            case 13:
                return this.precpred(this._ctx, 12);
        }
        return true;
    }
    static get _ATN() {
        if (!CWScriptParser.__ATN) {
            CWScriptParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(CWScriptParser._serializedATN));
        }
        return CWScriptParser.__ATN;
    }
}
exports.CWScriptParser = CWScriptParser;
CWScriptParser.CONTRACT = 1;
CWScriptParser.INTERFACE = 2;
CWScriptParser.IMPORT = 3;
CWScriptParser.IMPLEMENTS = 4;
CWScriptParser.EXTENSION = 5;
CWScriptParser.REQUIRES = 6;
CWScriptParser.EXTENDS = 7;
CWScriptParser.ERROR = 8;
CWScriptParser.EVENT = 9;
CWScriptParser.INSTANTIATE = 10;
CWScriptParser.EXEC = 11;
CWScriptParser.EXECUTE_NOW = 12;
CWScriptParser.QUERY = 13;
CWScriptParser.MIGRATE = 14;
CWScriptParser.FOR = 15;
CWScriptParser.IN = 16;
CWScriptParser.FROM = 17;
CWScriptParser.STATE = 18;
CWScriptParser.TIMES = 19;
CWScriptParser.IF = 20;
CWScriptParser.ELSE = 21;
CWScriptParser.AND = 22;
CWScriptParser.OR = 23;
CWScriptParser.TRUE = 24;
CWScriptParser.FALSE = 25;
CWScriptParser.FN = 26;
CWScriptParser.LET = 27;
CWScriptParser.FAIL = 28;
CWScriptParser.RETURN = 29;
CWScriptParser.STRUCT = 30;
CWScriptParser.ENUM = 31;
CWScriptParser.TYPE = 32;
CWScriptParser.EMIT = 33;
CWScriptParser.AS = 34;
CWScriptParser.LPAREN = 35;
CWScriptParser.RPAREN = 36;
CWScriptParser.LBRACK = 37;
CWScriptParser.RBRACK = 38;
CWScriptParser.LBRACE = 39;
CWScriptParser.RBRACE = 40;
CWScriptParser.DOT = 41;
CWScriptParser.COMMA = 42;
CWScriptParser.QUEST = 43;
CWScriptParser.EXCLAM = 44;
CWScriptParser.COLON = 45;
CWScriptParser.D_COLON = 46;
CWScriptParser.DOLLAR = 47;
CWScriptParser.HASH = 48;
CWScriptParser.AT = 49;
CWScriptParser.AMP = 50;
CWScriptParser.ARROW = 51;
CWScriptParser.FAT_ARROW = 52;
CWScriptParser.S_QUOTE = 53;
CWScriptParser.D_QUOTE = 54;
CWScriptParser.EQ = 55;
CWScriptParser.EQEQ = 56;
CWScriptParser.NEQ = 57;
CWScriptParser.PLUS = 58;
CWScriptParser.PLUS_EQ = 59;
CWScriptParser.MINUS = 60;
CWScriptParser.MINUS_EQ = 61;
CWScriptParser.MUL = 62;
CWScriptParser.MUL_EQ = 63;
CWScriptParser.DIV = 64;
CWScriptParser.DIV_EQ = 65;
CWScriptParser.MOD = 66;
CWScriptParser.MOD_EQ = 67;
CWScriptParser.LT = 68;
CWScriptParser.LT_EQ = 69;
CWScriptParser.GT = 70;
CWScriptParser.GT_EQ = 71;
CWScriptParser.POW = 72;
CWScriptParser.Ident = 73;
CWScriptParser.StringLiteral = 74;
CWScriptParser.IntegerLiteral = 75;
CWScriptParser.DecimalLiteral = 76;
CWScriptParser.CWSPEC_LINE_COMMENT = 77;
CWScriptParser.CWSPEC_BLOCK_COMMENT = 78;
CWScriptParser.LINE_COMMENT = 79;
CWScriptParser.BLOCK_COMMENT = 80;
CWScriptParser.WS = 81;
CWScriptParser.RULE_sourceFile = 0;
CWScriptParser.RULE_topLevelStmt = 1;
CWScriptParser.RULE_contractDefn = 2;
CWScriptParser.RULE_interfaceDefn = 3;
CWScriptParser.RULE_importStmt = 4;
CWScriptParser.RULE_importList = 5;
CWScriptParser.RULE_importItem = 6;
CWScriptParser.RULE_contractBody = 7;
CWScriptParser.RULE_interfaceBody = 8;
CWScriptParser.RULE_contractItem = 9;
CWScriptParser.RULE_interfaceItem = 10;
CWScriptParser.RULE_errorDefn = 11;
CWScriptParser.RULE_errorDefnBlock = 12;
CWScriptParser.RULE_errorDefnBlock_item = 13;
CWScriptParser.RULE_eventDefn = 14;
CWScriptParser.RULE_eventDefnBlock = 15;
CWScriptParser.RULE_eventDefnBlock_item = 16;
CWScriptParser.RULE_stateDefn = 17;
CWScriptParser.RULE_stateDefnBlock = 18;
CWScriptParser.RULE_stateDefnBlock_item = 19;
CWScriptParser.RULE_itemDefn = 20;
CWScriptParser.RULE_mapDefn = 21;
CWScriptParser.RULE_mapDefnKeys = 22;
CWScriptParser.RULE_mapDefnKey = 23;
CWScriptParser.RULE_instantiateDefn = 24;
CWScriptParser.RULE_instantiateDecl = 25;
CWScriptParser.RULE_execDefn = 26;
CWScriptParser.RULE_execDefnBlock = 27;
CWScriptParser.RULE_execDefnBlock_item = 28;
CWScriptParser.RULE_execDecl = 29;
CWScriptParser.RULE_execDeclBlock = 30;
CWScriptParser.RULE_execDeclBlock_item = 31;
CWScriptParser.RULE_queryDefn = 32;
CWScriptParser.RULE_queryDefnBlock = 33;
CWScriptParser.RULE_queryDefnBlock_item = 34;
CWScriptParser.RULE_queryDecl = 35;
CWScriptParser.RULE_queryDeclBlock = 36;
CWScriptParser.RULE_queryDeclBlock_item = 37;
CWScriptParser.RULE_migrateDefn = 38;
CWScriptParser.RULE_migrateDecl = 39;
CWScriptParser.RULE_enumVariant = 40;
CWScriptParser.RULE_enumVariant_struct = 41;
CWScriptParser.RULE_enumVariant_tuple = 42;
CWScriptParser.RULE_tupleMembers = 43;
CWScriptParser.RULE_parenStructMembers = 44;
CWScriptParser.RULE_curlyStructMembers = 45;
CWScriptParser.RULE_structMember = 46;
CWScriptParser.RULE_typeExpr = 47;
CWScriptParser.RULE_typeParam = 48;
CWScriptParser.RULE_pathList = 49;
CWScriptParser.RULE_typePath = 50;
CWScriptParser.RULE_typeDefn = 51;
CWScriptParser.RULE_structDefn = 52;
CWScriptParser.RULE_enumDefn = 53;
CWScriptParser.RULE_enumVariantList = 54;
CWScriptParser.RULE_typeAliasDefn = 55;
CWScriptParser.RULE_namedFnDecl = 56;
CWScriptParser.RULE_namedFnDefn = 57;
CWScriptParser.RULE_fnDefn = 58;
CWScriptParser.RULE_fnType = 59;
CWScriptParser.RULE_fnArgs = 60;
CWScriptParser.RULE_fnArgList = 61;
CWScriptParser.RULE_fnArg = 62;
CWScriptParser.RULE_fnBody = 63;
CWScriptParser.RULE_stmt = 64;
CWScriptParser.RULE_letStmt_ = 65;
CWScriptParser.RULE_letLHS = 66;
CWScriptParser.RULE_assignStmt_ = 67;
CWScriptParser.RULE_assignLHS = 68;
CWScriptParser.RULE_innerAssign = 69;
CWScriptParser.RULE_innerPath = 70;
CWScriptParser.RULE_msg = 71;
CWScriptParser.RULE_expr = 72;
CWScriptParser.RULE_val = 73;
CWScriptParser.RULE_structVal_ = 74;
CWScriptParser.RULE_structValMembers = 75;
CWScriptParser.RULE_structValMember = 76;
CWScriptParser.RULE_ifExpr_ = 77;
CWScriptParser.RULE_ifClause_ = 78;
CWScriptParser.RULE_elseIfClauses = 79;
CWScriptParser.RULE_elseClause = 80;
CWScriptParser.RULE_forStmt_ = 81;
CWScriptParser.RULE_identList = 82;
CWScriptParser.RULE_exprList = 83;
CWScriptParser.RULE_namedExprList = 84;
CWScriptParser.RULE_namedExpr = 85;
CWScriptParser.RULE_ident = 86;
CWScriptParser.RULE_cwspec = 87;
CWScriptParser.RULE_reservedKeyword = 88;
// tslint:disable:no-trailing-whitespace
CWScriptParser.ruleNames = [
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
CWScriptParser._LITERAL_NAMES = [
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
CWScriptParser._SYMBOLIC_NAMES = [
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
CWScriptParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(CWScriptParser._LITERAL_NAMES, CWScriptParser._SYMBOLIC_NAMES, []);
CWScriptParser._serializedATNSegments = 2;
CWScriptParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03S\u041A\x04\x02" +
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
    "1\x071\u0265\n1\f1\x0E1\u0268\v1\x031\x031\x031\x031\x031\x051\u026F\n" +
    "1\x031\x031\x031\x031\x031\x031\x031\x071\u0278\n1\f1\x0E1\u027B\v1\x03" +
    "2\x032\x032\x032\x072\u0281\n2\f2\x0E2\u0284\v2\x032\x032\x033\x033\x03" +
    "3\x073\u028B\n3\f3\x0E3\u028E\v3\x034\x054\u0291\n4\x034\x034\x035\x03" +
    "5\x035\x055\u0298\n5\x036\x056\u029B\n6\x036\x036\x036\x037\x057\u02A1" +
    "\n7\x037\x037\x037\x037\x037\x037\x038\x038\x058\u02AB\n8\x038\x078\u02AE" +
    "\n8\f8\x0E8\u02B1\v8\x038\x058\u02B4\n8\x058\u02B6\n8\x039\x059\u02B9" +
    "\n9\x039\x039\x039\x039\x039\x03:\x03:\x03:\x05:\u02C3\n:\x03;\x03;\x03" +
    ";\x05;\u02C8\n;\x03;\x03;\x03<\x05<\u02CD\n<\x03<\x03<\x03<\x03=\x03=" +
    "\x03=\x03>\x03>\x05>\u02D7\n>\x03>\x03>\x03?\x03?\x03?\x07?\u02DE\n?\f" +
    "?\x0E?\u02E1\v?\x03@\x03@\x05@\u02E5\n@\x03@\x03@\x03@\x03A\x03A\x07A" +
    "\u02EC\nA\fA\x0EA\u02EF\vA\x03A\x03A\x03A\x05A\u02F4\nA\x03B\x03B\x03" +
    "B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x05B\u0305" +
    "\nB\x03C\x03C\x03C\x03C\x03C\x03D\x03D\x03D\x05D\u030F\nD\x03D\x03D\x03" +
    "D\x03D\x05D\u0315\nD\x03E\x03E\x03E\x03E\x03F\x03F\x03F\x03F\x05F\u031F" +
    "\nF\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x07F\u0328\nF\fF\x0EF\u032B\vF" +
    "\x03F\x03F\x05F\u032F\nF\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F" +
    "\x03F\x05F\u033B\nF\x03G\x03G\x03G\x03G\x07G\u0341\nG\fG\x0EG\u0344\v" +
    "G\x03H\x03H\x03H\x03H\x03H\x05H\u034B\nH\x03I\x03I\x03I\x03I\x03I\x03" +
    "I\x03I\x03I\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
    "J\x03J\x03J\x03J\x07J\u0364\nJ\fJ\x0EJ\u0367\vJ\x03J\x03J\x03J\x03J\x03" +
    "J\x03J\x03J\x03J\x05J\u0371\nJ\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
    "J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
    "J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x05J\u0394\n" +
    "J\x03J\x03J\x03J\x03J\x05J\u039A\nJ\x03J\x07J\u039D\nJ\fJ\x0EJ\u03A0\v" +
    "J\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03" +
    "K\x03K\x03K\x03K\x03K\x05K\u03B4\nK\x03L\x03L\x03L\x05L\u03B9\nL\x03L" +
    "\x03L\x03M\x03M\x03M\x07M\u03C0\nM\fM\x0EM\u03C3\vM\x03M\x05M\u03C6\n" +
    "M\x03N\x03N\x03N\x03N\x03O\x03O\x05O\u03CE\nO\x03O\x05O\u03D1\nO\x03P" +
    "\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x05P\u03DB\nP\x03Q\x03Q\x06Q\u03DF" +
    "\nQ\rQ\x0EQ\u03E0\x03R\x03R\x03R\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03" +
    "S\x03S\x03S\x03S\x05S\u03F1\nS\x03T\x03T\x03T\x07T\u03F6\nT\fT\x0ET\u03F9" +
    "\vT\x03U\x03U\x03U\x07U\u03FE\nU\fU\x0EU\u0401\vU\x03V\x03V\x03V\x07V" +
    "\u0406\nV\fV\x0EV\u0409\vV\x03W\x03W\x03W\x03W\x03X\x03X\x05X\u0411\n" +
    "X\x03Y\x06Y\u0414\nY\rY\x0EY\u0415\x03Z\x03Z\x03Z\x02\x02\x04`\x92[\x02" +
    "\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
    "\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02" +
    ",\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02" +
    "H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02" +
    "d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02" +
    "\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02" +
    "\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02" +
    "\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\x02\n" +
    "\b\x0299==??AACCEE\x05\x02..<<>>\x05\x02@@BBDD\x04\x02<<>>\x03\x02FI\x03" +
    "\x02:;\x03\x02OP\x06\x02\x03\x06\t\r\x0F\x1D\x1F#\x02\u0475\x02\xB5\x03" +
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
    "\\\u0244\x03\x02\x02\x02^\u0255\x03\x02\x02\x02`\u026E\x03\x02\x02\x02" +
    "b\u027C\x03\x02\x02\x02d\u0287\x03\x02\x02\x02f\u0290\x03\x02\x02\x02" +
    "h\u0297\x03\x02\x02\x02j\u029A\x03\x02\x02\x02l\u02A0\x03\x02\x02\x02" +
    "n\u02B5\x03\x02\x02\x02p\u02B8\x03\x02\x02\x02r\u02BF\x03\x02\x02\x02" +
    "t\u02C4\x03\x02\x02\x02v\u02CC\x03\x02\x02\x02x\u02D1\x03\x02\x02\x02" +
    "z\u02D4\x03\x02\x02\x02|\u02DA\x03\x02\x02\x02~\u02E2\x03\x02\x02\x02" +
    "\x80\u02F3\x03\x02\x02\x02\x82\u0304\x03\x02\x02\x02\x84\u0306\x03\x02" +
    "\x02\x02\x86\u0314\x03\x02\x02\x02\x88\u0316\x03\x02\x02\x02\x8A\u033A" +
    "\x03\x02\x02\x02\x8C\u033C\x03\x02\x02\x02\x8E\u0345\x03\x02\x02\x02\x90" +
    "\u034C\x03\x02\x02\x02\x92\u0370\x03\x02\x02\x02\x94\u03B3\x03\x02\x02" +
    "\x02\x96\u03B5\x03\x02\x02\x02\x98\u03BC\x03\x02\x02\x02\x9A\u03C7\x03" +
    "\x02\x02\x02\x9C\u03CB\x03\x02\x02\x02\x9E\u03DA\x03\x02\x02\x02\xA0\u03DE" +
    "\x03\x02\x02\x02\xA2\u03E2\x03\x02\x02\x02\xA4\u03F0\x03\x02\x02\x02\xA6" +
    "\u03F2\x03\x02\x02\x02\xA8\u03FA\x03\x02\x02\x02\xAA\u0402\x03\x02\x02" +
    "\x02\xAC\u040A\x03\x02\x02\x02\xAE\u0410\x03\x02\x02\x02\xB0\u0413\x03" +
    "\x02\x02\x02\xB2\u0417\x03\x02\x02\x02\xB4\xB6\x05\xB0Y\x02\xB5\xB4\x03" +
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
    "\u01B4\u01B5\x03\x02\x02\x02\u01B5\u01B6\x07\f\x02\x02\u01B6\u01B8\x05" +
    "z>\x02\u01B7\u01B9\x05x=\x02\u01B8\u01B7\x03\x02\x02\x02\u01B8\u01B9\x03" +
    "\x02\x02\x02";
CWScriptParser._serializedATNSegment1 = "\u01B95\x03\x02\x02\x02\u01BA\u01BC\x05\xB0Y\x02\u01BB\u01BA\x03\x02\x02" +
    "\x02\u01BB\u01BC\x03\x02\x02\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD\u01BE" +
    "\x07\r\x02\x02\u01BE\u01BF\x05t;\x02\u01BF7\x03\x02\x02\x02\u01C0\u01C1" +
    "\x07\r\x02\x02\u01C1\u01C5\x07)\x02\x02\u01C2\u01C4\x05:\x1E\x02\u01C3" +
    "\u01C2\x03\x02\x02\x02\u01C4\u01C7\x03\x02\x02\x02\u01C5\u01C3\x03\x02" +
    "\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01C8\x03\x02\x02\x02\u01C7" +
    "\u01C5\x03\x02\x02\x02\u01C8\u01C9\x07*\x02\x02\u01C99\x03\x02\x02\x02" +
    "\u01CA\u01CC\x05\xB0Y\x02\u01CB\u01CA\x03\x02\x02\x02\u01CB\u01CC\x03" +
    "\x02\x02\x02\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01CE\x05t;\x02\u01CE;" +
    "\x03\x02\x02\x02\u01CF\u01D1\x05\xB0Y\x02\u01D0\u01CF\x03\x02\x02\x02" +
    "\u01D0\u01D1\x03\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2\u01D3\x07" +
    "\r\x02\x02\u01D3\u01D4\x05r:\x02\u01D4=\x03\x02\x02\x02\u01D5\u01D6\x07" +
    "\r\x02\x02\u01D6\u01DA\x07)\x02\x02\u01D7\u01D9\x05@!\x02\u01D8\u01D7" +
    "\x03\x02\x02\x02\u01D9\u01DC\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02" +
    "\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DD\x03\x02\x02\x02\u01DC\u01DA\x03" +
    "\x02\x02\x02\u01DD\u01DE\x07*\x02\x02\u01DE?\x03\x02\x02\x02\u01DF\u01E1" +
    "\x05\xB0Y\x02\u01E0\u01DF\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02" +
    "\u01E1\u01E2\x03\x02\x02\x02\u01E2\u01E3\x05r:\x02\u01E3A\x03\x02\x02" +
    "\x02\u01E4\u01E6\x05\xB0Y\x02\u01E5\u01E4\x03\x02\x02\x02\u01E5\u01E6" +
    "\x03\x02\x02\x02\u01E6\u01E7\x03\x02\x02\x02\u01E7\u01E8\x07\x0F\x02\x02" +
    "\u01E8\u01E9\x05t;\x02\u01E9C\x03\x02\x02\x02\u01EA\u01EB\x07\x0F\x02" +
    "\x02\u01EB\u01EF\x07)\x02\x02\u01EC\u01EE\x05F$\x02\u01ED\u01EC\x03\x02" +
    "\x02\x02\u01EE\u01F1\x03\x02\x02\x02\u01EF\u01ED\x03\x02\x02\x02\u01EF" +
    "\u01F0\x03\x02\x02\x02\u01F0\u01F2\x03\x02\x02\x02\u01F1\u01EF\x03\x02" +
    "\x02\x02\u01F2\u01F3\x07*\x02\x02\u01F3E\x03\x02\x02\x02\u01F4\u01F6\x05" +
    "\xB0Y\x02\u01F5\u01F4\x03\x02\x02\x02\u01F5\u01F6\x03\x02\x02\x02\u01F6" +
    "\u01F7\x03\x02\x02\x02\u01F7\u01F8\x05t;\x02\u01F8G\x03\x02\x02\x02\u01F9" +
    "\u01FB\x05\xB0Y\x02\u01FA\u01F9\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02" +
    "\x02\u01FB\u01FC\x03\x02\x02\x02\u01FC\u01FD\x07\x0F\x02\x02\u01FD\u01FE" +
    "\x05r:\x02\u01FEI\x03\x02\x02\x02\u01FF\u0200\x07\x0F\x02\x02\u0200\u0204" +
    "\x07)\x02\x02\u0201\u0203\x05L\'\x02\u0202\u0201\x03\x02\x02\x02\u0203" +
    "\u0206\x03\x02\x02\x02\u0204\u0202\x03\x02\x02\x02\u0204\u0205\x03\x02" +
    "\x02\x02\u0205\u0207\x03\x02\x02\x02\u0206\u0204\x03\x02\x02\x02\u0207" +
    "\u0208\x07*\x02\x02\u0208K\x03\x02\x02\x02\u0209\u020B\x05\xB0Y\x02\u020A" +
    "\u0209\x03\x02\x02\x02\u020A\u020B\x03\x02\x02\x02\u020B\u020C\x03\x02" +
    "\x02\x02\u020C\u020D\x05r:\x02\u020DM\x03\x02\x02\x02\u020E\u0210\x05" +
    "\xB0Y\x02\u020F\u020E\x03\x02\x02\x02\u020F\u0210\x03\x02\x02\x02\u0210" +
    "\u0211\x03\x02\x02\x02\u0211\u0212\x07\x10\x02\x02\u0212\u0214\x05z>\x02" +
    "\u0213\u0215\x05x=\x02\u0214\u0213\x03\x02\x02\x02\u0214\u0215\x03\x02" +
    "\x02\x02\u0215\u0216\x03\x02\x02\x02\u0216\u0217\x05\x80A\x02\u0217O\x03" +
    "\x02\x02\x02\u0218\u021A\x05\xB0Y\x02\u0219\u0218\x03\x02\x02\x02\u0219" +
    "\u021A\x03\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B\u021C\x07\x10" +
    "\x02\x02\u021C\u021E\x05z>\x02\u021D\u021F\x05x=\x02\u021E\u021D\x03\x02" +
    "\x02\x02\u021E\u021F\x03\x02\x02\x02\u021FQ\x03\x02\x02\x02\u0220\u0223" +
    "\x05T+\x02\u0221\u0223\x05V,\x02\u0222\u0220\x03\x02\x02\x02\u0222\u0221" +
    "\x03\x02\x02\x02\u0223S\x03\x02\x02\x02\u0224\u0227\x05\xAEX\x02\u0225" +
    "\u0228\x05Z.\x02\u0226\u0228\x05\\/\x02\u0227\u0225\x03\x02\x02\x02\u0227" +
    "\u0226\x03\x02\x02\x02\u0228U\x03\x02\x02\x02\u0229\u022A\x05\xAEX\x02" +
    "\u022A\u022B\x05X-\x02\u022BW\x03\x02\x02\x02\u022C\u022D\x07%\x02\x02" +
    "\u022D\u0232\x05`1\x02\u022E\u022F\x07,\x02\x02\u022F\u0231\x05`1\x02" +
    "\u0230\u022E\x03\x02\x02\x02\u0231\u0234\x03\x02\x02\x02\u0232\u0230\x03" +
    "\x02\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233\u0235\x03\x02\x02\x02\u0234" +
    "\u0232\x03\x02\x02\x02\u0235\u0236\x07&\x02\x02\u0236Y\x03\x02\x02\x02" +
    "\u0237\u0240\x07%\x02\x02\u0238\u023D\x05^0\x02\u0239\u023A\x07,\x02\x02" +
    "\u023A\u023C\x05^0\x02\u023B\u0239\x03\x02\x02\x02\u023C\u023F\x03\x02" +
    "\x02\x02\u023D\u023B\x03\x02\x02\x02\u023D\u023E\x03\x02\x02\x02\u023E" +
    "\u0241\x03\x02\x02\x02\u023F\u023D\x03\x02\x02\x02\u0240\u0238\x03\x02" +
    "\x02\x02\u0240\u0241\x03\x02\x02\x02\u0241\u0242\x03\x02\x02\x02\u0242" +
    "\u0243\x07&\x02\x02\u0243[\x03\x02\x02\x02\u0244\u0250\x07)\x02\x02\u0245" +
    "\u024A\x05^0\x02\u0246\u0247\x07,\x02\x02\u0247\u0249\x05^0\x02\u0248" +
    "\u0246\x03\x02\x02\x02\u0249\u024C\x03\x02\x02\x02\u024A\u0248\x03\x02" +
    "\x02\x02\u024A\u024B\x03\x02\x02\x02\u024B\u024E\x03\x02\x02\x02\u024C" +
    "\u024A\x03\x02\x02\x02\u024D\u024F\x07,\x02\x02\u024E\u024D\x03\x02\x02" +
    "\x02\u024E\u024F\x03\x02\x02\x02\u024F\u0251\x03\x02\x02\x02\u0250\u0245" +
    "\x03\x02\x02\x02\u0250\u0251\x03\x02\x02\x02\u0251\u0252\x03\x02\x02\x02" +
    "\u0252\u0253\x07*\x02\x02\u0253]\x03\x02\x02\x02\u0254\u0256\x05\xB0Y" +
    "\x02\u0255\u0254\x03\x02\x02\x02\u0255\u0256\x03\x02\x02\x02\u0256\u0257" +
    "\x03\x02\x02\x02\u0257\u0259\x05\xAEX\x02\u0258\u025A\x07-\x02\x02\u0259" +
    "\u0258\x03\x02\x02\x02\u0259\u025A\x03\x02\x02\x02\u025A\u025B\x03\x02" +
    "\x02\x02\u025B\u025C\x07/\x02\x02\u025C\u025D\x05`1\x02\u025D_\x03\x02" +
    "\x02\x02\u025E\u025F\b1\x01\x02\u025F\u026F\x05f4\x02\u0260\u0261\x07" +
    "%\x02\x02\u0261\u0266\x05`1\x02\u0262\u0263\x07,\x02\x02\u0263\u0265\x05" +
    "`1\x02\u0264\u0262\x03\x02\x02\x02\u0265\u0268\x03\x02\x02\x02\u0266\u0264" +
    "\x03\x02\x02\x02\u0266\u0267\x03\x02\x02\x02\u0267\u0269\x03\x02\x02\x02" +
    "\u0268\u0266\x03\x02\x02\x02\u0269\u026A\x07&\x02\x02\u026A\u026F\x03" +
    "\x02\x02\x02\u026B\u026C\x074\x02\x02\u026C\u026F\x05`1\x04\u026D\u026F" +
    "\x05h5\x02\u026E\u025E\x03\x02\x02\x02\u026E\u0260\x03\x02\x02\x02\u026E" +
    "\u026B\x03\x02\x02\x02\u026E\u026D\x03\x02\x02\x02\u026F\u0279\x03\x02" +
    "\x02\x02\u0270\u0271\f\b\x02\x02\u0271\u0278\x05b2\x02\u0272\u0273\f\x06" +
    "\x02\x02\u0273\u0278\x07-\x02\x02\u0274\u0275\f\x05\x02\x02\u0275\u0276" +
    "\x07\'\x02\x02\u0276\u0278\x07(\x02\x02\u0277\u0270\x03\x02\x02\x02\u0277" +
    "\u0272\x03\x02\x02\x02\u0277\u0274\x03\x02\x02\x02\u0278\u027B\x03\x02" +
    "\x02\x02\u0279\u0277\x03\x02\x02\x02\u0279\u027A\x03\x02\x02\x02\u027A" +
    "a\x03\x02\x02\x02\u027B\u0279\x03\x02\x02\x02\u027C\u027D\x07F\x02\x02" +
    "\u027D\u0282\x05`1\x02\u027E\u027F\x07,\x02\x02\u027F\u0281\x05`1\x02" +
    "\u0280\u027E\x03\x02\x02\x02\u0281\u0284\x03\x02\x02\x02\u0282\u0280\x03" +
    "\x02\x02\x02\u0282\u0283\x03\x02\x02\x02\u0283\u0285\x03\x02\x02\x02\u0284" +
    "\u0282\x03\x02\x02\x02\u0285\u0286\x07H\x02\x02\u0286c\x03\x02\x02\x02" +
    "\u0287\u028C\x05\xAEX\x02\u0288\u0289\x070\x02\x02\u0289\u028B\x05\xAE" +
    "X\x02\u028A\u0288\x03\x02\x02\x02\u028B\u028E\x03\x02\x02\x02\u028C\u028A" +
    "\x03\x02\x02\x02\u028C\u028D\x03\x02\x02\x02\u028De\x03\x02\x02\x02\u028E" +
    "\u028C\x03\x02\x02\x02\u028F\u0291\x070\x02\x02\u0290\u028F\x03\x02\x02" +
    "\x02\u0290\u0291\x03\x02\x02\x02\u0291\u0292\x03\x02\x02\x02\u0292\u0293" +
    "\x05d3\x02\u0293g\x03\x02\x02\x02\u0294\u0298\x05j6\x02\u0295\u0298\x05" +
    "l7\x02\u0296\u0298\x05p9\x02\u0297\u0294\x03\x02\x02\x02\u0297\u0295\x03" +
    "\x02\x02\x02\u0297\u0296\x03\x02\x02\x02\u0298i\x03\x02\x02\x02\u0299" +
    "\u029B\x05\xB0Y\x02\u029A\u0299\x03\x02\x02\x02\u029A\u029B\x03\x02\x02" +
    "\x02\u029B\u029C\x03\x02\x02\x02\u029C\u029D\x07 \x02\x02\u029D\u029E" +
    "\x05R*\x02\u029Ek\x03\x02\x02\x02\u029F\u02A1\x05\xB0Y\x02\u02A0\u029F" +
    "\x03\x02\x02\x02\u02A0\u02A1\x03\x02\x02\x02\u02A1\u02A2\x03\x02\x02\x02" +
    "\u02A2\u02A3\x07!\x02\x02\u02A3\u02A4\x05\xAEX\x02\u02A4\u02A5\x07)\x02" +
    "\x02\u02A5\u02A6\x05n8\x02\u02A6\u02A7\x07*\x02\x02\u02A7m\x03\x02\x02" +
    "\x02\u02A8\u02AF\x05R*\x02\u02A9\u02AB\x07,\x02\x02\u02AA\u02A9\x03\x02" +
    "\x02\x02\u02AA\u02AB\x03\x02\x02\x02\u02AB\u02AC\x03\x02\x02\x02\u02AC" +
    "\u02AE\x05R*\x02\u02AD\u02AA\x03\x02\x02\x02\u02AE\u02B1\x03\x02\x02\x02" +
    "\u02AF\u02AD\x03\x02\x02\x02\u02AF\u02B0\x03\x02\x02\x02\u02B0\u02B3\x03" +
    "\x02\x02\x02\u02B1\u02AF\x03\x02\x02\x02\u02B2\u02B4\x07,\x02\x02\u02B3" +
    "\u02B2\x03\x02\x02\x02\u02B3\u02B4\x03\x02\x02\x02\u02B4\u02B6\x03\x02" +
    "\x02\x02\u02B5\u02A8\x03\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6" +
    "o\x03\x02\x02\x02\u02B7\u02B9\x05\xB0Y\x02\u02B8\u02B7\x03\x02\x02\x02" +
    "\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02BA\x03\x02\x02\x02\u02BA\u02BB\x07" +
    "\"\x02\x02\u02BB\u02BC\x05\xAEX\x02\u02BC\u02BD\x079\x02\x02\u02BD\u02BE" +
    "\x05`1\x02\u02BEq\x03\x02\x02\x02\u02BF\u02C0\x05\xAEX\x02\u02C0\u02C2" +
    "\x05z>\x02\u02C1\u02C3\x05x=\x02\u02C2\u02C1\x03\x02\x02\x02\u02C2\u02C3" +
    "\x03\x02\x02\x02\u02C3s\x03\x02\x02\x02\u02C4\u02C5\x05\xAEX\x02\u02C5" +
    "\u02C7\x05z>\x02\u02C6\u02C8\x05x=\x02\u02C7\u02C6\x03\x02\x02\x02\u02C7" +
    "\u02C8\x03\x02\x02\x02\u02C8\u02C9\x03\x02\x02\x02\u02C9\u02CA\x05\x80" +
    "A\x02\u02CAu\x03\x02\x02\x02\u02CB\u02CD\x05\xB0Y\x02\u02CC\u02CB\x03" +
    "\x02\x02\x02\u02CC\u02CD\x03\x02\x02\x02\u02CD\u02CE\x03\x02\x02\x02\u02CE" +
    "\u02CF\x07\x1C\x02\x02\u02CF\u02D0\x05t;\x02\u02D0w\x03\x02\x02\x02\u02D1" +
    "\u02D2\x075\x02\x02\u02D2\u02D3\x05`1\x02\u02D3y\x03\x02\x02\x02\u02D4" +
    "\u02D6\x07%\x02\x02\u02D5\u02D7\x05|?\x02\u02D6\u02D5\x03\x02\x02\x02" +
    "\u02D6\u02D7\x03\x02\x02\x02\u02D7\u02D8\x03\x02\x02\x02\u02D8\u02D9\x07" +
    "&\x02\x02\u02D9{\x03\x02\x02\x02\u02DA\u02DF\x05~@\x02\u02DB\u02DC\x07" +
    ",\x02\x02\u02DC\u02DE\x05~@\x02\u02DD\u02DB\x03\x02\x02\x02\u02DE\u02E1" +
    "\x03\x02\x02\x02\u02DF\u02DD\x03\x02\x02\x02\u02DF\u02E0\x03\x02\x02\x02" +
    "\u02E0}\x03\x02\x02\x02\u02E1\u02DF\x03\x02\x02\x02\u02E2\u02E4\x05\xAE" +
    "X\x02\u02E3\u02E5\x07-\x02\x02\u02E4\u02E3\x03\x02\x02\x02\u02E4\u02E5" +
    "\x03\x02\x02\x02\u02E5\u02E6\x03\x02\x02\x02\u02E6\u02E7\x07/\x02\x02" +
    "\u02E7\u02E8\x05`1\x02\u02E8\x7F\x03\x02\x02\x02\u02E9\u02ED\x07)\x02" +
    "\x02\u02EA\u02EC\x05\x82B\x02\u02EB\u02EA\x03\x02\x02\x02\u02EC\u02EF" +
    "\x03\x02\x02\x02\u02ED\u02EB\x03\x02\x02\x02\u02ED\u02EE\x03\x02\x02\x02" +
    "\u02EE\u02F0\x03\x02\x02\x02\u02EF\u02ED\x03\x02\x02\x02\u02F0\u02F4\x07" +
    "*\x02\x02\u02F1\u02F2\x076\x02\x02\u02F2\u02F4\x05\x82B\x02\u02F3\u02E9" +
    "\x03\x02\x02\x02\u02F3\u02F1\x03\x02\x02\x02\u02F4\x81\x03\x02\x02\x02" +
    "\u02F5\u0305\x05\x84C\x02\u02F6\u0305\x05\x88E\x02\u02F7\u0305\x05\x9C" +
    "O\x02\u02F8\u0305\x05\xA4S\x02\u02F9\u02FA\x07\r\x02\x02\u02FA\u0305\x05" +
    "\x92J\x02\u02FB\u02FC\x07\x0E\x02\x02\u02FC\u0305\x05\x90I\x02\u02FD\u02FE" +
    "\x07#\x02\x02\u02FE\u0305\x05\x92J\x02\u02FF\u0300\x07\x1F\x02\x02\u0300" +
    "\u0305\x05\x92J\x02\u0301\u0302\x07\x1E\x02\x02\u0302\u0305\x05\x92J\x02" +
    "\u0303\u0305\x05\x92J\x02\u0304\u02F5\x03\x02\x02\x02\u0304\u02F6\x03" +
    "\x02\x02\x02\u0304\u02F7\x03\x02\x02\x02\u0304\u02F8\x03\x02\x02\x02\u0304" +
    "\u02F9\x03\x02\x02\x02\u0304\u02FB\x03\x02\x02\x02\u0304\u02FD\x03\x02" +
    "\x02\x02\u0304\u02FF\x03\x02\x02\x02\u0304\u0301\x03\x02\x02\x02\u0304" +
    "\u0303\x03\x02\x02\x02\u0305\x83\x03\x02\x02\x02\u0306\u0307\x07\x1D\x02" +
    "\x02\u0307\u0308\x05\x86D\x02\u0308\u0309\x079\x02\x02\u0309\u030A\x05" +
    "\x92J\x02\u030A\x85\x03\x02\x02\x02\u030B\u030E\x05\xAEX\x02\u030C\u030D" +
    "\x07/\x02\x02\u030D\u030F\x05`1\x02\u030E\u030C\x03\x02\x02\x02\u030E" +
    "\u030F\x03\x02\x02\x02\u030F\u0315\x03\x02\x02\x02\u0310\u0311\x07)\x02" +
    "\x02\u0311\u0312\x05\xA6T\x02\u0312\u0313\x07*\x02\x02\u0313\u0315\x03" +
    "\x02\x02\x02\u0314\u030B\x03\x02\x02\x02\u0314\u0310\x03\x02\x02\x02\u0315" +
    "\x87\x03\x02\x02\x02\u0316\u0317\x05\x8AF\x02\u0317\u0318\t\x02\x02\x02" +
    "\u0318\u0319\x05\x92J\x02\u0319\x89\x03\x02\x02\x02\u031A\u031B\x07\x14" +
    "\x02\x02\u031B\u031C\x07+\x02\x02\u031C\u031E\x05\xAEX\x02\u031D\u031F" +
    "\x05\x8CG\x02\u031E\u031D\x03\x02\x02\x02\u031E\u031F\x03\x02\x02\x02" +
    "\u031F\u033B\x03\x02\x02\x02\u0320\u0321\x07\x14\x02\x02\u0321\u0322\x07" +
    "+\x02\x02\u0322\u0323\x05\xAEX\x02\u0323\u0324\x07\'\x02\x02\u0324\u0329" +
    "\x05\x92J\x02\u0325\u0326\x07,\x02\x02\u0326\u0328\x05\x92J\x02\u0327" +
    "\u0325\x03\x02\x02\x02\u0328\u032B\x03\x02\x02\x02\u0329\u0327\x03\x02" +
    "\x02\x02\u0329\u032A\x03\x02\x02\x02\u032A\u032C\x03\x02\x02\x02\u032B" +
    "\u0329\x03\x02\x02\x02\u032C\u032E\x07(\x02\x02\u032D\u032F\x05\x8CG\x02" +
    "\u032E\u032D\x03\x02\x02\x02\u032E\u032F\x03\x02\x02\x02\u032F\u033B\x03" +
    "\x02\x02\x02\u0330\u033B\x05\xAEX\x02\u0331\u0332\x05\x92J\x02\u0332\u0333" +
    "\x07+\x02\x02\u0333\u0334\x05\xAEX\x02\u0334\u033B\x03\x02\x02\x02\u0335" +
    "\u0336\x05\x92J\x02\u0336\u0337\x07\'\x02\x02\u0337\u0338\x05\x92J\x02" +
    "\u0338\u0339\x07(\x02\x02\u0339\u033B\x03\x02\x02\x02\u033A\u031A\x03" +
    "\x02\x02\x02\u033A\u0320\x03\x02\x02\x02\u033A\u0330\x03\x02\x02\x02\u033A" +
    "\u0331\x03\x02\x02\x02\u033A\u0335\x03\x02\x02\x02\u033B\x8B\x03\x02\x02" +
    "\x02\u033C\u033D\x07+\x02\x02\u033D\u0342\x05\x8EH\x02\u033E\u033F\x07" +
    "+\x02\x02\u033F\u0341\x05\x8EH\x02\u0340\u033E\x03\x02\x02\x02\u0341\u0344" +
    "\x03\x02\x02\x02\u0342\u0340\x03\x02\x02\x02\u0342\u0343\x03\x02\x02\x02" +
    "\u0343\x8D\x03\x02\x02\x02\u0344\u0342\x03\x02\x02\x02\u0345\u034A\x05" +
    "\xAEX\x02\u0346\u0347\x07\'\x02\x02\u0347\u0348\x05\x92J\x02\u0348\u0349" +
    "\x07(\x02\x02\u0349\u034B\x03\x02\x02\x02\u034A\u0346\x03\x02\x02\x02" +
    "\u034A\u034B\x03\x02\x02\x02\u034B\x8F\x03\x02\x02\x02\u034C\u034D\x07" +
    "2\x02\x02\u034D\u034E\x05\x92J\x02\u034E\u034F\x07+\x02\x02\u034F\u0350" +
    "\x05\xAEX\x02\u0350\u0351\x07%\x02\x02\u0351\u0352\x05\xA8U\x02\u0352" +
    "\u0353\x07&\x02\x02\u0353\x91\x03\x02\x02\x02\u0354\u0355\bJ\x01\x02\u0355" +
    "\u0356\x07%\x02\x02\u0356\u0357\x05\x92J\x02\u0357\u0358\x07&\x02\x02" +
    "\u0358\u0371\x03\x02\x02\x02\u0359\u035A\x07\x14\x02\x02\u035A\u035B\x07" +
    "+\x02\x02\u035B\u0371\x05\xAEX\x02\u035C\u035D\x07\x14\x02\x02\u035D\u035E" +
    "\x07+\x02\x02\u035E\u035F\x05\xAEX\x02\u035F\u0360\x07\'\x02\x02\u0360" +
    "\u0365\x05\x92J\x02\u0361\u0362\x07,\x02\x02\u0362\u0364\x05\x92J\x02" +
    "\u0363\u0361\x03\x02\x02\x02\u0364\u0367\x03\x02\x02\x02\u0365\u0363\x03" +
    "\x02\x02\x02\u0365\u0366\x03\x02\x02\x02\u0366\u0368\x03\x02\x02\x02\u0367" +
    "\u0365\x03\x02\x02\x02\u0368\u0369\x07(\x02\x02\u0369\u0371\x03\x02\x02" +
    "\x02\u036A\u036B\t\x03\x02\x02\u036B\u0371\x05\x92J\r\u036C\u0371\x05" +
    "\x9CO\x02\u036D\u036E\x07\x0F\x02\x02\u036E\u0371\x05\x92J\x04\u036F\u0371" +
    "\x05\x94K\x02\u0370\u0354\x03\x02\x02\x02\u0370\u0359\x03\x02\x02\x02" +
    "\u0370\u035C\x03\x02\x02\x02\u0370\u036A\x03\x02\x02\x02\u0370\u036C\x03" +
    "\x02\x02\x02\u0370\u036D\x03\x02\x02\x02\u0370\u036F\x03\x02\x02\x02\u0371" +
    "\u039E\x03\x02\x02\x02\u0372\u0373\f\f\x02\x02\u0373\u0374\x07J\x02\x02" +
    "\u0374\u039D\x05\x92J\r\u0375\u0376\f\v\x02\x02\u0376\u0377\t\x04\x02" +
    "\x02\u0377\u039D\x05\x92J\f\u0378\u0379\f\n\x02\x02\u0379\u037A\t\x05" +
    "\x02\x02\u037A\u039D\x05\x92J\v\u037B\u037C\f\t\x02\x02\u037C\u037D\t" +
    "\x06\x02\x02\u037D\u039D\x05\x92J\n\u037E\u037F\f\b\x02\x02\u037F\u0380" +
    "\t\x07\x02\x02\u0380\u039D\x05\x92J\t\u0381\u0382\f\x07\x02\x02\u0382" +
    "\u0383\x07\x18\x02\x02\u0383\u039D\x05\x92J\b\u0384\u0385\f\x06\x02\x02" +
    "\u0385\u0386\x07\x19\x02\x02\u0386\u039D\x05\x92J\x07\u0387\u0388\f\x11" +
    "\x02\x02\u0388\u0389\x07+\x02\x02\u0389\u039D\x05\xAEX\x02\u038A\u038B" +
    "\f\x10\x02\x02\u038B\u038C\x07\'\x02\x02\u038C\u038D\x05\x92J\x02\u038D" +
    "\u038E\x07,\x02\x02\u038E\u038F\x07(\x02\x02\u038F\u039D\x03\x02\x02\x02" +
    "\u0390\u0391\f\x0F\x02\x02\u0391\u0393\x07%\x02\x02\u0392\u0394\x05\xA8" +
    "U\x02\u0393\u0392\x03\x02\x02\x02\u0393\u0394\x03\x02\x02\x02\u0394\u0395" +
    "\x03\x02\x02\x02\u0395\u039D\x07&\x02\x02\u0396\u0397\f\x0E\x02\x02\u0397" +
    "\u0399\x07%\x02\x02\u0398\u039A\x05\xAAV\x02\u0399\u0398\x03\x02\x02\x02" +
    "\u0399\u039A\x03\x02\x02\x02\u039A\u039B\x03\x02\x02\x02\u039B\u039D\x07" +
    "&\x02\x02\u039C\u0372\x03\x02\x02\x02\u039C\u0375\x03\x02\x02\x02\u039C" +
    "\u0378\x03\x02\x02\x02\u039C\u037B\x03\x02\x02\x02\u039C\u037E\x03\x02" +
    "\x02\x02\u039C\u0381\x03\x02\x02\x02\u039C\u0384\x03\x02\x02\x02\u039C" +
    "\u0387\x03\x02\x02\x02\u039C\u038A\x03\x02\x02\x02\u039C\u0390\x03\x02" +
    "\x02\x02\u039C\u0396\x03\x02\x02\x02\u039D\u03A0\x03\x02\x02\x02\u039E" +
    "\u039C\x03\x02\x02\x02\u039E\u039F\x03\x02\x02\x02\u039F\x93\x03\x02\x02" +
    "\x02\u03A0\u039E\x03\x02\x02\x02\u03A1\u03A2\x07%\x02\x02\u03A2\u03B4" +
    "\x07&\x02\x02\u03A3\u03B4\x05\x96L\x02\u03A4\u03A5\x05f4\x02\u03A5\u03A6" +
    "\x07%\x02\x02\u03A6\u03A7\x05\xA8U\x02\u03A7\u03A8\x07&\x02\x02\u03A8" +
    "\u03B4\x03\x02\x02\x02\u03A9\u03AA\x07\'\x02\x02\u03AA\u03AB\x05\xA8U" +
    "\x02\u03AB\u03AC\x07(\x02\x02\u03AC\u03B4\x03\x02\x02\x02\u03AD\u03B4" +
    "\x07L\x02\x02\u03AE\u03B4\x07M\x02\x02\u03AF\u03B4\x07N\x02\x02\u03B0" +
    "\u03B4\x07\x1A\x02\x02\u03B1\u03B4\x07\x1B\x02\x02\u03B2\u03B4\x05\xAE" +
    "X\x02\u03B3\u03A1\x03\x02\x02\x02\u03B3\u03A3\x03\x02\x02\x02\u03B3\u03A4" +
    "\x03\x02\x02\x02\u03B3\u03A9\x03\x02\x02\x02\u03B3\u03AD\x03\x02\x02\x02" +
    "\u03B3\u03AE\x03\x02\x02\x02\u03B3\u03AF\x03\x02\x02\x02\u03B3\u03B0\x03" +
    "\x02\x02\x02\u03B3\u03B1\x03\x02\x02\x02\u03B3\u03B2\x03\x02\x02\x02\u03B4" +
    "\x95\x03\x02\x02\x02\u03B5\u03B6\x05f4\x02\u03B6\u03B8\x07)\x02\x02\u03B7" +
    "\u03B9\x05\x98M\x02\u03B8\u03B7\x03\x02\x02\x02\u03B8\u03B9\x03\x02\x02" +
    "\x02\u03B9\u03BA\x03\x02\x02\x02\u03BA\u03BB\x07*\x02\x02\u03BB\x97\x03" +
    "\x02\x02\x02\u03BC\u03C1\x05\x9AN\x02\u03BD\u03BE\x07,\x02\x02\u03BE\u03C0" +
    "\x05\x9AN\x02\u03BF\u03BD\x03\x02\x02\x02\u03C0\u03C3\x03\x02\x02\x02" +
    "\u03C1\u03BF\x03\x02\x02\x02\u03C1\u03C2\x03\x02\x02\x02\u03C2\u03C5\x03" +
    "\x02\x02\x02\u03C3\u03C1\x03\x02\x02\x02\u03C4\u03C6\x07,\x02\x02\u03C5" +
    "\u03C4\x03\x02\x02\x02\u03C5\u03C6\x03\x02\x02\x02\u03C6\x99\x03\x02\x02" +
    "\x02\u03C7\u03C8\x05\xAEX\x02\u03C8\u03C9\x07/\x02\x02\u03C9\u03CA\x05" +
    "\x92J\x02\u03CA\x9B\x03\x02\x02\x02\u03CB\u03CD\x05\x9EP\x02\u03CC\u03CE" +
    "\x05\xA0Q\x02\u03CD\u03CC\x03\x02\x02\x02\u03CD\u03CE\x03\x02\x02\x02" +
    "\u03CE\u03D0\x03\x02\x02\x02\u03CF\u03D1\x05\xA2R\x02\u03D0\u03CF\x03" +
    "\x02\x02\x02\u03D0\u03D1\x03\x02\x02\x02\u03D1\x9D\x03\x02\x02\x02\u03D2" +
    "\u03D3\x07\x16\x02\x02\u03D3\u03D4\x05\x92J\x02\u03D4\u03D5\x05\x80A\x02" +
    "\u03D5\u03DB\x03\x02\x02\x02\u03D6\u03D7\x07\x16\x02\x02\u03D7\u03D8\x05" +
    "\x84C\x02\u03D8\u03D9\x05\x80A\x02\u03D9\u03DB\x03\x02\x02\x02\u03DA\u03D2" +
    "\x03\x02\x02\x02\u03DA\u03D6\x03\x02\x02\x02\u03DB\x9F\x03\x02\x02\x02" +
    "\u03DC\u03DD\x07\x17\x02\x02\u03DD\u03DF\x05\x9EP\x02\u03DE\u03DC\x03" +
    "\x02\x02\x02\u03DF\u03E0\x03\x02\x02\x02\u03E0\u03DE\x03\x02\x02\x02\u03E0" +
    "\u03E1\x03\x02\x02\x02\u03E1\xA1\x03\x02\x02\x02\u03E2\u03E3\x07\x17\x02" +
    "\x02\u03E3\u03E4\x05\x80A\x02\u03E4\xA3\x03\x02\x02\x02\u03E5\u03E6\x07" +
    "\x11\x02\x02\u03E6\u03E7\x05\x86D\x02\u03E7\u03E8\x07\x12\x02\x02\u03E8" +
    "\u03E9\x05\x92J\x02\u03E9\u03EA\x05\x80A\x02\u03EA\u03F1\x03\x02\x02\x02" +
    "\u03EB\u03EC\x07\x11\x02\x02\u03EC\u03ED\x05\x92J\x02\u03ED\u03EE\x07" +
    "\x15\x02\x02\u03EE\u03EF\x05\x80A\x02\u03EF\u03F1\x03\x02\x02\x02\u03F0" +
    "\u03E5\x03\x02\x02\x02\u03F0\u03EB\x03\x02\x02\x02\u03F1\xA5\x03\x02\x02" +
    "\x02\u03F2\u03F7\x05\xAEX\x02\u03F3\u03F4\x07,\x02\x02\u03F4\u03F6\x05" +
    "\xAEX\x02\u03F5\u03F3\x03\x02\x02\x02\u03F6\u03F9\x03\x02\x02\x02\u03F7" +
    "\u03F5\x03\x02\x02\x02\u03F7\u03F8\x03\x02\x02\x02\u03F8\xA7\x03\x02\x02" +
    "\x02\u03F9\u03F7\x03\x02\x02\x02\u03FA\u03FF\x05\x92J\x02\u03FB\u03FC" +
    "\x07,\x02\x02\u03FC\u03FE\x05\x92J\x02\u03FD\u03FB\x03\x02\x02\x02\u03FE" +
    "\u0401\x03\x02\x02\x02\u03FF\u03FD\x03\x02\x02\x02\u03FF\u0400\x03\x02" +
    "\x02\x02\u0400\xA9\x03\x02\x02\x02\u0401\u03FF\x03\x02\x02\x02\u0402\u0407" +
    "\x05\xACW\x02\u0403\u0404\x07,\x02\x02\u0404\u0406\x05\xACW\x02\u0405" +
    "\u0403\x03\x02\x02\x02\u0406\u0409\x03\x02\x02\x02\u0407\u0405\x03\x02" +
    "\x02\x02\u0407\u0408\x03\x02\x02\x02\u0408\xAB\x03\x02\x02\x02\u0409\u0407" +
    "\x03\x02\x02\x02\u040A\u040B\x05\xAEX\x02\u040B\u040C\x07/\x02\x02\u040C" +
    "\u040D\x05\x92J\x02\u040D\xAD\x03\x02\x02\x02\u040E\u0411\x07K\x02\x02" +
    "\u040F\u0411\x05\xB2Z\x02\u0410\u040E\x03\x02\x02\x02\u0410\u040F\x03" +
    "\x02\x02\x02\u0411\xAF\x03\x02\x02\x02\u0412\u0414\t\b\x02\x02\u0413\u0412" +
    "\x03\x02\x02\x02\u0414\u0415\x03\x02\x02\x02\u0415\u0413\x03\x02\x02\x02" +
    "\u0415\u0416\x03\x02\x02\x02\u0416\xB1\x03\x02\x02\x02\u0417\u0418\t\t" +
    "\x02\x02\u0418\xB3\x03\x02\x02\x02z\xB5\xBA\xC0\xC3\xC9\xCD\xD2\xD8\xE4" +
    "\xE9\xEE\xF5\xFB\u0101\u010A\u011D\u012C\u012F\u013B\u013F\u0141\u0146" +
    "\u014B\u0157\u015B\u015D\u0162\u0167\u016C\u0170\u0179\u017D\u017F\u0184" +
    "\u0188\u018B\u019C\u01A4\u01A9\u01AE\u01B3\u01B8\u01BB\u01C5\u01CB\u01D0" +
    "\u01DA\u01E0\u01E5\u01EF\u01F5\u01FA\u0204\u020A\u020F\u0214\u0219\u021E" +
    "\u0222\u0227\u0232\u023D\u0240\u024A\u024E\u0250\u0255\u0259\u0266\u026E" +
    "\u0277\u0279\u0282\u028C\u0290\u0297\u029A\u02A0\u02AA\u02AF\u02B3\u02B5" +
    "\u02B8\u02C2\u02C7\u02CC\u02D6\u02DF\u02E4\u02ED\u02F3\u0304\u030E\u0314" +
    "\u031E\u0329\u032E\u033A\u0342\u034A\u0365\u0370\u0393\u0399\u039C\u039E" +
    "\u03B3\u03B8\u03C1\u03C5\u03CD\u03D0\u03DA\u03E0\u03F0\u03F7\u03FF\u0407" +
    "\u0410\u0415";
CWScriptParser._serializedATN = Utils.join([
    CWScriptParser._serializedATNSegment0,
    CWScriptParser._serializedATNSegment1,
], "");
class SourceFileContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    topLevelStmt(i) {
        if (i === undefined) {
            return this.getRuleContexts(TopLevelStmtContext);
        }
        else {
            return this.getRuleContext(i, TopLevelStmtContext);
        }
    }
    cwspec() {
        return this.tryGetRuleContext(0, CwspecContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_sourceFile; }
    // @Override
    enterRule(listener) {
        if (listener.enterSourceFile) {
            listener.enterSourceFile(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSourceFile) {
            listener.exitSourceFile(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSourceFile) {
            return visitor.visitSourceFile(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SourceFileContext = SourceFileContext;
class TopLevelStmtContext extends ParserRuleContext_1.ParserRuleContext {
    contractDefn() {
        return this.tryGetRuleContext(0, ContractDefnContext);
    }
    interfaceDefn() {
        return this.tryGetRuleContext(0, InterfaceDefnContext);
    }
    importStmt() {
        return this.tryGetRuleContext(0, ImportStmtContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_topLevelStmt; }
    // @Override
    enterRule(listener) {
        if (listener.enterTopLevelStmt) {
            listener.enterTopLevelStmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTopLevelStmt) {
            listener.exitTopLevelStmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTopLevelStmt) {
            return visitor.visitTopLevelStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TopLevelStmtContext = TopLevelStmtContext;
class ContractDefnContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    CONTRACT() { return this.getToken(CWScriptParser.CONTRACT, 0); }
    contractBody() {
        return this.getRuleContext(0, ContractBodyContext);
    }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    EXTENDS() { return this.tryGetToken(CWScriptParser.EXTENDS, 0); }
    IMPLEMENTS() { return this.tryGetToken(CWScriptParser.IMPLEMENTS, 0); }
    cwspec() {
        return this.tryGetRuleContext(0, CwspecContext);
    }
    identList(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentListContext);
        }
        else {
            return this.getRuleContext(i, IdentListContext);
        }
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_contractDefn; }
    // @Override
    enterRule(listener) {
        if (listener.enterContractDefn) {
            listener.enterContractDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitContractDefn) {
            listener.exitContractDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitContractDefn) {
            return visitor.visitContractDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ContractDefnContext = ContractDefnContext;
class InterfaceDefnContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    INTERFACE() { return this.getToken(CWScriptParser.INTERFACE, 0); }
    interfaceBody() {
        return this.getRuleContext(0, InterfaceBodyContext);
    }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    EXTENDS() { return this.tryGetToken(CWScriptParser.EXTENDS, 0); }
    cwspec() {
        return this.tryGetRuleContext(0, CwspecContext);
    }
    identList() {
        return this.tryGetRuleContext(0, IdentListContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_interfaceDefn; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterfaceDefn) {
            listener.enterInterfaceDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterfaceDefn) {
            listener.exitInterfaceDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInterfaceDefn) {
            return visitor.visitInterfaceDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InterfaceDefnContext = InterfaceDefnContext;
class ImportStmtContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_importStmt; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.ImportStmtContext = ImportStmtContext;
class ImportAllStmtContext extends ImportStmtContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    IMPORT() { return this.getToken(CWScriptParser.IMPORT, 0); }
    MUL() { return this.getToken(CWScriptParser.MUL, 0); }
    FROM() { return this.getToken(CWScriptParser.FROM, 0); }
    StringLiteral() { return this.tryGetToken(CWScriptParser.StringLiteral, 0); }
    // @Override
    enterRule(listener) {
        if (listener.enterImportAllStmt) {
            listener.enterImportAllStmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitImportAllStmt) {
            listener.exitImportAllStmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitImportAllStmt) {
            return visitor.visitImportAllStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ImportAllStmtContext = ImportAllStmtContext;
class ImportItemsStmtContext extends ImportStmtContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    IMPORT() { return this.getToken(CWScriptParser.IMPORT, 0); }
    FROM() { return this.getToken(CWScriptParser.FROM, 0); }
    StringLiteral() { return this.tryGetToken(CWScriptParser.StringLiteral, 0); }
    LPAREN() { return this.tryGetToken(CWScriptParser.LPAREN, 0); }
    RPAREN() { return this.tryGetToken(CWScriptParser.RPAREN, 0); }
    importList() {
        return this.tryGetRuleContext(0, ImportListContext);
    }
    COMMA() { return this.tryGetToken(CWScriptParser.COMMA, 0); }
    // @Override
    enterRule(listener) {
        if (listener.enterImportItemsStmt) {
            listener.enterImportItemsStmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitImportItemsStmt) {
            listener.exitImportItemsStmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitImportItemsStmt) {
            return visitor.visitImportItemsStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ImportItemsStmtContext = ImportItemsStmtContext;
class ImportListContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._importItems = [];
    }
    importItem(i) {
        if (i === undefined) {
            return this.getRuleContexts(ImportItemContext);
        }
        else {
            return this.getRuleContext(i, ImportItemContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_importList; }
    // @Override
    enterRule(listener) {
        if (listener.enterImportList) {
            listener.enterImportList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitImportList) {
            listener.exitImportList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitImportList) {
            return visitor.visitImportList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ImportListContext = ImportListContext;
class ImportItemContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ident(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }
        else {
            return this.getRuleContext(i, IdentContext);
        }
    }
    AS() { return this.tryGetToken(CWScriptParser.AS, 0); }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_importItem; }
    // @Override
    enterRule(listener) {
        if (listener.enterImportItem) {
            listener.enterImportItem(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitImportItem) {
            listener.exitImportItem(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitImportItem) {
            return visitor.visitImportItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ImportItemContext = ImportItemContext;
class ContractBodyContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LBRACE() { return this.getToken(CWScriptParser.LBRACE, 0); }
    RBRACE() { return this.getToken(CWScriptParser.RBRACE, 0); }
    contractItem(i) {
        if (i === undefined) {
            return this.getRuleContexts(ContractItemContext);
        }
        else {
            return this.getRuleContext(i, ContractItemContext);
        }
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_contractBody; }
    // @Override
    enterRule(listener) {
        if (listener.enterContractBody) {
            listener.enterContractBody(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitContractBody) {
            listener.exitContractBody(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitContractBody) {
            return visitor.visitContractBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ContractBodyContext = ContractBodyContext;
class InterfaceBodyContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LBRACE() { return this.getToken(CWScriptParser.LBRACE, 0); }
    RBRACE() { return this.getToken(CWScriptParser.RBRACE, 0); }
    interfaceItem(i) {
        if (i === undefined) {
            return this.getRuleContexts(InterfaceItemContext);
        }
        else {
            return this.getRuleContext(i, InterfaceItemContext);
        }
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_interfaceBody; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterfaceBody) {
            listener.enterInterfaceBody(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterfaceBody) {
            listener.exitInterfaceBody(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInterfaceBody) {
            return visitor.visitInterfaceBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InterfaceBodyContext = InterfaceBodyContext;
class ContractItemContext extends ParserRuleContext_1.ParserRuleContext {
    typeDefn() {
        return this.tryGetRuleContext(0, TypeDefnContext);
    }
    fnDefn() {
        return this.tryGetRuleContext(0, FnDefnContext);
    }
    errorDefn() {
        return this.tryGetRuleContext(0, ErrorDefnContext);
    }
    errorDefnBlock() {
        return this.tryGetRuleContext(0, ErrorDefnBlockContext);
    }
    eventDefn() {
        return this.tryGetRuleContext(0, EventDefnContext);
    }
    eventDefnBlock() {
        return this.tryGetRuleContext(0, EventDefnBlockContext);
    }
    stateDefn() {
        return this.tryGetRuleContext(0, StateDefnContext);
    }
    stateDefnBlock() {
        return this.tryGetRuleContext(0, StateDefnBlockContext);
    }
    instantiateDefn() {
        return this.tryGetRuleContext(0, InstantiateDefnContext);
    }
    execDefn() {
        return this.tryGetRuleContext(0, ExecDefnContext);
    }
    execDefnBlock() {
        return this.tryGetRuleContext(0, ExecDefnBlockContext);
    }
    queryDefn() {
        return this.tryGetRuleContext(0, QueryDefnContext);
    }
    queryDefnBlock() {
        return this.tryGetRuleContext(0, QueryDefnBlockContext);
    }
    migrateDefn() {
        return this.tryGetRuleContext(0, MigrateDefnContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_contractItem; }
    // @Override
    enterRule(listener) {
        if (listener.enterContractItem) {
            listener.enterContractItem(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitContractItem) {
            listener.exitContractItem(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitContractItem) {
            return visitor.visitContractItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ContractItemContext = ContractItemContext;
class InterfaceItemContext extends ParserRuleContext_1.ParserRuleContext {
    typeDefn() {
        return this.tryGetRuleContext(0, TypeDefnContext);
    }
    errorDefn() {
        return this.tryGetRuleContext(0, ErrorDefnContext);
    }
    errorDefnBlock() {
        return this.tryGetRuleContext(0, ErrorDefnBlockContext);
    }
    eventDefn() {
        return this.tryGetRuleContext(0, EventDefnContext);
    }
    eventDefnBlock() {
        return this.tryGetRuleContext(0, EventDefnBlockContext);
    }
    stateDefn() {
        return this.tryGetRuleContext(0, StateDefnContext);
    }
    stateDefnBlock() {
        return this.tryGetRuleContext(0, StateDefnBlockContext);
    }
    instantiateDecl() {
        return this.tryGetRuleContext(0, InstantiateDeclContext);
    }
    execDecl() {
        return this.tryGetRuleContext(0, ExecDeclContext);
    }
    execDeclBlock() {
        return this.tryGetRuleContext(0, ExecDeclBlockContext);
    }
    queryDecl() {
        return this.tryGetRuleContext(0, QueryDeclContext);
    }
    queryDeclBlock() {
        return this.tryGetRuleContext(0, QueryDeclBlockContext);
    }
    migrateDecl() {
        return this.tryGetRuleContext(0, MigrateDeclContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_interfaceItem; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterfaceItem) {
            listener.enterInterfaceItem(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterfaceItem) {
            listener.exitInterfaceItem(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInterfaceItem) {
            return visitor.visitInterfaceItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InterfaceItemContext = InterfaceItemContext;
class ErrorDefnContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ERROR() { return this.getToken(CWScriptParser.ERROR, 0); }
    enumVariant_struct() {
        return this.getRuleContext(0, EnumVariant_structContext);
    }
    cwspec() {
        return this.tryGetRuleContext(0, CwspecContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_errorDefn; }
    // @Override
    enterRule(listener) {
        if (listener.enterErrorDefn) {
            listener.enterErrorDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitErrorDefn) {
            listener.exitErrorDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitErrorDefn) {
            return visitor.visitErrorDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ErrorDefnContext = ErrorDefnContext;
class ErrorDefnBlockContext extends ParserRuleContext_1.ParserRuleContext {
    ERROR() { return this.getToken(CWScriptParser.ERROR, 0); }
    LBRACE() { return this.getToken(CWScriptParser.LBRACE, 0); }
    RBRACE() { return this.getToken(CWScriptParser.RBRACE, 0); }
    errorDefnBlock_item(i) {
        if (i === undefined) {
            return this.getRuleContexts(ErrorDefnBlock_itemContext);
        }
        else {
            return this.getRuleContext(i, ErrorDefnBlock_itemContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_errorDefnBlock; }
    // @Override
    enterRule(listener) {
        if (listener.enterErrorDefnBlock) {
            listener.enterErrorDefnBlock(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitErrorDefnBlock) {
            listener.exitErrorDefnBlock(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitErrorDefnBlock) {
            return visitor.visitErrorDefnBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ErrorDefnBlockContext = ErrorDefnBlockContext;
class ErrorDefnBlock_itemContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    enumVariant_struct() {
        return this.getRuleContext(0, EnumVariant_structContext);
    }
    cwspec() {
        return this.tryGetRuleContext(0, CwspecContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_errorDefnBlock_item; }
    // @Override
    enterRule(listener) {
        if (listener.enterErrorDefnBlock_item) {
            listener.enterErrorDefnBlock_item(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitErrorDefnBlock_item) {
            listener.exitErrorDefnBlock_item(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitErrorDefnBlock_item) {
            return visitor.visitErrorDefnBlock_item(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ErrorDefnBlock_itemContext = ErrorDefnBlock_itemContext;
class EventDefnContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EVENT() { return this.getToken(CWScriptParser.EVENT, 0); }
    enumVariant_struct() {
        return this.getRuleContext(0, EnumVariant_structContext);
    }
    cwspec() {
        return this.tryGetRuleContext(0, CwspecContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_eventDefn; }
    // @Override
    enterRule(listener) {
        if (listener.enterEventDefn) {
            listener.enterEventDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEventDefn) {
            listener.exitEventDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEventDefn) {
            return visitor.visitEventDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EventDefnContext = EventDefnContext;
class EventDefnBlockContext extends ParserRuleContext_1.ParserRuleContext {
    EVENT() { return this.getToken(CWScriptParser.EVENT, 0); }
    LBRACE() { return this.getToken(CWScriptParser.LBRACE, 0); }
    RBRACE() { return this.getToken(CWScriptParser.RBRACE, 0); }
    eventDefnBlock_item(i) {
        if (i === undefined) {
            return this.getRuleContexts(EventDefnBlock_itemContext);
        }
        else {
            return this.getRuleContext(i, EventDefnBlock_itemContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_eventDefnBlock; }
    // @Override
    enterRule(listener) {
        if (listener.enterEventDefnBlock) {
            listener.enterEventDefnBlock(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEventDefnBlock) {
            listener.exitEventDefnBlock(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEventDefnBlock) {
            return visitor.visitEventDefnBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EventDefnBlockContext = EventDefnBlockContext;
class EventDefnBlock_itemContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    enumVariant_struct() {
        return this.getRuleContext(0, EnumVariant_structContext);
    }
    cwspec() {
        return this.tryGetRuleContext(0, CwspecContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_eventDefnBlock_item; }
    // @Override
    enterRule(listener) {
        if (listener.enterEventDefnBlock_item) {
            listener.enterEventDefnBlock_item(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEventDefnBlock_item) {
            listener.exitEventDefnBlock_item(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEventDefnBlock_item) {
            return visitor.visitEventDefnBlock_item(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EventDefnBlock_itemContext = EventDefnBlock_itemContext;
class StateDefnContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_stateDefn; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.StateDefnContext = StateDefnContext;
class StateItemDefnContext extends StateDefnContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    STATE() { return this.getToken(CWScriptParser.STATE, 0); }
    itemDefn() {
        return this.tryGetRuleContext(0, ItemDefnContext);
    }
    cwspec() {
        return this.tryGetRuleContext(0, CwspecContext);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterStateItemDefn) {
            listener.enterStateItemDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStateItemDefn) {
            listener.exitStateItemDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStateItemDefn) {
            return visitor.visitStateItemDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StateItemDefnContext = StateItemDefnContext;
class StateMapDefnContext extends StateDefnContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    STATE() { return this.getToken(CWScriptParser.STATE, 0); }
    mapDefn() {
        return this.getRuleContext(0, MapDefnContext);
    }
    cwspec() {
        return this.tryGetRuleContext(0, CwspecContext);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterStateMapDefn) {
            listener.enterStateMapDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStateMapDefn) {
            listener.exitStateMapDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStateMapDefn) {
            return visitor.visitStateMapDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StateMapDefnContext = StateMapDefnContext;
class StateDefnBlockContext extends ParserRuleContext_1.ParserRuleContext {
    STATE() { return this.getToken(CWScriptParser.STATE, 0); }
    LBRACE() { return this.getToken(CWScriptParser.LBRACE, 0); }
    RBRACE() { return this.getToken(CWScriptParser.RBRACE, 0); }
    stateDefnBlock_item(i) {
        if (i === undefined) {
            return this.getRuleContexts(StateDefnBlock_itemContext);
        }
        else {
            return this.getRuleContext(i, StateDefnBlock_itemContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_stateDefnBlock; }
    // @Override
    enterRule(listener) {
        if (listener.enterStateDefnBlock) {
            listener.enterStateDefnBlock(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStateDefnBlock) {
            listener.exitStateDefnBlock(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStateDefnBlock) {
            return visitor.visitStateDefnBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StateDefnBlockContext = StateDefnBlockContext;
class StateDefnBlock_itemContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_stateDefnBlock_item; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.StateDefnBlock_itemContext = StateDefnBlock_itemContext;
class StateBlockItemDefnContext extends StateDefnBlock_itemContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    itemDefn() {
        return this.tryGetRuleContext(0, ItemDefnContext);
    }
    cwspec() {
        return this.tryGetRuleContext(0, CwspecContext);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterStateBlockItemDefn) {
            listener.enterStateBlockItemDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStateBlockItemDefn) {
            listener.exitStateBlockItemDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStateBlockItemDefn) {
            return visitor.visitStateBlockItemDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StateBlockItemDefnContext = StateBlockItemDefnContext;
class StateBlockMapDefnContext extends StateDefnBlock_itemContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    mapDefn() {
        return this.tryGetRuleContext(0, MapDefnContext);
    }
    cwspec() {
        return this.tryGetRuleContext(0, CwspecContext);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterStateBlockMapDefn) {
            listener.enterStateBlockMapDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStateBlockMapDefn) {
            listener.exitStateBlockMapDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStateBlockMapDefn) {
            return visitor.visitStateBlockMapDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StateBlockMapDefnContext = StateBlockMapDefnContext;
class ItemDefnContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    COLON() { return this.getToken(CWScriptParser.COLON, 0); }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    typeExpr() {
        return this.tryGetRuleContext(0, TypeExprContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_itemDefn; }
    // @Override
    enterRule(listener) {
        if (listener.enterItemDefn) {
            listener.enterItemDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitItemDefn) {
            listener.exitItemDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitItemDefn) {
            return visitor.visitItemDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ItemDefnContext = ItemDefnContext;
class MapDefnContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    COLON() { return this.getToken(CWScriptParser.COLON, 0); }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    mapDefnKeys() {
        return this.tryGetRuleContext(0, MapDefnKeysContext);
    }
    typeExpr() {
        return this.tryGetRuleContext(0, TypeExprContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_mapDefn; }
    // @Override
    enterRule(listener) {
        if (listener.enterMapDefn) {
            listener.enterMapDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMapDefn) {
            listener.exitMapDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMapDefn) {
            return visitor.visitMapDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MapDefnContext = MapDefnContext;
class MapDefnKeysContext extends ParserRuleContext_1.ParserRuleContext {
    LBRACK() { return this.getToken(CWScriptParser.LBRACK, 0); }
    mapDefnKey(i) {
        if (i === undefined) {
            return this.getRuleContexts(MapDefnKeyContext);
        }
        else {
            return this.getRuleContext(i, MapDefnKeyContext);
        }
    }
    RBRACK() { return this.getToken(CWScriptParser.RBRACK, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_mapDefnKeys; }
    // @Override
    enterRule(listener) {
        if (listener.enterMapDefnKeys) {
            listener.enterMapDefnKeys(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMapDefnKeys) {
            listener.exitMapDefnKeys(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMapDefnKeys) {
            return visitor.visitMapDefnKeys(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MapDefnKeysContext = MapDefnKeysContext;
class MapDefnKeyContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    COLON() { return this.tryGetToken(CWScriptParser.COLON, 0); }
    typeExpr() {
        return this.tryGetRuleContext(0, TypeExprContext);
    }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_mapDefnKey; }
    // @Override
    enterRule(listener) {
        if (listener.enterMapDefnKey) {
            listener.enterMapDefnKey(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMapDefnKey) {
            listener.exitMapDefnKey(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMapDefnKey) {
            return visitor.visitMapDefnKey(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MapDefnKeyContext = MapDefnKeyContext;
class InstantiateDefnContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    INSTANTIATE() { return this.getToken(CWScriptParser.INSTANTIATE, 0); }
    fnArgs() {
        return this.getRuleContext(0, FnArgsContext);
    }
    fnBody() {
        return this.getRuleContext(0, FnBodyContext);
    }
    fnType() {
        return this.tryGetRuleContext(0, FnTypeContext);
    }
    cwspec() {
        return this.tryGetRuleContext(0, CwspecContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_instantiateDefn; }
    // @Override
    enterRule(listener) {
        if (listener.enterInstantiateDefn) {
            listener.enterInstantiateDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInstantiateDefn) {
            listener.exitInstantiateDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInstantiateDefn) {
            return visitor.visitInstantiateDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InstantiateDefnContext = InstantiateDefnContext;
class InstantiateDeclContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    INSTANTIATE() { return this.getToken(CWScriptParser.INSTANTIATE, 0); }
    fnArgs() {
        return this.getRuleContext(0, FnArgsContext);
    }
    fnType() {
        return this.tryGetRuleContext(0, FnTypeContext);
    }
    cwspec() {
        return this.tryGetRuleContext(0, CwspecContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_instantiateDecl; }
    // @Override
    enterRule(listener) {
        if (listener.enterInstantiateDecl) {
            listener.enterInstantiateDecl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInstantiateDecl) {
            listener.exitInstantiateDecl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInstantiateDecl) {
            return visitor.visitInstantiateDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InstantiateDeclContext = InstantiateDeclContext;
class ExecDefnContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EXEC() { return this.getToken(CWScriptParser.EXEC, 0); }
    namedFnDefn() {
        return this.getRuleContext(0, NamedFnDefnContext);
    }
    cwspec() {
        return this.tryGetRuleContext(0, CwspecContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_execDefn; }
    // @Override
    enterRule(listener) {
        if (listener.enterExecDefn) {
            listener.enterExecDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExecDefn) {
            listener.exitExecDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExecDefn) {
            return visitor.visitExecDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExecDefnContext = ExecDefnContext;
class ExecDefnBlockContext extends ParserRuleContext_1.ParserRuleContext {
    EXEC() { return this.getToken(CWScriptParser.EXEC, 0); }
    LBRACE() { return this.getToken(CWScriptParser.LBRACE, 0); }
    RBRACE() { return this.getToken(CWScriptParser.RBRACE, 0); }
    execDefnBlock_item(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExecDefnBlock_itemContext);
        }
        else {
            return this.getRuleContext(i, ExecDefnBlock_itemContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_execDefnBlock; }
    // @Override
    enterRule(listener) {
        if (listener.enterExecDefnBlock) {
            listener.enterExecDefnBlock(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExecDefnBlock) {
            listener.exitExecDefnBlock(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExecDefnBlock) {
            return visitor.visitExecDefnBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExecDefnBlockContext = ExecDefnBlockContext;
class ExecDefnBlock_itemContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    namedFnDefn() {
        return this.getRuleContext(0, NamedFnDefnContext);
    }
    cwspec() {
        return this.tryGetRuleContext(0, CwspecContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_execDefnBlock_item; }
    // @Override
    enterRule(listener) {
        if (listener.enterExecDefnBlock_item) {
            listener.enterExecDefnBlock_item(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExecDefnBlock_item) {
            listener.exitExecDefnBlock_item(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExecDefnBlock_item) {
            return visitor.visitExecDefnBlock_item(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExecDefnBlock_itemContext = ExecDefnBlock_itemContext;
class ExecDeclContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EXEC() { return this.getToken(CWScriptParser.EXEC, 0); }
    namedFnDecl() {
        return this.getRuleContext(0, NamedFnDeclContext);
    }
    cwspec() {
        return this.tryGetRuleContext(0, CwspecContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_execDecl; }
    // @Override
    enterRule(listener) {
        if (listener.enterExecDecl) {
            listener.enterExecDecl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExecDecl) {
            listener.exitExecDecl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExecDecl) {
            return visitor.visitExecDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExecDeclContext = ExecDeclContext;
class ExecDeclBlockContext extends ParserRuleContext_1.ParserRuleContext {
    EXEC() { return this.getToken(CWScriptParser.EXEC, 0); }
    LBRACE() { return this.getToken(CWScriptParser.LBRACE, 0); }
    RBRACE() { return this.getToken(CWScriptParser.RBRACE, 0); }
    execDeclBlock_item(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExecDeclBlock_itemContext);
        }
        else {
            return this.getRuleContext(i, ExecDeclBlock_itemContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_execDeclBlock; }
    // @Override
    enterRule(listener) {
        if (listener.enterExecDeclBlock) {
            listener.enterExecDeclBlock(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExecDeclBlock) {
            listener.exitExecDeclBlock(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExecDeclBlock) {
            return visitor.visitExecDeclBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExecDeclBlockContext = ExecDeclBlockContext;
class ExecDeclBlock_itemContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    namedFnDecl() {
        return this.getRuleContext(0, NamedFnDeclContext);
    }
    cwspec() {
        return this.tryGetRuleContext(0, CwspecContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_execDeclBlock_item; }
    // @Override
    enterRule(listener) {
        if (listener.enterExecDeclBlock_item) {
            listener.enterExecDeclBlock_item(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExecDeclBlock_item) {
            listener.exitExecDeclBlock_item(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExecDeclBlock_item) {
            return visitor.visitExecDeclBlock_item(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExecDeclBlock_itemContext = ExecDeclBlock_itemContext;
class QueryDefnContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    QUERY() { return this.getToken(CWScriptParser.QUERY, 0); }
    namedFnDefn() {
        return this.getRuleContext(0, NamedFnDefnContext);
    }
    cwspec() {
        return this.tryGetRuleContext(0, CwspecContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_queryDefn; }
    // @Override
    enterRule(listener) {
        if (listener.enterQueryDefn) {
            listener.enterQueryDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQueryDefn) {
            listener.exitQueryDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQueryDefn) {
            return visitor.visitQueryDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QueryDefnContext = QueryDefnContext;
class QueryDefnBlockContext extends ParserRuleContext_1.ParserRuleContext {
    QUERY() { return this.getToken(CWScriptParser.QUERY, 0); }
    LBRACE() { return this.getToken(CWScriptParser.LBRACE, 0); }
    RBRACE() { return this.getToken(CWScriptParser.RBRACE, 0); }
    queryDefnBlock_item(i) {
        if (i === undefined) {
            return this.getRuleContexts(QueryDefnBlock_itemContext);
        }
        else {
            return this.getRuleContext(i, QueryDefnBlock_itemContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_queryDefnBlock; }
    // @Override
    enterRule(listener) {
        if (listener.enterQueryDefnBlock) {
            listener.enterQueryDefnBlock(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQueryDefnBlock) {
            listener.exitQueryDefnBlock(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQueryDefnBlock) {
            return visitor.visitQueryDefnBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QueryDefnBlockContext = QueryDefnBlockContext;
class QueryDefnBlock_itemContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    namedFnDefn() {
        return this.getRuleContext(0, NamedFnDefnContext);
    }
    cwspec() {
        return this.tryGetRuleContext(0, CwspecContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_queryDefnBlock_item; }
    // @Override
    enterRule(listener) {
        if (listener.enterQueryDefnBlock_item) {
            listener.enterQueryDefnBlock_item(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQueryDefnBlock_item) {
            listener.exitQueryDefnBlock_item(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQueryDefnBlock_item) {
            return visitor.visitQueryDefnBlock_item(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QueryDefnBlock_itemContext = QueryDefnBlock_itemContext;
class QueryDeclContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    QUERY() { return this.getToken(CWScriptParser.QUERY, 0); }
    namedFnDecl() {
        return this.getRuleContext(0, NamedFnDeclContext);
    }
    cwspec() {
        return this.tryGetRuleContext(0, CwspecContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_queryDecl; }
    // @Override
    enterRule(listener) {
        if (listener.enterQueryDecl) {
            listener.enterQueryDecl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQueryDecl) {
            listener.exitQueryDecl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQueryDecl) {
            return visitor.visitQueryDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QueryDeclContext = QueryDeclContext;
class QueryDeclBlockContext extends ParserRuleContext_1.ParserRuleContext {
    QUERY() { return this.getToken(CWScriptParser.QUERY, 0); }
    LBRACE() { return this.getToken(CWScriptParser.LBRACE, 0); }
    RBRACE() { return this.getToken(CWScriptParser.RBRACE, 0); }
    queryDeclBlock_item(i) {
        if (i === undefined) {
            return this.getRuleContexts(QueryDeclBlock_itemContext);
        }
        else {
            return this.getRuleContext(i, QueryDeclBlock_itemContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_queryDeclBlock; }
    // @Override
    enterRule(listener) {
        if (listener.enterQueryDeclBlock) {
            listener.enterQueryDeclBlock(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQueryDeclBlock) {
            listener.exitQueryDeclBlock(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQueryDeclBlock) {
            return visitor.visitQueryDeclBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QueryDeclBlockContext = QueryDeclBlockContext;
class QueryDeclBlock_itemContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    namedFnDecl() {
        return this.getRuleContext(0, NamedFnDeclContext);
    }
    cwspec() {
        return this.tryGetRuleContext(0, CwspecContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_queryDeclBlock_item; }
    // @Override
    enterRule(listener) {
        if (listener.enterQueryDeclBlock_item) {
            listener.enterQueryDeclBlock_item(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQueryDeclBlock_item) {
            listener.exitQueryDeclBlock_item(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQueryDeclBlock_item) {
            return visitor.visitQueryDeclBlock_item(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QueryDeclBlock_itemContext = QueryDeclBlock_itemContext;
class MigrateDefnContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    MIGRATE() { return this.getToken(CWScriptParser.MIGRATE, 0); }
    fnArgs() {
        return this.getRuleContext(0, FnArgsContext);
    }
    fnBody() {
        return this.getRuleContext(0, FnBodyContext);
    }
    fnType() {
        return this.tryGetRuleContext(0, FnTypeContext);
    }
    cwspec() {
        return this.tryGetRuleContext(0, CwspecContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_migrateDefn; }
    // @Override
    enterRule(listener) {
        if (listener.enterMigrateDefn) {
            listener.enterMigrateDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMigrateDefn) {
            listener.exitMigrateDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMigrateDefn) {
            return visitor.visitMigrateDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MigrateDefnContext = MigrateDefnContext;
class MigrateDeclContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    MIGRATE() { return this.getToken(CWScriptParser.MIGRATE, 0); }
    fnArgs() {
        return this.getRuleContext(0, FnArgsContext);
    }
    fnType() {
        return this.tryGetRuleContext(0, FnTypeContext);
    }
    cwspec() {
        return this.tryGetRuleContext(0, CwspecContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_migrateDecl; }
    // @Override
    enterRule(listener) {
        if (listener.enterMigrateDecl) {
            listener.enterMigrateDecl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMigrateDecl) {
            listener.exitMigrateDecl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMigrateDecl) {
            return visitor.visitMigrateDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MigrateDeclContext = MigrateDeclContext;
class EnumVariantContext extends ParserRuleContext_1.ParserRuleContext {
    enumVariant_struct() {
        return this.tryGetRuleContext(0, EnumVariant_structContext);
    }
    enumVariant_tuple() {
        return this.tryGetRuleContext(0, EnumVariant_tupleContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_enumVariant; }
    // @Override
    enterRule(listener) {
        if (listener.enterEnumVariant) {
            listener.enterEnumVariant(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEnumVariant) {
            listener.exitEnumVariant(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEnumVariant) {
            return visitor.visitEnumVariant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EnumVariantContext = EnumVariantContext;
class EnumVariant_structContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    parenStructMembers() {
        return this.tryGetRuleContext(0, ParenStructMembersContext);
    }
    curlyStructMembers() {
        return this.tryGetRuleContext(0, CurlyStructMembersContext);
    }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_enumVariant_struct; }
    // @Override
    enterRule(listener) {
        if (listener.enterEnumVariant_struct) {
            listener.enterEnumVariant_struct(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEnumVariant_struct) {
            listener.exitEnumVariant_struct(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEnumVariant_struct) {
            return visitor.visitEnumVariant_struct(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EnumVariant_structContext = EnumVariant_structContext;
class EnumVariant_tupleContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    tupleMembers() {
        return this.getRuleContext(0, TupleMembersContext);
    }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_enumVariant_tuple; }
    // @Override
    enterRule(listener) {
        if (listener.enterEnumVariant_tuple) {
            listener.enterEnumVariant_tuple(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEnumVariant_tuple) {
            listener.exitEnumVariant_tuple(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEnumVariant_tuple) {
            return visitor.visitEnumVariant_tuple(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EnumVariant_tupleContext = EnumVariant_tupleContext;
class TupleMembersContext extends ParserRuleContext_1.ParserRuleContext {
    LPAREN() { return this.getToken(CWScriptParser.LPAREN, 0); }
    typeExpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeExprContext);
        }
        else {
            return this.getRuleContext(i, TypeExprContext);
        }
    }
    RPAREN() { return this.getToken(CWScriptParser.RPAREN, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_tupleMembers; }
    // @Override
    enterRule(listener) {
        if (listener.enterTupleMembers) {
            listener.enterTupleMembers(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTupleMembers) {
            listener.exitTupleMembers(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTupleMembers) {
            return visitor.visitTupleMembers(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TupleMembersContext = TupleMembersContext;
class ParenStructMembersContext extends ParserRuleContext_1.ParserRuleContext {
    LPAREN() { return this.getToken(CWScriptParser.LPAREN, 0); }
    RPAREN() { return this.getToken(CWScriptParser.RPAREN, 0); }
    structMember(i) {
        if (i === undefined) {
            return this.getRuleContexts(StructMemberContext);
        }
        else {
            return this.getRuleContext(i, StructMemberContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_parenStructMembers; }
    // @Override
    enterRule(listener) {
        if (listener.enterParenStructMembers) {
            listener.enterParenStructMembers(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParenStructMembers) {
            listener.exitParenStructMembers(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParenStructMembers) {
            return visitor.visitParenStructMembers(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParenStructMembersContext = ParenStructMembersContext;
class CurlyStructMembersContext extends ParserRuleContext_1.ParserRuleContext {
    LBRACE() { return this.getToken(CWScriptParser.LBRACE, 0); }
    RBRACE() { return this.getToken(CWScriptParser.RBRACE, 0); }
    structMember(i) {
        if (i === undefined) {
            return this.getRuleContexts(StructMemberContext);
        }
        else {
            return this.getRuleContext(i, StructMemberContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_curlyStructMembers; }
    // @Override
    enterRule(listener) {
        if (listener.enterCurlyStructMembers) {
            listener.enterCurlyStructMembers(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCurlyStructMembers) {
            listener.exitCurlyStructMembers(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCurlyStructMembers) {
            return visitor.visitCurlyStructMembers(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CurlyStructMembersContext = CurlyStructMembersContext;
class StructMemberContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    COLON() { return this.getToken(CWScriptParser.COLON, 0); }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    typeExpr() {
        return this.tryGetRuleContext(0, TypeExprContext);
    }
    cwspec() {
        return this.tryGetRuleContext(0, CwspecContext);
    }
    QUEST() { return this.tryGetToken(CWScriptParser.QUEST, 0); }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_structMember; }
    // @Override
    enterRule(listener) {
        if (listener.enterStructMember) {
            listener.enterStructMember(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStructMember) {
            listener.exitStructMember(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStructMember) {
            return visitor.visitStructMember(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StructMemberContext = StructMemberContext;
class TypeExprContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_typeExpr; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.TypeExprContext = TypeExprContext;
class TypePathExprContext extends TypeExprContext {
    typePath() {
        return this.getRuleContext(0, TypePathContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTypePathExpr) {
            listener.enterTypePathExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypePathExpr) {
            listener.exitTypePathExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypePathExpr) {
            return visitor.visitTypePathExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypePathExprContext = TypePathExprContext;
class ParamzdTypeExprContext extends TypeExprContext {
    typeExpr() {
        return this.getRuleContext(0, TypeExprContext);
    }
    typeParam() {
        return this.getRuleContext(0, TypeParamContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterParamzdTypeExpr) {
            listener.enterParamzdTypeExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParamzdTypeExpr) {
            listener.exitParamzdTypeExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParamzdTypeExpr) {
            return visitor.visitParamzdTypeExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParamzdTypeExprContext = ParamzdTypeExprContext;
class TupleTypeExprContext extends TypeExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this._members = [];
        this.copyFrom(ctx);
    }
    LPAREN() { return this.getToken(CWScriptParser.LPAREN, 0); }
    RPAREN() { return this.getToken(CWScriptParser.RPAREN, 0); }
    typeExpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeExprContext);
        }
        else {
            return this.getRuleContext(i, TypeExprContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTupleTypeExpr) {
            listener.enterTupleTypeExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTupleTypeExpr) {
            listener.exitTupleTypeExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTupleTypeExpr) {
            return visitor.visitTupleTypeExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TupleTypeExprContext = TupleTypeExprContext;
class ShortOptionTypeExprContext extends TypeExprContext {
    typeExpr() {
        return this.getRuleContext(0, TypeExprContext);
    }
    QUEST() { return this.getToken(CWScriptParser.QUEST, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterShortOptionTypeExpr) {
            listener.enterShortOptionTypeExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitShortOptionTypeExpr) {
            listener.exitShortOptionTypeExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitShortOptionTypeExpr) {
            return visitor.visitShortOptionTypeExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ShortOptionTypeExprContext = ShortOptionTypeExprContext;
class ShortVecTypeExprContext extends TypeExprContext {
    typeExpr() {
        return this.getRuleContext(0, TypeExprContext);
    }
    LBRACK() { return this.getToken(CWScriptParser.LBRACK, 0); }
    RBRACK() { return this.getToken(CWScriptParser.RBRACK, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterShortVecTypeExpr) {
            listener.enterShortVecTypeExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitShortVecTypeExpr) {
            listener.exitShortVecTypeExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitShortVecTypeExpr) {
            return visitor.visitShortVecTypeExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ShortVecTypeExprContext = ShortVecTypeExprContext;
class RefTypeExprContext extends TypeExprContext {
    AMP() { return this.getToken(CWScriptParser.AMP, 0); }
    typeExpr() {
        return this.getRuleContext(0, TypeExprContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterRefTypeExpr) {
            listener.enterRefTypeExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRefTypeExpr) {
            listener.exitRefTypeExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRefTypeExpr) {
            return visitor.visitRefTypeExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RefTypeExprContext = RefTypeExprContext;
class TypeDefnExprContext extends TypeExprContext {
    typeDefn() {
        return this.getRuleContext(0, TypeDefnContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeDefnExpr) {
            listener.enterTypeDefnExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeDefnExpr) {
            listener.exitTypeDefnExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeDefnExpr) {
            return visitor.visitTypeDefnExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeDefnExprContext = TypeDefnExprContext;
class TypeParamContext extends ParserRuleContext_1.ParserRuleContext {
    LT() { return this.getToken(CWScriptParser.LT, 0); }
    typeExpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeExprContext);
        }
        else {
            return this.getRuleContext(i, TypeExprContext);
        }
    }
    GT() { return this.getToken(CWScriptParser.GT, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_typeParam; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeParam) {
            listener.enterTypeParam(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeParam) {
            listener.exitTypeParam(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeParam) {
            return visitor.visitTypeParam(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeParamContext = TypeParamContext;
class PathListContext extends ParserRuleContext_1.ParserRuleContext {
    ident(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }
        else {
            return this.getRuleContext(i, IdentContext);
        }
    }
    D_COLON(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.D_COLON);
        }
        else {
            return this.getToken(CWScriptParser.D_COLON, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_pathList; }
    // @Override
    enterRule(listener) {
        if (listener.enterPathList) {
            listener.enterPathList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPathList) {
            listener.exitPathList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPathList) {
            return visitor.visitPathList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PathListContext = PathListContext;
class TypePathContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    pathList() {
        return this.getRuleContext(0, PathListContext);
    }
    D_COLON() { return this.tryGetToken(CWScriptParser.D_COLON, 0); }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_typePath; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypePath) {
            listener.enterTypePath(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypePath) {
            listener.exitTypePath(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypePath) {
            return visitor.visitTypePath(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypePathContext = TypePathContext;
class TypeDefnContext extends ParserRuleContext_1.ParserRuleContext {
    structDefn() {
        return this.tryGetRuleContext(0, StructDefnContext);
    }
    enumDefn() {
        return this.tryGetRuleContext(0, EnumDefnContext);
    }
    typeAliasDefn() {
        return this.tryGetRuleContext(0, TypeAliasDefnContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_typeDefn; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeDefn) {
            listener.enterTypeDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeDefn) {
            listener.exitTypeDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeDefn) {
            return visitor.visitTypeDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeDefnContext = TypeDefnContext;
class StructDefnContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    STRUCT() { return this.getToken(CWScriptParser.STRUCT, 0); }
    enumVariant() {
        return this.getRuleContext(0, EnumVariantContext);
    }
    cwspec() {
        return this.tryGetRuleContext(0, CwspecContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_structDefn; }
    // @Override
    enterRule(listener) {
        if (listener.enterStructDefn) {
            listener.enterStructDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStructDefn) {
            listener.exitStructDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStructDefn) {
            return visitor.visitStructDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StructDefnContext = StructDefnContext;
class EnumDefnContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ENUM() { return this.getToken(CWScriptParser.ENUM, 0); }
    LBRACE() { return this.getToken(CWScriptParser.LBRACE, 0); }
    enumVariantList() {
        return this.getRuleContext(0, EnumVariantListContext);
    }
    RBRACE() { return this.getToken(CWScriptParser.RBRACE, 0); }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    cwspec() {
        return this.tryGetRuleContext(0, CwspecContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_enumDefn; }
    // @Override
    enterRule(listener) {
        if (listener.enterEnumDefn) {
            listener.enterEnumDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEnumDefn) {
            listener.exitEnumDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEnumDefn) {
            return visitor.visitEnumDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EnumDefnContext = EnumDefnContext;
class EnumVariantListContext extends ParserRuleContext_1.ParserRuleContext {
    enumVariant(i) {
        if (i === undefined) {
            return this.getRuleContexts(EnumVariantContext);
        }
        else {
            return this.getRuleContext(i, EnumVariantContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_enumVariantList; }
    // @Override
    enterRule(listener) {
        if (listener.enterEnumVariantList) {
            listener.enterEnumVariantList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEnumVariantList) {
            listener.exitEnumVariantList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEnumVariantList) {
            return visitor.visitEnumVariantList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EnumVariantListContext = EnumVariantListContext;
class TypeAliasDefnContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    TYPE() { return this.getToken(CWScriptParser.TYPE, 0); }
    EQ() { return this.getToken(CWScriptParser.EQ, 0); }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    typeExpr() {
        return this.tryGetRuleContext(0, TypeExprContext);
    }
    cwspec() {
        return this.tryGetRuleContext(0, CwspecContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_typeAliasDefn; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeAliasDefn) {
            listener.enterTypeAliasDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeAliasDefn) {
            listener.exitTypeAliasDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeAliasDefn) {
            return visitor.visitTypeAliasDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeAliasDefnContext = TypeAliasDefnContext;
class NamedFnDeclContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    fnArgs() {
        return this.getRuleContext(0, FnArgsContext);
    }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    fnType() {
        return this.tryGetRuleContext(0, FnTypeContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_namedFnDecl; }
    // @Override
    enterRule(listener) {
        if (listener.enterNamedFnDecl) {
            listener.enterNamedFnDecl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNamedFnDecl) {
            listener.exitNamedFnDecl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNamedFnDecl) {
            return visitor.visitNamedFnDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NamedFnDeclContext = NamedFnDeclContext;
class NamedFnDefnContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    fnArgs() {
        return this.getRuleContext(0, FnArgsContext);
    }
    fnBody() {
        return this.getRuleContext(0, FnBodyContext);
    }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    fnType() {
        return this.tryGetRuleContext(0, FnTypeContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_namedFnDefn; }
    // @Override
    enterRule(listener) {
        if (listener.enterNamedFnDefn) {
            listener.enterNamedFnDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNamedFnDefn) {
            listener.exitNamedFnDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNamedFnDefn) {
            return visitor.visitNamedFnDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NamedFnDefnContext = NamedFnDefnContext;
class FnDefnContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    FN() { return this.getToken(CWScriptParser.FN, 0); }
    namedFnDefn() {
        return this.getRuleContext(0, NamedFnDefnContext);
    }
    cwspec() {
        return this.tryGetRuleContext(0, CwspecContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_fnDefn; }
    // @Override
    enterRule(listener) {
        if (listener.enterFnDefn) {
            listener.enterFnDefn(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFnDefn) {
            listener.exitFnDefn(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFnDefn) {
            return visitor.visitFnDefn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FnDefnContext = FnDefnContext;
class FnTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ARROW() { return this.tryGetToken(CWScriptParser.ARROW, 0); }
    typeExpr() {
        return this.tryGetRuleContext(0, TypeExprContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_fnType; }
    // @Override
    enterRule(listener) {
        if (listener.enterFnType) {
            listener.enterFnType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFnType) {
            listener.exitFnType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFnType) {
            return visitor.visitFnType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FnTypeContext = FnTypeContext;
class FnArgsContext extends ParserRuleContext_1.ParserRuleContext {
    LPAREN() { return this.getToken(CWScriptParser.LPAREN, 0); }
    RPAREN() { return this.getToken(CWScriptParser.RPAREN, 0); }
    fnArgList() {
        return this.tryGetRuleContext(0, FnArgListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_fnArgs; }
    // @Override
    enterRule(listener) {
        if (listener.enterFnArgs) {
            listener.enterFnArgs(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFnArgs) {
            listener.exitFnArgs(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFnArgs) {
            return visitor.visitFnArgs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FnArgsContext = FnArgsContext;
class FnArgListContext extends ParserRuleContext_1.ParserRuleContext {
    fnArg(i) {
        if (i === undefined) {
            return this.getRuleContexts(FnArgContext);
        }
        else {
            return this.getRuleContext(i, FnArgContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_fnArgList; }
    // @Override
    enterRule(listener) {
        if (listener.enterFnArgList) {
            listener.enterFnArgList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFnArgList) {
            listener.exitFnArgList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFnArgList) {
            return visitor.visitFnArgList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FnArgListContext = FnArgListContext;
class FnArgContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    COLON() { return this.getToken(CWScriptParser.COLON, 0); }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    typeExpr() {
        return this.tryGetRuleContext(0, TypeExprContext);
    }
    QUEST() { return this.tryGetToken(CWScriptParser.QUEST, 0); }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_fnArg; }
    // @Override
    enterRule(listener) {
        if (listener.enterFnArg) {
            listener.enterFnArg(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFnArg) {
            listener.exitFnArg(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFnArg) {
            return visitor.visitFnArg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FnArgContext = FnArgContext;
class FnBodyContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_fnBody; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.FnBodyContext = FnBodyContext;
class NormalFnBodyContext extends FnBodyContext {
    LBRACE() { return this.tryGetToken(CWScriptParser.LBRACE, 0); }
    RBRACE() { return this.tryGetToken(CWScriptParser.RBRACE, 0); }
    stmt(i) {
        if (i === undefined) {
            return this.getRuleContexts(StmtContext);
        }
        else {
            return this.getRuleContext(i, StmtContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterNormalFnBody) {
            listener.enterNormalFnBody(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNormalFnBody) {
            listener.exitNormalFnBody(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNormalFnBody) {
            return visitor.visitNormalFnBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NormalFnBodyContext = NormalFnBodyContext;
class ArrowFnBodyContext extends FnBodyContext {
    FAT_ARROW() { return this.tryGetToken(CWScriptParser.FAT_ARROW, 0); }
    stmt() {
        return this.tryGetRuleContext(0, StmtContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterArrowFnBody) {
            listener.enterArrowFnBody(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArrowFnBody) {
            listener.exitArrowFnBody(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArrowFnBody) {
            return visitor.visitArrowFnBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ArrowFnBodyContext = ArrowFnBodyContext;
class StmtContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_stmt; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.StmtContext = StmtContext;
class LetStmtContext extends StmtContext {
    letStmt_() {
        return this.getRuleContext(0, LetStmt_Context);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterLetStmt) {
            listener.enterLetStmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLetStmt) {
            listener.exitLetStmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLetStmt) {
            return visitor.visitLetStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LetStmtContext = LetStmtContext;
class AssignStmtContext extends StmtContext {
    assignStmt_() {
        return this.getRuleContext(0, AssignStmt_Context);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterAssignStmt) {
            listener.enterAssignStmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAssignStmt) {
            listener.exitAssignStmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAssignStmt) {
            return visitor.visitAssignStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AssignStmtContext = AssignStmtContext;
class IfStmtContext extends StmtContext {
    ifExpr_() {
        return this.getRuleContext(0, IfExpr_Context);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIfStmt) {
            listener.enterIfStmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIfStmt) {
            listener.exitIfStmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIfStmt) {
            return visitor.visitIfStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IfStmtContext = IfStmtContext;
class ForStmtContext extends StmtContext {
    forStmt_() {
        return this.getRuleContext(0, ForStmt_Context);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterForStmt) {
            listener.enterForStmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitForStmt) {
            listener.exitForStmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitForStmt) {
            return visitor.visitForStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ForStmtContext = ForStmtContext;
class ExecStmtContext extends StmtContext {
    EXEC() { return this.getToken(CWScriptParser.EXEC, 0); }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExecStmt) {
            listener.enterExecStmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExecStmt) {
            listener.exitExecStmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExecStmt) {
            return visitor.visitExecStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExecStmtContext = ExecStmtContext;
class ExecuteNowStmtContext extends StmtContext {
    EXECUTE_NOW() { return this.getToken(CWScriptParser.EXECUTE_NOW, 0); }
    msg() {
        return this.getRuleContext(0, MsgContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExecuteNowStmt) {
            listener.enterExecuteNowStmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExecuteNowStmt) {
            listener.exitExecuteNowStmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExecuteNowStmt) {
            return visitor.visitExecuteNowStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExecuteNowStmtContext = ExecuteNowStmtContext;
class EmitStmtContext extends StmtContext {
    EMIT() { return this.getToken(CWScriptParser.EMIT, 0); }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterEmitStmt) {
            listener.enterEmitStmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEmitStmt) {
            listener.exitEmitStmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEmitStmt) {
            return visitor.visitEmitStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EmitStmtContext = EmitStmtContext;
class ReturnStmtContext extends StmtContext {
    RETURN() { return this.getToken(CWScriptParser.RETURN, 0); }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterReturnStmt) {
            listener.enterReturnStmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitReturnStmt) {
            listener.exitReturnStmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitReturnStmt) {
            return visitor.visitReturnStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ReturnStmtContext = ReturnStmtContext;
class FailStmtContext extends StmtContext {
    FAIL() { return this.getToken(CWScriptParser.FAIL, 0); }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterFailStmt) {
            listener.enterFailStmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFailStmt) {
            listener.exitFailStmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFailStmt) {
            return visitor.visitFailStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FailStmtContext = FailStmtContext;
class ExprStmtContext extends StmtContext {
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExprStmt) {
            listener.enterExprStmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExprStmt) {
            listener.exitExprStmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExprStmt) {
            return visitor.visitExprStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExprStmtContext = ExprStmtContext;
class LetStmt_Context extends ParserRuleContext_1.ParserRuleContext {
    LET() { return this.getToken(CWScriptParser.LET, 0); }
    letLHS() {
        return this.getRuleContext(0, LetLHSContext);
    }
    EQ() { return this.getToken(CWScriptParser.EQ, 0); }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_letStmt_; }
    // @Override
    enterRule(listener) {
        if (listener.enterLetStmt_) {
            listener.enterLetStmt_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLetStmt_) {
            listener.exitLetStmt_(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLetStmt_) {
            return visitor.visitLetStmt_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LetStmt_Context = LetStmt_Context;
class LetLHSContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_letLHS; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.LetLHSContext = LetLHSContext;
class IdentLHSContext extends LetLHSContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    ident() {
        return this.getRuleContext(0, IdentContext);
    }
    COLON() { return this.tryGetToken(CWScriptParser.COLON, 0); }
    typeExpr() {
        return this.tryGetRuleContext(0, TypeExprContext);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIdentLHS) {
            listener.enterIdentLHS(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIdentLHS) {
            listener.exitIdentLHS(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentLHS) {
            return visitor.visitIdentLHS(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentLHSContext = IdentLHSContext;
class StructUnpackLHSContext extends LetLHSContext {
    LBRACE() { return this.getToken(CWScriptParser.LBRACE, 0); }
    identList() {
        return this.getRuleContext(0, IdentListContext);
    }
    RBRACE() { return this.getToken(CWScriptParser.RBRACE, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterStructUnpackLHS) {
            listener.enterStructUnpackLHS(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStructUnpackLHS) {
            listener.exitStructUnpackLHS(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStructUnpackLHS) {
            return visitor.visitStructUnpackLHS(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StructUnpackLHSContext = StructUnpackLHSContext;
class AssignStmt_Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    assignLHS() {
        return this.getRuleContext(0, AssignLHSContext);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    EQ() { return this.tryGetToken(CWScriptParser.EQ, 0); }
    PLUS_EQ() { return this.tryGetToken(CWScriptParser.PLUS_EQ, 0); }
    MINUS_EQ() { return this.tryGetToken(CWScriptParser.MINUS_EQ, 0); }
    MUL_EQ() { return this.tryGetToken(CWScriptParser.MUL_EQ, 0); }
    DIV_EQ() { return this.tryGetToken(CWScriptParser.DIV_EQ, 0); }
    MOD_EQ() { return this.tryGetToken(CWScriptParser.MOD_EQ, 0); }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_assignStmt_; }
    // @Override
    enterRule(listener) {
        if (listener.enterAssignStmt_) {
            listener.enterAssignStmt_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAssignStmt_) {
            listener.exitAssignStmt_(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAssignStmt_) {
            return visitor.visitAssignStmt_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AssignStmt_Context = AssignStmt_Context;
class AssignLHSContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_assignLHS; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.AssignLHSContext = AssignLHSContext;
class StateItemAssignLHSContext extends AssignLHSContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    STATE() { return this.getToken(CWScriptParser.STATE, 0); }
    DOT() { return this.getToken(CWScriptParser.DOT, 0); }
    ident() {
        return this.getRuleContext(0, IdentContext);
    }
    innerAssign() {
        return this.tryGetRuleContext(0, InnerAssignContext);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterStateItemAssignLHS) {
            listener.enterStateItemAssignLHS(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStateItemAssignLHS) {
            listener.exitStateItemAssignLHS(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStateItemAssignLHS) {
            return visitor.visitStateItemAssignLHS(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StateItemAssignLHSContext = StateItemAssignLHSContext;
class StateMapAssignLHSContext extends AssignLHSContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this._mapKeys = [];
        this.copyFrom(ctx);
    }
    STATE() { return this.getToken(CWScriptParser.STATE, 0); }
    DOT() { return this.getToken(CWScriptParser.DOT, 0); }
    LBRACK() { return this.getToken(CWScriptParser.LBRACK, 0); }
    RBRACK() { return this.getToken(CWScriptParser.RBRACK, 0); }
    ident() {
        return this.getRuleContext(0, IdentContext);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    innerAssign() {
        return this.tryGetRuleContext(0, InnerAssignContext);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterStateMapAssignLHS) {
            listener.enterStateMapAssignLHS(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStateMapAssignLHS) {
            listener.exitStateMapAssignLHS(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStateMapAssignLHS) {
            return visitor.visitStateMapAssignLHS(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StateMapAssignLHSContext = StateMapAssignLHSContext;
class IdentAssignLHSContext extends AssignLHSContext {
    ident() {
        return this.getRuleContext(0, IdentContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIdentAssignLHS) {
            listener.enterIdentAssignLHS(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIdentAssignLHS) {
            listener.exitIdentAssignLHS(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentAssignLHS) {
            return visitor.visitIdentAssignLHS(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentAssignLHSContext = IdentAssignLHSContext;
class MemberAssignLHSContext extends AssignLHSContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    DOT() { return this.getToken(CWScriptParser.DOT, 0); }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    ident() {
        return this.getRuleContext(0, IdentContext);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterMemberAssignLHS) {
            listener.enterMemberAssignLHS(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMemberAssignLHS) {
            listener.exitMemberAssignLHS(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMemberAssignLHS) {
            return visitor.visitMemberAssignLHS(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MemberAssignLHSContext = MemberAssignLHSContext;
class TableAssignLHSContext extends AssignLHSContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    LBRACK() { return this.getToken(CWScriptParser.LBRACK, 0); }
    RBRACK() { return this.getToken(CWScriptParser.RBRACK, 0); }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTableAssignLHS) {
            listener.enterTableAssignLHS(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTableAssignLHS) {
            listener.exitTableAssignLHS(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTableAssignLHS) {
            return visitor.visitTableAssignLHS(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TableAssignLHSContext = TableAssignLHSContext;
class InnerAssignContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._paths = [];
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.DOT);
        }
        else {
            return this.getToken(CWScriptParser.DOT, i);
        }
    }
    innerPath(i) {
        if (i === undefined) {
            return this.getRuleContexts(InnerPathContext);
        }
        else {
            return this.getRuleContext(i, InnerPathContext);
        }
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_innerAssign; }
    // @Override
    enterRule(listener) {
        if (listener.enterInnerAssign) {
            listener.enterInnerAssign(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInnerAssign) {
            listener.exitInnerAssign(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInnerAssign) {
            return visitor.visitInnerAssign(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InnerAssignContext = InnerAssignContext;
class InnerPathContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    LBRACK() { return this.tryGetToken(CWScriptParser.LBRACK, 0); }
    RBRACK() { return this.tryGetToken(CWScriptParser.RBRACK, 0); }
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_innerPath; }
    // @Override
    enterRule(listener) {
        if (listener.enterInnerPath) {
            listener.enterInnerPath(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInnerPath) {
            listener.exitInnerPath(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInnerPath) {
            return visitor.visitInnerPath(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InnerPathContext = InnerPathContext;
class MsgContext extends ParserRuleContext_1.ParserRuleContext {
    HASH() { return this.getToken(CWScriptParser.HASH, 0); }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    DOT() { return this.getToken(CWScriptParser.DOT, 0); }
    ident() {
        return this.getRuleContext(0, IdentContext);
    }
    LPAREN() { return this.getToken(CWScriptParser.LPAREN, 0); }
    exprList() {
        return this.getRuleContext(0, ExprListContext);
    }
    RPAREN() { return this.getToken(CWScriptParser.RPAREN, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_msg; }
    // @Override
    enterRule(listener) {
        if (listener.enterMsg) {
            listener.enterMsg(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMsg) {
            listener.exitMsg(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMsg) {
            return visitor.visitMsg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MsgContext = MsgContext;
class ExprContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_expr; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.ExprContext = ExprContext;
class GroupedExprContext extends ExprContext {
    LPAREN() { return this.getToken(CWScriptParser.LPAREN, 0); }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    RPAREN() { return this.getToken(CWScriptParser.RPAREN, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterGroupedExpr) {
            listener.enterGroupedExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitGroupedExpr) {
            listener.exitGroupedExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGroupedExpr) {
            return visitor.visitGroupedExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GroupedExprContext = GroupedExprContext;
class StateItemAccessExprContext extends ExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    STATE() { return this.getToken(CWScriptParser.STATE, 0); }
    DOT() { return this.getToken(CWScriptParser.DOT, 0); }
    ident() {
        return this.getRuleContext(0, IdentContext);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterStateItemAccessExpr) {
            listener.enterStateItemAccessExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStateItemAccessExpr) {
            listener.exitStateItemAccessExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStateItemAccessExpr) {
            return visitor.visitStateItemAccessExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StateItemAccessExprContext = StateItemAccessExprContext;
class StateMapAccessExprContext extends ExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this._mapKeys = [];
        this.copyFrom(ctx);
    }
    STATE() { return this.getToken(CWScriptParser.STATE, 0); }
    DOT() { return this.getToken(CWScriptParser.DOT, 0); }
    LBRACK() { return this.getToken(CWScriptParser.LBRACK, 0); }
    RBRACK() { return this.getToken(CWScriptParser.RBRACK, 0); }
    ident() {
        return this.getRuleContext(0, IdentContext);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    // @Override
    enterRule(listener) {
        if (listener.enterStateMapAccessExpr) {
            listener.enterStateMapAccessExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStateMapAccessExpr) {
            listener.exitStateMapAccessExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStateMapAccessExpr) {
            return visitor.visitStateMapAccessExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StateMapAccessExprContext = StateMapAccessExprContext;
class MemberAccessExprContext extends ExprContext {
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    DOT() { return this.getToken(CWScriptParser.DOT, 0); }
    ident() {
        return this.getRuleContext(0, IdentContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterMemberAccessExpr) {
            listener.enterMemberAccessExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMemberAccessExpr) {
            listener.exitMemberAccessExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMemberAccessExpr) {
            return visitor.visitMemberAccessExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MemberAccessExprContext = MemberAccessExprContext;
class TableLookupExprContext extends ExprContext {
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    LBRACK() { return this.getToken(CWScriptParser.LBRACK, 0); }
    COMMA() { return this.getToken(CWScriptParser.COMMA, 0); }
    RBRACK() { return this.getToken(CWScriptParser.RBRACK, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTableLookupExpr) {
            listener.enterTableLookupExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTableLookupExpr) {
            listener.exitTableLookupExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTableLookupExpr) {
            return visitor.visitTableLookupExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TableLookupExprContext = TableLookupExprContext;
class PosArgsFnCallExprContext extends ExprContext {
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    LPAREN() { return this.getToken(CWScriptParser.LPAREN, 0); }
    RPAREN() { return this.getToken(CWScriptParser.RPAREN, 0); }
    exprList() {
        return this.tryGetRuleContext(0, ExprListContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterPosArgsFnCallExpr) {
            listener.enterPosArgsFnCallExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPosArgsFnCallExpr) {
            listener.exitPosArgsFnCallExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPosArgsFnCallExpr) {
            return visitor.visitPosArgsFnCallExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PosArgsFnCallExprContext = PosArgsFnCallExprContext;
class NamedArgsFnCallExprContext extends ExprContext {
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    LPAREN() { return this.getToken(CWScriptParser.LPAREN, 0); }
    RPAREN() { return this.getToken(CWScriptParser.RPAREN, 0); }
    namedExprList() {
        return this.tryGetRuleContext(0, NamedExprListContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterNamedArgsFnCallExpr) {
            listener.enterNamedArgsFnCallExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNamedArgsFnCallExpr) {
            listener.exitNamedArgsFnCallExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNamedArgsFnCallExpr) {
            return visitor.visitNamedArgsFnCallExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NamedArgsFnCallExprContext = NamedArgsFnCallExprContext;
class UnaryExprContext extends ExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    PLUS() { return this.tryGetToken(CWScriptParser.PLUS, 0); }
    MINUS() { return this.tryGetToken(CWScriptParser.MINUS, 0); }
    EXCLAM() { return this.tryGetToken(CWScriptParser.EXCLAM, 0); }
    // @Override
    enterRule(listener) {
        if (listener.enterUnaryExpr) {
            listener.enterUnaryExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUnaryExpr) {
            listener.exitUnaryExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnaryExpr) {
            return visitor.visitUnaryExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnaryExprContext = UnaryExprContext;
class ExpExprContext extends ExprContext {
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    POW() { return this.getToken(CWScriptParser.POW, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExpExpr) {
            listener.enterExpExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpExpr) {
            listener.exitExpExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpExpr) {
            return visitor.visitExpExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpExprContext = ExpExprContext;
class MultDivModExprContext extends ExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    MUL() { return this.tryGetToken(CWScriptParser.MUL, 0); }
    DIV() { return this.tryGetToken(CWScriptParser.DIV, 0); }
    MOD() { return this.tryGetToken(CWScriptParser.MOD, 0); }
    // @Override
    enterRule(listener) {
        if (listener.enterMultDivModExpr) {
            listener.enterMultDivModExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMultDivModExpr) {
            listener.exitMultDivModExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMultDivModExpr) {
            return visitor.visitMultDivModExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MultDivModExprContext = MultDivModExprContext;
class AddSubExprContext extends ExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    PLUS() { return this.tryGetToken(CWScriptParser.PLUS, 0); }
    MINUS() { return this.tryGetToken(CWScriptParser.MINUS, 0); }
    // @Override
    enterRule(listener) {
        if (listener.enterAddSubExpr) {
            listener.enterAddSubExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAddSubExpr) {
            listener.exitAddSubExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAddSubExpr) {
            return visitor.visitAddSubExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AddSubExprContext = AddSubExprContext;
class CompExprContext extends ExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    LT() { return this.tryGetToken(CWScriptParser.LT, 0); }
    GT() { return this.tryGetToken(CWScriptParser.GT, 0); }
    LT_EQ() { return this.tryGetToken(CWScriptParser.LT_EQ, 0); }
    GT_EQ() { return this.tryGetToken(CWScriptParser.GT_EQ, 0); }
    // @Override
    enterRule(listener) {
        if (listener.enterCompExpr) {
            listener.enterCompExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCompExpr) {
            listener.exitCompExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCompExpr) {
            return visitor.visitCompExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CompExprContext = CompExprContext;
class EqExprContext extends ExprContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    EQEQ() { return this.tryGetToken(CWScriptParser.EQEQ, 0); }
    NEQ() { return this.tryGetToken(CWScriptParser.NEQ, 0); }
    // @Override
    enterRule(listener) {
        if (listener.enterEqExpr) {
            listener.enterEqExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEqExpr) {
            listener.exitEqExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEqExpr) {
            return visitor.visitEqExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EqExprContext = EqExprContext;
class AndExprContext extends ExprContext {
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    AND() { return this.getToken(CWScriptParser.AND, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterAndExpr) {
            listener.enterAndExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAndExpr) {
            listener.exitAndExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAndExpr) {
            return visitor.visitAndExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AndExprContext = AndExprContext;
class OrExprContext extends ExprContext {
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    OR() { return this.getToken(CWScriptParser.OR, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterOrExpr) {
            listener.enterOrExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOrExpr) {
            listener.exitOrExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOrExpr) {
            return visitor.visitOrExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OrExprContext = OrExprContext;
class IfExprContext extends ExprContext {
    ifExpr_() {
        return this.getRuleContext(0, IfExpr_Context);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIfExpr) {
            listener.enterIfExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIfExpr) {
            listener.exitIfExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIfExpr) {
            return visitor.visitIfExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IfExprContext = IfExprContext;
class QueryExprContext extends ExprContext {
    QUERY() { return this.getToken(CWScriptParser.QUERY, 0); }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterQueryExpr) {
            listener.enterQueryExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQueryExpr) {
            listener.exitQueryExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQueryExpr) {
            return visitor.visitQueryExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QueryExprContext = QueryExprContext;
class ValExprContext extends ExprContext {
    val() {
        return this.getRuleContext(0, ValContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterValExpr) {
            listener.enterValExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitValExpr) {
            listener.exitValExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitValExpr) {
            return visitor.visitValExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ValExprContext = ValExprContext;
class ValContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_val; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.ValContext = ValContext;
class UnitValContext extends ValContext {
    LPAREN() { return this.getToken(CWScriptParser.LPAREN, 0); }
    RPAREN() { return this.getToken(CWScriptParser.RPAREN, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterUnitVal) {
            listener.enterUnitVal(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUnitVal) {
            listener.exitUnitVal(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnitVal) {
            return visitor.visitUnitVal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnitValContext = UnitValContext;
class StructValContext extends ValContext {
    structVal_() {
        return this.getRuleContext(0, StructVal_Context);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterStructVal) {
            listener.enterStructVal(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStructVal) {
            listener.exitStructVal(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStructVal) {
            return visitor.visitStructVal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StructValContext = StructValContext;
class TupleValContext extends ValContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    LPAREN() { return this.getToken(CWScriptParser.LPAREN, 0); }
    exprList() {
        return this.getRuleContext(0, ExprListContext);
    }
    RPAREN() { return this.getToken(CWScriptParser.RPAREN, 0); }
    typePath() {
        return this.getRuleContext(0, TypePathContext);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTupleVal) {
            listener.enterTupleVal(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTupleVal) {
            listener.exitTupleVal(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTupleVal) {
            return visitor.visitTupleVal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TupleValContext = TupleValContext;
class VecValContext extends ValContext {
    LBRACK() { return this.getToken(CWScriptParser.LBRACK, 0); }
    exprList() {
        return this.getRuleContext(0, ExprListContext);
    }
    RBRACK() { return this.getToken(CWScriptParser.RBRACK, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterVecVal) {
            listener.enterVecVal(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVecVal) {
            listener.exitVecVal(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVecVal) {
            return visitor.visitVecVal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VecValContext = VecValContext;
class StringValContext extends ValContext {
    StringLiteral() { return this.getToken(CWScriptParser.StringLiteral, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterStringVal) {
            listener.enterStringVal(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStringVal) {
            listener.exitStringVal(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStringVal) {
            return visitor.visitStringVal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StringValContext = StringValContext;
class IntegerValContext extends ValContext {
    IntegerLiteral() { return this.getToken(CWScriptParser.IntegerLiteral, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIntegerVal) {
            listener.enterIntegerVal(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIntegerVal) {
            listener.exitIntegerVal(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIntegerVal) {
            return visitor.visitIntegerVal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IntegerValContext = IntegerValContext;
class DecimalValContext extends ValContext {
    DecimalLiteral() { return this.getToken(CWScriptParser.DecimalLiteral, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterDecimalVal) {
            listener.enterDecimalVal(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDecimalVal) {
            listener.exitDecimalVal(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDecimalVal) {
            return visitor.visitDecimalVal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DecimalValContext = DecimalValContext;
class TrueValContext extends ValContext {
    TRUE() { return this.getToken(CWScriptParser.TRUE, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTrueVal) {
            listener.enterTrueVal(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTrueVal) {
            listener.exitTrueVal(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTrueVal) {
            return visitor.visitTrueVal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TrueValContext = TrueValContext;
class FalseValContext extends ValContext {
    FALSE() { return this.getToken(CWScriptParser.FALSE, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterFalseVal) {
            listener.enterFalseVal(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFalseVal) {
            listener.exitFalseVal(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFalseVal) {
            return visitor.visitFalseVal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FalseValContext = FalseValContext;
class IdentValContext extends ValContext {
    ident() {
        return this.getRuleContext(0, IdentContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIdentVal) {
            listener.enterIdentVal(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIdentVal) {
            listener.exitIdentVal(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentVal) {
            return visitor.visitIdentVal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentValContext = IdentValContext;
class StructVal_Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LBRACE() { return this.getToken(CWScriptParser.LBRACE, 0); }
    RBRACE() { return this.getToken(CWScriptParser.RBRACE, 0); }
    typePath() {
        return this.tryGetRuleContext(0, TypePathContext);
    }
    structValMembers() {
        return this.tryGetRuleContext(0, StructValMembersContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_structVal_; }
    // @Override
    enterRule(listener) {
        if (listener.enterStructVal_) {
            listener.enterStructVal_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStructVal_) {
            listener.exitStructVal_(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStructVal_) {
            return visitor.visitStructVal_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StructVal_Context = StructVal_Context;
class StructValMembersContext extends ParserRuleContext_1.ParserRuleContext {
    structValMember(i) {
        if (i === undefined) {
            return this.getRuleContexts(StructValMemberContext);
        }
        else {
            return this.getRuleContext(i, StructValMemberContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_structValMembers; }
    // @Override
    enterRule(listener) {
        if (listener.enterStructValMembers) {
            listener.enterStructValMembers(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStructValMembers) {
            listener.exitStructValMembers(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStructValMembers) {
            return visitor.visitStructValMembers(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StructValMembersContext = StructValMembersContext;
class StructValMemberContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    COLON() { return this.tryGetToken(CWScriptParser.COLON, 0); }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_structValMember; }
    // @Override
    enterRule(listener) {
        if (listener.enterStructValMember) {
            listener.enterStructValMember(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStructValMember) {
            listener.exitStructValMember(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStructValMember) {
            return visitor.visitStructValMember(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StructValMemberContext = StructValMemberContext;
class IfExpr_Context extends ParserRuleContext_1.ParserRuleContext {
    ifClause_() {
        return this.getRuleContext(0, IfClause_Context);
    }
    elseIfClauses() {
        return this.tryGetRuleContext(0, ElseIfClausesContext);
    }
    elseClause() {
        return this.tryGetRuleContext(0, ElseClauseContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_ifExpr_; }
    // @Override
    enterRule(listener) {
        if (listener.enterIfExpr_) {
            listener.enterIfExpr_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIfExpr_) {
            listener.exitIfExpr_(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIfExpr_) {
            return visitor.visitIfExpr_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IfExpr_Context = IfExpr_Context;
class IfClause_Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_ifClause_; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.IfClause_Context = IfClause_Context;
class IfClauseContext extends IfClause_Context {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    IF() { return this.getToken(CWScriptParser.IF, 0); }
    fnBody() {
        return this.getRuleContext(0, FnBodyContext);
    }
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIfClause) {
            listener.enterIfClause(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIfClause) {
            listener.exitIfClause(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIfClause) {
            return visitor.visitIfClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IfClauseContext = IfClauseContext;
class IfLetClauseContext extends IfClause_Context {
    IF() { return this.getToken(CWScriptParser.IF, 0); }
    letStmt_() {
        return this.getRuleContext(0, LetStmt_Context);
    }
    fnBody() {
        return this.getRuleContext(0, FnBodyContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIfLetClause) {
            listener.enterIfLetClause(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIfLetClause) {
            listener.exitIfLetClause(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIfLetClause) {
            return visitor.visitIfLetClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IfLetClauseContext = IfLetClauseContext;
class ElseIfClausesContext extends ParserRuleContext_1.ParserRuleContext {
    ELSE(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.ELSE);
        }
        else {
            return this.getToken(CWScriptParser.ELSE, i);
        }
    }
    ifClause_(i) {
        if (i === undefined) {
            return this.getRuleContexts(IfClause_Context);
        }
        else {
            return this.getRuleContext(i, IfClause_Context);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_elseIfClauses; }
    // @Override
    enterRule(listener) {
        if (listener.enterElseIfClauses) {
            listener.enterElseIfClauses(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitElseIfClauses) {
            listener.exitElseIfClauses(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitElseIfClauses) {
            return visitor.visitElseIfClauses(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ElseIfClausesContext = ElseIfClausesContext;
class ElseClauseContext extends ParserRuleContext_1.ParserRuleContext {
    ELSE() { return this.getToken(CWScriptParser.ELSE, 0); }
    fnBody() {
        return this.getRuleContext(0, FnBodyContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_elseClause; }
    // @Override
    enterRule(listener) {
        if (listener.enterElseClause) {
            listener.enterElseClause(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitElseClause) {
            listener.exitElseClause(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitElseClause) {
            return visitor.visitElseClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ElseClauseContext = ElseClauseContext;
class ForStmt_Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_forStmt_; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.ForStmt_Context = ForStmt_Context;
class ForInStmtContext extends ForStmt_Context {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    FOR() { return this.getToken(CWScriptParser.FOR, 0); }
    IN() { return this.getToken(CWScriptParser.IN, 0); }
    fnBody() {
        return this.getRuleContext(0, FnBodyContext);
    }
    letLHS() {
        return this.getRuleContext(0, LetLHSContext);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterForInStmt) {
            listener.enterForInStmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitForInStmt) {
            listener.exitForInStmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitForInStmt) {
            return visitor.visitForInStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ForInStmtContext = ForInStmtContext;
class ForTimesStmtContext extends ForStmt_Context {
    FOR() { return this.getToken(CWScriptParser.FOR, 0); }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    TIMES() { return this.getToken(CWScriptParser.TIMES, 0); }
    fnBody() {
        return this.getRuleContext(0, FnBodyContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterForTimesStmt) {
            listener.enterForTimesStmt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitForTimesStmt) {
            listener.exitForTimesStmt(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitForTimesStmt) {
            return visitor.visitForTimesStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ForTimesStmtContext = ForTimesStmtContext;
class IdentListContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._symbols = [];
    }
    ident(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }
        else {
            return this.getRuleContext(i, IdentContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_identList; }
    // @Override
    enterRule(listener) {
        if (listener.enterIdentList) {
            listener.enterIdentList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIdentList) {
            listener.exitIdentList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentList) {
            return visitor.visitIdentList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentListContext = IdentListContext;
class ExprListContext extends ParserRuleContext_1.ParserRuleContext {
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_exprList; }
    // @Override
    enterRule(listener) {
        if (listener.enterExprList) {
            listener.enterExprList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExprList) {
            listener.exitExprList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExprList) {
            return visitor.visitExprList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExprListContext = ExprListContext;
class NamedExprListContext extends ParserRuleContext_1.ParserRuleContext {
    namedExpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(NamedExprContext);
        }
        else {
            return this.getRuleContext(i, NamedExprContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.COMMA);
        }
        else {
            return this.getToken(CWScriptParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_namedExprList; }
    // @Override
    enterRule(listener) {
        if (listener.enterNamedExprList) {
            listener.enterNamedExprList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNamedExprList) {
            listener.exitNamedExprList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNamedExprList) {
            return visitor.visitNamedExprList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NamedExprListContext = NamedExprListContext;
class NamedExprContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    COLON() { return this.tryGetToken(CWScriptParser.COLON, 0); }
    ident() {
        return this.tryGetRuleContext(0, IdentContext);
    }
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_namedExpr; }
    // @Override
    enterRule(listener) {
        if (listener.enterNamedExpr) {
            listener.enterNamedExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNamedExpr) {
            listener.exitNamedExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNamedExpr) {
            return visitor.visitNamedExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NamedExprContext = NamedExprContext;
class IdentContext extends ParserRuleContext_1.ParserRuleContext {
    Ident() { return this.tryGetToken(CWScriptParser.Ident, 0); }
    reservedKeyword() {
        return this.tryGetRuleContext(0, ReservedKeywordContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_ident; }
    // @Override
    enterRule(listener) {
        if (listener.enterIdent) {
            listener.enterIdent(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIdent) {
            listener.exitIdent(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdent) {
            return visitor.visitIdent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentContext = IdentContext;
class CwspecContext extends ParserRuleContext_1.ParserRuleContext {
    CWSPEC_LINE_COMMENT(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.CWSPEC_LINE_COMMENT);
        }
        else {
            return this.getToken(CWScriptParser.CWSPEC_LINE_COMMENT, i);
        }
    }
    CWSPEC_BLOCK_COMMENT(i) {
        if (i === undefined) {
            return this.getTokens(CWScriptParser.CWSPEC_BLOCK_COMMENT);
        }
        else {
            return this.getToken(CWScriptParser.CWSPEC_BLOCK_COMMENT, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_cwspec; }
    // @Override
    enterRule(listener) {
        if (listener.enterCwspec) {
            listener.enterCwspec(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCwspec) {
            listener.exitCwspec(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCwspec) {
            return visitor.visitCwspec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CwspecContext = CwspecContext;
class ReservedKeywordContext extends ParserRuleContext_1.ParserRuleContext {
    CONTRACT() { return this.tryGetToken(CWScriptParser.CONTRACT, 0); }
    INTERFACE() { return this.tryGetToken(CWScriptParser.INTERFACE, 0); }
    IMPORT() { return this.tryGetToken(CWScriptParser.IMPORT, 0); }
    IMPLEMENTS() { return this.tryGetToken(CWScriptParser.IMPLEMENTS, 0); }
    EXTENDS() { return this.tryGetToken(CWScriptParser.EXTENDS, 0); }
    ERROR() { return this.tryGetToken(CWScriptParser.ERROR, 0); }
    EVENT() { return this.tryGetToken(CWScriptParser.EVENT, 0); }
    INSTANTIATE() { return this.tryGetToken(CWScriptParser.INSTANTIATE, 0); }
    EXEC() { return this.tryGetToken(CWScriptParser.EXEC, 0); }
    QUERY() { return this.tryGetToken(CWScriptParser.QUERY, 0); }
    MIGRATE() { return this.tryGetToken(CWScriptParser.MIGRATE, 0); }
    FOR() { return this.tryGetToken(CWScriptParser.FOR, 0); }
    IN() { return this.tryGetToken(CWScriptParser.IN, 0); }
    FROM() { return this.tryGetToken(CWScriptParser.FROM, 0); }
    STATE() { return this.tryGetToken(CWScriptParser.STATE, 0); }
    TIMES() { return this.tryGetToken(CWScriptParser.TIMES, 0); }
    IF() { return this.tryGetToken(CWScriptParser.IF, 0); }
    FN() { return this.tryGetToken(CWScriptParser.FN, 0); }
    ELSE() { return this.tryGetToken(CWScriptParser.ELSE, 0); }
    AND() { return this.tryGetToken(CWScriptParser.AND, 0); }
    OR() { return this.tryGetToken(CWScriptParser.OR, 0); }
    TRUE() { return this.tryGetToken(CWScriptParser.TRUE, 0); }
    FALSE() { return this.tryGetToken(CWScriptParser.FALSE, 0); }
    LET() { return this.tryGetToken(CWScriptParser.LET, 0); }
    RETURN() { return this.tryGetToken(CWScriptParser.RETURN, 0); }
    STRUCT() { return this.tryGetToken(CWScriptParser.STRUCT, 0); }
    ENUM() { return this.tryGetToken(CWScriptParser.ENUM, 0); }
    TYPE() { return this.tryGetToken(CWScriptParser.TYPE, 0); }
    EMIT() { return this.tryGetToken(CWScriptParser.EMIT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CWScriptParser.RULE_reservedKeyword; }
    // @Override
    enterRule(listener) {
        if (listener.enterReservedKeyword) {
            listener.enterReservedKeyword(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitReservedKeyword) {
            listener.exitReservedKeyword(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitReservedKeyword) {
            return visitor.visitReservedKeyword(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ReservedKeywordContext = ReservedKeywordContext;
//# sourceMappingURL=CWScriptParser.js.map