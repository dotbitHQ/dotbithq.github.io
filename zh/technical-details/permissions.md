# .bit 账号权限

在设计之初，.bit 团队就考虑到了用户不同的账号使用场景，包括个人，团队，公司，家庭等等。不同的使用场景需要有不同的权限管理，因此灵活的权限设计就成了非常重要的一环。

## 设计思路
每一个资产都应该区分**所有权**和**管理权**。所有权和管理权有时是统一的，有时又是不统一的。统一的情况例如：自己购买的房子，自己银行的存款等等。不统一的情况有：租房子，程序员公司的数据库访问等等。

从所有权和管理权出发，就引申了另外两个角色：**所有者（Owner）**和**管理员（Manager）**。这两个角色有不同的权限和使用场景。

**所有者**和**管理员**的设计，是在践行所有权和管理权分离的思想。修改解析记录是高频操作，而修改所有权是低频操作。高频操作便会频繁的使用私钥，增加了私钥丢失的风险。这种分离设计，可以在管理员私钥丢失时，保证所有者仍有对账户的所有权。

**所有者**和**管理员**可以是同一个地址，也可以是不同的地址。但我们十分推荐使用不同的地址来作为所有者和管理员。

## 所有者（Owner）
所有者是一个账户的最终持有人，拥有对一个账户的最终处置权。所有者可以转移自己的账户，可以修改管理员等等。

## 管理员（Manager）
管理员是日常操作账户的角色，用于修改记录，分发子账户等等。

## Owner 和 Manager 的区别
**所有者**，每个账户都有一个所有者，所有者拥有 .bit 账户的所有权，可以修改所有者和管理员。

**管理员**，每个账户都有一个管理员，管理员拥有 .bit 账户的管理权，可以修改账户的解析记录。

以下是他们具体操作的区别：

|   角色    | 修改 Owner | 修改 Manager | 跨链  | 开启子账户功能 | 分发子账户 | 修改记录 |
|:-------:|:--------:|:----------:|:---:|:-------:|:-----:|:----:|
|  Owner  |    ✅     |     ✅      |  ✅  |    ✅    |   ❌   |  ❌   |
| Manager |    ❌     |     ❌      |  ❌  |    ❌    |   ✅   |  ✅   |

## 底层设计
从合约角度出发，Owner 和 Manager 都是 AccountCell 中 LockScript 的 `args`。一个 args 的组成如下：
```js
args: [
  owner_algorithm_id,
  owner_pubkey_hash,
  manager_algorithm_id,
  manager_pubkey_hash,
]
```
其中 owner_algorithm_id 和 manager_algorithm_id 为不同的加密算法的 ID，即 algorithm_id。
owner_pubkey_hash 和 manager_pubkey_hash 为算法相应的地址/公钥。

### algorithm_id

algorithm_id 根据不同的算法而有不同的签名，取值如下：

- 03: Eth Personal Sign
- 05: EVM 712 签名算法。在使用 account-cell 时需要有对应的用户签名
- 04: Tron 的签名算法。Tron 的公钥是取 Tron 的 hex 地址格式，然后去掉 41 前缀
- 06: Ed25519 签名算法ID
- 07: Dogecoin

随着 .bit 的发展，我们将会支持更多的公链和签名算法。这个列表也会持续扩张。