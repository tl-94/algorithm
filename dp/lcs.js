/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function(text1, text2) {
    const len1 = text1.length, len2 = text2.length;
    const dp = new Array(len1 + 1);
    for(let n = 0; n < len1 + 1; n++){
        dp[n] = new Array(len2 + 1).fill(0);
    }

    for(let i = 1; i <= len1; i++){
        for(let j = 1; j <= len2; j++){
            if(text1.charAt(i - 1) === text2.charAt(j - 1)){
                dp[i][j] = 1 + dp[i-1][j-1];
            }else{
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    console.log(dp)

    return dp[len1][len2];
};

// longestCommonSubsequence("abc", "abc"); 