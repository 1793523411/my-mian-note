var isStraight = function (nums) {
    let start = Math.min(...nums.filter(item => item !== 0))
    let copy = [];
    copy.push(start)
    let count = 0
    let count0 = nums.filter(item => item === 0).length
    for (let i = 1; i < 5; i++) {
        copy.push(start + i)
    }
    for (let i = 0; i < copy.length; i++) {
        if (nums.findIndex(item => item === copy[i]) !== -1) count++
    }
    return count0 + count === 5
};

var isStraight = function (nums) {
    nums = nums.sort((a, b) => a - b).filter((item) => item !== 0);
    if (nums[nums.length - 1] - nums[0] > 4) return false;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) return false;
    }
    return true;
};
