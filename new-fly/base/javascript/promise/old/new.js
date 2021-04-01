const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected'

class MyPromise {
    constructor(exector) {
        try {
            exector(this.resolve, this.reject)
        } catch (error) {
            this.reject(error)
        }
    }

    status = PENDING;
    value = null;
    reason = null;
    // onFulfilledCallback = null;
    onFulfilledCallbacks = [];
    // onRejectedCallback = null;
    onRejectedCallbacks = [];
    resolve = (value) => {
        if (this.status === PENDING) {
            this.status = FULFILLED;
            this.value = value
            // this.onFulfilledCallback && this.onFulfilledCallback(value)
            while (this.onFulfilledCallbacks.length) {
                this.onFulfilledCallbacks.shift()(value)
            }
        }
    }

    reject = (reason) => {
        if (this.status === PENDING) {
            this.status = REJECTED;
            this.reason = reason
            // this.onRejectedCallback && this.onRejectedCallback(reason)
            while (this.onRejectedCallbacks.length) {
                this.onRejectedCallbacks.shift()(reason)
            }
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };

        const promise2 = new MyPromise((resolve, reject) => {
            if (this.status === FULFILLED) {
                queueMicrotask(() => {
                    try {
                        const x = onFulfilled(this.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (error) {
                        reject(error)
                    }
                })
            } else if (this.status === REJECTED) {
                queueMicrotask(() => {
                    try {
                        const x = onRejected(this.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (error) {
                        reject(error)
                    }
                })
            } else if (this.status === PENDING) {
                // this.onFulfilledCallbacks.push(onFulfilled);
                // this.onRejectedCallbacks.push(onRejected);
                this.onFulfilledCallbacks.push(() => {
                    queueMicrotask(() => {
                        try {
                            const x = onFulfilled(this.value);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (error) {
                            reject(error)
                        }
                    })
                });
                this.onRejectedCallbacks.push(() => {
                    queueMicrotask(() => {
                        try {
                            const x = onRejected(this.reason);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (error) {
                            reject(error)
                        }
                    })
                });
            }
        })
        // if (this.status === FULFILLED) {
        //     onFulfilled(this.value)
        // } else if (this.value === REJECTED) {
        //     onRejected(this.reason)
        // } else if (this.status === PENDING) {
        //     this.onFulfilledCallbacks.push(onFulfilled);
        //     this.onRejectedCallbacks.push(onRejected);
        // }
    }

    static resolve(parameter) {
        if (parameter instanceof MyPromise) {
            return parameter
        }
        return new MyPromise(resolve => {
            resolve(parameter)
        })
    }

    static reject(reason) {
        return new MyPromise((resolve, reject) => {
            reject(reason)
        })
    }
}

function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        return reject(new TypeError('Chaning unsafe cycle'))
    }
    if (x instanceof MyPromise) {
        x.then(resolve, reject)
    } else {
        resolve(x)
    }
}

const promise = new MyPromise((resolve, reject) => {
    // setTimeout(() => {
    // resolve('success')
    // reject('err')
    // }, 2000);
    throw new Error("error")
})

promise.then(value => {
    console.log(1);
    console.log('resolve', value)
}, reason => {
    console.log(2);
    console.log(reason)
})

// function other() {
//     return new MyPromise((resolve, reject) => {
//         resolve('other')
//     })
// }

// const p1 = promise.then(value => {
//     console.log(1)
//     console.log('resolve', value)
//     return p1
// })

// p1.then(value => {
//     console.log(2)
//     console.log('reolve', value)
// }, reason => {
//     console.log(3)
//     console.log('reject', reason)
// })

// promise.then(v => {
//     console.log(1)
//     console.log('reolve', v)
//     // return other()
//     return 
// }, r => {
//     console.log('reject', r)
// }).then(value => {
//     console.log(2);
//     console.log('resolve', value)
// })

// promise.then(v => {
//     console.log(2)
//     console.log('reolve', v)
// }, r => {
//     console.log('reject', r)
// })
// promise.then(v => {
//     console.log(3)
//     console.log('reolve', v)
// }, r => {
//     console.log('reject', r)
// })