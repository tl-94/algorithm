/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
 var platesBetweenCandles = function(s, queries) {
    const len = s.length
    let res = [];

    let lNearest = [], rNearest = [], lIndex = -1, rIndex = len;
    let pSum = [0]
    for(let i = 0, j = len - 1; i < len; i++, j--){
        if(s.charAt(i) == '|')lIndex = i;
        if(s.charAt(j) == '|')rIndex = j;
        lNearest[i] = lIndex;
        rNearest[j] = rIndex;
        //* sum
        pSum.push(s.charAt(i) == '*' ? pSum[i] + 1 : pSum[i]);
    }

    queries.forEach(([start, end]) => {
        const left = rNearest[start], right = lNearest[end];
        res.push(right <= left ? 0 : pSum[right] - pSum[left]);
    })
    return res
};