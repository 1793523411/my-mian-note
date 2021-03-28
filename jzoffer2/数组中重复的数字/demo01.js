var findRepeatNumber = function (nums) {
    let set = new Set()
    for (let i = 0; i < nums.length; i++) {
        let size = set.size;
        set.add(nums[i])
        if (set.size === size) return nums[i]
    }
};