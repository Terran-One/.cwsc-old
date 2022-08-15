import { AST } from '.';
export declare class State extends AST {
    key: string;
    constructor(key: string);
}
export declare class SpecialVariable extends AST {
    ns: string;
    member: string;
    constructor(ns: string, member: string);
}
