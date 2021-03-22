const post = (root) => {
    let stack1 = [];
    let stack2 = [];
    let node = null;
    stack1.pop(root)
    while (stack1.length) {
        node = stack1.pop()
        stack2.push(node);
        if (node.left) stack1.push(node.left)
        if (node.right) stack1.push(node.right)
    }
    while (stack2.length) {
        node = stack2.pop()
        node.show()
    }
}