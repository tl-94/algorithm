/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let p1 = l1, p2 = l2, carry = 0;
    let head = new ListNode();
    let res;
    prev = head;
    while(p1 || p2){
        if(!p1){
            res = p2.val + carry;
        }else if(!p2){
            res = p1.val + carry;
        }else{
            res = p1.val + p2.val + carry;
        }

        p1 && (p1 = p1.next)
        p2 && (p2 = p2.next)
        
        prev.next = new ListNode(res % 10);
        prev = prev.next;
        carry = parseInt(res / 10)
    }
    carry != 0 && (prev.next = new ListNode(carry));
    return head.next;
};