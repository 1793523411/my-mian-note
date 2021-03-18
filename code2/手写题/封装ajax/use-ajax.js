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