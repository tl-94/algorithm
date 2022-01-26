/**
 * @param {string} s
 * @return {string}
 */
// var reverseWords = function(s) {
//     let stack = [];
//     for(let i = 0; i < s.length;i++){
//         const curLetter = s.charAt(i);
//         if(curLetter === ' '){
//             continue;
//         }else{
//             i = saveWord(stack, i,s) - 1;
//         }
//     }

//     let res = ''
//     while(stack.length - 1 > 0){
//         res += stack.pop() + ' ';
//     }
//     res += stack.pop()
//     return res
// };

// function saveWord(stack,index,s){
//     let str = '', i = 0;
//     while(s.charAt(index) != ' ' && index < s.length){
//         str += s.charAt(index++);
//         // console.log(index,str,s.charAt(index) != ' ')
//         // if(i++ == 6)break
//     }
//     stack.push(str);
//     return index;
// }


var reverseWords = function(s) {
    let res = '', flag = false, isFirstBlank = true, word = '';
    for(let i = 0; i < s.length;i++){
        const curLetter = s.charAt(i);

        if(curLetter === ' '){
            if(isFirstBlank){
                continue;
            }
            if(!flag){
                res = ' ' + word + res;
                word = ''
            }
            flag = true;
            continue;
        }else{
            word += curLetter;
            isFirstBlank = false;
            flag = false
        }
    }

    word && (res = word+res)

    res.charAt(0) === ' ' && (res = res.slice(1))

    // let res = ''
    // while(stack.length - 1 > 0){
    //     res += stack.pop() + ' ';
    // }
    // res += stack.pop()
    return res
};