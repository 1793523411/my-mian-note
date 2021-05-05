let PEDING = 'pending'
let FULFILLEd = 'fulfilled'
let REJECTED = 'rejected'

function Promise(exector) {
    let that = this
    that.status = PEDING
    let onFulfilledFn = []
    let onRejectedFn = []
    function resolve(val) {
        setTimeout(() => {
            if (that.status === PEDING) {
                that.status = FULFILLEd
                that.value = val;
                onFulfilledFn.forEach(item => {
                    item(that.value)
                })
            }
        })
    }
    function reject(reason) {
        setTimeout(() => {
            if (that.status === REJECTED) {
                that.status = REJECTED;
                that.reason = reason
                onRejectedFn.forEach(item => {
                    item(that.reason)
                })
            }
        })
    }
    try {
        exector(resolve, reject)
    } catch (error) {
        reject(error)
    }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (x) => x;
    onRejected = typeof onRejected === "function" ? onRejected : (e) => e
    let that = this;
    let promise;
    if (that.status === FULFILLEd) {
        promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    let x = onFulfilled(that.value)
                    resolvePromies(promise, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            })
        })
    }
    if (that.status === REJECTED) {
        promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    let x = onRejected(that.reason)
                    resolvePromies(promise, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            })
        })
    }
    if (that.status === PEDING) {
        promise = new Promise((resolve, reject) => {
            that.onFulfilledFn.push(function () {
                try {
                    let x = onFulfilled(that.value)
                    resolvePromies(promise, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            })
            that.onRejectedFn.push(function () {
                try {
                    let x = onRejected(that.reason)
                    resolvePromies(promise, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            })
        })
    }
}

function resolvePromise(promise, x, resolve, reject) {
    if (promise === x) {
        return reject(new TypeError('error'))
    }
    if (x instanceof Promise) {
        if (x.status === FULFILLEd) {
            resolve(x.value)
        } else if (x.status === REJECTED) {
            reject(x.reason)
        } else {
            x.then(function (y) {
                resolvePromise(promise, y, resolve, reject)
            }, reject)
        }
    }
    if ((x !== null) && ((typeof x === 'object' || (typeof x === 'function')))) {
        let exectude;
        try {
            let then = x.then
            if (typeof then === 'function') {
                then.call(x, function (y) {
                    if (exectude) return;
                    return resolvePromise(promise, y, resolve, reject)
                }, function (e) {
                    if (exectude) return;
                    exectude = true;
                    reject(e)
                })
            } else {
                resolve(x)
            }
        } catch (e) {
            if (exectude) return
            exectude = true
            reject(e)
        }
    }
    resolve(x)
}