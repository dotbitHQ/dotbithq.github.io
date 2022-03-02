# 字符集

可以使用多种语言甚至 emoji 注册 DAS 账户。已支持的语言字符集如下：

1. [English](https://github.com/DeAccountSystems/cell-data-generator/blob/master/data/char_set_en.txt)
2. [Emojis](https://github.com/DeAccountSystems/cell-data-generator/blob/master/data/char_set_emoji.txt)
3. [Arabic numerals](https://github.com/DeAccountSystems/cell-data-generator/blob/master/data/char_set_digit.txt)

DAS 支持的语言字符集将会不断增加。

## 防止欺诈

同时 DAS 通过多种机制来避免名字欺诈的发生：
1. 采用字符集白名单制。不可以使用非白名单内的字符（比如空白字符）注册 DAS。
2. 禁止某些字符集之间的组合使用。如俄文字符集不可和英文字符集组合使用。对于 DAS 系统而言，`satоshi.bit`不是一个合法的账户，因为其中的字母`о`是俄文字符，而其他字符是英文字符。但`satoshi.bit`是一个合法的账户，因为其中所有字符都是英文字符。这可以有效的避免普通用户难以识别的欺诈行为。

字符集组合规则：

|  | English | Arabic numerals | Emojis |
| :--- | :---: | :---: | :---: |
| English | ✅ | ✅ | ✅ |
| Arabic numerals | ✅ | ✅ | ✅ |
| Emojis | ✅ | ✅ | ✅ |

✅ 表示这两个字符集的字符是可组合的，可以出现在同一个 DAS 账户名中。

