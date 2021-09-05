// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

// 示例 1：

// 输入：head = [1,3,2]
// 输出：[2,3,1]

function Node(val) {
  this.val = val;
  this.next = null;
}

function creatLink(len) {
  let head = new Node(Math.floor(Math.random() * 10));
  let tmp = head;
  for (let i = 0; i < len; i++) {
    let valNode = new Node(Math.floor(Math.random() * 10));
    tmp.next = valNode;
    tmp = tmp.next;
  }
  return head;
}
function printLink(head) {
  let tmp = head;
  let arr = [];
  while (tmp) {
    arr.push(tmp.val);
    tmp = tmp.next;
  }
  return arr;
}

//非原地反转
const work = (linkHead) => {
  let newHead = new Node(null);
  let tmp = newHead;
  const nodeArr = printLink(linkHead);
  while (nodeArr.length) {
    const node = new Node(nodeArr.pop());
    tmp.next = node;
    tmp = tmp.next;
  }
  return newHead.next;
};

//原地反转
const work2 = (linkHead) => {
  let pre = null;
  let cur = linkHead;
  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  console.log(pre);
  return pre;
};

const work3 = (linkHead) => {
  if (linkHead == null || linkHead.next == null) {
    return linkHead;
  }
  const newHead = work3(linkHead.next);
  linkHead.next.next = linkHead;
  linkHead.next = null;
  return newHead;
};

const work4 = (linkHead) => {
  if (linkHead === null) return null;
  let stack = [];
  while (linkHead) {
    stack.push(linkHead);
    linkHead = linkHead.next;
  }
  let head = stack[stack.length - 1];
  console.log(stack);
  while (stack.length > 1) {
    let node = stack.pop();
    node.next = stack[stack.length - 1];
  }
  stack.pop().next = null;
  return head;
};

const linkHead = creatLink(10);

console.log(printLink(linkHead));

const reverseLink = work(linkHead);

console.log(printLink(reverseLink));

console.log("--------------");

const linkHead2 = creatLink(10);

console.log(printLink(linkHead2));

const reverseLink2 = work2(linkHead2);

console.log(printLink(reverseLink2));

console.log("--------------");

const linkHead3 = creatLink(10);

console.log(printLink(linkHead3));

const reverseLink3 = work3(linkHead3);

console.log(printLink(reverseLink3));

console.log("--------------");

const linkHead4 = creatLink(10);

console.log(printLink(linkHead4));

const reverseLink4 = work4(linkHead4);

console.log(printLink(reverseLink4));
