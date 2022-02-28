/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
 let max;
 var maximumRequests = function(n, requests) {
     max = 0
     let buildings = new Array(n).fill(0);
     _maximumRequests(requests,buildings, 0, 0)
     return max;
 };
 
 function _maximumRequests(requests,buildings, count, index){
     if(buildings.join('') == 0){
         // console.log(buildings.join(''))
         max = Math.max(max, count);
     }
 
     for(let i = index; i < requests.length;i++){
         const curVal = requests[i];
         // if(!curVal)continue;
         // requests[i] = null
         buildings[curVal[0]] -= 1
         buildings[curVal[1]] += 1
         _maximumRequests(requests,buildings, count + 1, i + 1)
         // requests[i] = curVal;
         buildings[curVal[0]] += 1
         buildings[curVal[1]] -= 1
     }
 }