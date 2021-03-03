/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
    let res = [];
    while (head) {
        res.push(head.val)
        head = head.next;
    }
    return res.reverse()
};
var reversePrint = function (head) {
    let res = [];
    while (head) {
        res.unshift(head.val);
        head = head.next;
    }
    return res;
};

var reversePrint = function (head) {
    let res = [];
    reverseLink(head);
    while (head) {
        res.push(head.val)
        head = head.next;
    }
    return res
}

var reverseLink = function (head) {
    if (head === null || head.next === null) return head;
    let p = head.next;
    head.next = null;
    let tmp = null;
    while (p !== null) {
        tmp = p.next;
        p.next = head;
        head = p;
        p = tmp;
    }
    return head;
}

var reverseLink = function (head) {
    if (head === null || head.next === null) return head;
    const p = reverseLink(head.next);
    head.next.next = head;
    head.next = null;
    return p;
}