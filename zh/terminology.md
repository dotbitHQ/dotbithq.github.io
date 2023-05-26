# 术语

### .BIT
##### .bit
一般代指整个 .bit 开源项目。
##### .bit 账户
指每一个独立的账户，如 alice.bit, bob.bit。
##### .bit 域名
.bit 账户的另一个叫法。

##### .bit 别名（Alias）
每个区块链地址都可以唯一映射到一个 .bit 账号，以方便用户识别这个地址的归属，优化用户体验。这个功能称之为 .bit 别名。

> 详见 [.bit 别名](./technical-details/alias.md)

##### .bit 子账户（SubDID）
每个主账户都可以分发自己的子账户，形态类似于 `child.parent.bit`。子账户可以用于任何社区，加强社区凝聚力。

> 详见 [.bit 子账户](./technical-details/subdid.md)

### 注册 .bit
##### 注册
指通过向 .bit 合约支付费用，获得 .bit 账户的过程。
##### 注册费
持有 .bit 账户需要按年支付一定的费用，不同字符长度的账户费用有所不同。
##### 存储费
每个账户的解析记录都存储在区块链上，需要一个固定大小存储空间，因此需要支付一定的存储费用。存储费用将在账户到期回收后退还。
##### 邀请人
任何 .bit 账户都可以作为邀请人。你在注册账户时填写一个 .bit 账户作为邀请人，你可以获得一定的优惠；别人在注册账户时，填写你的 .bit 账户作为邀请人，你也可以获得一定的奖励。
##### 渠道
任何集成 .bit 注册服务的产品（比如钱包）都可称之为渠道。如果用户通过渠道方完成注册，渠道方可以获得一定比例的注册费用。
##### 注册商
为用户提供注册界面和支付方式的组织/个人。
##### 链上时间
指区块链链上的时间，通常稍微落后于现实世界时间，也不像现实世界时间那样均匀流逝。

### 管理 .bit
##### 所有者
每个账户都有一个所有者（owner），所有者拥有 .bit 账户的所有权，可以修改所有者和管理员。
##### 管理员
每个账户都有一个管理员（manager），管理员拥有 .bit 账户的管理权，可以修改账户的解析记录。
##### 解析记录
.bit 账户上所关联的每一条数据，比如一个 BTC 地址，一个 Twitter 账户，称之为一条解析记录。

### .bit 合约
##### Nervos
.bit 合约部署在 [Nervos](https://nervos.org) 链上。Nervos 是一个基于 Cell（UTXO）模型的，具有智能合约的公链。

##### Cell
Cell 是 Nervos 最基本的组成单位。Cell 是从比特币的 UTXO 模型抽象出来的一个概念，可以承载很多不同类型的数据：Token，代码，JSON 等等。

根据用途不同，.bit 用到的 Cell 有不同的称呼：
- AccountCell：承载 .bit 账号的基本单位，一个主账号有一个 AccountCell。
- IncomeCell：承载 .bit 生态内 CKB 余额的 Cell，经常用于返佣，奖励等场景。
- BalanceCell：承载 .bit 账号余额的 Cell。

> 查看所有的 Cell 类型：[Cell 协议 v1](https://github.com/dotbitHQ/das-contracts/blob/master/docs/zh-hans/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/Cell-%E7%BB%93%E6%9E%84%E5%8D%8F%E8%AE%AE.md)

### 第三方术语
##### coin_type
符合 SLIP-0044 规范的数字字符串，用来代表某一个代币或公链。

在 .bit 中，用到 coin_type 的地方主要是[数据容器](./technical-details/data-container.md)中的解析记录，用以区分不同的公链地址。

> 查看完整的 [SLIP-0044](https://github.com/satoshilabs/slips/blob/master/slip-0044.md)

##### chain_id
符合 EIP-155 规范的以太坊网络标识。用于区别不同的 EVM 兼容链/网络。

> 查看完整的 `chain_id` 网络列表：[ChainList](https://chainlist.org/)