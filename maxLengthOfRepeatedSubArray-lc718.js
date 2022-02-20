/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findLength = function(nums1, nums2) {
    
    let arr1 = nums1, arr2 = nums2;
    if(nums2.length > nums1.length){
        arr1 = nums2;
        arr2 = nums1;
    }
    const LEN1 = arr1.length, LEN2 = arr2.length;

    let count = 0
    for(let len = 1; len <= LEN2; len++){
        count = Math.max(count, maxLen(nums1, 0, nums2, LEN2 - len, len))
    }

    for(let index = 0; index < LEN1 - LEN2; index++){
        count = Math.max(count, maxLen(nums1, index, nums2, 0, LEN2))
    }

    for(let len = LEN2 - 1; len >= 1; len--){
        count = Math.max(count, maxLen(nums1, LEN1 - len, nums2, 0, len))
    }

    return count

};

function maxLen(nums1, i, nums2, j, len){
    let count = 0, maxCount = 0;
    for(let index = 0; index < len; index++ ){
        if(nums1[i + index] == nums2[j + index]){
            count++;
            maxCount = Math.max(count, maxCount);
        }else{
            count = 0;
        }
    }

    return maxCount
}