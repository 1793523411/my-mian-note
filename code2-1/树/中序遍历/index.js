const ino = (root) => {
    let stack = []
    stack.push(stack.length || node)
    while (stack.length) {
        if (node.left) {
            stack.push(node.left)
            node = node.left
        } else {
            let node = stack.pop()
            node.show();
            node = node.right
        }
    }
}