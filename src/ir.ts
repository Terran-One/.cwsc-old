export type IR =
  | InfixOp
  | Condition
  | FnCall
  | ValNone
  | Fail
  | EmitEvent
  | AssignIdent
  | AssignMember
  | AssignStateItem
  | AssignStateMap
  | AssignTable
  | GetRustSymbol
  | GetStructMember;

export class BaseIR {
  public $type: string = '<BaseIR>';

  toData(): any {
    return {
      $type: this.$type,
    };
  }
}

export class InfixOp extends BaseIR {
  public $type: string = 'op.infix';

  // it is confusing, I know...
  // that 1 + 2 -> InfixOp(+, 1, 2)
  constructor(public op: string, public lhs: BaseIR, public rhs: BaseIR) {
    super();
  }

  toData(): any {
    return {
      $type: this.$type,
      op: this.op,
      lhs: this.lhs.toData(),
      rhs: this.rhs.toData(),
    };
  }
}

export class Condition extends BaseIR {
  public $type: string = 'condition';

  constructor(
    public predicate: BaseIR,
    public trueBranch: BaseIR[],
    public falseBranch?: BaseIR[]
  ) {
    super();
  }

  toData() {
    return {
      $type: this.$type,
      predicate: this.predicate.toData(),
      trueBranch: this.trueBranch.map(x => x.toData()),
      falseBranch: this.falseBranch?.map(x => x.toData()),
    };
  }
}
export class FnCall extends BaseIR {
  public $type: string = 'fn-call';

  constructor(public fn: BaseIR, public args: BaseIR[]) {
    super();
  }

  toData() {
    return {
      $type: this.$type,
      fn: this.fn.toData(),
      args: this.args.map(x => x.toData()),
    };
  }
}

export class ValNone extends BaseIR {
  public $type: string = 'val.none';
}

export interface ValStructMember {
  name: string;
  value: BaseIR;
}

export class ValStruct extends BaseIR {
  public $type: string = 'val.struct';

  constructor(public name: string, public members: ValStructMember[]) {
    super();
  }

  toData() {
    return {
      $type: this.$type,
      name: this.name,
      members: this.members,
    };
  }
}

export class Fail extends BaseIR {
  public $type: string = 'fail';

  constructor(public typeName: string, public args: BaseIR[]) {
    super();
  }

  toData() {
    return {
      ...super.toData(),
      typeName: this.typeName,
      args: this.args.map(x => x.toData()),
    };
  }
}

export class EmitEvent extends BaseIR {
  public $type: string = 'emit-event';

  constructor(public typeName: string, public args: BaseIR[]) {
    super();
  }

  toData(): any {
    return {
      ...super.toData(),
      typeName: this.typeName,
      args: this.args.map(x => x.toData()),
    };
  }
}

export class AssignIdent extends BaseIR {
  public $type: string = 'assign.ident';

  constructor(public ident: string, public rhs: BaseIR) {
    super();
  }

  toData(): any {
    return {
      ...super.toData(),
      ident: this.ident,
      rhs: this.rhs.toData(),
    };
  }
}

export class AssignMember extends BaseIR {
  public $type: string = 'assign.member';

  constructor(public obj: BaseIR, public member: string, public rhs: BaseIR) {
    super();
  }

  toData(): any {
    return {
      ...super.toData(),
      obj: this.obj.toData(),
      member: this.member,
      rhs: this.rhs.toData(),
    };
  }
}

export class AssignTable extends BaseIR {
  public $type: string = 'assign.table';

  constructor(public table: BaseIR, public key: BaseIR, public rhs: BaseIR) {
    super();
  }

  toData(): any {
    return {
      ...super.toData(),
      table: this.table.toData(),
      key: this.key.toData(),
      rhs: this.rhs.toData(),
    };
  }
}

export class AssignStateMap extends BaseIR {
  public $type: string = 'assign.state.map';

  constructor(
    public key: string,
    public mapKeys: BaseIR[],
    public rhs: BaseIR
  ) {
    super();
  }

  toData() {
    return {
      $type: this.$type,
      key: this.key,
      mapKeys: this.mapKeys.map(k => k.toData()),
      rhs: this.rhs.toData(),
    };
  }
}

export class AssignStateItem extends BaseIR {
  public $type: string = 'assign.state.item';

  constructor(public key: string, public rhs: BaseIR) {
    super();
  }

  toData() {
    return {
      $type: this.$type,
      key: this.key,
      rhs: this.rhs.toData(),
    };
  }
}

export class GetStructMember extends BaseIR {
  public $type: string = 'get.struct-member';

  constructor(public obj: BaseIR, public member: string) {
    super();
  }

  toData() {
    return {
      $type: this.$type,
      obj: this.obj.toData(),
      member: this.member,
    };
  }
}

export class GetRustSymbol extends BaseIR {
  public $type: string = 'get.rust-symbol';

  constructor(public symbol: string) {
    super();
  }

  toData() {
    return {
      $type: this.$type,
      symbol: this.symbol,
    };
  }
}
export class LoadStateMap extends BaseIR {
  public $type: string = 'load.state.map';

  constructor(public key: string, public mapKeys: BaseIR[]) {
    super();
  }

  toData() {
    return {
      $type: this.$type,
      key: this.key,
      mapKeys: this.mapKeys.map(k => k.toData()),
    };
  }
}

export class LoadStateItem extends BaseIR {
  public $type: string = 'load.state.item';

  constructor(public key: string) {
    super();
  }

  toData() {
    return {
      $type: this.$type,
      key: this.key,
    };
  }
}
