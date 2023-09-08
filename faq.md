# Frequently Asked Questions

### Is .bit a domain name or an account?

.bit is an account, not a domain name.
We always need to use fixed suffixes to identify certain things, such as file suffixes to identify file types, email suffixes to identify where an email is from, and domain name suffixes to identify the domain name. Therefore, although the unified .bit suffix makes .bit look like a top-level domain name, it is only used to identify .bit accounts.

### Is .bit decentralized?

.bit is a completely decentralized account system. The .bit protocol runs on Nervos CKB, a highly open PoW public chain architecture.

At the same time, all core components of .bit are hosted on Github in an open-source manner.

## Registration related
See [.bit registration process](./technical-details/registration-process.md#FAQ) for details.

## Alias related
See [.bit alias](./technical-details/alias.md#FAQ) for details.

## Second-Level DID related
See [.bit Second-Level DID](./technical-details/subdid.md#FAQ) for details.

## .bit NFT on Ethereum related 
See [.bit ETH NFT](./technical-details/eth-nft.md#FAQ) for details.

## Account recovery related
See [.bit state and lifecycle](./technical-details/lifecycle.md#FAQ) for details.

## Management related
### Why do we only need to sign when managing an account, without paying network fees? Is .bit management centralized?

The management of .bit is decentralized. The reason why no network fees need to be paid is that when users register, they have already pre-set the network fees in the storage space of the .bit account, which is sufficient to manage this .bit account tens of thousands of times.

### Can .bit accounts be transferred (sold) to others?

Yes. You can transfer the ownership of an account to another address by modifying the owner of the account.

⚠️ Transferring an account is a high-risk operation, and completing the transfer means that you have completely lost control of the account.

### Can any .bit account be renewed?

Yes, anyone can renew any .bit account. However, renewing an account does not mean that you will own the account. In addition, if you renew your account when it is about to be recovered, the account may have already been recovered and registered by a new user. This means that your renewal will be successful, but you will still lose ownership of the account.

## Suffix related

### Why use the `.bit` suffix, and is `.bit` a top-level domain name on the Internet?

`.bit` is not a top-level domain name on the Internet, so it will not conflict with the Internet domain name namespace recognized by ICANN. The reason for using `.bit` as a suffix is:

1. `.bit` is the basic unit of information, and the future world is an information world. Bit is the basic component of the information world, which is consistent with the vision of .bit trying to become infrastructure.
2. `.bit` is neutral and not associated with any chain, which is in line with the cross-chain characteristics of .bit.
3. `.bit` is the prefix of bitcoin, which is a tribute.
4. `.bit` is cool.

### Will there be other suffixes for .bit?

Based on the following reasons, we believe that .bit should not have other suffixes:

1. More suffixes do not bring benefits to users, but make usage more complicated.
2. More suffixes, whether for blockchain domain name systems or Internet domain name systems, are a kind of namespace pollution. As the infrastructure of Web3.0, .bit should maintain restraint.

### Can `.bit` domain names be accessed through a browser?

`.bit` is not a top-level domain name on the Internet, so it cannot be accessed directly. However, each .bit account corresponds to a subdomain of `.bit.site`, which can be accessed directly through the browser. If Alice owns the .bit account `alice.bit`, then she will automatically own the Internet domain name `alice.bit.site`. Alice can decide what users see when they access `alice.bit.site` by setting up resolution records. 
