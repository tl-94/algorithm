/**
 * @param {string} n
 * @return {string}
 */
 var nearestPalindromic = function(n) {
    if(n.length == 1) return `${parseInt(n) - 1}`
    let res = [], len = n.length;
    //考虑999xx
    res.push(Math.pow(10, len) + 1)
    // 1000
    res.push(Math.pow(10, len - 1) - 1)

    let mid = Math.floor((len + 1) / 2);
    
    let abc =  parseInt(n.slice(0, mid));

    let intN = BigInt(n);

    // abc - 1 / abc / abc + 1
    for(let i = abc - 1; i <= abc + 1; i++){
        const getNumRes = getNum(String(i), len % 2 == 1);
        getNumRes != n && (res.push(getNumRes));
    }
    let minDiff = Math.abs(res[0] - n);
    let cur = res[0];
    let ans = res[0];
    res.forEach(item => {
        const diff = BigInt(item) - intN > 0 ? BigInt(item) - intN : -(BigInt(item) - intN)
        if(diff < minDiff){
            minDiff = diff;
            ans = item
            cur = item
        }else if(diff == minDiff && item < cur){
            ans = item
            cur = item
        }
    })
    // console.log(ans, res, abc)
    return String(ans);
};

function getNum(str, isOdd){
    // console.log(str)
    if(isOdd){
        return str + str.slice(0, - 1).split('').reverse().join('')
    }
    return str + str.split('').reverse().join('')
}