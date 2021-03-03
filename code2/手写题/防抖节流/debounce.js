//王者荣耀回城

const { time } = require("console")

//输入框输入完后立即呈现内容


const ipt = document.querySelector('input')
ipt.addEventListener('input', e => {
    if (timeout) {
        clearTimeout(timeout)
        timeout = null
    }
    timeout = setTimeout(() => {
        search(e.target.value).then(resp => {

        }, e => {

        })
    }, 500)
})


const debonce = (func, wait = 0) => {
    let timeout = null;
    let args;
    function debounced(...arg) {
        args = arg;
        if (timeout) {
            clearTimeout(timeout)
            timeout = null;
        }
        return new Promise((res, rej) => {
            timeout = setTimeout(async () => {
                try {
                    const result = await func.apply(this, args)
                    res(result)
                } catch (e) {
                    rej(e)
                }
            }, wait)
        })
    }

    //取消原函数执行
    function cancel() {
        clearTimeout(timeout);
        timeout = null;
    }

    //立即调用原函数
    function flush() {
        cancel();
        return func.apply(this, args)
    }
    debounced.cancel = cancel;
    debounced.flush = flush
    return debounced
}

