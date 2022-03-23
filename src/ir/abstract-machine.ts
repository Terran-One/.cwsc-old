/**
 * The CWScript abstract machine.
 */

import { CWScriptEnv } from '../symbol-table/env';
import * as AST from '../ast/node-types';

export class CWScriptAbstractMachine {
  constructor(public env: CWScriptEnv) {}
}
