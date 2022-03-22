export interface Rust {
  toRustString(): string;
}

export enum StructType {
  STRUCT,
  TUPLE,
  UNIT,
}

export class RustType {
  constructor(public path: string = '', public typeParams: RustType[] = []) {}

  withTypeParams(tps: RustType[]): RustType {
    return new RustType(this.path, tps);
  }

  option(): RustOption {
    return new RustOption(this);
  }

  vec(): RustVec {
    return new RustVec(this);
  }

  ref(mut: boolean = false): RustTypeRef {
    return new RustTypeRef(mut ? RefType.MUT : RefType.REF, this);
  }

  mut(): RustTypeMut {
    return new RustTypeMut(this);
  }

  fnCall(fnName: string, args: any, typeParams: RustType[] = []): RustFnCall {
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

export enum RefType {
  REF = '&',
  MUT = '&mut ',
}
export class RustTypeMut extends RustType {
  constructor(public inner: RustType) {
    super(`mut ${inner.toRustString()}`);
  }
}

export class RustTypeRef extends RustType {
  constructor(public refType: RefType, public inner: RustType) {
    super(`${refType}${inner.toRustString()}`);
  }

  isMut(): boolean {
    return this.refType === RefType.MUT;
  }
}

export class RustOption extends RustType {
  constructor(public inner: RustType) {
    super('::std::option::Option', [inner]);
  }
}

export class RustResult extends RustType {
  constructor(public okType: RustType, public errType: RustType) {
    super('::std::result::Result', [okType, errType]);
  }
}

export class RustVec extends RustType {
  constructor(public inner: RustType) {
    super('::std::vec::Vec', [inner]);
  }
}

export class RustString extends RustType {
  constructor() {
    super('::std::string::String');
  }
}

export class RustPrimitive extends RustType {
  constructor(public name: string) {
    super(name);
  }
}

export class RustNever extends RustPrimitive {
  constructor() {
    super('!');
  }
}

export class RustStr extends RustPrimitive {
  constructor(public isStatic: boolean = false) {
    if (isStatic) {
      super(`&'static str`);
    } else {
      super('&str');
    }
  }
}

export class RustInt extends RustPrimitive {
  constructor(public intType: IntType) {
    super(`${intType}`);
  }

  isSigned(): boolean {
    switch (this.intType) {
      case IntType.I8:
      case IntType.I16:
      case IntType.I32:
      case IntType.I64:
      case IntType.I128:
      case IntType.ISIZE:
        return true;
      default:
        return false;
    }
  }
}

export class RustChar extends RustPrimitive {
  constructor() {
    super(`char`);
  }
}

export class RustBool extends RustPrimitive {
  constructor() {
    super(`bool`);
  }
}

export class RustFn extends RustPrimitive {
  constructor(public args: RustType[], public returnType: RustType) {
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

export class RustPointer extends RustPrimitive {
  constructor(public pointerType: PointerType, public inner: RustType) {
    super(`*${pointerType} ${inner.toRustString()}`);
  }

  isMut(): boolean {
    return this.pointerType === PointerType.MUT;
  }
}

export class RustArray extends RustPrimitive {
  constructor(public inner: RustType, public size: number) {
    super(`[${inner.toRustString()}; ${size}]`);
  }
}

export class RustSlice extends RustPrimitive {
  constructor(public inner: RustType) {
    super(`&[${inner.toRustString()}]`);
  }
}

export class RustTuple extends RustPrimitive {
  constructor(public members: RustType[]) {
    let name;
    if (members.length === 1) {
      name = `(${members[0].toRustString()},)`;
    } else {
      name = `(${members.map(x => x.toRustString()).join(', ')})`;
    }
    super(name);
  }
}

export class RustUnit extends RustPrimitive {
  constructor() {
    super('()');
  }
}

export class UnknownType extends RustType {}

export abstract class RustExpr implements Rust {
  public get rustType(): RustType {
    return new UnknownType();
  }

  asType(type: RustType): RustExpr {
    return new RustExprAs(this, type);
  }

  q(): RustExprQ {
    return new RustExprQ(this);
  }

  ref(mut: boolean = false): RustExprRef {
    return new RustExprRef(mut ? RefType.MUT : RefType.REF, this);
  }

  mut(): RustExprMut {
    return new RustExprMut(this);
  }

  fnCall(fnName: string, args: any, typeParams: RustType[] = []): RustFnCall {
    let fn_tps = '';
    if (typeParams.length > 0) {
      fn_tps = `::<${typeParams.map(x => x.toRustString()).join(', ')}>`;
    }
    return new RustFnCall(`${this.toRustString()}.${fnName}${fn_tps}`, args);
  }

  dot(member: string): RustExprDot {
    return new RustExprDot(this, member);
  }

  toRustString(): string {
    throw new Error(
      `${this.constructor.name}.toRustString() implementation is missing`
    );
  }
}

export class RustExprDot extends RustExpr {
  constructor(public expr: RustExpr, public member: string) {
    super();
  }

  toRustString(): string {
    return `${this.expr.toRustString()}.${this.member}`;
  }
}

export class RustExprAs extends RustExpr {
  public get rustType(): RustType {
    return this.castedType;
  }

  constructor(public inner: RustExpr, public castedType: RustType) {
    super();
  }

  toRustString(): string {
    return `(${this.inner.toRustString()} as ${this.castedType.toRustString()})`;
  }
}

export class RustExprMut extends RustExpr {
  public get rustType(): RustTypeMut {
    return new RustTypeMut(this.inner.rustType);
  }

  constructor(public inner: RustExpr) {
    super();
  }

  toRustString(): string {
    return `(mut ${this.inner.toRustString()})`;
  }
}

export class RustExprRef extends RustExpr {
  public get rustType(): RustTypeRef {
    return new RustTypeRef(this.refType, this.inner.rustType);
  }

  constructor(public refType: RefType, public inner: RustExpr) {
    super();
  }

  toRustString(): string {
    return `(${this.refType} ${this.inner.toRustString()})`;
  }

  isMut(): boolean {
    return this.refType === RefType.MUT;
  }
}

export class RustExprQ extends RustExpr {
  constructor(public inner: RustExpr) {
    super();
  }

  toRustString(): string {
    return `(${this.inner.toRustString()})?`;
  }
}
export class RustFnCall extends RustExpr {
  constructor(
    public path: string,
    public args: any[],
    public typeParams: RustType[] = []
  ) {
    super();
  }

  toRustString(): string {
    return `${this.path}(${this.args.map(x => x.toRustString()).join(', ')})`;
  }
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

export abstract class Annotated {
  constructor(public annotations: Annotation[]) {}

  withAnnotations(x: string): string {
    return `${this.annotations.map(x => x.toRustString()).join(' ')} ${x}`;
  }
}

export class StructMember extends Annotated {
  constructor(
    public annotations: Annotation[],
    public name: string | null,
    public type: RustType
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
      case StructType.STRUCT:
        return this.withAnnotations(
          `pub struct ${this.name} { ${this.members
            .map(x => x.toRustString())
            .join(', ')} }`
        );
      case StructType.TUPLE:
        return this.withAnnotations(
          `pub struct ${this.name}(${this.members
            .map(x => x.toRustString())
            .join(', ')});`
        );
      case StructType.UNIT:
        return this.withAnnotations(`pub struct ${this.name};`);
    }
  }

  toEnumVariantString(): string {
    switch (this.type) {
      case StructType.STRUCT:
        return this.withAnnotations(
          `${this.name} { ${this.members
            .map(x => x.toRustString())
            .join(', ')} }`
        );
      case StructType.TUPLE:
        return this.withAnnotations(
          `${this.name}(${this.members.map(x => x.toRustString()).join(', ')})`
        );
      case StructType.UNIT:
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
  constructor(public name: string, public type: RustType) {}

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

export class UseStmt extends Annotated {
  constructor(public annotations: Annotation[], public path: string) {
    super(annotations);
  }

  toRustString(): string {
    return this.withAnnotations(`use ${this.path};`);
  }
}

export class Const {
  constructor(public name: string, public type: RustType, public value: any) {}

  toRustString(): string {
    return `pub const ${
      this.name
    }: ${this.type.toRustString()} = ${this.value.toRustString()};`;
  }
}

export class StringLiteral extends RustExpr {
  public get rustType(): RustStr {
    return new RustStr(true);
  }

  constructor(public value: string) {
    super();
  }

  toRustString(): string {
    return `"${this.value}"`;
  }
}

export class Function extends Annotated {
  constructor(
    public annotations: Annotation[],
    public name: string,
    public args: FunctionArg[],
    public returnType: RustType,
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

export class FunctionArg extends Annotated {
  constructor(
    public annotations: Annotation[],
    public name: string,
    public type: RustType
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

    super(annotations, `&${m}self`, new RustType());
  }

  toRustString(): string {
    return this.withAnnotations(this.name);
  }
}

export class LetStmt {
  constructor(
    public mut: boolean,
    public ident: string,
    public type?: RustType,
    public rhs?: RustExpr
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

export class IntLiteral extends RustExpr {
  public get rustType(): RustInt {
    return new RustInt(this.intType);
  }

  constructor(public intType: IntType, public value: string) {
    super();
  }

  toRustString(): string {
    return `${this.value}${this.intType}`;
  }
}

export class BinaryIntLiteral extends RustExpr {
  public get rustType(): RustInt {
    return new RustInt(IntType.I32); // TODO: make dynamic
  }
  constructor(public value: string) {
    super();
  }

  toRustString(): string {
    return `0b${this.value}`;
  }
}

export class OctalIntLiteral extends RustExpr {
  public get rustType(): RustInt {
    return new RustInt(IntType.I32); // TODO: make dynamic
  }

  constructor(public value: string) {
    super();
  }

  toRustString(): string {
    return `0o${this.value}`;
  }
}
export class HexLiteral extends RustExpr {
  public get rustType(): RustInt {
    return new RustInt(IntType.I32); // TODO: make dynamic
  }

  constructor(public value: string) {
    super();
  }

  toRustString(): string {
    return `0x${this.value}`;
  }
}

export class BooleanLiteral extends RustExpr {
  public get rustType(): RustBool {
    return new RustBool();
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

export class StructMemberVal {
  constructor(public name: string, public value: RustExpr) {}

  toRustString(): string {
    return `${this.name}: ${this.value.toRustString()}`;
  }
}

export class StructVal extends RustExpr {
  public get rustType(): RustType {
    return this.structType;
  }

  constructor(
    public structType: RustType,
    public members: StructMemberVal[] = []
  ) {
    super();
  }

  assignMember(name: string, value: RustExpr): StructVal {
    this.members = this.members.map(x => {
      if (x.name === name) {
        return new StructMemberVal(name, value);
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

export class VecVal extends RustExpr {
  public get rustType(): RustType {
    return new RustVec(this.values[0].rustType);
  }

  constructor(public values: RustExpr[]) {
    super();
  }

  toRustString(): string {
    return `vec![${this.values.map(x => x.toRustString()).join(', ')}]`;
  }
}

export class TupleVal extends RustExpr {
  public get rustType(): RustTuple {
    return new RustTuple(this.members.map(x => x.rustType));
  }

  constructor(public members: RustExpr[]) {
    super();
  }

  toRustString(): string {
    return `(${this.members.map(x => x.toRustString()).join(', ')})`;
  }
}
