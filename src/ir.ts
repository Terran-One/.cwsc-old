import * as Rust from './rust';
import { CWScriptEnv } from './semantics/env';

export abstract class IR implements Rust.TransformsToRust {
  toRust(env: CWScriptEnv): Rust.Rust {
    throw new Error(
      `${this.constructor.name}.toRust() implementation is missing`
    );
  }
}

export interface TransformsToIR {
  toIR(env: CWScriptEnv): IR;
}

export class Ident extends IR {
  constructor(public name: string) {
    super();
  }
}

export class StateMapSave extends IR {
  constructor(public key: string, public mapKeys: IR[], public value: IR) {
    super();
  }
}

export class StateItemSave extends IR {
  constructor(public key: string, public value: IR) {
    super();
  }

  toRust(env: CWScriptEnv): Rust.Rust {
    return new Rust.Val.StrLiteral(this.key + ' = ' + this.value.toString());
  }
}

export class NewStruct extends IR {
  constructor(public name: string, public members: Array<[string, IR]>) {
    super();
  }
}
