# Integrating DAS in the wallets

Wallets can integrate DAS on two levels: the transfer interface supports DAS accounts and the onboarding of DAS registration services.

Integrating DAS into your wallet can:

1. improve user transfer experience and security
2. get 10%-20% share of registration fees
3. showcase the wallet brand on the DAS homepage and get community support from DAS.



## Transfer interface supports DAS account

<img src="image-20210718113458550.png" alt="DAS in Wallet" style="zoom:50%;" />



Users can transfer money without having to copy and paste complex blockchain addresses, but simply fill in the recipient's DAS account to make the transfer. The wallet can translate the DAS account into the corresponding recipient address.

Wallets just need to integrate `DAS-JS-SDK` and simply call the corresponding interface to complete the access. [View access documentation](https://github.com/DeAccountSystems/das-sdk-js).



## Onboard DAS Registration Service

The DAS registration service will be uploaded to the wallet's Dapp store, users will complete DAS registration through the wallet, and the wallet will get the corresponding registration fee share.

DAS registration service information.

> Name: DAS
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

When integrating DAS registration service, please make sure to fill in `inviter` and `channel` information in the URL to get the share of registration fee ([view share ratio](.. /contribute-to-das/build-together.md)). `inviter` and `channel` need to be legitimate registered DAS accounts. Users can change `inviter` information manually in the registration screen, but cannot change `channel` information.



## Show your wallet on DAS official website

Please [submit a Pull Request](https://github.com/DeAccountSystems/da.systems) to our official website repository after completing the integration, and we will display your brand on the DAS official website as soon as possible.
