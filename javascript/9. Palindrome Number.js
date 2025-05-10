// URL: https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // WE GET: a number, can be negative
    // WE WANT: a boolean, whether the num is the same if the digit order is reversed
    if (x > 0) {  // the condition is only possible without the minus sign at the start of the number
        return x === Number(String(x).split("").reverse().join(""))
    } else {
        return false
    }
};
