const { wrap } = require("module");

wrap.addEventListen('scroll', e => {
    let highlightId = '';
    for (let id in offsetMap) {
        if (e, target.scrollTop <= offsetMap[id].offsetTop) {
            highlightId = id;
            break;
        }
    }
    const lastDom = document.querySelector('.highlight')
    const currentElem = document.querySelector(`a[herf] = "#${highlightId}"`)
    if (lastDom && lastDom.id != highlightId) {
        lastDom.classList.remove('highlight');
        currentElem.classList.add('highlight');
    } else {
        currentElem.classList.add('highlight')
    }
})

const throttle = (func, wait = 0, execFirstCall) => {
    let timeout = null;
    let args;
    let firstCallTimeStamp;

    function throttled(...arg) {
        if (!firstCallTimeStamp) firstCallTimeStamp = new Date().getTime()
        if (!execFirstCall || !args) {
            console.log('set args:', arg)
            args = arg
        }
        if (timeout) {
            clearTimeout(timeout)
            timeout = null;
        }
        return new Promise(async (resolve, reject) => {
            if (new Date().getTime() - firstCallTimeStamp > wait) {
                try {
                    const result = await func.apply(this, args)
                    resolve(result)
                } catch (e) {
                    reject(e)
                }
            } else {
                timeout = setTimeout(async () => {
                    try {
                        const result = await func.apply(this, arg)
                        resolve(result)
                    } catch (e) {
                        reject(e)
                    } finally {
                        cancel()
                    }
                }, firstCallTimeStamp + wait - new Date().getTime())
            }
        })
    }
    function cancel() {
        clearTimeout(timeout)
        args = null;
        timeout = null;
        firstCallTimeStamp = null;
    }
    function flush() {
        cancel()
        return func.apply(this, args)
    }
    throttle.cancel = cancel;
    throttle.flush = flush;
}