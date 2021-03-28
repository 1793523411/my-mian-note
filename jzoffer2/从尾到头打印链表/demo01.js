var reversePrint = function(head) {
    let res = []
    let node = reverse(head)
    while(node){
        res.push(node.val)
        node = node.next
    }
    return res
};

function reverse(head){
    let pre = null;
    let cur = head;
    while(cur){
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next
    }
    return pre;
}