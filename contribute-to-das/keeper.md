# Keeper 

.bit is a Dapp based on [Nervos CKB](https://nervos.org). "Off-chain computation, on-chain verification" is the unique design of Nervos CKB. For any Dapp running on top of CKB, there are both off-chain computation-related programs and on-chain verification-related code. 

Keeper is the "off-chain computation" related programs of .bit and anyone can run without permission. It will issue transactions to modify the on-chain state of the CKB based on the on-chain state of the CKB. These transactions need to be validated by the program responsible for "on-chain validation" before they can be packaged on the chain. Therefore, anyone can implement their own Keeper according to [.bit smart contracts](https://github.com/dotbitHQ/das-contracts)

In .bit system, the Keeper program is responsible for batch processing user registration requests and recycling expired accounts, etc. Keeper will be rewarded for each registration request and account recycling process. [View Reward Details](build-together.md).
