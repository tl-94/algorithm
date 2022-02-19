/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    if(nums.length == 0)return [-1, -1]
    return [halfSearch(nums,0,nums.length -1, target, true), halfSearch(nums,0,nums.length -1, target, false)]
};

function halfSearch(nums, left, right, target, dire){
    if(left > right)return -1;

    if(left == right){
        return target == nums[left] ? left : -1
    }
    const mid = left + Math[dire ? 'floor' :'ceil']((right - left) / 2);
    // console.log(left, right ,mid, dire)
    if(nums[mid] > target){
        return halfSearch(nums, left, mid - 1, target, dire)
    }else if(nums[mid] < target){
        return halfSearch(nums, mid + 1, right, target, dire)
    }else{
        return dire ? halfSearch(nums, left, mid, target, dire) : halfSearch(nums, mid, right, target, dire)
    }
}