import * as AST from './ast';
import * as IR from './ir';

export class CWScriptEnv {
  constructor(public items: { [key: string]: any } = {}) {}

  get(key: string, section?: string): any {
    if (section === undefined) {
      return this.items[key];
    }

    if (this.items['__' + section] === undefined) {
      return undefined;
    }

    return this.items['__' + section][key];
  }

  set(key: string, value: any, section?: string) {
    if (section === undefined) {
      this.items[key] = value;
      return;
    }

    if (this.items['__' + section] === undefined) {
      this.items['__' + section] = {};
    }

    this.items['__' + section][key] = value;
  }

  delete(key: string, section?: string) {
    if (section === undefined) {
      delete this.items[key];
      return;
    }

    if (this.items['__' + section] === undefined) {
      return;
    }

    delete this.items['__' + section][key];
  }
}

export class ASTEnv<T extends AST.AST> extends CWScriptEnv {
  constructor(public ast: T) {
    super();
  }
}

export class SourceFileEnv extends ASTEnv<AST.SourceFile> {
  constructor(public file: string, public ast: AST.SourceFile) {
    super(ast);
  }
}
