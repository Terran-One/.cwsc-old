import * as AST from '../ast/nodes';
import * as Rust from '../rust';

import { CWScriptEnv } from '../symbol-table/env';
import { AST2CAM } from './ast2cam';
import { CAM2Rust } from './cam2rust';

export interface FileSource {
  file: string;
  ast: AST.SourceFile;
}

export type Source = FileSource;
export class CWScriptCodegen {
  public envs: { [filePath: string]: CWScriptEnv } = {};

  constructor(public sources: Source[]) {
    sources.forEach(source => {
      this.envs[source.file] = new CWScriptEnv();
    });
  }

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

    let env = this.envs[sourceFile.file];
    let ast2cam = new AST2CAM(env);
    let contract = ast2cam.translateContractDefn(contractDefn);
    return CAM2Rust.contract(contract).toRustString();
  }
}
