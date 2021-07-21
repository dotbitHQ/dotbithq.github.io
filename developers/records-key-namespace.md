# Parsed record namespaces



<img src="image-20210721120500021.png" alt="DAS Records" style="zoom:50%;" />Parsed records are the core of DAS, and the flexibility of parsed records is also the source of DAS's great scalability. A parsed record is a key-value pair, and DAS supports an infinite number of parsed records. As shown above, different applications will read different parse records to do different jobs. Therefore, it is important to manage the namespace of the key of the parsed record. The namespace usage specification is essentially a protocol that can be followed to enable good collaboration between applications.

## Namespaces

The key of a parsed record is a hierarchical structure using `. ` separated by a hierarchy, such as `address.btc`, `profile.twitter`, `custom_key.bitcc_config`, etc. Among them, `address`, `profile`, and `custom_key` are called primary namespaces; `btc`, `twitter`, and `bitcc_config` are called secondary namespaces.

DAS has strict constraints on the use of namespaces at the contract level, and currently provides four first-level namespaces.

* **address**

  This namespace is generally used to store the user's digital currency receipt address, such as `address.btc`, `address.eth`, etc. Also, there is a [whitelist](https://github.com/DeAccountSystems/das-contracts/blob/develop/tests/data/record_key_namespace.txt) inside the contract that has built-in mainstream digital currency symbols as legal key.

* **profile**

  This namespace is generally used to store users' personal information, such as `profile.twitter`, `profile.facebook`, etc. Also, there is a [whitelist](https://github.com/DeAccountSystems/das-contracts/blob/develop/tests/data/record_key_namespace.txt) inside the contract with built-in mainstream social network names as legitimate key.

* **dweb**

  This namespace is generally used to store decentralized network-related content, such as `dweb.ipfs`, `dweb.resilio`, etc. Also, there is a [dweb.resilio]() inside the contract. Also, there is a [whitelist](https://github.com/DeAccountSystems/das-contracts/blob/develop/tests/data/record_key_namespace.txt) inside the contract with the mainstream decentralized storage protocol built-in name as a legal key.

* **cumtom_key**

  This namespace is not constrained, and developers can create any name and number of sub-namespaces under this space and define their meaning. For example, `custom_key.bitcc_config`, `custom_key.pgp.master_key`, etc. 

Note that the DAS contract does not verify the legitimacy of the value of the parsed record, the DAS just provides a convention. For example, a user would normally set the value of `address.btc` to a BTC address. However, the application should check if this value is really a legitimate BTC address when using this value.



## Addition of first-level namespaces

Currently DAS only provides four level 1 namespaces `address`, `profile`, `dweb`, `custom_key`, but this is not the final result. the DAS team will gradually add more level 1 namespaces. If you think some namespaces should be added to allow better collaboration between applications. You can report in Github [Issues](https://github.com/DeAccountSystems/das-contracts/issues).



