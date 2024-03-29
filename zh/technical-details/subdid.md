# .bit 子账户（SubDID）

SubDID 是 .bit 团队提出的一个全新概念，非常适用于各种 DAO，社区，粉丝社团，用户管理等领域。

## 结构
其基本形态如下：

```
001.bitcoin.bit
tim.bankless.bit
😊.twitter.bit
```

其中 `bitcoin.bit`，`bankless.bit`，`twitter.bit` 称为父账户，而 `001.bitcoin.bit`, `tim.bankless.bit`, `😊.twitter.bit` 称为子账户（SubDID）。

## 开通子账户功能
由于启用子账户功能需占用链上存储空间，因此需要您预留有 220 个 CKB 并手动开启子账户功能。

> 开通页面：[data.did.id](https://data.did.id/)

父账户的子账户功能一经启用将无法关闭。父账户过期后，220 CKB 将自动返还到你的 [.bit 余额](https://balance.did.id/)中。

## 分发子账户
有三种分发子账户的方式：

### 在线手动分发
你可以直接在个人数据页分发子账户。
SubDID 可以分发到 ETH/BNB/Polygon/Tron 地址。您也可以直接填写用户的 .bit 账号，SubDID 将直接分发到该 .bit 账号的所有者（Owner）地址。

![Mint SubDID](./image-mint-subdid-manually.png)

### 通过 SuperDID 来分发
[SuperDID](https://superdid.id/) 是最大的 .bit SubDID 服务平台。您可以为您的 .bit SubDID 设置定价计划，SuperDID 支持多种支付方式，包括 BNB、ETH、Polygon 等。您可以通过分享一个简单的链接直接销售您的 SubDID 给社区。设置简单，一劳永逸。

.bit 合约会自动从 SuperDID 的销售价格中收取 3% 的费用。由于 .bit 智能合约在 Nervos CKB 上运行，销售费用将基于 CKB 计算。您的收入将提取到您的 [.bit 余额](https://balance.did.id/)中。

> [SuperDID](https://superdid.id/)

### 通过 SDK 来分发
您还可以使用 .bit 成熟的 JS SDK 来分发子账户。这是对于开发者来说最好的方式，一切分发逻辑和规则都可以由您确定。

> JS SDK: [dotbit.js](https://github.com/dotbitHQ/dotbit.js/blob/main/docs/api/bit-account.md#mintsubaccountparams)


## 定价
.bit 子账户的定价完全由父账户决定，最低可以低至 1CKB（大概 0.5 美分）。发行 1 万个子账户只需要花费 50 美元，这几乎等于 0 成本。

> 查看 [CKB 价格](https://coinmarketcap.com/currencies/nervos-network/)

## 子账户与父账户区别
除了分发过程和[有效期](#有效期)，子账户完全独立于主账户，其数据容器和所有权均不受主账户控制，您可以完全相信您的子账户的数据安全性。子账户具备和主账户大部分的能力。除此之外有以下不同：
- 子账户由父账户定价，成本更低，低至 1CKB。
- 完全独立于主账户，不受主账户控制。
- 子账户无法转换成 .bit ETH NFT。
- 子账户无法分发下一级子账户。

## 子账户长度 & 字符集
目前，子账户的字符长度和开放比例没有限制。字符需满足 [.bit 字符集规则](../register-das/charsets)的要求，只能包含一种语言和数字、部分 Emoji、“-” 结合。

## 数量
子账户没有数量限制，父账户可以无限量发行子账户。

## 有效期
子账户的有效期不能超过主账户，除此之外没有任何限制。

如有效期将至，任何人都可以给父账户或子账户续费以延长有效期（子账户续费功能开发中）

## 多级子账户
目前仅支持三级子账户，即 xxx.yyy.bit，对于多级子账户的支持，请关注 .bit 团队的消息。


## FAQ
### 子账户启用时冻结的 220 CKB 怎么取回？

由于启用子账户功能需占用链上存储空间，因此启用子账户功能时会从 Owner 地址账户冻结 220 CKB。子账户功能一经启用将无法关闭。父账户过期后，220 CKB 将自动返还到你的 [.bit 余额](https://balance.did.id/)中。

### Owner 地址和 Manager 地址都可以铸造子账户吗？铸造子账户的费用从哪里扣除？

只有 Owner 地址可以启用子账户功能。启用后，只有 Manager 地址可以铸造子账户。铸造子账户的费用从 Manager 地址的 [.bit 余额](https://balance.did.id/)中扣除。

### 铸造子账户的初始年限最大为？

铸造子账户时，需要填写子账户的初始年限，初始年限不得超过 20 年。铸造成功后，任何人都可以为子账户进行续费（子账户续费功能开发中）。

### 子账户数量有上限吗？

子账户数量没有上限。同一个父账户可以铸造出无限量的子账户，但单次铸造上限为 500 个。

### 子账户可以续费吗？

暂不支持，账户的续费功能正在开发中。子账户铸造出来后，任何人都可以对其进行续费。

### SuperDID 是什么？

[SuperDID](https://superdid.id/) 是最大的 .bit 子账户服务平台。你可以为你的 .bit 子帐户设置定价计划，且支持多种支付方式，包括 BNB, ETH, Polygon 等。你可以通过你的专属链接分享到社群，直接出售你的子账户。设置简单，一劳永逸。
通过 SuperDID 出售的子账户，.bit 合约会自动收取 3% 的手续费。另外，由于 .bit 智能合约运行在 Nervos CKB 上，出售费用将以 CKB 结算。
