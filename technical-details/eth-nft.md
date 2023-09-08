# .bit Ethereum NFT

## Background
Thanks to the powerful cross-chain capability of .bit, you can register and manage .bit with different public chain addresses, and transfer .bit between any public chain addresses at any time.

The native .bit account data itself is on Nervos CKB, and there is currently no mature trading platform on Nervos. The .bit team developed their own trading platform, [did.top](https://did.top/).

To facilitate Ethereum users to use Ethereum's mature NFT trading platform, we have launched the function of converting .bit to Ethereum NFT. You can convert a .bit account on Nervos to an NFT that conforms to the Ethereum [ERC-721](https://eips.ethereum.org/EIPS/eip-721) specification.

## Principle
The principle of .bit implementing multi-chains is based on the open cryptography of .bit, see: [.bit multi-chain principle](./multichain-principle.md). And the data of .bit is stored on Nervos CKB.

Based on open cryptography, we can allow users to hold .bit accounts with different blockchain addresses. However, because the data is stored on the Nervos network, users cannot fully utilize Ethereum's powerful NFT trading system.

Converting .bit to Ethereum NFT allows users to leverage Ethereum's powerful ecosystem. The basic principle is to use a very secure cross-chain bridge to achieve this.

When a user initiates a cross-chain operation, the cross-chain bridge will first receive the operation on the chain for parsing, and perform a `lock` operation on the user's account. Afterwards, any user can mint the account to Ethereum, completing a complete and secure cross-chain operation. The specific description is as follows:

### Cross-chain Steps
1. Lock: The user initiates a cross-chain request, signs it, and submits the operation to the Nervos network. At this time, the .bit on Nervos will be in the `Lock` state and all data will be cleared.
2. The cross-chain bridge listens to the Nervos network, obtains the user's cross-chain request, and generates a mint transaction to be published on Ethereum.
3. Mint: The user submits the `mint` transaction to the Ethereum network, and a corresponding NFT will be minted on Ethereum.
4. Afterwards, the user can carry out normal NFT trading on Ethereum.

**Note**
The two steps of cross-chain operation `lock` and `mint`, `lock` cannot be directly revoked. Once the cross-chain operation starts, it must be completed in full. If you want to restore to the Nervos network after starting, you need to complete the second step `mint` operation first, and then perform [reverse cross-chain operation](#Reverse Cross-Chain Steps).
### Reverse Cross-Chain Steps
1. The user calls the recycle interface of the .bit NFT contract on Ethereum, and the .bit NFT on Ethereum will be destroyed.
2. The cross-chain bridge listens to the Ethereum network, obtains the user's cancel cross-chain request, and `unlock` the originally `locked` account on the Nervos network.
3. The user obtains a normal status .bit account and can perform corresponding management operations.

### Security
**Cross-Chain Security**
The .bit cross-chain bridge is a very secure multi-signature cross-chain bridge. The code has undergone strict internal & external audits and has invited authoritative project parties in the industry to serve as multi-signature nodes.

**Contract Security**
The .bit NFT contract uses the most popular solution in the industry and has undergone strict code audits. At the same time, in implementation, the code's most simplified logic is ensured to avoid possible logical attacks.

> For related code, please see: [related links](#Related Links)

**Parsing Security**
In order to ensure the consistency of data after cross-chain, we will clear the data container in the original .bit after cross-chain. This ensures that users will not parse incorrect data after the NFT on Ethereum is transferred or traded.

### State Requirements
In general, any normal status .bit can be converted into an Ethereum NFT. However, some special .bit situations cannot be converted into .bit NFT, mainly the following:

- .bit that is currently for sale on DIDTop. You can remove it from DIDTop and then convert it;
- .bit that is close to expiration. If your .bit has a validity period of less than 30 days, you can renew it before converting it.
- .bit managed by Tron address. You can transfer its owner permission to your Ethereum / BNB chain / Polygon address before converting it.

> For more state descriptions, please see [.bit Account Status & Lifecycle](./lifecycle.md).
### Function Limitations
.bit NFT on Ethereum and regular .bit can be converted at any time, but they have the following differences in terms of functionality and usage scenarios:

1) .bit NFT on Ethereum
- Has all the functions of NFT on Ethereum and can be viewed in your ETH wallet;
- Supports trading in Ethereum NFT markets, such as [OpenSea](https://opensea.io/collection/dotbit), [Element](https://element.market/collections/dotbit), [LooksRare](https://looksrare.org/collections/0x60eB332Bd4A0E2a9eEB3212cFdD6Ef03Ce4CB3b5), etc.;
- Cannot use functions such as managing data, renewing, setting .bit alias, distributing DID, etc.;
- The account is in a special state and cannot be used as the inviter for new account registration.

2) Regular .bit accounts
- Supports functions such as managing data, renewing, setting .bit alias, distributing DID, etc.;
- Supports trading on [DID.Top](https://did.top);
- Supports use on Ethereum, BNB Chain, Polygon, and Tron networks.

## Trading
.bit NFT complies with the ERC-721 protocol on Ethereum and can be traded on all Ethereum ERC-721 NFT trading markets. Here are some great platforms:
- [Opensea](https://opensea.io/collection/dotbit)
- [Element](https://element.market/collections/dotbit)
- [LooksSare](https://looksrare.org/collections/0x60eB332Bd4A0E2a9eEB3212cFdD6Ef03Ce4CB3b5)
- [X2Y2](https://x2y2.io/collection/dotbit/items)
- [Rarible](https://rarible.com/dotbit/items)

## Related Links
- [.bit NFT contract](https://etherscan.io/address/0xd8156966a7be5b320a1b1f943b376c93a15bd298#readContract)
- [.bit NFT proxy contract](https://etherscan.io/address/0x60eb332bd4a0e2a9eeb3212cfdd6ef03ce4cb3b5#writeProxyContract)
## FAQ

### Can I convert my Ethereum .bit NFT back to a regular .bit account?

Yes, you can convert your Ethereum .bit NFT back to a regular .bit account at any time.

### Where can I trade my Ethereum .bit NFT?

After conversion, .bit NFTs comply with the Ethereum ERC-721 standard and can be traded on any Ethereum NFT marketplace.

### Can I manage my data and renew my .bit account after converting to an Ethereum .bit NFT?

No, you cannot. After conversion to an Ethereum .bit NFT, the data stored in your .bit account will be cleared. You can convert it back to a regular .bit account and manage your data and renewals again.
> We will soon allow you to manage your .bit account after converting to a .bit NFT. Stay tuned.

### How can I transfer my Ethereum .bit NFT to someone else?

You can transfer your .bit NFT to another person directly in your Ethereum wallet.

### If my .bit account has expired, will my Ethereum .bit NFT be destroyed?

Yes, it will. If your .bit account has expired and you have not renewed it within the grace period, your Ethereum .bit NFT will be automatically destroyed, and your .bit account will be reclaimed.

### Why can't I convert my .bit account to an Ethereum NFT?

You will be unable to convert your .bit account to an Ethereum NFT if your account is in one of the following states:

- Your .bit account is currently listed for sale on DIDTop. You can delist it from DIDTop and then convert it.
- Your .bit account is managed by a Tron address. You can transfer ownership to your Ethereum/BNB chain/Polygon address and then convert it.
- Your .bit account is approaching expiration. You can renew it before converting it.

### Can I cancel the conversion process after completing the first step of converting to an Ethereum .bit NFT?

No, you cannot cancel the conversion process after preparing for it. You can click "pay and mint" in step two to complete the conversion process. You can convert your Ethereum .bit NFT back to a regular .bit account at any time.

### How can I check the expiration date of my Ethereum .bit NFT?

You can check the expiration date of your .bit NFT by accessing the details page of your .bit NFT on OpenSea.

### Will my .bit account be reclaimed even if I've converted it to an Ethereum NFT?

Yes, it will. If you do not renew your .bit account within the grace period, your account will be reclaimed, regardless of whether you have converted it to an Ethereum NFT.

### Can Second-Level DID accounts be converted to .bit ETH NFTs?

Second-Level DID accounts cannot currently be converted to .bit ETH NFTs. We will announce this feature on the official .bit channel when it becomes available.
