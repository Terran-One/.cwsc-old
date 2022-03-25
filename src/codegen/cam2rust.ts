import * as Rust from '../rust';
import * as CAM from '../cam';

import { snakeToPascal } from '../util/strings';
import { CW_STD, C_ERROR, C_MSG, C_STATE } from './helpers';

export class FnBodyCodegenCtx {
  protected items: Array<Rust.Rust> = [];
  constructor(public body: CAM.CAM[], public tmpVariableCount: number = 0) {}

  toRust(): Rust.CodeGroup {
    let res = new Rust.CodeGroup();
    for (const stmt of this.body) {
      res.add(this.generate(stmt));
    }
    return res;
  }

  generate(cam: CAM.CAM): Rust.Rust {
    let camType = cam.constructor.name;
    if (`generate${camType}` in this) {
      return (this as any)[`generate${camType}`](cam);
    } else {
      throw new Error(`Could not generate type ${camType}`);
    }
  }

  getTmpVar(): Rust.Expr.Path {
    return new Rust.Expr.Path(`__tmp${this.tmpVariableCount++}`);
  }

  lastTmpVar(): Rust.Expr.Path {
    return new Rust.Expr.Path(`__tmp${this.tmpVariableCount - 1}`);
  }

  letVar(mut: boolean, value?: Rust.Expr, type?: Rust.Type): Rust.CodeGroup {
    let res = new Rust.CodeGroup();
    let tmpVar = this.getTmpVar();
    res.add(new Rust.Stmt.Let(mut, tmpVar.toRustString(), type, value));
    return res;
  }

  generateStateItemAccess(stmt: CAM.StateItemAccess) {
    let { key } = stmt;
    let res = new Rust.CodeGroup();
    let deps = new Rust.Expr.Path('__deps');
    res.add(
      this.letVar(
        false,
        new Rust.Expr.FnCall(`crate::state::${key.toUpperCase()}.load`, [
          deps.dot('storage'),
        ]).q()
      )
    );
    return res;
  }

  generateLet(stmt: CAM.Let) {
    let res = new Rust.CodeGroup();
    return res;
  }

  generateForIn(stmt: CAM.ForIn) {
    let res = new Rust.CodeGroup();
    return res;
  }

  generateEmit(stmt: CAM.Emit) {
    let res = new Rust.CodeGroup();
    return res;
  }

  generateArithmeticOp(expr: CAM.ArithmeticOp) {
    let res = new Rust.CodeGroup();
    let { op, lhs, rhs } = expr;
    res.add(this.generate(lhs));
    let v_lhs = this.lastTmpVar();
    res.add(this.generate(rhs));
    let v_rhs = this.lastTmpVar();
    res.add(this.letVar(false, new Rust.Expr.Binop(op, v_lhs, v_rhs)));
    return res;
  }

  generateSpecialVariable(stmt: CAM.SpecialVariable) {
    let res = new Rust.CodeGroup();
    let { namespace, member } = stmt;

    if (namespace === 'msg') {
      switch (member) {
        case 'sender':
          res.add(
            this.letVar(
              false,
              new Rust.Expr.Path('__info').dot('sender').clone()
            )
          );
          return res;
      }
    }

    throw new Error(`Unknown special variable ${namespace}.${member}`);
  }

  generateTupleVal(t: CAM.TupleVal) {
    let res = new Rust.CodeGroup();
    let members = t.members.map(m => {
      res.add(this.generate(m));
      return this.lastTmpVar();
    });
    res.add(this.letVar(false, new Rust.Val.Tuple(members)));
    return res;
  }

  generateLoadArg(a: CAM.LoadArg) {
    let { name, option, type } = a.arg;
    let arg = new Rust.Expr.Path(`${name}`).clone();
    return this.letVar(false, arg);
  }

  generateIntegerVal(i: CAM.IntegerVal) {
    let res = new Rust.CodeGroup();
    // TODO: change integer type to generic
    res.add(this.letVar(false, new Rust.Val.IntLiteral(Rust.U64, i.value)));
    return res;
  }

  generateStructVal(s: CAM.StructVal) {
    let res = new Rust.CodeGroup();
    let type = CAM2Rust.type(s.type);
    let members = s.members.map(m => {
      let { name, value } = m;
      res.add(this.generate(value));
      let v_value = this.lastTmpVar();
      let smember = new Rust.Val.StructMember(name, v_value);
      return smember;
    });
    res.add(this.letVar(false, new Rust.Val.Struct(type, members)));
    return res;
  }

  stateItemSet(key: string, value: Rust.Expr): Rust.CodeGroup {
    let deps = new Rust.Expr.Path('__deps');
    return this.letVar(
      false,
      new Rust.Expr.FnCall(`crate::state::${key.toUpperCase()}.save`, [
        deps.dot('storage'),
        value,
      ]).q()
    );
  }

  generateReturn(stmt: CAM.Return) {
    let res = new Rust.CodeGroup();
    let { expr } = stmt;
    res.add(this.generate(expr));
    let v_value = this.lastTmpVar();
    res.add(new Rust.Stmt.Return(v_value.ok()));
    return res;
  }

  generateAssign(stmt: CAM.Assign) {
    let res = new Rust.CodeGroup();
    let { lhs, rhs } = stmt;

    res.add(this.generate(rhs));
    let v_rhs = this.lastTmpVar();

    if ('stateItem' in lhs) {
      let { key } = (lhs as any)['stateItem'];
      res.add(this.stateItemSet(key, v_rhs.ref()));
    }
    return res;
  }
}

export namespace CAM2Rust {
  export function contract(c: CAM.Contract): Rust.CodeGroup {
    let code = new Rust.CodeGroup();
    code.add(buildModTypes(c));
    code.add(buildModMsg(c));
    code.add(buildModState(c));
    code.add(buildModError(c));
    code.add(buildModContract(c));
    return code;
  }

  export function type(t: CAM.Type): Rust.Type {
    if (t instanceof CAM.Type.RustBuiltin) {
      return t.ty;
    }

    if (t instanceof CAM.Type.Integer) {
      return new Rust.Type('cosmwasm_std::Uint128');
    }

    if (t instanceof CAM.Type.Decimal) {
      return new Rust.Type('cosmwasm_std::Decimal');
    }

    if (t instanceof CAM.Type.String) {
      return new Rust.Type.String();
    }

    if (t instanceof CAM.Type.Boolean) {
      return new Rust.Type.Bool();
    }

    if (t instanceof CAM.Type.None) {
      return new Rust.Type('None');
    }

    if (t instanceof CAM.Type.Vector) {
      return new Rust.Type.Vec(type(t.elementType));
    }

    if (t instanceof CAM.Type.Option) {
      return new Rust.Type.Option(type(t.inner));
    }

    if (t instanceof CAM.Type.Struct) {
      return new Rust.Type(`crate::types::${t.name}`);
    }

    if (t instanceof CAM.Type.TypeAlias) {
      return new Rust.Type(`crate::types::${t.name}`);
    }

    throw new Error(
      `CAM type ${t.constructor.name} could not be turned into Rust type`
    );
  }

  export function buildModMsg(c: CAM.Contract): Rust.Defn.Module {
    let module = new Rust.Defn.Module('msg');
    module.addItem(new Rust.Defn.Use([], 'schemars::JsonSchema'));
    module.addItem(new Rust.Defn.Use([], 'serde::{Serialize, Deserialize}'));

    // build instantiate msg
    let i = new Rust.Defn.Struct(
      [Rust.DERIVE_ANNOTATION],
      Rust.STRUCT,
      'InstantiateMsg'
    );

    c.instantiate.args.forEach(arg => {
      let argType = type(arg.type);
      if (arg.option) {
        argType = new Rust.Type.Option(argType);
      }
      let m = new Rust.Defn.StructMember([], arg.name, argType);
      i.addMember(m);
    });

    module.addItem(i);

    // build execute msg
    let e = new Rust.Defn.Enum(
      [Rust.DERIVE_ANNOTATION, Rust.SERDE_RENAME_ANNOTATION],
      'ExecuteMsg'
    );
    for (let execFn of c.exec) {
      // turn snake-case to pascal case
      let s = new Rust.Defn.Struct([], Rust.STRUCT, snakeToPascal(execFn.name));

      execFn.args.forEach(arg => {
        let argType = type(arg.type);
        if (arg.option) {
          argType = new Rust.Type.Option(argType);
        }
        s.addMember(new Rust.Defn.StructMember([], arg.name, argType));
      });
      e.addVariant(s);
    }

    module.addItem(e);

    // build query msg
    let q = new Rust.Defn.Enum(
      [Rust.DERIVE_ANNOTATION, Rust.SERDE_RENAME_ANNOTATION],
      'QueryMsg'
    );
    for (let queryFn of c.query) {
      // turn snake-case to pascal case
      let s = new Rust.Defn.Struct(
        [],
        Rust.STRUCT,
        snakeToPascal(queryFn.name)
      );

      queryFn.args.forEach(arg => {
        let argType = type(arg.type);
        if (arg.option) {
          argType = new Rust.Type.Option(argType);
        }
        s.addMember(new Rust.Defn.StructMember([], arg.name, argType));
      });
      q.addVariant(s);
    }

    module.addItem(q);
    return module;
  }

  export function buildModTypes(c: CAM.Contract): Rust.Defn.Module {
    let module = new Rust.Defn.Module('types');
    module.addItem(new Rust.Defn.Use([], 'schemars::JsonSchema'));
    module.addItem(new Rust.Defn.Use([], 'serde::{Serialize, Deserialize}'));

    c.types.forEach(t => {
      if (t instanceof CAM.Type.Struct) {
        let struct = new Rust.Defn.Struct(
          [Rust.DERIVE_ANNOTATION],
          Rust.STRUCT,
          t.name
        );
        t.members.forEach(m => {
          let member_type = type(m.type);
          if (m.option) {
            member_type = member_type.option();
          }
          struct.addMember(new Rust.Defn.StructMember([], m.name, member_type));
        });
        module.addItem(struct);
      }

      if (t instanceof CAM.Type.TypeAlias) {
        let alias = new Rust.Defn.TypeAlias(t.name, type(t.type));
        module.addItem(alias);
      }
    });

    return module;
  }

  export function buildModState(c: CAM.Contract): Rust.Defn.Module {
    let cw_storage_plus_item = new Rust.Type('cw_storage_plus::Item');
    let cw_storage_plus_map = new Rust.Type('cw_storage_plus::Map');

    let module = new Rust.Defn.Module('state');

    for (let defn of c.state) {
      if (defn instanceof CAM.StateItem) {
        let item_type = cw_storage_plus_item.withTypeParams([type(defn.type)]);

        module.addItem(
          new Rust.Defn.Const(
            defn.key.toUpperCase(),
            item_type,
            item_type.fnCall('new', [new Rust.Val.StrLiteral(defn.key)])
          )
        );
      } else if (defn instanceof CAM.StateMap) {
        let map_type = cw_storage_plus_map.withTypeParams([
          type(defn.mapKeys[0].type),
          type(defn.type),
        ]);

        module.addItem(
          new Rust.Defn.Const(
            defn.key.toUpperCase(),
            map_type,
            map_type.fnCall('new', [new Rust.Val.StrLiteral(defn.key)])
          )
        );
      }
    }

    return module;
  }

  export function buildModError(c: CAM.Contract): Rust.Defn.Module {
    let module = new Rust.Defn.Module('error');
    let DERIVE_ERROR_ANNOTATION = new Rust.Annotation(
      'derive(thiserror::Error, Debug)'
    );

    let error_enum = new Rust.Defn.Enum(
      [DERIVE_ERROR_ANNOTATION],
      'ContractError'
    );
    let std = new Rust.Defn.Struct(
      [new Rust.Annotation('error("{0}")')],
      Rust.TUPLE,
      'Std',
      [
        new Rust.Defn.StructMember(
          [new Rust.Annotation('from')],
          null,
          new Rust.Type('cosmwasm_std::StdError')
        ),
      ]
    );
    error_enum.addVariant(std);

    for (let err of c.errors) {
      let annotation = new Rust.Annotation(`error("${err.name}")`);
      let error_struct = new Rust.Defn.Struct(
        [annotation],
        Rust.STRUCT,
        err.name
      );

      err.members.forEach(m => {
        let member_type = type(m.type);
        if (m.option) {
          member_type = member_type.option();
        }
        let member = new Rust.Defn.StructMember([], m.name, member_type);
        error_struct.addMember(member);
      });
      error_enum.addVariant(error_struct);
    }
    module.addItem(error_enum);
    return module;
  }

  export function buildModContract(c: CAM.Contract): Rust.Defn.Module {
    let module = new Rust.Defn.Module('contract');
    module.addItem(
      new Rust.Defn.Use(
        [new Rust.Annotation(`cfg(not(feature = "library"))`)],
        'cosmwasm_std::entry_point'
      )
    );
    module.addItem(
      new Rust.Defn.Use(
        [],
        'cosmwasm_std::{to_binary, Binary, Deps, DepsMut, Env, MessageInfo, Response, StdResult}'
      )
    );
    module.addItem(new Rust.Defn.Use([], 'crate::error::ContractError'));

    // build instantiate
    let instantiate = new Rust.Defn.Function(
      [new Rust.Annotation(`cfg_attr(not(feature = "library"), entry_point)`)],
      'instantiate',
      [
        new Rust.FunctionArg([], '__deps', CW_STD.join('DepsMut').toType()),
        new Rust.FunctionArg([], '__env', CW_STD.join('Env').toType()),
        new Rust.FunctionArg([], '__info', CW_STD.join('MessageInfo').toType()),
        new Rust.FunctionArg(
          [],
          '__msg',
          C_MSG.join('InstantiateMsg').toType()
        ),
      ],
      new Rust.Type.Result(
        CW_STD.join('Response').toType(),
        C_ERROR.join('ContractError').toType()
      )
    );

    // redirect to our instantiate implementation
    instantiate.addBody(
      new Rust.Expr.FnCall('instantiate_impl', [
        new Rust.Expr.Path('__deps'),
        new Rust.Expr.Path('__env'),
        new Rust.Expr.Path('__info'),
        ...c.instantiate.args.map(x => new Rust.Expr.Path(`__msg`).dot(x.name)),
      ])
    );

    module.addItem(instantiate);

    // build instantiate implementation
    let i_impl = new Rust.Defn.Function(
      [],
      `instantiate_impl`,
      [
        new Rust.FunctionArg([], '__deps', CW_STD.join('DepsMut').toType()),
        new Rust.FunctionArg([], '__env', CW_STD.join('Env').toType()),
        new Rust.FunctionArg([], '__info', CW_STD.join('MessageInfo').toType()),
        ...c.instantiate.args.map(
          a =>
            new Rust.FunctionArg(
              [],
              a.name,
              a.option ? type(a.type).option() : type(a.type)
            )
        ),
      ],
      new Rust.Type.Result(
        CW_STD.join('Response').toType(),
        C_ERROR.join('ContractError').toType()
      )
    );

    let body = new FnBodyCodegenCtx(c.instantiate.body);
    i_impl.addBody(body.toRust());
    i_impl.addBody(
      new Rust.Expr.Path('Ok(::cosmwasm_std::Response::default())')
    );
    module.addItem(i_impl);

    // build execute (demux)
    let execute = new Rust.Defn.Function(
      [new Rust.Annotation(`cfg_attr(not(feature = "library"), entry_point)`)],
      'execute',
      [
        new Rust.FunctionArg([], '__deps', CW_STD.join('DepsMut').toType()),
        new Rust.FunctionArg([], '__env', CW_STD.join('Env').toType()),
        new Rust.FunctionArg([], '__info', CW_STD.join('MessageInfo').toType()),
        new Rust.FunctionArg([], '__msg', C_MSG.join('ExecuteMsg').toType()),
      ],
      new Rust.Type.Result(
        CW_STD.join('Response').toType(),
        C_ERROR.join('ContractError').toType()
      )
    );

    let match = new Rust.Expr.Match(new Rust.Expr.Path('__msg'));
    c.exec.forEach(x => {
      let argList = x.args.map(a => a.name);
      match.addPattern(
        `crate::msg::ExecuteMsg::${snakeToPascal(x.name)} {${argList.join(
          ','
        )}}`,
        new Rust.Expr.FnCall(`exec_${x.name}`, [
          new Rust.Expr.Path('__deps'),
          new Rust.Expr.Path('__env'),
          new Rust.Expr.Path('__info'),
          ...argList.map(x => new Rust.Expr.Path(x)),
        ])
      );
    });
    execute.addBody(match);
    module.addItem(execute);

    c.exec.forEach(x => {
      let fn = new Rust.Defn.Function(
        [],
        `exec_${x.name}`,
        [
          new Rust.FunctionArg([], '__deps', CW_STD.join('DepsMut').toType()),
          new Rust.FunctionArg([], '__env', CW_STD.join('Env').toType()),
          new Rust.FunctionArg(
            [],
            '__info',
            CW_STD.join('MessageInfo').toType()
          ),
          ...x.args.map(
            a =>
              new Rust.FunctionArg(
                [],
                a.name,
                a.option ? type(a.type).option() : type(a.type)
              )
          ),
        ],
        new Rust.Type.Result(
          CW_STD.join('Response').toType(),
          C_ERROR.join('ContractError').toType()
        )
      );

      let body = new FnBodyCodegenCtx(x.body);
      fn.addBody(body.toRust());
      fn.addBody(new Rust.Expr.Path('Ok(::cosmwasm_std::Response::default())'));

      module.addItem(fn);
    });

    let query = new Rust.Defn.Function(
      [new Rust.Annotation(`cfg_attr(not(feature = "library"), entry_point)`)],
      'query',
      [
        new Rust.FunctionArg([], '__deps', CW_STD.join('Deps').toType()),
        new Rust.FunctionArg([], '__env', CW_STD.join('Env').toType()),
        new Rust.FunctionArg([], '__msg', C_MSG.join('QueryMsg').toType()),
      ],
      CW_STD.join('StdResult')
        .toType()
        .withTypeParams([CW_STD.join('Binary').toType()])
    );

    match = new Rust.Expr.Match(new Rust.Expr.Path('__msg'));
    c.query.forEach(x => {
      let argList = x.args.map(a => a.name);
      match.addPattern(
        `crate::msg::QueryMsg::${snakeToPascal(x.name)} {${argList.join(',')}}`,
        new Rust.Expr.FnCall(CW_STD.join('to_binary').toRustString(), [
          new Rust.Expr.FnCall(`query_${x.name}`, [
            new Rust.Expr.Path('__deps'),
            new Rust.Expr.Path('__env'),
            ...argList.map(x => new Rust.Expr.Path(x)),
          ])
            .q()
            .ref(),
        ])
      );
    });
    query.addBody(match);
    module.addItem(query);

    c.query.forEach(q => {
      let fn = new Rust.Defn.Function(
        [],
        `query_${q.name}`,
        [
          new Rust.FunctionArg([], '__deps', CW_STD.join('Deps').toType()),
          new Rust.FunctionArg([], '__env', CW_STD.join('Env').toType()),
          ...q.args.map(
            a =>
              new Rust.FunctionArg(
                [],
                a.name,
                a.option ? type(a.type).option() : type(a.type)
              )
          ),
        ],
        CW_STD.join('StdResult')
          .toType()
          .withTypeParams([type(q.returnType)])
      );

      let body = new FnBodyCodegenCtx(q.body);
      fn.addBody(body.toRust());

      module.addItem(fn);
    });

    return module;
  }
}
