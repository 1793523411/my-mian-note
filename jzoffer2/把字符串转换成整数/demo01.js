var strToInt = function (str) {
    let i = 0;
    let sign = 1;
    let num = 0;
    while (str[i] === ' ') i++;

    if (str[i] === '+' || str[i] === '-') {
        sign = str[i] === '+' ? 1 : -1;
        i++;
    }

    while (i < str.length) {
        if (str.charCodeAt(i) < 48 || str.charCodeAt(i) > 57) break;
        // console.log(str[i])
        num = num * 10 + (str.charCodeAt(i) - 48)
        i++;
    }
    // console.log(num)
    num = num * sign
    let max = 2 ** 31 - 1;
    let min = 2 ** 31 * -1;
    if (num > max) {
        return max
    } else if (num < min) {
        return min
    } else {
        return num
    }
};