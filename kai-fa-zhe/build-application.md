# 基于 DAS 开发应用



<img src="image-20210718170837330.png" alt="DAS 解析记录" style="zoom:50%;" />



基于 DAS 开发应用有几种思路：

1. 将 DAS 账户是为一种实用的 NFT 资产，开发 DAS 的交易/拍卖/租赁市场
2. 将 DAS 账户视为一个公开的只能由用户修改的 key-value 数据库，其中可以存储任意类型的解析记录。开发者可以基于此构建应用。





## 应用举例 ：bit.cc - 去中心化个人主页

https://bit.cc 便是典型的，将 DAS 账户视为公开 key-value 数据的 DAS 应用。bit.cc 可以看作去中心化版本的 LinkTree，去中心化的个人主页。与其他个人主页产品不同，bit.cc 提供的主页展示的信息都是去中心化存储的。有且仅有 DAS 账户所有人可以修改，bit.cc 也无法删除你的个人主页。

如果 Alice 拥有 alice.bit，并在解析记录中添加了自己在各个社交网络的连接。bit.cc 将以极其美观的样式展出这些链接，其他用户通过 alice.bit.cc 即可访问。bit.cc 的表现完全由 Alice 通过设置解析记录来控制。比如：

1. Alice可以通过设置解析记录 `custom_key.bitcc_theme` 的值为`light`或`dark`来决定使用日间还是夜间模式展示你的去中心化个人主页。
2. Alice可以通过设置解析记录`custom_key.bitcc_redirect` 的值为 Alice 的个人网站链接。这样当别人访问 alice.bit.cc 时，网页会自动重定向到 alice 的个人网站。


这些功能得以实现，是因为 bit.cc 在根据 Alice 的解析记录来做出响应。未来，bit.cc 还可以根据 Alice 的解析记录信息，将 Alice 所有的 NFT 都呈现出来。alice.bit.cc 便是属于 Alice 的真正意义上的去中心化个人主页。

[bit.cc 使用文档](https://github.com/DeAccountSystems/bit.cc/blob/master/README_CN.md)


## 准备工作

开发不同类型的应用，所需的准备工作有所不同。

若将 DAS 账户是为一种实用的 NFT 资产，开发 DAS 的交易/拍卖/租赁市场。你需要了解：

1. Nervos CKB 的基本原理，它的数据结构以及交易结构（[学习 Nervos CKB](https://nervos.org)）
2. DAS 的基本原理，它的数据结构以及交易结构（[学习 DAS](https://github.com/DeAccountSystems/das-contracts)）



基于 DAS 账户的解析记录开发应用，则无需了解 Nervos CKB 以及 DAS 的技术细节。只需了解如何使用[das-account-indexer](https://github.com/DeAccountSystems/das_account_indexer) 或 [das-sdk-js](https://github.com/DeAccountSystems/das-sdk-js) 获取某个账户的解析记录，或查询某个地址是否持有 DAS 账户。以及了解 DAS 的解析记录的[命名空间规范](records-key-namespace.md)。



## 期待的 DAS 应用

我们认为，基于 DAS 应该会出现以下有趣的应用：

1. 使用 DAS 账户发送端到端加密消息
2. 使用 DAS 账户聚合多条链上的声誉
3. 使用 DAS 账户登陆中心化服务。
4. 基于 DAS 账户的去中心化个人主页/社交网络