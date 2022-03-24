---
sidebarDepth: 1
---

# .bit Libraries
We provided different open-source libraries to meet different development scenarios. We also welcome the community to contribute more open source projects to flourish the entire .bit ecosystem.

> After the branding upgrade, we upgraded the DAS branding to .bit, but to maintain forward compatibility, the open source library will remain the DAS brand for now.

## Frontend

### [das-sdk-js](https://github.com/dotbitHQ/das-sdk-js)
This is a JS SDK for resolving .bit account data.

### [das-ui-shared](https://github.com/dotbitHQ/das-ui-shared)
This is a repository of several reusable common functions and UI components that can be used to build projects that are similar to the official .bit design style.

## Backend

### [das-account-indexer](https://github.com/dotbitHQ/das-account-indexer)


### [das-database](https://github.com/dotbitHQ/das-database)
A block parser tool that allows extraction of various data types on .bit (register, edit, sell, transfer ...) from CKB chain.

### [das-lib](https://github.com/dotbitHQ/das-lib)
This repo is a base dependence for most tool in .bit. It includes but not limited to the following features:
- Assembly transaction
- Parse transaction
- Sign transaction
- Cache for query data on chain
- Molecule SDK for .bit

### [das-register](https://github.com/dotbitHQ/das-register)
Backend of .bit registration service. You can use this repo to build your own .bit registration website, just like https://app.did.id do.

## Contract

### [das-contracts](https://github.com/dotbitHQ/das-contracts)
This repository is open source for DAS contracts which also called "type script" in CKB. They can only execute in ckb-vm environment which a pure software implementation of the RISC-V instruction set.

### [das-types](https://github.com/dotbitHQ/das-types)
.bit choose Molecule as data serialization standard, this serialization system is maintaining by Nervos.

### [das-contract-reverse](https://github.com/dotbitHQ/das-contract-reverse)
This repository contains the .bit Alias contracts deployed on EVM-compatible chain.

### [cell-data-generator](https://github.com/dotbitHQ/cell-data-generator)
Generate all the cells that .bit need.
