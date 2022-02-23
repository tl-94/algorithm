/**
 * @param {string} s
 * @return {string}
 */
 var reverseOnlyLetters = function(s) {
    const isAlpha = /[a-zA-Z]{1}/;
    const sArr = s.split('');
    let i = 0, j = s.length -1;
    while(i < j){
        const isLeft = isAlpha.test(sArr[i]),  isRight = isAlpha.test(sArr[j]);
        if(isLeft && isRight){
            let temp = sArr[i];
            sArr[i] = sArr[j];
            sArr[j] = temp;
            i++;
            j--
        }else if(isLeft){
            j--
        }else{
            i++
        }
    }
    return sArr.join('');
};