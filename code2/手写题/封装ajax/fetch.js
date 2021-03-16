function fetchRequest(method, url, data = {}, timeout = 5000) {
    let payload = null;
    let query = ""
    if (method === "GET") {
        for (const key in data) {
            query += `&${key}=${data[key]}`
        }
        if (query) {
            query = '?' + query.slice()
        }
    } else {
        payload = JSON.stringify(data)
    }

    return new Promise((resolve, reject) => {
        fetch(url + query, {
            credentials: "include",
            method: method,
            headers: {
                "Content-Type": "xxx"
            },
            body: payload
        }).then(response => {
            return response.json()
        }).then(res => {
            resolve(res)
        }).catch(error => {
            reject(error)
        })
        setTimeout(() => {
            reject(reject.bind(this, 'fetch is timeout'))
        }, timeout);
    })
}