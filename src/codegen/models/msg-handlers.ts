import { ASTCodegen } from './base';
import * as AST from '../../ast/node-types';
import * as Rust from '../../rust';
import { CW_STD, CRATE } from '../helpers';

export class InstantiateCodegen extends ASTCodegen<AST.InstantiateDefn> {
  public generateFunction(): Rust.Defn.Function {
    // most of the instantiate function below is boilerplate as it follows the
    // cosmwasm function signature.

    let scope = this.env.enterScope('instantiate');
    // (__deps: cosmwasm_std::DepsMut, __env: cosmwasm_std::Env, __info: cosmwasm_std::MessageInfo, __msg: crate::msg::InstantiateMsg)
    let args = [
      new Rust.FunctionArg([], '__deps', CW_STD.join('DepsMut').toType()),
      new Rust.FunctionArg([], '__env', CW_STD.join('Env').toType()),
      new Rust.FunctionArg([], '__info', CW_STD.join('MessageInfo').toType()),
      new Rust.FunctionArg(
        [],
        '__msg',
        CRATE.join('msg', 'InstantiateMsg').toType()
      ),
    ];

    // -> Result<Response, crate::error::ContractError>
    let returnType = new Rust.Type.Result(
      CW_STD.join('Response').toType(),
      CRATE.join('error', 'ContractError').toType()
    );

    let instantiate = new Rust.Defn.Function(
      [new Rust.Annotation(`cfg(not(feature = "library"), entry_point)`)],
      'instantiate',
      args,
      returnType
    );

    // now we begin to create the function body
    // step 1: load the function arguments (inside the msg) into the local scope
    this.ast.args.elements.forEach(arg => {
      scope.define(Subspace.LOCAL, arg.name.text, toRust(this.env, arg.type));
    });

    // // step 2: start translating statements
    this.ast.body.elements.forEach(stmt => {
      instantiate.addBody(toRust(this.env, stmt));
    });

    this.env.exitScope();
    return instantiate;
  }
}
