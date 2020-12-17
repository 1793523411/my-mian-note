function sort(arr) {
    let book = []
    let res = []
    for (let i = 0; i < arr.length; i++) {
        book[arr[i]] = book[arr[i]] ? book[arr[i]] + 1 : 0;
    }
    for(let i = 0; i < book.length; i++){
        for(let j = 0 ;j <= book[i]; j++){
            res.push(i)
        }
    }
    return res
}

console.log(sort([8,100,50,22,15,6,1,1000,999,0]))