# Terminology

### .BIT
##### .bit
Generally refers to the entire .bit open-source project.
##### .bit account
Refers to each individual account, such as alice.bit, bob.bit.
##### .bit domain
Another name for a .bit account.

##### .bit Alias
Each blockchain address can be uniquely mapped to a .bit account for easy identification of the address's ownership and to optimize user experience. This feature is called .bit Alias.

> See [.bit Alias](./technical-details/alias.md) for more details.

##### .bit Second-Level DID
Each main account can distribute its own Second-Level DID, similar in form to `child.parent.bit`. Second-Level DID can be used in any community to enhance community cohesion.

> See [.bit Second-Level DID](./technical-details/subdid.md) for more details.

### Register .bit
##### Register
The process of obtaining a .bit account by paying a fee to the .bit contract.
##### Registration fee
Holding a .bit account requires paying a certain fee annually, and the fees vary depending on the length of the account name.
##### Storage fee
The resolution records of each account are stored on the blockchain and require a fixed storage space, so a certain storage fee must be paid. The storage fee will be refunded after the account expires and is reclaimed.
##### Inviter
Any .bit account can act as an inviter. When you register an account, you fill in a .bit account as the inviter, and you can get certain discounts; when someone else registers an account and fills in your .bit account as the inviter, you can also get certain rewards.
##### Channel
Any product (such as a wallet) that integrates .bit registration services can be called a channel. If a user completes the registration through the channel, the channel can get a certain proportion of the registration fee.
##### Registrar
An organization or individual that provides users with a registration interface and payment method.
##### On-chain time
Refers to the time on the blockchain, which is usually slightly behind the real-world time and does not pass uniformly like real-world time.

### Manage .bit
##### Owner
Each account has an owner who owns the ownership of the .bit account and can modify the owner and administrator.
##### Administrator
Each account has an administrator who has the management rights of the .bit account and can modify the resolution records of the account.
##### Resolution record
Each piece of data associated with a .bit account, such as a BTC address or a Twitter account, is called a resolution record.

### .bit Contract
##### Nervos
The .bit contract is deployed on [Nervos](https://nervos.org), a public chain with smart contracts based on the Cell (UTXO) model.

##### Cell
Cell is the most basic unit of Nervos. Cell is a concept abstracted from the UTXO model of Bitcoin and can carry many different types of data: tokens, code, JSON, etc.

According to different uses, the Cells used by .bit have different names:
- AccountCell: the basic unit carrying the .bit account, and a primary account has an AccountCell.
- IncomeCell: the Cell that carries the CKB balance within the .bit ecosystem, which is often used in commission rebates, reward scenarios, etc.
- BalanceCell: the Cell that carries the .bit account balance.

> View all Cell types: [Cell Protocol v1](https://github.com/dotbitHQ/das-contracts/blob/master/docs/zh-hans/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/Cell-%E7%BB%93%E6%9E%84%E5%8D%8F%E8%AE%AE.md)

### Third-Party Terms
##### coin_type
A digital string that meets the SLIP-0044 specification, used to represent a token or public chain.

In .bit, the coin_type is mainly used in the resolution records of the [data container](./technical-details/data-container.md) to distinguish between different public chain addresses.

> View the complete [SLIP-0044](https://github.com/satoshilabs/slips/blob/master/slip-0044.md)

##### chain_id
An Ethereum network identifier that complies with the EIP-155 specification. Used to distinguish between different EVM-compatible chains/networks.

> View the full list of `chain_id` networks: [ChainList](https://chainlist.org/)
