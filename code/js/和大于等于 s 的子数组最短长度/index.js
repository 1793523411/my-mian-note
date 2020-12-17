function minimuSize(nums, s) {
    let left = 0, currSum = 0, res = Infinity;
    for (let right = 0; right < nums.length; right++) {
        currSum += nums[right];
        while (currSum >= s) {
            res = Math.min(res, right - left + 1)
            currSum -= nums[left]
            left++
        }
    }
    return res === Infinity ? -1 : res
}

console.log(minimuSize([2,3,1,2,4,3],7))
console.log(minimuSize([1, 2, 3, 4, 5],100))