/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    let res = [];
    _permute(nums,res, [])
    return res
};

function _permute(nums, res, path){
    if(path.length == nums.length){
        res.push([...path]);
        return;
    }

    nums.forEach((num,index) => {
        if(num === null)return;
        path.push(num);
        nums[index] = null
        _permute(nums, res, path);
        path.pop(num);
        nums[index] = num
    })
}