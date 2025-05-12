// URL: https://leetcode.com/problems/container-with-most-water/

/**
 * @param {number[]} heights
 * @return {number}
 */
let maxArea = function(heights) {
    // WE GET:  an array of nums, representing the height of sticks at a distance of 1 from each other
    // WE WANT: the heighest possible area of water held between two sticks

    // 1st IDEA: nested loops to check for every possibility
    /* this is too slow, onto the next idea!
    let maxArea = 0
    for (let i = 0; i < heights.length-1; i++) {
        for (let j = i+1; j < heights.length; j++) {
            let currArea = Math.min(heights[j], heights[i]) * (j-i)
            maxArea = Math.max(maxArea, currArea)
        }
    }
    return maxArea
    */

    // 2nd IDEA: set two pointers, one at each end of the array and move the smallest one, then recalculate max area
    let left = 0
    let right = heights.length-1
    let maxArea = 0

    while (left !== right) {
        let currArea = Math.min(heights[left], heights[right]) * (right-left)
        maxArea = Math.max(maxArea, currArea)
        if (heights[left] > heights[right]) {
            right--
        } else {
            left++
        }
    }

    return maxArea
};
