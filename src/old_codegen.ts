import * as AST from './ast';
import { EnumVariantContext } from './grammar/CWScriptParser';
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
      finalId = `${this.id}:${id}`;
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

  createChildFileEnv(source: Source): FileEnv {
    let fileEnv = new FileEnv(source.file, this);
    return fileEnv;
  }

  get(key: string): any {
    return this.data[key];
  }

  set(key: string, value: any) {
    console.log(`${this.id} - set ${key} = ${value.constructor.name}`);
    this.data[key] = value;
  }

  delete(key: string) {
    delete this.data[key];
  }

  lookup(key: string, namespace: boolean = false): AST.AST | undefined {
    let env: CodegenEnv | undefined = this;
    while (env !== undefined) {
      let value = env.get(key);
      while (typeof value === 'function') {
        value = value();
      }
      if (value !== undefined) {
        return value;
      }

      env = env.parent;
    }
    return undefined;
  }

  lookupWhere(predicate: (k: string, v?: any) => boolean): AST.AST | undefined {
    let env: CodegenEnv | undefined = this;
    while (env !== undefined) {
      let value = Object.entries(env.data).find(([k, v]) => predicate(k, v));
      if (value !== undefined) {
        return value[1];
      }

      env = env.parent;
    }
    return undefined;
  }
}

export class FileEnv extends CodegenEnv {
  constructor(public file: string, public parent: CodegenEnv) {
    super(parent.manager, file, parent);
    this.manager.envs[this.id] = this;
  }

  createChildContractEnv(contract: AST.ContractDefn): ContractEnv {
    let contractEnv = new ContractEnv(contract.name.text, this);
    return contractEnv;
  }

  createChildInterfaceEnv(interfaceDefn: AST.InterfaceDefn): InterfaceEnv {
    let interfaceNameWithMixin =
      interfaceDefn.name.text +
      (interfaceDefn.mixinName !== undefined
        ? '[' + interfaceDefn.mixinName!.text + ']'
        : '');
    let interfaceEnv = new InterfaceEnv(interfaceNameWithMixin, this);
    return interfaceEnv;
  }

  getContractEnv(contractName: string): ContractEnv {
    let contractEnv = this.manager.getEnv(this.id + ':' + contractName);
    if (contractEnv === undefined) {
      throw new Error(`EnvManager: contract ${contractName} not found`);
    }
    return contractEnv as ContractEnv;
  }

  getInterfaceEnv(interfaceName: string): InterfaceEnv {
    let interfaceEnv = this.manager.getEnv(this.id + ':' + interfaceName);
    if (interfaceEnv === undefined) {
      throw new Error(`EnvManager: interface ${interfaceName} not found`);
    }
    return interfaceEnv as InterfaceEnv;
  }
}

export class ContractEnv extends CodegenEnv {
  constructor(public contract: string, public parent: FileEnv) {
    super(parent.manager, parent.id + ':' + contract, parent);
    this.manager.envs[this.id] = this;
  }

  public get query(): Record<string, Namespace<AST.QueryDefn>> {
    return Object.fromEntries(
      Object.entries(this.data).filter(
        ([k, v]) => v.obj instanceof AST.QueryDefn
      )
    );
  }
}

export class InterfaceEnv extends CodegenEnv {
  constructor(public interface_: string, public parent: FileEnv) {
    super(parent.manager, parent.id + ':' + interface_, parent);
    this.manager.envs[this.id] = this;
  }

  public get query(): Record<string, Namespace<AST.QueryDecl>> {
    return Object.fromEntries(
      Object.entries(this.data)
        .filter(([k, v]) => v.obj instanceof AST.QueryDecl)
        .map(([k, v]) => [k.replace(_query(''), ''), v])
    );
  }

  createChildFnDeclEnv(fn: string): FnDeclEnv {
    let fnDeclEnv = new FnDeclEnv(fn, this);
    return fnDeclEnv;
  }
}

export class FnDeclEnv extends CodegenEnv {
  constructor(public fn: string, public parent: InterfaceEnv) {
    super(parent.manager, parent.id + ':' + fn, parent);
    this.manager.envs[this.id] = this;
  }

  public get response(): string {
    return 'RESPONSE';
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

  getFileEnv(file: string): FileEnv {
    if (this.envs[file] === undefined) {
      throw new Error(`EnvManager: no env for file ${file}`);
    }
    let env = this.getEnv(`${file}`);
    return env as FileEnv;
  }
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
  return `__state:item__${s}`;
}

function _map(s: string): string {
  return `__state:map__${s}`;
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

export class Namespace<T, E extends CodegenEnv = CodegenEnv> {
  constructor(public obj: T, public env: E) {}
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
      let fileEnv = this.envManager.getRootEnv().createChildFileEnv(source);
      // load contracts & interfaces
      this.loadLocalDefns(fileEnv, source.ast);
      // load types
      this.loadTypeDefns(fileEnv, source.ast);
    });
    sources.forEach(source => {
      let fileEnv = this.envManager.getFileEnv(source.file);
      // load imports
      this.loadImports(fileEnv, source.ast);
    });
  }

  loadImports(env: FileEnv, ast: AST.SourceFile) {
    ast.descendants
      .filter(
        x => x instanceof AST.ImportStmt || x instanceof AST.ImportAllStmt
      )
      .map(x => x as AST.ImportStmt)
      .forEach(imp => {
        console.log(`loading imports for ${env.file}`);
        this.loadImport(env, imp);
      });
  }

  loadImport(env: FileEnv, ast: AST.ImportStmt) {
    let { fileName } = ast;
    let importEnv = this.envManager.getFileEnv(fileName);
    if (ast instanceof AST.ImportAllStmt) {
      Object.keys(importEnv.data).forEach(k => {
        env.set(k, () => importEnv.lookup(k));
      });
    } else if (ast instanceof AST.ImportItemsStmt) {
      ast.items.elements.forEach(item => {
        let importedSymbol = importEnv.lookup(item.symbol.text);
        if (importedSymbol === undefined) {
          throw new Error(
            `CWScriptCodegen: import ${fileName}:${item.symbol.text} not found`
          );
        }
        env.set(
          item.alias !== undefined ? item.alias.text : item.symbol.text,
          () => importEnv.lookup(item.symbol.text)
        );
      });
    }
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

  loadFnDefns(env: ContractEnv, defn: AST.AST) {
    defn.descendantsOfType(AST.InstantiateDefn).forEach(x => {
      env.set(_instantiate(), x);
    });
    defn.descendantsOfType(AST.MigrateDefn).forEach(x => {
      env.set(_migrate(), x);
    });
    defn.descendantsOfType(AST.ExecDefn).forEach(x => {
      let execEnv = env.createChild(_exec(x.name!.text));
      env.set(_exec(x.name!.text), new Namespace(x, execEnv));
    });
    defn.descendantsOfType(AST.QueryDefn).forEach(x => {
      let queryEnv = env.createChild(_query(x.name!.text));
      env.set(_query(x.name!.text), new Namespace(x, queryEnv));
    });
  }

  loadFnDecls(env: InterfaceEnv, defn: AST.AST) {
    defn.descendantsOfType(AST.InstantiateDecl).forEach(x => {
      env.set(_instantiate(), x);
    });
    defn.descendantsOfType(AST.MigrateDecl).forEach(x => {
      env.set(_migrate(), x);
    });
    defn.descendantsOfType(AST.ExecDecl).forEach(x => {
      let execEnv = env.createChild(_exec(x.name!.text));
      env.set(_exec(x.name!.text), new Namespace(x, execEnv));
    });
    defn.descendantsOfType(AST.QueryDecl).forEach(x => {
      let queryEnv = env.createChildFnDeclEnv(_query(x.name!.text));
      env.set(_query(x.name!.text), new Namespace(x, queryEnv));
    });
  }

  loadLocalDefns(env: FileEnv, sourceFile: AST.SourceFile): void {
    let contractDefns = sourceFile.descendantsOfType(AST.ContractDefn);
    for (let contractDefn of contractDefns) {
      let contractEnv = env.createChildContractEnv(contractDefn);
      env.set(contractDefn.name.text, new Namespace(contractDefn, contractEnv));
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
      let interfaceEnv = env.createChildInterfaceEnv(interfaceDefn);

      env.set(
        interfaceNameWithMixin,
        new Namespace(interfaceDefn, interfaceEnv)
      );
      this.loadErrorEnumStateDefns(interfaceEnv, interfaceDefn);
      this.loadTypeDefns(interfaceEnv, interfaceDefn);
      this.loadFnDecls(interfaceEnv, interfaceDefn);
    }
  }

  // loadImports(env: FileEnv, sourceFile: AST.SourceFile): void {
  //   let importStmts = sourceFile.descendantsOfType(AST.ImportStmt);
  //   for (let importStmt of importStmts) {
  //     let file: string = importStmt.fileName;
  //     let importEnv = this.envManager.getFileEnv(file);
  //     if (importStmt.symbols === '*') {
  //       for (let key of Object.keys(importEnv.data)) {
  //         env.set(key, new ImportedSymbol(file, importEnv, key));
  //       }
  //     } else {
  //       importStmt.symbols!.elements.forEach(symbol => {
  //         if (symbol instanceof AST.List) {
  //           symbol.elements.forEach(element => {
  //             env.set(
  //               element.text,
  //               new ImportedSymbol(file, importEnv, element)
  //             );
  //           });
  //         } else if (symbol instanceof AST.TypePathImportSymbol) {
  //           let len = symbol.path.paths.elements.length;
  //           env.set(
  //             symbol.path.paths.elements[len - 1].text,
  //             new ImportedSymbol(file, importEnv, symbol)
  //           );
  //         } else if (symbol instanceof AST.RenamedImportSymbol) {
  //           env.set(
  //             symbol.name.text,
  //             new ImportedSymbol(file, importEnv, symbol)
  //           );
  //         } else if (symbol instanceof AST.DestructureImportSymbol) {
  //           throw new Error('Destructure import not supported');
  //         } else if (symbol instanceof AST.AllImportSymbol) {
  //           throw new Error('All import not supported');
  //         } else {
  //           throw new Error(`Unknown import symbol`);
  //         }
  //       });
  //     }
  //   }
  // }

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

    let instantiate;
    let exec: any = {};
    let query: any = {};
    let migrate;

    for (let fn of contractDefn.descendantsOfType(AST.InstantiateDefn)) {
      let env = this.envManager
        .getFileEnv(sourceFile.file)
        .getContractEnv(contractDefn.name.text)
        .createChild(_instantiate());
      instantiate = this.translate(env, fn);
    }

    for (let fn of contractDefn.descendantsOfType(AST.MigrateDefn)) {
      let env = this.envManager
        .getFileEnv(sourceFile.file)
        .getContractEnv(contractDefn.name.text)
        .createChild(_migrate());
      migrate = this.translate(env, fn);
    }

    for (const execDefn of contractDefn.descendantsOfType(AST.ExecDefn)) {
      let env = this.envManager
        .getFileEnv(sourceFile.file)
        .getContractEnv(contractDefn.name.text)
        .createChild(_exec(execDefn.name!.text));
      exec[execDefn.name!.text] = this.translate(env, execDefn);
    }

    for (const queryDefn of contractDefn.descendantsOfType(AST.QueryDefn)) {
      let env = this.envManager
        .getFileEnv(sourceFile.file)
        .getContractEnv(contractDefn.name.text)
        .createChild(_query(queryDefn.name!.text));
      query[queryDefn.name!.text] = this.translate(env, queryDefn);
    }

    // get items
    return {
      name: contractDefn.name.text,
      exec,
      query,
      instantiate,
      migrate,
    };
  }

  public translateFnArg(env: CodegenEnv, arg: AST.FnArg): IR.FnArg {
    let name = arg.name.text;
    let type = this.translateType(env, arg.type);
    return new IR.FnArg(name, type);
  }

  public translateStructDefn(
    env: CodegenEnv,
    ast: AST.StructDefn
  ): IR.StructType {
    let name = ast.name.text;
    let { enumVariant } = ast;
    if (enumVariant instanceof AST.EnumVariantStruct) {
      return new IR.StructStructType(
        name,
        new IR.List(
          enumVariant.members.elements.map(
            x =>
              new IR.StructMember(x.name.text, this.translateType(env, x.type))
          )
        )
      );
    } else if (enumVariant instanceof AST.EnumVariantTuple) {
      return new IR.TupleStructType(
        name,
        new IR.List(
          enumVariant.members.elements.map(x => this.translateType(env, x))
        )
      );
    } else if (enumVariant instanceof AST.EnumVariantUnit) {
      return new IR.UnitStructType(name);
    } else {
      throw new Error(`Unknown enum variant type`);
    }
  }

  public translateType(env: CodegenEnv, type: AST.TypeExpr): IR.Type {
    if (type instanceof AST.TypePath) {
      let [first, ...rest] = type.paths.elements.map(x => x.text);
      let base: any = env.lookup(first);
      for (const path of rest) {
        if (base instanceof Namespace) {
          base = base.env;
        }
        base = base[path];
        if (base instanceof Namespace) {
          base = base.env;
        }
      }
      return base;
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
      let res = (base as any)[type.member.text];
      if (res === undefined) {
        throw new Error(
          `${base.constructor.name} has no member ${type.member.text}`
        );
      }
      if (!(res instanceof IR.Type)) {
        throw new Error(
          `${base.constructor.name}.${
            type.member.text
          } = ${res.toString()} is not a type`
        );
      }
      return res;
    } else if (type instanceof AST.StructDefn) {
      return this.translateStructDefn(env, type);
    } else {
      throw new Error(`Unsupported type: ${type.constructor.name}`);
    }
  }

  public translateLetStmt(env: CodegenEnv, ast: AST.LetStmt): IR.IR {
    ast.lhs.descendantsOfType(AST.Ident).forEach(i => {
      env.set(i.text, i);
    });

    if (ast.lhs instanceof AST.IdentLHS) {
      let lhs = ast.lhs.name;
      let rhs = this.translate(env, ast.rhs);
      return new IR.LetStmt(lhs, rhs);
    }

    throw new Error(`Unsupported LHS: ${ast.lhs}`);
  }

  public translate(env: CodegenEnv, ast: AST.AST): IR.IR {
    if (ast instanceof AST.LetStmt) {
      return this.translateLetStmt(env, ast);
    }

    if (ast instanceof AST.InstantiateDefn) {
      let args = ast.args.elements.map(arg => this.translateFnArg(env, arg));
      let returnType;
      if (ast.returnType !== undefined) {
        returnType = this.translateType(env, ast.returnType);
      } else {
        returnType = new IR.UnitType();
      }

      ast.args.elements.forEach(arg => {
        env.set(arg.name.text, arg);
      });

      return new IR.InstantiateDefn(
        new IR.List(args),
        returnType,
        new IR.List(ast.body.elements.map(x => this.translate(env, x)))
      );
    }

    if (ast instanceof AST.ExecDefn) {
      // load the locals & return type
      let args = ast.args.elements.map(arg => this.translateFnArg(env, arg));
      let returnType;
      if (ast.returnType !== undefined) {
        returnType = this.translateType(env, ast.returnType);
      } else {
        returnType = new IR.UnitType();
      }

      ast.args.elements.forEach(arg => {
        env.set(arg.name.text, arg);
      });

      return new IR.ExecDefn(
        ast.name!.text,
        new IR.List(args),
        returnType,
        new IR.List(ast.body.elements.map(x => this.translate(env, x)))
      );
    }

    if (ast instanceof AST.IntegerVal) {
      return new IR.IntegerVal(ast.value);
    }

    if (ast instanceof AST.AssignStmt) {
      let lhs = this.translate(env, ast.lhs);
      let rhs = this.translate(env, ast.rhs);
      let newValue;
      switch (ast.assignOp) {
        case '=':
          newValue = rhs;
          break;
        case '+=':
          newValue = new IR.Add(lhs, rhs);
          break;
        case '-=':
          newValue = new IR.Sub(lhs, rhs);
          break;
        case '*=':
          newValue = new IR.Mul(lhs, rhs);
          break;
        case '/=':
          newValue = new IR.Div(lhs, rhs);
          break;
        case '%=':
          newValue = new IR.Mod(lhs, rhs);
          break;
        default:
          throw new Error(`Unsupported assignOp: ${ast.assignOp}`);
      }

      if (lhs instanceof IR.Variable) {
        return new IR.VariableSet(lhs.name, newValue);
      } else if (lhs instanceof IR.StateItemGet) {
        return new IR.StateItemSet(lhs.name, newValue);
      } else if (lhs instanceof IR.StateMapGet) {
        return new IR.StateMapSet(lhs.name, lhs.keys, newValue);
      }
      return new IR.IR();
    }

    if (ast instanceof AST.TableLookupExpr) {
      let lhs = this.translate(env, ast.lhs);
      let key = this.translate(env, ast.key);
      if (lhs instanceof IR.StateMapGet) {
        let { name, keys } = lhs;
        // find the state - we don't need to check that it exists
        // we already have StateMapGet
        let state = env.lookup(_map(name)) as AST.MapDefn;
        // check if we have keys left to index
        if (keys.elements.length < state!.mapKeys.elements.length) {
          return new IR.StateMapGet(
            lhs.name,
            new IR.List([...keys.elements, key])
          );
        }
      } else {
        return new IR.TableLookup(lhs, key);
      }
    }

    if (ast instanceof AST.Ident) {
      let res = env.lookup(ast.text);
      if (res === undefined) {
        throw new Error(`${ast.text} is not defined ${ast.details()}`);
      }
      return res;
    }

    if (ast instanceof AST.MemberAccessExpr) {
      let member = ast.member.text;
      if (ast.isState()) {
        let state = env.lookupWhere(
          (k, v) => v instanceof AST.StateDefn && v.key.text === member
        );
        if (state === undefined) {
          throw new Error('State not found: ' + member);
        }

        if (state instanceof AST.ItemDefn) {
          return new IR.StateItemGet(member);
        } else if (state instanceof AST.MapDefn) {
          return new IR.StateMapGet(member, new IR.List([]));
        }
        throw new Error('Unknown state type: ' + state.constructor.name);
      } else if (ast.isApi() || ast.isEnv() || ast.isMsg()) {
        return new IR.SpecialVariableAccess(
          (ast.lhs as AST.Ident).text,
          member
        );
      } else {
        let lhs = this.translate(env, ast.lhs);
        return new IR.MemberAccess(lhs, member);
      }
    }

    if (ast instanceof AST.EmitStmt) {
      let expr = this.translate(env, ast.expr);
      return new IR.Emit(expr);
    }

    if (ast instanceof AST.IfExpr) {
      return new IR.IR();
    }

    if (ast instanceof AST.ExecStmt) {
      let expr = this.translate(env, ast.expr);
      return new IR.Exec(expr);
    }

    if (ast instanceof AST.NamedArgsFnCallExpr) {
      let expr = this.translate(env, ast.fn);
      let args = ast.args.elements.map(arg => this.translate(env, arg));
      return new IR.NamedArgsFnCall(expr, new IR.List(args));
    }

    if (ast instanceof AST.NamedExpr) {
      let name = ast.name.text;
      let value = this.translate(env, ast.value);
      return new IR.NamedExpr(name, value);
    }

    if (ast instanceof AST.TupleVal) {
      let type = this.translateType(env, ast.type);
      let elements = ast.members.elements.map(x => this.translate(env, x));
      return new IR.TupleVal(type, new IR.List(elements));
    }

    if (ast instanceof AST.FnArg) {
      console.log(ast.constructor.name);
      return this.translateFnArg(env, ast);
    }

    if (ast instanceof AST.List) {
      return new IR.List(ast.elements.map(x => this.translate(env, x)));
    }

    throw new Error(
      `Cannot translate ${ast.constructor.name} - not implemented`
    );
  }
}
