/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function (nums) {
    let dp = [nums[0]];
    let max = nums[0];
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        const curVal = nums[i];
        // if (count + nums[i] > 0) {
        //     count += nums[i]
        //     max = Math.max(count, max)
        // } else {
        //     count = 0
        //     max = Math.max(nums[i], max)
        // }
        if(dp[i - 1] < 0){
            dp[i] = curVal
        }else if(dp[i - 1] + curVal > 0 ){
            dp[i] = dp[i - 1] + curVal
        }else{
            dp[i] = curVal
        }

        max = Math.max(dp[i], max)
        
    }

    return max

};