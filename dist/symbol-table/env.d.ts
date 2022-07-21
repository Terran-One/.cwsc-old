import { CWScriptScope, ScopeDefn } from './scope';
export declare const GLOBAL_SCOPE_ID = "__GLOBAL__";
/**
 * The CWScriptEnv object manages the environment of a CWScript
 * compilation context through a stack of CWScriptScope objects.
 *
 * Each CWScriptEnv has a root scope which lies at the bottom of the
 * stack, called the "global" scope. New scopes are pushed onto the
 * stack, and are descended from the current scope -- leading eventually
 * back to the global scope.
 *
 * Each scope is associated with a string identifier, which can be used
 * to access the scope from the CWScriptEnv directly.
 */
export declare class CWScriptEnv {
    scopes: CWScriptScope[];
    constructor(globals?: ScopeDefn);
    /**
     * Enter a new scope and push it onto the stack. The new scope
     * will be a child of the current scope.
     * @param id scope id
     * @returns the new scope
     */
    enterScope(id: string): CWScriptScope;
    /**
     * Returns the scope with the provided `id`, if it exists.
     * @param id scope id
     * @returns the scope, or undefined if it does not exist
     */
    getScope(id: string): CWScriptScope | undefined;
    /**
     * Returns the environment's global scope.
     * @returns the global scope
     */
    globalScope(): CWScriptScope;
    /**
     * Returns the environment's currently opened scope, which is
     * the top of the scope stack.
     * @returns the current scope
     */
    currentScope(): CWScriptScope;
    /**
     * Alias for `currentScope()`.
     */
    get scope(): CWScriptScope;
    /**
     * Closes the current scope, popping it off the stack. The next
     * current scope will be the parent of the closed scope.
     */
    exitScope(): void;
    /**
     * Creates a new scope with the provided `id`, and enters it.
     * Once the function returns, the scope will be exited.
     */
    withScope(id: string, fn: (scope: CWScriptScope) => void): void;
}
