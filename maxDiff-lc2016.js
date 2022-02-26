/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumDifference = function(nums) {
    let minimum = nums[0], max = -1;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] < minimum){
            minimum = nums[i];
        }else{
            nums[i] - minimum != 0 && (max = Math.max(max, nums[i] - minimum))
        }
    }
    // console.log(max);
    return max;
};