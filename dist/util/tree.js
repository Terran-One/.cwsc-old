"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = exports.toData = void 0;
function toData(x, dunders) {
    if (x instanceof Tree) {
        let obj = {
            $type: x.constructor.name,
        };
        for (let key in x) {
            if (key.startsWith('__')) {
                let dunder_key = key.substring(2);
                if (dunders && dunders[dunder_key]) {
                    obj[`$${dunder_key}`] = dunders[dunder_key](x[key]);
                }
            }
            else {
                obj[key] = toData(x[key], dunders);
            }
        }
        return obj;
    }
    else if (x instanceof Array) {
        return x.map((x) => toData(x, dunders));
    }
    else {
        return x;
    }
}
exports.toData = toData;
class Tree {
    constructor(__parent) {
        this.__parent = __parent;
    }
    get parent() {
        return this.__parent;
    }
    set parent(p) {
        this.__parent = p;
    }
    get children() {
        let _a = this, { __parent } = _a, rest = __rest(_a, ["__parent"]);
        return Object.values(rest)
            .filter((x) => x instanceof Tree)
            .map((x) => x);
    }
    *walkAncestors(includeSelf = false) {
        let parent = this.parent;
        while (parent) {
            yield parent;
            parent = parent.parent;
        }
    }
    get ancestors() {
        return Array.from(this.walkAncestors());
    }
    nearestAncestorWhere(predicate) {
        for (const ancestor of this.walkAncestors()) {
            if (predicate(ancestor)) {
                return ancestor;
            }
        }
        return undefined;
    }
    nearestAncestorOfType(astType) {
        return this.nearestAncestorWhere((x) => x.constructor.name === astType.name);
    }
    /// Breadth-first traversal of descendant nodes.
    *walkDescendantsBFS() {
        yield* this.children;
        for (const child of this.children) {
            yield* child.walkDescendantsBFS();
        }
    }
    /// Depth-first traversal of descendant nodes.
    *walkDescendants() {
        for (const child of this.children) {
            yield child;
            yield* child.walkDescendants();
        }
    }
    // Leaves-first traversal of descendant nodes.
    *walkDescendantsLF() {
        for (const child of this.children) {
            yield* child.walkDescendantsLF();
        }
        yield* this.children;
    }
    get descendants() {
        return Array.from(this.walkDescendants());
    }
    descendantsOfType(astType) {
        return this.descendants
            .filter((x) => x.constructor.name === astType.name)
            .map((x) => x);
    }
    setParentForChildren() {
        let _a = this, { __parent } = _a, rest = __rest(_a, ["__parent"]);
        Object.values(this.children).forEach((child) => (child.parent = this));
    }
    toData() {
        return toData(this);
    }
}
exports.Tree = Tree;
//# sourceMappingURL=tree.js.map