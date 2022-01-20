/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {
    if(!head.next)return
    const indexToNode = new Map();
    let p1 = head, count = 0;
    while(p1){
        indexToNode.set(count++,  new ListNode(p1.val, null));
        p1 = p1.next
    }

    const resHead = head;
    p1 = resHead;
    let i = 1, flagAddLast = true;
    let i2 = count - 1;
    while(i <= i2){
        if(flagAddLast){
            p1.next = indexToNode.get(i2--)
            flagAddLast = false;
        }else{
            p1.next = indexToNode.get(i++)
            flagAddLast = true
        }
        p1 = p1.next;
    }
};