import * as AST from '../ast/nodes';
import * as CAM from '../cam';

import { CWScriptEnv } from '../symbol-table/env';
import { Subspace } from '../symbol-table/scope';

export class UnresolvedType {
  constructor(public ref: AST.TypeExpr, public postResolve: (x: any) => any) {}
}

export class AST2CAM {
  constructor(public env: CWScriptEnv) {}

  resolveType(ty: AST.TypeExpr): CAM.Type {
    if (ty instanceof AST.TypePath) {
      let x = this.env.scope.resolve(
        [Subspace.TYPE, Subspace.ERROR, Subspace.EVENT],
        ty.toString()
      );

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

      return x;
    }

    if (ty instanceof AST.ShortVecTypeExpr) {
      return new CAM.Type.Vector(this.resolveType(ty.type));
    }

    if (ty instanceof AST.ShortOptionTypeExpr) {
      return new CAM.Type.Option(this.resolveType(ty.type));
    }

    if (ty instanceof AST.StructDefn) {
      return this.translateStructDefn(ty);
    }

    if (ty instanceof AST.EnumDefn) {
      return this.translateEnumDefn(ty);
    }

    if (ty instanceof AST.TypeAliasDefn) {
      return this.translateTypeAliasDefn(ty);
    }

    throw new Error(`type ${ty.constructor.name} could not be resolved`);
  }

  translateStructDefn(s: AST.StructDefn): CAM.Type.Struct {
    let name = s.name.text;
    let members = s.members.map(m => ({
      name: m.name.text,
      option: m.option,
      type: this.resolveType(m.type),
    }));

    return new CAM.Type.Struct(name, members);
  }

  translateEnumDefn(e: AST.EnumDefn) {
    // TODO: process properly
    let name = e.name.text;
    let variants = e.variants.map(v => ({
      name: v.name.text,
    }));

    return {
      enum: {
        name,
        variants,
      },
    };
  }

  translateTypeAliasDefn(t: AST.TypeAliasDefn): CAM.Type.TypeAlias {
    let name = t.name.text;
    let type = this.resolveType(t.type);

    return new CAM.Type.TypeAlias(name, type);
  }

  translateItemDefn(item: AST.ItemDefn): CAM.StateItem {
    let key = item.key.text;
    let type = this.resolveType(item.type);

    return new CAM.StateItem(key, type);
  }

  translateArithmeticOpExpr(f: AST.ArithmeticOpExpr): CAM.ArithmeticOp {
    let op = f.op;
    let lhs = this.translate(f.lhs);
    let rhs = this.translate(f.rhs);

    return new CAM.ArithmeticOp(op, lhs, rhs);
  }

  translateMapDefn(map: AST.MapDefn): CAM.StateMap {
    let key = map.key.text;
    let mapKeys = map.mapKeys.map(x => ({
      name: x.name?.text,
      type: this.resolveType(x.type),
    }));
    let type = this.resolveType(map.type);

    let res = new CAM.StateMap(key, mapKeys, type);

    this.env.scope.define(Subspace.STATE, key, res);
    return res;
  }

  translateForInStmt(stmt: AST.ForInStmt): CAM.ForIn {
    const forScope = this.env.enterScope('for-in');
    let bindings = this.translate(stmt.bindings);
    let iterable = this.translate(stmt.iterable);

    if ('ident' in bindings) {
      forScope.define(Subspace.LOCAL, (bindings as any).ident, bindings);
    }

    if ('structUnpack' in bindings) {
      (bindings as any)['structUnpack'].forEach((x: string) => {
        let memberType = (iterable as any).type.elementType.members.find(
          (m: any) => m.name === x
        )?.type;

        forScope.define(Subspace.LOCAL, x, memberType);
      });
    }

    let body = stmt.body.map(x => this.translate(x));
    this.env.exitScope();

    return new CAM.ForIn(bindings, iterable, body);
  }

  translateIdentAssignLHS(lhs: AST.IdentAssignLHS) {
    return {
      ident: lhs.ident.text,
    };
  }

  translateStructUnpackLHS(lhs: AST.StructUnpackLHS) {
    let names = lhs.names.map(x => x.text);
    return {
      structUnpack: names,
    };
  }

  translateInstantiateDefn(i: AST.InstantiateDefn): CAM.Fn {
    let instantiate = this.translateFnDefn(i);
    instantiate.name = 'instantiate';
    return instantiate;
  }

  translateExecDefn(e: AST.ExecDefn) {
    return this.translateFnDefn(e);
  }

  translateQueryDefn(q: AST.QueryDefn) {
    return this.translateFnDefn(q);
  }

  translateFnDefn(
    fn: AST.FnDefn | AST.ExecDefn | AST.QueryDefn | AST.InstantiateDefn
  ): CAM.Fn {
    let name = fn.name === undefined ? '' : fn.name.text;
    const fnScope = this.env.enterScope(`${name}`);
    let args = fn.args.map(arg => {
      let name = arg.name.text;
      let { option } = arg;
      let type = this.resolveType(arg.type);

      return {
        name,
        option,
        type,
      };
    });

    args.forEach(arg => {
      fnScope.define(Subspace.LOCAL, arg.name, new CAM.LoadArg(arg));
    });

    let returnType = fn.returnType
      ? this.resolveType(fn.returnType)
      : new CAM.Type.None();
    let body = fn.body.map(x => this.translate(x));

    this.env.exitScope();

    return new CAM.Fn(name, args, returnType, body);
  }

  translateAssignStmt(stmt: AST.Stmt): CAM.Assign {
    return new CAM.Assign(
      stmt.assignOp,
      this.translate(stmt.lhs),
      this.translate(stmt.rhs)
    );
  }

  translateLetStmt(stmt: AST.LetStmt): CAM.Let {
    let lhs = this.translate(stmt.lhs);
    let rhs = this.translate(stmt.rhs);

    if ('ident' in lhs) {
      this.env.scope.define(Subspace.LOCAL, (lhs as any)['ident'], rhs);
    }

    return new CAM.Let(lhs, rhs);
  }

  translateIdentLHS(lhs: AST.IdentLHS) {
    let name = lhs.name.text;
    return {
      ident: name,
    };
  }

  translateIntegerVal(val: AST.IntegerVal): CAM.IntegerVal {
    return new CAM.IntegerVal(val.value);
  }

  translateStateItemAssignLHS(lhs: AST.StateItemAssignLHS) {
    return {
      stateItem: {
        key: lhs.key.text,
      },
    };
  }

  translateStateItemAccessExpr(lhs: AST.StateItemAccessExpr) {
    return new CAM.StateItemAccess(lhs.key.text);
  }

  translateSpecialVariable(x: AST.Ext.SpecialVariable): CAM.SpecialVariable {
    return new CAM.SpecialVariable(x.ns, x.member);
  }

  translateIdent(x: AST.Ident): CAM.CAM {
    let res = this.env.scope.resolve(null, x.text);
    if (res === undefined) {
      throw new Error(`identifier ${x.text} could not be resolved`);
    }
    return res;
  }

  translateEmitStmt(x: AST.EmitStmt): CAM.Emit {
    return new CAM.Emit(this.translate(x.expr));
  }

  translateTupleVal(x: AST.TupleVal): CAM.TupleVal {
    return new CAM.TupleVal(
      this.resolveType(x.type),
      x.members.map(y => this.translate(y))
    );
  }

  translateStructVal(x: AST.StructVal): CAM.StructVal {
    return new CAM.StructVal(
      this.resolveType(x.type),
      x.members.map(m => ({
        name: m.name.text,
        value: this.translate(m.value),
      }))
    );
  }

  translateStateMapAssignLHS(lhs: AST.StateMapAssignLHS) {
    return {
      stateMap: {
        key: lhs.key.text,
        mapKeys: lhs.mapKeys.map(x => this.translate(x)),
      },
    };
  }

  translateReturnStmt(x: AST.ReturnStmt): CAM.Return {
    return new CAM.Return(this.translate(x.expr));
  }

  translateContractDefn(contract: AST.ContractDefn): CAM.Contract {
    let name = contract.name.text;
    this.env.enterScope(name);

    let contractScope = this.env.scope;
    // first get all the type definitions
    let typedefns = [
      ...contract.descendantsOfType(AST.StructDefn),
      ...contract.descendantsOfType(AST.EnumDefn),
      ...contract.descendantsOfType(AST.TypeAliasDefn),
    ];

    typedefns.forEach(d => {
      this.env.scope.define(
        Subspace.TYPE,
        d.name.text,
        new UnresolvedType(d, x =>
          contractScope.define(Subspace.TYPE, d.name.text, x)
        )
      );
    });

    let types = typedefns.map(d => this.resolveType(d));

    let errors = contract.descendantsOfType(AST.ErrorDefn).map(e => {
      let err = this.translateStructDefn(e);
      contractScope.define(Subspace.ERROR, err.name, err);
      return err;
    });
    let events = contract.descendantsOfType(AST.EventDefn).map(e => {
      let ev = this.translateStructDefn(e);
      contractScope.define(Subspace.EVENT, ev.name, ev);
      return ev;
    });

    let state = [
      ...contract
        .descendantsOfType(AST.ItemDefn)
        .map(x => this.translateItemDefn(x)),
      ...contract
        .descendantsOfType(AST.MapDefn)
        .map(x => this.translateMapDefn(x)),
    ];

    state.forEach(s => {
      contractScope.define(Subspace.STATE, s.key, s);
    });

    let instantiate = contract
      .descendantsOfType(AST.InstantiateDefn)
      .map(x => this.translateInstantiateDefn(x));

    let exec = contract
      .descendantsOfType(AST.ExecDefn)
      .map(x => this.translateExecDefn(x));

    let query = contract
      .descendantsOfType(AST.QueryDefn)
      .map(x => this.translateQueryDefn(x));

    this.env.exitScope();

    return new CAM.Contract(
      name,
      types,
      errors,
      events,
      state,
      instantiate[0],
      exec,
      query
    );
  }

  translate(ast: AST.AST): CAM.CAM {
    let astType = ast.constructor.name;
    if (`translate${astType}` in this) {
      return (this as any)[`translate${astType}`](ast);
    } else {
      throw new Error(`Could not translate AST type: ${astType}`);
    }
  }
}
