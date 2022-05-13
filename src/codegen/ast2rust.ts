import { AST2Int } from '../intermediate/ast2int';
import * as AST from '../ast/nodes';
import * as Rust from '../rust';
import { CodeGroup, Defn, Expr, Type, Val } from '../rust';

import { CWScriptEnv } from '../symbol-table/env';
import { Subspace } from '../symbol-table/scope';
import {
  CW_STD,
  C_TYPES,
  C_CONTRACT,
  C_ERROR,
  C_MSG,
  C_EVENT,
  C_STATE,
} from './helpers';
import {
  buildModTypes,
  buildModMsg,
  buildModState,
  buildModError,
  buildModContract,
} from './module-builders';
import { ContractDefn, ExecDecl, ExecDefn, ParamzdTypeExpr, TypePath } from '../ast/nodes';

export class UnresolvedType {
  constructor(public ref: AST.TypeExpr, public postResolve: (x: any) => any) {}
}
export class AST2Rust {
  private tmpVarCount: number = 0;
  constructor(public env: CWScriptEnv, public inter: AST2Int) {}

  getTmpVar(): Rust.Expr.Path {
    return new Rust.Expr.Path(`___tmp${this.tmpVarCount++}`);
  }

  lastTmpVar(): Rust.Expr.Path {
    return new Rust.Expr.Path(`___tmp${this.tmpVarCount - 1}`);
  }

  letVar(mut: boolean, value?: Rust.Expr, type?: Rust.Type): Rust.CodeGroup {
    let res = new Rust.CodeGroup();
    let tmpVar = this.getTmpVar();
    res.add(new Rust.Stmt.Let(true, tmpVar.toRustString(), type, value));
    return res;
  }

  resolveType(ty: AST.TypeExpr): Rust.Type {
    if (ty instanceof AST.TypePath || ty instanceof AST.ParamzdTypeExpr) {
      let x = this.env.scope.resolve(
        [Subspace.TYPE, Subspace.ERROR, Subspace.EVENT],
        ty.toString()
      );

      if (x === undefined) {
        // TODO: this only works if the parametrized type is interface (which is the only one implemented)
        // once actual parameterized types exist, this needs to change
        x = this.env.scope.resolve(
          [Subspace.TYPE, Subspace.ERROR, Subspace.EVENT],
          (ty as AST.ParamzdTypeExpr).type.toString()
        );
      }

      if (x === undefined) {
        throw new Error(`type ${ty} could not be resolved`);
      }

      if (x instanceof UnresolvedType) {
        let resolved = this.resolveType(x.ref);
        if (resolved === undefined) {
          throw new Error(`type ${ty} could not be resolved`);
        }
        x.postResolve(resolved);
        return resolved;
      }

      return x as Rust.Type;
    }

    if (ty instanceof AST.ShortVecTypeExpr) {
      return new Rust.Type.Vec(this.resolveType(ty.type));
    }

    if (ty instanceof AST.ShortOptionTypeExpr) {
      return new Rust.Type.Option(this.resolveType(ty.type));
    }

    if (
      ty instanceof AST.StructDefn ||
      ty instanceof AST.EnumDefn ||
      ty instanceof AST.TypeAliasDefn
    ) {
      return C_TYPES.join(ty.name.text).toType();
    }


    throw new Error(`type ${ty.constructor.name} could not be resolved`);
  }

  // translateStructDefn(s: AST.StructDefn): CAM.Type.Struct {
  //   let name = s.name.text;
  //   let members = s.members.map((m) => ({
  //     name: m.name.text,
  //     option: m.option,
  //     type: this.resolveType(m.type),
  //   }));

  //   return new CAM.Type.Struct(name, members);
  // }

  // translateEnumDefn(e: AST.EnumDefn) {
  //   // TODO: process properly
  //   let name = e.name.text;
  //   let variants = e.variants.map((v) => ({
  //     name: v.name.text,
  //   }));

  //   return {
  //     enum: {
  //       name,
  //       variants,
  //     },
  //   };
  // }

  // translateTypeAliasDefn(t: AST.TypeAliasDefn): CAM.Type.TypeAlias {
  //   let name = t.name.text;
  //   let type = this.resolveType(t.type);

  //   return new CAM.Type.TypeAlias(name, type);
  // }

  translateArithmeticOpExpr(expr: AST.ArithmeticOpExpr): Rust.CodeGroup {
    let res = new Rust.CodeGroup();
    let { op, lhs, rhs } = expr;
    res.add(this.translate(lhs));
    let v_lhs = this.lastTmpVar();
    res.add(this.translate(rhs));
    let v_rhs = this.lastTmpVar();
    res.add(this.letVar(false, new Rust.Expr.Binop(op, v_lhs, v_rhs)));
    return res;
  }

  // translateMapDefn(map: AST.MapDefn): CAM.StateMap {
  //   let key = map.key.text;
  //   let mapKeys = map.mapKeys.map((x) => ({
  //     name: x.name?.text,
  //     type: this.resolveType(x.type),
  //   }));
  //   let type = this.resolveType(map.type);

  //   let res = new CAM.StateMap(key, mapKeys, type);

  //   this.env.scope.define(Subspace.STATE, key, res);
  //   return res;
  // }

  // translateForInStmt(stmt: AST.ForInStmt): CAM.ForIn {
  //   const forScope = this.env.enterScope('for-in');
  //   let bindings = this.translate(stmt.bindings);
  //   let iterable = this.translate(stmt.iterable);

  //   if ('ident' in bindings) {
  //     forScope.define(Subspace.LOCAL, (bindings as any).ident, bindings);
  //   }

  //   if ('structUnpack' in bindings) {
  //     (bindings as any)['structUnpack'].forEach((x: string) => {
  //       let memberType = (iterable as any).type.elementType.members.find(
  //         (m: any) => m.name === x
  //       )?.type;

  //       forScope.define(Subspace.LOCAL, x, memberType);
  //     });
  //   }

  //   let body = stmt.body.map((x) => this.translate(x));
  //   this.env.exitScope();

  //   return new CAM.ForIn(bindings, iterable, body);
  // }

  translateStructUnpackLHS(lhs: AST.StructUnpackLHS) {
    let names = lhs.names.map((x) => x.text);
    return {
      structUnpack: names,
    };
  }

  translateInstantiateDefn(fn: AST.InstantiateDefn): Rust.Defn.Function {
    const fnScope = this.env.enterScope('instantiate');
    let instantiate = new Rust.Defn.Function(
      [],
      'instantiate_impl',
      [
        new Rust.FunctionArg([], '__deps', CW_STD.join('DepsMut').toType()),
        new Rust.FunctionArg([], '__env', CW_STD.join('Env').toType()),
        new Rust.FunctionArg([], '__info', CW_STD.join('MessageInfo').toType()),
        ...fn.args.map(
          (a) =>
            new Rust.FunctionArg(
              [],
              a.name.text,
              a.option
                ? this.resolveType(a.type).option()
                : this.resolveType(a.type)
            )
        ),
      ],
      new Rust.Type.Result(
        CW_STD.join('Response').toType(),
        C_ERROR.join('ContractError').toType()
      )
    );

    fn.args.elements.forEach((a) => {
      let { name } = a;
      let arg = new Rust.Expr.Path(`${name.text}`);
      fnScope.define(Subspace.LOCAL, name.text, arg);
    });

    // add body elements
    instantiate.addBody(
      new Rust.Stmt.Let(
        true,
        '__events',
        new Rust.Type.Vec(new Rust.Type.String()),
        new Rust.Val.Vec([])
      )
    );
    fn.body.elements.forEach((stmt) => {
      instantiate.addBody(this.translate(stmt));
    });
    instantiate.addBody(
      new Rust.Stmt.Return(
        new Rust.Expr.FnCall('::std::result::Result::Ok', [
          CW_STD.join('Response').toType().fnCall('new', []),
        ])
      )
    );

    this.env.exitScope();

    return instantiate;
  }

  translateExecDefn(fn: AST.ExecDefn): Rust.Defn.Function {
    const fnScope = this.env.enterScope(`exec_${fn.name!.text}`);
    let exec = new Rust.Defn.Function(
      [],
      `exec_${fn.name!.text}`,
      [
        new Rust.FunctionArg([], '__deps', CW_STD.join('DepsMut').toType()),
        new Rust.FunctionArg([], '__env', CW_STD.join('Env').toType()),
        new Rust.FunctionArg([], '__info', CW_STD.join('MessageInfo').toType()),
        ...fn.args.map(
          (a) =>
            new Rust.FunctionArg(
              [],
              a.name.text,
              a.option
                ? this.resolveType(a.type).option()
                : this.resolveType(a.type)
            )
        ),
      ],
      new Rust.Type.Result(
        CW_STD.join('Response').toType(),
        C_ERROR.join('ContractError').toType()
      )
    );

    fn.args.elements.forEach((a) => {
      let { name } = a;
      let arg = new Rust.Expr.Path(name.text);
      fnScope.define(Subspace.LOCAL, name.text, arg);
    });

    // add body elements
    exec.addBody(
      new Rust.Stmt.Let(
        true,
        '__events',
        new Rust.Type.Vec(new Rust.Type.String()),
        new Rust.Val.Vec([])
      )
    );
    fn.body.elements.forEach((stmt) => {
      exec.addBody(this.translate(stmt));
    });
    return exec;
  }

  translateQueryDefn(fn: AST.QueryDefn): Rust.Defn.Function {
    const fnScope = this.env.enterScope(`query_${fn.name!.text}`);
    let query = new Rust.Defn.Function(
      [],
      `query_${fn.name!.text}`,
      [
        new Rust.FunctionArg([], '__deps', CW_STD.join('Deps').toType()),
        new Rust.FunctionArg([], '__env', CW_STD.join('Env').toType()),
        ...fn.args.map(
          (a) =>
            new Rust.FunctionArg(
              [],
              a.name.text,
              a.option
                ? this.resolveType(a.type).option()
                : this.resolveType(a.type)
            )
        ),
      ],
      CW_STD.join('StdResult')
        .toType()
        .withTypeParams([this.resolveType(fn.returnType!)])
    );

    fn.args.elements.forEach((a) => {
      let { name } = a;
      let arg = new Rust.Expr.Path(`${name.text}`);
      fnScope.define(Subspace.LOCAL, name.text, arg);
    });

    // add body elements
    fn.body.elements.forEach((stmt) => {
      query.addBody(this.translate(stmt));
    });

    this.env.exitScope();

    return query;
  }

  stateItemSet(key: string, value: Rust.Expr): Rust.CodeGroup {
    let res = new Rust.CodeGroup(`state-item-set ${key}`);
    let deps = new Rust.Expr.Path('__deps');
    res.add(
      this.letVar(
        false,
        new Rust.Expr.FnCall(`crate::state::${key.toUpperCase()}.save`, [
          deps.dot('storage'),
          value,
        ]).q()
      )
    );
    return res;
  }

  translateAssignStmt(stmt: AST.AssignStmt): Rust.CodeGroup {
    let res = new Rust.CodeGroup(stmt.ctx.text);
    let { lhs, rhs } = stmt;

    res.add(this.translate(rhs));
    let v_rhs = this.lastTmpVar();

    if (lhs instanceof AST.IdentAssignLHS) {
      this.env.scope.define(Subspace.LOCAL, lhs.ident.text, v_rhs);
    } else if (lhs instanceof AST.StateItemAssignLHS) {
      res.add(this.stateItemSet(lhs.key.text, v_rhs.ref()));
    } else if (lhs instanceof AST.MemberAssignLHS) {
      res.add(this.translate(lhs.obj));
      let v_lhs = this.lastTmpVar();
      // redefine if the lhs is an identity
      if (lhs.obj instanceof AST.Ident) {
        this.env.scope.define(Subspace.LOCAL, lhs.obj.text, v_lhs);
      }
      res.add(new Rust.Stmt.Assign(v_lhs.dot(lhs.member.text), v_rhs));
    }
    return res;
  }

  translateLetStmt(stmt: AST.LetStmt): Rust.CodeGroup {
    let res = new Rust.CodeGroup(stmt.ctx.text);
    let rhs = res.add(this.translate(stmt.rhs));
    let v_rhs = this.lastTmpVar();

    if (stmt.lhs instanceof AST.IdentLHS) {
      this.env.scope.define(Subspace.LOCAL, stmt.lhs.name.text, v_rhs);
    }

    return res;
  }

  translateIntegerVal(val: AST.IntegerVal): Rust.CodeGroup {
    let res = new Rust.CodeGroup(val.ctx.text);
    // TODO: change integer type to generic
    res.add(this.letVar(false, new Rust.Val.IntLiteral(Rust.U64, val.value)));
    return res;
  }

  translateStringVal(val: AST.StringVal): Rust.CodeGroup {
    let res = new Rust.CodeGroup(val.ctx.text);
    // TODO: change integer type to generic
    res.add(this.letVar(false, new Rust.Val.StrLiteral(val.value)));
    return res;
  }

  translateVecVal(val: AST.VecVal): Rust.CodeGroup {
    let res = new Rust.CodeGroup(val.ctx.text);
    let elements = val.elements.map((m) => {
      res.add(this.translate(m));
      return this.lastTmpVar();
    });

    res.add(this.letVar(false, new Rust.Val.Vec(elements)));
    return res;
  }

  translateStateItemAssignLHS(lhs: AST.StateItemAssignLHS) {
    return {
      stateItem: {
        key: lhs.key.text,
      },
    };
  }

  translateStateItemAccessExpr(x: AST.StateItemAccessExpr): Rust.CodeGroup {
    let { key } = x;
    let res = new Rust.CodeGroup(x.ctx.text);
    let deps = new Rust.Expr.Path('__deps');
    res.add(
      this.letVar(
        false,
        new Rust.Expr.FnCall(`crate::state::${key.text.toUpperCase()}.load`, [
          deps.dot('storage'),
        ]).q()
      )
    );
    return res;
  }

  translateStateMapAccessExpr(x: AST.StateMapAccessExpr): Rust.CodeGroup {
    let { key, mapKeys } = x;
    let res = new Rust.CodeGroup(x.ctx.text);
    let deps = new Rust.Expr.Path('__deps');
    // generate map key value
    res.add(this.translate(mapKeys.elements[0]));
    let v_mapKey = this.lastTmpVar();

    res.add(
      this.letVar(
        false,
        new Rust.Expr.FnCall(`crate::state::${key.text.toUpperCase()}.load`, [
          deps.dot('storage'),
          v_mapKey.ref(),
        ]).q()
      )
    );
    return res;
  }

  translateSpecialVariable(x: AST.Ext.SpecialVariable): Rust.CodeGroup {
    let res = new Rust.CodeGroup('special-variable');
    let { ns, member } = x;

    if (ns === 'msg') {
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

    throw new Error(`Unknown special variable ${ns}.${member}`);
  }

  translateMemberAccessExpr(m: AST.MemberAccessExpr): Rust.CodeGroup {
    let res = new Rust.CodeGroup(m.ctx.text);
    let { member, lhs } = m;
    res.add(this.translate(lhs));
    let v_expr = this.lastTmpVar();
    res.add(this.letVar(false, v_expr.dot(member.text)));
    return res;
  }

  translateIdent(x: AST.Ident): Rust.CodeGroup {
    let res = new Rust.CodeGroup(`ident ${x.text}`);

    let resolved = this.env.scope.resolve(null, x.text);
    if (res === undefined) {
      throw new Error(`identifier ${x.text} could not be resolved`);
    }

    if (resolved instanceof Rust.Expr) {
      res.add(this.letVar(false, resolved.clone()));
      return res;
    }

    return res;
  }

  translateEmitStmt(x: AST.EmitStmt): Rust.CodeGroup {
    let res = new Rust.CodeGroup(x.ctx.text);
    res.add(
      new Rust.Expr.Path('__events')
        .fnCall('push', [
          new Rust.Val.StrLiteral('hello').fnCall('to_string', []),
        ])
        .toStmt()
    );
    return res;
  }

  // translateTupleVal(x: AST.TupleVal): CAM.TupleVal {
  //   return new CAM.TupleVal(
  //     this.resolveType(x.type),
  //     x.members.map((y) => this.translate(y))
  //   );
  // }

  translateStructVal(x: AST.StructVal): Rust.CodeGroup {
    let res = new Rust.CodeGroup(x.ctx.text);
    let type = this.resolveType(x.type);
    let members = x.members.map((m) => {
      let { name, value } = m;
      res.add(this.translate(value));
      let v_value = this.lastTmpVar();
      let smember = new Rust.Val.StructMember(name.text, v_value);
      return smember;
    });
    res.add(this.letVar(false, new Rust.Val.Struct(type, members)));
    return res;
  }

  translateExecuteNowStmt(x: AST.ExecuteNowStmt): Rust.CodeGroup {
    const res = new Rust.CodeGroup(x.ctx.text);
    const { msg } = x;
    
    res.add(this.translate(msg));
    const msgVar = this.lastTmpVar();

    const responseVar1 = this.getTmpVar();
    res.add(new Defn.Let(
      true,
      responseVar1.toRustString(),
      undefined,
      new Expr.InstantiateStruct("Response")));

    const responseVar2 = this.getTmpVar();
    res.add(new Defn.Let(
      true,
      responseVar2.toRustString(),
      undefined,
      responseVar1.fnCall("add_message", [msgVar])
    ));

    res.add(new Rust.Stmt.Return(responseVar2.ok()));

    return res;
  }

  translateMsg(x: AST.Msg): Rust.CodeGroup {
    let res = new Rust.CodeGroup(x.ctx.text);
    let { klass, method, args } = x;

    /*
    let ___tmp0 = 20u128;
    let ___tmp1 = String::from(__tmp0);
    let ___tmp2 = 'LUNA';
    let ___tmp3 = String::from(__tmp2);
    */
    const contract = this.inter.contracts.get(x.nearestAncestorOfType(ContractDefn)!.name.text)!;
    console.log(contract);
    const exec = contract.execs.find((y: any) => y.name === x.nearestAncestorOfType(ExecDefn)!.name!.text)!;
    console.log(exec);
    const addr = exec.args.find((z: any) => z.name === klass.text)!;
    console.log(addr); // ToDo: verify that it's an Addr
    const contractInterface = this.inter.interfaces.get(addr.type.types[0])!;
    console.log(contractInterface);
    const msgArgs = contractInterface.execs.find((zz: any) => zz.name === method.text)!.args;
    console.log(msgArgs);

    for (const arg of args.elements) {
      res.add(this.translate(arg));

      const target = this.lastTmpVar();
      res.add(new Defn.Let(
        true,
        this.getTmpVar().toRustString(),
        undefined,
        new Expr.FnCall("String::from", [target]))); // ToDo: derive String::from (or whatever) instead of hard-coding
    }

    /*
    let ___tmp4 = CW20::Mint {
      amount: ___tmp1,
      denom: ___tmp3,
    };
    */
    const structMembers = [];
    for (let i = 0; i < msgArgs.length; i++) {
      const name = msgArgs[i].name;
      const idx = (i + 1)*2 - 1;
      structMembers.push(new Val.StructMember(
        name,
        new Expr.Path(`__tmp${idx}`)));
    }

    const struct = new Rust.Val.Struct(
      new Type(`${contract.name}::${method.text[0].toUpperCase() + method.text.slice(1)}`),
      structMembers
    );

    res.add(new Defn.Let(
      true,
      this.getTmpVar().toRustString(),
      undefined,
      struct));

    // let ___tmp5 = to_binary(&___tmp4);
    const target = this.lastTmpVar();
    res.add(new Defn.Let(
      true,
      this.getTmpVar().toRustString(),
      undefined,
      new Expr.FnCall("to_binary", [new Expr.Path(`&${target.toRustString()}`)])));

    // let ___tmp6 = remote_contract.to_string();
    const msgBinary = this.lastTmpVar();
    res.add(new Defn.Let(
      true,
      this.getTmpVar().toRustString(),
      undefined,
      new Expr.FnCall(`${klass.text}.to_string`)));

    /*
    let ___tmp7 = WasmMsg::Execute {
      contract_addr: ___tmp6,
      msg: ___tmp5,
      funds: vec![]
    };
    */
    const contractAddr = this.lastTmpVar();
    res.add(new Defn.Let(
      true,
      this.getTmpVar().toRustString(),
      undefined,
      new Rust.Val.Struct(
        new Type(`WasmMsg::Execute`),
        [
          new Val.StructMember('contract_addr', contractAddr),
          new Val.StructMember('msg', msgBinary),
          new Val.StructMember('funds', new Expr.Path('vec![]')),
        ])));

    return res;
  }

  translateReturnStmt(x: AST.ReturnStmt): Rust.CodeGroup {
    let res = new Rust.CodeGroup(x.ctx.text);
    let { expr } = x;
    res.add(this.translate(expr));
    let v_value = this.lastTmpVar();
    res.add(new Rust.Stmt.Return(v_value.ok()));
    return res; // TODO: handle for different fn context
  }

  translateContractDefn(contract: AST.ContractDefn): Rust.CodeGroup {
    let name = contract.name.text;
    let res = new Rust.CodeGroup(`contract ${name}`);
    this.env.enterScope(name);

    let contractScope = this.env.scope;
    // first get all the type definitions
    let typedefns = [
      ...contract.descendantsOfType(AST.StructDefn),
      ...contract.descendantsOfType(AST.EnumDefn),
      ...contract.descendantsOfType(AST.TypeAliasDefn),
    ];

    typedefns.forEach((d) => {
      this.env.scope.define(
        Subspace.TYPE,
        d.name.text,
        new UnresolvedType(d, (x) =>
          contractScope.define(Subspace.TYPE, d.name.text, x)
        )
      );
    });

    res.add(buildModTypes(this, typedefns));

    let errors = contract.descendantsOfType(AST.ErrorDefn);

    errors.forEach((e) => {
      // let err = this.translateStructDefn(e); // TODO: add struct
      // contractScope.define(Subspace.ERROR, err.name, err);
    });

    res.add(buildModError(this, errors));

    // TODO: add events
    // let events = contract.descendantsOfType(AST.EventDefn).map(e => {
    //   let ev = this.translateStructDefn(e);
    //   contractScope.define(Subspace.EVENT, ev.name, ev);
    //   return ev;
    // });

    let state = [
      ...contract.descendantsOfType(AST.ItemDefn),
      ...contract.descendantsOfType(AST.MapDefn),
    ];

    // TODO: register state
    // state.forEach(s => {
    //   contractScope.define(Subspace.STATE, s.key, s);
    // });

    res.add(buildModState(this, state));

    let instantiate = contract.descendantsOfType(AST.InstantiateDefn)[0];
    let exec = contract.descendantsOfType(AST.ExecDefn);
    let query = contract.descendantsOfType(AST.QueryDefn);

    res.add(buildModMsg(this, instantiate, exec, query));
    res.add(buildModContract(this, instantiate, exec, query));

    this.env.exitScope();
    return res;
  }

  translate(ast: AST.AST): Rust.CodeGroup {
    let astType = ast.constructor.name;
    if (`translate${astType}` in this) {
      return (this as any)[`translate${astType}`](ast);
    } else {
      throw new Error(`Could not translate AST type: ${astType}`);
    }
  }
}
