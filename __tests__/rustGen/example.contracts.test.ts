import { cws } from '../../testHelpers/cws';
import { CWScriptCodegen } from '../../src/codegen/codegen';

describe('ast compiler', () => {
    it.only('compiles noughts and crosses', () => {
        // arrange
        const ast = cws`
            contract NoughtsAndCrosses {
                exec {
                    register_player() {}
                    turn(x: u8, y: u8) {}
                    reset() {}
                }

                query {
                    get_game_state() -> struct GetGameStateResponse { owner: Addr, opponent: Option<Addr>, winner: Option<Addr>, board: String } {
                        
                    }
                }

                instantiate() {}
            }`;

        // act
        const codegen = new CWScriptCodegen([{ file: '/dev/null', ast }]);
        const rust = codegen.generateContract('NoughtsAndCrosses', '/dev/null');
        console.log(rust.toRustString())
    });
});
