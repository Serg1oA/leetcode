// URL: https://leetcode.com/problems/lemonade-change/

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let fives = 0
    let tens = 0

    // define what happens upon receiving each bill
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            fives++
        } else if (bills[i] === 10) {
            if (fives === 0) { return false }
            fives--
            tens++
        } else if (bills[i] === 20) {
            if (tens > 0 && fives > 0) {
                tens--
                fives--
            } else if (fives >= 3) {
                fives -= 3
            } else {
                return false
            }
        }
    }

    // getting here means the sales went well :P    
    return true
};
