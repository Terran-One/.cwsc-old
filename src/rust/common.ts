import { Type } from './type';

export interface Rust {
  toRustString(): string;
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

export enum StructType {
  STRUCT,
  TUPLE,
  UNIT,
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

export enum RefType {
  REF = '&',
  MUT = '&mut ',
}
