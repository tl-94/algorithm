/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let len = s.length;
    let dp = [];
    for (let i = 0; i < len; i++) {
        dp.push(new Array(len).fill(false))
    }
    let resLen = 0,
        resStart = 0;
    // debugger;
    for (let j = 0; j < len; j++) {
        for (let i = 0; i <= j; i++) {

            dp[i][j]  = s.charAt(i) == s.charAt(j) && (i == j || i + 1 == j || dp[i + 1][j - 1])
            
            if (dp[i][j] && (j - i + 1) > resLen) {
                resStart = i;
                resLen = j - i + 1
            }
        }
    }
    console.log(dp,resStart,resLen)
};


longestPalindrome("cbbd");