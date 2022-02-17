/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
 var compareVersion = function(version1, version2) {
    let arr1 = version1.split('.'), arr2 = version2.split('.');
    if( parseInt(arr1[0]) != parseInt(arr2[0]) ){
        return parseInt(arr1[0]) > parseInt(arr2[0]) ? 1 : -1;
    }

    let len = arr1.length > arr2.length ? arr1.length : arr2.length;

    for(let i = 1; i < len; i++){
        if(!arr1[i]){
            arr1[i] = 0
            // return -1;
        }
        if(!arr2[i]){
            arr2[i] = 0;
            // return 1;
        }
        let num1 = parseInt(arr1[i]);
        let num2 = parseInt(arr2[i]);
        if(num1 > num2){
            return 1;
        }else if(num1 < num2){
            return -1
        }else continue;
    }
    return 0;
};

function compareNum(num1, num2){
    for(let i = 0; i < num1.length; i++){
        const n1 = parseInt( num1.charAt(i) );
        const n2 = parseInt( num2.charAt(i) );
        if(n1 > n2){
            return 1;
        }else if(n1 < n2){
            return -1
        }else continue;
    }
    return 0
}