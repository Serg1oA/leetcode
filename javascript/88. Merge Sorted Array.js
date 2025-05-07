// URL: https://leetcode.com/problems/merge-sorted-array

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // WHAT WE GET: nums1 with 0s at the end that need to be replaced by nums2. Both nums1 and nums2's values are sorted.
    // WHAT WE WANT: nums1 changed in place
    // EDGE CASES: when nums1 is === [0]
    // FIRST IDEA: using multiple pointers to change each 0 at the end of nums1, using the already given m and n

    // m === pointer for end of nums1's values
    // n === pointer for end of nums2's values
    // lastElem === pointer for end of nums1 - which will be what we replace with the highest num between pointer1 and pointer2
    let lastElem = nums1.length - 1
    
    // our work is done when all elements of nums2 have been merged
    while (n > 0) {
        if (m > 0 && nums1[m - 1] > nums2[n - 1]) {
            nums1[lastElem] = nums1[m - 1];
            m--;
        } else {
            nums1[lastElem] = nums2[n - 1];
            n--;
        }
        lastElem--;
    }

    return nums1
};
