# .bit Multi-Chain Principle

So far, .bit is the only Web3 DID that truly supports multi-chain. In the future, .bit will continue to support all EVM chains, social accounts, TouchID, FaceID, etc.

Currently, .bit already supports buying and holding public chain addresses from the following chains:
- Ethereum
- Tron
- Dogecoin
- BNB Chain
- Polygon

To help you better understand .bit, here is an introduction to how .bit implements multi-chain.

## Open Cryptographic Primitives

As we all know, the .bit contract is deployed on Nervos CKB (referred to as CKB later). The reason why the .bit team chose CKB is because of CKB's core ability: open cryptographic primitives. Based on this feature, .bit allows users to register and hold .bit accounts using any public chain address.

The vast majority of existing blockchains have a fixed template script for verifying transactions, and everyone will verify the signature according to the fixed verification logic.
> For example, BTC, as a representative of many blockchains, uses the Secp256k1 ECDSA signature algorithm, and verifies whether the transaction signature is correct according to a fixed Script template (the OP_CHECKSIG operation code behind it uses the relevant algorithms of ECDSA).

Compared with the fixed verification mode of the stack of BTC, CKB abstracts it into a Turing-complete code. This allows developers to use any signature algorithm, as long as this code does not report an error, it is considered to have unlocked the assets inside.
> If the object that carries the blockchain assets is compared to a safe, then in BTC and other chains, the lock on this safe can only be "Bull" brand, while on CKB, you can freely choose the brand of this lock. It can be "cow" or "heifer", or even a fingerprint lock or using an audio to unlock, or even without locking (that is, anyone can spend the assets inside).

In other words, no matter what algorithm/method the public chain uses to sign, we only need to adopt the same algorithm/method to verify the signature on the contract side of CKB.
Therefore, in theory, CKB supports any signature algorithm.

The following is the application of various algorithms in blockchains:
![img.png](./image-blockchain-cryptographics.png)

Currently, .bit already supports ECDSA and EdDSA signature algorithms, so in theory, it can almost seamlessly support chain users who use these two signature algorithms without the need to care about what CKB is. Users can directly use the address/public-private key of the current chain to manage the .bit account.
## Using Dogecoin as an example
As we all know, Dogecoin does not have "smart contracts", making it difficult to implement a DID naming system based on Dogecoin. However, .bit now allows you to use Dogecoin to hold .bit accounts, relying on the open cryptographic primitives mentioned above.

To use a DOGE address (private key) to manage a .bit account, the following two problems need to be solved:

1. How to generate the signature digest?
   > We know that ECDSA is a signature/verification method for a message (referred to as "message digest" below), and [BIP143](https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki) specifies the specific rules for turning transactions into message digests. However, .bit is based on CKB applications, and because the transaction structure is different, we cannot follow this rule. Fortunately, CKB has its own "BIP143", which is detailed in [this official document](https://github.com/nervosnetwork/ckb-system-scripts/wiki/How-to-sign-transaction), explaining the process of generating message digests from CKB transactions.

2. What is the signing convention?
   > 1. UTXO wallets have had signing conventions for messages for a long time (for security reasons), first by concatenating some [prefixes](https://github.com/bitcoin/bitcoin/blob/40e1c4d4024b8ad35f2511b2e10bf80c5531dfde/src/util/message.cpp#L25) to the original unsigned content (which gradually evolved into [EIP191](https://eips.ethereum.org/EIPS/eip-191) later), and then using the ECDSA signature algorithm to get the signature result.
   > 2. There are now multiple language implementations, such as a JavaScript implementation: [bitcoinjs-lib](https://github.com/bitcoinjs/bitcoinjs-lib).

Fortunately, there are ready-made solutions to the above problems, and we only need to:
1. Utilize the ability of CKB's custom cryptographic primitives to support DOGE's signature algorithm in the .bit contract.
2. Implement the signature call for DOGE on the user side.
3. When operating, the .bit contract verifies whether the user's signature is valid. If it is valid, it allows the user to perform subsequent operations on the .bit account; if it is invalid, it rejects the operation.

## FAQ
### Why can users pay with ETH/TRON/BNB to purchase .bit?
This involves another part of the .bit ecosystem: the registrar. Please visit here to learn more: [.bit registrar](../contribute-to-das/registrar.md)
