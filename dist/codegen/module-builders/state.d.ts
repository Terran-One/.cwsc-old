import * as AST from '../../ast/nodes';
import * as Rust from '../../rust';
import { AST2Rust } from '../ast2rust';
export declare function buildModState(ast2rust: AST2Rust, state: AST.StateDefn[]): Rust.Defn.Module;
