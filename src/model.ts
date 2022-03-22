import * as AST from './ast';
import { AST2IR, IR2Rust } from './codegen';
import * as IR from './ir';
import * as Rust from './rust';
import { snakeToPascal } from './util';

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
    let modMsg = this.buildModMsg(); // interface defns
    let modState = this.buildModState(); // state defns
    let modError = this.buildModError(); // error defns
    let modContract = this.buildModContract(); // logic
    return [modMsg, modState, modError, modContract].join('\n\n');
  }

  protected buildModMsg(): string {
    let module = new Rust.Module('msg');
    module.addItem(new Rust.UseStmt([], 'schemars::JsonSchema'));
    module.addItem(new Rust.UseStmt([], 'serde::{Serialize, Deserialize}'));

    // build instantiate msg
    let i = new Rust.Struct(
      [Rust.DERIVE_ANNOTATION, Rust.SERDE_RENAME_ANNOTATION],
      Rust.StructType.STRUCT,
      'InstantiateMsg'
    );

    this.instantiate.args.forEach((arg: any) => {
      let m = new Rust.StructMember([], arg.name, arg.type);
      i.addMember(m);
    });

    // build execute msg
    let e = new Rust.Enum(
      [Rust.DERIVE_ANNOTATION, Rust.SERDE_RENAME_ANNOTATION],
      'ExecuteMsg'
    );
    for (let execFn of this.exec) {
      // turn snake-case to pascal case
      let s = new Rust.Struct(
        [],
        Rust.StructType.STRUCT,
        snakeToPascal(execFn.name!)
      );

      execFn.args.forEach((arg: any) => {
        s.addMember(new Rust.StructMember([], arg.name, arg.type));
      });
      e.addVariant(s);
    }

    module.addItem(e);

    // build query msg
    let q = new Rust.Enum(
      [Rust.DERIVE_ANNOTATION, Rust.SERDE_RENAME_ANNOTATION],
      'QueryMsg'
    );
    for (let queryFn of this.query) {
      // turn snake-case to pascal case
      let s = new Rust.Struct(
        [],
        Rust.StructType.STRUCT,
        snakeToPascal(queryFn.name!)
      );

      queryFn.args.forEach((arg: any) => {
        s.addMember(new Rust.StructMember([], arg.name, arg.type));
      });
      q.addVariant(s);
    }

    module.addItem(q);
    return module.toString();
  }

  protected buildModState(): string {
    let cw_storage_plus_item = new Rust.RustType('cw_storage_plus::Item');
    let cw_storage_plus_map = new Rust.RustType('cw_storage_plus::Map');

    let module = new Rust.Module('state');
    module.addItem(new Rust.UseStmt([], 'schemars::JsonSchema'));
    module.addItem(new Rust.UseStmt([], 'serde::{Serialize, Deserialize}'));
    module.addItem(new Rust.UseStmt([], 'cosmwasm_std::*'));

    for (let defn of this.state) {
      if (defn instanceof StateItemModel) {
        let item_type = cw_storage_plus_item.withTypeParams([
          new Rust.RustType(defn.valueType),
        ]);

        module.addItem(
          new Rust.Const(
            defn.key.toUpperCase(),
            item_type,
            item_type.fnCall('new', [new Rust.StringLiteral(defn.key)])
          )
        );
      } else if (defn instanceof StateMapModel) {
        let map_type = cw_storage_plus_item.withTypeParams([
          new Rust.RustType(defn.mapKeys[0]),
          new Rust.RustType(defn.valueType),
        ]);

        module.addItem(
          new Rust.Const(
            defn.key.toUpperCase(),
            map_type,
            map_type.fnCall('new', [new Rust.StringLiteral(defn.key)])
          )
        );
      }
    }

    return module.toString();
  }

  protected buildModError(): string {
    let module = new Rust.Module('error');
    let DERIVE_ERROR_ANNOTATION = new Rust.Annotation(
      'derive(thiserror::Error, Debug)'
    );

    let error_enum = new Rust.Enum([DERIVE_ERROR_ANNOTATION], 'Error');
    let std = new Rust.Struct(
      [new Rust.Annotation('error("{0}")')],
      Rust.StructType.TUPLE,
      'Std',
      [
        new Rust.StructMember(
          [new Rust.Annotation('from')],
          null,
          new Rust.RustType('cosmwasm_std::StdError')
        ),
      ]
    );
    error_enum.addVariant(std);

    for (let err of this.errors) {
      let annotation = new Rust.Annotation(`error("${err.name}")`);
      let error_struct = new Rust.Struct(
        [annotation],
        Rust.StructType.STRUCT,
        err.name
      );

      err.members.forEach((m: any) => {
        let member = new Rust.StructMember([], m.name, m.type);
        error_struct.addMember(member);
      });
      error_enum.addVariant(error_struct);
    }
    module.addItem(error_enum);
    return module.toString();
  }

  protected buildModContract(): string {
    let module = new Rust.Module('contract');
    module.addItem(
      new Rust.UseStmt(
        [new Rust.Annotation(`cfg(not(feature = "library"))`)],
        'cosmwasm_std::entry_point'
      )
    );
    module.addItem(
      new Rust.UseStmt(
        [],
        'cosmwasm_std::{to_binary, Binary, Deps, DepsMut, Env, MessageInfo, Response, StdResult}'
      )
    );
    module.addItem(new Rust.UseStmt([], 'crate::error::ContractError'));
    module.addItem(
      new Rust.UseStmt([], 'crate::msg::{InstantiateMsg, ExecuteMsg, QueryMsg}')
    );
    module.addItem(new Rust.UseStmt([], 'crate::state::{State, STATE}'));

    let i2r = new IR2Rust();
    let instantiate = new Rust.Function(
      [new Rust.Annotation(`cfg(not(feature = "library"), entry_point)`)],
      'instantiate',
      [
        new Rust.FunctionArg([], '__deps', new Rust.RustType('DepsMut')),
        new Rust.FunctionArg([], '__env', new Rust.RustType('Env')),
        new Rust.FunctionArg([], '__info', new Rust.RustType('MessageInfo')),
        new Rust.FunctionArg([], '__data', new Rust.RustType('Binary')),
      ],
      new Rust.RustResult(
        new Rust.RustType('Response'),
        new Rust.RustType('ContractError')
      ),
      [i2r.translate(this.instantiate.body)]
    );

    module.addItem(instantiate);

    return module.toString();
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
