# 后端集成 .bit

## [das-account-indexer](https://github.com/dotbitHQ/das-account-indexer)
如果开发者需要在后端接入 .bit，那 [das-account-indexer](https://github.com/dotbitHQ/das-account-indexer) 将是您的不二选择。

它通过 CKB 节点持续从 CKB 链上读取数据，解析之后存储在本地数据库（RocksDB）中，并提供了高性能的 JSON-RPC 服务，供业务读取 .bit 的解析数据。

> 同时它也是 [das-sdk-js](./integration-frontend.md#das-sdk-js) 所依赖的后端服务。

> 部署 Indexer 需要依赖 CKB 节点，见 [CKB 节点和 CKB Indexer](#ckb-节点和-ckb-indexer)

> [das-account-indexer API 文档](https://github.com/dotbitHQ/das-account-indexer/blob/main/API.md)

#### 使用举例
下面以获取用户基本信息为例，说明一下 .bit Indexer 的用法。

**请求**
```shell
curl -X POST https://indexer-basic.did.id -d'{"jsonrpc": "2.0","id": 1,"method": "das_accountInfo","params": [{"account":"phone.bit"}]}'
```

**响应**
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

### 官方 Indexer 服务
考虑到服务的稳定性和业务个性化需求，我们建议自建 indexer 服务并跟进 .bit 官方的迭代更新。（是的！去中心化！）。

但同时，.bit 团队提供了有限功能的公开 Indexer 供开发者在早期阶段进行开发、调试。

#### 全功能 Indexer

```shell
https://indexer-v1.did.id
```
这个服务可以查询所有数据。但是一如既往，我们推荐开发者自建 Indexer。

```shell
https://indexer-not-use-in-production-env.did.id
```
这个服务可以查询所有数据，但如其域名所描述的，不推荐开发者在生产环境中使用该 Indexer

#### 基本 Indexer

```shell
https://indexer-basic.did.id
```

这个服务仅可查询账户信息和反向解析记录。具体接口如下：
- das_serverInfo
- das_reverseRecord
- das_accountInfo
- das_accountList
- ~~das_accountRecords~~

#### 频率限制
目前两个公开 Indexer 都没有进行频率限制，请按需使用。但如果频率超出服务承载能力，调用方会面临封禁 ip 的可能。

### CKB 节点和 CKB Indexer

.bit 的数据存储于 [Nervos CKB](https://github.com/nervosnetwork/ckb) 链上，因此自建 .bit Indexer 的开发者需要部署相应的 CKB 节点和 CKB Indexer。

#### 部署方式

具体部署方式请查看 CKB 官方指南：

> [CKB 节点运行指引](https://docs.nervos.org/docs/basics/guides/mainnet)  
> [CKB 节点 JSON-RPC 协议](https://github.com/nervosnetwork/ckb/blob/master/rpc/README.md)   
> [CKB Indexer 运行指引](https://github.com/nervosnetwork/ckb-indexer)  
> [CKB Indexer JSON-RPC 协议](https://github.com/nervosnetwork/ckb-indexer#rpc)

[//]: # (> [CKB Indexer 运行指引]&#40;https://github.com/nervosnetwork/mercury&#41;  )
[//]: # (> [CKB Indexer JSON-RPC 协议]&#40;https://github.com/nervosnetwork/mercury/blob/main/core/rpc/README.md&#41;)

#### 使用示例

##### CKB 节点
**请求**
```shell
curl -X POST https://mainnet.ckb.dev/rpc -H 'content-type:application/json' -d'{"id":42,"jsonrpc":"2.0","method":"get_tip_header","params":[]}'
```

**响应**
```json5
{"jsonrpc":"2.0","result":{"compact_target":"0x190a0088","dao":"0xac8ffb215ff346419e9af198c38b26000e53d3ad69969403002bdb8b29d71a07","epoch":"0x41c03f40014bb","extra_hash":"0x0000000000000000000000000000000000000000000000000000000000000000","hash":"0x13251222fc73918701aafc8edbb08057dde7ca95d9709990616fb8802b73af9d","nonce":"0x990fa3bc251b0000000000086019030c","number":"0x6a37e1","parent_hash":"0x4ea3a7a40877471c9a6b98306fbe453007a5306887ff8a05ab5393166f7d0f86","proposals_hash":"0x91cea8c15a4b9b0324561f629ff13aff4522f8a925671dfb8650256f7e68692d","timestamp":"0x180509c0e87","transactions_root":"0xf908c0afd0650812557edf3c346ad0f5ae9a44c24cc6cd58db4e6171631f7bbb","version":"0x0"},"id":42}
```

##### CKB Indexer
**请求**
```shell
curl -X POST https://mainnet.ckb.dev/indexer 7 -H 'content-type:application/json' -d'{"id":42,"jsonrpc":"2.0","method":"get_tip"}'
```
**响应**
```json5
{"jsonrpc":"2.0","result":{"block_hash":"0xc1d86e3986679d32090240f3e6abb641fe9d898976f8adb204b77d34ce11f3ec","block_number":"0x6a37db"},"id":42}
```

[//]: # (#### 官方节点)

[//]: # (> 这里是 Mercury 节点，并不是 indexer，暂时不兼容)

[//]: # (如果不想自己部署 CKB 节点或者处于测试阶段，可以使用 CKB 官方提供的公开节点：)

[//]: # (**CKB 节点**:)

[//]: # (`https://ckb.ckbstack.org/mainnet`)

[//]: # (**CKB Indexer**:)

[//]: # (`https://mercury.ckbstack.org/mainnet`)


#### 社区节点
如果不想自己部署 CKB 节点或者处于测试阶段，可以使用社区提供的公开节点（不推荐长期使用）：

> [免费 CKB 节点](https://talk.nervos.org/t/free-node-rpc-and-indexer-rpc-for-ckb-developers/4948)


#### 下一步
- 如果需要前端接入 .bit，请阅读 [前端接入](./integration-frontend.md)
- 如果需要查看设计指南，请查看 [设计、交互指南](./design-guide.md)