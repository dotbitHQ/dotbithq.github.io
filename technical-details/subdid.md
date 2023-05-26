# .bit SubDID

SubDID is a new concept proposed by the .bit team, which is very suitable for various DAOs, communities, fan clubs, user management, and other fields.

## Structure
The basic form is as follows:

```
001.bitcoin.bit
tim.bankless.bit
😊.twitter.bit
```

Where `bitcoin.bit`, `bankless.bit`, `twitter.bit` are called parent accounts, and `001.bitcoin.bit`, `tim.bankless.bit`, `😊.twitter.bit` are called SubDID (SubDID).

## Enabling SubDID Functionality
As enabling the SubDID function requires occupying on-chain storage space, you need to reserve 220 CKB and manually enable the SubDID function.

> Enable page: [data.did.id](https://data.did.id/)

Once the SubDID function of the parent account is enabled, it cannot be disabled. After the parent account expires, 220 CKB will be automatically returned to your [.bit balance](https://balance.did.id/).

## Mint SubDID
There are three ways to mint SubDID:

### Manual Mint
You can directly mint SubDID on the personal data page.
SubDID can be minted to ETH/BNB/Polygon/Tron addresses. You can also fill in the user's .bit account directly, and the SubDID will be minted directly to the owner address of that .bit account.

![Mint SubDID](./image-mint-subdid-manually.png)

### Mint through SuperDID
[SuperDID](https://superdid.id/) is the largest .bit SubDID service platform. You can set pricing plans for your .bit SubDID, and SuperDID supports multiple payment methods, including BNB, ETH, Polygon, etc. You can directly sell your SubDID to the community by sharing a simple link. It's easy to set up once and for all.

The .bit contract automatically charges a 3% fee from the sale price on SuperDID. Since the .bit smart contract runs on Nervos CKB, the sale fee is calculated based on CKB. Your income will be withdrawn to your [.bit balance](https://balance.did.id/).

> [SuperDID](https://superdid.id/)

### Mint through SDK
You can also mint SubDID using the mature .bit JS SDK. This is the best way for developers, as you can determine all distribution logic and rules.

> JS SDK: [dotbit.js](https://github.com/dotbitHQ/dotbit.js/blob/main/docs/api/bit-account.md#mintsubaccountparams)

## Pricing
The pricing of .bit SubDID is entirely determined by the parent account and can be as low as 1 CKB (about 0.5 cents). Issuing 10,000 SubDID only costs $50, which is almost zero cost.

> View [CKB price](https://coinmarketcap.com/currencies/nervos-network/)

## Differences from Parent Account
Except for the distribution process and [expiration date](#expiration-date), SubDID are completely independent of the parent account, and their data containers and ownership are not controlled by the parent account. You can fully trust the data security of your SubDID. SubDID have most of the capabilities of the parent account, with the following differences:
- SubDID are priced by the parent account and have lower costs, as low as 1 CKB.
- Completely independent of the parent account and not controlled by the parent account.
- SubDID cannot be converted into .bit ETH NFT.
- SubDID cannot mint SubDID to the next level.

## SubDID Length & Character Set
Currently, there are no restrictions on the character length and opening ratio of SubDID. Characters must meet the requirements of the [.bit character set rules](../register-das/charsets), can only include one language and numbers, some Emojis, and "-" combined.

## Quantity
There is no limit to the number of SubDID, and the parent account can issue SubDID unlimitedly.

## Expiration Date
The expiration date of SubDID cannot exceed that of the parent account, and there are no other restrictions.

If the expiration date is approaching, anyone can renew the parent or SubDID to extend the expiration date (SubDID renewal function under development).

## Multi-level SubDID
Currently, only three-level SubDID are supported, that is, xxx.yyy.bit. For support for multi-level SubDID, please pay attention to the news of the .bit team.

## FAQ
### How can I retrieve the 220 CKB frozen when enabling SubDID?

Enabling SubDID requires occupying on-chain storage space, so 220 CKB will be frozen from the Owner address account when enabling SubDID. Once the SubDID function is enabled, it cannot be disabled. After the parent account expires, 220 CKB will be automatically returned to your [.bit balance](https://balance.did.id/).

### Can both the Owner address and Manager address mint SubDID? Where will the cost of minting SubDID be deducted from?

Only the Owner address can enable the SubDID function. After enabling, only the Manager address can mint SubDID. The cost of minting SubDID will be deducted from the [.bit balance](https://balance.did.id/) of the Manager address.

### What is the maximum initial period for minting SubDID?

When minting SubDID, you need to fill in the initial period of the SubDID, which cannot exceed 20 years. After the minting is successful, anyone can renew the SubDID (SubDID renewal function under development).

### Is there a limit to the number of SubDID?

There is no limit to the number of SubDID. The same parent account can mint an unlimited number of SubDID, but the upper limit for each minting is 500 SubDID.

### Can SubDID be renewed?

It is not currently supported, and the renewal function of accounts is under development. After the SubDID is minted, anyone can renew it.

### Why can't I enable SubDID?

Currently, .bit SubDID are only open to .bit partners. If you want to use .bit SubDID in your community or product, please send an email to [melissa@did.id](mailto:melissa@did.id) and attach your project description and how you will mint .bit SubDID in the email body.

### What is SuperDID?

[SuperDID](https://superdid.id/) is the largest .bit SubDID service platform. You can set pricing plans for your .bit SubDID and support multiple payment methods, including BNB, ETH, Polygon, etc. You can share your exclusive link with your community and sell your SubDID directly. Easy to set up, once and for all.
The .bit contract will automatically charge a 3% fee on SubDID sold through SuperDID. In addition, since the .bit smart contract runs on Nervos CKB, the selling cost will be settled in CKB.
