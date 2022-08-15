import { Parser } from '../../src/parser';

function assertArithmetics(astAsList: any[], operator: string) {
  expect(astAsList).toHaveLength(24);
  const [
    letStmt,
    identLHS,
    _,
    arithmetic,
    lhs,
    rhs,
  ] = astAsList.slice(18);

  expect(letStmt["$type"]).toBe("LetStmt");

  expect(identLHS["$type"]).toBe("IdentLHS");
  expect(identLHS.name.text).toBe("foo");

  expect(arithmetic["$type"]).toBe("ArithmeticOpExpr");
  expect(arithmetic.op).toBe(operator);
  expect(arithmetic.lhs.text).toBe("a");
  expect(arithmetic.rhs.text).toBe("b");

  expect(lhs["$type"]).toBe("Ident");
  expect(lhs.text).toBe("a");
  expect(rhs.text).toBe("b");
}

const SOURCE = (operator: string) => `
  contract CWTemplate {
    exec add(a: u32, b: u32) {
      let foo = a ${operator} b;
    }
  }
`;

describe("ast compiler", () => {
  it("parses an addition", () => {
      // arrange
      const source = SOURCE("+");

      // act
      let parser = Parser.fromString(source);
      const ast = parser.buildAST();
      const astAsList = ast.descendants.map(desc => desc.toData());

      // assert
      expect(parser.antlrParser.numberOfSyntaxErrors).toBe(0);
      assertArithmetics(astAsList, "+");
  });

  it("parses a substraction", () => {
    // arrange
    const source = SOURCE("-");

    // act
    let parser = Parser.fromString(source);
    const ast = parser.buildAST();
    const astAsList = ast.descendants.map(desc => desc.toData());

    // assert
    expect(parser.antlrParser.numberOfSyntaxErrors).toBe(0);
    assertArithmetics(astAsList, "-");
  });

  it("parses a multiplication", () => {
    // arrange
    const source = SOURCE("*");

    // act
    let parser = Parser.fromString(source);
    const ast = parser.buildAST();
    const astAsList = ast.descendants.map(desc => desc.toData());

    // assert
    expect(parser.antlrParser.numberOfSyntaxErrors).toBe(0);
    assertArithmetics(astAsList, "*");
  });


  it("parses a division", () => {
    // arrange
    const source = SOURCE("/");
    // act
    let parser = Parser.fromString(source);
    const ast = parser.buildAST();
    const astAsList = ast.descendants.map(desc => desc.toData());

    // assert
    expect(parser.antlrParser.numberOfSyntaxErrors).toBe(0);
    assertArithmetics(astAsList, "/");
  });

  it("parses a modulo", () => {
    // arrange
    const source = SOURCE("%");
    // act
    let parser = Parser.fromString(source);
    const ast = parser.buildAST();
    const astAsList = ast.descendants.map(desc => desc.toData());

    // assert
    expect(parser.antlrParser.numberOfSyntaxErrors).toBe(0);
    assertArithmetics(astAsList, "%");
  });

  // TODO: Parser doesn't parse this case
  it("parses a power", () => {
    // arrange
    const source = SOURCE("**");
    // act
    let parser = Parser.fromString(source);
    const ast = parser.buildAST();
    const astAsList = ast.descendants.map(desc => desc.toData());

    // assert
    expect(parser.antlrParser.numberOfSyntaxErrors).toBe(0);
    expect(astAsList).toHaveLength(22);
    const [
      letStmt,
      identLHS,
      lhs,
      rhs,
    ] = astAsList.slice(18);
  
    expect(letStmt["$type"]).toBe("LetStmt");
  
    expect(identLHS["$type"]).toBe("IdentLHS");
    expect(identLHS.name.text).toBe("foo");
  
    expect(lhs["$type"]).toBe("Ident");
    expect(lhs.text).toBe("foo");
    expect(rhs.text).toBe("b");
  });
});