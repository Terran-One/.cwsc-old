import { Parser } from '../../src/parser';

describe("ast compiler", () => {
  it("parses an IF statement", () => {
      // arrange
      const source = `
        contract CWTemplate {
          exec mint(recipient: Addr, amount: Uint128) {
            let config = state.token_info
            if (config.mint == None) or (config.mint.minter != msg.sender) {
                fail Unauthorized 
            }
          }
        };
      `;

      // act
      let parser = Parser.fromString(source);
      const ast = parser.buildAST();
      const astAsList = ast.descendants.map(desc => desc.toData());

      console.log(astAsList);
  });

  it("parses a FOR loop", () => {
    // arrange
    const source = `
      contract CWTemplate {
        fn foo_bar(initial_balances: struct Cw20Coin { address: Addr, amount: Uint128 }[]) {
          let total_supply: Uint128 = Uint128(0)
          for { address, amount } in initial_balances {
              state.balances[address]
              total_supply += amount
          }
        }
      };
    `;

    // act
    let parser = Parser.fromString(source);
    const ast = parser.buildAST();
    const astAsList = ast.descendants.map(desc => desc.toData());

    console.log(astAsList);
});
});