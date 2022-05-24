import { Annotation, CodeGroup, Defn, Expr, FunctionArg, MatchPattern, Path, Rust, Type, Val } from '../../src/rust';
import { cws } from '../../testHelpers/cws';
import { CWScriptCodegen, Source } from '../../src/codegen/codegen';
import { ContractDefn, Ident, InstantiateDefn, List, SourceFile } from '../../src/ast/nodes';

expect.extend({
    toContainRust(received: Rust[], prop: any, value: String) {
        if (!received.find(x => x[prop] === value)) {
            return {
                pass: false,
                message: () => `Node did not contain item with property ${prop} and value ${value}`
            };
        }
        return {
            pass: true,
            message: () => `Node contains item with property ${prop} and value ${value}`
        };
    },
    toContainUse(received, value) {
        if (getItemsOfType(received.items, 'Use').find(x => x['path'] === value)) {
            return {
                pass: true,
                message: () => `Found 'Use' with value ${value}`
            };
        }
        return {
            pass: false,
            message: () => `Did not find 'Use' with value ${value}`
        }
    },
    toContainAnnotation(received, value) {
        if (getItemsOfType(received.annotations, 'Annotation').find(x => x['value'] === value)) {
            return {
                pass: true,
                message: () => `Found 'Annotation' with value ${value}`
            };
        }
        return {
            pass: false,
            message: () => `Did not find 'Annotation' with value ${value}`
        }
    }
});

function getItemsOfType(received: Rust[], type: string) {
    return received.filter(x => x.constructor.name === type);
}

function findItem<T extends Rust>(items: Rust[], prop: string, value: string) {
    return items.find(x => x[prop] === value) as T;
}

describe('ast compiler', () => {
    it.only('compiles an addition contract with empty instantiate', () => {
      const ast = cws`
        contract CWTemplate {
          instantiate() {}

          exec add(a: u32, b: u32) {
            let foo = a + b;
          }
        }`;

      // act
      const codegen = new CWScriptCodegen([{ file: '/dev/null', ast }]);
      const rust = codegen.generateContract('CWTemplate', '/dev/null');
    //   console.log(rust.toRustString());
    });
});
