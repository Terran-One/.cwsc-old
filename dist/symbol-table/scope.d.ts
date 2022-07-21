import { CWScriptSymbol } from './symbols';
/**
 * Common scope subspaces.
 */
export declare enum Subspace {
    TYPE = "type" /** used for struct, enum, type aliases */,
    FN = "fn" /** used for functions */,
    STATE = "state" /** used for contract state */,
    LOCAL = "local-var" /** used for local variables */,
    ARG = "arg" /** used for function arguments */,
    ERROR = "error" /** used for error definitions  */,
    EVENT = "event" /** used for event definitions */
}
export interface ScopeDefn {
    [subspace: string]: {
        [identifier: string]: CWScriptSymbol;
    };
}
/**
 * A class representing a scope within CWScript. Scopes are used to
 * mark the boundaries of local variables and functions within various
 * CWScript constructs, such as functions, loops, and if statements.
 *
 * CWScript scope objects are implemented as symbol tables in which
 * the various symbol definition entries are segregated by "subspace."
 * This allows for the separation of different types of symbols, such
 * as functions, variables, and types.
 *
 * When looking up an identifier, the CWScript scope object will first
 * check to see if the identifier is defined in the current scope. If
 * it is not, it will check the parent scope, and so on until it reaches
 * the global scope.
 */
export declare class CWScriptScope {
    id: string;
    parent: CWScriptScope | null;
    symbolTable: Map<string, Map<string, CWScriptSymbol>>;
    constructor(id: string, parent?: CWScriptScope | null);
    /**
     * Searches the scope hierarchy for a definition entry with the
     * provided `ident` inside the `subspace`. The search begins at the
     * current scope and proceeds up the scope hierarchy until it reaches
     * the global scope.
     *
     * If a definition entry is found, it is returned. If no definition
     * entry is found, `undefined` is returned.
     *
     * If the `subspace` is set to `null`, the search will be performed
     * across all subspaces for the first definition entry found.
     *
     * @param subspace the subspace to search for the definition entry
     * @param identifier name of the definition entry to search for
     * @returns the definition entry, or `undefined` if it does not exist
     */
    resolve(subspace: Subspace | Subspace[] | null, identifier: string): CWScriptSymbol | undefined;
    /**
     * Adds a new definition entry to the scope. If a definition entry
     * already exists with the same name, it will be overwritten.
     *
     * @param subspace  the subspace to add the definition entry to
     * @param identifier   the name of the definition entry
     * @param symbol  the definition entry to add
     */
    define(subspace: Subspace, identifier: string, symbol: CWScriptSymbol): void;
    /**
     * Removes a definition entry from the scope. If no definition entry
     * exists with the provided name, this method will do nothing.
     * If no idenfier is provided, the entire subspace will be removed.
     *
     * @param subspace the subspace to remove the definition entry from
     * @param identifier the name of the definition entry to remove
     */
    delete(subspace: Subspace, identifier?: string): void;
    /**
     * Merges the provided scope defition into the current scope.
     * @param defn the definition to mergej
     */
    applyDefn(defn: ScopeDefn): void;
}
