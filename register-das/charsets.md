# Charsets

You can register for a DAS account in multiple languages or even emoji. The supported language character sets are as follows.

1. [English](https://github.com/DeAccountSystems/cell-data-generator/blob/master/data/char_set_en.txt)
2. [Emojis](https://github.com/DeAccountSystems/cell-data-generator/blob/master/data/char_set_emoji.txt)
3. [Arabic numerals](https://github.com/DeAccountSystems/cell-data-generator/blob/master/data/char_set_digit.txt)

The number of language character sets supported by DAS will be increased continuously.

## Fraud prevention

Also, to avoid name fraud, DAS prohibits the use of certain character sets in combination with each other. For example, the Russian character set cannot be used in combination with the English character set. For the DAS system, `satоshi.bit` is not a legitimate account because the letters `о` in it are Russian characters and the other characters are English characters. But `satоshi.bit` is a legitimate account because all characters in it are English characters. This effectively avoids frauds that are difficult to recognize by ordinary users.

Character set combination rules.

|  | English | Arabic numerals | Emojis |
| :--- | :---: | :---: | :---: |
| English | ✅ | ✅ | ✅ |
| Arabic numerals | ✅ | ✅ | ✅ |
| Emojis | ✅ | ✅ | ✅ |

✅ Indicates that the characters in these two character sets are combinable and can appear in the same DAS account name.

