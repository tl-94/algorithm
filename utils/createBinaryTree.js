import { TreeNode } from './construct.js'

export function createBinaryTree(arr) {
    if (arr.length === 0) return;
    let head = new TreeNode(arr[0]);
    _createBinaryTree(head, 1, arr);
    return head;
}

function _createBinaryTree(head, index, arr) {
    let nextLevel = [];
    let list = [head];
    while (index < arr.length) {
        list.forEach(node => {
            if (!node) {
                index += 2;
                return;
            }
            node.left = arr[index] == undefined ? null : new TreeNode(arr[index]);
            index++;
            node.right = arr[index] == undefined ? null : new TreeNode(arr[index]);
            index++
            nextLevel.push(node.left, node.right);
        })

        list = nextLevel;
        nextLevel = [];

        if (index >= arr.length) break;
    }
    return head;
}

let res = createBinaryTree([3, 1, 2, null, 5]);
console.log(res);