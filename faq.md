# FAQ

### Is .bit a domain name or an account?


.bit is not a domain, it is an account system. 
.bit provides a symbolic naming system ending with `.bit` , with which any type of data can be associated. We always need a suffix to recognize some kinds of things, such as file type, email address, domain name, etc. Even if the .bit account has a suffix, .bit, making it looks like a TLD, it is not.

### Is .bit decentralized? 

Yes! .bit is a Decentralized Account System that runs on Nervos CKB, a PoW permissionless chain with a highly open architecture.

The source code for all core components of .bit is open-sourced and can be found on Github.

## Registration Related

### What public chain addresses can I use to register for a .bit account?

Currently, .bit accounts can be registered with  ETH / TRX / BSC / Polygon addresses. To register, please visit https://did.id and log in with your MetaMask/TronLink or any wallets that support  ETH / TRX / BSC / Polygon .

.bit can be registered with any public chain address ([how?](others/why-assets-on-ckb-can-be-managed-by-btc-address.md)) The .bit team is in process of deploying more public chain signature algorithms to the Nervos CKB to support more public chain addresses for .bit registration.

### Why do .bit accounts charge annually, not one-time purchases for permanent use?

We don't think a one-time purchase for permanent use is a reasonable economic model. Here are some reasons:
1. .bit, as an infrastructure, needs continuous improvement by the developers. There are .bit accounts that are relatively more desired. If they are purchased out, the .bit system is no longer able to generate revenue, the existing development team would have no incentive to continuously improve the system, and new developers would not be attracted to maintain the system. It may sound like a good idea to buy once and use forever, but the user is buying an account that would not be maintained in the future. 
2. The loss of a private key will cause a permanent lock of a .bit account. To a limited public resource like .bit, it causes huge waste.

### What is the storage deposit?

The data for each .bit account is stored on Nervos CKB, and storing data requires storage space, which means pledged tokens (CKB) are needed. When a .bit account is reclaimed on the expiry date, the corresponding storage space is released and the pledged tokens will be returned to the account owner.

A one-time storage deposit is charged at registration, and no additional deposit is required no matter how many parsing records are added in usage.

Since the .bit smart contract runs on Nervos CKB, the storage deposit will be refunded as CKB.

### Why is there an "invalid character combination" when I register?

To prevent fraud, .bit has some restrictions that certain character sets cannot appear in the account name at the same time. For detailed rules, please refer to: [charsets](register-das/charsets.md)

### Why is it possible to register .bit accounts with different public chain addresses? Is it a centralized solution?

This is what makes .bit unique from other decentralized domain/account systems. You can register a .bit account with any public chain address, or even register/hold/manage a .bit account by using an email address. It is completely decentralized without the need to trust any centralized organization.

This is made possible by Nervos CKB public chain on which .bit relies, for technical details please check [Why assets on CKB can be managed by BTC address?](others/why-assets-on-ckb-can-be-managed-by-btc-address.md)

### Can I register a sub-account?

Not at this time, but the sub-account function is on the roadmap of .bit.

### Why do I only need a signature to manage my account but no need to pay network fees? Is .bit management centralized?

The management of .bit is decentralized. For each operation when managing your .bit account, it will require signature and cost network fees. The network fees are included in the storage fees you paid when registering your account, and these fees are sufficient to perform tens of thousands of administrative operations on the .bit account.

### What is Anti-Squatting? What is the principle of anti-squatting?

On the blockchain, all the operations from a user are public and transparent. Therefore, when a user wants to register a certain .bit account and the corresponding transaction is still in the memory pool and not packed into the block, other people can see what account this user wants to register. Others can grab the account by immediately issuing a transaction with a higher gas fee to get miners to package the transaction first, and then sell the account at a higher price to people who want it. Preventing robocalls is to prevent such behaviors as much as possible.

To prevent squatting behaviors, the .bit contract requires a two-step process, corresponding to two transactions, for registering a new account.

1. **Apply for registration in private**: Hash the account to be registered with the registrant's public key, send the first transaction, and place this hash on the blockchain
2. **Reveal the account name on the chain**: Initiate a registration request, exposing the account name to be registered and carrying the hash from the previous step, while the contract requires the hash to reach a mature state, i.e. the last transaction has been packed into the block and reached a certain number of confirmations.

The two transactions need to be spaced, and the second transaction needs to include the Cell created by the first transaction. In addition, the user only discloses the plaintext of the account they want to register in the second step. By the time a malicious Keeper or miner sees the plaintext, it's too late. He has to start with the first transaction, and by the time he's ready, other Keepers have already registered the account for the user.

### Why does the interface show that I have finished the anti-squatting step but the .bit account I want to register is taken by someone else?

It could happen when you and someone else is trying to register the same .bit account at the same time. Anti-squatting can only prevent malicious squatting when someone gets the account you want to register by watching the blockchain. It can't prevent all parties from spontaneously registering an account at the same time.

### Will the paid fee for failed registrations be refunded?

Yes, fees will be refunded. How and when will it be refunded depending on the registrar you are using.

### How can I get access to a reserved account?

Accounts are reserved for particular reasons since they are often judged to be owned by an organization or an individual. You can check why each account is reserved on Github. Reserved accounts can only be claimed by the organization or individual to which they belong to. [How to claim the reserved .bit](https://dasystems.medium.com/claim-your-das-name-for-your-brand-ac487df02d5c)

### Is the registrar a part of the .bit team, and what is the difference between different registrars?

The registrar is not part of the .bit team. Anyone can be a registrar as anyone can interact directly with the .bit smart contracts.

Different registrars offer different user interfaces and payment methods.

### What happens after my account expires?

When a .bit account expires, it will be in a 90-day grace period. If you renew your .bit account during the grace period, you will still keep the account. If the .bit account is not renewed within the grace period, the account will enter a 28-day [Dutch Auction](https://en.wikipedia.org/wiki/Dutch_auction) period, during which the first bidder will get the account. If the auction period ends with no bids for the account, it will become publicly available for registration at a price determined by the number of characters within.

## Administration Related

### What are owners and managers? What is the difference between them?

**Owner**, each account has an owner, who owns the .bit account and can modify the owner and administrator.

**manager**, each account has a manager, who owns the .bit account and can modify the account's record.

The design of owner and administrator is based on the idea of separation of ownership and management. Modifying records is a high frequency operation, while modifying ownership is a low frequency operation. The high frequency operation will then use the private key frequently, increasing the risk of losing the private key. This separation design allows users to maintain the ownership of the account even if the manager's private key is lost. The owner and manager can be the same address or different addresses. However, we highly recommend using different addresses for owner and manager.

### Can .bit accounts be transferred (sold) to other people?

Yes. You can transfer an account to another address by changing the owner.

⚠️ Transferring an account is a high-risk operation. Completing the transfer means you will lose control of the account entirely.

### What is a record?

Each piece of data associated with a .bit account, like a BTC address, a Twitter account, is a record. Each record is a combination of a key and a value.

### Can a .bit account add more than one BTC address as a parse record?

Yes. You can even set different labels for different BTC addresses. In fact, multiple records of the same type can be added to a .bit account, distinguished by different custom labels.

### How many records can a .bit account have?

It depends on the size of the Witness data that a single CKB transaction can hold. It is large enough that almost is unlimited.

### Can Records be modified?

Yes, they can be modified at any time. However, in order to avoid abuse, different operations will have different frequency limits, depending on the prompt at the time of operation.

### What are custom keys?

.bit account has some built-in record types, such as blockchain address, personal information, etc. It also supports users and developers to customize parse record types for rich application scenarios. For details, please refer to [record namespace](kai-fa-zhe/records-key-namespace.md).

## Inviter/registrar/channel related

### What is an inviter/registrar/channel?

**Inviter**, any .bit account can be an inviter. For registration, you can get a discount after filling in an existing .bit account as an inviter; Others also can get a bonus when they fill in your .bit account as an inviter while registering for their accounts. [Learn about inviters](contribute-to-das/referral.md).

**Channel**, any product that integrates with .bit registration service (such as a wallet) can be called a channel. If a user completes the registration process through a channel, the channel can earn part of the registration fee. [Learn about channel](contribute-to-das/channel.md).

**Registrar**, an organization/individual that provides a registration interface and payment methods for users. [Learn about registrars](contribute-to-das/registrar.md).

### Is the settlement of inviter/channel rewards a centralized process? Why does it pay out only if a certain amount is reached?

Inviters' rewards are settled in a decentralized way to the invitee as soon as the invitee completes registration. The rewards are only paid out after a certain amount is reached because of the underlying principle of Nervos CKB, which is designed to achieve decentralized settlement.

### Why are inviter/channel rewards settled in CKB?

Since .bit contract is running on Nervos CKB, it internally only recognizes assets on CKB blockchain. In fact, .bit charges fees for operations such as registration/renewal/administration/reward settlement on the basis of CKB. The reason why registration fees can be paid in other currencies is that the registrar provides extra currency exchange service.

## Suffix related

### Why do you use the `.bit` suffix, is `.bit` an Internet Top Level Domain?

No. `.bit` is not an Internet top-level domain and therefore does not conflict with the ICANN-accredited Internet domain namespace. The `.bit` suffix is used because:

1. `.bit` is the basic unit of information. The future world is a world of information, and bit is the basic building block of the information world. This implication is in line with the vision of .bit, which aims to be the infrastructure for Web 3.0
2. `.bit` is neutral and not associated with any chain, which is in line with the cross-chain characteristic of .bit
3. `.bit` is a prefix of bitcoin and is a tribute
4. `.bit` is cool

### Will .bit have any other suffixes?

We don't think so. Here are some reasons:

1. More suffixes don't necessarily benefit the users. We like to keep things simple.
2. More suffixes means a type of namespace pollution, both for the blockchain DNS and the Internet DNS. .bit, as a Web 3.0 infrastructure, needs to be restraint.

### Can I access the `.bit` domain name on my browser?

No. `.bit` is not an Internet top-level domain and therefore cannot be accessed directly on the browser. However, each .bit account corresponds to a `.bit.cc` subdomain, which can be accessed directly through a browser. If alice owns the .bit account `alice.bit`, then she automatically owns the Internet domain `alice.bit.cc`. Alice can set up resolution records to determine what users can see if they access `alice.bit.cc`.

