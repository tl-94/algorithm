/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    let p1 = head;
    let i = left;
    let prev = null;
    while(--i){
        prev = p1
        p1 = p1.next;
    }

    let tail = p1, next = p1.next, dbNext;
    while(right - left > 0){

        dbNext = next.next;

        next.next = p1;
        p1 = next;

        next = dbNext;
        left++
    }

    tail.next = next

    prev ? (prev.next = p1) : (head = p1);

    return head
};