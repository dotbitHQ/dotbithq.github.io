# 前端集成 .bit

## [dotbit.js](https://github.com/dotbitHQ/dotbit.js)
[dotbit.js](https://github.com/dotbitHQ/dotbit.js) 是一个 npm 包，封装了对于 indexer 的 JSON-RPC 的调用。

Dapp 只需集成该 SDK，并调用对应的接口（数据由 .bit [das-account-indexer](./integration-backend.md#das-account-indexer)），即获得所需的数据。

> 注意，应用在得到用户设置的数据的值后，要对其值的有效性进行校验

> [dotbit.js 文档](https://github.com/dotbitHQ/dotbit.js)

### 依赖
使用该 SDK 需要依赖 [das-account-indexer](./integration-backend.md) 所提供的 JSON-RPC 服务。

我们推荐开发者自建 .bit Indexer，但是开发者可以在开发阶段使用官方的 .bit Indexer 服务来做开发、测试，详见：
> [官方 Indexer 服务](./integration-backend.md#官方-indexer-服务)

### 使用示例

```javascript
// For ES Module
import { createInstance } from 'dotbit'
const dotbit = createInstance()

// Get the account info of a .bit account
dotbit.records("jeffx.bit").then(console.log)
```

**输出**
```js
[
    {
      key: 'address.polygon',
      label: 'Usually',
      value: '0xB2bE2887A26f44555835EEaCC47d65B88b6B42c2',
      ttl: '300',
      type: 'address',
      subtype: 'polygon'
    },
  {
    key: 'profile.discord',
    label: 'Discord Username',
    value: 'west.bit#8906',
    ttl: '300',
    type: 'profile',
    subtype: 'discord'
  },
]
```

#### 下一步
- 如果需要后端接入 .bit，请阅读 [后端接入](./integration-backend.md)
- 如果需要查看设计指南，请查看 [设计指南](./design-guide.md)