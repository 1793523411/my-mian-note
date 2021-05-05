let xhr = new XMLHttpRequest();
xhr.open('GET', 'xxx', true)

xhr.onreadystatechange = () => {
    if (xhr.readyState === 2) {
        console.log(1)
    }
    if (xhr.readyState === 4) {
        console.log(2)
    }
}

xhr.send();
console.log(3)

// 312

// 0	UNSENT	代理被创建，但尚未调用 open() 方法。
// 1	OPENED	open() 方法已经被调用。
// 2	HEADERS_RECEIVED	send() 方法已经被调用，并且头部和状态已经可获得。
// 3	LOADING	下载中； responseText 属性已经包含部分数据。
// 4	DONE	下载操作已完成。

// 0：请求未初始化 1：服务器连接已建立 2：请求已接收 3：请求处理中 4：请求已完成，且响应已就绪

let xhr = new XMLHttpRequest()
xhr.open('GET', 'xxx', false) ///第三个参数表示是否为异步，默认为true

xhr.onreadystatechange = () => {
    if (xhr.readyState === 2) {
        console.log(1)
    }
    if (xhr.readyState === 4) {
        console.log(2)
    }
}
xhr.send()
console.log(3)

// 23


let xhr = new XMLHttpRequest()
xhr.open('GET', 'xxx', false)
xhr.send()
xhr.onreadystatechange = () => {
    if (xhr.readyState === 2) {
        console.log(1)
    }
    if (xhr.readyState === 4) {
        console.log(2)
    }
}
console.log(3)
// 3