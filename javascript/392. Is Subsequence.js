// URL: https://leetcode.com/problems/is-subsequence/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // WE GET:  two strings
    // WE WANT: to check if the letters of the 1st string are in the second string in correct order

    // 1st IDEA: use a simple loop to add letters that match to a new string, then compare strings
    let tempStr = ""
    let currLetter = 0
    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[currLetter]) {
            tempStr += t[i]
            currLetter++
        }
    }
    return tempStr === s
};
