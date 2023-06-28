# Registration Process

Unlike the account model used by the Ethereum public chain, .bit relies on the UTXO (Cell) model used by the Nervos public chain, which is characterized by off-chain determinism.

Different programming models also bring different development experiences. Here, we take the registration process as an example to explain the unique registration process of .bit.

![.bit System Design](./image-system-design.png)

1. Users first access .bit registration services (such as [app.did.id](https://app.did.id)) through the browser in their wallet.
2. The registration service (Registrar) can be any service provided by anyone to offer .bit registration functionality to users, including web, mobile, and client applications.
3. The registration service converts the user's registration request and other operations into a transaction, which is then signed by the user and submitted to the blockchain through the wallet.
4. The Keeper service is a decentralized .bit node that monitors transactions on the chain through node RPCs.
5. When the Keeper discovers user transactions that need to be processed on the chain, it creates specific transactions based on the transaction structure protocol to complete tasks such as account registration.
6. If the registration service is more complete, it can monitor the user's account registration status through node RPCs and provide timely feedback to the user upon successful registration.
7. Once the user successfully registers an account and sets the resolution record, the resolution service (Resolver) can obtain the data by resolving the blockchain through node RPCs.
8. Finally, the resolver provides the data to applications that need to use the resolution record, such as wallets and exchanges, to complete the utilization of the user's account.

## Account Uniqueness and Registration Process
After the account registration process described above, the core asset in .bit, namely the .bit account, is created. Its core value lies in its uniqueness, and understanding the uniqueness of .bit accounts is key to understanding the registration process of .bit accounts. Therefore, we provide a brief overview of the registration process below, as shown in the following figure:

![.bit Registration Process](./image-register-process.png)

1. First, the user applies for registration, during which the account name is hashed and kept confidential. Only the user knows the account and its hash. Other users can only see the irreversible account hash on the chain.
2. After waiting for a period of time, the user can initiate a pre-registration transaction, providing the plaintext of the required account name and the registration fee.
3. If the Keeper service discovers a pre-registration transaction on the chain, it checks the uniqueness of the account name and creates a proposal with a proof of uniqueness, broadcasting a transaction generated based on this proposal.
4. Finally, after waiting for a period of time, the Keeper service can confirm the proposal and complete the registration of the new account. The design and principles of this process are explained in detail in the account chain mechanism.

## On-Chain Account Structure
After the account is successfully registered, the account information is saved on the chain through a Cell (called the AccountCell), and these Cells can eventually form a singly linked list, which is the proof of uniqueness in the account registration process:

![.bit Account Structure](./image-account-structure.png)

## Account Management
After registering a .bit account, it can be managed. Different functions can be operated on a .bit account depending on its state. For more information, please see the following documents:
- [.bit Account Status and Lifecycle](./lifecycle.md)
- [.bit Permission Design](./permissions.md)


## FAQ

### Which public chain addresses can be used to register a .bit account?

Currently, ETH/TRX/Dogecoin/BSC/Polygon addresses can be used to register a .bit account.

After visiting [did.id](https://app.did.id), connect your MetaMask or TronLink wallet to start the registration process. You can also directly visit [app.did.id](https://did.id) for registration using wallets that support ETH/TRX/Dogecoin/BSC/Polygon.

Technically, .bit can be registered using any public chain address ([see the principle](../others/why-assets-on-ckb-can-be-managed-by-btc-address.md)). The .bit team is deploying more public chain signature algorithms to Nervos CKB to support registration with more public chain addresses.

### Why can different public chain addresses be used to register .bit accounts? Is it a centralized solution?

This is what sets .bit apart from other decentralized domain/account systems. In fact, not only can all public chain addresses be used to register .bit accounts, you can even use a regular email to register/hold/manage a .bit account. And, technically, it is completely decentralized, with no need to trust any centralized organization.

This is thanks to the Nervos CKB public chain that .bit relies on, and the relevant technical details can be found in [How BTC addresses manage assets on the CKB chain](../others/why-assets-on-ckb-can-be-managed-by-btc-address.md).

### Why does a .bit account have to be charged annually? Why can't it be purchased once and used forever?

Buying once and using forever is not a reasonable economic model. Problems with this model include:

1. When high-quality accounts are purchased, the .bit system will no longer generate revenue once they are depleted, and the existing development team will lack the motivation to continuously improve the system, nor will they be able to attract new developers to maintain .bit. However, as infrastructure, continuous improvement and promotion of .bit will be inevitable. Therefore, while a one-time purchase of permanent use may seem attractive, what users actually purchase is an account that will not be maintained in the future.
2. The permanent locking of a .bit account due to loss of the private key is a waste for a limited public resource like a .bit account.

In fact, you can also renew your .bit account for decades at a time to achieve "permanent use".

### What is the storage deposit?

The data of each .bit account is stored on the blockchain, and storing data requires storage space, which requires staked tokens to use. When the account is expired and reclaimed, the corresponding storage space is released and the staked tokens are returned to the owner of the account at that time.

At the same time, .bit achieves the following: a storage deposit is paid once during registration, and no additional deposit is required regardless of how many resolution records are added during use.

In addition, since the .bit smart contract runs on Nervos CKB, the storage deposit will be returned in the form of CKB.
### Why does it prompt "Invalid character combination" during registration?

To prevent fraud, .bit has some restrictions, meaning that certain character sets cannot appear simultaneously in the account name. For detailed rules, please refer to: [Character Sets](../register-das/charsets.md)

### Can SubDID be registered?

Yes!

The SubDID feature is now fully available. Any holder of a .bit account can issue SubDIDs on [topdid](https://topdid.com). You can choose to issue your SubDIDs manually or set your own pricing then automatically distribute them. Anyone can claim their own SubDID. Please refer to the [FAQ](https://positive-metatarsal-7cf.notion.site/FAQ-SubDID-Distribution-Tool-b4e03c9d037d4c668cd585bfd20507cf) for more information on how to use [topdid.com](https://topdid.com)

> For more information, please refer to: [.bit SubDID](./subdid.md)

### What is anti-registration snatching? What is the principle of anti-registration snatching?

On the blockchain, all user operations are open and transparent. Therefore, when a user wants to register a .bit account and the corresponding transaction has not yet been packaged into a block in the memory pool, others can see what account the user wants to register. Others can immediately send a transaction with a higher network fee to attempt to get the miner to prioritize packaging this transaction in order to snatch the account. Then they can sell the account to someone who really wants to register it at a high price.

Anti-registration snatching aims to prevent the above behavior as much as possible.

The .bit contract requires two steps to register a new account, corresponding to two transactions, in order to perfectly prevent the above snatching behavior.

1. **Confidential initiation of registration application**: Hash the account to be registered with the registrant's public key, send the first transaction, and place this Hash on the blockchain.
2. **Public account name on the chain**: Actually initiate the registration request, publicly disclose the account name to be registered, and carry the Hash from the previous step. At the same time, the contract requires that the Hash reach a mature state, that is, the previous transaction has been packaged into a block and has reached a certain number of confirmations.

The two transactions require a certain interval, and the second transaction needs to introduce the Cell created by the first transaction. In addition, the user will only publicly disclose the plaintext of the account they want to register in the second step. When a malicious keeper or miner sees the plaintext, it is actually too late. They must start from the first transaction, and by the time they are ready, other keepers have already helped the user complete the registration.

### Why does the interface show that the registration step has been completed, but it was still snatched by someone else?

The only possibility for this situation is that someone else and you happened to want to register this account and both registered at roughly the same time. Anti-registration snatching can only prevent malicious snatching after others obtain the account you want to register by observing the blockchain. However, it cannot prevent all parties from spontaneously registering a certain account at the same time.

### Will the fees paid for a failed registration be refunded?

Yes, they will be refunded. The refund method and time depend on the registrar you use.

### How can I get a reserved account?

Each reserved account has its own reason for being reserved, and they are often deemed to belong to a particular organization or individual. You can see the reason why each account is reserved on Github. Reserved accounts can only be claimed by the corresponding organization or individual. [How to Claim a Reserved Account](https://dasystems.medium.com/claim-your-das-name-for-your-brand-ac487df02d5c)

### Is the registrar the .bit team? What is the difference between different registrars?

The registrar is not the .bit team. In fact, anyone can become a registrar, as anyone can directly interact with the .bit smart contract.

Different registrars provide different user interfaces and payment methods.
