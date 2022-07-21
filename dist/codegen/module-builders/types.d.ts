import * as AST from '../../ast/nodes';
import * as Rust from '../../rust';
import { AST2Rust } from '../ast2rust';
export declare function buildModTypes(ast2rust: AST2Rust, types: (AST.TypeAliasDefn | AST.StructDefn | AST.EnumDefn)[]): Rust.Defn.Module;
