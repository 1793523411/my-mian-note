let data = null;
self.addEventListener('connect', function (e) {
    console.log(e)
    const port = e.ports[0];
    port.addEventListener('message', function (event) {
        console.log(event)
        // get 指令则返回存储的消息数据
        if (event.data.get) {
            data && port.postMessage(data);
        }
        // 非 get 指令则存储该消息数据
        else {
            data = event.data;
        }
    });
    port.start();
});