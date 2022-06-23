# 前端集成 .bit

## [das-sdk-js](https://github.com/dotbitHQ/das-sdk-js)
[das-sdk-js](https://github.com/dotbitHQ/das-sdk-js) 是一个 npm 包，封装了对于 indexer 的 JSON-RPC 的调用。

Dapp 只需集成该 SDK，并调用对应的接口（数据由 .bit [das-account-indexer](./integration-backend.md#das-account-indexer)），即获得所需的数据。

> 注意，应用在得到用户设置的数据的值后，要对其值的有效性进行校验

> [das-sdk-js 文档](https://github.com/dotbitHQ/das-sdk-js)

### 依赖
使用该 SDK 需要依赖 [das-account-indexer](./integration-backend.md) 所提供的 JSON-RPC 服务。

我们推荐开发者自建 .bit Indexer，但是开发者可以在开发阶段使用官方的 .bit Indexer 服务来做开发、测试，详见：
> [官方 Indexer 服务](./integration-backend.md#官方-indexer-服务)

### 使用示例

```javascript
import Das from 'das-sdk'

const das = new Das({
  url: 'https://indexer-v1.did.id',
})

das.records('dasloveckb.bit').then(console.log)
```

**输出**
```json5
[{
  key: 'address.eth',
  label: 'coinbase',
  value: '0x1234...4567',
  ttl: 300,
  avatar: 'https://display.did.id/identicon/dasloveckb.bit'
}, {
  key: 'address.eth',
  label: 'onchain',
  value: '0x2345...6789',
  ttl: 300,
  avatar: 'https://display.did.id/identicon/dasloveckb.bit'
}]
```

#### 下一步
- 如果需要后端接入 .bit，请阅读 [后端接入](./integration-backend.md)
- 如果需要查看设计指南，请查看 [设计指南](./design-guide.md)