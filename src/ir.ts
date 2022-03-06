// CWScript Intermediate Representation
import * as AST from './ast';
import { Tree, TreeList, toData } from './tree';

export class IR extends Tree<IR> {}

export class List<T extends IR> extends IR implements TreeList<IR> {
  constructor(public elements: T[]) {
    super();
    this.setParentForChildren();
  }

  public override setParentForChildren(): void {
    this.elements.forEach(x => x.parent = this);
  }

  public override get children(): T[] {
    return Object.values(this.elements);
  }
}

export class TableSet extends IR {
  constructor(public table: string, public key: any, public value: any) {
    super();
    this.setParentForChildren();
  }
}


export class StateItemGet extends IR {
  constructor(public name: string) {
    super();
    this.setParentForChildren();
  }
}

export class StateItemSet extends IR {
  constructor(public name: string, public value: any) {
    super();
    this.setParentForChildren();
  }
}

export class MsgGet extends IR {
  constructor(public name: string) {
    super();
    this.setParentForChildren();
  }
}

export class VariableSet extends IR {
  constructor(public name: string, public value: any) {
    super();
    this.setParentForChildren();
  }
}

export class StateMapSet extends IR {
  constructor(public name: string, public key: any, public value: any) {
    super();
    this.setParentForChildren();
  }
}