import * as AST from './ast';

export interface StructMember {
  name: string;
  type: string;
}
export class StructModel {
  constructor(public name: string, public members: StructMember[]) {}

  public static fromAST(ast: AST.StructDefn): StructModel {
    let name = ast.name.text;
    let members: StructMember[] = ast.members.map(
      (x: AST.StructMember): StructMember => ({
        name: x.name.text,
        type: 'x',
      })
    );
    return new ErrorModel(name, members);
  }
}

export class ErrorModel extends StructModel {}
export class EventModel extends StructModel {}
export class ContractModel {
  constructor(
    public name: string,
    public events: any,
    public errors: any,
    public typedefns: any,
    public state: any,
    public instantiate: any,
    public exec: any,
    public query: any,
    public fns: any
  ) {}

  public static fromAST(ast: AST.ContractDefn): ContractModel {
    let name = ast.name.text;

    let events = {} as any;
    ast.descendantsOfType(AST.EventDefn).forEach(x => {
      events[x.name.text] = {
        args: x.members.map((m: any): any => {
          return {
            name: m.name.text,
            type: m.type.toString(),
          };
        }),
      };
    });

    let errors = {} as any;
    ast.descendantsOfType(AST.ErrorDefn).forEach(x => {
      errors[x.name.text] = {
        args: x.members.map((m: any): any => {
          return {
            name: m.name.text,
            type: m.type.toString(),
          };
        }),
      };
    });

    let instantiate = ast.descendantsOfType(AST.InstantiateDefn)[0];

    let exec = {} as any;
    ast.descendantsOfType(AST.ExecDefn).forEach(x => {
      exec[x.name!.text] = x;
    });

    let query = {} as any;
    ast.descendantsOfType(AST.QueryDefn).forEach(x => {
      query[x.name!.text] = x;
    });

    let fns = {};

    return new ContractModel(
      name,
      events,
      errors,
      {},
      {}, // state
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
    this.instantiate.args.elements.forEach((arg: any) => {
      res += `\t${arg.name.text}: ${arg.type.text},\n`;
    });
    res += `}\n\n`; /* instantiate msg */

    // build execute msg
    res += `\n#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\n`;
    res += `#[serde(rename_all = "snake_case")]\n`;
    res += `pub enum ExecuteMsg {\n`;
    for (let execFn in this.exec) {
      // turn snake-case to pascal case
      let execFn_pascal = execFn
        .split('_')
        .map(s => s.charAt(0).toUpperCase() + s.slice(1))
        .join('');
      res += `\t${execFn_pascal} {\n`;
      this.exec[execFn].args.elements.forEach((arg: any) => {
        res += `\t\t${arg.name.text}: ${arg.type.text},\n`;
      });
      res += `\t},\n`; /* exec fn */
    }
    res += `}\n\n`; /* execute msg */

    // build query msg
    res += `\n#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\n`;
    res += `#[serde(rename_all = "snake_case")]\n`;
    res += `pub enum QueryMsg {\n`;
    for (let queryFn in this.query) {
      // turn snake-case to pascal case
      let queryFn_pascal = queryFn
        .split('_')
        .map(s => s.charAt(0).toUpperCase() + s.slice(1))
        .join('');
      res += `\t${queryFn_pascal} {\n`;
      this.query[queryFn].args.elements.forEach((arg: any) => {
        res += `\t\t${arg.name.text}: ${arg.type.text},\n`;
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

    for (let key in this.state) {
      let defn = this.state[key];

      if (defn.type === 'item') {
        res += `pub const ${key.toUpperCase()}: Item<${
          defn.type
        }> = Item::new("${key}");\n`;
      } else if (defn.type === 'map') {
        res += `pub const ${key.toUpperCase()}: Map<${defn.key}, ${
          defn.valueType
        }> = Map::new("${key}");\n`;
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

    for (let key in this.errors) {
      let defn = this.errors[key];
      res += `#[error("${key}")]\n`;
      res += `${key} {\n`;

      defn.args.forEach((arg: any) => {
        res += `\t${arg.name}: ${arg.type},\n`;
      });
      res += `},\n`; /* error */
    }
    res += `}\n`; /* ContractError */
    res += `}\n`; /* mod error */
    return res;
  }

  protected buildModContract(): string {
    let res = `pub mod contract {\n`;
    res += '}\n';
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
