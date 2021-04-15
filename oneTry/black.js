const singlePipe = function (promiseFunc) {
    let sign = false;
    
    async function work(...arg) {
        if (!sign) {
            sign = true
            let res = await promiseFunc(...arg)
            return res
        }
        sign = false
        return ""
    }
    return work
};
// 测试
var promiseFunc = function (data) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(data), 1000);
    });
};

var request = singlePipe(promiseFunc);
request(1).then((data) => console.log("1:", data)); // 1
request(2).then((data) => console.log(data)); // 无反应
setTimeout(() => {
    request(3).then((data) => console.log("3:", data)); // 3
}, 2000);