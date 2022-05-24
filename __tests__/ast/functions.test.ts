import { Parser } from '../../src/parser';

describe("ast compiler", () => {
  it("parses a calling function", () => {
      // arrange
      const source = `
      contract CWTemplate {
          exec baz(remote_contract: Addr) {
            CWBase.foo(remote_contract);
          }
      };
      contract CWBase {
        fn foo(bar: Addr) {
          let a = bar;
        }
      }
      `;

      // act
      let parser = Parser.fromString(source);
      const ast = parser.buildAST();
      const astAsList = ast.descendants.map(desc => desc.toData());

      console.log(astAsList);
  });
});