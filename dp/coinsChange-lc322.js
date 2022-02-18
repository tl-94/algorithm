/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 let dp;
var coinChange = function(coins, amount) {
    if(amount == 0)return 0;
    dp = [0];
   
    return  dpFunc(coins, amount);
};

function dpFunc(coins, amount){
    if(dp[amount])return dp[amount];

    if(amount == 0)return 0

    let minCount = Infinity;
    for(let c = 0; c < coins.length; c++){
        if(amount - coins[c] >= 0){
            let res = dpFunc(coins, amount - coins[c]);
            if(res != -1){
                minCount = Math.min( 1 + res, minCount)
            }
        }
            
    }

    dp[amount] = minCount;
    return  dp[amount] == Infinity ? -1 : dp[amount]
}