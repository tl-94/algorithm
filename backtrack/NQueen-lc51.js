
/**
 * @param {number} n
 * @return {string[][]}
 */
 var res;
 var solveNQueens = function(n) {
     res = [];
     _solveNQueens(n, []);
     // console.log(res);
     return fromResToMatrix(res, n);
 };
 
 function _solveNQueens(n, path){
     if(path.length >= n){
         res.push([...path]);
         return;
     }
 
     for(let i = 0; i < n; i++){
         let flag = true;
         for(let j = 0; j < path.length; j++){
             let diff1 = path[j] + j, diff2 = path.length + i;
             if(i == path[j] || (path[j] - j == i - path.length) || diff1 == diff2){
                 flag = false;
                 break;
             }
         }
         if(flag){
             path.push(i);
             _solveNQueens(n, path);
             path.pop();
         }
     }
 }
 
 function fromResToMatrix(res, n){
     let final = [];
     res.forEach(oneRes => {
         let finalOneRes = []
         oneRes.forEach(num =>{
             let oneLine = new Array(n).fill('.');
             oneLine.splice(num,1,'Q')
             finalOneRes.push( oneLine.join('') );
         })
         final.push(finalOneRes);
     })
     return final
     // path.push(['.','.','.','.'].splice(i,1,'Q').join(''))
 }