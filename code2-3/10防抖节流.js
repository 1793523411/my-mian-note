const debounce = (fn, timeout = 0) => {
    let time = null;
    let arg
    function debounced(...args) {
        arg = args
        if (time) {
            clearTimeout(time)
            time = null;
        }
        return new Promise((resolve, reject) => {
            time = setTimeout(() => {
                try {
                    let res = fn.apply(this, arg)
                    resolve(res)
                } catch (e) {
                    reject(e)
                } finally {
                    cacnel()
                }
            }, timeout)
        })
    }
    function cacnel() {
        clearTimeout(time)
        time = null
    }
    function flush() {
        cancel()
        return fn.call(this, arg)
    }
    debounced.cacnel = cacnel
    debounced.flush = flush
    return debounced
}


const throttle = (fn, timeout) => {
    let time = null;
    let arg;
    let now
    function throlled(...args) {
        if (!now) now = new Date().getTime()
        arg = args
        if (time) {
            clearTimeout(time)
            time = null;
        }
        return new Promise((resolve, reject) => {
            if (new Date().getTime() - now > time) {
                try {
                    const res = fn.apply(this, arg)
                    resolve(res)
                } catch (error) {
                    reject(error)
                } finally {
                    cancel()
                }

            } else {
                time = setTimeout(() => {
                    try {
                        let res = fn.apply(this, arg)
                        resolve(res)
                    } catch (error) {
                        reject(error)
                    } finally {
                        cancel()
                    }
                }, timeout - (new Date().getTime() - now));
            }
        })

    }

    function cancel() {
        clearTimeout(time)
        time = null;
        now = null;
    }
    function flush() {
        cancel()
        return fn.apply(this, arg)
    }
    throlled.cancel = cancel
    throlled.flush = flush
    return throlled
}


const singlePipe = function (promiseFunc) {
    let sign = false;
    async function work(...arg) {
        if (!sign) {
            sign = true;
            let res = await promiseFunc(...arg)
            sign = false;
            return res;
        }else{
            return ""
        }
    }
    return work
};
const singlePipe2 = function (promiseFunc) {
    let sign = false;
    function work(...arg) {
        if (!sign) {
            sign = true
            return new Promise((resolve, reject) => {
                let res = promiseFunc(...arg)
                resolve(res)
            }).then(res => {
                sign = false;
                return res
            })
        } else {
            return new Promise((resolve, reject) => {
                resolve("")
            })
        }
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
request(1).then((data) => console.log(data)); // 1
request(2).then((data) => console.log(data)); // 无反应
setTimeout(() => {
    request(3).then((data) => console.log(data)); // 3
}, 1000);