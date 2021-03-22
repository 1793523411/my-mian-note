const inorder = (root) => {
    let stack = [];
    while (stack.length || root) {
        if (root.left) {
            stack.push(root.left)
            root = root.left
        } else {
            let node = stack.pop();
            node.show()
            stack.push(stack.right);
        }

    }
}