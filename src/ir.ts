// CWScript Intermediate Representation

export class IR {}

export class List<T extends IR> extends IR {
  constructor(public elements: T[]) {
    super();
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
}
