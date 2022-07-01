# Introduction

> .bit to the crypto world is what Phone/Email to the Internet.

.bit is a blockchain-based, open source, decentralized cross-chain account system that provides a worldwide unique naming system with a .bit suffix that can be used in different scenarios, such as cryptocurrency transfer, domain name resolution, identity authentication, etc.

.bit is the first decentralized account system with broad compatibility, allowing users to register and manage their .bit accounts with any public chain address or even email.

The core elements of a .bit account contain the owner/manager, and the record (i.e. the data associated with). Unlike ENS, the owner/manager of .bit can be any public chain private key or even email; unlike DNS, .bit supports any type of record.

The structure of a .bit account is as follows:

<img src="./image-20210721120318336.png" alt=".bit Account Structure" />

.bit is a decentralized application running on [Nervos CKB](https://www.nervos.org/). .bit accounts and related records are stored on the permissionless blockchain. Nervos CKB is a PoW public chain with a highly open architecture using the UTXO model.

.bit has five main components:

1. **Core Protocol**

   This refers to a series of Lock Scripts and Type Scripts deployed on Nervos CKB. They define .bit accounts and the related operational standards for .bit accounts and are the concrete implementations of the .bit core protocols. 

2. **Keeper**

   Keeper is a set of off-chain programs that can be run by anyone without permission, and is responsible for triggering a series of transactions that conform to the core protocol. Running a Keeper earns .bit system rewards.

3. **Resolution Service**

   It resolves the global state of .bit based on the transactions on Nervos CKB and provides account resolution service to the public in the form of an interface.

4. **Client SDK**

   Includes SDKs in various languages to simplify the integration of mobile wallets, web wallets, server wallets and other .bit-related applications.

5. **Dapp UI**

   Users ultimately use various features of .bit through a variety of application interfaces. These applications can be used directly in the browser or can be integrated into popular wallet software.

The source code for all the components above can be found on our [Github repository](https://github.com/dotbitHQ). Also, developers can implement their Keeper, Resolution Service, Client SDK, and Dapp UI based on the Core Protocol.
