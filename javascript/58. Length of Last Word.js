// URL: https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // WE GET:  a phrase
    // WE WANT: the length of the longest word

    // 1st IDEA: use the charCodeAt method to find the end and start of the last word -> A is 65, Z is 90
    // EDIT: I misread the problem description, other than letters the only possible input is spaces, so... this was a bit overkill :P
    s = s.toUpperCase()
    let wordEnd = 0
    let wordStart = 0
    
    outerloop:
    for (let i = s.length - 1; i >= 0; i--) {
        // find the first letter starting at the end
        if (s.charCodeAt(i) > 64 && s.charCodeAt(i) < 91) {
            wordEnd = i
            for (let j = i; j >= 0; j--) {
                // find the first non-letter after finding the letter
                if (s.charCodeAt(j) < 65 || s.charCodeAt(j) > 90) {
                    wordStart = j + 1
                    break outerloop
                }
            }
            // if no non-letter found, word starts at 0
            wordStart = 0
            break
        }
    }

    return wordEnd - wordStart + 1
};
