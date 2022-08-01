# Charsets

You can register for a .bit account in multiple languages or even emoji. The supported language character sets are as follow：

0. [Emojis](https://github.com/dotbitHQ/cell-data-generator/blob/master/data/char_set_emoji.txt)
1. [Numerical Digit & Symbols](https://github.com/dotbitHQ/cell-data-generator/blob/master/data/char_set_digit_and_symbol.txt)
2. [English Alphabet](https://github.com/dotbitHQ/cell-data-generator/blob/master/data/char_set_en.txt)
5. [Japanese Kana & Kanji](https://github.com/dotbitHQ/cell-data-generator/blob/master/data/char_set_ja.txt)
6. [Korean Alphabet](https://github.com/dotbitHQ/cell-data-generator/blob/master/data/char_set_ko.txt)
7. [Cyrillic Alphabet](https://github.com/dotbitHQ/cell-data-generator/blob/master/data/char_set_ru.txt)
8. [Turkish Alphabet](https://github.com/dotbitHQ/cell-data-generator/blob/master/data/char_set_tr.txt)
9. [Thai Alphabet](https://github.com/dotbitHQ/cell-data-generator/blob/master/data/char_set_th.txt)
10. [Vietnamese Alphabets](https://github.com/dotbitHQ/cell-data-generator/blob/master/data/char_set_vi.txt)

The number of language character sets supported by .bit will increase continuously.

## Fraud Prevention

Also, to avoid name fraud, .bit prohibits the use of certain character sets in combination with each other. 

For example, the Russian character set cannot be used in combination with the English character set. In .bit system, `satоshi.bit` is not a legitimate account because the letters `о` in it are Russian characters and the other characters are English characters. But `satоshi.bit` is a legitimate account because all characters in it are English characters. 

This restriction effectively avoids frauds that are difficult to recognize by ordinary users.

Character set combination rules:

| CharSetType |                           | Emojis | Numerical Digit & Symbols | English Alphabet | Japanese Kana & Kanji | Korean Alphabet | Cyrillic Alphabet | Turkish Alphabet | Thai Alphabet | Vietnamese Alphabets |
|:------------|:-------------------------:|:------:|:-------------------------:|:----------------:|:---------------------:|:---------------:|:-----------------:|:----------------:|:-------------:|:--------------------:|
| 0           |          Emojis           |   ✅    |             ✅             |        ✅         |           ✅           |        ✅        |         ✅         |        ✅         |       ✅       |          ✅           |
| 1           | Numerical Digit & Symbols |   ✅    |             ✅             |        ✅         |           ✅           |        ✅        |         ✅         |        ✅         |       ✅       |          ✅           | 
| 2           |     English Alphabet      |   ✅    |             ✅             |        ✅         |           ❌           |        ❌        |         ❌         |        ❌         |       ❌       |          ❌           |  
| 5           |   Japanese Kana & Kanji   |   ✅    |             ✅             |        ❌         |           ✅           |        ❌        |         ❌         |        ❌         |       ❌       |          ❌           |
| 6           |      Korean Alphabet      |   ✅    |             ✅             |        ❌         |           ❌           |        ✅        |         ❌         |        ❌         |       ❌       |          ❌           |  
| 7           |     Cyrillic Alphabet     |   ✅    |             ✅             |        ❌         |           ❌           |        ❌        |         ✅         |        ❌         |       ❌       |          ❌           | 
| 8           |     Turkish Alphabet      |   ✅    |             ✅             |        ❌         |           ❌           |        ❌        |         ❌         |        ✅         |       ❌       |          ❌           |
| 9           |       Thai Alphabet       |   ✅    |             ✅             |        ❌         |           ❌           |        ❌        |         ❌         |        ❌         |       ✅       |          ❌           | 
| 10          |   Vietnamese Alphabets    |   ✅    |             ✅             |        ❌         |           ❌           |        ❌        |         ❌         |        ❌         |       ❌       |          ✅           |

✅ Indicates that the characters in these two Charsets are combinable and can appear in the same .bit account name, while ❌ indicates that the characters in these two Charsets are not combinable. 

> [ChatSetType Definition](https://github.com/dotbitHQ/das-types/blob/3dbce2d972e1950ba0a558daa2abb896bbc2ffca/rust/src/constants.rs#L135)

