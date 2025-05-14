// URL: https://leetcode.com/problems/jump-game-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    // WE GET:  array of nums, representing the max length of a jump
    // WE WANT: the minimum number of jumps to reach the last index
    
    // 1st IDEA: choose the highest number to land on out of all possibilities of each jump. Use a jump counter for the answer.
    let jumpCounter = 0
    let curr = 0  // player current position
    let next = 0  // the farthest we can reach with the next jump

    while (curr < nums.length-1) {  // description mentioned there is always a solution, so curr will always become = last index
        jumpCounter++
        let bestJump = 0
        for (let i = 1; i <= nums[curr]; i++) {  // find the farthest point we can reach from "curr + i"
            if (curr + i >= nums.length - 1) {  // if we can reach the last index, return the jump count
                return jumpCounter
            }
            if (curr + i + nums[curr + i] > bestJump) {
                bestJump = curr + i + nums[curr + i]
                next = curr + i
            }
        }
        curr = next  // do the jump, move to the next position
    }

    return jumpCounter
};
