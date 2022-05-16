import { Annotation, CodeGroup, Defn, Expr, FunctionArg, MatchPattern, Path, Rust, Type, Val } from '../../src/rust';
import { cws } from '../../testHelpers/cws';
import { CWScriptCodegen } from '../../src/codegen/codegen';

describe('ast compiler', () => {
    it('compiles an empty contract with empty instantiate', () => {
        // arrange
        const ast = cws`
            contract CWTemplate {
                instantiate() {}
            }`;

        // act
        const codegen = new CWScriptCodegen([{ file: '/dev/null', ast }]);
        const rust = codegen.generateContract('CWTemplate', '/dev/null');

        // assert
        const msg = findItem<CodeGroup>(rust.items, 'name', 'msg');
        expect(msg).toBeDefined();
        expect(msg.items).toHaveLength(5);

        const msg_use1 = findItem<Defn.Use>(msg.items, 'path', 'schemars::JsonSchema');
        expect(msg_use1).toBeDefined();
        expect(msg_use1.annotations).toHaveLength(0);

        const msg_use2 = findItem<Defn.Use>(msg.items, 'path', 'serde::{Serialize, Deserialize}');
        expect(msg_use2).toBeDefined();
        expect(msg_use2.annotations).toHaveLength(0);

        const msg_struct = findItem<Defn.Struct>(msg.items, 'name', 'InstantiateMsg');
        expect(msg_struct).toBeDefined();
        expect(msg_struct.members).toHaveLength(0);
        expect(msg_struct.annotations).toHaveLength(1);
        expectToFind<Annotation>(msg_struct.annotations, 'value', 'derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)');

        const msg_executeMsg = findItem<Defn.Enum>(msg.items, 'name', 'ExecuteMsg');
        expect(msg_executeMsg).toBeDefined();
        expect(msg_executeMsg.annotations).toHaveLength(2);
        expectToFind<Annotation>(msg_executeMsg.annotations, 'value', 'derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)');
        expectToFind<Annotation>(msg_executeMsg.annotations, 'value', 'serde(rename_all = "snake_case")');
        expect(msg_executeMsg.variants).toHaveLength(0);

        const contract = findItem<CodeGroup>(rust.items, 'name', 'contract');
        expect(contract).toBeDefined();
        expect(contract.items).toHaveLength(7);

        const contract_use1 = findItem<Defn.Use>(contract.items, 'path', 'crate::error::ContractError');
        expect(contract_use1).toBeDefined();
        expect(contract_use1.annotations).toHaveLength(0);

        const contract_use2 = findItem<Defn.Use>(contract.items, 'path', 'cosmwasm_std::entry_point');
        expect(contract_use2).toBeDefined();
        expect(contract_use2.annotations).toHaveLength(1);
        expectToFind<Annotation>(contract_use2.annotations, 'value', 'cfg(not(feature = "library"))');

        const contract_use3 = findItem<Defn.Use>(contract.items, 'path', 'cosmwasm_std::{to_binary, Binary, Deps, DepsMut, Env, MessageInfo, Response, StdResult}');
        expect(contract_use3).toBeDefined();
        expect(contract_use3.annotations).toHaveLength(0);

        const contract_instantiate = findItem<Defn.Function>(contract.items, 'name', 'instantiate');
        expect(contract_instantiate).toBeDefined();
        expectToFind<Annotation>(contract_instantiate.annotations, 'value', `cfg_attr(not(feature = "library"), entry_point)`);
        expect(contract_instantiate.body).toBeDefined();
        expect(contract_instantiate.args).toBeDefined();
        expect(contract_instantiate.args).toHaveLength(4);

        const contract_instantiate_depsArg = contract_instantiate.args.find((x: FunctionArg) => x.name === '__deps');
        expect(contract_instantiate_depsArg).toBeDefined();
        expect(contract_instantiate_depsArg.type.path).toBe('cosmwasm_std::DepsMut');

        const contract_instantiate_envArg = contract_instantiate.args.find((x: FunctionArg) => x.name === '__env');
        expect(contract_instantiate_envArg).toBeDefined();
        expect(contract_instantiate_envArg.type.path).toBe('cosmwasm_std::Env');

        const contract_instantiate_infoArg = contract_instantiate.args.find((x: FunctionArg) => x.name === '__info');
        expect(contract_instantiate_infoArg).toBeDefined();
        expect(contract_instantiate_infoArg.type.path).toBe('cosmwasm_std::MessageInfo');

        const contract_instantiate_msgArg = contract_instantiate.args.find((x: FunctionArg) => x.name === '__msg');
        expect(contract_instantiate_msgArg).toBeDefined();
        expect(contract_instantiate_msgArg.type.path).toBe('crate::msg::InstantiateMsg');

        const contract_Instantiate_ReturnType = contract_instantiate.returnType;
        expect(contract_Instantiate_ReturnType).toBeDefined();
        expect(contract_Instantiate_ReturnType.path).toBe('::std::result::Result');
        expectToFind<Type>(contract_Instantiate_ReturnType.typeParams, 'path', 'cosmwasm_std::Response');
        expectToFind<Type>(contract_Instantiate_ReturnType.typeParams, 'path', 'crate::error::ContractError');

        const contract_instantiate_fnCall = findItem<Expr.FnCall>(contract_instantiate.body, 'path', 'instantiate_impl');
        expect(contract_instantiate_fnCall).toBeDefined();
        expect(contract_instantiate_fnCall.typeParams).toHaveLength(0);
        expect(contract_instantiate_fnCall.args).toHaveLength(3);
        expectToFind<Path>(contract_instantiate_fnCall.args, 'path', '__deps');
        expectToFind<Path>(contract_instantiate_fnCall.args, 'path', '__env');
        expectToFind<Path>(contract_instantiate_fnCall.args, 'path', '__info');

        const contract_instantiateImpl = findItem<Defn.Function>(contract.items, 'name', 'instantiate_impl');
        expect(contract_instantiateImpl).toBeDefined();
        expect(contract_instantiateImpl.body).toBeDefined();
        expect(contract_instantiateImpl.args).toBeDefined();
        expect(contract_instantiateImpl.args).toHaveLength(3);

        const contract_instantiateImpl_depsArg = contract_instantiateImpl.args.find((x: FunctionArg) => x.name === '__deps');
        expect(contract_instantiateImpl_depsArg).toBeDefined();
        expect(contract_instantiateImpl_depsArg.type.path).toBe('cosmwasm_std::DepsMut');

        const contract_instantiateImpl_envArg = contract_instantiateImpl.args.find((x: FunctionArg) => x.name === '__env');
        expect(contract_instantiateImpl_envArg).toBeDefined();
        expect(contract_instantiateImpl_envArg.type.path).toBe('cosmwasm_std::Env');

        const contract_instantiateImpl_infoArg = contract_instantiateImpl.args.find((x: FunctionArg) => x.name === '__info');
        expect(contract_instantiateImpl_infoArg).toBeDefined();
        expect(contract_instantiateImpl_infoArg.type.path).toBe('cosmwasm_std::MessageInfo');

        // ToDo: rest of instantiate_impl stuff

        // ToDo: execute, query
    });

    it('compiles a contract with an execute message', () => {
        // arrange
        const ast = cws`
            interface CW20 {
                exec mint(amount: String, denom: String)
            }

            contract CWTemplate {
                instantiate() {}

                exec baz(remote_contract: Addr<CW20>) {
                    execute! #remote_contract.mint("20", "LUNA")
                }
            }`;

        // act
        const codegen = new CWScriptCodegen([{ file: '/dev/null', ast }]);
        const rust = codegen.generateContract('CWTemplate', '/dev/null');

        // assert
        const msg = findItem<CodeGroup>(rust.items, 'name', 'msg');
        expect(msg).toBeDefined();
        expect(msg.items).toHaveLength(5);

        const msg_executeMsg = findItem<Defn.Enum>(msg.items, 'name', 'ExecuteMsg');
        expect(msg_executeMsg).toBeDefined();
        expect(msg_executeMsg.variants).toHaveLength(1);

        const msg_executeMsg_bazStruct = findItem<Defn.Struct>(msg_executeMsg.variants, 'name', 'Baz');
        expect(msg_executeMsg_bazStruct).toBeDefined();
        expect(msg_executeMsg_bazStruct.annotations).toHaveLength(0);
        expect(msg_executeMsg_bazStruct.members).toHaveLength(1);

        const msg_executeMsg_bazStruct_arg = findItem<Defn.StructMember>(msg_executeMsg_bazStruct.members, 'name', 'remote_contract');
        expect(msg_executeMsg_bazStruct_arg).toBeDefined();
        expect(msg_executeMsg_bazStruct_arg.annotations).toHaveLength(0);
        expect(msg_executeMsg_bazStruct_arg.type).toBeDefined();
        expect(msg_executeMsg_bazStruct_arg.type.path).toBe('cosmwasm_std::Addr');
        expect(msg_executeMsg_bazStruct_arg.type.typeParams).toHaveLength(0);

        const msg_executeMsg_bazStruct_queryMsg = findItem<Defn.Enum>(msg.items, 'name', 'QueryMsg');
        expect(msg_executeMsg_bazStruct_queryMsg).toBeDefined();
        expect(msg_executeMsg_bazStruct_queryMsg.annotations).toHaveLength(2);
        expectToFind<Annotation>(msg_executeMsg_bazStruct_queryMsg.annotations, 'value', 'derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)');
        expectToFind<Annotation>(msg_executeMsg_bazStruct_queryMsg.annotations, 'value', 'serde(rename_all = "snake_case")');
        expect(msg_executeMsg_bazStruct_queryMsg.variants).toHaveLength(0);

        const contract = findItem<CodeGroup>(rust.items, 'name', 'contract');
        expect(contract).toBeDefined();
        expect(contract.items).toHaveLength(8);

        const contract_execute = findItem<Defn.Function>(contract.items, 'name', 'execute');
        expect(contract_execute).toBeDefined();
        expectToFind<Annotation>(contract_execute.annotations, 'value', `cfg_attr(not(feature = "library"), entry_point)`);
        expect(contract_execute.body).toBeDefined();
        expect(contract_execute.body).toHaveLength(1);
        expect(contract_execute.args).toBeDefined();
        expect(contract_execute.args).toHaveLength(4);

        const contract_execute_depsArg = contract_execute.args.find((x: FunctionArg) => x.name === '__deps');
        expect(contract_execute_depsArg).toBeDefined();
        expect(contract_execute_depsArg.type.path).toBe('cosmwasm_std::DepsMut');

        const contract_execute_envArg = contract_execute.args.find((x: FunctionArg) => x.name === '__env');
        expect(contract_execute_envArg).toBeDefined();
        expect(contract_execute_envArg.type.path).toBe('cosmwasm_std::Env');

        const contract_execute_infoArg = contract_execute.args.find((x: FunctionArg) => x.name === '__info');
        expect(contract_execute_infoArg).toBeDefined();
        expect(contract_execute_infoArg.type.path).toBe('cosmwasm_std::MessageInfo');

        const contract_execute_msgArg = contract_execute.args.find((x: FunctionArg) => x.name === '__msg');
        expect(contract_execute_msgArg).toBeDefined();
        expect(contract_execute_msgArg.type.path).toBe('crate::msg::ExecuteMsg');

        const contract_execute_ReturnType = contract_execute.returnType;
        expect(contract_execute_ReturnType).toBeDefined();
        expect(contract_execute_ReturnType.path).toBe('::std::result::Result');
        expectToFind<Type>(contract_execute_ReturnType.typeParams, 'path', 'cosmwasm_std::Response');
        expectToFind<Type>(contract_execute_ReturnType.typeParams, 'path', 'crate::error::ContractError');

        const contract_execute_match = contract_execute.body[0] as Expr.Match;
        expect(contract_execute_match).toBeDefined();
        expect(contract_execute_match.patterns).toHaveLength(1);

        const contract_execute_match_item = contract_execute_match.item as Expr.Path;
        expect(contract_execute_match_item).toBeDefined();
        expect(contract_execute_match_item.path).toBe('__msg');

        const contract_execute_match_pattern = contract_execute_match.patterns[0] as MatchPattern;
        expect(contract_execute_match_pattern).toBeDefined();
        expect(contract_execute_match_pattern.pattern).toBe('crate::msg::ExecuteMsg::Baz {remote_contract}');

        const contract_execute_match_pattern_expr = contract_execute_match_pattern.expr as Expr.FnCall;
        expect(contract_execute_match_pattern_expr).toBeDefined();
        expect(contract_execute_match_pattern_expr.typeParams).toHaveLength(0);
        expect(contract_execute_match_pattern_expr.path).toBe('exec_baz');
        expect(contract_execute_match_pattern_expr.args).toHaveLength(4);
        expectToFind<Path>(contract_execute_match_pattern_expr.args, 'path', '__deps');
        expectToFind<Path>(contract_execute_match_pattern_expr.args, 'path', '__env');
        expectToFind<Path>(contract_execute_match_pattern_expr.args, 'path', '__info');
        expectToFind<Path>(contract_execute_match_pattern_expr.args, 'path', 'remote_contract');

        const contract_execBaz = findItem<Defn.Function>(contract.items, 'name', 'exec_baz');
        expect(contract_execBaz).toBeDefined();
        expect(contract_execBaz.annotations).toHaveLength(0);
        expect(contract_execBaz.body).toBeDefined();
        expect(contract_execBaz.body).toHaveLength(2);
        expect(contract_execBaz.args).toBeDefined();
        expect(contract_execBaz.args).toHaveLength(4);

        const contract_execBaz_depsArg = contract_execBaz.args.find((x: FunctionArg) => x.name === '__deps');
        expect(contract_execBaz_depsArg).toBeDefined();
        expect(contract_execBaz_depsArg.type.path).toBe('cosmwasm_std::DepsMut');

        const contract_execBaz_envArg = contract_execBaz.args.find((x: FunctionArg) => x.name === '__env');
        expect(contract_execBaz_envArg).toBeDefined();
        expect(contract_execBaz_envArg.type.path).toBe('cosmwasm_std::Env');

        const contract_execBaz_infoArg = contract_execBaz.args.find((x: FunctionArg) => x.name === '__info');
        expect(contract_execBaz_infoArg).toBeDefined();
        expect(contract_execBaz_infoArg.type.path).toBe('cosmwasm_std::MessageInfo');

        const contract_execBaz_remoteContractArg = contract_execBaz.args.find((x: FunctionArg) => x.name === 'remote_contract');
        expect(contract_execBaz_remoteContractArg).toBeDefined();
        expect(contract_execBaz_remoteContractArg.type.path).toBe('cosmwasm_std::Addr');

        const contract_execBaz_ReturnType = contract_execBaz.returnType;
        expect(contract_execBaz_ReturnType).toBeDefined();
        expect(contract_execBaz_ReturnType.path).toBe('::std::result::Result');
        expectToFind<Type>(contract_execBaz_ReturnType.typeParams, 'path', 'cosmwasm_std::Response');
        expectToFind<Type>(contract_execBaz_ReturnType.typeParams, 'path', 'crate::error::ContractError');

        const contract_execBaz_EventsLet = findItem<Defn.Let>(contract_execBaz.body, 'ident', '__events');
        expect(contract_execBaz_EventsLet).toBeDefined();
        expect(contract_execBaz_EventsLet.mut).toBe(true);

        const contract_execBaz_EventsLet_type = contract_execBaz_EventsLet.type;
        expect(contract_execBaz_EventsLet_type).toBeDefined();
        expect(contract_execBaz_EventsLet_type.path).toBe('::std::vec::Vec');
        expect(contract_execBaz_EventsLet_type.typeParams).toHaveLength(1);
        expect(contract_execBaz_EventsLet_type.typeParams[0].path).toBe('::std::string::String');

        const contract_execBaz_EventsLet_rhs = contract_execBaz_EventsLet.rhs as Val.Vec;
        expect(contract_execBaz_EventsLet_rhs).toBeDefined();
        expect(contract_execBaz_EventsLet_rhs.values).toHaveLength(0);

        // const contract_execBaz_codeGroup = contract_execBaz.body[1] as CodeGroup;
        // const contract_execBaz_codeGroup_codeGroup = contract_execBaz_codeGroup.items[0] as CodeGroup;
        // const contract_execBaz_statements = []

        // ...
        // ...
        // Temp log statements
        console.log(contract_execBaz);
     });

    function findItem<T extends Rust>(items: Rust[], prop: string, value: string) {
        return items.find(x => x[prop] === value) as T;
    }

    function expectToFind<T extends Rust>(items: Rust[], prop: string, value: string) {
        expect(findItem<T>(items, prop, value)).toBeDefined();
    }
});
