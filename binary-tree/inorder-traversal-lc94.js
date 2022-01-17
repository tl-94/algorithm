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