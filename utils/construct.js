export function ListNode(val, next){
    this.val = val;
    this.next = null;
    if(next !== undefined){
        this.next = next
    }
    
    return this;
}

export function TreeNode(val, left, right){
    if(val == undefined) return null;
    this.val = val;
    this.left = left ? left : null;
    this.right = right ? right : null;
    
    return this;
}