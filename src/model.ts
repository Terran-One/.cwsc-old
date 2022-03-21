import * as AST from './ast';
import { AST2IR, IR2Rust } from './codegen';
import * as IR from './ir';

export interface StructMember {
  name: string;
  type: string;
}

export function toStructMember(x: any): StructMember {
  return {
    name: x.name.text,
    type: x.type.toString(),
  };
}

export class StructModel {
  constructor(public name: string, public members: StructMember[]) {}

  public static fromAST(ast: AST.StructDefn): StructModel {
    let name = ast.name.text;
    let members: StructMember[] = ast.members.map(x => toStructMember(x));
    return new StructModel(name, members);
  }
}

export class ErrorModel extends StructModel {
  public static fromAST(ast: AST.ErrorDefn): ErrorModel {
    return super.fromAST(ast) as ErrorModel;
  }
}

export class EventModel extends StructModel {
  public static fromAST(ast: AST.EventDefn): EventModel {
    return super.fromAST(ast) as EventModel;
  }
}
export class FnModel {
  constructor(
    public name: string | undefined,
    public args: StructMember[],
    public returnType: string | undefined,
    public body: IR.IR[]
  ) {}

  public static fromAST(ast: AST.FnDefn): FnModel {
    let a2i = new AST2IR();
    return new FnModel(
      ast.name?.text,
      ast.args.map(x => toStructMember(x)),
      ast.returnType ? '0' : undefined,
      ast.body.map(x => a2i.translate(x))
    );
  }
}
export class InstantiateFnModel extends FnModel {
  constructor(
    public args: StructMember[],
    public returnType: string,
    public body: IR.IR[]
  ) {
    super('instantiate', args, returnType, body);
  }

  public static fromAST(ast: AST.InstantiateDefn): InstantiateFnModel {
    let a2i = new AST2IR();
    return new InstantiateFnModel(
      ast.args.map(x => toStructMember(x)),
      '0',
      ast.body.map(x => a2i.translate(x))
    );
  }
}

export class ExecFnModel extends FnModel {
  public static fromAST(ast: AST.ExecDefn): ExecFnModel {
    return super.fromAST(ast) as ExecFnModel;
  }
}

export class QueryFnModel extends FnModel {
  public static fromAST(ast: AST.QueryDefn): QueryFnModel {
    return super.fromAST(ast) as QueryFnModel;
  }
}

export class StateItemModel {
  constructor(public key: string, public valueType: string) {}

  public static fromAST(ast: AST.ItemDefn): StateItemModel {
    return new StateItemModel(ast.key.text, ast.type.toString());
  }
}
export class StateMapModel {
  constructor(
    public key: string,
    public mapKeys: string[],
    public valueType: string
  ) {}

  public static fromAST(ast: AST.MapDefn): StateMapModel {
    return new StateMapModel(
      ast.key.text,
      ast.mapKeys.map(x => x.type.toString()),
      ast.type.toString()
    );
  }
}

export class ContractModel {
  constructor(
    public name: string,
    public events: EventModel[],
    public errors: ErrorModel[],
    public typedefns: any,
    public state: (StateItemModel | StateMapModel)[],
    public instantiate: InstantiateFnModel,
    public exec: ExecFnModel[],
    public query: QueryFnModel[],
    public fns: FnModel[]
  ) {}

  public static fromAST(ast: AST.ContractDefn): ContractModel {
    let name = ast.name.text;

    let events = ast
      .descendantsOfType(AST.EventDefn)
      .map(x => EventModel.fromAST(x));

    let errors = ast
      .descendantsOfType(AST.ErrorDefn)
      .map(x => ErrorModel.fromAST(x));

    let state_items = ast
      .descendantsOfType(AST.ItemDefn)
      .map(x => StateItemModel.fromAST(x));

    let state_maps = ast
      .descendantsOfType(AST.MapDefn)
      .map(x => StateMapModel.fromAST(x));

    let state = [...state_items, ...state_maps];

    let instantiate = InstantiateFnModel.fromAST(
      ast.descendantsOfType(AST.InstantiateDefn)[0]
    );

    let exec = ast
      .descendantsOfType(AST.ExecDefn)
      .map(x => ExecFnModel.fromAST(x));

    let query = ast
      .descendantsOfType(AST.QueryDefn)
      .map(x => QueryFnModel.fromAST(x));

    let fns = ast.descendantsOfType(AST.FnDefn).map(x => FnModel.fromAST(x));

    return new ContractModel(
      name,
      events,
      errors,
      {},
      state,
      instantiate,
      exec,
      query,
      fns
    );
  }

  public toRust(): string {
    let modMsg = this.buildModMsg();
    let modState = this.buildModState();
    let modError = this.buildModError();
    let modContract = this.buildModContract();
    return [modMsg, modState, modError, modContract].join('\n\n');
  }

  protected buildModMsg(): string {
    let res = `pub mod msg {\n`;
    res += `use schemars::JsonSchema;\n`;
    res += `use serde::{Deserialize, Serialize};\n`;

    // build instantiate msg
    res += `#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\n`;
    res += `pub struct InstantiateMsg {\n`;
    this.instantiate.args.forEach((arg: any) => {
      res += `\t${arg.name}: ${arg.type.toString()},\n`;
    });
    res += `}\n\n`; /* instantiate msg */

    // build execute msg
    res += `\n#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\n`;
    res += `#[serde(rename_all = "snake_case")]\n`;
    res += `pub enum ExecuteMsg {\n`;
    for (let execFn of this.exec) {
      // turn snake-case to pascal case
      let name_pascal = execFn
        .name!.split('_')
        .map(s => s.charAt(0).toUpperCase() + s.slice(1))
        .join('');
      res += `\t${name_pascal} {\n`;
      execFn.args.forEach((arg: any) => {
        res += `\t\t${arg.name}: ${arg.type.toString()},\n`;
      });
      res += `\t},\n`; /* exec fn */
    }
    res += `}\n\n`; /* execute msg */

    // build query msg
    res += `\n#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\n`;
    res += `#[serde(rename_all = "snake_case")]\n`;
    res += `pub enum QueryMsg {\n`;
    for (let queryFn of this.query) {
      // turn snake-case to pascal case
      let name_pascal = queryFn
        .name!.split('_')
        .map(s => s.charAt(0).toUpperCase() + s.slice(1))
        .join('');
      res += `\t${name_pascal} {\n`;
      queryFn.args.forEach((arg: any) => {
        res += `\t\t${arg.name}: ${arg.type.toString()},\n`;
      });
      res += `\t},\n`; /* query fn */
    }
    res += `}\n\n`; /* query msg */
    res += `}\n`; /* mod msg */
    return res;
  }

  protected buildModState(): string {
    let res = `pub mod state {\n`;
    res += `use schemars::JsonSchema;\n`;
    res += `use serde::{Deserialize, Serialize};\n`;
    res += `use cosmwasm_std::*;\n`;
    res += `use cw_storage_plus::{Item, Map};\n`;

    for (let defn of this.state) {
      if (defn instanceof StateItemModel) {
        res += `pub const ${defn.key.toUpperCase()}: Item<${defn.valueType.toString()}> = Item::new("${
          defn.key
        }");\n`;
      } else if (defn instanceof StateMapModel) {
        res += `pub const ${defn.key.toUpperCase()}: Map<${defn.mapKeys[0].toString()}, ${defn.valueType.toString()}> = Map::new("${
          defn.key
        }");\n`;
      }
    }

    res += `}\n`; /* mod state */
    return res;
  }

  protected buildModError(): string {
    let res = `pub mod error {\n`;
    res += `use cosmwasm_std::StdError;\n`;
    res += `use thiserror::Error;\n\n`;
    res += `#[derive(Error, Debug)]\n`;
    res += `pub enum ContractError {\n`;
    res += `#[error("{0}")]\n`;
    res += `Std(#[from] StdError),\n\n`;

    for (let err of this.errors) {
      res += `#[error("${err.name}")]\n`;
      res += `${err.name} {\n`;

      err.members.forEach((m: any) => {
        res += `\t${m.name}: ${m.type.toString()},\n`;
      });
      res += `},\n`; /* error */
    }
    res += `}\n`; /* ContractError */
    res += `}\n`; /* mod error */
    return res;
  }

  protected buildModContract(): string {
    let res = `pub mod contract {\n
#[cfg(not(feature = "library"))]
use cosmwasm_std::entry_point;
use cosmwasm_std::{to_binary, Binary, Deps, DepsMut, Env, MessageInfo, Response, StdResult};

use crate::error::ContractError;
use crate::msg::{CountResponse, ExecuteMsg, InstantiateMsg, QueryMsg};
use crate::state::{State, STATE};`;
    res += `\n\n`;

    // build instantiate
    res += `#[cfg(not(feature = "library"), entry_point)]\n`;
    res += `pub fn instantiate(__deps: DepsMut, __env: Env, __info: MessageInfo, __msg: InstantiateMsg) -> Result<Response, ContractError> {\n`;

    let i2r = new IR2Rust();
    res += i2r.translate(this.instantiate.body);
    res += `\n}\n\n`; /* instantiate */

    res += '}\n'; /* mod contract */
    return res;
  }
}

export class StructDefn {
  constructor(public typeName: string, public members: StructMember[]) {}
}

export class ErrorDefn extends StructDefn {}
export class EventDefn extends StructDefn {}

// let ct = new ContractModel(
//   'CW20Base',
//   {
//     Transfer: {
//       args: [
//         { name: 'sender', type: 'Addr' },
//         { name: 'recipient', type: 'Addr' },
//         { name: 'amount', type: 'Uint128' },
//       ],
//     },
//     Burn: {
//       args: [
//         { name: 'sender', type: 'Addr' },
//         { name: 'amount', type: 'Uint128' },
//       ],
//     },
//   },
//   {
//     InvalidZeroAmount: {
//       description: 'Invalid zero amount',
//       args: [],
//     },
//     Unauthorized: {
//       description: 'Unauthorized',
//       args: [],
//     },
//   },
//   {},
//   {
//     token_info: {
//       type: 'item',
//       valueType: 'TokenInfo',
//     },
//     balances: {
//       type: 'map',
//       mapKeys: [{ name: 'owner', type: 'Addr' }],
//       valueType: 'Uint128',
//     },
//   },
//   {
//     args: [
//       { name: 'name', type: 'String' },
//       { name: 'symbol', type: 'String' },
//       { name: 'deicmals', type: 'u8' },
//       { name: 'initial_balances', type: 'Cw20Coin' },
//     ],
//     body: [],
//   },
//   {
//     transfer: {
//       args: [
//         { name: 'recipient', type: 'Addr' },
//         { name: 'amount', type: 'Uint128' },
//       ],
//     },
//   },
//   {
//     query: {
//       balances: {
//         args: [{ name: 'owner', type: 'Addr' }],
//       },
//     },
//   },
//   {}
// );

// console.log(ct.toRust());
