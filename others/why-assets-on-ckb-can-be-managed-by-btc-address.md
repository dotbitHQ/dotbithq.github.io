# Why assets on CKB can be managed by BTC address

## First, this is not "cross-chain" 

Cross-chain usually means assets are locked on chain A and corresponding assets are created on chain B. In fact, assets on Nervos CKB will not appear on BTC, nor assets on BTC will appear on Nervos CKB. Nervos CKB is simply compatible with any public chain's account (address) system.

## Understanding from a non-technical perspective

Let's make some analogies. Let's compare a public chain to a country, and the address of that public chain is compared to the resident ID of that country. 

1. ETH public chain --&gt; United States
2. ETH address --&gt; U.S. ID card
3. BTC public chain --&gt; United Kingdom
4. BTC Address --&gt; UK ID
5. Nervos CKB Public Chain --&gt; Country C
6. Nervos CKB Address --&gt; Country C ID

Currently, the residents must have a US ID to hold and manage assets in the US, and the same is true for the UK. The two countries do not recognize each other's national IDs.

However, for Nervos CKB, a new C country, not only residents with C country IDs can hold assets in their country. Residents of other countries can also hold assets in Country C as long as they provide a valid resident ID from another country.

By further analogy, a BTC user sending assets issued on the Nervos CKB in a BTC wallet is like a U.S. resident reselling his or her home in Country C with a valid U.S. ID. And this resale process is officially recognized by country C (verified by the Nervos CKB node).

## Technical Understanding

Nervos CKB is compatible with BTC's account system, which means that **Nervos CKB is a chain that verifies the signature of a BTC private key on a Nervos CKB transaction**.

1. the BTC chain can only verify the signature of the BTC private key to a BTC transaction, as does ETH. When the signature checks out and the transaction is on the chain, it means that you control your BTC assets with your BTC private key. 
2. At the same time, the signature algorithm of the BTC/ETH chain is fixed, and the logic of the signature verification process is also fixed. To add a new signature algorithm, you have to hard fork the entire chain.

However, Nervos CKB has some new features.

1. When adding a new signature algorithm to a Nervos CKB chain, the CKB is not hard forked and the new signature algorithm is installed on the Nervos CKB as if it was a plug-in.
2. Any one at any time can deploy any signature algorithm on a Nervos CKB (it's just a binary program). 
3. When a transaction happens on the Nervos CKB, you can specify which signature algorithm needs to be invoked to verify the transaction. 
4. When the Nervos CKB node packages the transaction, it runs that particular signature algorithm to verify the transaction. When the checksum passes, the transaction is uploaded to the chain.

That's why we can install the BTC signature algorithm on the Nervos CKB and make it clear in the transaction (which is generally a transfer of fungible or non-fungible tokens) that the node must invoke the BTC signature algorithm to perform the checksum when packaging the transaction. When the signature verification is passed, the transaction is uploaded to the chain and the asset transfer is completed, which means you control your Nervos CKB assets with your BTC private key.

For the same reason we can install any public chain's signature algorithm on Nervos CKB and then any public chain address can hold assets issued on the Nervos CKB.



Such an elegant "cross-chain" approach was inspired by the [Lay2](https://lay2.tech/#/) team. The [PW-SDK](https://docs.lay2.dev/pw-sdk/) they built is the infrastructure of the Nervos ecosystem and is the core secret of how .bit accounts can be held by any public chain address. ❤

