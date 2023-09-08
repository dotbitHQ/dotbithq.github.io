# .bit 以太坊 NFT

## 背景
得益于 .bit 强大的跨链能力，你可以用不同的公链地址注册并管理 .bit，也可以在任何时间将 .bit 在任意公链地址之间转移。

原生 .bit 账户数据本身是在 Nervos CKB上，而 Nervos 上目前为止并没有一个成熟的交易平台。.bit 团队开发了自己的交易平台，[did.top](https://did.top/)。

为了方便以太坊用户利用以太坊成熟的 NFT 交易平台，我们推出了转换为以太坊 NFT 的功能。你可以将一个 Nervos 上的 .bit 账号转为一个符合以太坊 [ERC-721](https://eips.ethereum.org/EIPS/eip-721) 规范的 NFT。

## 原理
.bit 实现多链的原理是以 .bit 的开放密码学为基础的，详见：[.bit 多链原理](./multichain-principle.md)。 而 .bit 的数据都是存在于 Nervos CKB 上。

基于开放密码学，我们可以允许用户用不同的区块链地址来持有 .bit 账号。但是因为数据存储在 Nervos 网络上，这也导致了用户无法充分利用现在的以太坊强大的 NFT 交易系统。 

而将 .bit 转换为以太坊 NFT 则将允许用户利用以太坊强大的生态。 其基本原理是利用了一个非常安全的跨链桥来实现。

当用户发起一个跨链操作时，会首先将该跨链桥将会接收到链上的操作进行解析，并将用户的账户进行 `lock` 操作。之后任何用户可以将该账户 mint 到以太坊上，这样就完成了一个完整且安全的跨链操作。下面是具体描述：

### 跨链步骤
1. Lock：用户发起跨链请求，签名，并将操作提交到 Nervos 网络。此时 Nervos 上的 .bit 将处于 `Lock` 状态，所有数据将被清空。
2. 跨链桥监听 Nervos 网络，获取到用户的跨链请求，并生成待发布到以太坊的 mint 交易。
3. Mint：用户将该 `mint` 交易提交到以太坊网络，此时以太坊上将生成（`mint`）一个对应的 NFT。
4. 之后用户可以在以太坊上进行正常的 NFT 交易。

**注意**
跨链操作的两步 `lock` 和 `mint`，`lock` 是不可直接撤回的，一旦开始跨链，必须完整走完流程。
如果开始了之后想还原到 Nervos 网络，需要先进行完第二步 `mint` 操作，之后再执行[反向跨链操作](#反向跨链步骤)


### 反向跨链步骤
1. 用户在以太坊上调用 .bit NFT 合约的 recycle 接口，之后以太坊上的 .bit NFT 将被销毁。
2. 跨链桥监听以太坊网络，获取到用户的取消跨链请求，并在 Nervos 网络上 `unlock` 原本被 `lock` 的账号。
3. 用户获得正常状态的 .bit 账号，可以进行相应的管理操作。


### 安全性
**跨链安全**
.bit 跨链桥是一个非常安全的多签跨链桥，代码经过严格的内部 & 外部审核，并邀请了业内权威的项目方来作为多签节点。

**合约安全**
.bit NFT 合约使用了业界最流行的解决方案，并经过了严格的代码审核。同时在实现上保证了代码的最简化逻辑，避免出现可能的逻辑攻击。

> 相关代码请看：[相关链接](#相关链接)

**解析安全**
为了保证跨链之后的数据的一致性，我们会在跨链之后清空原本 .bit 数据容器内的数据。这样保证在以太坊上的 NFT 被转移或交易之后，用户不会解析到错误的数据。

### 状态要求
一般而言，任何正常状态的 .bit 都可以被转换成以太坊 NFT。而一些特殊情况下的 .bit，则无法被转换为 .bit NFT，主要以下几种：

- 正在 [DIDTop](https://did.top) 出售中的 .bit。你可以将其从 DIDTop 下架后，再进行转换；
- 临近过期的 .bit。如果你的 .bit 有效期不足 30 天，你可以先对其续费，再进行转换。
- Tron 地址管理的 .bit。你可以将其 Owner 权限转移至你的 Ethereum / BNB chain / Polygon 地址后，再进行转换。

> 更多状态描述，可以查看 [.bit 账户状态 & 生命周期](./lifecycle.md)

### 功能限制
Ethereum 上的 .bit NFT 和普通的 .bit 可以在任何时候随时转换，它们在使用功能和场景上有以下区别：

1) Ethereum 上的 .bit NFT
- 具备 Ethereum 上 NFT 的所有功能，你可以在你的 ETH 钱包中查看；
- 支持在 Ethereum NFT 交易市场交易，如 [OpenSea](https://opensea.io/collection/dotbit), [Element](https://element.market/collections/dotbit), [LooksRare](https://looksrare.org/collections/0x60eB332Bd4A0E2a9eEB3212cFdD6Ef03Ce4CB3b5) 等等；
- 管理数据、续费、设置 .bit 别名、分发 DID 等功能无法使用；
- 账户处于特殊状态，不能作为新账户注册的邀请人。

2) 普通的 .bit 账户
- 支持管理数据、续费、设置 .bit 别名、分发 DID 等功能；
- 支持在 [DID.Top](https://did.top)上进行交易；
- 支持在 Ethereum, BNB Chain, Polygon, Tron 网络中使用。

## 交易
.bit NFT 满足以太坊 上 ERC-721 协议，可以在所有支持以太坊 ERC-721 NFT 的交易市场进行交易。以下是一些非常棒的平台：
- [Opensea](https://opensea.io/collection/dotbit)
- [Element](https://element.market/collections/dotbit)
- [LooksSare](https://looksrare.org/collections/0x60eB332Bd4A0E2a9eEB3212cFdD6Ef03Ce4CB3b5)
- [X2Y2](https://x2y2.io/collection/dotbit/items)
- [Rarible](https://rarible.com/dotbit/items)


## 相关链接
- [.bit NFT 合约](https://etherscan.io/address/0xd8156966a7be5b320a1b1f943b376c93a15bd298#readContract)
- [.bit NFT 代理合约](https://etherscan.io/address/0x60eb332bd4a0e2a9eeb3212cfdd6ef03ce4cb3b5#writeProxyContract)

## FAQ

### 转换为 Ethereum 上的 .bit NFT 后，还可以转换为普通的 .bit 吗？

可以。你可以随时将 Ethereum 上的 .bit NFT 转换为普通的 .bit。

### 转换为 Ethereum 上的 .bit NFT 后，可以在哪里交易？

转换后，.bit NFT 满足 Ethereum 上 ERC-721 协议，可以在所有支持 Ethereum NFT 的交易市场交易。

### 转换为 Ethereum 上的 .bit NFT 后，可以管理 .bit 中的数据和续费吗？

不行。转换为 Ethereum 上的 .bit NFT 后，.bit 中存储的数据将被清空。你可以将其转换为普通的 .bit 后，重新管理数据和续费。
> 我们即将允许你将 .bit 转换为 .bit NFT 之后依然可以进行管理。敬请期待。

### 转换为 Ethereum 上的 .bit NFT 后，如何转移给其他人？

你可以直接在你的 ETH 钱包中，将你的 .bit NFT 转给其他人。

### 我的 .bit 过期了，我在 Ethereum 上的 .bit NFT 会被销毁吗？

是的。如果你的 .bit 过期，且未在宽限期内续费。你在 Ethereum 的 .bit NFT 将自动销毁。.bit 账号将被自动回收。

### 为什么我的 .bit 不能转换为 Ethereum 上的 NFT？

如果你的账户处于以下几种状态，你将无法将 .bit 转换为 Ethereum 的 NFT：

- 正在 DIDTop 出售中的 .bit。你可以将其从 DIDTop 下架后，即可转换；
- Tron 地址管理的 .bit。你可以将其 Owner 权限转移至你的 Ethereum / BNB chain / Polygon 地址后，再进行转换。
- 临近过期的 .bit。如果你的 .bit 有效期不足一个月，你可以先对其续费，再进行转换。

### 转换为 Ethereum 上的 .bit NFT 时，完成第一步后，如何取消？

转换为 Ethereum 上的 .bit NFT 时，准备完成后，无法取消。
你可以点击第二步「支付并铸造」，完成转换过程。你可以随时将你在 Ethereum 上的 .bit NFT 转换回普通的 .bit 。

### 怎么查看我在 Ethereum 上的 .bit NFT 的有效期？

你可以在 [OpenSea](https://opensea.io/collection/dotbit) 中进入这个 .bit NFT 的详情页中查看。

### 我的 .bit 已经转换为 Ethereum 上的 NFT 了，也会被回收吗？

是的。无论你的 .bit 是否被转换为 Ethereum 上的 NFT，如果没有在宽限期内及时续费，你的 .bit 账户都会被自动回收。

### 二级 DID 能转换为 .bit ETH NFT 吗？
二级 DID 暂时不能转换为 .bit ETH NFT。我们将在合适的时候推出这一功能，请关注 .bit 官方渠道。 