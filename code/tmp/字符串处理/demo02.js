//剑指 Offer 58 - II. 左旋转字符串
var reverseLeftWords = function(s, n) {
    let arr = s.split("")
    arr = arr.concat(arr.splice(0,n))
    return arr.join("")
};