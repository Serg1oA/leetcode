// URL: https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(str) {
    // WE GET: a valid Roman number
    // WE WANT: the equivalent integer
    /* Rules related to Roman numbers:
       I can be placed before V (5) and X (10) to make 4 and 9. 
       X can be placed before L (50) and C (100) to make 40 and 90. 
       C can be placed before D (500) and M (1000) to make 400 and 900.
    */
    // FIRST IDEA: loop through the string and add the values to a counter. When one of the above rules is found, the counter needs to go +2 instead of +1
    let value = 0
    let curr = ""
    let next = ""

    for (let i = 0; i < str.length; i++) {
        curr = str[i]
        next = str[i+1]
        if (curr === "M") {
            value += 1000

        } else if (curr === "D") {
            value += 500

        } else if (curr === "C") {
            if (next === "D") { value += 400; i++ }
            else if (next === "M") { value += 900; i++ }
            else { value += 100 }

        } else if (curr === "L") {
            value += 50

        } else if (curr === "X") {
            if (next === "L") { value += 40; i++ }
            else if (next === "C") { value += 90; i++ }
            else { value += 10 }

        } else if (curr === "V") {
            value += 5

        } else if (curr === "I") {
            if (next === "V") { value += 4; i++ }
            else if (next === "X") { value += 9; i++ }
            else { value += 1 }
        }
    }

    return value
};
