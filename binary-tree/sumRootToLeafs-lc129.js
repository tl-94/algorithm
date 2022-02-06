/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var res;
var sumNumbers = function(root) {
    res = 0;
    _sumNumbers(root, []);
    return res;
};

function _sumNumbers(node, path){
    path.push(node.val);

    //如果是叶子节点
    if(!node.left && !node.right){
        //
        res += parseInt(path.join(''));
        console.log(path)
        // return;
    }

    node.left && _sumNumbers(node.left, path);
    node.right && _sumNumbers(node.right, path);
    path.pop();
}