/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    if(!head || head.next == null)return false;

    let p1 = head, p2 = head.next.next;

    while(p1 && p2 && p1 != p2){
        p1 = p1.next;

        if(p2.next){
            p2 = p2.next.next;
        }else{
            break
        }

        
    }

    return p1 == p2;
};