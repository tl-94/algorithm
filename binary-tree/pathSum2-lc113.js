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
 * @param {number} targetSum
 * @return {number[][]}
 */
 var res;
var pathSum = function(root, targetSum) {
    res = [];
     _pathSum(root, targetSum, []);
     return res;
};

function _pathSum(node, targetSum, path){
    if(!node)return;
    if(!node.left && !node.right){
        node.val == targetSum && (res.push([...path, node.val]))
    }
    // if(node.val != targetSum){
        path.push(node.val)
        _pathSum(node.left, targetSum - node.val, path)
        _pathSum(node.right, targetSum - node.val, path)
        path.pop()
    // }
}