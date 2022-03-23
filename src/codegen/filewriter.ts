import * as fs from 'fs';
import * as path from 'path';
import * as toml from '@iarna/toml';

const contractRustCode = `
pub mod msg {
  use schemars::JsonSchema;
  use serde::{Deserialize, Serialize};

  #[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
  pub struct InstantiateMsg {
      pub count: i32,
  }

  #[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
  #[serde(rename_all = "snake_case")]
  pub enum ExecuteMsg {
      Increment {},
      Reset { count: i32 },
  }

  #[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
  #[serde(rename_all = "snake_case")]
  pub enum QueryMsg {
      // GetCount returns the current count as a json-encoded number
      GetCount {},
  }

  // We define a custom struct for each query response
  #[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
  pub struct CountResponse {
      pub count: i32,
  }
}

pub mod state {
  use schemars::JsonSchema;
  use serde::{Deserialize, Serialize};

  use cosmwasm_std::Addr;
  use cw_storage_plus::Item;

  #[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
  pub struct State {
      pub count: i32,
      pub owner: Addr,
  }

  pub const STATE: Item<State> = Item::new("state");
}

pub mod contract {

  #[cfg(not(feature = "library"))]
  use cosmwasm_std::entry_point;
  use cosmwasm_std::{to_binary, Binary, Deps, DepsMut, Env, MessageInfo, Response, StdResult};
  use cw2::set_contract_version;

  use crate::error::ContractError;
  use crate::msg::{CountResponse, ExecuteMsg, InstantiateMsg, QueryMsg};
  use crate::state::{State, STATE};

  // version info for migration info
  const CONTRACT_NAME: &str = "crates.io:cws-contract-outpee";
  const CONTRACT_VERSION: &str = env!("CARGO_PKG_VERSION");

  #[cfg_attr(not(feature = "library"), entry_point)]
  pub fn instantiate(
      deps: DepsMut,
      _env: Env,
      info: MessageInfo,
      msg: InstantiateMsg,
  ) -> Result<Response, ContractError> {
      let state = State {
          count: msg.count,
          owner: info.sender.clone(),
      };
      set_contract_version(deps.storage, CONTRACT_NAME, CONTRACT_VERSION)?;
      STATE.save(deps.storage, &state)?;

      Ok(Response::new()
          .add_attribute("method", "instantiate")
          .add_attribute("owner", info.sender)
          .add_attribute("count", msg.count.to_string()))
  }

  #[cfg_attr(not(feature = "library"), entry_point)]
  pub fn execute(
      deps: DepsMut,
      _env: Env,
      info: MessageInfo,
      msg: ExecuteMsg,
  ) -> Result<Response, ContractError> {
      match msg {
          ExecuteMsg::Increment {} => try_increment(deps),
          ExecuteMsg::Reset { count } => try_reset(deps, info, count),
      }
  }

  pub fn try_increment(deps: DepsMut) -> Result<Response, ContractError> {
      STATE.update(deps.storage, |mut state| -> Result<_, ContractError> {
          state.count += 1;
          Ok(state)
      })?;

      Ok(Response::new().add_attribute("method", "try_increment"))
  }
  pub fn try_reset(
      deps: DepsMut,
      info: MessageInfo,
      count: i32,
  ) -> Result<Response, ContractError> {
      STATE.update(deps.storage, |mut state| -> Result<_, ContractError> {
          if info.sender != state.owner {
              return Err(ContractError::Unauthorized {});
          }
          state.count = count;
          Ok(state)
      })?;
      Ok(Response::new().add_attribute("method", "reset"))
  }

  #[cfg_attr(not(feature = "library"), entry_point)]
  pub fn query(deps: Deps, _env: Env, msg: QueryMsg) -> StdResult<Binary> {
      match msg {
          QueryMsg::GetCount {} => to_binary(&query_count(deps)?),
      }
  }

  fn query_count(deps: Deps) -> StdResult<CountResponse> {
      let state = STATE.load(deps.storage)?;
      Ok(CountResponse { count: state.count })
  }
}

pub mod error {
  use cosmwasm_std::StdError;
  use thiserror::Error;

  #[derive(Error, Debug)]
  pub enum ContractError {
      #[error("{0}")]
      Std(#[from] StdError),

      #[error("Unauthorized")]
      Unauthorized {},
      // Add any other custom errors you like here.
      // Look at https://docs.rs/thiserror/1.0.21/thiserror/ for details.
  }
}
`;

export class FileWriter {
  constructor() {}

  writeContract(p: string, contractName: string) {
    // first, create the new crate
    const crateRoot = path.join(p, contractName);
    fs.mkdirSync(crateRoot, { recursive: true });

    // .cargo
    const crateDotCargo = path.join(crateRoot, '.cargo');
    fs.mkdirSync(crateDotCargo, { recursive: true });

    // .cargo/config
    const crateDotCargoConfig = path.join(crateDotCargo, 'config');
    fs.writeFileSync(
      crateDotCargoConfig,
      `[alias]
wasm = "build --release --target wasm32-unknown-unknown"
unit-test = "test --lib"
schema = "run --example schema"`
    );

    const crateCargoToml = path.join(crateRoot, 'Cargo.toml');
    const crateCargoTomlContent = toml.stringify({
      package: {
        name: contractName,
        authors: ['William Chen <william@terran.one>'],
        edition: '2018',
        exclude: ['contract.wasm', 'hash.txt'],
        version: '0.1.0',
        metadata: {
          scripts: {
            optimize:
              'docker run --rm -v "$(pwd)":/code --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry cosmwasm/rust-optimizer:0.12.3\n',
          },
        },
      },
      dependencies: {
        'cw-storage-plus': '0.8.0',
        cw2: '0.8.1',
        schemars: '0.8.3',
        'cosmwasm-std': {
          version: '0.16.2',
        },
        'cosmwasm-storage': {
          version: '0.16.0',
        },
        serde: {
          'default-features': false,
          features: ['derive'],
          version: '1.0.127',
        },
        thiserror: {
          version: '1.0.26',
        },
      },
      'dev-dependencies': {
        'cosmwasm-schema': {
          version: '0.16.0',
        },
      },
      features: {
        backtraces: ['cosmwasm-std/backtraces'],
        library: [],
      },
      lib: {
        'crate-type': ['cdylib', 'rlib'],
      },
      profile: {
        release: {
          'codegen-units': 1,
          debug: false,
          'debug-assertions': false,
          incremental: false,
          lto: true,
          'opt-level': 3,
          'overflow-checks': true,
          panic: 'abort',
          rpath: false,
        },
      },
    });
    fs.writeFileSync(crateCargoToml, crateCargoTomlContent);

    const crateSrc = path.join(crateRoot, 'src');
    fs.mkdirSync(crateSrc, { recursive: true });

    const crateLib = path.join(crateSrc, 'lib.rs');
    fs.writeFileSync(crateLib, contractRustCode);
  }
}

const a = new FileWriter();

a.writeContract(process.cwd(), 'my-contract-name');
