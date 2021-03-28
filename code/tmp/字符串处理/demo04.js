// //剑指 Offer 67. 把字符串转换成整数
// var strToInt = function (str) {
//     /* 
//           1、过滤前方空格
//           2、确定正负号
//           3、计算值部分
//           4、得到值 且判断是否越界
//       */
//     if (!str.length) return 0;

//     let i = 0,
//         sign = 1,
//         total = 0,
//         num; // i 当前索引 sign 正负号 total 数字部分
//     const l = str.length,
//         min = -(2 ** 31),
//         max = 2 ** 31 - 1;

//     // 1、剩余前方空格
//     while (str.charAt(i) === " " && i < l) i++;

//     // 2、确定正负号
//     if (str.charAt(i) === "+" || str.charAt(i) === "-")
//         sign = str.charAt(i++) === "+" ? 1 : -1;

//     // 3、计算数字部分
//     while (i < l) {
//         // 遇到字符不在[0-9] 则推出循环
//         if (str.charCodeAt(i) < 48 || str.charCodeAt(i) > 57) break;

//         // 更新total 巧用 - '0' 隐式转换 [0-9]字符
//         total = 10 * total + (str.charAt(i++) - "0");
//     }

//     num = sign * total;

//     return num <= min ? min : num >= max ? max : num;
// };


var strToInt = function (str) {
    str = str.replace(/^\s+|\s+$/g, '');
    let arr = str.split("");
    let res = [];
    let i = 0;
    while (i < arr.length) {
        console.log(arr[i])
        console.log(arr[i + 1])
        if (arr[i] === "+" || arr[i] === "-") {
            res.push([i, arr[i]])
        } else if (+arr[i] >= 0 && +arr[i] <= 9 && arr[i] !== " ") {
            res.push([i, i])
        } else {
            break
        }
        i++;
    }
    console.log(res)
    let tmp1 = res.filter(item => (+item[1] >= 0 && +item[1] <= 9))
    let tmp2 = res.filter(item => !(+item[1] >= 0 && +item[1] <= 9))

    console.log(tmp1)
    console.log(tmp2)

    let min = 2 ** 31 * -1;
    let max = 2 ** 31 - 1;
    // console.log(arr)
    let sign = 1;
    if (tmp2.length) {
        if (tmp2.pop() === "-") sign = -1;
    }
    let num = +tmp1.join("") * sign;
    // console.log(res)
    if (num > max) {
        return max
    } else if (num < min) {
        return min;
    } else {
        return num
    }
}

console.log(strToInt("-5-"))


var strToInt = function (str) {
    let i = 0;
    let sign = 1;
    let num = 0;
    while (str[i] === " ") {
        i++;
    }
    if (str[i] === "+" || str[i] === "-") {
        sign = str[i] === "+" ? 1 : -1;
        i++;
    }

    while (i < str.length) {
        if (str.charCodeAt(i) < 48 || str.charCodeAt(i) > 57) break;
        num = num * 10 + (str.charCodeAt(i) - 48);
        i++;
    }
    let min = 2 ** 31 * -1
    let max = 2 ** 31 - 1;
    num = num * sign;
    if (num > max) {
        return max
    } else if (num < min) {
        return min
    } else {
        return num
    }
};