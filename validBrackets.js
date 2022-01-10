/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function (s) {
    const bracletsMap = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ]);;
    let stack = [], isValid = true;
    const startBrackets = ['(', '[', '{']
    for (let i = 0; i < s.length; i++) {
        const cur = s.charAt(i);
        console.log(stack, cur, startBrackets.includes(cur), bracletsMap.get(cur))
        if (startBrackets.includes(cur)) {
            stack.push(cur);
        } else {
            let topVal = stack.pop();
            if (topVal != bracletsMap.get(cur)) {
                isValid = false; break;
            }
        }
    }

    return (stack.length == 0) && isValid
};