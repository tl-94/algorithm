/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    if(!head)return null
    let p1 = head, p2 = head;
    
    while(p2){
        // console.log(p1.val, p2.val, p1 == p2);
        p1 = p1.next;
        p2 = p2.next?.next
        if(!p2)return null
        if(p1 == p2){
            let p3 = head;
            while(p3 !== p1){
                p3 = p3.next;
                p1 = p1.next;
            }
            return p3
        }
    }

    // p1 == p2 && (res = p1)
    return null;
};