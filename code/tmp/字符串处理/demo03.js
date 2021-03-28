//剑指 Offer 67. 把字符串转换成整数
var strToInt = function (str) {
    str = str.replace(/^\s+|\s+$/g, '');
    let arr = str.split("");
    // console.log(arr)
    let has = arr.indexOf("+") !== -1 || arr.indexOf("-") !== -1
    if (arr[0] !== "+" && arr[0] !== "-" && !(+arr[0] <= 9 && +arr[0] > 0) && (+arr[1] <= 9 && +arr[1] > 0)) { return 0 }
    // let k = 0
    // while (arr[k] === 0) {
    //     arr.pop()
    //     k++;
    // }
    let numArr = []
    if (has) {
        // if(Math.abs(arr.indexOf("+"),arr.indexOf("-")) === 0) return 0
        let sign
        if (arr.indexOf("+") !== -1 && arr.indexOf("-") !== -1) {
            sign = Math.min(arr.indexOf("+"), arr.indexOf("-"))
        } else {
            sign = Math.max(arr.indexOf("+"), arr.indexOf("-"))
        }
        // console.log(sign)
        numArr.push(arr[sign])
        sign++
        while (sign < arr.length) {
            if ((+arr[sign] >= 0 || +arr[sign] <= 9) && arr[sign] !== " ") {
                numArr.push(arr[sign])
                sign++
            } else {
                break;
            }
        }
    } else {
        let sign = arr.findIndex(item => +item > 0 && +item <= 9);
        // console.log(sign)
        if (sign !== -1) {
            numArr.push(arr[sign])
            // console.log(numArr)
            sign++;
            while (sign !== -1 && sign < arr.length) {
                if ((+arr[sign] >= 0 && +arr[sign] <= 9) && arr[sign] !== " ") {
                    numArr.push(arr[sign])
                    // console.log(numArr)
                    sign++
                } else {
                    break
                }
            }
        }
    }
    // console.log(numArr)
    if (numArr[0] === "+" || numArr[0] === "-") {
        let sign = numArr[0];
        let tmp = numArr.slice(1).join("");
        // console.log(+tmp)
        if (+tmp > 2 ** 31 - 1) {
            if (sign === "+") return 2147483648 - 1
            else return -2147483648
        }
        return +tmp * (sign === "+" ? 1 : -1)
    } else {
        let tmp = numArr.slice(0).join("");
        console.log(tmp)
        if (+tmp > 2 ** 31 - 1) return 2147483648 - 1
        return +tmp
    }
};


console.log(strToInt("words and 987"))
