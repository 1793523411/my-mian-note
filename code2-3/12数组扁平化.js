const myFlat = (arr) => {
// function myFlat(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            res = res.concat(myFlat(arr[i]))
        } else {
            res.push(arr[i])
        }
    }
    return res;
}

const arr = [1, 2, 3,[1, 2, 3, [1, 2, 3]]]
console.log(myFlat(arr))