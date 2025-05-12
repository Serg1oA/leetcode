// URL: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
 
var removeDuplicates = function(nums) {
    // WE GET: nums array, sorted
    // WE WANT: the same array, changed 'in place', with up to 2 of each num
    
    // 1st IDEA: create 3 pointers that go through each num starting at the end and check if they are the same num
    // 2nd IDEA: just use 1 pointer and substitute the second and third with pointer-1 & pointer-2

    let last = nums.length - 1  // last index of nums
    
    while (last > 0) {
        if (nums[last] === nums[last - 1] && nums[last] === nums[last - 2]) {
            nums.splice(last, 1)
        }
        last--
    }

    return nums.length
};
