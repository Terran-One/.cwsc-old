import { AST } from '../../src';
import { Parser } from '../../src/parser'

describe("ast compiler", () => {
    it("compiles an empty contract", () => {
        // arrange
        const source = `contract CWTemplate {}`;

        // act
        const result = Parser.fromString(source).buildAST();

        // assert
        const cds = result
            .descendantsOfType(AST.ContractDefn)
            .filter((contract) => contract.name.text === 'CWTemplate');

        expect(cds).toHaveLength(1);
    });

    it("has correct node structure", () => {
         // arrange
         const source = `contract CWTemplate {}`;

         // act
         const ast = Parser.fromString(source).buildAST();
         const astAsList = ast.descendants.map(desc => desc.toData());

        const [
            list,
            contractDefn,
            contractIdent,
            contractBody,
        ] = astAsList;

        // assert
        expect(list["$type"]).toBe("List");
        expect(contractDefn["$type"]).toBe("ContractDefn");
        expect(contractIdent.text).toBe("CWTemplate");
        expect(contractBody.elements.length).toBe(0);
     });

    it("compiles an empty contract with empty instantiate", () => {
        // arrange
        const source = `contract CWTemplate {instantiate(){}}`;

        // act
        const result = Parser.fromString(source).buildAST();

        // assert
        const cds = result
            .descendantsOfType(AST.ContractDefn)
            .filter((contract) => contract.name.text === 'CWTemplate');
        expect(cds).toHaveLength(1);
    });
});