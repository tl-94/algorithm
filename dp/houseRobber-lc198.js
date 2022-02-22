/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    if(nums.length == 1)return nums[0];
    let dp = [nums[0], nums[1]];
    if(nums.length == 2){
        return Math.max(...dp);
    }else{
        dp.push(nums[2] + dp[0]);
    };
    let max = Math.max(...dp);
    for(let i = 3; i<nums.length;i++){
        dp[i] = Math.max(dp[i - 2], dp[i - 3]) + nums[i];
        max = Math.max(max, dp[i]);
    }
    return max;
};