import * as AST from '../../ast/nodes';
import * as Rust from '../../rust';
import { AST2Rust } from '../ast2rust';
export declare function buildModError(ast2rust: AST2Rust, errors: AST.ErrorDefn[]): Rust.Defn.Module;
