# FAQ

### Is .bit a domain name or an account?


.bit is not a domain, it is an account system. 
.bit provides a symbolic naming system ending with `.bit` , which can be associated with any type of data. We always need a suffix to identify and recognize the types of data, such as file type, email address, domain name, etc. Although the .bit account has a suffix, .bit, making it resemble a top-level domain (TLD), it should be not confused as a domain name.

### Is .bit decentralized? 

Yes! .bit is a Decentralized Account System that runs on Nervos CKB (Common Knowledge Base), a PoW permissionless chain with a highly open architecture.

The source code for all core components of .bit is open-source and can be found on Github.

## Registration Related

### What public chain addresses can I use to register for a .bit account?

Currently, .bit accounts can be registered with  ETH / TRX / BSC / Polygon addresses. To register, please visit [https://did.id]https://did.id and log in with your MetaMask/TronLink or any wallet that supports  ETH / TRX / BSC / Polygon .

.bit can be registered with any public chain address ([how?](others/why-assets-on-ckb-can-be-managed-by-btc-address.md)) The .bit team is in the process of deploying more public chain signature algorithms to the Nervos CKB to support more public chain addresses for .bit registration.

### Why do .bit accounts operate on a subscription-based model, and not a one-time purchase for permanent use?

We do not believe that a one-time purchase of the accounts for permanent use is a reasonable economic model. Here are some reasons:
1. .bit, as an infrastructure, should be iterated with continuous improvements by developers. With a subscription-based model, there is an avenue for the .bit ecosystem to generate revenue, and provide incentives for the development teams to continuously improve the system, and attract new developers to maintain the system. A one-time purchase may result in a less-than-ideal situation where users end up buying accounts that would not be maintained in the future. 
2. A one-time purchase may result in the loss of a private key which will cause a permanent lock of a .bit account. To a limited public resource like .bit, it causes huge waste.

### What is the storage deposit?

The data for each .bit account is stored on Nervos CKB, and storing data on the CKB chain requires storage space, which means pledged tokens (CKB) are required. When a .bit account is reclaimed on the expiry date, the corresponding storage space is released and the pledged tokens will be returned to the account owner.

A one-time storage deposit is charged at registration to support this storage cost, and no additional deposit is required no matter how many parsing records are added in usage.

Since the .bit smart contract runs on Nervos CKB, the storage deposit will be refunded as CKB.

### Why is there an "invalid character combination" when I register?

To prevent fraud, .bit has implemented some restrictions such that certain character sets cannot appear in the account name at the same time. For detailed rules, please refer to: [charsets](register-das/charsets.md)

### Why is it possible to register .bit accounts with different public chain addresses? Is it a centralized solution?

This is what makes .bit unique from other decentralized domain/account systems. You can register a .bit account with any public chain address, or even register/hold/manage a .bit account by using an email address. It is completely decentralized without the need to trust any centralized organization.

This is made possible by Nervos CKB public chain on which .bit is built on, for technical details please refer to this article: [Why assets on CKB can be managed by BTC address?](others/why-assets-on-ckb-can-be-managed-by-btc-address.md)

### Can I register a sub-account?

Yes!

The .bit sub-account feature is now live, in beta. A main-account needs to be in the whitelist in the test phrase to enable the sub-account feature. If you wish to join the whitelist and try the sub-account feature, please send an application to [supermancy@did.id](supermancy@did.id). 

Once approved, you can issue sub-accounts on your account via the data page [data.did.id](https://data.did.id).

### Why do I only need a signature to manage my account but there is no need to pay network fees? Is .bit management centralized?

The management of .bit is decentralized. For each operation using your .bit account, it will require a signature and it will cost network fees. The network fees are already included in the storage fees which you have paid for when registering for your account, and these fees are sufficient to perform tens of thousands of administrative operations on the .bit account.

### What is Anti-Squatting? What is the principle of anti-squatting?

On the blockchain, all operations from a user are public and transparent. Therefore, this potentially presents an issue: when a user wants to register for a certain .bit account and the corresponding transaction is still in the memory pool and not packed into the block, the public can see the name of the account that this user wants to register for. The public can take advantage of this and hijack the intended user's request by immediately issuing a transaction with a higher gas fee to incentivise miners to package his/her transaction first, buying the user's intended .bit account. He/she can then sell the account at a higher price to the original user who wants to own it.

To prevent squatting behaviors, the .bit contract requires a two-step process, corresponding to two transactions, for registering a new account:

1. **Apply for registration in private**: Hash the account to be registered with the registrant's public key, send the first transaction, and place this hash on the blockchain
2. **Reveal the account name on the chain**: Initiate a registration request, exposing the account name to be registered and carrying the hash from the previous step, while the contract requires the hash to reach a mature state, i.e. the last transaction has been packed into the block and reached a certain number of confirmations.

The two transactions need to be spaced-out, and the second transaction needs to include the Cell created by the first transaction. In addition, the user only discloses the plaintext of the account they want to register in the second step. By the time a malicious Keeper or miner sees the plaintext, it would be too late. He/she has to start with the first transaction, and by the time he or she is ready, other Keepers would have already registered the account for the user.

### Why does the interface show that I have finished the anti-squatting step but the .bit account I want to register is taken by someone else?

This could happen when you and someone else is trying to register the same .bit account at the same time. Anti-squatting can only prevent malicious squatting when someone gets the account you want to register by watching the blockchain. It does not prevent all parties from spontaneously registering an account at the same time.

### Will the paid fee for failed registrations be refunded?

Yes, fees will be refunded. How and when it will be refunded depends on the registrar that you are using.

### How can I get access to a reserved account?

Accounts are reserved for particular reasons since they are often judged to be owned by an organization or an individual. You can check why each account is reserved on Github. Reserved accounts can only be claimed by the organization or individual to which they belong to. See this article on [how to claim a reserved .bit](https://dasystems.medium.com/claim-your-das-name-for-your-brand-ac487df02d5c)

### Is the registrar a part of the .bit team, and what is the difference between different registrars?

The registrar is not part of the .bit team. Anyone can be a registrar as anyone can interact directly with the .bit smart contracts.

Different registrars offer different user interfaces and payment methods.

### What happens after my account expires?

:::tip
Dutch Auction is not enabled currently, the account will be directly reclaimed after the 90 days of protection period.
:::

When a .bit account expires, it will be given a 90-day grace period. If you renew your .bit account during this grace period, you will still keep the account. If the .bit account is not renewed within the grace period, the account will enter the [Dutch Auction](https://en.wikipedia.org/wiki/Dutch_auction) phase for 28 days, during which the first bidder will get the account. If the auction period ends with no bids for the account, it will become publicly available for registration at a price determined by the number of characters within.


## Administration Related

### What are owners and managers? What is the difference between them?

**Owner**, each account has an owner, who owns the .bit account and can modify the owner and administrator.

**Manager**, each account has a manager, who owns the .bit account and can modify the account's record.

The design of owner and administrator is based on the idea of separation of ownership and management. Modifying records is a high frequency operation, while modifying ownership is a low frequency operation. The high frequency operation will then use the private key frequently, increasing the risk of losing the private key. This role-separation design allows users to maintain the ownership of the account even if the manager's private key is lost. The owner and manager can be the same or different address. However, we highly recommend using different addresses for owners and managers.

### Can .bit accounts be transferred (sold) to other people?

Yes. You can transfer an account to another address by changing the owner.

⚠️ Transferring an account is a high-risk operation. Completing the transfer means you will lose control of the account entirely.

### What is a record?

Each piece of data associated with a .bit account, like a BTC address, a Twitter account etc. is a record. Each record is a combination of a key and a value.

### Can a .bit account add more than one BTC address as a parse record?

Yes. You can even set different labels for different BTC addresses. In fact, multiple records of the same type can be added to a .bit account, distinguished by different custom labels.

### How many records can a .bit account have?

It depends on the size of the Witness data that a single CKB transaction can hold. It is large enough such that it is almost unlimited in terms of the number of records it can have.

### Can Records be modified?

Yes, they can be modified at any time. However, in order to avoid abuse, different operations will have different frequency limits, depending on the prompt at the time of operation.

### What are custom keys?

.bit account has some built-in record types, such as blockchain address, personal information, etc. It also supports users and developers to customize parse record types for rich application scenarios. For details, please refer to [record namespace](kai-fa-zhe/records-key-namespace.md).

## Inviter/registrar/channel related

### What is an inviter/registrar/channel?

**Inviter**, any .bit account can be an inviter. For registration, you can get a discount after filling in an existing .bit account as an inviter; Others  can also receive a bonus when they fill in your .bit account as an inviter while registering for their accounts. [Learn about inviters](contribute-to-das/referral.md).

**Channel**, any product that integrates with .bit registration service (such as a wallet) can be called a channel. If a user completes the registration process through a channel, the channel can earn part of the registration fee. [Learn about channel](contribute-to-das/channel.md).

**Registrar**, an organization/individual that provides a registration interface and payment methods for users. [Learn about registrars](contribute-to-das/registrar.md).

### Is the settlement of inviter/channel rewards a centralized process? Why does it pay out only if a certain amount is reached?

Inviters' rewards are settled in a decentralized way to the invitee as soon as the invitee completes registration. The rewards are only paid out after a certain amount is reached because of the underlying principle of Nervos CKB, which is designed to achieve decentralized settlement.

### Why are inviter/channel rewards settled in CKB?

Since .bit contract is running on Nervos CKB, it internally only recognizes assets on the CKB blockchain. In fact, .bit charges fees for operations such as registration/renewal/administration/reward settlement on the basis of CKB. The reason why registration fees can be paid in other currencies is because the registrar provides extra currency exchange service.

## Suffix related

### Why do you use the `.bit` suffix, is `.bit` an Internet Top Level Domain?

No. `.bit` is not an Internet top-level domain and therefore does not conflict with the ICANN-accredited Internet domain namespace. The `.bit` suffix is used because:

1. `.bit` is the basic unit of information. The future world is a world of information, and bit is the basic building block of the information world. This implication is in line with the vision of .bit, which aims to be the infrastructure for Web 3.0
2. `.bit` is neutral and not associated with any chain, which is in line with the cross-chain characteristic of .bit
3. `.bit` is a prefix of bitcoin and is a tribute
4. `.bit` is cool

### Will .bit have any other suffixes?

There are currently no plans for other suffixes. Here are some reasons:

1. More suffixes don't necessarily benefit users. We like to keep things simple.
2. More suffixes create a type of namespace pollution, both for the blockchain DNS and the Internet DNS. .bit, as a Web 3.0 infrastructure, needs to be restrained.

### Can I access the `.bit` domain name on my browser?

No. `.bit` is not an Internet top-level domain and therefore cannot be accessed directly on the browser. However, each .bit account corresponds to a `.bit.cc` subdomain, which can be accessed directly through a browser. If Alice owns the .bit account `alice.bit`, she then automatically owns the Internet domain `alice.bit.cc`. Alice can set up resolution records to determine what users can access if they access `alice.bit.cc`.

## .bit alias related

### Why do I need to freeze 201 CKB to set a .bit alias?

When you set the .bit alias, the relevant information needs to be stored on the blockchain and 201 CKB of storage space is required to store the data. When you delete the .bit alias, 201 CKB will be automatically returned to your balance. There is no cost to edit the .bit alias.

### Can I set more than one .bit alias for one address?

Currently only one .bit alias can be set for an address.

### If I set alice.bit as the .bit alias of my address, will my .bit alias be cleared when the alice.bit account expires?

Your .bit alias will be invalid, but it will not be cleared. When alice.bit expires, its data will be cleared. You can delete the .bit alias at any time and at the same time 201 CKB will automatically be returned to your balance.

### If the .bit account I set is sold or transferred to someone else, will my .bit alias be cleared?

Your .bit alias will be invalid, but it will not be cleared. When the .bit account is sold or its owner permission is transferred, its data will be cleared. You can delete the .bit alias at any time, and at the same time 201 CKB will be automatically returned to your balance.

### Can I set someone else’s .bit account as my .bit alias?

Yes. Any of the following conditions must be met for the .bit alias to be valid.

- Your address is the Owner / Manager of the .bit account.
- Your address is in the data of the .bit account.

### Can I set the .bit alias of my multiple addresses to the same .bit account?

Yes. It will work as long as the .bit alias for each address meets one of the following conditions.

- Your address is the Owner / Manager of the .bit account.
- Your address is in the data of the .bit account.

### What Apps are integrated with .bit alias now?
Currently, .bit DApp, DIDTop, NFTScan, NFTGo, WePiggy, ShowMe have supported .bit alias. [View more](https://www.did.id/ecosystems).

## .bit NFT on Ethereum related

### What is the difference between .bit NFTs on Ethereum and a normal .bit?

With the powerful cross-chain capability of .bit, you can register .bit on different public chains. Also, you can transfer .bit between any public chain address at any time.
A .bit NFT on Ethereum and a normal .bit can be converted at any time, and they have the following differences in terms of usage functions and scenarios.

1) .bit NFT on Ethereum

- Have all characteristics as an NFT on Ethereum. You can view it in your ETH wallet;
- Trade on the Ethereum NFT marketplaces, such as [OpenSea](https://opensea.io/collection/dotbit), [Element](https://element.market/collections/dotbit), [LooksRare](https://looksrare.org/collections/0x60eB332Bd4A0E2a9eEB3212cFdD6Ef03Ce4CB3b5), etc.;
- Functions such as managing data, renewing, setting .bit alias, distributing sub-accounts, etc. are not available.
- Available in Ethereum network.
- The account is in a special status and cannot be used as an inviter for new account registration.

2) A normal .bit account

- Support for managing data, renewing fees, setting .bit aliases, distributing sub-accounts, etc.;
- Trade on [DID.Top](https://did.top/) marketplace;
- Available in Ethereum, BNB Chain, Polygon and Tron networks.

### After converting to .bit NFT on Ethereum, can I still convert it to a regular .bit?

Yes. You can convert a .bit NFT on Ethereum to a regular .bit at any time.

### Where can I trade after converting to .bit NFT on Ethereum?

After conversion, .bit NFT meets the ERC-721 protocol on Ethereum and can be traded on all trading markets that support Ethereum NFT.

### Can I manage the data in .bit and renew it after converting to .bit NFT on Ethereum?

No. After converting to .bit NFT on Ethereum, the data stored in .bit will be cleared. You can convert it to a normal .bit and then manage the data and renew it.

### After converting to .bit NFT on Ethereum, how do I transfer it to someone else?

You can transfer your .bit NFT to someone else in your ETH wallet directly.

### My .bit expires, will my .bit NFT on Ethereum be recycled?

Yes. If your .bit expires after the grace period. Your .bit NFT on Ethereum will be recycled automatically. The .bit account will be automatically recycled.

### Why can’t my .bit be converted to an NFT on Ethereum?

You will not be able to convert your .bit to NFT on Ethereum if your account is in one of the following states.

- The .bit account is on sale at [DIDTop](https://did.top/). You can convert after delisting from[DIDTop](https://did.top/).
- The .bit account is owned by a Tron address. You can transfer its owner rights to your Ethereum / BNB chain / Polygon address and then convert it.
- Your .bit will expire in less than a month. You can renew it and then convert it.

### When converting to .bit NFT on Ethereum, can I cancel the preparation?

After the step 1, you cannot cancel it. You should click the second step “Pay to Mint” to complete the conversion process. You can convert your .bit NFT on Ethereum to a normal .bit at any time.

### How do I check the expiration date of my .bit NFT on Ethereum?

You can check it on [OpenSea](https://opensea.io/collection/dotbit).

## Account recycling related

### Will the storage deposit be automatically refunded after the account is recycled?

Yes. When an account is recycled, the storage deposit will be automatically refunded to the [.bit balance](https://balance.did.id/) of the original owner of the account. You can view the refund in your [.bit balance](https://balance.did.id/).

### Where can I check my refunded storage deposit?

You can view your the refund in your [.bit balance](https://balance.did.id/).

### My .bit has been converted to NFT on Ethereum, will it be recycled?

Yes. Whether your .bit is converted to NFT on Ethereum or not, your .bit account will be automatically recycled if it is not renewed in time within the grace period.

### Why doesn’t the .bit account enter the reduced price auction period when it is recycled?

Currently, the reduced-price auction is not active, and the account will be recycled directly after the grace period. Then anyone can register for the account.

### When I registered, I paid ETH / BNB / MATIC / TRX / … Why did I receive a storage deposit in CKB after my account expired?

.bit has a unique [registrar](https://docs.did.id/contribute-to-das/registrar) role in the .bit ecosystem. .bit is a set of smart contracts running on the Nervos CKB, which identifies the CKB and registers a .bit account for users. The registrar provides a register interface and a promissory service for users. Users can pay in different tokens such as ETH, BNB, MATIC, TRX, USDT, etc. to register for a .bit account.

The storage deposit will be automatically returned by the .bit contract to the owner after the account is recycled by the .bit contract, so the refund is CKB.

### Why is there a delay in account recovery?

The expiry time of an account is based on the on-chain time. The time required for account recycling depends on the CKB network and is expected to take 10 to 30 minutes.[View the current on-chain time](https://app.did.id/explorer).
