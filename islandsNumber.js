/**
 * @param {character[][]} grid
 * @return {number}
 */
 let m,n;
 var numIslands = function(grid) {
     let count = 0;
     m = grid.length, n = grid[0].length;
 
     for(let i = 0; i < m; i++){
         for(let j = 0; j < n; j++){
             let curVal = grid[i][j];
             if(curVal == '1'){
                 count++;
                 removeLand(grid, i,j);
             }
         }
     }
     return count
 };
 
 function removeLand(grid, i,j){
     
     if((i >= 0 && i < m) && (j >= 0 && j < n)){
         if(grid[i][j] == '0')return;
         grid[i][j] = '0';
         //删除 上下左右
         removeLand(grid, i - 1,j);
         removeLand(grid, i + 1,j)
         removeLand(grid, i,j - 1)
         removeLand(grid, i,j + 1)
     }
 }