/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (!head) return null;

    let dummy_head = new ListNode(null, head);

    let cur = dummy_head
    if(cur.next.val == cur.next.next.val){
        const val = cur.next.val;
        while (cur.next && cur.next.val == val) {
            cur.next = cur.next.next
        }
    }else{
        cur = cur.next
    }

    return dummy_head.next
};