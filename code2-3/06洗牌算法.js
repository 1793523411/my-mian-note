const work = (arr) => {
    let res = []
    while (arr.length) {
        let random = Math.floor(Math.random() * arr.length);
        console.log(random)
        res.push(...arr.splice(random, 1))
    }
    return res
}

const work2 = (arr) => {
    let left;
    let right;
    for (let i = 0; i < arr.length;) {
        left = Math.floor(Math.random() * arr.length);
        right = Math.floor(Math.random() * arr.length);
        [arr[left], arr[right]] = [arr[right], arr[left]]
        i++
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// console.log(work2(arr))

work2(arr)

console.log(arr)