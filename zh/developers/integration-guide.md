# .bit 接入指南

> 在品牌升级之后，我们把 DAS 品牌升级为了 .bit。但是为了保证向前兼容性，开源库暂时保持了 `DAS` 字样。 

## 接入前准备
建议在着手接入前，通读 [docs.did.id](https://docs.did.id/zh) 文档，可以提高开发者的接入效率。

重点内容：
- [术语](../terminology)
- [常见问题](../faq)
- [开放注册规则](../register-das/open-registration-rules)
- [解析记录命名空间/支持的公链](./records-key-namespace)

## 接入指引

### 应用举例 
如果不知道有什么开发思路，可以看这里获得灵感。

> [应用举例](./build-application.md)

### 前端接入
如果您的应用需要在 Web 前端进行接入，那么可以查看这个指引。

> [Web 前端接入指引](./integration-frontend.md)

### 后端接入 
如果您的应用需要在后端对 .bit 数据进行处理，那么可以查看这个指引。

> [后端 API 接入指引](./integration-backend.md)

### 钱包接入
如果您的应用是一个钱包，那么不仅仅可以解析 .bit 账户以提高用户体验，还可以上架 .bit 注册服务获得收入分成。

> [钱包接入指引](./wallet-integration.md)

### .bit 别名
**.bit 别名**是 .bit 最强大的能力之一，它为用户在区块链世界提供了额外的安全性。

> [.bit 别名指引](./dotbit-alias.md)


## 在 .bit 官网展示你的 Dapp
我们不断地收集已经集成了 .bit 的项目。如果你想要在 .bit 官网展示您的项目信息，请向该邮箱（[supermancy@did.id](mailto:supermancy@did.id)）发送信息，并附带以下信息：
- 项目名称
- 项目描述
- Logo 和 链接

## 常用资源
- [**.bit 记录命名空间**](https://github.com/dotbitHQ/cell-data-generator/blob/master/data/record_key_namespace.txt) 每一个 .bit 账户的解析记录的 key 都必须在命名空间中，包括 address/profile/dweb 等类型。
- [**.bit 开源库列表**](./dotbit-libraries.md) 列举了有用的 .bit 开源库，助力你应用的开发。

## 联系我们

如果在开发上有遇到任何问题，请随时通过以下方式联系我们：

- [.bit Discord](https://discord.gg/KJp6EtSr)
- [.bit Twitter](https://twitter.com/dotbitHQ)