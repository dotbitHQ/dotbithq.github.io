# .bit 别名
**.bit 别名** 是 .bit 推出的一个功能，可以给你拥有的任意地址一个全球唯一的别名（Alias）。

比如说，你可以给你的 BTC 地址 `bc123...456` 设置别名为 `mybtc.bit`。这样，当其他开发者要展示 `bc123...456` 给用户时，可以同时展示 `mybtc.bit` 这个别名，方便其他用户来校验地址的所有人。

更多介绍请参见 .bit 官网和文章:

> [.bit Alias 官网](https://www.did.id/bit-alias)  
> [.bit 别名来了](https://talk.did.id/t/bit/400#h-7)

## 设置 .bit 别名
现在 .bit 别名支持 ETH/BSC/TRX/Polygon 等地址。

用户可以访问 [.bit Alias App](https://app.did.id/alias) 并登录钱包，之后即可设置自己对应地址的 .bit 别名。

> 详见 [.bit 别名设置指南](https://talk.did.id/t/bit/400#h-7)


## 解析 .bit 别名

### 前端解析
若要前端解析 .bit 别名，要使用 [das-sdk-js](https://github.com/dotbitHQ/das-sdk-js) 。

> 详见 [前端集成 .bit](./integration-frontend.md)

之后只需要调用 `reverseRecord` 方法，并传入相关参数即可完成前端对 .bit 别名的解析。

#### 示例
```javascript
const account = await das.reverseRecord({
  type: 'blockchain',
  key_info: {
    coin_type: '60',
    chain_id: '1',
    key: '0x1d643fac9a463c9d544506006a6348c234da485f'
  }
})

console.assert(account === 'imac.bit')
```

> 具体参数值见下方 [参数详解](#参数详解)

### 后端解析

若要后端解析 .bit 别名，首先需要部署一个 [das-account-indexer](https://github.com/dotbitHQ/das-account-indexer) 。

> 详见 [后端集成 .bit](./integration-backend.md)

之后只需要调用 `das_reverseRecord` 方法，并传入相关参数即可完成后端对 .bit 别名的解析。


#### 示例

**调用**
```shell
curl -X POST https://indexer-basic.did.id -d'{"jsonrpc": "2.0","id": 1,"method": "das_reverseRecord","params": [{"type": "blockchain","key_info":{"coin_type": "60","chain_id": "1","key": "0x1d643fac9a463c9d544506006a6348c234da485f"}}]}
```
**响应**
```json5
{"id":1,"jsonrpc":"2.0","result":{"errno":0,"errmsg":"","data":{"account":"imac.bit"}}}
```

> 具体参数值见下方 [参数详解](#参数详解)


### 参数详解

无论是前端函数调用还是后端 JSON-RPC，其传入的参数都是同样的：
```json5
{
  type: 'blockchain',
  key_info: {
    coin_type: '60',
    chain_id: '1',
    key: '0x1d643fac9a463c9d544506006a6348c234da485c'
  }
}
```

各个字段的取值如下：

#### type
需要被解析的数据的类型，现在只支持 `blockchain`，将来会支持 `OpenPGP`、`SSL` 等。

#### coin_type
需要被解析地址的 `coin_type`，遵循 [SLIP-0044 规范](https://github.com/satoshilabs/slips/blob/master/slip-0044.md) 。

以下是若干常见取值：

| coin_type | 符号      | 链                   |
|:----------|:--------|:--------------------|
| 0         | BTC     | Bitcoin             |
| 3         | DOGE    | Dogecoin            |
| 60        | ETH     | Ethereum            |
| 966       | MATIC   | Matic               |
| 9006      | BSC     | Binance Smart Chain |

> 详见 [SLIP-0044 规范](https://github.com/satoshilabs/slips/blob/master/slip-0044.md) 。

#### chain_id
如果是 EVM 兼容链，还可以通过 `chain_id` 进一步区分具体的链，如 ETH、BSC、HECO。

以下是常见取值：

| chain_id | 符号    | 链                   |
|:---------|:------|:--------------------|
| 1        | ETH   | Ethereum            |
| 56       | BNB   | Binance Smart Chain |
| 137      | MATIC | Polygon             |

> 数据来源于 [Chainlist](https://chainlist.org/)

#### key
需要被解析的数据的具体值，如用户的 ETH 地址 `0x1d643fac9a463c9d544506006a6348c234da485c`。

