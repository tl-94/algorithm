/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root) {
    let res = [];
    _preorder(root, res);
    return res;
};

function _preorder(node, res){
    if(!node) return;
    res.push(node.val);
    if(node.children){
        node.children.forEach(node => {
            _preorder(node, res)
        })
    }
}