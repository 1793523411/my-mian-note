//公交车10分钟一趟

const { fchown } = require("fs");
const { wrap } = require("module");
const { func } = require("prop-types");

//监听scroll事件的滚动距离，根据距离判断高亮的章节

wrap.addEventListener('scroll', e => {
    let highlightId = '';
    for (let id in offsetMap) {
        if (e, target.scrollTop <= offsetMap[id].offsetTop) {
            highlightId = id;
            break
        }
    }
    const lastDom = document.querySelector('.highlight')
    const currentElem = document.querySelector(`a[herg]=""#${highlightId}`)
    if (lastDom && lastDom.id != highlightId) {
        lastDom.classList.remove('highlight')
        currentElem.classList.add('highlight')
    } else {
        currentElem.classList.add('highlight')
    }
})

const throttle = (func, wait = 0, execFirstCall) => {
    let timeout = null;
    let args;
    let firstCallTimestamp;

    function throttled(...arg) {
        if (!firstCallTimestamp) firstCallTimestamp = new Date().getTime()
        if (!execFirstCall || !args) {
            console.log('set args :', arg)
            args = arg
        }
        if (timeout) {
            clearTimeout(timeout)
            timeout = null;
        }
        return new Promise(async (res, rej) => {
            if (new Date().getTime() - firstCallTimestamp > wait) {
                try {
                    const result = await func.apply(this, args)

                    
                    res(result)
                } catch (e) {
                    rej(e)
                } finally {
                    cancel()
                }
            } else {
                timeout = setTimeout(async () => {
                    try {
                        const result = await func.apply(this, args)
                        res(result)
                    } catch (e) {
                        rej(e)
                    } finally {
                        cancel()
                    }
                }, firstCallTimestamp + wait - new Date().getTime())
            }
        })
    }
    function cancel() {
        clearTimeout(timeout)
        args = null;
        timeout = null;
        firstCallTimestamp = null;
    }

    function flush() {
        cancel()
        return func.apply(this, args)
    }
    throttled.cancel = cancel;
    throttled.flush = flush;
}