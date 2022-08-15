"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrateDecl = exports.QueryDecl = exports.ExecDecl = exports.InstantiateDecl = exports.FnDecl = exports.MigrateDefn = exports.QueryDefn = exports.ExecDefn = exports.InstantiateDefn = exports.MapDefnKey = exports.MapDefn = exports.ItemDefn = exports.StateDefn = exports.EventDefn = exports.ErrorDefn = exports.ContractDefn = exports.InterfaceDefn = void 0;
const _1 = require(".");
const type_1 = require("./type");
//@Node()
class InterfaceDefn extends _1.AST {
    constructor(ctx, spec, name, body, baseInterfaces) {
        super(ctx);
        this.ctx = ctx;
        this.spec = spec;
        this.name = name;
        this.body = body;
        this.baseInterfaces = baseInterfaces;
        this.setParentForChildren();
    }
}
exports.InterfaceDefn = InterfaceDefn;
//@Node()
class ContractDefn extends _1.AST {
    constructor(ctx, spec, name, body, baseContracts, interfaces) {
        super(ctx);
        this.ctx = ctx;
        this.spec = spec;
        this.name = name;
        this.body = body;
        this.baseContracts = baseContracts;
        this.interfaces = interfaces;
        this.setParentForChildren();
    }
}
exports.ContractDefn = ContractDefn;
class ErrorDefn extends type_1.StructDefn {
}
exports.ErrorDefn = ErrorDefn;
//@Node()
class EventDefn extends type_1.StructDefn {
}
exports.EventDefn = EventDefn;
class StateDefn extends _1.AST {
    constructor(ctx, key, type) {
        super();
        this.ctx = ctx;
        this.key = key;
        this.type = type;
    }
}
exports.StateDefn = StateDefn;
//@Node()
class ItemDefn extends StateDefn {
    constructor(ctx, spec, key, type) {
        super(ctx, key, type);
        this.ctx = ctx;
        this.spec = spec;
        this.setParentForChildren();
    }
}
exports.ItemDefn = ItemDefn;
//@Node()
class MapDefn extends StateDefn {
    constructor(ctx, spec, key, mapKeys, type) {
        super(ctx, key, type);
        this.ctx = ctx;
        this.spec = spec;
        this.mapKeys = mapKeys;
        this.setParentForChildren();
    }
}
exports.MapDefn = MapDefn;
//@Node()
class MapDefnKey extends _1.AST {
    constructor(ctx, name, type) {
        super(ctx);
        this.ctx = ctx;
        this.name = name;
        this.type = type;
        this.setParentForChildren();
    }
}
exports.MapDefnKey = MapDefnKey;
//@Node()
class InstantiateDefn extends _1.FnDefn {
}
exports.InstantiateDefn = InstantiateDefn;
//@Node()
class ExecDefn extends _1.FnDefn {
}
exports.ExecDefn = ExecDefn;
//@Node()
class QueryDefn extends _1.FnDefn {
}
exports.QueryDefn = QueryDefn;
class MigrateDefn extends _1.FnDefn {
}
exports.MigrateDefn = MigrateDefn;
class FnDecl extends _1.AST {
    constructor(ctx, spec, name, args, returnType) {
        super(ctx);
        this.ctx = ctx;
        this.spec = spec;
        this.name = name;
        this.args = args;
        this.returnType = returnType;
        this.setParentForChildren();
    }
}
exports.FnDecl = FnDecl;
class InstantiateDecl extends FnDecl {
}
exports.InstantiateDecl = InstantiateDecl;
class ExecDecl extends FnDecl {
}
exports.ExecDecl = ExecDecl;
class QueryDecl extends FnDecl {
}
exports.QueryDecl = QueryDecl;
class MigrateDecl extends FnDecl {
}
exports.MigrateDecl = MigrateDecl;
//# sourceMappingURL=contract-items.js.map