const { shuffle } = require('../洗牌算法/index')

const arr = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

console.log(arr)


const butSort = (arr) => {
    let book = [];
    res = [];
    for (let i = 0; i < arr.length; i++) {
        book[arr[i]] = book[arr[i]] ? book[arr[i]] + 1 : 0;
    }
    for (let i = 0; i < book.length; i++) {
        for (let j = 0; j <= book[i]; j++) {
            res.push(i)
        }
    }
    return res;
}



console.log(butSort(arr))