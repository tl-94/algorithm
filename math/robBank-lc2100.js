/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
 var goodDaysToRobBank = function(security, time) {
    const LEN = security.length;
    if(time == 0)return new Array(LEN).fill(0).map((_, index) => index);
    let maxLeft = [], maxRight = [];
    let maxStack = [];

    for(let i = 0; i < LEN; i++){
        while(maxStack.length != 0 && security[maxStack[maxStack.length - 1]] >= security[i] && security[maxStack[maxStack.length - 2]] >= security[maxStack[maxStack.length - 1]])maxStack.pop();
        maxLeft[i] = maxStack.length == 0 ? -1 : security[maxStack[maxStack.length - 1]] >= security[i] ? maxStack[maxStack.length - 1] : i;
        maxStack.push(i);
    }
    maxStack = [];
    for(let i = LEN - 1; i >= 0; i--){
        while(maxStack.length != 0 && security[maxStack[maxStack.length - 1]] >= security[i] && security[maxStack[maxStack.length - 2]] >= security[maxStack[maxStack.length - 1]])maxStack.pop();
        // console.log(maxStack)
        maxRight[i] = maxStack.length == 0 ? LEN : security[maxStack[maxStack.length - 1]] >= security[i] ? maxStack[maxStack.length - 1] : i;
        // maxRight[i] = maxStack.length != 0 ? maxStack[maxStack.length - 1] : LEN;
        maxStack.push(i);
    }
    let res = [];
    for(let i = 0 + time; i < LEN - time; i++){
        let nextMaxLeft = maxLeft[i], nextMaxRight = maxRight[i];
        if(nextMaxLeft <= i-time && nextMaxRight >= i + time){
            res.push(i);
        }
    }
    // console.log(res, maxLeft,maxRight)
    return res
};