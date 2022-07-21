import { Rust } from './common';
import { Type } from './type';
import { Expr } from './expr';
export declare class Path implements Rust {
    segments: string[];
    constructor(...segments: string[]);
    join(...segments: string[]): Path;
    toRustString(): string;
    toType(): Type;
    toExpr(): Expr.Path;
}
