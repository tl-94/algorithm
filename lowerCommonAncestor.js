/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function (root, p, q) {
    if (root == p || root == q) return root;
    let left = _find(root.left, p, q)
    let right = _find(root.right, p, q)

    if (left == null) {
        return right;
    }

    if (right == null) {
        return left;
    }

    return root;
};

function _find(node, p, q) {
    if (!node) return null
    if (node == p) return p;
    if (node == q) return q;

    let left = _find(node.left, p, q);
    let right = _find(node.right, p, q)
    if (left && right) {
        return node;
    }

    return left || right
}