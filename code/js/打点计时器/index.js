function count(start, end) {
    if (start <= end) {
        console.log(start++);
        st = setTimeout(() => {
            count(start, end)
        }, 1000)
    }
    return {
        cancel: function () {
            clearTimeout(st)
        }
    }
}
// count(1, 10)


function count2(start, end) {
    console.log(start++)
    var timer = setInterval(() => {
        if (start < end) {
            console.log(start++)
        }
    }, 1000)
    return {
        cancel: function () {
            clearInterval(timer)
        }
    }
}
count2(1, 10)