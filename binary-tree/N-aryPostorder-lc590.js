/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var postorder = function(root) {
    let res = [];
    _postorder(root, res);
    return res;
};

function _postorder(node, res){
    if(!node)return;
    if(!node.children || node.children.length == 0){
        
    res.push(node.val);
    return;
    };

    node.children.forEach(nodeItem => {
        _postorder(nodeItem,res);
    });
    res.push(node.val);
}