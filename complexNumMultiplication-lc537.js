/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var complexNumberMultiply = function(num1, num2) {
    const [real1, img1] = num1.split("+");
    const [real2, img2] = num2.split("+");

    const res = [];

    res.push(complexMultiply(real1, real2))
    res.push(complexMultiply(real1, img2))
    res.push(complexMultiply(img1, real2))
    res.push(complexMultiply(img1, img2))

    let resreal = 0, resImg = 0
    res.forEach(item => {
        if(item.toString().slice(-1) == 'i'){
            resImg += parseInt(item.slice(0,-1))
        }else{
            resreal += parseInt(item)
        }
    })
    return `${resreal}+${resImg}i`;
};

function complexMultiply(num1, num2){
    const isNum1HasI = num1.slice(-1) == 'i', isNum2HasI = num2.slice(-1) == 'i';
    let res;
    if(isNum1HasI && isNum2HasI){
        res = -1 * parseInt(num1.slice(0,-1)) * parseInt(num2.slice(0,-1))
    }else if(isNum1HasI){
        res = (parseInt(num1.slice(0,-1)) * parseInt(num2.slice(0))) + 'i'
    }else if(isNum2HasI){
        res = (parseInt(num1.slice(0)) * parseInt(num2.slice(0, - 1)))  + 'i'
    }else{
        res = parseInt(num1.slice(0)) * parseInt(num2.slice(0))
    }
    
    return res;
}