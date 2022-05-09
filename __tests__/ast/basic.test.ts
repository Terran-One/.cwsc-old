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
        const astAsList = result.descendants.map(desc => desc.toData());

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
        expect(contractBody.elements).toHaveLength(0);
    });

    it("compiles an empty contract with empty instantiate", () => {
        // arrange
        const source = `contract CWTemplate {instantiate(){}}`;

        // act
        const result = Parser.fromString(source).buildAST();

        // assert
        const astAsList = result.descendants.map(desc => desc.toData());
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
});