// URL: https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function(strs) {

    let prefix = ""

    // for each letter of the 1st word
    let firstWord = strs[0]
    outerloop:
    for (let i = 0; i < firstWord.length; i++) {
        // check if that letter is the same as in other words, and at the end add it to prefix
        let commonLetter = true
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== firstWord[i]) {
                commonLetter = false
                break outerloop
            }
        }
        if (commonLetter === true) {
            prefix += firstWord[i]
        }
    }

    return prefix
};
