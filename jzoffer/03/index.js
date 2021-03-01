/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
    let res;
    for (let i = 0; i < nums.length; i++) {
        res = nums[i]
        nums.shift()
        if (nums.indexOf(res) != -1) return res
        i--
    }
};
var findRepeatNumber = function (nums) {
    let s = new Set()
    for (let i = 0; i < nums.length; i++) {
        let crrlen = s.size;
        s.add(nums[i]);
        if (s.size === crrlen) return nums[i]
    }
};
var findRepeatNumber = function (nums) {
    const map = {};
    for (const num of nums) {
        if (!map[num]) {
            map[num] = true
        } else {
            return num
        }
    }
};
var findRepeatNumber = function (nums) {
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length;) {
        if (nums[i++] == nums[i]) return nums[i]
    }
    return null
};
var findRepeatNumber = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) return nums[i];
        }
    }
    return null;
};






var findRepeatNumber = function (nums) {
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        while ((num = nums[i]) != i) {
            if (num == nums[num]) {
                return num;
            }
            [nums[i], nums[num]] = [nums[num], nums[i]];
        }
    }
};
