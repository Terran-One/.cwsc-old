"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Defn = void 0;
const common_1 = require("./common");
var Defn;
(function (Defn) {
    class StructMember extends common_1.Annotated {
        constructor(annotations, name, type) {
            super(annotations);
            this.annotations = annotations;
            this.name = name;
            this.type = type;
        }
        toRustString() {
            if (this.name === null) {
                return this.withAnnotations(`pub ${this.type.toRustString()}`);
            }
            return this.withAnnotations(`pub ${this.name}: ${this.type.toRustString()}`);
        }
        toEnumVariantString() {
            if (this.name === null) {
                return this.withAnnotations(this.type.toRustString());
            }
            return this.withAnnotations(`${this.name}: ${this.type.toRustString()}`);
        }
    }
    Defn.StructMember = StructMember;
    class Struct extends common_1.Annotated {
        constructor(annotations, type, name, members = []) {
            super(annotations);
            this.annotations = annotations;
            this.type = type;
            this.name = name;
            this.members = members;
        }
        addMember(member) {
            this.members.push(member);
            return this;
        }
        toRustString() {
            switch (this.type) {
                case common_1.STRUCT:
                    return this.withAnnotations(`pub struct ${this.name} { ${this.members
                        .map(x => x.toRustString())
                        .join(', ')} }`);
                case common_1.TUPLE:
                    return this.withAnnotations(`pub struct ${this.name}(${this.members
                        .map(x => x.toRustString())
                        .join(', ')});`);
                case common_1.UNIT:
                    return this.withAnnotations(`pub struct ${this.name};`);
            }
        }
        toEnumVariantString() {
            switch (this.type) {
                case common_1.STRUCT:
                    return this.withAnnotations(`${this.name} { ${this.members
                        .map(x => x.toEnumVariantString())
                        .join(', ')} }`);
                case common_1.TUPLE:
                    return this.withAnnotations(`${this.name}(${this.members
                        .map(x => x.toEnumVariantString())
                        .join(', ')})`);
                case common_1.UNIT:
                    return this.withAnnotations(this.name);
            }
        }
    }
    Defn.Struct = Struct;
    class Enum extends common_1.Annotated {
        constructor(annotations, name, variants = []) {
            super(annotations);
            this.annotations = annotations;
            this.name = name;
            this.variants = variants;
        }
        addVariant(variant) {
            this.variants.push(variant);
            return this;
        }
        toRustString() {
            return this.withAnnotations(`pub enum ${this.name} { ${this.variants
                .map(x => x.toEnumVariantString())
                .join(',\n')} }`);
        }
    }
    Defn.Enum = Enum;
    class TypeAlias {
        constructor(name, type) {
            this.name = name;
            this.type = type;
        }
        toRustString() {
            return `pub type ${this.name} = ${this.type.toRustString()};`;
        }
    }
    Defn.TypeAlias = TypeAlias;
    class Module {
        constructor(name, items = []) {
            this.name = name;
            this.items = items;
        }
        addItem(item) {
            this.items.push(item);
            return this;
        }
        toRustString() {
            return `pub mod ${this.name} { ${this.items
                .map(x => x.toRustString())
                .join('\n')} }`;
        }
    }
    Defn.Module = Module;
    class Use extends common_1.Annotated {
        constructor(annotations, path) {
            super(annotations);
            this.annotations = annotations;
            this.path = path;
        }
        toRustString() {
            return this.withAnnotations(`use ${this.path};`);
        }
    }
    Defn.Use = Use;
    class Const {
        constructor(name, type, value) {
            this.name = name;
            this.type = type;
            this.value = value;
        }
        toRustString() {
            return `pub const ${this.name}: ${this.type.toRustString()} = ${this.value.toRustString()};`;
        }
    }
    Defn.Const = Const;
    class Function extends common_1.Annotated {
        constructor(annotations, name, args, returnType, body = []) {
            super(annotations);
            this.annotations = annotations;
            this.name = name;
            this.args = args;
            this.returnType = returnType;
            this.body = body;
        }
        addArg(arg) {
            this.args.push(arg);
            return this;
        }
        addBody(stmt) {
            this.body.push(stmt);
            return this;
        }
        toRustString() {
            return this.withAnnotations(`pub fn ${this.name}(${this.args
                .map(x => x.toRustString())
                .join(', ')}) -> ${this.returnType.toRustString()} { ${this.body
                .map(x => x.toRustString())
                .join('\n')} }`);
        }
    }
    Defn.Function = Function;
    class Let {
        constructor(mut, ident, type, rhs) {
            this.mut = mut;
            this.ident = ident;
            this.type = type;
            this.rhs = rhs;
        }
        toRustString() {
            let m = '';
            if (this.mut) {
                m = ' mut ';
            }
            let t = '';
            if (this.type !== undefined) {
                t = `: ${this.type.toRustString()}`;
            }
            let r = '';
            if (this.rhs !== undefined) {
                r = ` = ${this.rhs.toRustString()}`;
            }
            return `let${m}${this.ident}${t}${r};`;
        }
    }
    Defn.Let = Let;
})(Defn = exports.Defn || (exports.Defn = {}));
//# sourceMappingURL=defn.js.map