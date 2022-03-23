/**
 * The CWScript abstract machine.
 */

import { CWScriptEnv } from '../symbol-table/env';
import * as AST from '../ast/ast-visitor';

export class CWScriptAbstractMachine {
  constructor(public env: CWScriptEnv) {}
}
