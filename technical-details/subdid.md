# .bit Second-Level DID

Second-Level DID is a new concept proposed by the .bit team, which is very suitable for various DAOs, communities, fan clubs, user management, and other fields.

## Structure
The basic form is as follows:

```
001.bitcoin.bit
tim.bankless.bit
😊.twitter.bit
```

Where `bitcoin.bit`, `bankless.bit`, `twitter.bit` are called parent accounts, and `001.bitcoin.bit`, `tim.bankless.bit`, `😊.twitter.bit` are called Second-Level DID.

## Enabling Second-Level DID Functionality
As enabling the Second-Level DID function requires occupying on-chain storage space, you need to reserve 220 CKB and manually enable the Second-Level DID function.

> Enable page: [https://d.id/data](https://d.id/data)

Once the Second-Level DID function of the parent account is enabled, it cannot be disabled. After the parent account expires, 220 CKB will be automatically returned to your [.bit balance](https://d.id/ckb).

## Mint DID
There are three ways to mint DID:

### Manual Mint
You can directly mint DID on the personal data page.
Second-Level DID can be minted to ETH/BNB/Polygon/Tron addresses. You can also fill in the user's .bit account directly, and the Second-Level DID will be minted directly to the owner address of that .bit account.

![Mint DID](./image-mint-subdid-manually.png)

### Mint through SuperDID
[SuperDID](https://superdid.id/) is the largest .bit Second-Level DID service platform. You can set pricing plans for your .bit Second-Level DID, and SuperDID supports multiple payment methods, including BNB, ETH, Polygon, etc. You can directly sell your Second-Level DID to the community by sharing a simple link. It's easy to set up once and for all.

The .bit contract automatically charges a 3% fee from the sale price on SuperDID. Since the .bit smart contract runs on Nervos CKB, the sale fee is calculated based on CKB. Your income will be withdrawn to your [.bit balance](https://d.id/ckb).

> [SuperDID](https://superdid.id/)

### Mint through SDK
You can also mint Second-Level DID using the mature .bit JS SDK. This is the best way for developers, as you can determine all distribution logic and rules.

> JS SDK: [dotbit.js](https://github.com/dotbitHQ/dotbit.js/blob/main/docs/api/bit-account.md#mintsubaccountparams)

## Pricing
The pricing of .bit Second-Level DID is entirely determined by the parent account and can be as low as 1 CKB (about 0.5 cents). Issuing 10,000 Second-Level DID only costs $50, which is almost zero cost.

> View [CKB price](https://coinmarketcap.com/currencies/nervos-network/)

## Differences from Parent Account
Except for the distribution process and [expiration date](#expiration-date), Second-Level DID are completely independent of the parent account, and their data containers and ownership are not controlled by the parent account. You can fully trust the data security of your Second-Level DID. Second-Level DID have most of the capabilities of the parent account, with the following differences:
- Second-Level DID are priced by the parent account and have lower costs, as low as 1 CKB.
- Completely independent of the parent account and not controlled by the parent account.
- Second-Level DID cannot be converted into .bit ETH NFT.
- Second-Level DID cannot mint DID to the next level.

## Second-Level DID Length & Character Set
Currently, there are no restrictions on the character length and opening ratio of Second-Level DID. Characters must meet the requirements of the [.bit character set rules](../register-das/charsets), can only include one language and numbers, some Emojis, and "-" combined.

## Quantity
There is no limit to the number of Second-Level DID, and the parent account can issue Second-Level DID unlimitedly.

## Expiration Date
The expiration date of Second-Level DID cannot exceed that of the parent account, and there are no other restrictions.

If the expiration date is approaching, anyone can renew the parent or Second-Level DID to extend the expiration date (Second-Level DID renewal function under development).

## Multi-level DID
Currently, only three-level DID are supported, that is, xxx.yyy.bit. For support for multi-level DID, please pay attention to the news of the .bit team.

## FAQ
### How can I retrieve the 220 CKB frozen when enabling Second-Level DID?

Enabling Second-Level DID requires occupying on-chain storage space, so 220 CKB will be frozen from the Owner address account when enabling Second-Level DID. Once the Second-Level DID function is enabled, it cannot be disabled. After the parent account expires, 220 CKB will be automatically returned to your [.bit balance](https://d.id/ckb).

### Can both the Owner address and Manager address mint DID? Where will the cost of minting DID be deducted from?

Only the Owner address can enable the Second-Level DID function. After enabling, only the Manager address can mint DID. The cost of minting DID will be deducted from the [.bit balance](https://d.id/ckb) of the Manager address.

### What is the maximum initial period for minting DID?

When minting DID, you need to fill in the initial period of the Second-Level DID, which cannot exceed 20 years. After the minting is successful, anyone can renew the Second-Level DID (Second-Level DID renewal function under development).

### Is there a limit to the number of Second-Level DID?

There is no limit to the number of Second-Level DID. The same parent account can mint an unlimited number of Second-Level DID, but the upper limit for each minting is 500 Second-Level DID.

### Can Second-Level DID be renewed?

It is not currently supported, and the renewal function of accounts is under development. After the Second-Level DID is minted, anyone can renew it.

### What is SuperDID?

[SuperDID](https://superdid.id/) is the largest .bit Second-Level DID service platform. You can set pricing plans for your .bit Second-Level DID and support multiple payment methods, including BNB, ETH, Polygon, etc. You can share your exclusive link with your community and sell your Second-Level DID directly. Easy to set up, once and for all.
The .bit contract will automatically charge a 3% fee on Second-Level DID sold through SuperDID. In addition, since the .bit smart contract runs on Nervos CKB, the selling cost will be settled in CKB.
