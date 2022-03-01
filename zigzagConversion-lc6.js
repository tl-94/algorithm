/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    if(numRows == 1)return s;
    let arrs = [];
    for(let i = 0 ; i < numRows;i++){
        arrs.push(new Array());
    }
    let curDire = 1;
    let row = 0; 
    for(let i = 0; i < s.length;i++){
        const letter = s.charAt(i);
        arrs[row].push(letter)
        row += curDire

        if(row + 1 == numRows){
            curDire = -1
        }else if(row == 0){
            curDire = 1
        }

    }
    
    return arrs.map(item => item.join('')).join('');
};