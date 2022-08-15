"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FnDefn = exports.FnArg = exports.EnumVariantTuple = exports.EnumVariantStruct = exports.ImportItem = exports.ImportItemsStmt = exports.ImportAllStmt = exports.ImportStmt = exports.SourceFile = exports.CWSpec = exports.EmptyAST = exports.StructMember = void 0;
const _1 = require("./");
class StructMember extends _1.AST {
    constructor(ctx, spec, name, option, type) {
        super(ctx);
        this.ctx = ctx;
        this.spec = spec;
        this.name = name;
        this.option = option;
        this.type = type;
        this.setParentForChildren();
    }
}
exports.StructMember = StructMember;
class EmptyAST extends _1.AST {
}
exports.EmptyAST = EmptyAST;
class CWSpec extends _1.AST {
    constructor(ctx, text) {
        super(ctx);
        this.ctx = ctx;
        this.text = text;
        this.setParentForChildren();
    }
}
exports.CWSpec = CWSpec;
class SourceFile extends _1.AST {
    constructor(ctx, spec, stmts) {
        super(ctx);
        this.ctx = ctx;
        this.spec = spec;
        this.stmts = stmts;
        this.setParentForChildren();
    }
}
exports.SourceFile = SourceFile;
//@Node()
class ImportStmt extends _1.AST {
    constructor(ctx, fileName) {
        super(ctx);
        this.ctx = ctx;
        this.fileName = fileName;
        this.setParentForChildren();
    }
}
exports.ImportStmt = ImportStmt;
class ImportAllStmt extends ImportStmt {
    constructor(ctx, fileName) {
        super(ctx, fileName);
        this.ctx = ctx;
        this.fileName = fileName;
        this.setParentForChildren();
    }
}
exports.ImportAllStmt = ImportAllStmt;
class ImportItemsStmt extends ImportStmt {
    constructor(ctx, fileName, items) {
        super(ctx, fileName);
        this.ctx = ctx;
        this.fileName = fileName;
        this.items = items;
        this.setParentForChildren();
    }
}
exports.ImportItemsStmt = ImportItemsStmt;
//@Node()
class ImportItem extends _1.AST {
    constructor(ctx, symbol, alias) {
        super(ctx);
        this.ctx = ctx;
        this.symbol = symbol;
        this.alias = alias;
        this.setParentForChildren();
    }
}
exports.ImportItem = ImportItem;
//@Node()
class EnumVariantStruct extends _1.AST {
    constructor(ctx, name, members) {
        super(ctx);
        this.ctx = ctx;
        this.name = name;
        this.members = members;
        this.setParentForChildren();
    }
}
exports.EnumVariantStruct = EnumVariantStruct;
//@Node()
class EnumVariantTuple extends _1.AST {
    constructor(ctx, name, members) {
        super(ctx);
        this.ctx = ctx;
        this.name = name;
        this.members = members;
        this.setParentForChildren();
    }
}
exports.EnumVariantTuple = EnumVariantTuple;
class FnArg extends _1.AST {
    constructor(ctx, name, option, type) {
        super(ctx);
        this.ctx = ctx;
        this.name = name;
        this.option = option;
        this.type = type;
        this.setParentForChildren();
    }
}
exports.FnArg = FnArg;
class FnDefn extends _1.AST {
    constructor(ctx, spec, name, args, returnType, body) {
        super(ctx);
        this.ctx = ctx;
        this.spec = spec;
        this.name = name;
        this.args = args;
        this.returnType = returnType;
        this.body = body;
        this.setParentForChildren();
    }
}
exports.FnDefn = FnDefn;
//# sourceMappingURL=common.js.map