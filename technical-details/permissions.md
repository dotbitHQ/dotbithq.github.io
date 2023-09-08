# .bit Account Permissions

From the beginning of the design, the .bit team has considered different scenarios for account usage, including personal, team, company, family, and so on. Different scenarios require different permission management, so flexible permission design has become a very important aspect.

At the same time, the permission mechanism is also the core principle of .bit's support for multiple chains.

## Design Concept
Every asset should distinguish between **ownership** and **management rights**. Ownership and management rights are sometimes unified and sometimes not. Unified situations include: a house purchased by oneself, one's own bank deposits, and so on. Non-unified situations include renting a house, a programmer's access to a company's database, and so on.

Starting from ownership and management, two additional roles are derived: **Owner** and **Manager**. These two roles have different permissions and use cases.

The design of **Owner** and **Manager** is based on the idea of separating ownership and management rights. Modifying resolution records is a high-frequency operation, while modifying ownership is a low-frequency operation. High-frequency operations frequently use private keys, increasing the risk of private key loss. This separation design ensures that the owner still has ownership of the account in case the manager's private key is lost.

The **Owner** and **Manager** can be the same address or different addresses. However, we highly recommend using different addresses as the owner and manager.

## Owner
The owner is the ultimate holder of an account and has the final disposition right over an account. The owner can transfer their account, modify the manager, and so on.

## Manager
The manager is the role responsible for daily account operations, such as modifying records, distributing sub-accounts, and so on.

## Differences between Owner and Manager
**Owner**: Each account has an Owner who owns the ownership of the .bit account and can modify the Owner and Manager.

**Manager**: Each account has a Manager who has the management right of the .bit account and can modify the resolution records of the account.

Here are the specific differences in their operations:

|  Role   | Modify Owner | Modify Manager | Cross-Chain | upgrade to Top-Level DID | Distribute DID | Modify Record |
|:-------:|:------------:|:--------------:|:-----------:|:------------------------:|:--------------:|:-------------:|
|  Owner  |      ✅       |       ✅        |      ✅      |            ✅             |       ❌        |       ❌       |
| Manager |      ❌       |       ❌        |      ❌      |            ❌             |       ✅        |       ✅       |

## Underlying Design
From a contract perspective, both Owner and Manager are `args` of the LockScript in the AccountCell. The composition of an args is as follows:

```js
args: [
  owner_algorithm_id,
  owner_pubkey_hash,
  manager_algorithm_id,
  manager_pubkey_hash,
]
```

`owner_algorithm_id` and `manager_algorithm_id` are the IDs of different encryption algorithms, namely `algorithm_id`. 
`owner_pubkey_hash` and `manager_pubkey_hash` are the corresponding addresses/public keys of the algorithm.

### algorithm_id

algorithm_id has different signatures according to different algorithms, and its values are as follows:

- 03: Eth Personal Sign
- 05: EVM 712 signature algorithm. A corresponding user signature is required when using the account-cell.
- 04: Tron's signature algorithm. Tron's public key is in the hex address format of Tron, and the prefix 41 is removed.
- 06: Ed25519 signature algorithm ID
- 07: Dogecoin

As .bit develops, we will support more public chains and signature algorithms. This list will continue to expand.
