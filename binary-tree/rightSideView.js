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
 var rightSideView = function(root) {

    let queue = [root];
    let res = [];
    while(queue.length !== 0){
        let nextQueue = [];
        let curLevelVal = null
        queue.forEach(node => {
            if(node){
                curLevelVal = node.val;
                node.left && (nextQueue.push(node.left))
                node.right && (nextQueue.push(node.right))
            }
        })

        queue = nextQueue

        curLevelVal !== null && (res.push(curLevelVal))
    }

    return res
};