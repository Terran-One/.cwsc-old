# CW20 in CWScript

This repository contains a CWScript translation of CW20 from CosmWasm-Plus.

## Included Files

- `src/`: source files
  - `cw20-interfaces.cws`: CW20 interface and extensions
  - `cw20-base.cws`: base CW20 contract implementation
  - `my-custom-token.cws`: custom token example
- `cwsconfig.toml`: CWScript project config
- `build/`: built items (Rust workspace)
  - `contracts/`: output for contract crates
  - `packages/`: output for packages (interfaces + contract types)
  - `Cargo.toml`: output for

## Usage

This is a standard CWScript project, and all the instructions for building are included in `cwsconfig.toml`.

```sh
$ cwsc build
```

### Generate documentation

You can run the following to build CWSpec documentation:

```sh
$ cwsc gen docs
```

### Generate client libs

```sh
$ cwsc gen client-lib
```

### Generate contract diagram

```
$ cwsc gen diagram
```
