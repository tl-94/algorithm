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
 var sortList = function(head) {
    return sort(head);
};

function sort(head){
    if(!head || head.next == null)return head;

    //find mid node
    let p1 = head, p2 = head;
    while(p2?.next?.next){
        p1 = p1.next;
        p2 = p2?.next?.next;
    }
    let nextHead = p1.next;
    p1.next = null;

    head = sort(head)
    nextHead = sort(nextHead);
    
    return merge(head, nextHead);
}

function merge(head, nextHead){
    let dummy_head = new ListNode(), prev = dummy_head;
    while(head && nextHead){
        if(head.val > nextHead.val){
            prev.next = nextHead;
            nextHead = nextHead.next
        }else{
            prev.next = head
            head = head.next
        }
        prev = prev.next;
    }

    head && (prev.next = head)
    nextHead && (prev.next = nextHead)

    return dummy_head.next;
}