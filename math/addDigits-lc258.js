/**
 * @param {number} num
 * @return {number}
 */
 var addDigits = function(num) {
    num = String(num);
    while(num.length > 1){
        num = `${num.split('').reduce((a,b) => a + parseInt(b), 0)}`
    }
    return num;
};