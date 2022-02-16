/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function(nums) {
    var a = b = c = -Infinity;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] == a || nums[i] == b || nums[i] == c)continue;
        if(nums[i] > a){
            c = b;
            b = a;
            a = nums[i]
        }else if(nums[i] > b){
            c = b;
            b = nums[i]
        }else if(nums[i] > c){
            c = nums[i];
        }
    }
    // console.log(a,b,c);
    return c !== -Infinity ? 
                    c 
                    : a
};