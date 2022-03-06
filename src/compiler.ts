import * as AST from './ast';
import { ContractDefnContext } from './grammar/CWScriptParser';
import * as IR from './ir';

export interface FileSource {
  file: string;
  ast: AST.SourceFile;
}

export type Source = FileSource;

export interface ContractTarget {
  contract: string;
  file?: string;
}

export type Target = ContractTarget;

export interface CompilationRequest {
  sources: Source[];
  targets?: Target[];
}

export class CompilationRequestBuilder {
  sources: Source[] = [];
  targets?: Target[];

  addSource(source: Source) {
    this.sources.push(source);
  }

  addTarget(target: Target) {
    if (this.targets === undefined) {
      this.targets = [];
    }

    this.targets.push(target);
  }

  build(): CompilationRequest {
    let { sources, targets } = this;
    return { sources, targets };
  }
}

export interface CWScriptEnv {
  register(item: any): void;
}

export class BasicEnv implements CWScriptEnv {
  private items: any[] = [];

  register(item: any) {
    this.items.push(item);
  }
}

export class ASTEnv<T extends AST.AST> extends BasicEnv {
  constructor(public ast: T) {
    super();
  }
}

export class SourceFileEnv extends ASTEnv<AST.SourceFile> {
  constructor(public source: Source) {
    super(source.ast);
  }
}

export class CompilationContext {
  public envs: {
    global: BasicEnv;
    sources: { [key: string]: SourceFileEnv };
  };

  constructor(globals: Record<string, any> = {}, sources: Source[] = []) {
    this.envs = {
      global: new BasicEnv(),
      sources: {},
    };

    sources.forEach(source => {
      this.envs.sources[source.file] = new SourceFileEnv(source);
    });
  }

  /// Translate the AST into IR.
  public translate<T extends AST.AST>(ast: T): IR.IR {
    if (ast instanceof AST.ContractDefn) {
    }
    return new IR.IR();
  }
}

export class CompilationJob {
  constructor(public request: CompilationRequest) {}

  public compile() {
    let context = new CompilationContext({}, this.request.sources);
    // Step 1: Get contract definitions
    Object.entries(context.envs.sources).forEach(([file, env]) => {
      env.ast.descendantsOfType(AST.ContractDefn).forEach(contract => {
        env.register(context.translate(contract));
      });
    });
  }
}
