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
exports.buildModContract = void 0;
const Rust = __importStar(require("../../rust"));
const strings_1 = require("../../util/strings");
const helpers_1 = require("../helpers");
function buildModContract(ast2rust, i, e, q) {
    let module = new Rust.Defn.Module('contract');
    module.addItem(new Rust.Defn.Use([new Rust.Annotation(`cfg(not(feature = "library"))`)], 'cosmwasm_std::entry_point'));
    module.addItem(new Rust.Defn.Use([], 'cosmwasm_std::{to_binary, Binary, Deps, DepsMut, Env, MessageInfo, Response, StdResult}'));
    module.addItem(new Rust.Defn.Use([], 'crate::error::ContractError'));
    // build instantiate
    let instantiate = new Rust.Defn.Function([new Rust.Annotation(`cfg_attr(not(feature = "library"), entry_point)`)], 'instantiate', [
        new Rust.FunctionArg([], '__deps', helpers_1.CW_STD.join('DepsMut').toType()),
        new Rust.FunctionArg([], '__env', helpers_1.CW_STD.join('Env').toType()),
        new Rust.FunctionArg([], '__info', helpers_1.CW_STD.join('MessageInfo').toType()),
        new Rust.FunctionArg([], '__msg', helpers_1.C_MSG.join('InstantiateMsg').toType()),
    ], new Rust.Type.Result(helpers_1.CW_STD.join('Response').toType(), helpers_1.C_ERROR.join('ContractError').toType()));
    // redirect to our instantiate implementationj
    instantiate.addBody(new Rust.Expr.FnCall('instantiate_impl', [
        new Rust.Expr.Path('__deps'),
        new Rust.Expr.Path('__env'),
        new Rust.Expr.Path('__info'),
        ...i.args.map(x => new Rust.Expr.Path(`__msg`).dot(x.name.text)),
    ]));
    module.addItem(instantiate);
    module.addItem(ast2rust.translateInstantiateDefn(i));
    // build execute (demux)
    let execute = new Rust.Defn.Function([new Rust.Annotation(`cfg_attr(not(feature = "library"), entry_point)`)], 'execute', [
        new Rust.FunctionArg([], '__deps', helpers_1.CW_STD.join('DepsMut').toType()),
        new Rust.FunctionArg([], '__env', helpers_1.CW_STD.join('Env').toType()),
        new Rust.FunctionArg([], '__info', helpers_1.CW_STD.join('MessageInfo').toType()),
        new Rust.FunctionArg([], '__msg', helpers_1.C_MSG.join('ExecuteMsg').toType()),
    ], new Rust.Type.Result(helpers_1.CW_STD.join('Response').toType(), helpers_1.C_ERROR.join('ContractError').toType()));
    let match = new Rust.Expr.Match(new Rust.Expr.Path('__msg'));
    e.forEach(x => {
        let argList = x.args.map(a => a.name.text);
        match.addPattern(`crate::msg::ExecuteMsg::${(0, strings_1.snakeToPascal)(x.name.text)} {${argList.join(',')}}`, new Rust.Expr.FnCall(`exec_${x.name.text}`, [
            new Rust.Expr.Path('__deps'),
            new Rust.Expr.Path('__env'),
            new Rust.Expr.Path('__info'),
            ...argList.map(a => new Rust.Expr.Path(a)),
        ]));
    });
    execute.addBody(match);
    module.addItem(execute);
    e.forEach(x => {
        module.addItem(ast2rust.translateExecDefn(x));
    });
    let query = new Rust.Defn.Function([new Rust.Annotation(`cfg_attr(not(feature = "library"), entry_point)`)], 'query', [
        new Rust.FunctionArg([], '__deps', helpers_1.CW_STD.join('Deps').toType()),
        new Rust.FunctionArg([], '__env', helpers_1.CW_STD.join('Env').toType()),
        new Rust.FunctionArg([], '__msg', helpers_1.C_MSG.join('QueryMsg').toType()),
    ], helpers_1.CW_STD.join('StdResult')
        .toType()
        .withTypeParams([helpers_1.CW_STD.join('Binary').toType()]));
    match = new Rust.Expr.Match(new Rust.Expr.Path('__msg'));
    q.forEach(x => {
        let argList = x.args.map(a => a.name.text);
        match.addPattern(`crate::msg::QueryMsg::${(0, strings_1.snakeToPascal)(x.name.text)} {${argList.join(',')}}`, new Rust.Expr.FnCall(helpers_1.CW_STD.join('to_binary').toRustString(), [
            new Rust.Expr.FnCall(`query_${x.name.text}`, [
                new Rust.Expr.Path('__deps'),
                new Rust.Expr.Path('__env'),
                ...argList.map(x => new Rust.Expr.Path(x)),
            ])
                .q()
                .ref(),
        ]));
    });
    query.addBody(match);
    module.addItem(query);
    q.forEach(x => {
        module.addItem(ast2rust.translateQueryDefn(x));
    });
    return module;
}
exports.buildModContract = buildModContract;
//# sourceMappingURL=contract.js.map