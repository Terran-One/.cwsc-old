import { Rust } from "./common";
import { Expr } from "./expr";
export declare class TypeConversion extends Expr {
    rhs: string;
    type: string;
    expr: Rust;
    constructor(rhs: string, type: string);
    toRustString(): string;
}
