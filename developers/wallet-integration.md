# Wallet Integration

Wallets can integrate .bit on two levels: the transfer interface supports .bit accounts and the onboarding of .bit registration services.

Integrating .bit into your wallet can:

1. improve user transfer experience and security
2. get 10%-20% share of registration fees
3. showcase the wallet brand on the .bit homepage and get community support from .bit.



## Transfer interface supports .bit account

<img src="./image-20210718113458550.png" alt=".bit in Wallet" style="zoom:50%;" />



Users can transfer money without having to copy and paste complex blockchain addresses, but simply fill in the recipient's .bit account to make the transfer. The wallet can translate the .bit account into the corresponding recipient address.

Wallets just need to integrate `das-js-sdk` and simply call the corresponding interface to complete the access. [View access documentation](https://github.com/dotbitHQ/das-sdk-js).


### Fully Integration

If you want to integrate .bit, please follow the following steps:

> Before you start, please read through the doc in [docs.did.id](https://docs.did.id/)，which will help you speed up your integration.
> The key contents:
> [Terminology](../terminology),
> [FAQ](../faq),
> [Open Registration Rules](../register-das/open-registration-rules),
> [Data Namespaces](../developers/records-key-namespace)

#### 0. Run CKB Node and Indexer

> You can skip this step if you already have a CKB node running. 

The data of .bit is storing on [Nervos CKB](https://github.com/nervosnetwork/ckb)，so that you need to deploy a CKB node.

If you don't want to CKB node yourself, or you are still in testing stage, you can use the public node provided by CKB community (It's not recommended for long term use): [Free CKB Node](https://talk.nervos.org/t/ckb-rpc-indexer-rpc/4949)

[CKB Node Guide](https://docs.nervos.org/docs/basics/guides/mainnet)

[Free CKB Node RPC & Indexer RPC](https://talk.nervos.org/t/ckb-rpc-indexer-rpc/4949)

#### 1. Run .bit Account Indexer
[das-account-indexer](https://github.com/dotbitHQ/das-account-indexer) is the storage layer and API layer of .bit.

It reads data from CKB chain through CKB node continuously, and saves the resolved data in local database(RocksDB), providing a high performance JSON-RPC service, which can be used to read .bit data by application.

For the sake of stability of the integrated services, we recommend running your own indexer service and keep update to .bit team's update.

[.bit Indexer Doc](https://github.com/dotbitHQ/das-account-indexer)


#### 2. Integrate SDK

[das-sdk-js](https://github.com/dotbitHQ/das-sdk-js) encapsulate the invocation process to JSON-RPC of indexer.

You can simply use this SDK and invoke the corresponding method to finish the integration.

[das-sdk-js Doc](https://github.com/dotbitHQ/das-sdk-js)

> Attention, the application should always validate the validity of the data, as there is no way to restrict the user's input on chain.


#### 3. Integrate API
If you need to get .bit account data in backend side rather than on client side or frontend, you can query .bit Indexer API instead of sdk.

[.bit Indexer API Doc](https://github.com/dotbitHQ/das-account-indexer#searchaccount)

We recommend you running your own Indexer to meet your customization need. However, we .bit team provide feature-limited Indexer for developers' convenient:

> The fully functional Indexer. But as it says in its domain, it is not recommended using in production.
> 
> https://indexer-not-use-in-production-env.did.id

> This Indexer can only query account basic info and .bit Alias.
>
> https://indexer-basic.did.id


```shell
curl --location --request POST 'https://indexer-basic.did.id' \
--header 'Content-Type: application/json' \
--data-raw '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "das_searchAccount",
    "params": [
        "dasdeveloper.bit"
    ]
}'
```

#### 4. UX Pattern

Considering the feature of .bit, we have summarized several common UX/UI patterns for different scenarios.


Developers can refer to the UX/UI guide to determine the actual appearance in your application. 

[UX/UI Guide](https://sedate-pleasure-684.notion.site/DAS-006aa490976c474e90725ce16465b95e)

#### 5. Common Resources
[**.bit Namespaces**](https://github.com/dotbitHQ/cell-data-generator/blob/master/data/record_key_namespace.txt) The key of every .bit account's data must be in the namespaces, including address, profile, dweb, etc.


## Onboard .bit Registration Service

The .bit registration service will be uploaded to the wallet's Dapp store, users will complete .bit registration through the wallet, and the wallet will get the corresponding registration fee share.

.bit registration service information.

> Name: .bit
>
> URL: https://did.id?inviter=xxxwallet.bit&channel=xxxwallet.bit
>
> LOGO material: [Download](https://projects.invisionapp.com/boards/QS42CVJRP25/#/6828463/200529574)
>
> English introduction: Cross-chain decentralized account system
>
> Chinese introduction: Cross-chain decentralized account system
>
> Applicable public chains: ETH/TRX

When integrating .bit registration service, please make sure to fill in `inviter` and `channel` information in the URL to get the share of registration fee ([view share ratio](.. /contribute-to-das/build-together.md)). `inviter` and `channel` need to be legitimate registered .bit accounts. Users can change `inviter` information manually in the registration screen, but cannot change `channel` information.



## Show your wallet on .bit official website

Please [submit a Pull Request](https://github.com/dotbitHQ/da.systems) to our official website repository after completing the integration, and we will display your brand on the .bit official website as soon as possible.
