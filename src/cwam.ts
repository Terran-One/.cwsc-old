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
        key: { type: 'Addr' },
        value: {
          type: 'Uint128',
        },
      },
    },
  },
  instantiate: {
    args: {
      name: { type: 'String' },
      symbol: { type: 'String' },
      decimals: { type: 'u8' },
      initial_balances: { vec: { $symbol: 'Cw20Coin' } },
    },
    body: [
      {
        let: {
          name: 'total_supply',
          value: {},
        },
      },
      {
        forIn: {
          bindings: {
            destructure: '',
            keys: ['address', 'amount'],
          },
          body: [],
        },
      },
    ],
  },
  exec: {},
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
