"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeAliasDefn = exports.EnumDefn = exports.TupleStructDefn = exports.StructDefn = exports.ReflectiveTypeExpr = exports.RefTypeExpr = exports.ShortVecTypeExpr = exports.ShortOptionTypeExpr = exports.TupleTypeExpr = exports.ParamzdTypeExpr = exports.TypePath = void 0;
const _1 = require("./");
class TypePath extends _1.AST {
    constructor(ctx, root, paths) {
        super(ctx);
        this.ctx = ctx;
        this.root = root;
        this.paths = paths;
        this.setParentForChildren();
    }
    toString() {
        return this.paths.map(x => x.text).join('::');
    }
}
exports.TypePath = TypePath;
class ParamzdTypeExpr extends _1.AST {
    constructor(ctx, type, params) {
        super(ctx);
        this.ctx = ctx;
        this.type = type;
        this.params = params;
        this.setParentForChildren();
    }
}
exports.ParamzdTypeExpr = ParamzdTypeExpr;
class TupleTypeExpr extends _1.AST {
    constructor(ctx, members) {
        super(ctx);
        this.ctx = ctx;
        this.members = members;
        this.setParentForChildren();
    }
}
exports.TupleTypeExpr = TupleTypeExpr;
class ShortOptionTypeExpr extends _1.AST {
    constructor(ctx, type) {
        super(ctx);
        this.ctx = ctx;
        this.type = type;
        this.setParentForChildren();
    }
}
exports.ShortOptionTypeExpr = ShortOptionTypeExpr;
class ShortVecTypeExpr extends _1.AST {
    constructor(ctx, type) {
        super(ctx);
        this.ctx = ctx;
        this.type = type;
        this.setParentForChildren();
    }
}
exports.ShortVecTypeExpr = ShortVecTypeExpr;
class RefTypeExpr extends _1.AST {
    constructor(ctx, type) {
        super(ctx);
        this.ctx = ctx;
        this.type = type;
        this.setParentForChildren();
    }
}
exports.RefTypeExpr = RefTypeExpr;
class ReflectiveTypeExpr extends _1.AST {
    constructor(ctx, type, member) {
        super(ctx);
        this.ctx = ctx;
        this.type = type;
        this.member = member;
        this.setParentForChildren();
    }
}
exports.ReflectiveTypeExpr = ReflectiveTypeExpr;
class StructDefn extends _1.AST {
    constructor(ctx, spec, name, members) {
        super(ctx);
        this.ctx = ctx;
        this.spec = spec;
        this.name = name;
        this.members = members;
        this.setParentForChildren();
    }
    toString() {
        return `${this.name.text}`;
    }
}
exports.StructDefn = StructDefn;
class TupleStructDefn extends _1.AST {
    constructor(ctx, spec, name, members) {
        super(ctx);
        this.ctx = ctx;
        this.spec = spec;
        this.name = name;
        this.members = members;
        this.setParentForChildren();
    }
}
exports.TupleStructDefn = TupleStructDefn;
class EnumDefn extends _1.AST {
    constructor(ctx, spec, name, variants) {
        super(ctx);
        this.ctx = ctx;
        this.spec = spec;
        this.name = name;
        this.variants = variants;
        this.setParentForChildren();
    }
}
exports.EnumDefn = EnumDefn;
class TypeAliasDefn extends _1.AST {
    constructor(ctx, spec, name, type) {
        super(ctx);
        this.ctx = ctx;
        this.spec = spec;
        this.name = name;
        this.type = type;
        this.setParentForChildren();
    }
}
exports.TypeAliasDefn = TypeAliasDefn;
//# sourceMappingURL=type.js.map