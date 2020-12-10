//思路：先将数字转为字符， str= str + '' ;
//利用反转函数，每三位字符加一个 ','最后一位不加； re()是自定义的反转函数，最后再反转回去！
for (var i = 1; i <= re(str).length; i++) {
    tmp += re(str)[i - 1]
    if (i % 3 == 0 && i != re(str).length) {
        tmp += ","
    }
}

function format(str) {
    let s = ""
    let count = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        s = str[i] + s;
        count++;
        if (count % 3 == 0 && i != 0) {
            s = "," + s
        }
    }
    return s;
}