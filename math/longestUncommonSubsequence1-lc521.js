/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
 var findLUSlength = function(a, b) {
    if(a.length !== b.length){
         return Math.max(a.length, b.length)
    }
    return a==b ? -1 : a.length
    // _longestS(a,0,b,0)
    // console.log(Math.max(a.length, b.length) , arr)
    // return (Math.max(a.length, b.length) - _longestS(a,0,b,0)) || -1
    
};
// function _longestS(s1, i, s2, j){
//     if(i >= s1.length || j >= s2.length)return 0;

//     if(s1.charAt(i) == s2.charAt(j)){
//         return _longestS(s1, i + 1, s2, j + 1) + 1
//     }else{
//         return Math.max(
//             _longestS(s1, i + 1, s2, j),
//             _longestS(s1, i, s2, j+1)
//         )
//     }
// }