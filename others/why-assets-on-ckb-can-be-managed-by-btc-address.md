# Why assets on CKB can be managed by BTC address

## First, this is not "cross-chain" 

Cross-chain usually means assets are locked on chain A and corresponding assets are created on chain B. In fact, assets on Nervos CKB will not appear on BTC, nor assets on BTC will appear on Nervos CKB. Nervos CKB is simply compatible with any public chain's account (address) system.

## Understanding from a non-technical perspective

Let's make some analogies by comparing a public chain to a country, and the address of the chain to the resident ID of the country. 

1. ETH public chain --&gt; United States
2. ETH address --&gt; U.S. ID card
3. BTC public chain --&gt; United Kingdom
4. BTC Address --&gt; UK ID
5. Nervos CKB Public Chain --&gt; Country C
6. Nervos CKB Address --&gt; Country C ID

Currently, a resident must have a U.S. ID to hold and manage assets in the U.S., which is the same in the UK. The two countries do not recognize each other's national IDs.

However, for Nervos CKB, a new C country, not only residents with C country IDs but residents from other countries can hold assets here as long as they provide valid IDs elsewhere.

To further explain, a BTC user sending assets issued on the Nervos CKB in a BTC wallet can be regarded as a U.S. resident selling his or her home in Country C with a valid U.S. ID. And this process is officially recognized by country C (verified by the Nervos CKB node).


## Technical Understanding

Nervos CKB is compatible with BTC's account system, which means that **Nervos CKB is a chain that verifies the signature of a BTC private key on a Nervos CKB transaction**.

Normally speaking:

1. The BTC chain can only verify the signature of a BTC private key to a BTC transaction, so does ETH. When the signature is verified and the transaction is on chain, users can control their BTC assets with their own BTC private keys. 
2. At the same time, the signature algorithm of the BTC/ETH chain is fixed, and the program logic of the signature verification process is also predetermined. Adding a new signature algorithm will cause the hard fork of the entire chain.

However, Nervos CKB has some new features:

1. Adding a new signature algorithm to a Nervos CKB chain will not cause CKB to hard fork. The new signature algorithm will be installed on the Nervos CKB like a plug-in.
2. Anyone can deploy any signature algorithm on a Nervos CKB at anytime(it's just a binary program). 
3. Users can specify which signature algorithm needed to be invoked to verify the transaction on the Nervos CKB. 
4. When Nervos CKB nodes package the transaction, it then runs the particular signature algorithm to verify the transaction. When the checksum is passed, the transaction will be uploaded on chain.

That's why users can install the BTC signature algorithm on Nervos CKB and make sure that the node must invoke the BTC signature algorithm to perform the checksum when packaging the transaction(which is generally a transfer of fungible or non-fungible tokens). After the verification is passed, the transaction is uploaded on chain and the assets transfer is completed, which means users control their Nervos CKB assets with their BTC private keys.

For the same reason we can install any public chain's signature algorithms on Nervos CKB and any public chain address is able to hold assets issued on Nervos CKB.



Such an elegant "cross-chain" approach was inspired by the [Lay2](https://lay2.tech/#/) team. The [PW-SDK](https://docs.lay2.dev/pw-sdk/) they built is the infrastructure of the Nervos ecosystem and is the core of how .bit accounts can be held by any public chain address. ❤

