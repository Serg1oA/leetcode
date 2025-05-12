// URL: https://leetcode.com/problems/rotate-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // WE GET:  an array of numbers, nums + a number >= 0, k
    // WE WANT: remove the last k elements of nums and add them at the beginning in reverse order

    // 1st IDEA: use array methods such as slice and concat
    /* 2nd IDEA: use a loop to unshift the poped last element, k times
    --- this was too slow for some testcases
    for (let i = 1; i <= k; i++) {
        nums.unshift(nums.pop())
    }
    */

    // trying 1st IDEA:
    // ensure k is reduced to a value within the bounds of the array length
    k = k % nums.length
    // slice the last k elements and the rest of the elements
    let lastPart = nums.slice(-k)
    let firstPart = nums.slice(0, nums.length - k)
    
    // concatenate last part to the front of the first part
    let rotatedArray = lastPart.concat(firstPart)
    
    // copy rotatedArray to nums
    for (let i = 0; i < nums.length; i++) {
        nums[i] = rotatedArray[i]
    }
};
