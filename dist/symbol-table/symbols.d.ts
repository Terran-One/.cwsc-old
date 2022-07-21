import * as Rust from '../rust';
import * as AST from '../ast/nodes';
export declare class CWScriptSymbol {
}
export declare namespace CWScriptSymbol {
    class LocalVariable extends CWScriptSymbol {
        tmpVar: Rust.Expr.Path;
        type: AST.TypeExpr;
        value: Rust.Expr;
        constructor(tmpVar: Rust.Expr.Path, type: AST.TypeExpr, value: Rust.Expr);
    }
    class StateItem extends CWScriptSymbol {
        key: string;
        type: Rust.Type;
        constructor(key: string, type: Rust.Type);
    }
    class StateMap extends CWScriptSymbol {
        ast: AST.MapDefn;
        constructor(ast: AST.MapDefn);
    }
}
