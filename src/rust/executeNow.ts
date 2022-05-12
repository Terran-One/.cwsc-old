import { Expr } from "rust";
import { Type } from "./type";

export class Params {
  constructor(
    public methodName: String,
    public type: Type,
    public params: Expr.Path[],
  ) {}
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
