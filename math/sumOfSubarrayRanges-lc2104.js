var subArrayRanges = function(nums) {
    const LEN = nums.length
    let maxLeft = new Array(LEN);
    let maxRight = new Array(LEN);

    let minLeft = new Array(LEN);
    let minRight = new Array(LEN);

    let maxStack = [], minStack = [];

    for(let i = 0; i < LEN; i++){
        while(maxStack.length !== 0 && nums[maxStack[maxStack.length - 1]]  <= nums[i])maxStack.pop();
        maxLeft[i] = maxStack.length == 0 ? -1 : maxStack[maxStack.length - 1];
        maxStack.push(i)

        while(minStack.length !== 0 && nums[minStack[minStack.length - 1]]  > nums[i])minStack.pop();
        minLeft[i] = minStack.length == 0 ? -1 : minStack[minStack.length - 1];
        minStack.push(i)
    }
    maxStack = [], minStack = [];
    for(let i = LEN - 1; i >= 0; i--){
        while(maxStack.length !== 0 && nums[maxStack[maxStack.length - 1]]  < nums[i])maxStack.pop();
        maxRight[i] = maxStack.length == 0 ? LEN : maxStack[maxStack.length - 1];
        maxStack.push(i)

        while(minStack.length !== 0 && nums[minStack[minStack.length - 1]]  >= nums[i])minStack.pop();
        minRight[i] = minStack.length == 0 ? LEN : minStack[minStack.length - 1];
        minStack.push(i)
    }
    let sumAdd = 0, sumSub = 0;
    for(let i = 0; i < LEN; i++){
        sumAdd += nums[i] * (i - maxLeft[i]) * (maxRight[i] - i);
        sumSub += nums[i] * (i - minLeft[i]) * (minRight[i] - i);
    }
    return sumAdd - sumSub
};