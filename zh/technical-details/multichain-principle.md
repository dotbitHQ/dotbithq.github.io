# .bit 多链原理
迄今为止，.bit 是唯一真正支持多链的 Web3 DID。将来，.bit 会继续支持所有 EVM 链，社交账号，TouchID，FaceID 等。

.bit 目前已经支持了以下公链地址的购买和持有：
- Ethereum
- Tron
- Dogecoin
- BNB Chain
- Polygon

为了帮您更好的理解 .bit，这里将介绍 .bit 实现多链的原理。

## 开放密码学原语
众所周知，.bit 合约部署在 Nervos CKB（后面以 CKB 代指） 上。而 .bit 团队之所以选择 CKB，则是因为 CKB 的一大核心能力：开放密码学原理。
基于该特性，.bit 可以用户使用任何公链地址来注册 & 持有 .bit 账号。

现有的绝大部分区块链对于交易的验签都是一套固定的模版脚本，大家都会按照固定的验签逻辑去校验签名是否正确。
> 比如以 BTC 为代表的一众区块链都使用了 Secp256k1 的 ECDSA 签名算法，按照固定的 Script 模版去验证交易签名是否正确（其中的操作码 OP_CHECKSIG 背后就是使用了 ECDSA 的相关算法 ）。

相对于 BTC 这种堆栈式固定的验签模式， CKB 则将其抽象成了一段图灵完备的代码。这允许开发者使用任意的签名算法，只要这段代码最终没有报错，那么就认为是解锁了里面的资产。
> 如果将承载区块链资产的对象比喻成一个保险柜的话，那么在 BTC 等其他链给这个保险柜上的锁有且只能是“公牛”牌的锁，而在 CKB 上这个锁你可以自由选择品牌，它可以是“母牛”或“奶牛”，甚至是指纹锁或者是用一段音频来解锁，甚至不用上锁（即任何人都可以花费里面的资产）。

换句话说，无论公链使用什么算法/方式来签名，我们只要在 CKB 的合约端来采用相同的算法/方式来验证签名即可。
所以理论上，CKB 是支持任意签名算法的。

以下是各类算法在区块链的应用情况：
![img.png](./image-blockchain-cryptographics.png)

目前，.bit 已经支持了 ECDSA 和 EdDSA 签名算法，所以理论上，可以几乎无缝支持使用了这两种签名算法的链用户在无需关心什么是 CKB 的前提下，就可以直接使用当前的链的地址/公私钥来管理 .bit 账户。

## 以 Dogecoin 为例
众所周知，Dogecoin 上是没有"智能合约"的，因而也很难基于 Dogecoin 来实现一个 DID naming 系统。 而 .bit 现在允许你使用 Dogecoin 来持有 .bit 账户。核心就是依靠上面的开放密码学原语。

要想用 DOGE 的地址（私钥）管理 .bit 账户，那么就需要解决下面两个问题：

1. 签名摘要如何生成？
> 我们知道 ECDSA 是对一段消息（以下称之为“消息摘要”）的签名/验签方式，[BIP143](https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki) 约定了交易变成消息摘要的具体规则。而 .bit 是基于 CKB 的应用，由于交易结构不同，我们无法遵循这个规则 ，好在 CKB 有自己的 “BIP143”， 在 [这篇官方文档](https://github.com/nervosnetwork/ckb-system-scripts/wiki/How-to-sign-transaction) 里详细说明了由 CKB 交易生成消息摘要的过程，

2. 签名约定是什么？
> 1. UTXO 的钱包很早就有了针对消息签名的约定，（为了安全考虑）会先在原始的待签名内容前面拼接一些 [前缀](https://github.com/bitcoin/bitcoin/blob/40e1c4d4024b8ad35f2511b2e10bf80c5531dfde/src/util/message.cpp#L25) （而这些约定逐渐演化成了后来的 [EIP191](https://eips.ethereum.org/EIPS/eip-191) ），然后再使用 ECDSA 签名算法拿到签名结果。
> 2. 现在已经有多种语言的实现，比如一个 JavaScript 的实现： [bitcoinjs-lib](https://github.com/bitcoinjs/bitcoinjs-lib)。

幸运的是以上问题都已经有现成的解决方案，我们只需要做到：
1. 利用 CKB 的自定义密码学原语的能力，在 .bit 合约中支持 DOGE 的签名算法。
2. 在用户端实现对于 DOGE 的签名调用。
3. 在操作时，.bit 合约验证用户的签名是否合法，合法的话，通过校验，允许用户对 .bit 账号进行后续操作；不合法的话，则拒绝本次操作。

## FAQ
### 为什么可以允许用户支付 ETH/TRON/BNB 来进行购买 .bit 呢？
这个涉及到 .bit 生态体系中的另一个部分：注册商。请访问此处以了解更多：[.bit 注册商](../contribute-to-das/registrar.md)