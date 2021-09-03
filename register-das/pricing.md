# Pricing

## Pricing

Fee paid at registration = Annual fee \* Length of registration period + Storage deposit.

### Annual fee

| Account Character Length | Price      | Price after filling in the invitee \( x0.95 \) |
| :----------------------- | :--------- | :--------------------------------------------- |
| 5 digits and above       | \$4.99/year | \$4.75/year                                     |
| 4-bit                    | \$160/year  | \$152/year                                      |
| 3-bit                    | \$660/year  | \$627/year                                      |
| 2 bit                    | \$1,024/year | \$972.8/year                             |
| 1 bit                    | -          | -                                              |

### Storage Deposit

The storage fee corresponds to the amount of on-chain storage space required to store account information on the Nervos CKB chain, and DAS is carefully structured so that a fixed storage fee is pledged regardless of the number of parsed records stored in the DAS account. The pledged storage fee is 206 CKB per account. **If an account expires and is not renewed, the storage deposit will be returned to the account's Owner address at the time of expiration**.

Since DAS is a decentralized application running on Nervos CKB, it only recognizes CKB as a payment method for fees. Therefore, the DAS team maintains a CKB/USD price prediction machine service that allows the contract to know how much CKB should be charged when a user signs up, and allows users to pay in any currency due to the presence of a DAS registrar.

