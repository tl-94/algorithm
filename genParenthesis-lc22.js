/**
 * @param {number} n
 * @return {string[]}
 */
 var res;
 var generateParenthesis = function(n) {
     res = [];
     _generateParenthesis('(', n - 1,n)
     return res;
 };
 
 function _generateParenthesis(str, left, right){
     if(left == right && left == 0){
         res.push(str);
         return
     }
 
     if(left == right){
         _generateParenthesis(str + '(', left - 1, right);
     }
     else if(left < right){
         if(left > 0){
             _generateParenthesis(str + '(', left - 1, right);
         }
         _generateParenthesis(str + ')', left, right - 1)
     }
 }