import { Type } from './type';

export class CAM {}

export class StateItem extends CAM {
  constructor(public key: string, public type: Type) {
    super();
  }
}

export class StateItemAccess extends CAM {
  constructor(public key: string) {
    super();
  }
}

export class StateMap extends CAM {
  constructor(
    public key: string,
    public mapKeys: Array<{ name: string | undefined; type: Type }>,
    public type: Type
  ) {
    super();
  }
}

export class Contract extends CAM {
  constructor(
    public name: string,
    public types: Type[],
    public errors: Type.Struct[],
    public events: Type.Struct[],
    public state: (StateItem | StateMap)[],
    public instantiate: Fn,
    public exec: Fn[],
    public query: Fn[]
  ) {
    super();
  }
}

export class Fn extends CAM {
  constructor(
    public name: string,
    public args: Array<{ name: string; option: boolean; type: Type }> = [],
    public returnType: Type,
    public body: CAM[]
  ) {
    super();
  }
}

export class ForIn extends CAM {
  constructor(public bindings: any, public iterable: any, public body: any) {
    super();
  }
}

export class Let extends CAM {
  constructor(public lhs: any, public rhs: any) {
    super();
  }
}

export class IntegerVal extends CAM {
  constructor(public value: string) {
    super();
  }
}

export class Emit extends CAM {
  constructor(public expr: CAM) {
    super();
  }
}

export class TupleVal extends CAM {
  constructor(public type: Type, public members: CAM[]) {
    super();
  }
}

export class StructVal extends CAM {
  constructor(
    public type: Type,
    public members: Array<{ name: string; value: CAM }>
  ) {
    super();
  }
}

export class Assign extends CAM {
  constructor(public op: string, public lhs: CAM, public rhs: CAM) {
    super();
  }
}

export class Return extends CAM {
  constructor(public expr: CAM) {
    super();
  }
}

export class SpecialVariable extends CAM {
  constructor(public namespace: string, public member: string) {
    super();
  }
}

export class LoadArg extends CAM {
  constructor(public arg: any) {
    super();
  }
}
