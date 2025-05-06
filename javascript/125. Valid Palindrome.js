// URL: https://leetcode.com/problems/valid-palindrome

/**
 * @param {string} str
 * @return {boolean}
 */
var isPalindrome = function(str) {
    let letters = str.replace(/[^\w]|_/g, "").toLowerCase()
    let reversed = letters.split("").reverse().join("")
    return letters === reversed
};
