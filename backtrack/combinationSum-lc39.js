/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let res;
var combinationSum = function (candidates, target) {
    res = [];

    candidates.forEach((item, index) => {
        _combinationSum(candidates, index, target, []);
    })

    return res;
};

function _combinationSum(candidates, index, target, path) {
    // console.log(index, target, path)

    if (target < 0) return;

    const curVal = candidates[index];
    if (target == curVal) {
        res.push([...path, curVal]);
        return
    }

    if (curVal < target) {
        path.push(curVal)
        for (let i = index; i < candidates.length; i++) {
            _combinationSum(candidates, i, target - curVal, path);
        }
        path.pop();
    }
}