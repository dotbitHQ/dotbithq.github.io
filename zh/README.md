# 简介

> .bit 之于加密世界，如 手机号/Email 之于互联网。

.bit 是基于区块链的，开源的，跨链去中心化账户系统。.bit 提供了以 .bit 为后缀的全局唯一的命名体系，可用于加密资产转账，域名解析，身份认证等场景。作为去中心化账户系统，有且仅有用户拥有 .bit 账户的完整控制权和使用权。同时，.bit 也是第一个具有广泛兼容性的去中心化账户系统，可使用任何公链地址甚至电子邮件来注册和管理 .bit 账户。

.bit 账户的核心要素是：所有者/管理者，解析记录（即其关联的数据）。与 ENS 不同，.bit 的所有者/管理者可以是任意公链私钥甚至是邮箱；与 DNS 不同，.bit 的支持任意的解析记录类型。

.bit 账户的结构如下：

<img src="./image-20210620235300201.png" alt=".bit 账户结构" />

.bit 是一个去中心化应用，运行在 [Nervos CKB](https://www.nervos.org/) 上。.bit 账户以及账户的解析记录均存储在链上。Nervos CKB 是一条采用 UTXO 模型的，架构高度开放的 PoW 公链。.bit 以**开源**的方式提供一套完整的组件，包括：

1. **Core Protocol**

   指一系列部署在 Nervos CKB 上的 Lock Script 及 Type Script，它们定义了 .bit 账户以及 .bit 账户的相关操作标准，是 .bit 核心协议的具体实现。

2. **Keeper**

   Keeper 是一组任何人都可以无需许可的运行的链下程序，负责触发一系列符合核心协议的交易，是 .bit 系统的关键模块。运行 Keeper 可以获得 .bit 的系统奖励。

3. **Resolution Service**

   根据 Nervos CKB 上的交易解析出 .bit 的全局状态，并以接口的形式对外提供账户解析服务。

4. **Client SDK**

   包含各种语言的 SDK，用于简化移动端钱包，网页版钱包，服务端钱包以及其他 .bit 相关应用的集成工作。

5. **Dapp UI**

   用户最终通过各种应用界面使用 .bit 的各项功能。这些应用可以直接在浏览器中使用，也可以集成到流行的钱包软件中。

以上所有组件的源代码，都可以在我们的 [Github 仓库](https://github.com/dotbitHQ)中找到。同时，开发者可以根据 Core Protocol 实现自己的 Keeper， Resolution Service，Client SDK，Dapp UI。

