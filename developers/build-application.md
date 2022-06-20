# Buidl applications on .bit

<img src="./image-20210721120500021.png" alt=".bit Records" style="zoom:50%;" />

There are several ideas for developing applications based on .bit.

1. Treat a .bit account as a practical NFT asset and develop a trading/auction/rental marketplace for .bit
2. Consider .bit account as a public key-value database that can only be modified by the user, where any type of records can be stored. Developers can buidl applications based on this.





## Application example: bit.cc - decentralized personal homepage

[bit.cc](https://jeffx.bit.cc) is a typical .bit application that treats .bit accounts as public key-value data. bit.cc can be seen as a decentralized version of LinkTree, a decentralized personal home. Unlike other personal homepage products, the information displayed on bit.cc's homepage is stored decentrally. Only .bit account owners who can modify it, and bit.cc cannot delete your profile.



If Alice owns alice.bit and adds her own links to various social networks in the resolution record, bit.cc will display these links in an extremely beautiful way, accessible to other users via alice.bit.cc. The performance of bit.cc is completely controlled by Alice through the setting of the resolution record. For example.

1. Alice can decide whether to display your decentralized profile in light mode or dark mode by setting the value of the resolution record `custom_key.bitcc_theme` to `light` or `dark`.
2. Alice can set the value of the resolution record `custom_key.bitcc_redirect` to a link to Alice's personal website. This way, when someone visits alice.bit.cc, the page will automatically redirect to alice's personal website.



These features are possible because bit.cc is responding based on Alice's resolution records. In the future, bit.cc will be able to present all of Alice's NFTs based on Alice's resolution records. alice.bit.cc will be a truly decentralized personal home page for Alice.

[bit.cc docs](https://github.com/dotbitHQ/bit.cc)


## Preparation

The preparation work required to develop different types of applications varies.

If a .bit account is a practical NFT asset, develop a trading/auction/rental marketplace for .bit. You need to understand.

1. the basics of Nervos CKB, its data structure, and transaction structure ([Learn Nervos CKB](https://nervos.org))
2. The basics of .bit, its data structure and transaction structure ([Learn .bit](https://github.com/dotbitHQ/das-contracts))



To develop applications based on the records of .bit accounts, you do not need to know the technical details of Nervos CKB and .bit. Just learn how to use [das-account-indexer](https://github.com/dotbitHQ/das-account-indexer) or [das-sdk-js](https://github.com/dotbitHQ/das-sdk-js) to get the record for an account, or to query whether an address holds a .bit account. As well as understanding the [namespace specification](records-key-namespace.md) of .bit's records.



## Desired .bit applications

We believe that the following interesting applications should emerge based on .bit.

1. Sending end-to-end encrypted messages using .bit accounts
2. Using .bit accounts to aggregate reputations across multiple chains
3. Using .bit accounts to log into centralized services. 
4. Decentralized personal pages/social networks based on .bit accounts