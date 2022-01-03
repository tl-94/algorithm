function createList(arr, ){
    if(arr.length === 0)return;
    const dummy_head = new ListNode();
    let prev = dummy_head;

    arr.forEach(val => {
        prev.next = new ListNode(val);
        prev = prev.next;
    })

    return dummy_head.next;
}