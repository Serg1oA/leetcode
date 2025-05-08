// URL: https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // WE GET: nums array, sorted, 
    // WE WANT: the same array, changed ''in place''', with only non-duplicates
    
    // 1st IDEA: create two pointers that go through each num starting at the end and check if they are the same num
    // 2nd IDEA: just use 1 pointer and substitute the second with pointer-1

    let last = nums.length - 1  // last index of nums
    
    while (last > 0) {
        if (nums[last] === nums[last - 1]) {
            nums.splice(last, 1)
        }
        last--
    }

    return nums.length
};
