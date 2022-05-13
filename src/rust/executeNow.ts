import { Expr } from "rust";
import { Type } from "./type";

export class Payload {
  constructor(
    public methodName: String,
    public type: Type,
    public params: Expr.Path[],
  ) {}

  toRustString(): string {
    let foo = '';
    let bar = '';

    for (const param of this.params) {
      foo += param.toRustString();
      bar += `${param.path}: ${this.lastTmpVar()}`
    }
    console.log(foo);

    foo += `let _tmp5 = ${this.type.path}::${this.methodName} {;`
    foo += `};`;
    return foo;
  }
}

export class CreateMsg {
  constructor(
    public addr: Expr.Path,
    public methodName: String,
    public elements: Expr.Path[],
  ) {}

  toRustString(): String {
    return `
      CosmosMsg::Wasm(WasmMsg::Execute {
        contract_addr: ${this.addr.toRustString()}.to_string(),
        msg: to_binary(&${this.methodName}),
        funds: vec![]
      })`;
  }
}
