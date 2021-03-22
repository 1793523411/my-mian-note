function work(num) {
    let tmp = (num + "").split("").reverse()
    let res = []
    while (tmp.length) {
        res.push(tmp.splice(0, 3).join(""))
    }
    res = res.reverse().map(item => item.split("").reverse().join(""))
    return '￥' + res.join(",")
}



let res = work(12345678)
console.log(res)

function work2(num) {
    num = (num + "").split("")
    let count = 0;
    let res = ""
    for (let i = num.length - 1; i >= 0; i--) {
        res = num[i] + res;
        count++;
        if(count % 3 ===0 ){
            res = "," + res
        }
    }
    return "￥"+res;
}

let res2 = work2(12345678)
console.log(res2)

