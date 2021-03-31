let executeCount = 0;

const fn = nums => {
    executeCount++;
    return nums.map(x => x * 2)
}

// const batcher = f => {
//     return nums => {
//         try {
//             return f(nums)
//         } finally {
//             executeCount = 1;
//         }
//     }
// }
const batcher = f => {
    let nums = [];
    // const p = new Promise(resolve => {
    //     setTimeout(() => {
    //         resolve(f(nums))
    //     }, 100);
    // })
    const p = Promise.resolve().then(_ => f(nums))
    return arr => {
        let s = nums.length;
        nums = nums.concat(arr);
        let e = nums.length;
        return p.then(r => r.slice(s, e))
    }
}

const batchedFn = batcher(fn);

const main = async () => {
    const [r1, r2, r3] = await Promise.all([
        batchedFn([1, 2, 3]),
        batchedFn([4, 5]),
        batchedFn([7, 8, 9])
    ]).then(res => {
        console.log(res)
    })
}

