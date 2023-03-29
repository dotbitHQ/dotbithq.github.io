# .bit 数据容器

.bit 数据容器（Data Container）是 .bit 的核心能力，.bit 的强大扩展能力也来源于解析记录的灵活性。
每个 .bit 账户都带有一个数据容器，用户可以在其中存入不同的数据，这些数据被称为解析记录。

其基本结构如下：

<img src="../imgs/image-data-container.png" alt=".bit 解析记录" style="zoom:50%;" />

开发者可以通过 API 或 SDK 读取不同的解析记录，以完成不同的工作，如钱包转账，社区身份，Dweb等等。开发者获取的数据结构一般如下：

```json
[
  {
    "key": "address.60",
    "value": "0x1D643FAc9a463c9d544506006a6348c234dA485f",
    "label": "personal",
    "ttl": "300"
  },
  {
    "key": "address.60",
    "value": "0xf0e630b51f1d9ef735b956bc10fedb813cb78002",
    "label": "business",
    "ttl": ""
  },
  {
    "key": "profile.twitter",
    "value": "dotbithq",
    "label": "",
    "ttl": ""
  }
]
```
## 解析记录（record）
.bit 账户上所关联的每一条数据，如果一个 BTC 地址，一个 Twitter 账户，称之为一条解析记录。

每条解析记录都是一对键（key）和值（value）的组合。除此之外还有标签（label）和有效时间（ttl）。


### 解析记录命名空间（namespace）
因为解析记录本质上是字符串的键值对，理论上你可以设置任何类型的数据。

但是为了生态的统一和协作，我们规范了解析记录的命名空间，其本质是一个协议，遵循这个协议，应用程序之间可以实现良好的协作。
主要有以下三种：

- **address**  
该类型的解析记录主要用来记录用户的区块链地址，包括 ETH，BTC，DogeCoin 等等。形如：`address.0`，`address.60`。  
其中，`0`, `60` 代表了特定的区块链，遵循了 SLIP-0044 规范。其具体定义详见：[SLIP-0044](https://github.com/satoshilabs/slips/blob/master/slip-0044.md)

- **profile**  
该类型的记录主要用来记录用户的个人社交信息，包括 Twitter，Email，Telegram 等等。形如：`profile.twitter`，`profile.email` 等等。
    
- **dweb**  
该类型的记录主要用来记录用户的去中心化存储信息，包括 IPFS，Arweave 等等。形如 `dweb.ipfs`，`dweb.arweave`。

以上三种类型的 key 都只能设置指定命名空间里面的解析记录。

> 查看具体的白名单：[.bit 解析记录命名空间](https://github.com/dotbitHQ/cell-data-generator/blob/master/data/record_key_namespace.txt)

- **custom_key**

为了满足开发者的个性化需求，我们增加了 `custom_key` 类型。  
该命名空间没有约束，开发者可以在这个空间下创建任意名字和数量的次级命名空间，并定义其含义。如`custom_key.bitcc_config`，`custom_key.pgp.master_key`等。

### 解析记录的键（key）
命名空间和自类型共同组成了解析记录的 key。

一个 .bit 账户中，可以存在多个相同的 key。如果要区分不同的解析记录，需要用标签（label）来区分。

### 解析记录的值（value）
.bit 合约并不会校验解析记录的值的合法性，.bit 只是提供了一种约定。例如，一般情况下用户都会将 `address.btc` 的值设置为一个 BTC 地址。但应用程序在使用这个值时，应该检查这个值是否真的是合法的 BTC 地址。

### 解析记录标签（label）
你甚至可以为不同的 BTC/ETH 的地址设置不同的标签。事实上，.bit 中相同类型的记录都可以添加多条，通过不同的自定义标签来区分。

## FAQ

### 一个 .bit 可以添加多个 BTC/ETH 地址作为解析记录吗？

可以。你可以添加多个相同的 key，如多个 ETH 地址，多个 Twitter 账户。

以 ETH 地址为例，从现实中考虑，我们每个人都有多个地址：个人地址，公司地址，家庭地址等等。如果对一个 key 只有一个记录，那显然无法完全反应现实生活。

为了反应用户的实际情况，我们允许一个 .bit 账户下存在多个相同的 key。

### 相同 key 的解析记录如何区分？ 
使用标签（label）来区分。详细见上：[解析记录标签](#解析记录标签)

### 如何增加解析类型？
目前 .bit 只提供了`address`，`profile`，`dweb`，`custom_key`四个一级命名空间，但这不是最终结果。.bit 团队会根据情况，逐渐增加一级命名空间。同时，我们也需要社区的开发者给我们提供有效的建议。如果您认为应该增加某些命名空间，使得应用程序之间可以更好的协作。可以在 Github 中给我们提 [Issues](https://github.com/dotbitHQ/cell-data-generator/blob/master/data/record_key_namespace.txt)。

### 一个 .bit 账户可以有多少条解析记录？

这取决于单笔 CKB 交易可容纳的 Witness 数据大小。

一般而言，一个 .bit 账户可以存储数百条解析记录——这对普通用户来说完全足够。

### 解析记录可以修改吗？

可以随时修改。但为了避免滥用，不同的操作会有不同的频率限制，具体以操作时的提示为准。

### 什么是自定义键？

.bit 内置了一些解析记录类型，如区块链地址，个人信息等。同时也支持用户和开发者自定义解析记录类型，以支持丰富的应用场景。
详见：[解析记录命名空间](#解析记录命名空间-namespace)
