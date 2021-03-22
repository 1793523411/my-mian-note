const pre = (root) => {
    let stack = [];
    stack.push(root)
    while (stack.length) {
        let node = stack.pop()
        node.show();
        if (root.right) stack.push(root.right)
        if (root.left) stack.push(root.left)
    }
}