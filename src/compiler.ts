import * as AST from './ast';
import * as IR from './ir';
import util from 'util';

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

// export class CompilationContext extends CWScriptEnv {
//   public global: CWScriptEnv;
//   public sources: { [file: string]: SourceFileEnv };

//   constructor(globals: Record<string, any> = {}, sources: Source[] = []) {
//     super();
//     this.global = new CWScriptEnv(globals);
//     this.sources = {};
//     sources.forEach(source => {
//       this.sources[source.file] = new SourceFileEnv(source.file, source.ast);
//     });
//   }

//   /// Translate the AST into IR.
//   public translate<T extends AST.AST>(env: CWScriptEnv, ast: T): IR.IR {
//     if (ast instanceof AST.ContractDefn) {
//       let body = new IR.List<IR.IR>(
//         ast.body.elements.map(x => this.translate(env, x))
//       );
//       return new IR.ContractDefn(ast.name.text, body);
//     }

//     if (ast instanceof AST.ExecDefn) {
//       return new IR.ExecDefn(
//         ast.name!.text,
//         new IR.List<IR.FnArg>(
//           ast.args.elements.map(x => this.translate(env, x) as IR.FnArg)
//         ),
//         ast.returnType,
//         new IR.List<IR.IR>(ast.body.elements.map(x => this.translate(env, x)))
//       );
//     }

//     if (ast instanceof AST.MemberAccessExpr) {
//       if (ast.isState()) {
//         return new IR.StateItemGet(ast.member.text);
//       } else if (ast.isMsg()) {
//         return new IR.MsgGet(ast.member.text);
//       }
//     }

//     if (ast instanceof AST.AssignStmt) {
//       let rhs = this.translate(env, ast.rhs);
//       if (ast.lhs instanceof AST.MemberAccessExpr) {
//         if (ast.lhs.isState()) {
//           return new IR.StateItemSet(ast.lhs.member.text, rhs);
//         }
//       } else if (ast.lhs instanceof AST.Ident) {
//         return new IR.VariableSet(ast.lhs.text, rhs);
//       } else if (ast.lhs instanceof AST.TableLookupExpr) {
//         if (ast.lhs.lhs instanceof AST.MemberAccessExpr) {
//           if (ast.lhs.lhs.isState()) {
//             return new IR.StateMapSet(
//               ast.lhs.lhs.member.text,
//               this.translate(env, ast.lhs.key),
//               rhs
//             );
//           }
//         } else if (ast.lhs.lhs instanceof AST.Ident) {
//           return new IR.TableSet(
//             ast.lhs.lhs.text,
//             this.translate(env, ast.lhs.key),
//             rhs
//           );
//         } else {
//           throw new Error('unsupported table lookup');
//         }
//       }
//     }

//     return new IR.IR();
//   }
// }

// // export class CompilationJob {
// //   constructor(public request: CompilationRequest) {
// //     if (request.targets === undefined) {
//       request.targets = [];
//       request.sources.forEach(source => {
//         source.ast.descendantsOfType(AST.ContractDefn).forEach(contract => {
//           request.targets!.push({
//             contract: contract.name.text,
//             file: source.file,
//           });
//         });
//       });
//     }
//   }

//   public compile() {
//     let context = new CompilationContext({}, this.request.sources);
//     // Step 1: Get contract definitions
//     Object.values(context.sources).forEach(env => {
//       env.ast.descendantsOfType(AST.ContractDefn).forEach(contract => {
//         let ir = context.translate(env, contract);
//         env.set(contract.name.text, ir, 'contract');
//       });
//     });

//     Object.values(context.sources)
//       .map(x => x.items)
//       .forEach(items => {
//         if (items.__contract) {
//           Object.values(items.__contract).forEach(contract => {
//             console.log(
//               util.inspect((contract as IR.ContractDefn).items.toData(), {
//                 depth: null,
//               })
//             );
//           });
//         }
//       });
//   }
// }
