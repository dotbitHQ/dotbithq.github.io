# Wallet Integration

Wallets can integrate .bit on two levels: the transfer interface supports .bit accounts and the onboarding of .bit registration services.

Integrating .bit into your wallet can:

1. improve user transfer experience and security
2. get 10%-20% share of registration fees
3. showcase the wallet brand on the .bit homepage and get community support from .bit.



## Transfer interface supports .bit account

<img src="./image-20210718113458550.png" alt=".bit in Wallet" style="zoom:50%;" />



Users can transfer money without having to copy and paste complex blockchain addresses, but simply fill in the recipient's .bit account to make the transfer. The wallet can translate the .bit account into the corresponding recipient address.

Wallets just need to integrate `DAS-JS-SDK` and simply call the corresponding interface to complete the access. [View access documentation](https://github.com/DeAccountSystems/das-sdk-js).



## Onboard .bit Registration Service

The .bit registration service will be uploaded to the wallet's Dapp store, users will complete .bit registration through the wallet, and the wallet will get the corresponding registration fee share.

.bit registration service information.

> Name: .bit
>
> URL: https://da.systems?inviter=xxxwallet.bit&channel=xxxwallet.bit
>
> LOGO material: [Download](https://projects.invisionapp.com/boards/QS42CVJRP25/#/6828463/200529574)
>
> English introduction: Cross-chain decentralized account system
>
> Chinese introduction: Cross-chain decentralized account system
>
> Applicable public chains: ETH/TRX

When integrating .bit registration service, please make sure to fill in `inviter` and `channel` information in the URL to get the share of registration fee ([view share ratio](.. /contribute-to-das/build-together.md)). `inviter` and `channel` need to be legitimate registered .bit accounts. Users can change `inviter` information manually in the registration screen, but cannot change `channel` information.



## Show your wallet on .bit official website

Please [submit a Pull Request](https://github.com/DeAccountSystems/da.systems) to our official website repository after completing the integration, and we will display your brand on the .bit official website as soon as possible.
