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
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    let res = [];
    _inorderTraversal(root, res);
    return res
};

function _inorderTraversal(node, res){
    if(!node)return;
    _inorderTraversal(node.left, res);
    res.push(node.val);
    _inorderTraversal(node.right, res);
}