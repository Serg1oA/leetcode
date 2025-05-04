/** URL: https://leetcode.com/problems/teemo-attacking/
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
let findPoisonedDuration = function(timeSeries, duration) {
   
    let poisonTotal = 0

    for (let i = 0; i < timeSeries.length; i++) {
        // for the last attack, add the poison duration
        if (i === timeSeries.length - 1) {
            poisonTotal += duration
            break
        }
        // for all other attacks
        // if the difference between attacks is higher than the duration of the poison, add the poison duration
        if (timeSeries[i + 1] - timeSeries[i] > duration) {
            poisonTotal += duration
        // else, add only the difference between attacks
        } else {
            poisonTotal += timeSeries[i + 1] - timeSeries[i]
        }
    }

    return poisonTotal
};
