/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
let dp;
var minDistance = function (word1, word2) {

    const m = word1.length, n = word2.length;
    dp = []
    for (let i = 0; i <= m; i++) {
        dp.push(new Array(n + 1).fill(0))
    }

    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }

    for (let i = 0; i <= n; i++) {
        dp[0][i] = i;
    }


    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            let let1 = word1.charAt(i - 1), let2 = word2.charAt(j - 1)
            if (let1 == let2) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(
                    dp[i][j - 1] + 1, // 插入
                    dp[i - 1][j] + 1, // 删除
                    dp[i - 1][j - 1] + 1 //替换
                )
            }
        }
    }
    console.log(dp)
    return dp[m][n]

};

// function dpFunc(word1, i, word2, j) {

// }