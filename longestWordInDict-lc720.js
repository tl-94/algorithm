/**
 * @param {string[]} words
 * @return {string}
 */
 var longestWord = function(words) {
    words.sort((a,b) => a.length - b.length);
    let maxLen = 0, maxStr = '';

    let selfMap = new Map();
    for(let i =0; i <words.length;i++){
        const cur = words[i], curLen = cur.length;
        if(curLen - maxLen > 1)break;
        if(curLen == 1){
            selfMap.set(cur,curLen)
            if(maxLen == 0){
                maxLen = 1;
                maxStr = cur;
                continue;
            }

            if(maxLen == 1 && maxStr>cur){
                maxStr = cur;
            }
        }else{
            const sliceLast = cur.slice(0,-1);
            if(selfMap.has(sliceLast)){
                if(maxLen < curLen){
                    maxLen = curLen;
                    maxStr = cur
                }else if(maxLen == curLen && maxStr > cur){
                    maxStr = cur
                }
                selfMap.set(cur, i)
            }
        }
    }
    return maxStr;
};