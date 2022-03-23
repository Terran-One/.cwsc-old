import { CWScriptEnv } from '../../symbol-table/env';
import * as AST from '../../ast/nodes';

export class ASTCodegen<T extends AST.AST> {
  public env: CWScriptEnv;

  constructor(public ast: T, env?: CWScriptEnv) {
    if (!!env) {
      this.env = env;
    } else {
      this.env = new CWScriptEnv();
    }
  }
}
