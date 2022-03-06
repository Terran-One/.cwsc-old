import * as AST from './ast';
import * as IR from './ir';

export interface FileSource {
  file: string;
  ast: AST.SourceFile;
}

export type Source = FileSource;

export class CodegenEnv {
  constructor(
    public manager: EnvManager,
    public id: string,
    public parent?: CodegenEnv,
    public data: Record<string, any> = {}
  ) {}

  createChild(id?: string, inheritIdPath: boolean = true): CodegenEnv {
    if (id === undefined) {
      let numChildren = Object.values(this.manager.envs)
        .filter(x => x.parent === this)
        .length.toString();
      id = `_${numChildren}`;
    }

    let finalId;
    if (inheritIdPath) {
      finalId = `${this.id}$${id}`;
    } else {
      finalId = id;
    }

    if (this.manager.envs[finalId] !== undefined) {
      throw new Error(`EnvManager: env ${finalId} already exists`);
    }

    let newEnv = new CodegenEnv(this.manager, `${finalId}`, this);
    this.manager.envs[finalId] = newEnv;
    return newEnv;
  }

  get(key: string): any {
    return this.data[key];
  }

  set(key: string, value: any) {
    this.data[key] = value;
  }

  delete(key: string) {
    delete this.data[key];
  }
}

export class EnvManager {
  public envs: { [id: string]: CodegenEnv };
  constructor(envs?: { [id: string]: CodegenEnv }) {
    if (envs === undefined) {
      this.envs = {
        root: new CodegenEnv(this, 'root'),
      };
    } else {
      this.envs = envs;
    }
  }

  getRootEnv(): CodegenEnv {
    return this.envs['root'];
  }

  getEnv(id: string): CodegenEnv {
    if (this.envs[id] === undefined) {
      throw new Error(`EnvManager: no such env ${id}`);
    }

    return this.envs[id];
  }
}

function loadTypeDefns(env: CodegenEnv, defn: AST.AST) {
  defn.descendantsOfType(AST.StructDefn).forEach(structDefn => {
    if (structDefn.name.text !== '_') {
      env.set('__type:struct__' + structDefn.name.text, structDefn);
    }
  });
  defn.descendantsOfType(AST.EnumDefn).forEach(enumDefn => {
    env.set('__type:enum__' + enumDefn.name.text, enumDefn);
  });
  defn.descendantsOfType(AST.TypeAliasDefn).forEach(typeAliasDefn => {
    env.set('__type:alias__' + typeAliasDefn.name.text, typeAliasDefn);
  });
}

function loadErrorEnumStateDefns(
  env: CodegenEnv,
  defn: AST.ContractDefn | AST.InterfaceDefn
) {
  defn.descendantsOfType(AST.ErrorDefn).forEach(errorDefn => {
    env.set('__error__' + errorDefn.enumVariant.name.text, errorDefn);
  });
  defn.descendantsOfType(AST.EventDefn).forEach(eventDefn => {
    env.set('__event__' + eventDefn.enumVariant.name.text, eventDefn);
  });
  defn.descendantsOfType(AST.ItemDefn).forEach(itemDefn => {
    env.set('__state:item__' + itemDefn.key.text, itemDefn);
  });
  defn.descendantsOfType(AST.MapDefn).forEach(mapDefn => {
    env.set('__state:map__' + mapDefn.key.text, mapDefn);
  });
}

function loadFnDefns(env: CodegenEnv, defn: AST.AST) {
  defn.descendantsOfType(AST.InstantiateDefn).forEach(x => {
    env.set('__instantiate__', x);
  });
  defn.descendantsOfType(AST.MigrateDefn).forEach(x => {
    env.set('__migrate__', x);
  });
  defn.descendantsOfType(AST.ExecDefn).forEach(x => {
    env.set('__exec__' + x.name!.text, x);
  });
  defn.descendantsOfType(AST.QueryDefn).forEach(x => {
    env.set('__query__' + x.name!.text, x);
  });
}

function loadFnDecls(env: CodegenEnv, defn: AST.AST) {
  defn.descendantsOfType(AST.InstantiateDecl).forEach(x => {
    env.set('__instantiate__', x);
  });
  defn.descendantsOfType(AST.MigrateDecl).forEach(x => {
    env.set('__migrate__', x);
  });
  defn.descendantsOfType(AST.ExecDecl).forEach(x => {
    env.set('__exec__' + x.name!.text, x);
  });
  defn.descendantsOfType(AST.QueryDecl).forEach(x => {
    env.set('__query__' + x.name!.text, x);
  });
}

function loadLocalDefns(env: CodegenEnv, sourceFile: AST.SourceFile): void {
  let contractDefns = sourceFile.descendantsOfType(AST.ContractDefn);
  for (let contractDefn of contractDefns) {
    env.set('__contract__' + contractDefn.name.text, contractDefn);
    let contractEnv = env.createChild(contractDefn.name.text);
    loadErrorEnumStateDefns(contractEnv, contractDefn);
    loadTypeDefns(contractEnv, contractDefn);
    loadFnDefns(contractEnv, contractDefn);
  }

  let interfaceDefns = sourceFile.descendantsOfType(AST.InterfaceDefn);
  for (let interfaceDefn of interfaceDefns) {
    let interfaceNameWithMixin =
      interfaceDefn.name.text +
      (interfaceDefn.mixinName !== undefined
        ? '[' + interfaceDefn.mixinName!.text + ']'
        : '');
    env.set('__interface__' + interfaceNameWithMixin, interfaceDefn);
    let interfaceEnv = env.createChild(interfaceNameWithMixin);
    loadErrorEnumStateDefns(interfaceEnv, interfaceDefn);
    loadTypeDefns(interfaceEnv, interfaceDefn);
    loadFnDecls(interfaceEnv, interfaceDefn);
  }
}

export class CWScriptCodegen {
  public envManager: EnvManager;
  constructor(public sources: Source[], envManager?: EnvManager) {
    if (envManager === undefined) {
      this.envManager = new EnvManager();
    } else {
      this.envManager = envManager;
    }

    sources.forEach(source => {
      let sourceEnv = this.envManager.getRootEnv().createChild(source.file);
      loadLocalDefns(sourceEnv, source.ast);
    });
  }

  compileContract(name: string, file?: string): any {
    // find the source file where the contract is defined
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

    // get items
    return {
      name: contractDefn.name.text,
      body: contractDefn.body.elements.map(x => this.translate(x)),
    };
  }

  public translate(ast: AST.AST): IR.IR {
    throw new Error(
      `Cannot translate ${ast.constructor.name} - not implemented`
    );
  }
}
