# .bit Account Permissions

From the beginning of the design, the .bit team has considered different scenarios for account usage, including personal, team, company, family, and so on. Different scenarios require different permission management, so flexible permission design has become a very important aspect.

At the same time, the permission mechanism is also the core principle of .bit's support for multiple chains.

## Design Concept
Each asset should distinguish between ownership and management. Ownership and management are sometimes unified and sometimes separate. Unified scenarios include: houses purchased by oneself, bank deposits owned by oneself, etc. Separate scenarios include: renting a house, accessing the database of a programmer's company, etc.

Starting from ownership and management, two additional roles are derived: Owner and Manager. These two roles have different permissions and usage scenarios.

The design of Owner and Manager is to practice the idea of separating ownership and management. Modifying resolution records is a high-frequency operation, while modifying ownership is a low-frequency operation. Frequent use of private keys increases the risk of losing the private key. This separation design can enable users to retain ownership of the account when the Manager's private key is lost.

The Owner and Manager can be the same address or different addresses. However, we highly recommend using different addresses as Owner and Manager.

## Owner
The Owner is the ultimate holder of an account and has the ultimate disposal right over an account. The Owner can also

## Differences between Owner and Manager
**Owner**: Each account has an Owner who owns the ownership of the .bit account and can modify the Owner and Manager.

**Manager**: Each account has a Manager who has the management right of the .bit account and can modify the resolution records of the account.

Here are the specific differences in their operations:

|  Role   | Modify Record | Modify Owner | Modify Manager | Enable SubDID | Distribute Sub-Accounts | Cross-Chain |
|:-------:|:-------------:|:------------:|:--------------:|:-------------:|:-----------------------:|:-----------:|
|  Owner  |       ❌       |      ✅       |       ✅        |       ✅       |            ❌            |      ✅      |
| Manager |       ✅       |      ❌       |       ❌        |       ❌       |            ✅            |      ❌      |

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
