/**
 * @param {number[]} data
 * @return {boolean}
 */
 var validUtf8 = function(data) {
    let index = 0, len = data.length;

    while(index < len){
        let n = countN(data[index]);
        n = n > 4 ? 4 : n
        if(n == 1 || n == 0){
            if(!checkOne(data[index])){
                // console.log('ddd', data[index],checkOne(data[index]))
                return false;
            }
            index += 1;
        }else{
            if(checkN(data, index, n)){
                index += n
            }else{
                return false
            }
        }
    }

    return true;
};

function checkN(data, index, n){
    let preN = Math.pow(2,n+1) - 2;

    if((data[index] >> (8 - n - 1)) != preN){
        return false;
    }

    const firstFlag = 1 << 1;

    for(let i = 1; i < n;i++){
        if(i + index >= data.length || (data[i + index] >> 6) != firstFlag){
            return false;
        }
    }
    return true;
}

function checkOne(num){
    return (num & 128) == 0 ? true : false;
}

function countN(num){
    let firstFlag = 128;
    let count = 0;
    while(num & firstFlag){
        count++;
        firstFlag = firstFlag >> 1
    }
    return count;
}