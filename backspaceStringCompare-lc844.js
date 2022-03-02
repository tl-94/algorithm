/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
    let res1 = [], back1 = 0;
    let res2 = [], back2 = 0;
    let i1 = s.length - 1, i2 = t.length - 1;
    while(i1 >= 0){
        if(s.charAt(i1) == '#'){
            back1++;
        }else{
            if(back1 != 0){
                back1--
            }else{
                res1.push(s.charAt(i1))
            }
        }
        i1--
    }

    while(i2 >= 0){
        if(t.charAt(i2) == '#'){
            back2++;
        }else{
            if(back2 != 0){
                back2--
            }else{
                res2.push(t.charAt(i2))
            }
        }
        i2--
    }
    return res1.join() == res2.join()
};