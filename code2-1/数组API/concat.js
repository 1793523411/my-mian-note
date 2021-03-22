Array.prototype.concat = () => {
    let arr = JSON.parse(JSON.stringify(this))
    for (let i = 0; i < arguments.length; i++) {
        let tmp = arguments[i];
        if (Array.isArray(tmp)) {
            for (let j = 0; j < tmp.length; j++) {
                arr.push(tmp[i])
            }
        } else {
            arr.push(tmp)
        }
    }
    return arr;
}