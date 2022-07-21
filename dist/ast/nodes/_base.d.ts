import { ParserRuleContext } from 'antlr4ts';
import { Tree, TreeList } from '../../util/tree';
export interface Position {
    a?: number;
    b?: number;
    length?: number;
    line?: number;
    column?: number;
}
export declare abstract class AST extends Tree<AST> {
    private __position?;
    constructor(ctx?: ParserRuleContext, parent?: AST, position?: Position);
    get position(): Position | undefined;
    toData(): any;
    validate(): boolean;
}
export declare class List<T extends AST> extends AST implements TreeList<AST> {
    ctx: any;
    elements: T[];
    constructor(ctx: any, elements: T[]);
    setParentForChildren(): void;
    get children(): T[];
    map<U>(f: (x: T) => U): U[];
}
