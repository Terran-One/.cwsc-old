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

    console.log(`created env: ${finalId}`);
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

  lookup(key: string): IR.IR | undefined {
    let env: CodegenEnv | undefined = this;
    while (env !== undefined) {
      let value = env.get(key);
      if (value !== undefined) {
        return value;
      }

      env = env.parent;
    }
    return undefined;
  }
}

export class EnvManager {
  public envs: { [id: string]: CodegenEnv };
  constructor(envs?: { [id: string]: CodegenEnv }) {
    if (envs === undefined) {
      this.envs = {
        '': new CodegenEnv(this, ''),
      };
    } else {
      this.envs = envs;
    }
  }

  getRootEnv(): CodegenEnv {
    return this.envs[''];
  }

  getEnv(id: string): CodegenEnv {
    if (this.envs[id] === undefined) {
      this.envs[id] = new CodegenEnv(this, id);
    }

    return this.envs[id];
  }

  getFileEnv(file: string): CodegenEnv {
    if (this.envs[file] === undefined) {
      throw new Error(`EnvManager: no env for file ${file}`);
    }
    let env = this.getEnv(`$${file}`);
    return env;
  }
}

function ENVPATH(...segments: string[]): string {
  return '$' + segments.join('$');
}

function _struct(s: string): string {
  return `${s}`;
}

function _enum(s: string): string {
  return `${s}`;
}

function _type(s: string): string {
  return `${s}`;
}

function _exec(s: string): string {
  return `__exec__${s}`;
}

function _instantiate(): string {
  return '__instantiate__';
}

function _query(s: string): string {
  return `__query__${s}`;
}

function _migrate(): string {
  return `__migrate__`;
}

function _item(s: string): string {
  return `__state__${s}`;
}

function _map(s: string): string {
  return `__state__${s}`;
}

function _event(s: string): string {
  return `__event__${s}`;
}

function _error(s: string): string {
  return `__error__${s}`;
}

function _contract(s: string): string {
  return `${s}`;
}

function _interface(s: string): string {
  return `${s}`;
}

function _arg(s: string): string {
  return `${s}`;
}

function _return(): string {
  return `__return__`;
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
      console.log(this.envManager.getRootEnv());
      let sourceEnv = this.envManager.getRootEnv().createChild(source.file);
      this.loadImports(sourceEnv, source.ast);
      this.loadLocalDefns(sourceEnv, source.ast);
    });
  }

  loadTypeDefns(env: CodegenEnv, defn: AST.AST) {
    defn.descendantsOfType(AST.StructDefn).forEach(structDefn => {
      if (structDefn.name.text !== '_') {
        env.set(_struct(structDefn.name.text), structDefn);
      }
    });
    defn.descendantsOfType(AST.EnumDefn).forEach(enumDefn => {
      env.set(_enum(enumDefn.name.text), enumDefn);
    });
    defn.descendantsOfType(AST.TypeAliasDefn).forEach(typeAliasDefn => {
      env.set(_type(typeAliasDefn.name.text), typeAliasDefn);
    });
  }

  loadErrorEnumStateDefns(
    env: CodegenEnv,
    defn: AST.ContractDefn | AST.InterfaceDefn
  ) {
    defn.descendantsOfType(AST.ErrorDefn).forEach(errorDefn => {
      env.set(_error(errorDefn.enumVariant.name.text), errorDefn);
    });
    defn.descendantsOfType(AST.EventDefn).forEach(eventDefn => {
      env.set(_event(eventDefn.enumVariant.name.text), eventDefn);
    });
    defn.descendantsOfType(AST.ItemDefn).forEach(itemDefn => {
      env.set(_item(itemDefn.key.text), itemDefn);
    });
    defn.descendantsOfType(AST.MapDefn).forEach(mapDefn => {
      env.set(_map(mapDefn.key.text), mapDefn);
    });
  }

  loadFnDefns(env: CodegenEnv, defn: AST.AST) {
    defn.descendantsOfType(AST.InstantiateDefn).forEach(x => {
      env.set(_instantiate(), x);
    });
    defn.descendantsOfType(AST.MigrateDefn).forEach(x => {
      env.set(_migrate(), x);
    });
    defn.descendantsOfType(AST.ExecDefn).forEach(x => {
      env.set(_exec(x.name!.text), x);
    });
    defn.descendantsOfType(AST.QueryDefn).forEach(x => {
      env.set(_query(x.name!.text), x);
    });
  }

  loadFnDecls(env: CodegenEnv, defn: AST.AST) {
    defn.descendantsOfType(AST.InstantiateDecl).forEach(x => {
      env.set(_instantiate(), x);
    });
    defn.descendantsOfType(AST.MigrateDecl).forEach(x => {
      env.set(_migrate(), x);
    });
    defn.descendantsOfType(AST.ExecDecl).forEach(x => {
      env.set(_exec(x.name!.text), x);
    });
    defn.descendantsOfType(AST.QueryDecl).forEach(x => {
      env.set(_query(x.name!.text), x);
    });
  }

  loadLocalDefns(env: CodegenEnv, sourceFile: AST.SourceFile): void {
    let contractDefns = sourceFile.descendantsOfType(AST.ContractDefn);
    for (let contractDefn of contractDefns) {
      env.set(_contract(contractDefn.name.text), contractDefn);
      let contractEnv = env.createChild(_contract(contractDefn.name.text));
      this.loadErrorEnumStateDefns(contractEnv, contractDefn);
      this.loadTypeDefns(contractEnv, contractDefn);
      this.loadFnDefns(contractEnv, contractDefn);
    }

    let interfaceDefns = sourceFile.descendantsOfType(AST.InterfaceDefn);
    for (let interfaceDefn of interfaceDefns) {
      let interfaceNameWithMixin =
        interfaceDefn.name.text +
        (interfaceDefn.mixinName !== undefined
          ? '[' + interfaceDefn.mixinName!.text + ']'
          : '');
      env.set(_interface(interfaceNameWithMixin), interfaceDefn);
      let interfaceEnv = env.createChild(_interface(interfaceNameWithMixin));
      this.loadErrorEnumStateDefns(interfaceEnv, interfaceDefn);
      this.loadTypeDefns(interfaceEnv, interfaceDefn);
      this.loadFnDecls(interfaceEnv, interfaceDefn);
    }
  }

  loadImports(env: CodegenEnv, sourceFile: AST.SourceFile): void {
    let importStmts = sourceFile.descendantsOfType(AST.ImportStmt);
    for (let importStmt of importStmts) {
      let importEnv = this.envManager.getFileEnv(importStmt.fileName);
      if (importStmt.symbols === '*') {
        for (let key of importEnv.data.keys()) {
          env.set(key, importEnv.get(key));
        }
      } else {
        importStmt.symbols!.elements.forEach(symbol => {
          if (symbol instanceof AST.TypePathImportSymbol) {
            env.set(symbol.path.paths.elements[-1].text, importEnv.get(...symbol.path.paths.elements));
          } else if (symbol instanceof AST.RenamedImportSymbol) {
            env.set(symbol.name.text, importEnv.get(symbol.))
          }
          
        {
          env.set(symbol.text, importEnv.get(symbol.text));
        });
      }
    }
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

    let exec: any = {};
    for (const execDefn of contractDefn.descendantsOfType(AST.ExecDefn)) {
      let env = this.envManager
        .getEnv(ENVPATH(sourceFile.file, _contract(contractDefn.name.text)))
        .createChild(_exec(execDefn.name!.text));
      exec[execDefn.name!.text] = this.translate(env, execDefn);
    }

    // get items
    return {
      name: contractDefn.name.text,
      exec,
    };
  }

  public translateFnArg(env: CodegenEnv, arg: AST.FnArg): IR.FnArg {
    let name = arg.name.text;
    let type = this.translateType(env, arg.type);
    return new IR.FnArg(name, type);
  }

  public translateType(env: CodegenEnv, type: AST.TypeExpr): IR.Type {
    if (type instanceof AST.TypePath) {
      return new IR.TypePath(
        type.root,
        type.paths.elements.map(x => x.text)
      );
    } else if (type instanceof AST.ParamzdTypeExpr) {
      return new IR.ParamzdTypeExpr(
        this.translateType(env, type.type),
        new IR.List(type.params.elements.map(x => this.translateType(env, x)))
      );
    } else if (type instanceof AST.TupleTypeExpr) {
      return new IR.TupleType(
        new IR.List(type.members.elements.map(x => this.translateType(env, x)))
      );
    } else if (type instanceof AST.ShortOptionTypeExpr) {
      return new IR.OptionType(this.translateType(env, type.type));
    } else if (type instanceof AST.ShortVecTypeExpr) {
      return new IR.VecType(this.translateType(env, type.type));
    } else if (type instanceof AST.RefTypeExpr) {
      return new IR.RefType(this.translateType(env, type.type));
    } else if (type instanceof AST.ReflectiveTypeExpr) {
      let base = this.translateType(env, type.type);
      let res = base.reflect(type.member.text);
      if (res === undefined) {
        throw new Error(`${base.toString()} has no member ${type.member.text}`);
      }
      if (!(res instanceof IR.Type)) {
        throw new Error(`${base.toString()}.${type.member.text} is not a type`);
      }
      return res;
    } else {
      throw new Error(`Unsupported type: ${type}`);
    }
  }

  public translate(env: CodegenEnv, ast: AST.AST): IR.IR {
    if (ast instanceof AST.ExecDefn) {
      // load the locals & return type
      let args = ast.args.elements.map(arg => this.translateFnArg(env, arg));
      let returnType;
      if (ast.returnType !== undefined) {
        returnType = this.translateType(env, ast.returnType);
      } else {
        returnType = new IR.UnitType();
      }

      args.forEach(arg => {
        env.set(arg.name, arg);
      });

      env.set(_return(), returnType);

      return new IR.ExecDefn(
        ast.name!.text,
        new IR.List(args),
        returnType,
        new IR.List(ast.body.elements.map(x => this.translate(env, x)))
      );
    }

    if (ast instanceof AST.AssignStmt) {
      return new IR.IR();
    }

    if (ast instanceof AST.EmitStmt) {
      return new IR.IR();
    }

    if (ast instanceof AST.IfExpr) {
      return new IR.IR();
    }

    if (ast instanceof AST.ExecStmt) {
      return new IR.IR();
    }

    throw new Error(
      `Cannot translate ${ast.constructor.name} - not implemented`
    );
  }
}
