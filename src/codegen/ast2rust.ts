import * as AST from '../ast/nodes';
import * as Rust from '../rust';

import { CWScriptEnv } from '../symbol-table/env';
import { Subspace } from '../symbol-table/scope';
import { CWScriptSymbol } from '../symbol-table/resolver';

export interface FileSource {
  file: string;
  ast: AST.SourceFile;
}

export type Source = FileSource;

export class Codegen {
  constructor(public env: CWScriptEnv) {}

  public typeExpr(ast: AST.TypeExpr): Rust.Type {
    const { env } = this;

    if (ast instanceof AST.TypePath) {
      let sym = env.scope.resolve(Subspace.TYPE, ast.toString());
      if (sym === undefined) {
        throw new Error(`Could not resolve type path ${ast.toString()}`);
      }

      // check if the symbol exists with a rustType
      if (
        sym instanceof CWScriptSymbol.BuiltinType ||
        sym instanceof CWScriptSymbol.UserDefinedTypeAlias ||
        sym instanceof CWScriptSymbol.UserDefinedEnum ||
        sym instanceof CWScriptSymbol.UserDefinedStruct
      ) {
        return sym.rustType;
      }
    }

    if (ast instanceof AST.ParamzdTypeExpr) {
      return new Rust.Type(
        this.typeExpr(ast.type).toRustString(),
        ast.params.elements.map(x => this.typeExpr(x) as Rust.Type)
      );
    }

    if (ast instanceof AST.TupleTypeExpr) {
      return new Rust.Type.Tuple(
        ast.members.elements.map(x => this.typeExpr(x) as Rust.Type)
      );
    }

    if (ast instanceof AST.ShortOptionTypeExpr) {
      return new Rust.Type.Option(this.typeExpr(ast.type) as Rust.Type);
    }

    if (ast instanceof AST.ShortVecTypeExpr) {
      return new Rust.Type.Vec(this.typeExpr(ast.type) as Rust.Type);
    }

    if (ast instanceof AST.RefTypeExpr) {
      return new Rust.Type.Ref(
        Rust.REF,
        this.typeExpr(ast.type) as Rust.Type.Ref
      );
    }

    if (ast instanceof AST.StructDefn) {
      return new Rust.Type(ast.name.text);
    }

    throw new Error(`Unable to resolve type ${ast.toString()}`);
  }
}

export class CWScriptCodegen {
  constructor(public sources: Source[]) {}

  generateContract(name: string, file?: string) {
    let sourceFiles = this.sources.filter(
      source =>
        source.ast
          .descendantsOfType(AST.ContractDefn)
          .find(contract => contract.name.text === name) !== undefined
    );

    if (sourceFiles.length > 1) {
      throw new Error(
        `Multiple source files found for contract ${name}.` +
          ` Please disambiguate which file to use.`
      );
    }

    if (sourceFiles.length === 0) {
      throw new Error(`No source file found for contract ${name}.`);
    }

    let sourceFile = sourceFiles[0];
    let contractDefn = sourceFile.ast
      .descendantsOfType(AST.ContractDefn)
      .find(x => x.name.text === name)!;

    let cg = new ContractCodegen();
  }
}
