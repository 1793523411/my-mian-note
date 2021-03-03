let fs = require('fs');
const { type } = require('os');
//定义三种状态
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function MyPromise(executor) {
    let self = this;
    self.value = null;
    self.error = null;
    self.status = PENDING;
    self.onFulfilledCallbacks = [];
    self.onRejectedCallbacks = [];

    const resolve = (value) => {
        if (self.status !== PENDING) return;
        setTimeout(() => {
            self.status = FULFILLED;
            self.value = value;
            self.onFulfilledCallbacks.forEach((callback) => callback(self.value));
        });
    };

    const reject = (error) => {
        if (self.status !== PENDING) return;
        setTimeout(() => {
            self.status = REJECTED;
            self.error = error;
            self.onRejectedCallbacks.forEach((callback) => callback(self.error));
        });
    };
    executor(resolve, reject);
}
// MyPromise.prototype.then = function (onFulfilled, onRejected) {
//     if (this.status === PENDING) {
//         this.onFulfilledCallbacks.push(onFulfilled);
//         this.onRejectedCallbacks.push(onRejected);
//     } else if (this.status === FULFILLED) {
//         onFulfilled(this.value);
//     } else {
//         onRejected(this.error);
//     }
//     return this;
// }

MyPromise.prototype.then = function (onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : value => value;
    onRejected = typeof onRejected === "function" ? onRejected : error => { throw error };
    let bridgePromise;
    let self = this;
    if (self.status === PENDING) {
        return bridgePromise = new MyPromise((resolve, reject) => {
            self.onFulfilledCallbacks.push((value) => {
                try {
                    let x = onFulfilled(this.value)
                    resolvePromise(bridgePromise, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            })
            self.onRejectedCallbacks.push((error) => {
                try {
                    let x = onRejected(error)
                    resolve(x)
                } catch (e) {
                    reject(e)
                }
            })
        })
    }
    if (self.status === FULFILLED) {
        return bridgePromise = new MyPromise((resolve, reject) => {
            setTimeout(() => {
                try {
                    let x = onFulfilled(self.value)
                    resolvePromise(bridgePromise, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            })

        })
    }
    if (self.status === onRejected) {
        return bridgePromise = new MyPromise((resolve, reject) => {
            setTimeout(() => {
                try {
                    let x = onRejected(self.error)
                    resolvePromise(bridgePromise, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            })

        })
    }
}

function resolvePromise(bridgePromise, x, resolve, reject) {
    if (x instanceof MyPromise) {
        if (x.status === PENDING) {
            x.then(y => {
                resolvePromise(bridgePromise, y, resolve, reject)
            }, error => {
                reject(error)
            })
        } else {
            x.then(resolve, reject)
        }
    } else {
        resolve(x)
    }
}

MyPromise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected)
}

MyPromise.resolve = (param) => {
    if (param instanceof MyPromise) return param;
    return new Promise((resolve, reject) => {
        if (param && param.then && typeof param.then === "function") {
            param.then(resolve, reject)
        } else {
            resolve(param)
        }
    })
}

MyPromise.reject = (reason) => {
    return new MyPromise((resolve, reject) => {
        reject(reason)
    })
}

MyPromise.prototype.finally = function (callback) {
    this.then(value => {
        return Promise.resolve(callback()).then(() => {
            return value
        })
    }, error => {
        return MyPromise.resolve(callback()).then(() => {
            throw error
        })
    })
}

MyPromise.all = function (promises) {
    return new MyPromise((resolve, reject) => {
        let result = [];
        let index = 0;
        let len = promises.length;
        if (len === 0) {
            resolve(result);
            return
        }

        for (let i = 0; i < len; i++) {
            MyPromise.resolve(promises[i]).then(data => {
                result[i] = data;
                index++;
                if (index === len) resolve(result)
            }).catch(err => {
                reject(err)
            })
        }
    })
}

MyPromise.race = function (promise) {
    return new MyPromise((resolve, reject) => {
        let len = promise.length;
        if (len === 0) return;
        for (let i = 0; i < len; i++) {
            MyPromise.resolve(promise[i]).then(data => {
                resolve(data)
                return;
            }).catch(err => {
                reject(err)
                return
            })
        }
    })
}

let readFilePromise = (filename) => {
    return new MyPromise((resolve, reject) => {
        fs.readFile(filename, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}

readFilePromise('./001.txt').then(data => {
    console.log(data.toString());
    return readFilePromise("./002.txt")
}).then(data => {
    console.log(data.toString())
})