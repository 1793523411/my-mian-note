//剑指 Offer 58 - I. 翻转单词顺序
var reverseWords = function(s) {
    let arr = s.split(" ")
    arr = arr.filter((item) => item !== "")
    return arr.reverse().join(" ")
};