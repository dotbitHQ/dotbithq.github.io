# 在钱包中集成 DAS

钱包可以在两个层面集成 DAS：转账界面支持填写 DAS 账户，上架 DAS 注册服务。

将 DAS 集成到你的钱包产品中，可以获得：

1. 提升用户转账体验和安全性
2. 获取10%-20%的注册费用分成
3. 在 DAS 官网首页展示你的钱包品牌，获得 DAS 的社区支持。


## 转账界面支持填写 DAS 账户

<img src="image-20210718113458550.png" alt="DAS in Wallet" style="zoom:50%;" />

在转账界面支持填写 DAS 账户，意味着用户转账时，无需再复制粘贴复杂的区块链地址，只需填入收款方的 DAS 账户即可进行转账。钱包可以将 DAS 账户翻译成对应的收款地址。

若要支持 DAS 账户解析，请按照以下步骤进行：

### 1. 运行 DAS Account Indexer
[das_account_indexer](https://github.com/DeAccountSystems/das_account_indexer) 是 DAS 的数据存储层和 API 接口层。

它持续从 CKB 链上读取数据，解析之后存储在本地数据库（RocksDB）中，并提供了高性能的 JSON-RPC 服务，供业务读取 DAS 的解析数据。

为了接入方业务的稳定性，我们建议自建 indexer 并跟进 DAS 官方的迭代更新。

[查看 indexer 文档](https://github.com/DeAccountSystems/das_account_indexer)


### 2. 接入 SDK

[das-js-sdk](https://github.com/DeAccountSystems/das-js-sdk) 封装了对于 indexer 的 JSON-RPC 的调用。

钱包只需集成该 SDK，并简单的调用对应的接口（数据由 DAS Account Indexer 提供），即可完成接入。

[查看接入文档](https://github.com/DeAccountSystems/das-js-sdk)。


### 3. 交互模式

针对不同场景和 DAS 的特点，我们总结了几种常见的交互模式/设计规范。

接入方可以参考设计规范，并结合自己的实际场景，来决定 DAS 在钱包中的实际效果。

[查看设计规范](todo:)


## 上架 DAS 注册服务

将 DAS 注册服务上架到钱包的 Dapp 广场/商店，用户通过钱包完成 DAS 注册，钱包可以获得相应的注册费用分成。



DAS 注册服务信息：

> 名称：DAS
>
> URL：https://da.systems?inviter=xxxwallet.bit&channel=xxxwallet.bit
>
> LOGO素材：[Download](https://projects.invisionapp.com/boards/QS42CVJRP25/#/6828463/200529574)
>
> 英文简介：Cross-chain decentralized account system
>
> 中文简介：跨链去中心化账户系统
>
> 适用的公链：ETH/TRX



上架 DAS 注册服务时，请务必在 URL 中填写`inviter`及`channel`信息，以获得注册费用分成（[查看分成比例](../gong-tong-jian-she/build-together.md)）。`inviter`及`channel`需是合法的已注册的 DAS 账户。用户可以在注册界面手动修改`inviter`信息，但无法修改`channel`信息。



## 在 DAS 官网展示你的钱包

如果你的钱包完成了上述的集成工作，可以在 DAS 官网中展示你的钱包品牌及链接。请在完成集成工作后，[向我们的官网仓库提交 Pull Request](https://github.com/DeAccountSystems/da.systems)，我们将尽快将你的品牌展示到 DAS 官网。

