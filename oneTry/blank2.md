# 正则表达式

## 字符匹配

横向匹配：`{m,n}`，表示连续出现最少 m 次，最多 n 次

纵向匹配：`[abc]`，表示该字符是可以字符“a”、“b”、“c”中的任何一个

`[123456abcdefGHIJKLM]`，可以写成`[1-6a-fG-M]`

匹配“a”、“-”、“z”这三者中任意一个字符:`[-az]`或`[az-]`或`[a\-z]`。即要么放在开头，要么放在结尾，要么转义

`[^abc]`，表示是一个除"a"、"b"、"c"之外的任意一个字符。字符组的第一位放^（脱字符），表示求反的概念

```js
\d就是[0-9]。表示是一位数字。记忆方式：其英文是digit（数字）。
\D就是[^0-9]。表示除数字外的任意字符。
\w就是[0-9a-zA-Z_]。表示数字、大小写字母和下划线。记忆方式：w是word的简写，也称单词字符。
\W是[^0-9a-zA-Z_]。非单词字符。
\s是[ \t\v\n\r\f]。表示空白符，包括空格、水平制表符、垂直制表符、换行符、回车符、换页符。记忆方式：s是space character的首字母。
\S是[^ \t\v\n\r\f]。 非空白符。.就是[^\n\r\u2028\u2029]。通配符，表示几乎任意字符。换行符、回车符、行分隔符和段分隔符除外。记忆方式：想想省略号...中的每个点，都可以理解成占位符，表示任何类似的东西。
```

匹配任意字符:可以使用`[\d\D]`、`[\w\W]`、`[\s\S]`和`[^]`中任何的一个

量词

```js
{m,} 表示至少出现m次。
{m} 等价于{m,m}，表示出现m次。
? 等价于{0,1}，表示出现或者不出现。记忆方式：问号的意思表示，有吗？
+ 等价于{1,}，表示出现至少一次。记忆方式：加号是追加的意思，得先有一个，然后才考虑追加。
* 等价于{0,}，表示出现任意次，有可能不出现。记忆方式：看看天上的星星，可能一颗没有，可能零散有几颗，可能数也数不过来。
```

贪婪匹配:`/\d{2,5}/`，表示数字连续出现 2 到 5 次。会匹配 2 位、3 位、4 位、5 位连续数字,但是其是贪婪的，它会尽可能多的匹配。你能给我 6 个，我就要 5 个。你能给我 3 个，我就 3 要个。反正只要在能力范围内，越多越好

惰性匹配:`/\d{2,5}?/`表示，虽然 2 到 5 次都行，当 2 个就够的时候，就不在往下尝试了

多选分支:`(p1|p2|p3)`，其中 p1、p2 和 p3 是子模式，用|（管道符）分隔，表示其中任何之一,分支结构也是惰性的，即当前面的匹配上了，后面的就不再尝试了

## 位置匹配

`^`（脱字符）匹配开头，在多行匹配中匹配行开头。

`$`（美元符号）匹配结尾，在多行匹配中匹配行结尾

`\b`是单词边界，具体就是`\w`和`\W`之间的位置，也包括`\w`和`^`之间的位置，也包括`\w`和`$`之间的位置

`\B`就是`\b`的反面的意思，非单词边界。例如在字符串中所有位置中，扣掉`\b`，剩下的都是`\B`的

`(?=p)`，其中 p 是一个子模式，即 p 前面的位置

```js
var result = "hello".replace(/(?=l)/g, "#");
console.log(result);
// => "he#l#lo"
```

而`(?!p)`就是`(?=p)`的反面意思

```js
var result = "hello".replace(/(?!l)/g, "#");

console.log(result);
// => "#h#ell#o#"
```

`(?<=p)`

```js
var result = "hello".replace(/(?<=l)/g, "#");

console.log(result);
// => "hel#l#o"
```

`(?<!p)`

```js
var result = "hello".replace(/(?<!l)/g, "#");

console.log(result);
// => "#h#e#llo#"
```

## 括号的作用

分组:`/a+/`匹配连续出现的“a”，而要匹配连续出现的“ab”时，需要使用`/(ab)+/`

分支结构：在多选分支结构(p1|p2)中，此处括号的作用也是不言而喻的，提供了子表达式的所有可能 `^I love (JavaScript|Regular Expression)$`

引用分组:格式是 yyyy-mm-dd,`/\d{4}-\d{2}-\d{2}/`,修改成括号版的:`/(\d{4})-(\d{2})-(\d{2})/`

```js
var regex = /(\d{4})-(\d{2})-(\d{2})/;
var string = "2017-06-12";
console.log(string.match(regex));
// => ["2017-06-12", "2017", "06", "12", index: 0, input: "2017-06-12"]
```

match 返回的一个数组，第一个元素是整体匹配结果，然后是各个分组（括号里）匹配的内容，然后是匹配下标，最后是输入的文本

也可以使用构造函数的全局属性$1 至$9 来获取

```js
var regex = /(\d{4})-(\d{2})-(\d{2})/;
var string = "2017-06-12";

regex.test(string); // 正则操作即可，例如
//regex.exec(string);
//string.match(regex);

console.log(RegExp.$1); // "2017"
console.log(RegExp.$2); // "06"
console.log(RegExp.$3); // "12"
```

想把 yyyy-mm-dd 格式，替换成 mm/dd/yyyy 怎么做

```js
var regex = /(\d{4})-(\d{2})-(\d{2})/;
var string = "2017-06-12";
var result = string.replace(regex, "$2/$3/$1");
console.log(result);
// => "06/12/2017"
```

其中 replace 中的，第二个参数里用$1、$2、$3 指代相应的分组。等价于如下的形式

```js
var regex = /(\d{4})-(\d{2})-(\d{2})/;
var string = "2017-06-12";
var result = string.replace(regex, function () {
  return RegExp.$2 + "/" + RegExp.$3 + "/" + RegExp.$1;
});
console.log(result);
// => "06/12/2017"
```

也等价于：

```js
var regex = /(\d{4})-(\d{2})-(\d{2})/;
var string = "2017-06-12";
var result = string.replace(regex, function (match, year, month, day) {
  return month + "/" + day + "/" + year;
});
console.log(result);
// => "06/12/2017"
```

反向引用:除了使用相应 API 来引用分组，也可以在正则本身里引用分组。但只能引用之前出现的分组，即反向引用

写一个正则支持匹配如下三种格式：

```
2016-06-12

2016/06/12

2016.06.12
```

最先可能想到的正则是:

```js
var regex = /\d{4}(-|\/|\.)\d{2}(-|\/|\.)\d{2}/;
var string1 = "2017-06-12";
var string2 = "2017/06/12";
var string3 = "2017.06.12";
var string4 = "2016-06/12";
console.log(regex.test(string1)); // true
console.log(regex.test(string2)); // true
console.log(regex.test(string3)); // true
console.log(regex.test(string4)); // true
```

其中/和.需要转义。虽然匹配了要求的情况，但也匹配"2016-06/12"这样的数据

假设我们想要求分割符前后一致怎么办？此时需要使用反向引用

```js
var regex = /\d{4}(-|\/|\.)\d{2}\1\d{2}/;
var string1 = "2017-06-12";
var string2 = "2017/06/12";
var string3 = "2017.06.12";
var string4 = "2016-06/12";
console.log(regex.test(string1)); // true
console.log(regex.test(string2)); // true
console.log(regex.test(string3)); // true
console.log(regex.test(string4)); // false
```

\10 是表示第 10 个分组，还是\1 和 0 呢？

答案是前者，虽然一个正则里出现\10 比较罕见。测试如下：

```js
var regex = /(1)(2)(3)(4)(5)(6)(7)(8)(9)(#) \10+/;
var string = "123456789# ######";
console.log(regex.test(string));
// => true
```

引用不存在的分组会怎样？因为反向引用，是引用前面的分组，但我们在正则里引用了不存在的分组时，此时正则不会报错，只是匹配反向引用的字符本身。例如\2，就匹配"\2"。注意"\2"表示对"2"进行了转意

非捕获分组,之前文中出现的分组，都会捕获它们匹配到的数据，以便后续引用，因此也称他们是捕获型分组,如果只想要括号最原始的功能，但不会引用它，即，既不在 API 里引用，也不在正则里反向引用。此时可以使用非捕获分组(?:p)，例如

```js
var regex = /(?:ab)+/g;
var string = "ababa abbb ababab";
console.log(string.match(regex));
// => ["abab", "ab", "ababab"]
```

## 回溯法原理

没有回溯的匹配:`/ab{1,3}c/` ,`'abc'`

有回溯的匹配:`/ab{1,3}c/`,`"abbc"`

有回溯的匹配:`/ab{1,3}bbc/`,`"abbbc"`

常见的回溯形式:本质上就是深度优先搜索算法。其中退到之前的某一步这一过程，我们称为“回溯”

贪婪量词:`b{1,3}`，因为其是贪婪的，尝试可能的顺序是从多往少的方向去尝试。首先会尝试"bbb"，然后再看整个正则是否能匹配。不能匹配时，吐出一个"b"，即在"bb"的基础上，再继续尝试。如果还不行，再吐出一个，再试。如果还不行呢？只能说明匹配失败了,虽然局部匹配是贪婪的，但也要满足整体能正确匹配

如果当多个贪婪量词挨着存在，并相互有冲突时，此时会是怎样？答案是，先下手为强！因为深度优先搜索。测试如下：

```js
var string = "12345";
var regex = /(\d{1,3})(\d{1,3})/;
console.log(string.match(regex));
// => ["12345", "123", "45", index: 0, input: "12345"]
```

前面的\d{1,3}匹配的是"123"，后面的\d{1,3}匹配的是"45"

惰性量词:惰性量词就是在贪婪量词后面加个问号。表示尽可能少的匹配

```js
var string = "12345";
var regex = /(\d{1,3}?)(\d{1,3})/;
console.log(string.match(regex));
// => ["1234", "1", "234", index: 0, input: "12345"]
```

虽然惰性量词不贪，但也会有回溯的现象。比如正则是：`/^\d{1,3}?\d{1,3}$/`,目标字符串是"12345",知道你不贪、很知足，但是为了整体匹配成，没办法，也只能给你多塞点了。因此最后\d{1,3}?匹配的字符是"12"，是两个数字，而不是一个

```js
var string = "12345";
var regex = /(^\d{1,3}?)(\d{1,3}$)/;
console.log(string.match(regex));
// => ["12345", "12", "345"]
```

分支结构:我们知道分支也是惰性的，比如`/can|candy/`，去匹配字符串"candy"，得到的结果是"can"，因为分支会一个一个尝试，如果前面的满足了，后面就不会再试验了。分支结构，可能前面的子模式会形成了局部匹配，如果接下来表达式整体不匹配时，仍会继续尝试剩下的分支。这种尝试也可以看成一种回溯。

```js
var string = "candy";
var regex = /^(?:can|candy)$/;
console.log(string.match(regex));
//["candy"]
```

## 正则表达式的拆分

在正则表达式中，操作符都体现在结构中，即由特殊字符和普通字符所代表的一个个特殊整体。

JS 正则表达式中，结构都有字符字面量、字符组、量词、锚字符、分组、选择分支、反向引用。

- 字面量，匹配一个具体字符，包括不用转义的和需要转义的。比如 a 匹配字符"a"，又比如`\n`匹配换行符，又比如`\.`匹配小数点。
- 字符组，匹配一个字符，可以是多种可能之一，比如`[0-9]`，表示匹配一个数字。也有`\d`的简写形式。另外还有反义字符组，表示可以是除了特定字符之外任何一个字符，比如`[^0-9]`，表示一个非数字字符，也有`\D`的简写形式。
- 量词，表示一个字符连续出现，比如`a{1,3}`表示“a”字符连续出现 3 次。另外还有常见的简写形式，比如`a+`表示`“a”`字符连续出现至少一次。
- 锚点，匹配一个位置，而不是字符。比如`^`匹配字符串的开头，又比如`\b`匹配单词边界，又比如`(?=\d)`表示数字前面的位置。
- 分组，用括号表示一个整体，比如`(ab)+`，表示"ab"两个字符连续出现多次，也可以使用非捕获分组`(?:ab)+`。
- 分支，多个子表达式多选一，比如`abc|bcd`，表达式匹配"abc"或者"bcd"字符子串。
- 反向引用，比如`\2`，表示引用第 2 个分组。

其中涉及到的操作符有(优先级从上至下，由高到低)：

1. 转义符 `\`
2. 括号和方括号 `(...)、(?:...)、(?=...)、(?!...)、[...]`
3. 量词限定符 `{m}、{m,n}、{m,}、?、*、+`
4. 位置和序列` ^ 、$、 \元字符、 一般字符`
5. 管道符（竖杠）`|`

![](https://user-gold-cdn.xitu.io/2017/7/19/4bb44a11e383047a027a234ee15663ad?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

总结一下，竖杠的优先级最低，即最后运算

关于元字符转义问题，当自己不确定与否时，尽管去转义，总之是不会错的

## 正则表达式的构建

构建正则有一点非常重要，需要做到下面几点的平衡：

- 匹配预期的字符串
- 不匹配非预期的字符串
- 可读性和可维护性
- 效率

正则太强大了，以至于我们随便遇到一个操作字符串问题时，都会下意识地去想，用正则该怎么做。但我们始终要提醒自己，正则虽然强大，但不是万能的，很多看似很简单的事情，还是做不到的。比如匹配这样的字符串：1010010001....虽然很有规律，但是只靠正则就是无能为力

要认识到正则的局限，不要去研究根本无法完成的任务。同时，也不能走入另一个极端：无所不用正则。能用字符串 API 解决的简单问题，就不该正则出马

正则表达式的运行分为如下的阶段：

- 编译
- 设定起始位置
- 尝试匹配
- 匹配失败的话，从下一位开始继续第 3 步
- 最终结果：匹配成功或失败

优化方法：

- 使用具体型字符组来代替通配符，来消除回溯
- 使用非捕获型分组
- 独立出确定字符
- 提取分支公共部分
- 减少分支的数量，缩小它们的范围

## 正则表达式编程

正则表达式是匹配模式，不管如何使用正则表达式，万变不离其宗，都需要先“匹配”。

有了匹配这一基本操作后，才有其他的操作：验证、切分、提取、替换。

进行任何相关操作，也需要宿主引擎相关 API 的配合使用。当然，在 JS 中，相关 API 也不多

### 验证

比如，判断一个字符串中是否有数字。

使用 search

```js
var regex = /\d/;
var string = "abc123";
console.log(!!~string.search(regex));
// => true
```

使用 test

```js
var regex = /\d/;
var string = "abc123";
console.log(regex.test(string));
// => true
```

使用 match

```js
var regex = /\d/;
var string = "abc123";
console.log(!!string.match(regex));
// => true
```

使用 exec

```js
var regex = /\d/;
var string = "abc123";
console.log(!!regex.exec(string));
// => true
```

**其中，最常用的是 test**

### 切分

匹配上了，我们就可以进行一些操作，比如切分。

所谓“切分”，就是把目标字符串，切成一段一段的。在 JS 中使用的是 split。

比如，目标字符串是"html,css,javascript"，按逗号来切分

### 提取

虽然整体匹配上了，但有时需要提取部分匹配的数据。

此时正则通常要使用分组引用（分组捕获）功能，还需要配合使用相关 API。

这里，以日期为例，提取出年月日。注意下面正则中的括号

match

```js
var regex = /^(\d{4})\D(\d{2})\D(\d{2})$/;
var string = "2017-06-26";
console.log(string.match(regex));
// =>["2017-06-26", "2017", "06", "26", index: 0, input: "2017-06-26"]
console.log(regex.exec(string));
// =>["2017-06-26", "2017", "06", "26", index: 0, input: "2017-06-26"]
regex.test(string);
console.log(RegExp.$1, RegExp.$2, RegExp.$3);
// => "2017" "06" "26"
string.search(regex);
console.log(RegExp.$1, RegExp.$2, RegExp.$3);
// => "2017" "06" "26"
var date = [];
string.replace(regex, function (match, year, month, day) {
  date.push(year, month, day);
});
console.log(date);
// => ["2017", "06", "26"]
```

**其中，最常用的是 match**

### 替换

找，往往不是目的，通常下一步是为了替换。在 JS 中，使用 replace 进行替换。

比如把日期格式，从 `yyyy-mm-dd` 替换成 `yyyy/mm/dd`：

```js
var string = "2017-06-26";
var today = new Date(string.replace(/-/g, "/"));
console.log(today);
// => Mon Jun 26 2017 00:00:00 GMT+0800 (中国标准时间)
```

这里只是简单地应用了一下 replace。但，replace 方法是强大的

从上面可以看出用于正则操作的方法，共有 6 个，字符串实例 4 个，正则实例 2 个

```
String#search
String#split
String#match
String#replace
RegExp#test
RegExp#exec
```

**search 和 match 的参数问题**

我们知道字符串实例的那 4 个方法参数都支持正则和字符串。

但 search 和 match，会把字符串转换为正则的

```js
var string = "2017.06.27";

console.log(string.search("."));
// => 0
//需要修改成下列形式之一
console.log(string.search("\\."));
console.log(string.search(/\./));
// => 4
// => 4

console.log(string.match("."));
// => ["2", index: 0, input: "2017.06.27"]
//需要修改成下列形式之一
console.log(string.match("\\."));
console.log(string.match(/\./));
// => [".", index: 4, input: "2017.06.27"]
// => [".", index: 4, input: "2017.06.27"]

console.log(string.split("."));
// => ["2017", "06", "27"]

console.log(string.replace(".", "/"));
// => "2017/06.27"
```

**match 返回结果的格式问题**

match 返回结果的格式，与正则对象是否有修饰符 g 有关

```js
var string = "2017.06.27";
var regex1 = /\b(\d+)\b/;
var regex2 = /\b(\d+)\b/g;
console.log(string.match(regex1));
console.log(string.match(regex2));
// => ["2017", "2017", index: 0, input: "2017.06.27"]
// => ["2017", "06", "27"]
```

没有 g，返回的是标准匹配格式，即，数组的第一个元素是整体匹配的内容，接下来是分组捕获的内容，然后是整体匹配的第一个下标，最后是输入的目标字符串。

有 g，返回的是所有匹配的内容。

当没有匹配时，不管有无 g，都返回 nul

**exec 比 match 更强大**

当正则没有 g 时，使用 match 返回的信息比较多。但是有 g 后，就没有关键的信息 index 了。

而 exec 方法就能解决这个问题，它能接着上一次匹配后继续匹配

```js
var string = "2017.06.27";
var regex2 = /\b(\d+)\b/g;
console.log(regex2.exec(string));
console.log(regex2.lastIndex);
console.log(regex2.exec(string));
console.log(regex2.lastIndex);
console.log(regex2.exec(string));
console.log(regex2.lastIndex);
console.log(regex2.exec(string));
console.log(regex2.lastIndex);
// => ["2017", "2017", index: 0, input: "2017.06.27"]
// => 4
// => ["06", "06", index: 5, input: "2017.06.27"]
// => 7
// => ["27", "27", index: 8, input: "2017.06.27"]
// => 10
// => null
// => 0
```

从上述代码看出，在使用 exec 时，经常需要配合使用 while 循环

```js
var string = "2017.06.27";
var regex2 = /\b(\d+)\b/g;
var result;
while ((result = regex2.exec(string))) {
  console.log(result, regex2.lastIndex);
}
// => ["2017", "2017", index: 0, input: "2017.06.27"] 4
// => ["06", "06", index: 5, input: "2017.06.27"] 7
// => ["27", "27", index: 8, input: "2017.06.27"] 10
```

**修饰符 g，对 exex 和 test 的影响**

上面提到了正则实例的 lastIndex 属性，表示尝试匹配时，从字符串的 lastIndex 位开始去匹配。字符串的四个方法，每次匹配时，都是从 0 开始的，即 lastIndex 属性始终不变。而正则实例的两个方法 exec、test，当正则是全局匹配时，每一次匹配完成后，都会修改 lastIndex

```js
var regex = /a/g;
console.log(regex.test("a"), regex.lastIndex);
console.log(regex.test("aba"), regex.lastIndex);
console.log(regex.test("ababc"), regex.lastIndex);
// => true 1
// => true 3
// => false 0
```

如果没有 g，自然都是从字符串第 0 个字符处开始尝试匹配

```js
var regex = /a/;
console.log(regex.test("a"), regex.lastIndex);
console.log(regex.test("aba"), regex.lastIndex);
console.log(regex.test("ababc"), regex.lastIndex);
// => true 0
// => true 0
// => true 0
```

**test 整体匹配时需要使用^和$**

test 是看目标字符串中是否有子串匹配正则，即有部分匹配即可。

如果，要整体匹配，正则前后需要添加开头和结尾

```js
console.log(/123/.test("a123b"));
// => true
console.log(/^123$/.test("a123b"));
// => false
console.log(/^123$/.test("123"));
// => true
```

**split 相关注意事项**

split 方法看起来不起眼，但要注意的地方有两个的。

第一，它可以有第二个参数，表示结果数组的最大长度

```js
var string = "html,css,javascript";
console.log(string.split(/,/, 2));
// =>["html", "css"]
```

第二，正则使用分组时，结果数组中是包含分隔符的：

```js
var string = "html,css,javascript";
console.log(string.split(/(,)/));
// =>["html", ",", "css", ",", "javascript"]
```

**replace 是很强大的**

总体来说 replace 有两种使用形式，这是因为它的第二个参数，可以是字符串，也可以是函数。

当第二个参数是字符串时，如下的字符有特殊的含义

```
$1,$2,...,$99 匹配第1~99个分组里捕获的文本
$& 匹配到的子串文本
$` 匹配到的子串的左边文本
$' 匹配到的子串的右边文本
? 美元符号
```

把"2,3,5"，变成"5=2+3"：

```js
var result = "2,3,5".replace(/(\d+),(\d+),(\d+)/, "$3=$1+$2");
console.log(result);
// => "5=2+3"
```

**使用构造函数需要注意的问题**

一般不推荐使用构造函数生成正则，而应该优先使用字面量。因为用构造函数会多写很多`\`

```js
var string = "2017-06-27 2017.06.27 2017/06/27";
var regex = /\d{4}(-|\.|\/)\d{2}\1\d{2}/g;
console.log(string.match(regex));
// => ["2017-06-27", "2017.06.27", "2017/06/27"]

regex = new RegExp("\\d{4}(-|\\.|\\/)\\d{2}\\1\\d{2}", "g");
console.log(string.match(regex));
// => ["2017-06-27", "2017.06.27", "2017/06/27"]
```

**修饰符**

```
g 全局匹配，即找到所有匹配的，单词是global

i 忽略字母大小写，单词ingoreCase

m 多行匹配，只影响^和$，二者变成行的概念，即行开头和行结尾。单词是multiline
```

**source 属性**

正则实例对象属性，除了 global、ingnoreCase、multiline、lastIndex 属性之外，还有一个 source 属性。

它什么时候有用呢？

比如，在构建动态的正则表达式时，可以通过查看该属性，来确认构建出的正则到底是什么

```js
var className = "high";
var regex = new RegExp("(^|\\s)" + className + "(\\s|$)");
console.log(regex.source);
// => (^|\s)high(\s|$) 即字符串"(^|\\s)high(\\s|$)"
```

**构造函数属性**

构造函数的静态属性基于所执行的最近一次正则操作而变化。除了是$1,...,$9 之外，还有几个不太常用的属性（有兼容性问题）：

```
RegExp.input 最近一次目标字符串，简写成RegExp["$_"]
RegExp.lastMatch 最近一次匹配的文本，简写成RegExp["$&"]
RegExp.lastParen 最近一次捕获的文本，简写成RegExp["$+"]
RegExp.leftContext 目标字符串中lastMatch之前的文本，简写成RegExp["$`"]
RegExp.rightContext 目标字符串中lastMatch之后的文本，简写成RegExp["$'"]
```

```js
var regex = /([abc])(\d)/g;
var string = "a1b2c3d4e5";
string.match(regex);

console.log(RegExp.input);
console.log(RegExp["$_"]);
// => "a1b2c3d4e5"

console.log(RegExp.lastMatch);
console.log(RegExp["$&"]);
// => "c3"

console.log(RegExp.lastParen);
console.log(RegExp["$+"]);
// => "3"

console.log(RegExp.leftContext);
console.log(RegExp["$`"]);
// => "a1b2"

console.log(RegExp.rightContext);
console.log(RegExp["$'"]);
// => "d4e5"
```
