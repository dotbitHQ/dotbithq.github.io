### Frequently Asked Questions

### Is DAS a domain name or an account?

DAS provides a symbolic naming system ending in `.bit` on which any type of data can be associated. It can be either a domain name or an account, depending on what scenario we are using DAS for. We usually think of DAS as an account system, but it can actually be used as a domain name system. A domain name should be seen as a scenario for the use of an account system.

### Is DAS decentralized?

As the name implies, DAS is a fully decentralized account system, and the DAS protocol runs on the Nervos CKB, a PoW public chain with a highly open architecture.

The source code for all core components of DAS is also hosted as open source on Github.

## Registration Related

### Why do DAS accounts charge an annual fee, and why can't I buy a one-time permanent use?

A one-time purchase for perpetual line use is not a reasonable economic model. Problems with this model include.

1. when quality accounts are purchased out, the DAS system will no longer generate revenue and the existing development team will have no incentive to continuously improve the system or attract new developers to maintain the DAS. however, as an infrastructure, continuous improvement and rollout of the DAS will be inevitable. Therefore, it may seem attractive to buy once and use forever, but the user is actually buying an account that will not be maintained in the future. 2.
2. Loss of private key, etc. can lead to permanent locking of DAS accounts. This is a waste of a limited public resource like DAS accounts.

In fact, you can also renew your DAS account for decades at a time for "perpetual use".

### Does the DAS registration fee revenue go to the DAS development team?

DAS registration fee revenue is held in the DAS pool. The DAS development team will not use the funds unless necessary.

### What is the storage deposit?

Each DAS account's data is stored on the blockchain, and storing the data requires storage space, which requires pledged tokens to be used. When the account is reclaimed when it expires, the corresponding storage space is released and the pledged tokens are returned to the account owner at that time.

At the same time, DAS is designed in such a way that a one-time storage deposit is paid at the time of registration, and no additional deposit is required no matter how many parsing records are added during the usage.

In addition, since the DAS smart contract runs on the Nervos CKB, the storage deposit will be refunded in the form of a CKB.

### Why is there an "invalid character combination" when I register?

In order to prevent fraud, DAS has some restrictions that certain character sets cannot appear in the account name at the same time. For detailed rules, please refer to: [character set](chang-jian-wen-ti.md)

### Why is it possible to register DAS accounts with different public chain addresses? Is it a centralized solution?

This is what makes DAS unique beyond other decentralized domain name/account systems. In fact, not only can you register a DAS account with all public chain addresses, you can even register/hold/manage a DAS account using a regular email address. And, technically, it is completely decentralized, without the need to trust any centralized organization.

This is made possible by the Nervos CKB public chain, on which DAS relies. Technical details can be found in [How BTC addresses manage assets on the CKB chain](chang-jian-wen-ti.md)

### Can I register a sub-account?

Not at the moment, but sub-account functionality is on the roadmap for DAS.

### Why do I only need a signature to manage my account and not to pay network fees?Is the management of DAS centralized?

The management of DAS is decentralized. The reason why there is no need to pay network fees is that the user has already pre-populated the storage of the DAS account with network fees at the time of registration, and these fees are sufficient to perform tens of thousands of administrative operations on this DAS account.

### What is Anti-Squatting? What is the principle of anti-squatting?

On the blockchain, all operations of the user are public and transparent. Therefore, when a user wants to register a certain DAS account and the corresponding transaction is still in the memory pool and not packed into the block, other people are able to see what account that user wants to register. Others can immediately issue a transaction with a higher network fee in an attempt to get miners to package the transaction first to grab the account. Then sell the account at a higher price to someone who really wants to sign up for it. Preventing robocalls is about preventing this behavior as much as possible.

The DAS contract requires a two-step process for registering a new account, corresponding to two transactions, in order to perfectly prevent the above-mentioned robocalling behavior.

1. **Hide the name of the account to be registered**: Hash the account to be registered with the registrant's public key, send the first transaction, and place this Hash on the blockchain
2. **Publish the account name to be registered**: really initiate a registration request, exposing the account name to be registered and carrying the Hash from the previous step, while the contract requires the Hash to reach a mature state, i.e. the last transaction has been packed into the block and reached a certain number of confirmations.

This way, when a malicious user sees that someone is registering an account and tries to grab it, he cannot initiate a second transaction directly because he does not have a mature Hash associated with him, and he cannot complete the grab.

### Why does the interface show that I have already completed the step of placing a grab, but someone else has grabbed it anyway?

The only possibility is that someone else and you both want to register this account, and they both did it at the same time. Anti-squatting can only prevent malicious squatting after someone gets the account you want to register by watching the blockchain. But it can't prevent all parties from spontaneously registering an account at exactly the same time.

### Will the fees paid for failed registrations be refunded?

Yes, they will be refunded. How and when they are refunded depends on the registrar you are using.

### How can I get access to a reserved account?

Each reserved account has its own reason for being reserved, and they are often determined to be owned by an organization or individual. You can see why each account is reserved on Github. Reserved accounts can only be claimed by the organization or individual to which they belong. Claiming methods will be announced at a later date.

### Is the registrar a DAS team, and what is the difference between different registrars?

A registrar is not a DAS team. In fact, anyone can be a registrar - after all, anyone can interact directly with the DAS smart contracts.

Different registrars offer different user interfaces and payment methods.

### What happens after my account expires?

After the DAS account expiration time, it will enter a 30-day protection period. If you renew your DAS account during the protection period, you will still have the account. If the DAS account is not renewed within the protection period, the DAS account will enter a 7-day reduced price auction period and the first bidder will receive the account. After the auction period ends and no bids are placed, the account will become publicly available for registration at a price determined by the number of characters in the account.

## Administration Related

### What are owners and administrators? What is the difference between them?

**Owner**, each account has an owner, the owner owns the DAS account and can modify the owner and administrator.

**Administrator**, each account has an administrator, who owns the DAS account and can modify the account's resolution records.

The design of owner and administrator is practicing the idea of separation of ownership and management. Modifying resolution records is a high frequency operation, while modifying ownership is a low frequency operation. The high-frequency operation will then use the private key frequently, increasing the risk of losing the private key. This separation design allows users to still have ownership of the account when the administrator's private key is lost. The owner and administrator can be the same address or different addresses. However, we highly recommend using different addresses for the owner and administrator.

### Can DAS accounts be transferred to other people?

Yes. You can transfer an account to another address by changing the owner of the account.

⚠️ Transferring an account is a high-risk operation, and completing the transfer means you completely lose control of the account.

### What is a resolution record?

Each piece of data associated with a DAS account, if a BTC address, a Twitter account, is called a parsed record. Each parsed record is a combination of a key and a value.

### Can a DAS add more than one BTC address as a parse record?

Yes. You can even set different labels for different BTC addresses. In fact, multiple records of the same type can be added to a DAS, distinguished by different custom labels.

### How many resolution records can a DAS account have?

This depends on the size of the Witness data that a single CKB transaction can hold, which is large enough to be understood as unlimited.

### Can parsing records be modified?

Yes, they can be modified at any time. However, in order to avoid abuse, different operations will have different frequency limits, depending on the prompt at the time of operation.

### What are custom keys?

DAS has some built-in parsing record types, such as blockchain address, personal information, etc. It also supports users and developers to customize parse record types to support rich application scenarios. Please refer to [parse record namespace conventions](chang-jian-wen-ti.md) for details.

## Inviter/Registrar/Channel Related

### What is an invitee/registrar/channel?

**Inviter**, any DAS account can be used as an invitee. You fill in a DAS account as an invitee when you register your account, you can get a certain discount; others fill in your DAS account as an invitee when they register their account, you can also get a certain bonus.

**Channel**, any product that integrates a DAS registration service (such as a wallet) can be called a channel. If a user completes a registration through a channel party, the channel party can receive a percentage of the registration fee. [How do I become a channel?] (chang-jian-wen-ti.md)

**Registrar**, an organization that provides a registration interface and payment method for users. [How do I become a registrar?] (chang-jian-wen-ti.md)

### Is the settlement of invitee/channel rewards centralized and why is it paid out only after a certain amount is reached?

Invitation rewards are decentralized and are settled to the invitee immediately after the invitee completes registration. The reason why they are only paid out after a certain amount is reached is due to the underlying principle of Nervos CKB. In order to achieve decentralized settlement, it has to be paid after a certain amount.

### Why are invitee/channel rewards settled in CKB?

This is because DAS is a smart contract running on Nervos CKB, which internally only recognizes Nervos CKB assets. In fact, DAS internally uses CKB as the basis for fees for registration/renewal/administration/reward settlement actions. The reason why registration fees can be paid in other currencies is that the registrar provides the appropriate service.

## Suffix related

### Why do you use the `.bit` suffix, is `.bit` an Internet Top Level Domain?

No. `.bit` is not an Internet top-level domain and therefore does not conflict with the ICANN-accredited Internet domain namespace. The `.bit` suffix is used because.

1. `.bit` is the basic unit of information, the world of the future is the world of information, and bit is the basic building block of the information world, which is in line with the vision of DAS trying to be the infrastructure
2. `.bit` is neutral and not associated with any chain, which is in line with the cross-chain characteristic of DAS
3. `.bit` is a prefix of bitcoin and is a tribute
4. `.bit` is cool

### Will DAS have any other suffixes?

We don't think DAS should have other suffixes for the following reasons.

1. more suffixes don't benefit the user, but make it more cumbersome to use
2. more suffixes are a form of namespace pollution, both for the blockchain DNS and the Internet DNS. the DAS, as a Web 3.0 infrastructure, deserves to be restrained.

### Can I access the `.bit` domain name through my browser?

No. `.bit` is not an Internet top-level domain and therefore cannot be accessed directly. However, each DAS account corresponds to a `.bit.host` subdomain, which can be accessed directly through a browser. If alice owns the DAS account `alice.bit`, then he automatically owns the Internet domain `alice.bit.host`. alice can set up resolution records to determine what users see when they access `alice.bit.host`.
