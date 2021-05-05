function treeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

let node1 = new treeNode(1)
let node2 = new treeNode(2)
let node22 = new treeNode(22)
let node3 = new treeNode(3)

node1.left = node2
node1.right = node3
node2.left = node22
node2.right = null
node3.left = node3.right = null
node22.left = node22.right = null;

let res = []
const d = (root) => {
    if (!root) return
    d(root.left)
    d(root.right)
    res.push(root.val)
}


const front = (root) => {
    let stack = [root]
    let res = []
    while (stack.length) {
        let node = stack.pop();
        res.push(node.val)
        node.right && stack.push(node.right)
        node.left && stack.push(node.left)
    }
    return res;
}


const middle = (root) => {
    let stack = []
    let res = []
    while (stack.length || root) {
        if (root) {
            stack.push(root)
            root = root.left
        } else {
            let node = stack.pop()
            res.push(node.val)
            node.right && stack.push(node.right)
        }
    }
    return res
}

const end = (root) => {
    let stack1 = [root]
    let stack2 = []
    let res = []
    while (stack1.length) {
        let node = stack1.pop()
        stack2.push(node)
        node.left && stack1.push(node.left)
        node.right && stack1.push(node.right)
    }
    while (stack2.length) {
        res.push(stack2.pop().val)
    }
    return res
}

const ceng = (root) => {
    let queue = [root]
    let res = []
    while (queue.length) {
        let node = queue.shift()
        res.push(node.val)
        node.left && queue.push(node.left)
        node.right && queue.push(node.right)
    }
    return res
}

const ceng2 = (root) => {
    let queue = [root]
    let res = []
    while (queue.length) {
        let len = queue.length;
        let tmp = []
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            tmp.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        res.push(tmp)
    }
    return res
}

console.log(ceng2(node1))
d(node1)
console.log(res)