"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CWScriptASTVisitor = void 0;
const CWScriptParser_1 = require("../grammar/CWScriptParser");
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const nodes_1 = require("./nodes");
const nodes_2 = require("./nodes");
class CWScriptASTVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return new nodes_2.EmptyAST();
    }
    visitSourceFile(ctx) {
        let stmts = ctx.topLevelStmt() || [];
        return new nodes_2.SourceFile(ctx, ctx._spec ? this.visitCwspec(ctx._spec) : undefined, new nodes_1.List(ctx.topLevelStmt(), stmts.map(stmt => this.visit(stmt))));
    }
    visitImportAllStmt(ctx) {
        let fileName = ctx._fileName.text.replace(/^["'](.+(?=["']$))["']$/, '$1');
        return new nodes_2.ImportAllStmt(ctx, fileName);
    }
    visitImportItem(ctx) {
        return new nodes_2.ImportItem(ctx, this.visitIdent(ctx._symbol), ctx._alias ? this.visitIdent(ctx._alias) : undefined);
    }
    visitImportItemsStmt(ctx) {
        let fileName = ctx._fileName.text.replace(/^["'](.+(?=["']$))["']$/, '$1');
        let items = ctx._items._importItems.map(item => this.visitImportItem(item));
        return new nodes_2.ImportItemsStmt(ctx, fileName, new nodes_1.List(ctx, items));
    }
    visitTypePath(ctx) {
        let root = ctx._root ? true : false;
        let paths = ctx.pathList().ident() || [];
        return new nodes_2.TypePath(ctx, root, new nodes_1.List(ctx, paths.map(path => this.visitIdent(path))));
    }
    visitParamzdTypeExpr(ctx) {
        return new nodes_2.ParamzdTypeExpr(ctx, this.visit(ctx.typeExpr()), new nodes_1.List(ctx.typeParam(), ctx
            .typeParam()
            .typeExpr()
            .map(expr => this.visit(expr))));
    }
    visitTupleTypeExpr(ctx) {
        return new nodes_2.TupleTypeExpr(ctx, new nodes_1.List(ctx, ctx.typeExpr().map(expr => this.visit(expr))));
    }
    visitShortOptionTypeExpr(ctx) {
        return new nodes_2.ShortOptionTypeExpr(ctx, this.visit(ctx.typeExpr()));
    }
    visitShortVecTypeExpr(ctx) {
        return new nodes_2.ShortVecTypeExpr(ctx, this.visit(ctx.typeExpr()));
    }
    visitRefTypeExpr(ctx) {
        return new nodes_2.RefTypeExpr(ctx, this.visit(ctx.typeExpr()));
    }
    visitIdent(ctx) {
        return new nodes_2.Ident(ctx, ctx.text);
    }
    visitIdentList(ctx) {
        return new nodes_1.List(ctx, ctx._symbols.map(x => this.visitIdent(x)));
    }
    visitCwspec(ctx) {
        return new nodes_2.CWSpec(ctx, ctx.text);
    }
    visitInterfaceBody(ctx) {
        let items = ctx.interfaceItem() || [];
        return new nodes_1.List(ctx, items.map(x => this.visit(x)));
    }
    visitInterfaceDefn(ctx) {
        return new nodes_2.InterfaceDefn(ctx, ctx._spec ? this.visitCwspec(ctx._spec) : undefined, this.visitIdent(ctx._name), this.visitInterfaceBody(ctx.interfaceBody()), ctx._baseInterfaces ? this.visitIdentList(ctx._baseInterfaces) : undefined);
    }
    visitContractBody(ctx) {
        let items = ctx.contractItem() || [];
        return new nodes_1.List(ctx, items.map(x => this.visit(x)));
    }
    visitContractDefn(ctx) {
        return new nodes_2.ContractDefn(ctx, ctx._spec ? this.visitCwspec(ctx._spec) : undefined, this.visitIdent(ctx._name), this.visitContractBody(ctx.contractBody()), ctx._baseContracts ? this.visitIdentList(ctx._baseContracts) : undefined, ctx._interfaces ? this.visitIdentList(ctx._interfaces) : undefined);
    }
    visitStructMember(ctx) {
        return new nodes_2.StructMember(ctx, ctx._spec ? this.visitCwspec(ctx._spec) : undefined, this.visitIdent(ctx._name), ctx._option ? true : false, this.visit(ctx._valueType));
    }
    visitStructDefn(ctx) {
        let enumVariant = ctx.enumVariant();
        let variants = {
            struct: enumVariant.enumVariant_struct(),
            tuple: enumVariant.enumVariant_tuple(),
        };
        if (variants.struct !== undefined) {
            let x = this.visitEnumVariant_struct(variants.struct);
            return new nodes_2.StructDefn(ctx, ctx._spec ? this.visitCwspec(ctx._spec) : undefined, x.name, x.members);
        }
        else if (variants.tuple !== undefined) {
            let x = this.visitEnumVariant_tuple(variants.tuple);
            return new nodes_2.TupleStructDefn(ctx, ctx._spec ? this.visitCwspec(ctx._spec) : undefined, x.name, x.members);
        }
        throw new Error('Unreachable');
    }
    visitEnumVariant_struct(ctx) {
        let parenStructMembers = ctx.parenStructMembers();
        let curlyStructMembers = ctx.curlyStructMembers();
        if (parenStructMembers !== undefined) {
            return new nodes_2.EnumVariantStruct(ctx, this.visitIdent(ctx._name), new nodes_1.List(parenStructMembers, parenStructMembers.structMember().map(x => this.visitStructMember(x))));
        }
        else if (curlyStructMembers !== undefined) {
            return new nodes_2.EnumVariantStruct(ctx, this.visitIdent(ctx._name), new nodes_1.List(curlyStructMembers, curlyStructMembers.structMember().map(x => this.visitStructMember(x))));
        }
        else {
            throw new Error('unreachable');
        }
    }
    visitEnumVariant_tuple(ctx) {
        return new nodes_2.EnumVariantTuple(ctx, this.visitIdent(ctx._name), new nodes_1.List(ctx.tupleMembers(), ctx
            .tupleMembers()
            .typeExpr()
            .map(x => this.visit(x))));
    }
    // visitEnumVariant_unit(ctx: EnumVariant_unitContext): EnumVariantUnit {
    //   return new EnumVariantUnit(ctx, this.visitIdent(ctx._name));
    // }
    visitErrorDefn(ctx) {
        let struct = this.visitEnumVariant_struct(ctx.enumVariant_struct());
        return new nodes_2.ErrorDefn(ctx, ctx._spec ? this.visitCwspec(ctx._spec) : undefined, struct.name, struct.members);
    }
    visitEventDefn(ctx) {
        let struct = this.visitEnumVariant_struct(ctx.enumVariant_struct());
        return new nodes_2.EventDefn(ctx, ctx._spec ? this.visitCwspec(ctx._spec) : undefined, struct.name, struct.members);
    }
    visitErrorDefnBlock(ctx) {
        let defns = ctx.errorDefnBlock_item() || [];
        return new nodes_1.List(ctx, defns.map(x => this.visitErrorDefn(x)));
    }
    visitEventDefnBlock(ctx) {
        let defns = ctx.eventDefnBlock_item() || [];
        return new nodes_1.List(ctx, defns.map(x => this.visitEventDefn(x)));
    }
    visitStateItemDefn(ctx) {
        let item = ctx._item;
        return new nodes_2.ItemDefn(ctx, ctx._spec ? this.visitCwspec(ctx._spec) : undefined, this.visitIdent(item._key), this.visit(item._valueType));
    }
    visitStateMapDefn(ctx) {
        let map = ctx._map;
        let mapKeys = ctx._map._mapKeys.mapDefnKey() || [];
        return new nodes_2.MapDefn(ctx, ctx._spec ? this.visitCwspec(ctx._spec) : undefined, this.visitIdent(map._key), new nodes_1.List(ctx._map._mapKeys, mapKeys.map(x => this.visitMapDefnKey(x))), this.visit(map._valueType));
    }
    visitStateDefnBlock(ctx) {
        let items = ctx.stateDefnBlock_item() || [];
        return new nodes_1.List(ctx, items.map(x => {
            if (x instanceof CWScriptParser_1.StateBlockItemDefnContext) {
                return this.visitStateItemDefn(x);
            }
            else {
                return this.visitStateMapDefn(x);
            }
        }));
    }
    visitMapDefnKey(ctx) {
        return new nodes_2.MapDefnKey(ctx, ctx._keyName ? this.visitIdent(ctx._keyName) : undefined, this.visit(ctx._keyType));
    }
    visitFnArgs(ctx) {
        var _a;
        let fnArgs = ((_a = ctx.fnArgList()) === null || _a === void 0 ? void 0 : _a.fnArg()) || [];
        return new nodes_1.List(ctx, fnArgs.map(x => this.visitFnArg(x)));
    }
    visitFnArg(ctx) {
        return new nodes_2.FnArg(ctx, this.visitIdent(ctx._argName), ctx._option ? true : false, this.visit(ctx._argType));
    }
    visitNormalFnBody(ctx) {
        let stmts = ctx.stmt() || [];
        return new nodes_1.List(ctx, stmts.map(x => this.visit(x)));
    }
    visitArrowFnBody(ctx) {
        let stmt = ctx.stmt();
        return stmt
            ? new nodes_1.List(ctx, [this.visit(stmt)])
            : new nodes_1.List(ctx.stmt(), []);
    }
    visitFnDefn(ctx) {
        let fn = ctx.namedFnDefn();
        let fnType = fn.fnType();
        return new nodes_2.ExecDefn(ctx, ctx._spec ? this.visitCwspec(ctx._spec) : undefined, this.visitIdent(fn._fnName), this.visitFnArgs(fn.fnArgs()), fnType ? this.visit(fnType) : undefined, this.visit(fn.fnBody()));
    }
    visitInstantiateDefn(ctx) {
        let fnType = ctx.fnType();
        return new nodes_2.InstantiateDefn(ctx, ctx._spec ? this.visitCwspec(ctx._spec) : undefined, undefined, this.visitFnArgs(ctx.fnArgs()), fnType ? this.visit(fnType) : undefined, this.visit(ctx.fnBody()));
    }
    visitExecDefn(ctx) {
        let fn = ctx.namedFnDefn();
        let fnType = fn.fnType();
        return new nodes_2.ExecDefn(ctx, ctx._spec ? this.visitCwspec(ctx._spec) : undefined, this.visitIdent(fn._fnName), this.visitFnArgs(fn.fnArgs()), fnType ? this.visit(fnType) : undefined, this.visit(fn.fnBody()));
    }
    visitExecDefnBlock(ctx) {
        let defns = ctx.execDefnBlock_item() || [];
        return new nodes_1.List(ctx, defns.map(x => this.visitExecDefn(x)));
    }
    visitQueryDefn(ctx) {
        let fn = ctx.namedFnDefn();
        let fnType = fn.fnType();
        return new nodes_2.QueryDefn(ctx, ctx._spec ? this.visitCwspec(ctx._spec) : undefined, this.visitIdent(fn._fnName), this.visitFnArgs(fn.fnArgs()), fnType ? this.visit(fnType) : undefined, this.visit(fn.fnBody()));
    }
    visitMigrateDefn(ctx) {
        let fnType = ctx.fnType();
        return new nodes_2.MigrateDefn(ctx, ctx._spec ? this.visitCwspec(ctx._spec) : undefined, undefined, this.visitFnArgs(ctx.fnArgs()), fnType ? this.visit(fnType) : undefined, this.visit(ctx.fnBody()));
    }
    visitQueryDefnBlock(ctx) {
        let defns = ctx.queryDefnBlock_item() || [];
        return new nodes_1.List(ctx, defns.map(x => this.visitQueryDefn(x)));
    }
    visitInstantiateDecl(ctx) {
        let fnType = ctx.fnType();
        return new nodes_2.InstantiateDecl(ctx, ctx._spec ? this.visitCwspec(ctx._spec) : undefined, undefined, this.visitFnArgs(ctx.fnArgs()), fnType ? this.visit(fnType) : undefined);
    }
    visitExecDecl(ctx) {
        let fn = ctx.namedFnDecl();
        let fnType = fn.fnType();
        return new nodes_2.ExecDecl(ctx, ctx._spec ? this.visitCwspec(ctx._spec) : undefined, this.visitIdent(fn._fnName), this.visitFnArgs(fn.fnArgs()), fnType ? this.visit(fnType) : undefined);
    }
    visitExecDeclBlock(ctx) {
        let defns = ctx.execDeclBlock_item() || [];
        return new nodes_1.List(ctx, defns.map(x => this.visitExecDecl(x)));
    }
    visitQueryDecl(ctx) {
        let fn = ctx.namedFnDecl();
        let fnType = fn.fnType();
        return new nodes_2.QueryDecl(ctx, ctx._spec ? this.visitCwspec(ctx._spec) : undefined, this.visitIdent(fn._fnName), this.visitFnArgs(fn.fnArgs()), fnType ? this.visit(fnType) : undefined);
    }
    visitQueryDeclBlock(ctx) {
        let defns = ctx.queryDeclBlock_item() || [];
        return new nodes_1.List(ctx, defns.map(x => this.visitQueryDecl(x)));
    }
    visitMigrateDecl(ctx) {
        let fnType = ctx.fnType();
        return new nodes_2.MigrateDecl(ctx, ctx._spec ? this.visitCwspec(ctx._spec) : undefined, undefined, this.visitFnArgs(ctx.fnArgs()), fnType ? this.visit(fnType) : undefined);
    }
    visitUnitVal(ctx) {
        return new nodes_2.UnitVal(ctx);
    }
    visitTrueVal(ctx) {
        return new nodes_2.BoolVal(ctx, true);
    }
    visitFalseVal(ctx) {
        return new nodes_2.BoolVal(ctx, false);
    }
    visitIntegerVal(ctx) {
        return new nodes_2.IntegerVal(ctx, ctx.text);
    }
    visitDecimalVal(ctx) {
        return new nodes_2.DecimalVal(ctx, ctx.text);
    }
    visitStringVal(ctx) {
        return new nodes_2.StringVal(ctx, ctx.text);
    }
    visitTupleVal(ctx) {
        let type = this.visit(ctx._tupleType);
        let items = ctx.exprList().expr() || [];
        return new nodes_2.TupleVal(ctx, type, new nodes_1.List(ctx.exprList(), items.map(x => this.visit(x))));
    }
    visitVecVal(ctx) {
        let items = ctx.exprList().expr() || [];
        return new nodes_2.VecVal(ctx, new nodes_1.List(ctx.exprList(), items.map(x => this.visit(x))));
    }
    visitStructVal(ctx) {
        var _a;
        let structVal = ctx.structVal_();
        let type = this.visit(structVal._structType);
        let members = ((_a = structVal.structValMembers()) === null || _a === void 0 ? void 0 : _a.structValMember()) || [];
        return new nodes_2.StructVal(ctx, type, new nodes_1.List(structVal.structValMembers(), members.map(x => this.visitStructValMember(x))));
    }
    visitStructValMember(ctx) {
        return new nodes_2.StructValMember(ctx, this.visitIdent(ctx._name), this.visit(ctx._value));
    }
    visitQueryExpr(ctx) {
        return new nodes_2.QueryExpr(ctx, this.visit(ctx.expr()));
    }
    visitOrExpr(ctx) {
        let lhs = this.visit(ctx.expr(0));
        let rhs = this.visit(ctx.expr(1));
        return new nodes_2.OrExpr(ctx, lhs, rhs);
    }
    visitAndExpr(ctx) {
        let lhs = this.visit(ctx.expr(0));
        let rhs = this.visit(ctx.expr(1));
        return new nodes_2.AndExpr(ctx, lhs, rhs);
    }
    visitEqExpr(ctx) {
        let lhs = this.visit(ctx.expr(0));
        let rhs = this.visit(ctx.expr(1));
        return new nodes_2.CompOpExpr(ctx, lhs, ctx._op.text, rhs);
    }
    visitCompExpr(ctx) {
        let lhs = this.visit(ctx.expr(0));
        let rhs = this.visit(ctx.expr(1));
        return new nodes_2.CompOpExpr(ctx, lhs, ctx._op.text, rhs);
    }
    visitAddSubExpr(ctx) {
        let lhs = this.visit(ctx.expr(0));
        let rhs = this.visit(ctx.expr(1));
        return new nodes_2.ArithmeticOpExpr(ctx, lhs, ctx._op.text, rhs);
    }
    visitMultDivModExpr(ctx) {
        let lhs = this.visit(ctx.expr(0));
        let rhs = this.visit(ctx.expr(1));
        return new nodes_2.ArithmeticOpExpr(ctx, lhs, ctx._op.text, rhs);
    }
    visitExprExpr(ctx) {
        let lhs = this.visit(ctx.expr(0));
        let rhs = this.visit(ctx.expr(1));
        return new nodes_2.ExpExpr(ctx, lhs, rhs);
    }
    visitUnaryExpr(ctx) {
        let expr = this.visit(ctx.expr());
        return new nodes_2.UnaryExpr(ctx, ctx._op.text, expr);
    }
    visitPosArgsFnCallExpr(ctx) {
        var _a;
        let fn = this.visit(ctx.expr());
        let args = ((_a = ctx.exprList()) === null || _a === void 0 ? void 0 : _a.expr()) || [];
        return new nodes_2.PosArgsFnCallExpr(ctx, fn, new nodes_1.List(ctx.exprList(), args.map(x => this.visit(x))));
    }
    visitNamedArgsFnCallExpr(ctx) {
        var _a;
        let fn = this.visit(ctx.expr());
        let args = ((_a = ctx.namedExprList()) === null || _a === void 0 ? void 0 : _a.namedExpr()) || [];
        return new nodes_2.NamedArgsFnCallExpr(ctx, fn, new nodes_1.List(ctx.namedExprList(), args.map(x => this.visitNamedExpr(x))));
    }
    visitNamedExpr(ctx) {
        return new nodes_2.NamedExpr(ctx, this.visitIdent(ctx._name), this.visit(ctx._value));
    }
    visitGroupedExpr(ctx) {
        return this.visit(ctx.expr());
    }
    visitStateItemAccessExpr(ctx) {
        return new nodes_2.StateItemAccessExpr(ctx, this.visitIdent(ctx._key));
    }
    visitStateMapAccessExpr(ctx) {
        let mapKeys = new nodes_1.List(ctx, ctx._mapKeys.map(x => this.visit(x)));
        return new nodes_2.StateMapAccessExpr(ctx, this.visitIdent(ctx._key), mapKeys);
    }
    visitTableLookupExpr(ctx) {
        let table = this.visit(ctx.expr(0));
        let key = this.visit(ctx.expr(1));
        return new nodes_2.TableLookupExpr(ctx, table, key);
    }
    visitMemberAccessExpr(ctx) {
        let obj = this.visit(ctx.expr());
        let member = this.visitIdent(ctx.ident());
        if (obj instanceof nodes_2.Ident) {
            switch (obj.text) {
                case 'state':
                    return new nodes_2.Ext.State(member.text);
                case 'msg':
                case 'api':
                case 'env':
                    return new nodes_2.Ext.SpecialVariable(obj.text, member.text);
                default:
                    break;
            }
        }
        return new nodes_2.MemberAccessExpr(ctx, obj, member);
    }
    visitIfExpr_(ctx) {
        var _a, _b;
        let ifClause = this.visit(ctx.ifClause_());
        let elseIfClauses = ((_a = ctx
            .elseIfClauses()) === null || _a === void 0 ? void 0 : _a.ifClause_().map(x => this.visit(x))) || [];
        let elseClause = (_b = ctx.elseClause()) === null || _b === void 0 ? void 0 : _b.fnBody();
        return new nodes_2.IfExpr(ctx, ifClause, new nodes_1.List(ctx.elseIfClauses(), elseIfClauses), elseClause
            ? this.visit(elseClause)
            : new nodes_1.List(ctx.elseClause(), []));
    }
    visitIfClause(ctx) {
        return new nodes_2.IfClause(ctx, this.visit(ctx._predicate), this.visit(ctx.fnBody()));
    }
    visitIfLetClause(ctx) {
        return new nodes_2.IfLetClause(ctx, this.visit(ctx.letStmt_()), this.visit(ctx.fnBody()));
    }
    visitExecStmt(ctx) {
        return new nodes_2.ExecStmt(ctx, this.visit(ctx.expr()));
    }
    visitExecuteNowStmt(ctx) {
        return new nodes_1.ExecuteNowStmt(ctx, this.visit(ctx.msg()));
    }
    visitMsg(ctx) {
        return new nodes_1.Msg(ctx, this.visit(ctx.expr()), this.visit(ctx.ident()), this.visit(ctx.exprList()));
    }
    visitExprList(ctx) {
        return new nodes_1.ExprList(ctx, ctx.expr().map(x => this.visit(x)));
    }
    visitReturnStmt(ctx) {
        return new nodes_2.ReturnStmt(ctx, this.visit(ctx.expr()));
    }
    visitEmitStmt(ctx) {
        return new nodes_2.EmitStmt(ctx, this.visit(ctx.expr()));
    }
    visitFailStmt(ctx) {
        return new nodes_2.FailStmt(ctx, this.visit(ctx.expr()));
    }
    visitAssignStmt_(ctx) {
        let assignOp = ctx._assignOp.text;
        let lhs = this.visit(ctx._lhs);
        let rhs = this.visit(ctx._rhs);
        return new nodes_2.AssignStmt(ctx, lhs, assignOp, rhs);
    }
    visitInnerPath(ctx) {
        return new nodes_2.InnerPath(ctx, this.visitIdent(ctx._name), ctx._tableKey ? this.visit(ctx._tableKey) : undefined);
    }
    visitStateItemAssignLHS(ctx) {
        return new nodes_2.StateItemAssignLHS(ctx, this.visitIdent(ctx.ident()), ctx._inner
            ? new nodes_1.List(ctx, ctx._inner._paths.map(x => this.visitInnerPath(x)))
            : undefined);
    }
    visitStateMapAssignLHS(ctx) {
        let key = this.visitIdent(ctx._key);
        let mapKeys = new nodes_1.List(ctx._mapKeys, ctx._mapKeys.map(x => this.visit(x)));
        return new nodes_2.StateMapAssignLHS(ctx, key, mapKeys, ctx._inner
            ? new nodes_1.List(ctx, ctx._inner._paths.map(x => this.visitInnerPath(x)))
            : undefined);
    }
    visitIdentAssignLHS(ctx) {
        return new nodes_2.IdentAssignLHS(ctx, this.visitIdent(ctx.ident()));
    }
    visitMemberAssignLHS(ctx) {
        return new nodes_2.MemberAssignLHS(ctx, this.visit(ctx._obj), this.visitIdent(ctx._member));
    }
    visitTableAssignLHS(ctx) {
        return new nodes_2.TableAssignLHS(ctx, this.visit(ctx._table), this.visit(ctx._key));
    }
    visitForInStmt(ctx) {
        return new nodes_1.ForInStmt(ctx, this.visit(ctx._item), this.visit(ctx._iterItems), this.visit(ctx.fnBody()));
    }
    visitLetStmt_(ctx) {
        return new nodes_2.LetStmt(ctx, this.visit(ctx.letLHS()), this.visit(ctx.expr()));
    }
    visitIdentLHS(ctx) {
        let typeExpr = ctx.typeExpr();
        return new nodes_2.IdentLHS(ctx, this.visitIdent(ctx.ident()), typeExpr ? this.visit(typeExpr) : undefined);
    }
    visitStructUnpackLHS(ctx) {
        return new nodes_2.StructUnpackLHS(ctx, this.visit(ctx.identList()));
    }
}
exports.CWScriptASTVisitor = CWScriptASTVisitor;
//# sourceMappingURL=ast-builder.js.map