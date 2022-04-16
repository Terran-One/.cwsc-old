import { Parser } from '../parser';
import * as AST from '../ast/nodes';

export class CompilationIndex {}

export class CWSCompiler {
  public index: CompilationIndex | null = null;
  constructor(public sources: string[] = []) {}

  buildIndex() {
    let ctx = {};
    for (let src of this.sources) {
      ctx[src] = 
    }
  }

  compileContract(name: string, file?: string) {}
}
