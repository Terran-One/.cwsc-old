"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AST2Rust = exports.UnresolvedType = void 0;
const AST = __importStar(require("../ast/nodes"));
const Rust = __importStar(require("../rust"));
const rust_1 = require("../rust");
const scope_1 = require("../symbol-table/scope");
const helpers_1 = require("./helpers");
const module_builders_1 = require("./module-builders");
const nodes_1 = require("../ast/nodes");
const typeConversion_1 = require("../rust/typeConversion");
class UnresolvedType {
    constructor(ref, postResolve) {
        this.ref = ref;
        this.postResolve = postResolve;
    }
}
exports.UnresolvedType = UnresolvedType;
class AST2Rust {
    constructor(env, intermediate) {
        this.env = env;
        this.intermediate = intermediate;
        this.tmpVarCount = 0;
    }
    getTmpVar() {
        return new Rust.Expr.Path(`__tmp${this.tmpVarCount++}`);
    }
    lastTmpVar() {
        return new Rust.Expr.Path(`__tmp${this.tmpVarCount - 1}`);
    }
    letVar(mut, value, type) {
        let res = new Rust.CodeGroup();
        let tmpVar = this.getTmpVar();
        res.add(new Rust.Stmt.Let(true, tmpVar.toRustString(), type, value));
        return res;
    }
    resolveType(ty) {
        if (ty instanceof AST.TypePath || ty instanceof AST.ParamzdTypeExpr) {
            let x = this.env.scope.resolve([scope_1.Subspace.TYPE, scope_1.Subspace.ERROR, scope_1.Subspace.EVENT], ty.toString());
            if (x === undefined) {
                // TODO: this only works if the parametrized type is interface (which is the only one implemented)
                // once actual parameterized types exist, this needs to change
                x = this.env.scope.resolve([scope_1.Subspace.TYPE, scope_1.Subspace.ERROR, scope_1.Subspace.EVENT], ty.type.toString());
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
            return x;
        }
        if (ty instanceof AST.ShortVecTypeExpr) {
            return new Rust.Type.Vec(this.resolveType(ty.type));
        }
        if (ty instanceof AST.ShortOptionTypeExpr) {
            return new Rust.Type.Option(this.resolveType(ty.type));
        }
        if (ty instanceof AST.StructDefn ||
            ty instanceof AST.EnumDefn ||
            ty instanceof AST.TypeAliasDefn) {
            return helpers_1.C_TYPES.join(ty.name.text).toType();
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
    translateArithmeticOpExpr(expr) {
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
    translateStructUnpackLHS(lhs) {
        let names = lhs.names.map((x) => x.text);
        return {
            structUnpack: names,
        };
    }
    translateInstantiateDefn(fn) {
        const fnScope = this.env.enterScope('instantiate');
        let instantiate = new Rust.Defn.Function([], 'instantiate_impl', [
            new Rust.FunctionArg([], '__deps', helpers_1.CW_STD.join('DepsMut').toType()),
            new Rust.FunctionArg([], '__env', helpers_1.CW_STD.join('Env').toType()),
            new Rust.FunctionArg([], '__info', helpers_1.CW_STD.join('MessageInfo').toType()),
            ...fn.args.map((a) => new Rust.FunctionArg([], a.name.text, a.option
                ? this.resolveType(a.type).option()
                : this.resolveType(a.type))),
        ], new Rust.Type.Result(helpers_1.CW_STD.join('Response').toType(), helpers_1.C_ERROR.join('ContractError').toType()));
        fn.args.elements.forEach((a) => {
            let { name } = a;
            let arg = new Rust.Expr.Path(`${name.text}`);
            fnScope.define(scope_1.Subspace.LOCAL, name.text, arg);
        });
        // add body elements
        instantiate.addBody(new Rust.Stmt.Let(true, '__events', new Rust.Type.Vec(new Rust.Type.String()), new Rust.Val.Vec([])));
        fn.body.elements.forEach((stmt) => {
            instantiate.addBody(this.translate(stmt));
        });
        instantiate.addBody(new Rust.Stmt.Return(new Rust.Expr.FnCall('::std::result::Result::Ok', [
            helpers_1.CW_STD.join('Response').toType().fnCall('new', []),
        ])));
        this.env.exitScope();
        return instantiate;
    }
    translateExecDefn(fn) {
        const fnScope = this.env.enterScope(`exec_${fn.name.text}`);
        let exec = new Rust.Defn.Function([], `exec_${fn.name.text}`, [
            new Rust.FunctionArg([], '__deps', helpers_1.CW_STD.join('DepsMut').toType()),
            new Rust.FunctionArg([], '__env', helpers_1.CW_STD.join('Env').toType()),
            new Rust.FunctionArg([], '__info', helpers_1.CW_STD.join('MessageInfo').toType()),
            ...fn.args.map((a) => new Rust.FunctionArg([], a.name.text, a.option
                ? this.resolveType(a.type).option()
                : this.resolveType(a.type))),
        ], new Rust.Type.Result(helpers_1.CW_STD.join('Response').toType(), helpers_1.C_ERROR.join('ContractError').toType()));
        fn.args.elements.forEach((a) => {
            let { name } = a;
            let arg = new Rust.Expr.Path(name.text);
            fnScope.define(scope_1.Subspace.LOCAL, name.text, arg);
        });
        // add body elements
        exec.addBody(new Rust.Stmt.Let(true, '__events', new Rust.Type.Vec(new Rust.Type.String()), new Rust.Val.Vec([])));
        fn.body.elements.forEach((stmt) => {
            exec.addBody(this.translate(stmt));
        });
        return exec;
    }
    translateQueryDefn(fn) {
        const fnScope = this.env.enterScope(`query_${fn.name.text}`);
        let query = new Rust.Defn.Function([], `query_${fn.name.text}`, [
            new Rust.FunctionArg([], '__deps', helpers_1.CW_STD.join('Deps').toType()),
            new Rust.FunctionArg([], '__env', helpers_1.CW_STD.join('Env').toType()),
            ...fn.args.map((a) => new Rust.FunctionArg([], a.name.text, a.option
                ? this.resolveType(a.type).option()
                : this.resolveType(a.type))),
        ], helpers_1.CW_STD.join('StdResult')
            .toType()
            .withTypeParams([this.resolveType(fn.returnType)]));
        fn.args.elements.forEach((a) => {
            let { name } = a;
            let arg = new Rust.Expr.Path(`${name.text}`);
            fnScope.define(scope_1.Subspace.LOCAL, name.text, arg);
        });
        // add body elements
        fn.body.elements.forEach((stmt) => {
            query.addBody(this.translate(stmt));
        });
        this.env.exitScope();
        return query;
    }
    stateItemSet(key, value) {
        let res = new Rust.CodeGroup(`state-item-set ${key}`);
        let deps = new Rust.Expr.Path('__deps');
        res.add(this.letVar(false, new Rust.Expr.FnCall(`crate::state::${key.toUpperCase()}.save`, [
            deps.dot('storage'),
            value,
        ]).q()));
        return res;
    }
    translateAssignStmt(stmt) {
        let res = new Rust.CodeGroup(stmt.ctx.text);
        let { lhs, rhs } = stmt;
        res.add(this.translate(rhs));
        let v_rhs = this.lastTmpVar();
        if (lhs instanceof AST.IdentAssignLHS) {
            this.env.scope.define(scope_1.Subspace.LOCAL, lhs.ident.text, v_rhs);
        }
        else if (lhs instanceof AST.StateItemAssignLHS) {
            res.add(this.stateItemSet(lhs.key.text, v_rhs.ref()));
        }
        else if (lhs instanceof AST.MemberAssignLHS) {
            res.add(this.translate(lhs.obj));
            let v_lhs = this.lastTmpVar();
            // redefine if the lhs is an identity
            if (lhs.obj instanceof AST.Ident) {
                this.env.scope.define(scope_1.Subspace.LOCAL, lhs.obj.text, v_lhs);
            }
            res.add(new Rust.Stmt.Assign(v_lhs.dot(lhs.member.text), v_rhs));
        }
        return res;
    }
    translateLetStmt(stmt) {
        let res = new Rust.CodeGroup(stmt.ctx.text);
        let rhs = res.add(this.translate(stmt.rhs));
        let v_rhs = this.lastTmpVar();
        if (stmt.lhs instanceof AST.IdentLHS) {
            this.env.scope.define(scope_1.Subspace.LOCAL, stmt.lhs.name.text, v_rhs);
        }
        return res;
    }
    translateIntegerVal(val) {
        let res = new Rust.CodeGroup(val.ctx.text);
        // TODO: change integer type to generic
        res.add(this.letVar(false, new Rust.Val.IntLiteral(Rust.U64, val.value)));
        return res;
    }
    translateStringVal(val) {
        let res = new Rust.CodeGroup(val.ctx.text);
        // TODO: change integer type to generic
        res.add(this.letVar(false, new Rust.Val.StrLiteral(val.value)));
        return res;
    }
    translateVecVal(val) {
        let res = new Rust.CodeGroup(val.ctx.text);
        let elements = val.elements.map((m) => {
            res.add(this.translate(m));
            return this.lastTmpVar();
        });
        res.add(this.letVar(false, new Rust.Val.Vec(elements)));
        return res;
    }
    translateStateItemAssignLHS(lhs) {
        return {
            stateItem: {
                key: lhs.key.text,
            },
        };
    }
    translateStateItemAccessExpr(x) {
        let { key } = x;
        let res = new Rust.CodeGroup(x.ctx.text);
        let deps = new Rust.Expr.Path('__deps');
        res.add(this.letVar(false, new Rust.Expr.FnCall(`crate::state::${key.text.toUpperCase()}.load`, [
            deps.dot('storage'),
        ]).q()));
        return res;
    }
    translateStateMapAccessExpr(x) {
        let { key, mapKeys } = x;
        let res = new Rust.CodeGroup(x.ctx.text);
        let deps = new Rust.Expr.Path('__deps');
        // generate map key value
        res.add(this.translate(mapKeys.elements[0]));
        let v_mapKey = this.lastTmpVar();
        res.add(this.letVar(false, new Rust.Expr.FnCall(`crate::state::${key.text.toUpperCase()}.load`, [
            deps.dot('storage'),
            v_mapKey.ref(),
        ]).q()));
        return res;
    }
    translateSpecialVariable(x) {
        let res = new Rust.CodeGroup('special-variable');
        let { ns, member } = x;
        if (ns === 'msg') {
            switch (member) {
                case 'sender':
                    res.add(this.letVar(false, new Rust.Expr.Path('__info').dot('sender').clone()));
                    return res;
            }
        }
        throw new Error(`Unknown special variable ${ns}.${member}`);
    }
    translateMemberAccessExpr(m) {
        let res = new Rust.CodeGroup(m.ctx.text);
        let { member, lhs } = m;
        res.add(this.translate(lhs));
        let v_expr = this.lastTmpVar();
        res.add(this.letVar(false, v_expr.dot(member.text)));
        return res;
    }
    translateIdent(x) {
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
    translateEmitStmt(x) {
        let res = new Rust.CodeGroup(x.ctx.text);
        res.add(new Rust.Expr.Path('__events')
            .fnCall('push', [
            new Rust.Val.StrLiteral('hello').fnCall('to_string', []),
        ])
            .toStmt());
        return res;
    }
    // translateTupleVal(x: AST.TupleVal): CAM.TupleVal {
    //   return new CAM.TupleVal(
    //     this.resolveType(x.type),
    //     x.members.map((y) => this.translate(y))
    //   );
    // }
    translateStructVal(astStructVal) {
        let res = new Rust.CodeGroup(astStructVal.ctx.text);
        let type = this.resolveType(astStructVal.type);
        let members = astStructVal.members.map((m) => {
            let { name, value } = m;
            res.add(this.translate(value));
            let v_value = this.lastTmpVar();
            let smember = new Rust.Val.StructMember(name.text, v_value);
            return smember;
        });
        res.add(this.letVar(false, new Rust.Val.Struct(type, members)));
        return res;
    }
    translateExecuteNowStmt(x) {
        const res = new Rust.CodeGroup(x.ctx.text);
        const { msg } = x;
        res.add(this.translate(msg));
        const msgVar = this.lastTmpVar();
        const responseVar1 = this.getTmpVar();
        res.add(new rust_1.Defn.Let(true, responseVar1.toRustString(), undefined, new rust_1.Expr.InstantiateStruct("Response")));
        const responseVar2 = this.getTmpVar();
        res.add(new rust_1.Defn.Let(true, responseVar2.toRustString(), undefined, responseVar1.fnCall("add_message", [msgVar])));
        res.add(new Rust.Stmt.Return(responseVar2.ok()));
        return res;
    }
    translateMsg(astMsg) {
        let res = new Rust.CodeGroup(astMsg.ctx.text);
        let { klass, method, args } = astMsg;
        /*
        let __tmp0 = 20u128;
        let __tmp1 = String::from(__tmp0);
        let __tmp2 = 'LUNA';
        let __tmp3 = String::from(__tmp2);
        */
        // ToDo: validation/error-handling
        const contract = this.intermediate.contracts.get(astMsg.nearestAncestorOfType(nodes_1.ContractDefn).name.text);
        const exec = contract.execs.find(e => e.name === astMsg.nearestAncestorOfType(nodes_1.ExecDefn).name.text);
        const addr = exec.args.find(a => a.name === klass.text || a.type.name === 'Addr');
        const contractInterface = this.intermediate.interfaces.get(addr.type.types[0]);
        const argDefs = contractInterface.execs.find(e => e.name === method.text).args;
        for (let i = 0; i < args.elements.length; i++) {
            const arg = args.elements[i];
            res.add(this.translate(arg));
            const target = this.lastTmpVar();
            const type = argDefs[i].type.name;
            res.add(new rust_1.Defn.Let(true, this.getTmpVar().toRustString(), undefined, new typeConversion_1.TypeConversion(target.path, type)));
        }
        /*
        let __tmp4 = CW20::Mint {
          amount: __tmp1,
          denom: __tmp3,
        };
        */
        const structMembers = [];
        for (let i = 0; i < argDefs.length; i++) {
            const name = argDefs[i].name;
            const idx = (i + 1) * 2 - 1;
            structMembers.push(new rust_1.Val.StructMember(name, new rust_1.Expr.Path(`__tmp${idx}`)));
        }
        const struct = new Rust.Val.Struct(new rust_1.Type(`${contract.name}::${method.text[0].toUpperCase() + method.text.slice(1)}`), structMembers);
        res.add(new rust_1.Defn.Let(true, this.getTmpVar().toRustString(), undefined, struct));
        // let __tmp5 = to_binary(&__tmp4);
        const target = this.lastTmpVar();
        res.add(new rust_1.Defn.Let(true, this.getTmpVar().toRustString(), undefined, new rust_1.Expr.FnCall("to_binary", [new rust_1.Expr.Path(`&${target.toRustString()}`)])));
        // let __tmp6 = remote_contract.to_string();
        const msgBinary = this.lastTmpVar();
        res.add(new rust_1.Defn.Let(true, this.getTmpVar().toRustString(), undefined, new rust_1.Expr.FnCall(`${klass.text}.to_string`)));
        /*
        let __tmp7 = WasmMsg::Execute {
          contract_addr: __tmp6,
          msg: __tmp5,
          funds: vec![]
        };
        */
        const contractAddr = this.lastTmpVar();
        res.add(new rust_1.Defn.Let(true, this.getTmpVar().toRustString(), undefined, new Rust.Val.Struct(new rust_1.Type(`WasmMsg::Execute`), [
            new rust_1.Val.StructMember('contract_addr', contractAddr),
            new rust_1.Val.StructMember('msg', msgBinary),
            new rust_1.Val.StructMember('funds', new rust_1.Expr.Path('vec![]')),
        ])));
        return res;
    }
    translateReturnStmt(x) {
        let res = new Rust.CodeGroup(x.ctx.text);
        let { expr } = x;
        res.add(this.translate(expr));
        let v_value = this.lastTmpVar();
        res.add(new Rust.Stmt.Return(v_value.ok()));
        return res; // TODO: handle for different fn context
    }
    translateContractDefn(contract) {
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
            this.env.scope.define(scope_1.Subspace.TYPE, d.name.text, new UnresolvedType(d, (x) => contractScope.define(scope_1.Subspace.TYPE, d.name.text, x)));
        });
        res.add((0, module_builders_1.buildModTypes)(this, typedefns));
        let errors = contract.descendantsOfType(AST.ErrorDefn);
        errors.forEach((e) => {
            // let err = this.translateStructDefn(e); // TODO: add struct
            // contractScope.define(Subspace.ERROR, err.name, err);
        });
        res.add((0, module_builders_1.buildModError)(this, errors));
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
        res.add((0, module_builders_1.buildModState)(this, state));
        let instantiate = contract.descendantsOfType(AST.InstantiateDefn)[0];
        let exec = contract.descendantsOfType(AST.ExecDefn);
        let query = contract.descendantsOfType(AST.QueryDefn);
        res.add((0, module_builders_1.buildModMsg)(this, instantiate, exec, query));
        res.add((0, module_builders_1.buildModContract)(this, instantiate, exec, query));
        this.env.exitScope();
        return res;
    }
    translate(ast) {
        let astType = ast.constructor.name;
        if (`translate${astType}` in this) {
            return this[`translate${astType}`](ast);
        }
        else {
            throw new Error(`Could not translate AST type: ${astType}`);
        }
    }
}
exports.AST2Rust = AST2Rust;
//# sourceMappingURL=ast2rust.js.map