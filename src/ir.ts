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

export class InstantiateHandler extends IR {
  constructor(public returnType: any, public stmts: List<any>) {
    super();
  }
}

export class QueryHandler extends IR {
  constructor(public name: string) {
    super();
  }
}

export class ExecHandler extends IR {
  constructor(public name: string) {
    super();
  }
}

export class Contract extends IR {
  constructor(public name: string, public items: any) {
    super();
  }

  public get codegen(): any {
    return {};
  }
}
