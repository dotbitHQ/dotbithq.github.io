# Backend Integration

## [das-account-indexer](https://github.com/dotbitHQ/das-account-indexer)
If developer need to integrate .bit in backend, then [das-account-indexer](https://github.com/dotbitHQ/das-account-indexer) will be your best choice.

It continuously reads data from the CKB chain through the CKB node, parses it and stores it in the local database (RocksDB), and provides a high-performance JSON-RPC service for the business to read the .bit parsed data.

> In the meantime, it is the backend service [das-sdk-js](./integration-frontend.md#das-sdk-js) needed.

> Deploying Indexer need a CKB Node，see [CKB Node And CKB Indexer](#ckb-node-and-ckb-indexer)

> [das-account-indexer API Document](https://github.com/dotbitHQ/das-account-indexer/blob/main/API.md)

#### Usage Example
The following code takes getting basic user information as an example to illustrate the use of .bit Indexer.

**Request**
```shell
curl -X POST https://indexer-basic.did.id -d'{"jsonrpc": "2.0","id": 1,"method": "das_accountInfo","params": [{"account":"phone.bit"}]}'
```

**Response**
```json5
{
  "errno": 0,
  "errmsg": "",
  "data": {
    "out_point": {
      "tx_hash": "0xabb6b2f502e9d992d00737a260e6cde53ad3f402894b078f60a52e0392a17ec8",
      "index": 0
    },
    "account_info": {
      "account": "phone.bit",
      "account_id_hex": "0x5f560ec1edc638d7dab7c7a1ca8c3b0f6ed1848b",
      "next_account_id_hex": "0x5f5c20  f6cd95388378771ca957ce665f084fe23b",
      "create_at_unix": 1626955542,
      "expired_at_unix": 1658491542,
      "status": 1,
      "das_lock_arg_hex": "0x0559724739940777947c56c4f2f2c9211cd5130fef0559724739940777947c56c4f2f2c9211cd5130fef",
      "owner_algorithm_id": 5, // 3: eth personal sign, 4: tron sign, 5: eip-712
      "owner_key": "0x59724739940777947c56c4f2f2c9211cd5130fef",
      "manager_algorithm_id": 5,
      "manager_key": "0x59724739940777947c56c4f2f2c9211cd5130fef"
    }
  }
}
```

### Official Indexer Service
Considering the stability of the service and the personalized needs of the business, we suggest building you own Indexer service and follow up the official updates of .bit.(Yes! Decentralization!) 

At the same time, however, the .bit team provided a public Indexer with rate-limit for developers to develop and debug.


#### Full Functional Indexer

```shell
https://indexer-v1.did.id
```
This service can query all data. However, as always, we still recommend developers building their own Indexer.

```shell
https://indexer-not-use-in-production-env.did.id
```
This service can query all data, but as its domain name describes, it is not recommended that developers use this Indexer in production (yes! Decentralization!) . 

#### Basic Functional Indexer

```shell
https://indexer-basic.did.id
```

This service can only query basic account data and .bit Alias data. The specific interfaces are as follows:
- das_serverInfo
- das_reverseRecord
- das_accountInfo
- das_accountList
- ~~das_accountRecords~~

#### Rate Limit
Neither of the two public Indexers is currently rate-limited, so please use them on demand. 

However, if the frequency exceeds the capacity of the service, the caller faces the possibility of blocked by IP.


### CKB Node and CKB Indexer

The data of .bit is stored on [Nervos CKB](https://github.com/nervosnetwork/ckb) chain, so deploying your own .bit Indexer needs a corresponding CKB node and CKB Indexer.

#### Deploy Process

For details about the deployment mode, see the CKB official guide:

> [CKB Node Deployment Guide](https://docs.nervos.org/docs/basics/guides/mainnet)  
> [CKB Node JSON-RPC Protocol](https://github.com/nervosnetwork/ckb/blob/master/rpc/README.md)   
> [CKB Indexer Deployment Guide](https://github.com/nervosnetwork/ckb-indexer)  
> [CKB Indexer JSON-RPC Protocol](https://github.com/nervosnetwork/ckb-indexer#rpc)

#### Usage Example

##### CKB Node
**Request**
```shell
curl -X POST https://mainnet.ckb.dev/rpc -H 'content-type:application/json' -d'{"id":42,"jsonrpc":"2.0","method":"get_tip_header","params":[]}'
```

**Response**
```json5
{"jsonrpc":"2.0","result":{"compact_target":"0x190a0088","dao":"0xac8ffb215ff346419e9af198c38b26000e53d3ad69969403002bdb8b29d71a07","epoch":"0x41c03f40014bb","extra_hash":"0x0000000000000000000000000000000000000000000000000000000000000000","hash":"0x13251222fc73918701aafc8edbb08057dde7ca95d9709990616fb8802b73af9d","nonce":"0x990fa3bc251b0000000000086019030c","number":"0x6a37e1","parent_hash":"0x4ea3a7a40877471c9a6b98306fbe453007a5306887ff8a05ab5393166f7d0f86","proposals_hash":"0x91cea8c15a4b9b0324561f629ff13aff4522f8a925671dfb8650256f7e68692d","timestamp":"0x180509c0e87","transactions_root":"0xf908c0afd0650812557edf3c346ad0f5ae9a44c24cc6cd58db4e6171631f7bbb","version":"0x0"},"id":42}
```

##### CKB Indexer
**Request**
```shell
curl -X POST https://mainnet.ckb.dev/indexer 7 -H 'content-type:application/json' -d'{"id":42,"jsonrpc":"2.0","method":"get_tip"}'
```
**Response**
```json5
{"jsonrpc":"2.0","result":{"block_hash":"0xc1d86e3986679d32090240f3e6abb641fe9d898976f8adb204b77d34ce11f3ec","block_number":"0x6a37db"},"id":42}
```

#### Community Node
If you do not want to deploy your own CKB nodes or your application are in the testing stage, you can use the public nodes provided by the community (not recommended for long-term use) :

> [Free CKB Node](https://talk.nervos.org/t/free-node-rpc-and-indexer-rpc-for-ckb-developers/4948)


#### Next Step
- If you need to integrate .bit in frontend，please read [Frontend Integration](./integration-frontend.md)
- If you want to some design guide，please check [Design Guide](./design-guide.md)