// URL: https://leetcode.com/problems/jump-game

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // WE GET:  array of nums, representing the max length of a jump
    // WE WANT: a boolean on if we can reach the last num by jumping
    
    // 1st IDEA: checking all possibilities would be n^2, so no good
    // 2nd IDEA: using pointers and starting at the end, thinking of the jumps in reverse order
    let curr = nums.length-1 // starting at the end, this is our curr index

    for (let i = curr-1; i >= 0; i--) {
        if (nums[i] >= (curr-i)) {  // if the number we're checking is higher or equal to the current position, that means we can jump there
            curr = i
        }
    }

    return curr === 0  // curr === 0 means we can reach the end by starting at index 0
};
