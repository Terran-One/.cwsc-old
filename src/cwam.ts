import { binaryOptions } from 'yaml/types';

let contract = {
  name: 'Cw20Base',
  error: {
    Unauthorized: {
      struct: {
        name: 'Unauthorized',
        members: {},
      },
    },
  },
  event: {
    Transfer: {
      struct: {
        name: 'Transfer',
        members: {
          sender: { type: 'Addr' },
          recipient: { type: 'Addr' },
          amount: { type: 'Uint128' },
        },
      },
    },
    Burn: {
      struct: {
        name: 'Burn',
        members: {
          sender: { type: 'Addr' },
          amount: { type: 'Uint128' },
        },
      },
    },
  },
  state: {
    token_info: {
      item: {
        $symbol: 'TokenInfo',
      },
    },
    balances: {
      map: {
        mapKeys: [{ type: 'Addr' }],
        value: {
          type: 'Uint128',
        },
      },
    },
  },
  symbols: {
    TokenInfo: {
      struct: {
        name: 'TokenInfo',
        members: {
          name: { type: 'String' },
          symbol: { type: 'String' },
          decimals: { type: 'u8' },
          total_supply: { type: 'Uint128' },
        },
      },
    },
  },
};

export class CWSContract {
  protected state: any = {};

  public addStateItem(stateKey: string, itemType: any) {
    this.state[stateKey] = {
      item: itemType,
    };
  }

  public addStateMap(stateKey: string, mapKeys: any[], mapType: any) {
    this.state[stateKey] = {
      map: {
        mapKeys,
        mapType,
      },
    };
  }
}

export class CWSContract {}
