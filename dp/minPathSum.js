/**
 * @param {number[][]} grid
 * @return {number}
 */

 let dp;
 var minPathSum = function (grid) {
     const m = grid.length, n = grid[0].length;
     dp = []
     for (let i = 0; i < m; i++) {
         dp.push(new Array(n).fill(-1))
     }
     dp[0][0] = grid[0][0];
 
     for (let i = 1; i < m; i++) {
         dp[i][0] = grid[i][0] + dp[i - 1][0];
     }
     for (let i = 1; i < n; i++) {
         dp[0][i] = grid[0][i] + dp[0][i - 1];
     }
 
     for (let i = 1; i < m; i++) {
         for (let j = 1; j < n; j++) {
             dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1])
         }
     }
     return  dp[m -1][n-1]
     // let res = dpFunc(grid, m - 1, n - 1)
     // console.log(dp, m, n,);
     // return res
 };
 
 function dpFunc(grid, i, j) {
     if (i < 0 || j < 0) {
         return 500;
     }
     if (dp[i][j] != -1) {
         return dp[i][j]
     }
     if (i == 0 && j == 0) {
         dp[i][j] = grid[i][j];
     } else {
         dp[i][j] = grid[i][j] + Math.min(dpFunc(grid, i - 1, j), dpFunc(grid, i, j - 1))
     }
 
     return dp[i][j]
 }