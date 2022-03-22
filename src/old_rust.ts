export interface Rust {
  toRustString(): string;
}

export enum StructType {
  STRUCT,
  TUPLE,
  UNIT,
}

export class Type implements Rust {
  constructor(public path: string = '', public typeParams: Type[] = []) {}

  withTypeParams(tps: Type[]): Type {
    return new Rust.Type(this.path, tps);
  }

  option(): Type.Option {
    return new RustOption(this);
  }

  vec(): Type.Vec {
    return new RustVec(this);
  }

  ref(mut: boolean = false): Type.Ref {
    return new Rust.TypeRef(mut ? RefType.MUT : RefType.REF, this);
  }

  mut(): Type.Mut {
    return new Rust.TypeMut(this);
  }

  fnCall(fnName: string, args: any, typeParams: Type[] = []): RustFnCall {
    let fn_tps = '';
    if (typeParams.length > 0) {
      fn_tps = `::<${typeParams.map(x => x.toRustString()).join(', ')}>`;
    }
    return new RustFnCall(`<${this.toRustString()}>::${fnName}${fn_tps}`, args);
  }

  toRustString(): string {
    if (this.typeParams.length === 0) {
      return this.path;
    }
    return `${this.path}<${this.typeParams
      .map(x => x.toRustString())
      .join(', ')}>`;
  }
}
export namespace Type {
  export enum RefType {
    REF = '&',
    MUT = '&mut ',
  }
  export class Mut extends Type {
    constructor(public inner: Type) {
      super(`mut ${inner.toRustString()}`);
    }
  }

  export class Ref extends Type {
    constructor(public refType: RefType, public inner: Type) {
      super(`${refType}${inner.toRustString()}`);
    }

    isMut(): boolean {
      return this.refType === RefType.MUT;
    }
  }

  export class Option extends Type {
    constructor(public inner: Type) {
      super('::std::option::Option', [inner]);
    }
  }

  export class Result extends Type {
    constructor(public okType: Type, public errType: Type) {
      super('::std::result::Result', [okType, errType]);
    }
  }

  export class Vec extends Type {
    constructor(public inner: Type) {
      super('::std::vec::Vec', [inner]);
    }
  }

  export class String extends Type {
    constructor() {
      super('::std::string::String');
    }
  }

  export class Primitive extends Type {}

  export class Never extends Primitive {
    constructor() {
      super('!');
    }
  }

  export class Str extends Primitive {
    constructor(public isStatic: boolean = false) {
      if (isStatic) {
        super(`&'static str`);
      } else {
        super('&str');
      }
    }
  }

  export class Int extends Primitive {
    constructor(public intType: IntType) {
      super(`${intType}`);
    }

    isSigned(): boolean {
      switch (this.intType) {
        case I8:
        case I16:
        case I32:
        case I64:
        case I128:
        case ISIZE:
          return true;
        default:
          return false;
      }
    }
  }

  export class Char extends Primitive {
    constructor() {
      super(`char`);
    }
  }

  export class Bool extends Primitive {
    constructor() {
      super(`bool`);
    }
  }

  export class Fn extends Primitive {
    constructor(public args: Type[], public returnType: Type) {
      super(
        `(fn(${args
          .map(x => x.toRustString())
          .join(', ')}) -> ${returnType.toRustString()})`
      );
    }
  }

  export enum PointerType {
    CONST = 'const',
    MUT = 'mut',
  }

  export class Pointer extends Primitive {
    constructor(public pointerType: PointerType, public inner: Type) {
      super(`*${pointerType} ${inner.toRustString()}`);
    }

    isMut(): boolean {
      return this.pointerType === PointerType.MUT;
    }
  }

  export class Array extends Primitive {
    constructor(public inner: Type, public size: number) {
      super(`[${inner.toRustString()}; ${size}]`);
    }
  }

  export class Slice extends Primitive {
    constructor(public inner: Type) {
      super(`&[${inner.toRustString()}]`);
    }
  }

  export class Tuple extends Primitive {
    constructor(public members: Type[]) {
      let name;
      if (members.length === 1) {
        name = `(${members[0].toRustString()},)`;
      } else {
        name = `(${members.map(x => x.toRustString()).join(', ')})`;
      }
      super(name);
    }
  }

  export class Unit extends Primitive {
    constructor() {
      super('()');
    }
  }

  export class Unknown extends Type {}
}

export class Annotation {
  constructor(public value: string) {}

  toRustString(): string {
    return `#[${this.value}]`;
  }
}

export const DERIVE_ANNOTATION = new Annotation(
  'derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)'
);

export const SERDE_RENAME_ANNOTATION = new Annotation(
  'serde(rename_all = "snake_case")'
);

export abstract class Annotated implements Rust {
  constructor(public annotations: Annotation[]) {}

  withAnnotations(x: string): string {
    return `${this.annotations.map(x => x.toRustString()).join(' ')} ${x}`;
  }

  toRustString(): string {
    throw new Error('Annotated.toRustString() implementation is missing');
  }
}

export namespace Stmt {
  export class StructMember extends Annotated {
    constructor(
      public annotations: Annotation[],
      public name: string | null,
      public type: Type
    ) {
      super(annotations);
    }

    public toRustString(): string {
      if (this.name === null) {
        return this.withAnnotations(this.type.toRustString());
      }
      return this.withAnnotations(`${this.name}: ${this.type.toRustString()}`);
    }
  }
  export class Struct extends Annotated {
    constructor(
      public annotations: Annotation[],
      public type: StructType,
      public name: string,
      public members: StructMember[] = []
    ) {
      super(annotations);
    }

    addMember(member: StructMember): Struct {
      this.members.push(member);
      return this;
    }

    toRustString(): string {
      switch (this.type) {
        case STRUCT:
          return this.withAnnotations(
            `pub struct ${this.name} { ${this.members
              .map(x => x.toRustString())
              .join(', ')} }`
          );
        case TUPLE:
          return this.withAnnotations(
            `pub struct ${this.name}(${this.members
              .map(x => x.toRustString())
              .join(', ')});`
          );
        case UNIT:
          return this.withAnnotations(`pub struct ${this.name};`);
      }
    }

    toEnumVariantString(): string {
      switch (this.type) {
        case STRUCT:
          return this.withAnnotations(
            `${this.name} { ${this.members
              .map(x => x.toRustString())
              .join(', ')} }`
          );
        case TUPLE:
          return this.withAnnotations(
            `${this.name}(${this.members
              .map(x => x.toRustString())
              .join(', ')})`
          );
        case UNIT:
          return this.withAnnotations(this.name);
      }
    }
  }

  export class Enum extends Annotated {
    constructor(
      public annotations: Annotation[],
      public name: string,
      public variants: Struct[] = []
    ) {
      super(annotations);
    }

    addVariant(variant: Struct): Enum {
      this.variants.push(variant);
      return this;
    }

    toRustString(): string {
      return this.withAnnotations(
        `pub enum ${this.name} { ${this.variants
          .map(x => x.toEnumVariantString())
          .join(',\n')} }`
      );
    }
  }

  export class TypeAlias {
    constructor(public name: string, public type: Type) {}

    toRustString(): string {
      return `pub type ${this.name} = ${this.type.toRustString()};`;
    }
  }

  export class Module {
    constructor(public name: string, public items: any[] = []) {}

    addItem(item: any): Module {
      this.items.push(item);
      return this;
    }

    toRustString(): string {
      return `pub mod ${this.name} { ${this.items.join('\n')} }`;
    }
  }

  export class Use extends Annotated {
    constructor(public annotations: Annotation[], public path: string) {
      super(annotations);
    }

    toRustString(): string {
      return this.withAnnotations(`use ${this.path};`);
    }
  }

  export class Const {
    constructor(public name: string, public type: Type, public value: Expr) {}

    toRustString(): string {
      return `pub const ${
        this.name
      }: ${this.type.toRustString()} = ${this.value.toRustString()};`;
    }
  }

  export class Function extends Annotated {
    constructor(
      public annotations: Annotation[],
      public name: string,
      public args: FunctionArg[],
      public returnType: Type,
      public body: any[]
    ) {
      super(annotations);
    }

    toRustString(): string {
      return this.withAnnotations(
        `pub fn ${this.name}(${this.args
          .map(x => x.toRustString())
          .join(
            ', '
          )}) -> ${this.returnType.toRustString()} { ${this.body
          .map(x => x.toRustString())
          .join('\n')} }`
      );
    }
  }

  export class LetStmt {
    constructor(
      public mut: boolean,
      public ident: string,
      public type?: Type,
      public rhs?: Expr
    ) {}

    toRustString(): string {
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
}

export class Val extends Expr {}

export namespace Val {
  export class StrLiteral extends Val {
    public get rustType(): Type.Str {
      return new Type.Str(true);
    }

    constructor(public value: string) {
      super();
    }

    toRustString(): string {
      return `"${this.value}"`;
    }
  }

  export class StructMember {
    constructor(public name: string, public value: Expr) {}

    toRustString(): string {
      return `${this.name}: ${this.value.toRustString()}`;
    }
  }

  export class Struct extends Val {
    public get rustType(): Type {
      return this.structType;
    }

    constructor(public structType: Type, public members: StructMember[] = []) {
      super();
    }

    assignMember(name: string, value: Expr): Struct {
      this.members = this.members.map(x => {
        if (x.name === name) {
          return new StructMember(name, value);
        } else {
          return x;
        }
      });
      return this;
    }

    toRustString(): string {
      return `${this.structType.toRustString()} { ${this.members
        .map(x => x.toRustString())
        .join(', ')} }`;
    }
  }

  export class Vec extends Val {
    public get rustType(): Type.Vec {
      return new Type.Vec(this.values[0].rustType);
    }

    constructor(public values: Expr[]) {
      super();
    }

    toRustString(): string {
      return `vec![${this.values.map(x => x.toRustString()).join(', ')}]`;
    }
  }

  export class Tuple extends Val {
    public get rustType(): Type.Tuple {
      return new Type.Tuple(this.members.map(x => x.rustType));
    }

    constructor(public members: Expr[]) {
      super();
    }

    toRustString(): string {
      return `(${this.members.map(x => x.toRustString()).join(', ')})`;
    }
  }

  export class IntLiteral extends Val {
    public get rustType(): Type.Int {
      return new Type.Int(this.intType);
    }

    constructor(public intType: IntType, public value: string) {
      super();
    }

    toRustString(): string {
      return `${this.value}${this.intType}`;
    }
  }

  export class BoolLiteral extends Val {
    public get rustType(): Type.Bool {
      return new Type.Bool();
    }

    constructor(public value: boolean) {
      super();
    }

    toRustString(): string {
      if (this.value) {
        return 'true';
      } else {
        return 'false';
      }
    }
  }
}

export class FunctionArg extends Annotated {
  constructor(
    public annotations: Annotation[],
    public name: string,
    public type: Type
  ) {
    super(annotations);
  }

  toRustString(): string {
    return this.withAnnotations(`${this.name}: ${this.type.toRustString()}`);
  }
}

export class SelfArg extends FunctionArg {
  constructor(public annotations: Annotation[], public mut: boolean) {
    let m = '';
    if (mut) {
      m = 'mut ';
    }

    super(annotations, `&${m}self`, new Type());
  }

  toRustString(): string {
    return this.withAnnotations(this.name);
  }
}

export enum IntType {
  U8 = 'u8',
  I8 = 'i8',
  U16 = 'u16',
  I16 = 'i16',
  U32 = 'u32',
  I32 = 'i32',
  U64 = 'u64',
  I64 = 'i64',
  U128 = 'u128',
  I128 = 'i128',
  USIZE = 'usize',
  ISIZE = 'isize',
}
