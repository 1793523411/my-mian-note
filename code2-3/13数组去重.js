const work = (arr) => {
    return [...new Set(arr)]
}

const arr = [1,2,3,4,5,4,5,2]
console.log(work(arr))