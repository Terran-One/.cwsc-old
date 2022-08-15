"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoolVal = exports.DecimalVal = exports.IntegerVal = exports.StringVal = exports.VecVal = exports.TupleVal = exports.NamedExpr = exports.StructValMember = exports.StructVal = exports.UnitVal = exports.QueryExpr = exports.OrExpr = exports.AndExpr = exports.CompOpExpr = exports.ArithmeticOpExpr = exports.ExpExpr = exports.UnaryExpr = exports.NamedArgsFnCallExpr = exports.PosArgsFnCallExpr = exports.TableLookupExpr = exports.MemberAccessExpr = exports.StateMapAccessExpr = exports.StateItemAccessExpr = exports.Ident = exports.ExprList = exports.Msg = void 0;
const _1 = require("./");
//@Node()
class Msg extends _1.AST {
    constructor(ctx, klass, method, args) {
        super(ctx);
        this.ctx = ctx;
        this.klass = klass;
        this.method = method;
        this.args = args;
        this.setParentForChildren();
    }
}
exports.Msg = Msg;
//@Node()
class ExprList extends _1.AST {
    constructor(ctx, elements) {
        super(ctx);
        this.ctx = ctx;
        this.elements = elements;
        this.setParentForChildren();
    }
}
exports.ExprList = ExprList;
class Ident extends _1.AST {
    constructor(ctx, text) {
        super(ctx);
        this.ctx = ctx;
        this.text = text;
        this.setParentForChildren();
    }
}
exports.Ident = Ident;
//@Node()
class StateItemAccessExpr extends _1.AST {
    constructor(ctx, key) {
        super(ctx);
        this.ctx = ctx;
        this.key = key;
        this.setParentForChildren();
    }
}
exports.StateItemAccessExpr = StateItemAccessExpr;
//@Node()
class StateMapAccessExpr extends _1.AST {
    constructor(ctx, key, mapKeys) {
        super(ctx);
        this.ctx = ctx;
        this.key = key;
        this.mapKeys = mapKeys;
        this.setParentForChildren();
    }
}
exports.StateMapAccessExpr = StateMapAccessExpr;
//@Node()
class MemberAccessExpr extends _1.AST {
    constructor(ctx, lhs, member) {
        super(ctx);
        this.ctx = ctx;
        this.lhs = lhs;
        this.member = member;
        this.setParentForChildren();
    }
}
exports.MemberAccessExpr = MemberAccessExpr;
//@Node()
class TableLookupExpr extends _1.AST {
    constructor(ctx, lhs, key) {
        super(ctx);
        this.ctx = ctx;
        this.lhs = lhs;
        this.key = key;
        this.setParentForChildren();
    }
}
exports.TableLookupExpr = TableLookupExpr;
//@Node()
class PosArgsFnCallExpr extends _1.AST {
    constructor(ctx, fn, args) {
        super(ctx);
        this.ctx = ctx;
        this.fn = fn;
        this.args = args;
        this.setParentForChildren();
    }
}
exports.PosArgsFnCallExpr = PosArgsFnCallExpr;
//@Node()
class NamedArgsFnCallExpr extends _1.AST {
    constructor(ctx, fn, args) {
        super(ctx);
        this.ctx = ctx;
        this.fn = fn;
        this.args = args;
        this.setParentForChildren();
    }
}
exports.NamedArgsFnCallExpr = NamedArgsFnCallExpr;
//@Node()
class UnaryExpr extends _1.AST {
    constructor(ctx, op, expr) {
        super(ctx);
        this.ctx = ctx;
        this.op = op;
        this.expr = expr;
        this.setParentForChildren();
    }
}
exports.UnaryExpr = UnaryExpr;
//@Node()
class ExpExpr extends _1.AST {
    constructor(ctx, lhs, rhs) {
        super(ctx);
        this.ctx = ctx;
        this.lhs = lhs;
        this.rhs = rhs;
        this.setParentForChildren();
    }
}
exports.ExpExpr = ExpExpr;
//@Node()
class ArithmeticOpExpr extends _1.AST {
    constructor(ctx, lhs, op, rhs) {
        super(ctx);
        this.ctx = ctx;
        this.lhs = lhs;
        this.op = op;
        this.rhs = rhs;
        this.setParentForChildren();
    }
}
exports.ArithmeticOpExpr = ArithmeticOpExpr;
//@Node()
class CompOpExpr extends _1.AST {
    constructor(ctx, lhs, op, rhs) {
        super(ctx);
        this.ctx = ctx;
        this.lhs = lhs;
        this.op = op;
        this.rhs = rhs;
        this.setParentForChildren();
    }
}
exports.CompOpExpr = CompOpExpr;
//@Node()
class AndExpr extends _1.AST {
    constructor(ctx, lhs, rhs) {
        super(ctx);
        this.ctx = ctx;
        this.lhs = lhs;
        this.rhs = rhs;
        this.setParentForChildren();
    }
}
exports.AndExpr = AndExpr;
//@Node()
class OrExpr extends _1.AST {
    constructor(ctx, lhs, rhs) {
        super(ctx);
        this.ctx = ctx;
        this.lhs = lhs;
        this.rhs = rhs;
        this.setParentForChildren();
    }
}
exports.OrExpr = OrExpr;
//@Node()
class QueryExpr extends _1.AST {
    constructor(ctx, expr) {
        super(ctx);
        this.ctx = ctx;
        this.expr = expr;
        this.setParentForChildren();
    }
}
exports.QueryExpr = QueryExpr;
// AST to structuretatements
//@Node()
class UnitVal extends _1.AST {
    constructor(ctx) {
        super(ctx);
        this.ctx = ctx;
        this.setParentForChildren();
    }
}
exports.UnitVal = UnitVal;
//@Node()
class StructVal extends _1.AST {
    constructor(ctx, type, members) {
        super(ctx);
        this.ctx = ctx;
        this.type = type;
        this.members = members;
        this.setParentForChildren();
    }
}
exports.StructVal = StructVal;
//@Node()
class StructValMember extends _1.AST {
    constructor(ctx, name, value) {
        super(ctx);
        this.ctx = ctx;
        this.name = name;
        this.value = value;
        this.setParentForChildren();
    }
}
exports.StructValMember = StructValMember;
//@Node()
class NamedExpr extends _1.AST {
    constructor(ctx, name, value) {
        super(ctx);
        this.ctx = ctx;
        this.name = name;
        this.value = value;
        this.setParentForChildren();
    }
}
exports.NamedExpr = NamedExpr;
//@Node()
class TupleVal extends _1.AST {
    constructor(ctx, type, members) {
        super(ctx);
        this.ctx = ctx;
        this.type = type;
        this.members = members;
        this.setParentForChildren();
    }
}
exports.TupleVal = TupleVal;
//@Node()
class VecVal extends _1.AST {
    constructor(ctx, elements) {
        super(ctx);
        this.ctx = ctx;
        this.elements = elements;
        this.setParentForChildren();
    }
}
exports.VecVal = VecVal;
//@Node()
class StringVal extends _1.AST {
    constructor(ctx, value) {
        super(ctx);
        this.ctx = ctx;
        this.value = value;
        this.setParentForChildren();
    }
}
exports.StringVal = StringVal;
//@Node()
class IntegerVal extends _1.AST {
    constructor(ctx, value) {
        super(ctx);
        this.ctx = ctx;
        this.value = value;
        this.setParentForChildren();
    }
}
exports.IntegerVal = IntegerVal;
//@Node()
class DecimalVal extends _1.AST {
    constructor(ctx, value) {
        super(ctx);
        this.ctx = ctx;
        this.value = value;
        this.setParentForChildren();
    }
}
exports.DecimalVal = DecimalVal;
//@Node()
class BoolVal extends _1.AST {
    constructor(ctx, value) {
        super(ctx);
        this.ctx = ctx;
        this.value = value;
        this.setParentForChildren();
    }
}
exports.BoolVal = BoolVal;
//# sourceMappingURL=expr.js.map