//防抖

function debounce(fn, wait) {
    let timer;
    return function () {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, wait)
    }
}

function debounce(fn, delay) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(fn, delay);
    }
}

//节流

//使用时间戳
function throttle(fn, wait) {
    let prev = new Date()
    return function () {
        const args = arguments
        const now = new Date();
        if (now - prev > wait) {
            fn.apply(this, args);
            prev = new Date()
        }
    }
}

//使用一个标记
function throttle(fn, delay) {
    let valid = true;
    return function () {
        if (!valid) {
            return false;
        }
        valid = false;
        setTimeout(() => {
            fn();
            valid = true
        }, delay)
    }
}