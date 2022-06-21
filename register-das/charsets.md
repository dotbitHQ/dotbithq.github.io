# Charsets

You can register for a .bit account in multiple languages or even emoji. The supported language character sets are as follow：

0. [Emojis](https://github.com/dotbitHQ/cell-data-generator/blob/master/data/char_set_emoji.txt)
1. [Arabic Numerals & Symbols](https://github.com/dotbitHQ/cell-data-generator/blob/master/data/char_set_digit_and_symbol.txt)
2. [English Letters](https://github.com/dotbitHQ/cell-data-generator/blob/master/data/char_set_en.txt)

The number of language character sets supported by .bit will increase continuously.

## Fraud prevention

Also, to avoid name fraud, .bit prohibits the use of certain character sets in combination with each other. 

For example, the Russian character set cannot be used in combination with the English character set. In .bit system, `satоshi.bit` is not a legitimate account because the letters `о` in it are Russian characters and the other characters are English characters. But `satоshi.bit` is a legitimate account because all characters in it are English characters. 

This restriction effectively avoids frauds that are difficult to recognize by ordinary users.

Character set combination rules:

| [CharSetType](https://github.com/dotbitHQ/das-types/blob/3dbce2d972e1950ba0a558daa2abb896bbc2ffca/rust/src/constants.rs#L135)  |                 | English | Arabic numerals | Emojis  |
|:-------------------------------------------------------------------------------------------------------------------------------|:---------------:|:-------:|:---------------:|:-------:|
| 0                                                                                                                              |     Emojis      |    ✅    |        ✅        |    ✅    |
| 1                                                                                                                              | Arabic numerals |    ✅    |        ✅        |    ✅    |
| 2                                                                                                                              |     English     |    ✅    |        ✅        |    ✅    |

✅ Indicates that the characters in these two character sets are combinable and can appear in the same .bit account name.

