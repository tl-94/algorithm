/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function (prices) {

    let MaxProfit = 0;
    let minimize = Infinity;
    let dp = [];
    for (let i = 0; i < prices.length; i++) {
        if(prices[i] < minimize){
            minimize = prices[i]
        }
        let profit = prices[i] - minimize;

        profit > MaxProfit && (MaxProfit = profit)
    }

    return MaxProfit;
};