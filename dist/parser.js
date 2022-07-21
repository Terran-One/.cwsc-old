"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
const CWScriptParser_1 = require("./grammar/CWScriptParser");
const CWScriptLexer_1 = require("./grammar/CWScriptLexer");
const antlr4ts_1 = require("antlr4ts");
const ast_builder_1 = require("./ast/ast-builder");
class Parser {
    constructor(sourceInput) {
        this.sourceInput = sourceInput;
        this.antlrLexer = new CWScriptLexer_1.CWScriptLexer(antlr4ts_1.CharStreams.fromString(sourceInput));
        this.antlrParser = new CWScriptParser_1.CWScriptParser(new antlr4ts_1.CommonTokenStream(this.antlrLexer));
    }
    buildAST() {
        let tree = this.antlrParser.sourceFile();
        let visitor = new ast_builder_1.CWScriptASTVisitor();
        return visitor.visitSourceFile(tree);
    }
    static fromString(sourceInput) {
        return new Parser(sourceInput);
    }
}
exports.Parser = Parser;
//# sourceMappingURL=parser.js.map