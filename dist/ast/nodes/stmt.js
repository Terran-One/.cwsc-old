"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FailStmt = exports.ReturnStmt = exports.EmitStmt = exports.ExecuteNowStmt = exports.ExecStmt = exports.ForTimesStmt = exports.ForInStmt = exports.IfLetClause = exports.IfClause = exports.IfExpr = exports.StateMapAssignLHS = exports.StateItemAssignLHS = exports.InnerPath = exports.TableAssignLHS = exports.MemberAssignLHS = exports.IdentAssignLHS = exports.AssignStmt = exports.StructUnpackLHS = exports.IdentLHS = exports.LetStmt = void 0;
const _1 = require("./");
//@Node()
class LetStmt extends _1.AST {
    constructor(ctx, lhs, rhs) {
        super(ctx);
        this.ctx = ctx;
        this.lhs = lhs;
        this.rhs = rhs;
        this.setParentForChildren();
    }
}
exports.LetStmt = LetStmt;
//@Node()
class IdentLHS extends _1.AST {
    constructor(ctx, name, type) {
        super(ctx);
        this.ctx = ctx;
        this.name = name;
        this.type = type;
        this.setParentForChildren();
    }
}
exports.IdentLHS = IdentLHS;
//@Node()
class StructUnpackLHS extends _1.AST {
    constructor(ctx, names) {
        super(ctx);
        this.ctx = ctx;
        this.names = names;
        this.setParentForChildren();
    }
}
exports.StructUnpackLHS = StructUnpackLHS;
//@Node()
class AssignStmt extends _1.AST {
    constructor(ctx, lhs, assignOp, rhs) {
        super(ctx);
        this.ctx = ctx;
        this.lhs = lhs;
        this.assignOp = assignOp;
        this.rhs = rhs;
        this.setParentForChildren();
    }
}
exports.AssignStmt = AssignStmt;
//@Node()
class IdentAssignLHS extends _1.AST {
    constructor(ctx, ident) {
        super(ctx);
        this.ctx = ctx;
        this.ident = ident;
        this.setParentForChildren();
    }
}
exports.IdentAssignLHS = IdentAssignLHS;
//@Node()
class MemberAssignLHS extends _1.AST {
    constructor(ctx, obj, member) {
        super(ctx);
        this.ctx = ctx;
        this.obj = obj;
        this.member = member;
        this.setParentForChildren();
    }
}
exports.MemberAssignLHS = MemberAssignLHS;
//@Node()
class TableAssignLHS extends _1.AST {
    constructor(ctx, table, key) {
        super(ctx);
        this.ctx = ctx;
        this.table = table;
        this.key = key;
        this.setParentForChildren();
    }
}
exports.TableAssignLHS = TableAssignLHS;
//@Node()
class InnerPath extends _1.AST {
    constructor(ctx, name, tableKey) {
        super(ctx);
        this.ctx = ctx;
        this.name = name;
        this.tableKey = tableKey;
        this.setParentForChildren();
    }
}
exports.InnerPath = InnerPath;
//@Node()
class StateItemAssignLHS extends _1.AST {
    constructor(ctx, key, inner) {
        super(ctx);
        this.ctx = ctx;
        this.key = key;
        this.inner = inner;
        this.setParentForChildren();
    }
}
exports.StateItemAssignLHS = StateItemAssignLHS;
//@Node()
class StateMapAssignLHS extends _1.AST {
    constructor(ctx, key, mapKeys, inner) {
        super(ctx);
        this.ctx = ctx;
        this.key = key;
        this.mapKeys = mapKeys;
        this.inner = inner;
        this.setParentForChildren();
    }
}
exports.StateMapAssignLHS = StateMapAssignLHS;
//@Node()
class IfExpr extends _1.AST {
    constructor(ctx, ifClause, elseIfClauses, elseClause) {
        super(ctx);
        this.ctx = ctx;
        this.ifClause = ifClause;
        this.elseIfClauses = elseIfClauses;
        this.elseClause = elseClause;
        this.setParentForChildren();
    }
}
exports.IfExpr = IfExpr;
//@Node()
class IfClause extends _1.AST {
    constructor(ctx, predicate, body) {
        super(ctx);
        this.ctx = ctx;
        this.predicate = predicate;
        this.body = body;
        this.setParentForChildren();
    }
}
exports.IfClause = IfClause;
//@Node()
class IfLetClause extends _1.AST {
    constructor(ctx, letStmt, body) {
        super(ctx);
        this.ctx = ctx;
        this.letStmt = letStmt;
        this.body = body;
        this.setParentForChildren();
    }
}
exports.IfLetClause = IfLetClause;
//@Node()
class ForInStmt extends _1.AST {
    constructor(ctx, bindings, iterable, body) {
        super(ctx);
        this.ctx = ctx;
        this.bindings = bindings;
        this.iterable = iterable;
        this.body = body;
        this.setParentForChildren();
    }
}
exports.ForInStmt = ForInStmt;
//@Node()
class ForTimesStmt extends _1.AST {
    constructor(ctx, expr, body) {
        super(ctx);
        this.ctx = ctx;
        this.expr = expr;
        this.body = body;
        this.setParentForChildren();
    }
}
exports.ForTimesStmt = ForTimesStmt;
//@Node()
class ExecStmt extends _1.AST {
    constructor(ctx, expr) {
        super(ctx);
        this.ctx = ctx;
        this.expr = expr;
        this.setParentForChildren();
    }
}
exports.ExecStmt = ExecStmt;
//@Node()
class ExecuteNowStmt extends _1.AST {
    constructor(ctx, msg) {
        super(ctx);
        this.ctx = ctx;
        this.msg = msg;
        this.setParentForChildren();
    }
}
exports.ExecuteNowStmt = ExecuteNowStmt;
//@Node()
class EmitStmt extends _1.AST {
    constructor(ctx, expr) {
        super(ctx);
        this.ctx = ctx;
        this.expr = expr;
        this.setParentForChildren();
    }
}
exports.EmitStmt = EmitStmt;
//@Node()
class ReturnStmt extends _1.AST {
    constructor(ctx, expr) {
        super(ctx);
        this.ctx = ctx;
        this.expr = expr;
        this.setParentForChildren();
    }
}
exports.ReturnStmt = ReturnStmt;
//@Node()
class FailStmt extends _1.AST {
    constructor(ctx, expr) {
        super(ctx);
        this.ctx = ctx;
        this.expr = expr;
        this.setParentForChildren();
    }
}
exports.FailStmt = FailStmt;
//# sourceMappingURL=stmt.js.map