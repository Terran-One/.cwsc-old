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
            .filter((contract) => contract.name.text === 'CWTemplate')
        expect(cds).toHaveLength(1);
    });

    it("compiles an empty contract with empty instantiate", () => {
        // arrange
        const source = `contract CWTemplate {instantiate(){}}`;

        // act
        const result = Parser.fromString(source).buildAST();

        // assert
        const cds = result
            .descendantsOfType(AST.ContractDefn)
            .filter((contract) => contract.name.text === 'CWTemplate')
        expect(cds).toHaveLength(1);
    });
});