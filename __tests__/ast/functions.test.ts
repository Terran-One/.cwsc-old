import { Parser } from '../../src/parser';

describe("ast compiler", () => {
  it("parses a calling function", () => {
      // arrange
      const source = `
      contract CWTemplate {
          exec baz(remote_contract: Addr) {
            add_to_balance(remote_contract, 1);
          }

          fn add_to_balance(recipient: Addr, amount: Uint128) {
            let balance = state.balances[recipient];
            state.balances[recipient] = balance + amount;
          }
      };
      `;

      // act
      let parser = Parser.fromString(source);
      const ast = parser.buildAST();
      const astAsList = ast.descendants.map(desc => desc.toData());

      // assert
      expect(parser.antlrParser.numberOfSyntaxErrors).toBe(0);
      expect(astAsList).toHaveLength(50);
  });
});