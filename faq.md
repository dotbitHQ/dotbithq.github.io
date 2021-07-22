## FAQ

### Is DAS a domain name or an account?

DAS provides a symbolic naming system ending in `.bit` , which any type of data can be associated with. It can be either a domain name or an account, depending on what scenario we use it for. We designed DAS as an account system, and it can actually be used as a domain name system too.

### Is DAS decentralized? 

Yes! DAS is Decentralized Account System that runs on the Nervos CKB, a PoW permissionless chain with a highly open architecture.

The source code for all core components of DAS is open sourced and can be found on Github.

## Registration Related

### What public chain addresses can I use to register for a DAS account?

Currently, DAS accounts can be registered using ETH / TRX addresses. To register, visit https://da.systems and login with your MetaMask/TronLink or any wallets that support ETH / TRX.

DAS can be registered using any public chain address ([how?](others/Why-assets-on-ckb-can-managed-by-btc-address.md)) The DAS team is in the process of deploying more public chain signature algorithms to the Nervos CKB to support more public chain addresses for DAS registration. 

### Why are DAS accounts being charged annually, not one-time purchase for permanent use?

We don't think a one-time purchase for permanent use as a reasonable economic model, which include the following problems:

1. DAS as an infrastructure needs continuous improvement by the developers. There are DAS accounts that more desired than others, and when those desired DAS accounts are purchased out, the DAS system will no longer generate revenue and the existing development team will have no incentive to continuously improve the system or attract new developers to maintain the system. It may sound attractive to buy once and use forever, but the user is actually buying an account that will not be maintained in the future. 
2. Loss of private key, etc. will cause permanent lock of an DAS accounts. This is a waste of a limited public resource like DAS.

### Does the DAS registration fee revenue go to the DAS development team?

DAS registration fee revenue will be kept in the DAS pool, and it is up to the community to decide how to use these funds in the future. The DAS development team will not use any of the funds unless necessary.

### What is the storage deposit?

The data for each DAS account is stored on the Nervos CKB blockchain, and storing the data requires storage space, which requires pledged tokens (CKB) to be used. When an DAS account is reclaimed on expiry date, the corresponding storage space is released and the pledged tokens are returned to the account owner.

A one-time storage deposit is charged at the time of registration, and no additional deposit is required no matter how many parsing records will be added during the usage.

The DAS smart contract runs on the Nervos CKB, the storage deposit will be refunded in the form of CKB.

### Why is there an "invalid character combination" when I register?

In order to prevent fraud, DAS has some restrictions that certain character sets cannot appear in the account name at the same time. For detailed rules, please refer to: [charsets](register-das/charsets.md)

### Why is it possible to register DAS accounts with different public chain addresses? Is it a centralized solution?

This is what makes DAS unique beyond other decentralized domain/account systems. You can register a DAS account with all public chain addresses, or even register/hold/manage a DAS account using an email address. And, technically, it is completely decentralized, without the need to trust any centralized organization.

This is made possible by the Nervos CKB public chain on which DAS relies, for technical details see [Why assets on CKB can be managed by BTC address?](others/why-assets-on-ckb-can-be-managed-by-btc-address.md)

### Can I register a sub-account?

Not at this time, but the sub-account feature is on the roadmap for DAS.

### Why do I only need a signature to manage my account but no need to pay network fees? Is DAS management centralized?

The management of DAS is decentralized. For each operation when managing your DAS account, it will require signature and cost network fees. The network fees are included in the storge fees you paid when register your account, and these fees are sufficient to perform tens of thousands of administrative operations on the DAS account.

### What is Anti-Squatting? What is the principle of anti-squatting?

On the blockchain, all operations of a user are public and transparent. Therefore, when a user wants to register a certain DAS account and the corresponding transaction is still in the memory pool and not packed into the block, other people are able to see what account that user wants to register. Others can immediately issue a transaction with a higher network fee in an attempt to get miners to package the transaction first to grab the account. Then sell the account at a higher price to someone who really wants to sign up for it. Preventing robocalls is about preventing this behavior as much as possible.

The DAS contract requires a two-step process for registering a new account, corresponding to two transactions, in order to prevent any squatting behavior.

1. **Hide the name of the account to be registered**: Hash the account to be registered with the registrant's public key, send the first transaction, and place this hash on the blockchain
2. **Publish the account name to be registered**: Initiate a registration request, exposing the account name to be registered and carrying the hash from the previous step, while the contract requires the hash to reach a mature state, i.e. the last transaction has been packed into the block and reached a certain number of confirmations.

This way, when a malicious user sees that someone is registering an account and tries to grab it, he cannot initiate a second transaction directly because he does not have a mature hash associated with him, and he cannot complete the squatting.

### Why does the interface show that I have finished the anti-squatting step but the DAS account I want to register is taken by someone else?

It could happen when you and someone else are trying to register a same DAS account at the same time. Anti-squatting can only prevent malicious squatting after someone gets the account you want to register by watching the blockchain, it can't prevent all parties from spontaneously registering an account at the same time.

### Will the fees paid for failed registrations be refunded?

Yes, fees will be refunded. How and when it will be refunded depends on the registrar you are using.

### How can I get access to a reserved account?

Each reserved account has its own reason for being reserved, and they are often determined to be owned by an organization or an individual. You can see why each account is reserved on Github. Reserved accounts can only be claimed by the organization or individual of which they belong to. Claiming methods will be announced at a later date.

### Is the registrar a part of the DAS team, and what is the difference between different registrars?

Registrars are not part of the DAS team. Anyone can be a registrar as anyone can interact directly with the DAS smart contracts.

Different registrars offer different user interfaces and payment methods.

### What happens after my account expires?

After the DAS account expiration time, it will enter a 30-day protection period. If you renew your DAS account during the protection period, you will still have the account. If the DAS account is not renewed within the protection period, the DAS account will enter a 7-day reduced price auction period and the first bidder will get the account. After the auction period ends and no bids are placed, the account will become publicly available for registration at a price determined by the number of characters in the account.

## Administration Related

### What are owners and managers? What is the difference between them?

**Owner**, each account has one owner that owns the DAS account and can modify the owner and manager.

**manager**, each account has one manager, who can modify the account's parsed records.

The design of owner and aministrator is practicing the idea of separation of ownership and management. Modifying parsed records is a high frequency operation, while modifying ownership is a low frequency operation. The high-frequency operation will then use the private key frequently, increasing the risk of losing the private key. This separation design allows users to still have ownership of the account when the manager's private key is lost. The owner and manager can be the same address or different addresses. However, we highly recommend using different addresses for the owner and manager.

### Can DAS accounts be transferred (sold) to other people?

Yes. You can transfer an account to another address by changing the owner of the account.

⚠️ Transferring an account is a high-risk operation, and completing the transfer means you lose control of the account completely.

### What is a parsed record?

Each piece of data associated with a DAS account, like a BTC address, a Twitter account, is a parsed record. Each parsed record is a combination of a key and a value.

### Can a DAS add more than one BTC address as a parse record?

Yes. You can even set different labels for different BTC addresses. In fact, multiple records of the same type can be added to a DAS, distinguished by different custom labels.

### How many parsed records can a DAS account have?

This depends on the size of the Witness data that a single CKB transaction can hold, which is large enough to be understood as unlimited.

### Can parsed records be modified?

Yes, they can be modified at any time. However, in order to avoid abuse, different operations will have different frequency limits, depending on the prompt at the time of operation.

### What are custom keys?

DAS has some built-in parsed record types, such as blockchain address, personal information, etc. It also supports users and developers to customize parse record types to support rich application scenarios. For details, please refer to [record namespace](kai-fa-zhe/records-key-namespace.md).

## Inviter/registrar/channel related

### What is an inviter/registrar/channel?

**Inviter**, any DAS account can be used as an inviter. You can get a certain discount when you fill in an existing DAS account as an inviter when you register your account; others can also get a certain reward when they fill in your DAS account as an inviter when they register their account. [Learn about inviters](contribute-to-das/referral.md).

**Channel**, any product that integrates with the DAS registration service (such as a wallet) can be called a channel. If a user completes registration through a channel, the channel gets a percentage of the registration fee. [Learn about channel](contribute-to-das/channel.md).

**Registrar**, an organization that provides a registration interface and payment method for users. [Learn about registrars](contribute-to-das/registrar.md).

### Is the settlement of inviter/channel rewards centralized and why are they paid out only after a certain amount is reached?

Inviters' rewards are decentralized and settled to the invitee as soon as the invitee completes registration. The reason why they are only paid out after a certain amount is reached is due to the underlying principle of Nervos CKB. In order to achieve decentralized settlement, it has to be paid after a certain amount.

### Why are inviter/channel rewards settled in CKB?

DAS is a smart contract running on Nervos CKB, which internally only recognizes assets on CKB blockchain. In fact, DAS internally uses CKB as the basis for fees for registration/renewal/administration/reward settlement actions. The reason why registration fees can be paid in other currencies is that the registrar provides the appropriate service.

## Suffix related

### Why do you use the `.bit` suffix, is `.bit` an Internet Top Level Domain?

No. `.bit` is not an Internet top-level domain and therefore does not conflict with the ICANN-accredited Internet domain namespace. The `.bit` suffix is used because.

1. `.bit` is the basic unit of information, the world of the future is the world of information, and bit is the basic building block of the information world, which is in line with the vision of DAS trying to be the infrastructure for Web 3.0
2. `.bit` is neutral and not associated with any chain, which is in line with the cross-chain characteristic of DAS
3. `.bit` is a prefix of bitcoin and is a tribute
4. `.bit` is cool

### Will DAS have any other suffixes?

We don't think DAS should have other suffixes for the following reasons.

1. more suffixes don't necessarily benefit the user, we like to keep things simple
2. more suffixes are a form of namespace pollution, both for the blockchain DNS and the Internet DNS. the DAS, as a Web 3.0 infrastructure, deserves restraint.

### Can I access the `.bit` domain name on my browser?

No. `.bit` is not an Internet top-level domain and therefore cannot be accessed directly. However, each DAS account corresponds to a `.bit.cc` subdomain, which can be accessed directly through a browser. If alice owns the DAS account `alice.bit`, then he automatically owns the Internet domain `alice.bit.cc`. alice can set up resolution records to determine what users see when they access `alice.bit.cc`.

