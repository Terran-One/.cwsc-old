export declare function toData(x: any, dunders?: {
    [key: string]: (x: any) => any;
}): any;
export declare class Tree<T extends Tree<any>> {
    private __parent?;
    constructor(__parent?: T | undefined);
    get parent(): T | undefined;
    set parent(p: T | undefined);
    get children(): T[];
    walkAncestors(includeSelf?: boolean): IterableIterator<T>;
    get ancestors(): T[];
    nearestAncestorWhere(predicate: (x: T) => boolean): T | undefined;
    nearestAncestorOfType<X extends T>(astType: new (...args: any) => X): X | undefined;
    walkDescendantsBFS(): IterableIterator<T>;
    walkDescendants(): IterableIterator<T>;
    walkDescendantsLF(): IterableIterator<T>;
    get descendants(): T[];
    descendantsOfType<X extends T>(astType: new (...args: any) => X): X[];
    setParentForChildren(): void;
    toData(): any;
}
export interface TreeList<T extends Tree<T>> {
    elements: T[];
}
