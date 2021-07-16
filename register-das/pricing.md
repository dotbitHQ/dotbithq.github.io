# Pricing

## Pricing

Fee paid at registration = Annual fee \* Length of registration + Storage deposit.

### Annual fee

| Account Character Length | Price     | Price after filling in the invitee \( x0.9 \) |
| :----------------------- | :-------- | :-------------------------------------------- |
| 5 digits and above       | $5/year   | $4.5/year                                     |
| 4-bit                    | $170/year | $153/year                                     |
| 3 places                 | $700/year | $630/year                                     |
| 2 bit                    | -         | -                                             |
| 1 bit                    | -         | -                                             |

### Storage Deposit

The storage fee corresponds to the amount of on-chain storage space required to store account information on the chain, and DAS is carefully structured so that a fixed storage fee is pledged regardless of the number of records resolved on the DAS account. The pledged storage fee is 207 CKB per account.

**If the account expires and is not renewed, the storage deposit is returned to the account's owner address**.

Since DAS is a decentralized application running on the Nervos CKB, it only recognizes the CKB as a payment method for fees. Therefore, the DAS team maintains a CKB/USD price prediction machine service that allows the contract to know how much CKB should be charged when a user signs up, and, thanks to the DAS registrar, allows users to pay in any currency.
