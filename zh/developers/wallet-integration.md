# 钱包集成 .bit

钱包可以在两个层面集成 .bit：转账界面支持填写 .bit 账户，上架 .bit 注册服务。

将 .bit 集成到你的钱包产品中，可以获得：

1. 提升用户转账体验和安全性
2. 获取10%-20%的注册费用分成
3. 在 .bit 官网首页展示你的钱包品牌，获得 .bit 的社区支持。


## 转账界面支持填写 .bit 账户

<img src="./image-20210718113458550.png" alt=".bit in Wallet" style="zoom:50%;" />

在转账界面支持填写 .bit 账户，意味着用户转账时，无需再复制粘贴复杂的区块链地址，只需填入收款方的 .bit 账户即可进行转账。钱包可以将 .bit 账户翻译成对应的收款地址。

### 完全接入

若要支持 .bit 账户解析，请按照以下步骤进行：

> 建议在着手接入前，通读 [docs.did.id](https://docs.did.id/) 文档，可以提高开发者的接入效率。
> 重点内容：
> [术语](https://docs.did.id/docs/v/chinese-1/terminology), 
> [常见问题](https://docs.did.id/docs/v/chinese-1/faq), 
> [开放注册规则](https://docs.did.id/docs/v/chinese-1/zhu-ce-das/open-registration-rules), 
> [解析记录命名空间/支持的公链](https://docs.did.id/docs/v/chinese-1/kai-fa-zhe/records-key-namespace)

#### 0. 运行 CKB 节点和 Indexer

> 如果您已有运行中的 CKB 节点，可以跳过该步骤。

.bit 的数据存储于 [Nervos CKB](https://github.com/nervosnetwork/ckb) 链上，因此需要开发者部署一个 CKB 节点。

如果不想自己部署 CKB 节点或者处于测试阶段，可以使用社区提供的公开节点（不推荐长期使用）：[免费 CKB 节点](https://talk.nervos.org/t/ckb-rpc-indexer-rpc/4949)。

[CKB 节点运行指引](https://docs.nervos.org/docs/basics/guides/mainnet)

[免费 CKB 节点 RPC 和 Indexer RPC](https://talk.nervos.org/t/ckb-rpc-indexer-rpc/4949)

#### 1. 运行 .bit Account Indexer
[das_account_indexer](https://github.com/dotbitHQ/das_account_indexer) 是 .bit 的数据存储层和 API 接口层。

它通过 CKB 节点持续从 CKB 链上读取数据，解析之后存储在本地数据库（RocksDB）中，并提供了高性能的 JSON-RPC 服务，供业务读取 .bit 的解析数据。

为了接入方业务的稳定性，我们建议自建 indexer 服务并跟进 .bit 官方的迭代更新。

[查看 indexer 文档](https://github.com/dotbitHQ/das_account_indexer)


#### 2. 接入 SDK

[das-sdk-js](https://github.com/dotbitHQ/das-sdk-js) 封装了对于 indexer 的 JSON-RPC 的调用。

钱包只需集成该 SDK，并简单的调用对应的接口（数据由 .bit Account Indexer 提供），即可完成接入。

[查看 das-sdk-js 文档](https://github.com/dotbitHQ/das-sdk-js)

> 注意，应用在得到用户设置的 record 的 value 后，要对 value 进行合法性校验。


#### 3. 接入 API 
如果您的接入场景需要后台获取 .bit 账户数据（而非直接前端/客户端请求），可以直接请求 Indexer 的 API 而不使用 sdk。

[Indexer API 文档](https://github.com/dotbitHQ/das_account_indexer#searchaccount)

我们建议开发者自建 Indexer 以满足个性化需求。但 .bit 团队提供了有限功能的 Indexer 供开发者使用。

完整功能的 Indexer，但如其域名所描述的，开发者不应在生产环境中使用该 Indexder。
> https://indexer-not-use-in-production-env.did.id

仅可查询账户信息和反向解析记录的 Indexer
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

#### 4. 交互模式

针对不同场景和 .bit 的特点，我们总结了几种常见的交互模式/设计建议。

接入方可以参考交互设计指南，并结合自己的实际场景，来决定 .bit 在钱包中的实际效果。

[查看交互设计指南](https://sedate-pleasure-684.notion.site/DAS-006aa490976c474e90725ce16465b95e)

#### 5. 常用资源
[**.bit 记录命名空间**](https://github.com/dotbitHQ/cell-data-generator/blob/master/data/record_key_namespace.txt) 每一个 .bit 账户的解析记录的 key 都必须在命名空间中，包括 address/profile/dweb 等类型。

## 上架 .bit 注册服务

将 .bit 注册服务上架到钱包的 Dapp 广场/商店，用户通过钱包完成 .bit 注册，钱包可以获得相应的注册费用分成。



.bit 注册服务信息：

> 名称：.bit
>
> URL：https://did.id?inviter=xxxwallet.bit&channel=xxxwallet.bit
>
> LOGO素材：[Download](https://projects.invisionapp.com/boards/QS42CVJRP25/#/6828463/200529574)
>
> 英文简介：Cross-chain Decentralized Account System
>
> 中文简介：跨链去中心化账户系统
>
> 适用的公链：ETH/TRX



上架 .bit 注册服务时，请务必在 URL 中填写`inviter`及`channel`信息，以获得注册费用分成（[查看分成比例](../../v/chinese-1/gong-tong-jian-she/build-together.md)）。`inviter`及`channel`需是合法的已注册的 .bit 账户。用户可以在注册界面手动修改`inviter`信息，但无法修改`channel`信息。



## 在 .bit 官网展示你的钱包

如果你的钱包完成了上述的集成工作，可以在 .bit 官网中展示你的钱包品牌及链接。请在完成集成工作后，[向我们的官网仓库提交 Pull Request](https://github.com/dotbitHQ/da.systems)，我们将尽快将你的品牌展示到 .bit 官网。

