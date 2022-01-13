/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
    const n = nums.length;
    let dp = new Array(n).fill(1);
    // let res = 1;

    // for(let i = 1; i < n;i++){
    //     for(let j = 0;j<i;j++){
    //         if(nums[j] < nums[i]){
    //             dp[i] = Math.max(dp[i], dp[j] + 1);
    //             res < dp[i] && (res = dp[i])
    //         }
    //     }
    // }

    let res = [nums[0]]
    for(let i = 1; i < n;i++){
        const curVal = nums[i];
        if(curVal > res[res.length - 1]){
            res.push(curVal);
        }else if(curVal == res[res.length - 1]){
            continue;
        }
        else{
            res.splice(findIndex(res, curVal),1, curVal)
        }
    }

    return res.length

    return res
};