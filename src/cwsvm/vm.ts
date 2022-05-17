export class CWSContract {
  constructor(public name: string, public items: any[] = []) {}

  public implements(_interface: CWSInterface): boolean {}
}

export class CWSInterface {
  constructor(public name: string, public items: any[] = []) {}
}

export class CWSFn {
  constructor(
    public name: string,
    public args: CWSFnArg[] = [],
    public returnType: string = 'none',
    public body: any[] = []
  ) {}
}

export interface CWSFnSig {
  name: string;
  args: CWSFnArg[];
  returnType: string;
}

export interface CWSFnArg {
  name: string;
  type: string;
}

const cw20 = new CWSInterface('CW20');
cw20.add('', new CWSFn());

const cw20base = new CWSContract('CW20Base');

const a = cw20base.implements(cw20);
console.log(a);
