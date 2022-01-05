/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function (num1, num2) {
    const len1 = num1.length, len2 = num2.length;
    let i = 0;
    let ans = '';
    let nextbit = 0;
    let curVal;
    while (i < len1 && i < len2) {
        curVal = Number(num1.charAt(len1 - i - 1)) + Number(num2.charAt(len2 - i - 1)) + nextbit;

        ans = (curVal % 10) + ans
        i++;
        nextbit = parseInt(curVal / 10)
    }

    if (i < len1) {
        while (i < len1) {
            curVal = Number(num1.charAt(len1 - i - 1)) + nextbit;

            ans = (curVal % 10) + ans
            i++;
            nextbit = parseInt(curVal / 10)
        }
    }

    if (i < len2) {
        while (i < len2) {
        curVal = Number(num2.charAt(len2 - i - 1)) + nextbit;

            ans = (curVal % 10) + ans
            i++;
            nextbit = parseInt(curVal / 10)
        }
    }
    if(nextbit != 0)ans = nextbit + ans

    return ans
};