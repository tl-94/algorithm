/**
 * @param {number[]} nums
 * @return {number}
 */
 var bestRotation = function(nums) {
    const len = nums.length
    let diffs = new Array(len).fill(0);
    for(let i = 0; i < len;i++){
        let a = (i + 1 + len) % len, b = (i - nums[i] + len) % len;
        if(a < b){
            diffs[a]++
            diffs[b+1]--
        }else{
            diffs[0]++
            diffs[b+1]--
            diffs[a]++
        }
    }  
    let pSum = [diffs[0]],max = pSum[0], index = 0;
    for(let i = 1; i < len;i++){
        pSum[i] = pSum[i-1] + diffs[i];
        if(max < pSum[i]){
            max = pSum[i];
            index = i;
        }
    }
    return index;
};