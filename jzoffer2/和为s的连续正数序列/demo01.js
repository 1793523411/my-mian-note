/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
    let len = Math.floor(target / 2) + 1;
    console.log(len)
    let res = [];
    let sum = 0;
    let tmp = []
    for (let i = 1; i <= len; i++) {
        sum += i;
        tmp.push(i)
        while (sum > target) {
            sum -= tmp[0]
            tmp.shift()
        }
        console.log(tmp, sum)
        if (sum === target) {
            res.push(tmp.slice())
        }
    }
    return res
};