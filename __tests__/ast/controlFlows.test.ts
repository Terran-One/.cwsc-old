import { Parser } from '../../src/parser';

describe("ast compiler", () => {
  it("parses an IF statement", () => {
      // arrange
      const source = `
        contract CWTemplate {
          exec mint(recipient: Addr, amount: Uint128) {
            let config = state.token_info
            if (config.mint == None) {
                fail Unauthorized;
            } else if (config.mint == Some(Mint(msg.sender, 0))) {
                let mint = Mint(msg.sender, amount);
            } else {
                let mint = config.mint.value;
            }
          }
        };
      `;

      // act
      let parser = Parser.fromString(source);
      const ast = parser.buildAST();
      const astAsList = ast.descendants.map(desc => desc.toData());

      // assert
      expect(parser.antlrParser.numberOfSyntaxErrors).toBe(0);
      expect(astAsList).toHaveLength(71);

      const [
        ifExpr,
        ifClause,
        CompOpExpr,
      ] = astAsList.slice(23);

      expect(ifExpr["$type"]).toBe("IfExpr");

      expect(ifClause["$type"]).toBe("IfClause");

      expect(CompOpExpr["$type"]).toBe("CompOpExpr");
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

    const [
      forInStmt,
      structUnpackLHS
    ] = astAsList.slice(36);

    // assert
    expect(parser.antlrParser.numberOfSyntaxErrors).toBe(0);
    expect(astAsList).toHaveLength(52);

    expect(forInStmt["$type"]).toBe("ForInStmt");

    expect(structUnpackLHS["$type"]).toBe("StructUnpackLHS");
  });
});