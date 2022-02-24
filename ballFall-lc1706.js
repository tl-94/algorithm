/**
 * @param {number[][]} grid
 * @return {number[]}
 */
 var findBall = function(grid) {
    let ans = [];

    for(let i = 0; i<grid[0].length;i++){
        ans.push(canGetThrough(grid, 0, i))
    }
    return ans;
};

function canGetThrough(grid, row, col){
    if(row == grid.length)return col;

    if(col < 0 || col >= grid[0].length)return -1;

    const curPlate = grid[row][col];

    if(curPlate == 1){
        if(!grid[row][col + 1] || grid[row][col + 1] == -1){
            return -1;
        }
        return canGetThrough(grid, row + 1, col + 1);
    }else{
        if(!grid[row][col - 1] || grid[row][col - 1] == 1){
            return -1;
        }
        return canGetThrough(grid, row + 1, col - 1);
    }
}