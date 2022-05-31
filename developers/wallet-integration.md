---
sidebarDepth: 1
---

# Wallet Integration

Wallets can integrate .bit on two levels: the transfer interface supports .bit accounts and the onboarding of .bit registration services.

Integrating .bit into your wallet can:

1. Improve user transfer experience and security
2. Get 10%-20% share of registration fees
3. Showcase the wallet brand on the .bit homepage and get community support from .bit.



## Support .bit account when transfer 

<img src="./image-20210718113458550.png" alt=".bit in Wallet" style="zoom:50%;" />



Users can transfer money without having to copy and paste complex blockchain addresses, but simply fill in the recipient's .bit account to make the transfer. The wallet can translate the .bit account into the corresponding recipient address.

Wallets just need to integrate `das-js-sdk` and simply call the corresponding interface to complete the integration. [View Integration Document](./integration-frontend.md).

## Onboard .bit Registration Service

The .bit registration service will be uploaded to the wallet's Dapp store, users will complete .bit registration through the wallet, and the wallet will get the corresponding registration fee share.

.bit registration service information.

> Name: .bit
>
> URL: https://did.id?inviter=xxxwallet.bit&channel=xxxwallet.bit
>
> LOGO material: [Download](https://projects.invisionapp.com/boards/QG43J5JCPTH/)
>
> English introduction: Web3.0 identities for you and your community
>
> Chinese introduction: Web3.0 统一身份系统
>
> Applicable public chains: ETH/TRX/BSC/Polygon

When integrating .bit registration service, please make sure to fill in `inviter` and `channel` information in the URL to get the share of registration fee ([view share ratio](.. /contribute-to-das/build-together.md)). `inviter` and `channel` need to be legitimate registered .bit accounts. Users can change `inviter` information manually in the registration screen, but cannot change `channel` information.
