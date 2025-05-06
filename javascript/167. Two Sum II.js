// URL: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // since the numbers are ordered, the most efficient way to do this is by creating two pointers that move based on if their sum is higher or lower than the target
    let left = 0
    let right = numbers.length - 1

    while (left < right) {  // this condition will never be false because all tests have a solution
        let sum = numbers[left] + numbers[right]
        if (sum === target) {
            return [left+1, right+1]
        } else if (sum < target) {
            left++
        } else if (sum > target) {
            right--
        }
    }
};
