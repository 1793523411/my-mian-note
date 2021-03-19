// [1, 2, 3, 4, 5].sort(() => .5 - Math.random())


exports.shuffle =  function shuffle(arr) {
    let res = [];
    let random;
    while (arr.length > 0) {
        random = Math.floor(Math.random() * arr.length)
        res.push(arr[random]);
        arr.splice(random, 1)
    }
    return res
}

// console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]))

// function shuffle(arr){
//     let n = arr.length, random;
//     while(0!=n){
//         random =  (Math.random() * n--) >>> 0; // 无符号右移位运算符向下取整
//         [arr[n], arr[random]] = [arr[random], arr[n]] // ES6的结构赋值实现变量互换
//     }
//     return arr;
// }