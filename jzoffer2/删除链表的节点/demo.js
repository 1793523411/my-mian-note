var deleteNode = function(head, val) {
    if(head.val === val) return head.next
    let pre = null;
    let cur = head;
    while(cur.val !== val){
        pre = cur;
        cur = cur.next
    }
    pre.next = cur.next;
    return head
};