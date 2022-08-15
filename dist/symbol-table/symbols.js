"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CWScriptSymbol = void 0;
class CWScriptSymbol {
}
exports.CWScriptSymbol = CWScriptSymbol;
(function (CWScriptSymbol) {
    class LocalVariable extends CWScriptSymbol {
        constructor(tmpVar, type, value) {
            super();
            this.tmpVar = tmpVar;
            this.type = type;
            this.value = value;
        }
    }
    CWScriptSymbol.LocalVariable = LocalVariable;
    class StateItem extends CWScriptSymbol {
        constructor(key, type) {
            super();
            this.key = key;
            this.type = type;
        }
    }
    CWScriptSymbol.StateItem = StateItem;
    class StateMap extends CWScriptSymbol {
        constructor(ast) {
            super();
            this.ast = ast;
        }
    }
    CWScriptSymbol.StateMap = StateMap;
})(CWScriptSymbol = exports.CWScriptSymbol || (exports.CWScriptSymbol = {}));
//# sourceMappingURL=symbols.js.map