const arr1 = [1, 2, 3, 4, 5, 6]

const arr2 = ['a', 'b', 'c']

compine = [arr1, arr2]

let res = []

for (let i = 0; i < compine.length; i++) {
    let num = Math.floor(Math.random() * compine[i].length);
    res.push(compine[i][num])
}

console.log(res)