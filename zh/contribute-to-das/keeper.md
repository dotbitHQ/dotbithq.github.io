# Keeper 奖励

DAS 是基于 [Nervos CKB](https://nervos.org) 开发的 Dapp。「链下计算，链上验证」是 Nervos CKB 的独特设计。对于任何一个运行在其之上的 Dapp 而言，都包括链下计算相关的程序，和链上验证相关的代码。Keeper 便对应 DAS 的「链下计算」相关的程序。



Keeper 是任何人都可以无需许可的运行的链下程序。它会根据 CKB 链上的状态，发出交易，修改 CKB 的链上状态。而这些交易需要负责「链上验证」的程序验证通过才能打包上链。因此，任何人都可以根据 [DAS 的协议](https://github.com/DeAccountSystems/das-contracts)，实现自己 Keeper。



在 DAS 系统中，Keeper 程序的作用是批量处理用户的注册请求，回收过期账户等。Keeper 每完成一个注册请求处理，回收账户处理，都可以获得响应的奖励。[查看奖励细则](build-together.md)。

