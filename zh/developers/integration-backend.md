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
考虑到服务的稳定性和业务个性化需求，我们建议自建 indexer 服务并跟进 .bit 官方的迭代更新。

但同时，.bit 团队提供了有限功能的公开 Indexer 供开发者在早期阶段进行开发、调试。

#### 全功能 Indexer

```shell
https://indexer-not-use-in-production-env.did.id
```
这个服务可以查询所有数据，但如其域名所描述的，不推荐开发者在生产环境中使用该 Indexer（是的！去中心化！）。

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
> [CKB Indexer 运行指引](https://github.com/nervosnetwork/mercury)  
> [CKB Indexer JSON-RPC 协议](https://github.com/nervosnetwork/mercury/blob/main/core/rpc/README.md)

#### 使用示例

##### CKB 节点
**请求**
```shell
curl -X POST https://ckb.ckbstack.org/mainnet -H 'content-type:application/json' -d'{"id":42,"jsonrpc":"2.0","method":"get_tip_header","params":[]}'
```

**响应**
```json5
{"jsonrpc":"2.0","result":{"compact_target":"0x190dab53","dao":"0xc888253d5572a940e9c986e322752600aa7ce0a27f4273030033b709a4161807","epoch":"0x5ad04be00140c","extra_hash":"0x0000000000000000000000000000000000000000000000000000000000000000","hash":"0xda7e7cef5aac0a0261747432071e406d80e55a8768d281e1b2f4b1fc94e70158","nonce":"0x511790408c0f000000000001e58a1814","number":"0x6735a5","parent_hash":"0x51d1a69b9502ae7d8d5cd5a6d5c35fa998c75597cf2a3ac72c9efcc7f2a74eee","proposals_hash":"0x30452ba4a76719a4e2960d6824c9d53ed8f6782938a0fd55d3ac75ca6b7e57c3","timestamp":"0x17fba051826","transactions_root":"0xf64815d19d93d70fb74faa65ed420ca8978d6962698d4c59490a70bdb706b87b","version":"0x0"},"id":42}
```

##### CKB Indexer
**请求**
```shell
curl -X POST https://mercury.ckbstack.org/mainnet -H 'content-type:application/json' -d'{"id":42,"jsonrpc":"2.0","method":"get_block_info","params":[{"block_number":10,"block_hash":null}]}'
```
**响应**
```json5
{"jsonrpc":"2.0","result":{"block_number":10,"block_hash":"0x5b65f681462648d109bfe17b78574d938e2e92752efbab8a41b6f8d982369b85","parent_hash":"0x629f92aedb4d7d71bf55523b2709e1b7d6f67f8bef9f7abc67bad6026cea5da2","timestamp":1573853448001,"transactions":[{"tx_hash":"0x672afe6ede97904ccddcbb38910c7e1c5aa9066b7e6715ee9e72d0153a471341","records":[],"fee":0,"burn":[],"timestamp":1573853448001}]},"id":42}
```

#### 官方节点
如果不想自己部署 CKB 节点或者处于测试阶段，可以使用 CKB 官方提供的公开节点：

**CKB 节点**:

`https://ckb.ckbstack.org/mainnet`

**CKB Indexer**:

`https://mercury.ckbstack.org/mainnet`


#### 社区节点
如果不想自己部署 CKB 节点或者处于测试阶段，可以使用社区提供的公开节点（不推荐长期使用）：

> [免费 CKB 节点](https://talk.nervos.org/t/ckb-rpc-indexer-rpc/4949)


#### 下一步
- 如果需要前端接入 .bit，请阅读 [前端接入](./integration-frontend.md)
- 如果需要查看设计指南，请查看 [设计、交互指南](./design-guide.md)