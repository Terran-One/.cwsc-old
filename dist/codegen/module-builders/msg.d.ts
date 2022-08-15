import * as AST from '../../ast/nodes';
import * as Rust from '../../rust';
import { AST2Rust } from '../ast2rust';
export declare function buildModMsg(ast2rust: AST2Rust, i: AST.InstantiateDefn, e: AST.ExecDefn[], q: AST.QueryDefn[]): Rust.Defn.Module;
