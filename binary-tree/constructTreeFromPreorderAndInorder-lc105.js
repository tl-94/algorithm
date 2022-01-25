/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 let valToIndexMap = null;
var buildTree = function(preorder, inorder) {
    valToIndexMap = genMap(inorder);
    // const resTreeNode = new TreeNode(preorder[0]);
    return _buildTree(preorder, 0 , preorder.length - 1, inorder, 0 , inorder.length - 1)
    // let curNode = resTreeNode;
    // for(let i = 1; i < preorder.length;i++){
    //     const newNode =  new TreeNode(preorder[i]);
    //     map.set(inorder[i], i);

    // }
};


function _buildTree(preorder,i1,j1, inorder,i2,j2){
    if(i1 > j1 || i2 > j2)return null;

    const node = new TreeNode(preorder[i1]);
    const indexInOrder = valToIndexMap.get(preorder[i1]);

    let leftChildLength = indexInOrder - i2;

    node.left = _buildTree(preorder, i1 + 1, i1 + leftChildLength, inorder, i2, indexInOrder - 1)
    node.right = _buildTree(preorder, leftChildLength + i1 + 1, j1, inorder,indexInOrder+1, j2)

    return node;
}




function genMap(inorder){
    const map = new Map();
    for(let i = 0; i < inorder.length;i++){
        map.set(inorder[i], i);
    }
    return map;
}