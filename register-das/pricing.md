# Pricing/Fee

## Pricing

Fee paid at registration = Annual fee \* Length of registration period + Storage deposit.

### Annual fee

| Account Character Length | Price        | Price after filling in the invitee \( x0.95 \) |
|:-------------------------|:-------------| :--------------------------------------------- |
| 5 chars and above        | \$5/year     | \$4.75/year                                     |
| 4 chars                  | \$160/year   | \$152/year                                      |
| 3 chars                  | \$660/year   | \$627/year                                      |
| 2 chars                  | \$1,024/year | \$972.8/year                             |
| 1 chars                  | -            | -                                              |



### Action Fee

| Action                  | Action Fee | Miner Fee                                  |
|-------------------------|------------|--------------------------------------------|
| Edit Records            | Free       | Free                                       |
| Transfer Owner          | Free       | Free                                       |
| Transfer Manager        | Free       | Free                                       |
| Query Records           | Free       | Free                                       |
| Set .bit Alias          | Free       | Free                                       |
| Distribute SubDID       | 1 CKB each | Free                                       |
| Convert .bit to ETH NFT | Free       | Determined in real-time by the ETH network |




### Storage Deposit

The storage fee corresponds to the space of on-chain storage required to store account information on Nervos CKB chain. .bit is carefully designed so that a fixed storage fee is pledged regardless of the number of records stored in the .bit account. The fixed storage fee is 206 CKB per account. **If an account expires and is not renewed in time, the storage deposit will be returned to the account's owner address at the time of expiration**.

Since .bit is a decentralized application running on Nervos CKB, it only recognizes CKB as a payment method for fees. Therefore, the .bit team maintains a CKB/USD price prediction machine service that allows the contract to know how much CKB should be charged when a user signs up, and allows users to pay in any cryptocurrency due to the presence of .bit registrars.

