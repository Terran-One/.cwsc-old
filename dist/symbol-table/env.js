"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CWScriptEnv = exports.GLOBAL_SCOPE_ID = void 0;
const scope_1 = require("./scope");
const std_1 = require("./std");
exports.GLOBAL_SCOPE_ID = '__GLOBAL__';
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
class CWScriptEnv {
    constructor(globals = std_1.CWSCRIPT_STD) {
        this.scopes = [];
        this.enterScope(exports.GLOBAL_SCOPE_ID);
        this.globalScope().applyDefn(globals);
    }
    /**
     * Enter a new scope and push it onto the stack. The new scope
     * will be a child of the current scope.
     * @param id scope id
     * @returns the new scope
     */
    enterScope(id) {
        if (this.scopes.length === 0) {
            this.scopes.push(new scope_1.CWScriptScope(id));
        }
        else {
            this.scopes.push(new scope_1.CWScriptScope(this.scope.id + '$' + id, this.currentScope()));
        }
        return this.currentScope();
    }
    /**
     * Returns the scope with the provided `id`, if it exists.
     * @param id scope id
     * @returns the scope, or undefined if it does not exist
     */
    getScope(id) {
        return this.scopes.find(s => s.id === id);
    }
    /**
     * Returns the environment's global scope.
     * @returns the global scope
     */
    globalScope() {
        return this.scopes[0];
    }
    /**
     * Returns the environment's currently opened scope, which is
     * the top of the scope stack.
     * @returns the current scope
     */
    currentScope() {
        return this.scopes[this.scopes.length - 1];
    }
    /**
     * Alias for `currentScope()`.
     */
    get scope() {
        return this.currentScope();
    }
    /**
     * Closes the current scope, popping it off the stack. The next
     * current scope will be the parent of the closed scope.
     */
    exitScope() {
        this.scopes.pop();
    }
    /**
     * Creates a new scope with the provided `id`, and enters it.
     * Once the function returns, the scope will be exited.
     */
    withScope(id, fn) {
        this.enterScope(id);
        fn(this.currentScope());
        this.exitScope();
    }
}
exports.CWScriptEnv = CWScriptEnv;
//# sourceMappingURL=env.js.map