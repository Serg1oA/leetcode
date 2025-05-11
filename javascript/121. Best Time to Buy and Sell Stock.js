// URL: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // WE GET:  array of nums, representing prices at different days
    // WE WANT: the highest possible profit from buying and selling later
    
    /* 1st IDEA: start a counter for profit; set a pointer at the end and check the possible profits of each day against that pointer, then move the pointer left
    let profit = 0
    let saleDay = prices.length-1  // latest possible sale day is the last day

    while (saleDay > 0) {  // selling at day 1 (index 0) isn't possible because there's no previous day to buy
        if (prices[saleDay] > profit) {  // only worth continuing if the sale value of the day is higher than the profit found up to that point
            for (let currDay = 0; currDay < saleDay; currDay++) {  // check profit on each combination of buy day and sale day
                let transaction = prices[saleDay] - prices[currDay]
                if (transaction > profit) { profit = transaction }
            }
        }
        saleDay--
    }
    
    return profit
    */

    // 2nd IDEA: use Math.min to update the lowest possible buy value, and use Math.max to update the highest possible profit by doing the check between the previously found highest profit and the difference between the current day and the lowest possible buy 

    let lowestBuy = prices[0]
    let highestProfit = 0

    for(let i = 1; i < prices.length; i++) {
        lowestBuy = Math.min(prices[i], lowestBuy)
        highestProfit = Math.max(highestProfit, prices[i] - lowestBuy)
    }

    return highestProfit
};
