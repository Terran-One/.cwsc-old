pub mod msg {
    use schemars::JsonSchema;
    use serde::{Deserialize, Serialize};
    #[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
    pub struct InstantiateMsg {
        name: String,
        symbol: String,
        decimals: u8,
        initial_balances: ::std::vec::Vec<Cw20Coin>,
        mint: String,
    }

    #[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
    #[serde(rename_all = "snake_case")]
    pub enum ExecuteMsg {
        Transfer {
            recipient: Addr,
            amount: Uint128,
        },
        Burn {
            amount: Uint128,
        },
        Send {
            contract_addr: Addr,
            amount: Uint128,
            msg: Binary,
        },
        Mint {
            recipient: Addr,
            amount: Uint128,
        },
    }

    #[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
    #[serde(rename_all = "snake_case")]
    pub enum QueryMsg {
        Balance { address: Addr },
        TokenInfo {},
    }
}

pub mod state {
    use cosmwasm_std::*;
    use cw_storage_plus::{Item, Map};
    use schemars::JsonSchema;
    use serde::{Deserialize, Serialize};
    pub const TOKEN_INFO: Item<TokenInfo> = Item::new("token_info");
    pub const BALANCES: Map<Addr, Uint128> = Map::new("balances");
}

pub mod error {
    use cosmwasm_std::StdError;
    use thiserror::Error;

    #[derive(Error, Debug)]
    pub enum ContractError {
        #[error("{0}")]
        Std(#[from] StdError),

        #[error("InvalidZeroAmount")]
        InvalidZeroAmount {},
        #[error("Unauthorized")]
        Unauthorized {},
    }
}

pub mod contract {

    #[cfg(not(feature = "library"))]
    use cosmwasm_std::entry_point;
    use cosmwasm_std::{to_binary, Binary, Deps, DepsMut, Env, MessageInfo, Response, StdResult};

    use crate::error::ContractError;
    use crate::msg::{CountResponse, ExecuteMsg, InstantiateMsg, QueryMsg};
    use crate::state::{State, STATE};

    #[cfg(not(feature = "library"), entry_point)]
    pub fn instantiate(
        __deps: DepsMut,
        __env: Env,
        __info: MessageInfo,
        __msg: InstantiateMsg,
    ) -> Result<Response, ContractError> {
        let __0 = TOKEN_INFO.load(&mut deps.storage, &__ - 1)?;
    }
}
