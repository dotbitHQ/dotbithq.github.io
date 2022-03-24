---
sidebarDepth: 1
---

# .bit 开源库
我们提供了多个不同的开源库来满足不同场景的开发需求。我们同时欢迎社区贡献更多的开源仓库来繁荣整个 .bit 生态。

> 品牌升级之后，我们将 DAS 品牌升级为了 .bit，但是为了保持向前兼容，开源库暂时保持 DAS 的称呼。

## 前端

### [das-sdk-js](https://github.com/dotbitHQ/das-sdk-js)
这是一个用于解析 .bit 账户数据的 JS SDK。

### [das-ui-shared](https://github.com/dotbitHQ/das-ui-shared)
这是一个包含了若干可复用的常用函数和 UI 组件的仓库，可用于构建和 .bit 官方设计风格相似的项目。

## 后端

### [das-account-indexer](https://github.com/dotbitHQ/das-account-indexer)
这是一个简单的后端 JSON-RPC 服务，提供了对于 .bit 账户的数据和别名的解析。

同时这也是 [das-sdk-js](#das-sdk-js) 所依赖的后端服务。

### [das-database](https://github.com/dotbitHQ/das-database)
这是一个简单的区块解析工具，可以从 CKB 公链上解析 .bit 的不同的数据（如注册、编辑、买卖、转移等等）并存入本地数据库。

### [das-lib](https://github.com/dotbitHQ/das-lib)
这个仓库是很多 .bit 开源工具的底层依赖。它提供了包括以下的很多功能：
- 组装交易
- 解析交易
- 签名交易
- 缓存链上数据
- .bit 的 Molecule SDK

### [das-register](https://github.com/dotbitHQ/das-register)
.bit 注册服务的后端。你可以 fork 这个仓库来构建你自己的 .bit 注册网站，就像 [https://app.did.id](https://app.did.id) 一样。

## 合约

### [das-contracts](https://github.com/dotbitHQ/das-contracts)
本仓库是 .bit 合约的核心仓库，这在 CKB 中被称为 `type script`。他只可以在 `ckb-vm` 环境中被执行，该环境是一个实现了 RISC-V 指令集的虚拟机。

### [das-types](https://github.com/dotbitHQ/das-types)
.bit 选择使用 Molecule 作为一个数据序列化的标准，该标准由 Nervos 团队维护。

### [das-contract-reverse](https://github.com/dotbitHQ/das-contract-reverse)
部署在 EVM 兼容链上的 .bit 别名服务的合约。

### [cell-data-generator](https://github.com/dotbitHQ/cell-data-generator)
生成所有 .bit 所需要的 cells.
