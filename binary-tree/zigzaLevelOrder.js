/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    return _zigzagLevelOrder([root])
};

function _zigzagLevelOrder(nodeQueue) {
    let ans = [];
    let reverseFlag = true;

    while (nodeQueue.length > 0) {
        let nextNodeQueue = [];
        let values = [];
        for (let i = 0; i < nodeQueue.length; i++) {
            const curNode = nodeQueue[i];
            if (!curNode) continue;
            if (reverseFlag) {

                values.push(curNode.val)
            } else {
                values.unshift(curNode.val)
            }
            curNode.left && nextNodeQueue.push(curNode.left);
            curNode.right && nextNodeQueue.push(curNode.right);
        }

        reverseFlag = !reverseFlag;
        values.length > 0 && ans.push(values);

        nodeQueue = nextNodeQueue
    }

    return ans;
}