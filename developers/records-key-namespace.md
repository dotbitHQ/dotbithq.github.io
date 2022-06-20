# .bit Namespaces



<img src="./image-20210721120500021.png" alt=".bit Records" style="zoom:50%;" />Parsed records are the core of .bit, and the flexibility of records is also the source of .bit's great scalability. A record is a key-value pair, and .bit supports an infinite number of records. As shown above, different applications will read different parse records to do different jobs. Therefore, it is important to manage the namespace of the key of the record. The namespace usage specification is essentially a protocol that can be followed to enable good collaboration between applications.

## Namespaces

The key of a record is a hierarchical structure using `. ` separated by a hierarchy, such as `address.btc`, `profile.twitter`, `custom_key.bitcc_config`, etc. Among them, `address`, `profile`, and `custom_key` are called primary namespaces; `btc`, `twitter`, and `bitcc_config` are called secondary namespaces.

.bit has strict constraints on the use of namespaces at the contract level, and currently provides four first-level namespaces.

* **address**

  This namespace is generally used to store the user's digital assets receipt address, such as `address.btc`, `address.eth`, etc. Also, there is a [whitelist](https://github.com/dotbitHQ/cell-data-generator/blob/master/data/record_key_namespace.txt) inside the contract that has built-in mainstream digital assets symbols as legal key.

* **profile**

  This namespace is generally used to store users' personal information, such as `profile.twitter`, `profile.facebook`, etc. Also, there is a [whitelist](https://github.com/dotbitHQ/cell-data-generator/blob/master/data/record_key_namespace.txt) inside the contract with built-in mainstream social network names as legitimate key.

* **dweb**

  This namespace is generally used to store decentralized network-related content, such as `dweb.ipfs`, `dweb.resilio`, etc. Also, there is a [dweb.resilio]() inside the contract. Also, there is a [whitelist](https://github.com/dotbitHQ/cell-data-generator/blob/master/data/record_key_namespace.txt) inside the contract with the mainstream decentralized storage protocol built-in name as a legal key.

* **custom_key**

  This namespace is not constrained, and developers can create any name and number of sub-namespaces under this space and define their meaning. For example, `custom_key.bitcc_config`, `custom_key.pgp.master_key`, etc. 

> [** See All .bit Namespaces**](https://github.com/dotbitHQ/cell-data-generator/blob/master/data/record_key_namespace.txt)

##### Note 
The .bit contract does not verify the legitimacy of the value of the record, the .bit just provides a convention. For example, a user would normally set the value of `address.btc` to a BTC address. However, the application should check if this value is really a legitimate BTC address when using this value.



## Addition of first-level namespaces

Currently, .bit only provides four level 1 namespaces `address`, `profile`, `dweb`, `custom_key`, but this is not the final result. The .bit team will gradually add more level 1 namespaces. If you think some namespaces should be added to allow better collaboration between applications. You can report in Github [Issues](https://github.com/dotbitHQ/das-contracts/issues).



