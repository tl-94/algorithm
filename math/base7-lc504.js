/**
 * @param {number} num
 * @return {string}
 */
 var convertToBase7 = function(num) {
    if(num == 0)return '0';
    let negative = false;
    if(num<0){
        negative = true;
        num = -num;
    }
    let res = '';
    while(num){
        res = num % 7 + res
        num = (num - (num % 7)) / 7
    }
    negative && (res = '-'+res);
    return res
};