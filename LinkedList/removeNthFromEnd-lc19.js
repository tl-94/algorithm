/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let prev = new ListNode(null, head), p1 = prev;
    let dum_head = prev
    while(n--){
        p1 = p1.next;
    }

    while(p1.next){
        p1 = p1.next;
        prev = prev.next
    }
    

    prev.next = prev.next.next;

    return dum_head.next;
};