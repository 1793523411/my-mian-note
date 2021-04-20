const PENDING = 'pending'
const Fulfilled = 'fulfilled'
const Rejected = 'rejected'

function Promise(exectue) {
    let that = this;
    that.status = PENDING;
    that.onFulfilledFn = []
    that.onRejectedFn = []

    function resolve(value) {
        setTimeout(() => {
            if (that.status === PENDING) {
                that.value = value;
                that.status = Fulfilled
                that.onFulfilledFn.forEach(item => {
                    item(that.value)
                })
            }
        }, 1000);
    }

    function reject(reason) {
        setTimeout(() => {
            if (that.status === PENDING) {
                that.reason = reason;
                that.status = Rejected;
                that.onRejectedFn.forEach(item => {
                    item(that.reason)
                })
            }
        }, timeout);
    }

    try {
        exectue(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (v) => v;
    onRejected = typeof onRejected === "function" ? onRejected : (e) => e;
    let that = this;
    let promise;

    if (that.status === Fulfilled) {
        promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    const result = onFulfilled(that.value)
                    resolvePromise(promise, result, resolve, reject)
                } catch (error) {
                    reject(error)
                }
            });
        })
    } else if (that.status === Rejected) {
        promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    const result = onRejected(that.reason)
                    resolvePromise(promise, result, resolve, reject)
                } catch (error) {
                    reject(error)
                }
            });
        })
    } else {
        promise = new Promise((resolve, reject) => {
            that.onFulfilledFn.push(function () {
                try {
                    let x = onFulfilled(that.value)
                    resolvePromise(promise, x, resolve, reject)
                } catch (error) {
                    reject(error)
                }
            })

            that.onRejected.push(function () {
                try {
                    let x = onRejected(that.value)
                    resolvePromise(promise, x, resolve, reject)
                } catch (error) {
                    reject(error)
                }
            })
        })
    }
}

function resolvePromise(promise, x, resolve, reject) {
    if (promise === x) {
        return reject(new TypeError('x !=== promies'))
    }
    if (x instanceof Promise) {
        if (x.status === Fulfilled) {
            resolve(x.value)
        } else if (x.status === Rejected) {
            reject(x.reason)
        } else {
            x.then(function (y) {
                resolvePromise(promise, x, resolve, reject)
            }, reject)
        }
    }
    if ((x !== null) && ((typeof x === 'object' || (typeof x === 'function')))) {
        let exectue;
        try {
            let then = x.then;
            if (typeof then === 'function') {
                then.call(x, function (y) {
                    if (exectue) return;
                    exectue = true;
                    return resolvePromise(promise, x, resolve, reject)
                }, function (e) {
                    if (exectue) return;
                    exectue = true
                    reject(e)
                })
            } else {
                resolve(x)
            }
        } catch (error) {
            if (exectue) return;
            exectue = true;
            reject(e)
        }
    }
    resolve(x)
}

Promise.resolve = function (val) {
    if (val instanceof Promise) return val;
    return new Promise(function (resolve, reject) {
        resolve(val)
    })
}

Promise.reject = function (reason) {
    return new Promise(function (resolve, reject) {
        reject(reason)
    })
}

Promise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected)
}

Promise.prototype.finally = function () {
    return this.then(function (value) {
        return Promise.resolve(value).then(function () {
            return value
        }, function (error) {
            return Promise.reject(reason).then(function () {
                throw error
            })
        })
    })
}


Promise.all = function (promiseArr) {
    return new Promise((resolve, reject) => {
        const length = promiseArr.length
        const result = []
        let count = 0;
        if (length === 0) return resolve(result)
        for (let item of promiseArr) {
            Promise.resolve(item).then(function (data) {
                result[count++] = data
                if (result.length === length) {
                    return resolve(result)
                }
            }, function (reason) {
                reject(reason)
            })
        }
    })
}


Promise.race = function (promieArr) {
    return new Promise((resolve, reject) => {
        const length = promieArr.length;
        if (length === 0) return resolve()
        for (let item of promieArr) {
            Promise.resolve(item).then(function (value) {
                return resolve(value)
            }, function (reason) {
                return reject(reason)
            })
        }
    })
}

Promise.any = function (promieArr) {
    return new Promise(function (resolve, reject) {
        const length = promieArr.length
        let count = 0;
        let result = [];
        if (result === 0) return resolve(result)
        for (let item of promieArr) {
            Promise.resolve(item).then(function (value) {
                return resolve(value)
            }, function (reason) {
                result[count++] = reason;
                if (count === length) {
                    reject(result)
                }
            })
        }
    })
}

Promise.allSettled = function (promiesArr) {
    return new Promise(function (resolve) {
        const length = promiesArr.length;
        const result = [];
        let count = 0;
        if (length === 0) return resolve(result)
        for (let item of promiesArr) {
            Promise.resolve(item).then(function (value) {
                result[count++] = { status: 'fulfilled', value: value }
                if (count === length) {
                    return resolve(result)
                }
            }, function (reason) {
                result[count++] = { status: 'rejected', reason: reason }
                if (count === length) {
                    return resolve(result)
                }
            })
        }
    })
}