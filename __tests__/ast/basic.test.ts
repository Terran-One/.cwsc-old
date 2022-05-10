import { AST } from '../../src';
import { ExecDefnBlockContext, StateDefnBlockContext } from '../../src/grammar/CWScriptParser';
import { Parser } from '../../src/parser'

describe("ast compiler", () => {
    it("parses an empty contract", () => {
        // arrange
        const source = `contract CWTemplate {}`;

        // act
        let parser = Parser.fromString(source);
        const ast = parser.buildAST();

        // assert
        expect(parser.antlrParser.numberOfSyntaxErrors).toBe(0);

        // assert
        const cds = ast
            .descendantsOfType(AST.ContractDefn)
            .filter((contract) => contract.name.text === 'CWTemplate');

        expect(cds).toHaveLength(1);
<<<<<<< HEAD
        const astAsList = result.descendants.map(desc => desc.toData());
=======
    });

    it("has correct node structure", () => {
        // arrange
        const source = `contract CWTemplate {}`;

        // act
        let parser = Parser.fromString(source);
        const ast = parser.buildAST();
        const astAsList = ast.descendants.map(desc => desc.toData());
>>>>>>> 9a3000a (ast compiler test update)

        // assert
        expect(parser.antlrParser.numberOfSyntaxErrors).toBe(0);
        const [
            list,
            contractDefn,
            contractIdent,
            contractBody,
        ] = astAsList;
        expect(astAsList).toHaveLength(4);

        expect(list["$type"]).toBe("List");
        expect(contractDefn["$type"]).toBe("ContractDefn");
        expect(contractIdent.text).toBe("CWTemplate");
        expect(contractBody.elements.length).toBe(0);
    });

    it("doesn't allow two contractDefns identities", () => {
        const source = `contract one two {}`;
        let parser = Parser.fromString(source);
        parser.buildAST();
        expect(parser.antlrParser.numberOfSyntaxErrors).toBe(1);
    });

    it("parses an empty contract with empty instantiate", () => {
        // arrange
        const source = `contract CWTemplate {instantiate(){}}`;

        // act
        let parser = Parser.fromString(source);
        const ast = parser.buildAST();
        const astAsList = ast.descendants.map(desc => desc.toData());

        // assert
        expect(parser.antlrParser.numberOfSyntaxErrors).toBe(0);
        expect(astAsList).toHaveLength(7);

        const [
            contractBody,
            instantiateDefn, argsLst, instBody
        ] = astAsList.slice(3);

        expect(contractBody.elements).toHaveLength(1);

        // instantiate{}
        expect(instantiateDefn['$type']).toBe("InstantiateDefn");
        expect(instantiateDefn.args['$type']).toBe("List");
        expect(instantiateDefn.args.elements).toHaveLength(0);
        expect(argsLst['$type']).toBe("List");
        expect(argsLst.elements).toHaveLength(0);
        expect(instBody['$type']).toBe("List");
        expect(instBody.elements).toHaveLength(0);
    });

    it("parses an empty contract with empty state", () => {
        // arrange
        const source = `contract CWTemplate {state{}}`;

        // act
        let parser = Parser.fromString(source);
        const ast = parser.buildAST();
        const astAsList = ast.descendants.map(desc => desc.toData());

        // assert
        expect(parser.antlrParser.numberOfSyntaxErrors).toBe(0);
        expect(astAsList).toHaveLength(5);

        const [
            stateDefn
        ] = astAsList.slice(4);

        // state{}
        expect(stateDefn['$type']).toBe("List");
        expect(stateDefn.elements).toHaveLength(0);
        expect(stateDefn.ctx).toBeInstanceOf(StateDefnBlockContext);
    });

    it("parses a contract with an empty exec function", () => {
        // arrange
        const source = `
            contract CWTemplate {
                exec baz() {}
            }`;

        // act
        let parser = Parser.fromString(source);
        const ast = parser.buildAST();
        const astAsList = ast.descendants.map(desc => desc.toData());

        // assert
        expect(parser.antlrParser.numberOfSyntaxErrors).toBe(0);
        expect(astAsList).toHaveLength(8);

        const [
            execDefn,
            nameIdent,
            argsLst,
            bodyLst
        ] = astAsList.slice(4);

        // exec baz() {}
        expect(execDefn['$type']).toBe("ExecDefn");
        expect(nameIdent['$type']).toBe("Ident");
        expect(argsLst['$type']).toBe("List");
        expect(bodyLst['$type']).toBe("List");

        expect(nameIdent.text).toBe("baz");
        expect(argsLst.elements).toHaveLength(0);
        expect(bodyLst.elements).toHaveLength(0);
    });

    it("parses a contract with an exec block with a function", () => {
        // arrange
        const source = `
            contract CWTemplate {
                exec {
                    baz() {}
                }
            }`;

        // act
        let parser = Parser.fromString(source);
        const ast = parser.buildAST();
        const astAsList = ast.descendants.map(desc => desc.toData());

        // assert
        expect(parser.antlrParser.numberOfSyntaxErrors).toBe(0);
        expect(astAsList).toHaveLength(9);

        const [
            execBlock,
            execDefn,
            nameIdent,
            argsLst,
            bodyLst
        ] = astAsList.slice(4);

        // exec { baz() {} }
        expect(execBlock['$type']).toBe("List");
        expect(execDefn['$type']).toBe("ExecDefn");
        expect(nameIdent['$type']).toBe("Ident");
        expect(argsLst['$type']).toBe("List");
        expect(bodyLst['$type']).toBe("List");

        expect(execBlock.elements).toHaveLength(1);
        expect(execBlock.ctx).toBeInstanceOf(ExecDefnBlockContext);

        expect(nameIdent.text).toBe("baz");
        expect(argsLst.elements).toHaveLength(0);
        expect(bodyLst.elements).toHaveLength(0);
    });

    it("parses a contract with an empty exec block", () => {
        // arrange
        const source = `
            contract CWTemplate {
                exec {}
            }`;

        // act
        let parser = Parser.fromString(source);
        const ast = parser.buildAST();
        const astAsList = ast.descendants.map(desc => desc.toData());

        // assert
        expect(parser.antlrParser.numberOfSyntaxErrors).toBe(0);
        expect(astAsList).toHaveLength(5);

        const [
            execDefn
        ] = astAsList.slice(4);

        // exec {}
        expect(execDefn['$type']).toBe("List");
        expect(execDefn.elements).toHaveLength(0);
        expect(execDefn.ctx).toBeInstanceOf(ExecDefnBlockContext);
    });

    it("parses a contract with an execute", () => {
        // arrange
        const source = `
            contract CWTemplate {
                exec baz(remote_contract: Addr) {}
            }`;

        // act
        let parser = Parser.fromString(source);
        const ast = parser.buildAST();
        const astAsList = ast.descendants.map(desc => desc.toData());

        // assert
        expect(parser.antlrParser.numberOfSyntaxErrors).toBe(0);
        expect(astAsList).toHaveLength(13);

        const [
            arg,
            argIdent,
            argTypePath,
            argTypePathList,
            argTypeIdent,
            bodyLst
        ] = astAsList.slice(7);

        // exec baz() {}
        expect(arg['$type']).toBe("FnArg");
        expect(argIdent['$type']).toBe("Ident");
        expect(argTypePath['$type']).toBe("TypePath");
        expect(argTypePathList['$type']).toBe("List");
        expect(argTypeIdent['$type']).toBe("Ident");



        // expect(nameIdent['$type']).toBe("Ident");
        // expect(argsLst['$type']).toBe("List");
        // expect(bodyLst['$type']).toBe("List");

        // expect(nameIdent.text).toBe("baz");
        // expect(argsLst.elements).toHaveLength(1);
        // expect(bodyLst.elements).toHaveLength(0);
    });
});