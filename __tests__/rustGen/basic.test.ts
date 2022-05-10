import { ContractDefn, Ident, InstantiateDefn, List, SourceFile } from '../../src/ast/nodes';
import { CWScriptCodegen, Source } from '../../src/codegen/codegen';
import { Annotation, CodeGroup } from '../../src/rust';

describe("ast compiler", () => {
    it("compiles an empty contract with empty instantiate", () => {
        // arrange
        const contractDfn = new ContractDefn(
            undefined,
            undefined,
            new Ident(undefined, 'CWTemplate'),
            new List(undefined, [new InstantiateDefn(undefined, undefined, new Ident(undefined, "instantiate"), new List(undefined, []), undefined, new List(undefined, []))]),
            undefined,
            undefined
        );
        const ast = new SourceFile(
            undefined,
            undefined,
            new List(
                undefined,
                [contractDfn]
            )
        );
        const source: Source = { file: '/dev/null', ast }
        const codegen = new CWScriptCodegen([source]);

        // act
        const codeGroup = codegen.generateContract('CWTemplate', '/dev/null');

        // assert
        type Named = CodeGroup & { name: String };
        type Annotated = Named & { annotations: Annotation[] };

        const item = findItem<Named>(codeGroup.items, "types");
        expect(item).toBeDefined();
        expect(item.items).toHaveLength(2);
        expect(item.items).toContainEqual({ annotations: [], path: "schemars::JsonSchema" });
        expect(item.items).toContainEqual({ annotations: [], path: "serde::{Serialize, Deserialize}" });

        const msg = findItem<Named>(codeGroup.items, "msg");
        expect(msg).toBeDefined();
        expect(msg.items).toContainEqual({ annotations: [], path: "schemars::JsonSchema" });
        expect(msg.items).toContainEqual({ annotations: [], path: "serde::{Serialize, Deserialize}" });

        const instantiateMessage = findItem<Annotated>(msg.items, "InstantiateMsg");
        expect(instantiateMessage.annotations).toContainEqual({ value: "derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)" })

        const contract = findItem<Named>(codeGroup.items, "contract");
        expect(contract).toBeDefined();
 
        const use1 = contract.items.find(x => (x as any).path === 'cosmwasm_std::entry_point') as any;
        expect(use1).toBeDefined();
        expect(use1.annotations).toContainEqual({ value: `cfg(not(feature = \"library\"))` });

        const use2 = contract.items.find(x => (x as any).path === 'cosmwasm_std::{to_binary, Binary, Deps, DepsMut, Env, MessageInfo, Response, StdResult}') as any;
        expect(use2).toBeDefined();
        expect(use2.annotations).toHaveLength(0);

        const instantiate = findItem<any>(contract.items, "instantiate");
        expect(instantiate).toBeDefined();
        expect(instantiate.annotations).toContainEqual({ value: `cfg_attr(not(feature = \"library\"), entry_point)` });
        expect(instantiate.body).toBeDefined();
        expect(instantiate.args).toBeDefined();
        expect(instantiate.args).toHaveLength(4);

        const depsArg = instantiate.args.find((x: any) => x.name === '__deps');
        expect(depsArg).toBeDefined();
        expect(depsArg.type.path).toBe('cosmwasm_std::DepsMut');

        const envArg = instantiate.args.find((x: any) => x.name === '__env');
        expect(envArg).toBeDefined();
        expect(envArg.type.path).toBe('cosmwasm_std::Env');

        const infoArg = instantiate.args.find((x: any) => x.name === '__info');
        expect(infoArg).toBeDefined();
        expect(infoArg.type.path).toBe('cosmwasm_std::MessageInfo');

        const msgArg = instantiate.args.find((x: any) => x.name === '__msg');
        expect(msgArg).toBeDefined();
        expect(msgArg.type.path).toBe('crate::msg::InstantiateMsg');

        const returnType = instantiate.returnType;
        expect(returnType).toBeDefined();
        expect(returnType.path).toBe('::std::result::Result');
        expect(returnType.typeParams).toContainEqual({ path: 'cosmwasm_std::Response', typeParams: [] });
        expect(returnType.typeParams).toContainEqual({ path: 'crate::error::ContractError', typeParams: [] });
    });

    function findItem<T>(items: any[], name: string) {
        return items.find(x => x.name === name) as T;
    }
});