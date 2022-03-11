/**
 * @param {number[]} parents
 * @return {number}
 */

 var countHighestScoreNodes = function(parents) {
    let maxVal = 0, maxCount = 0;
    let len = parents.length;
    let root = getTree(parents);

    function dfs(node, i){
        if(!node)return 0;
        if(node.val == i)return 0;

        let leftCount =  dfs(node.left)
        let rightCount =  dfs(node.right)
        let remain = helpNum(len - leftCount - rightCount - 1) * helpNum(leftCount) * helpNum(rightCount);

        if(remain > maxVal){
            maxVal = remain;
            maxCount = 1;
        }else if(remain == maxVal){
            maxCount++;
        }

        return 1 + leftCount + rightCount;
    }

    function helpNum(num){
        return num == 0 ? 1 : num 
    }

    dfs(root);
    
    return maxCount
};



function getValMap(parents){
    const map = new Map();
    parents.forEach((item,index) => {
        if(map.has(item)){
            map.get(item).push(index);
        }else{
            map.set(item, [index])
        }
    })
    return map;
}

function bTree(val){
    this.val = val;
    this.left = null;
    this.right = null;
}
function getTree(parents){
    const tree = new bTree(0);
    const nodeMap = new Map();
    nodeMap.set(0, tree);
     for(let i = 1; i < parents.length;i++){
        let curNode = new bTree(i);
        nodeMap.set(i, curNode);
    }

    for(let i = 1; i < parents.length;i++){
        const curParent = nodeMap.get(parents[i]) , curChild = nodeMap.get(i);
        addChildren(curParent, curChild);
    }
    return tree;
}
function addChildren(parent, child){
    if(parent.left == null){
        parent.left = child;
        return;
    }
    parent.right = child
}