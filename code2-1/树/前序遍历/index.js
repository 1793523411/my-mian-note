const pre = (root) => {
    let stack = [];
    stack.push(root)
    while (stack.length) {
        let node = stack.pop()
        node.show()
        if (node.right) stack.push(node.right)
        if (node.left) stack.push(node.left)
    }
}