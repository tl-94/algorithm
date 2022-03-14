/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
 var findRestaurant = function(list1, list2) {
    const len1 = list1.length, len2 = list2.length;
    let list1Map = new Map();
    for(let i = 0; i < len1;i++){
        list1Map.set(list1[i], i);
    }

    let minSum = len1 + len2;
    let res = [];
    for(let i = 0; i < len2;i++){
        const curRest = list2[i];
        if(list1Map.has(curRest)){
            const indexInList1 = list1Map.get(curRest);
            const curSum = i + indexInList1;
            if(curSum < minSum){
                res = [];
                res.push(curRest)
                minSum = curSum
            }else if(curSum == minSum){
                res.push(curRest);
            }
        }
        if(i > minSum)break;
    }
    return res;
};