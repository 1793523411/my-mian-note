const step = (root) => {
    let queue = [];
    queue.push(root)
    while (queue.length) {
        let tmp = queue.pop();
        tmp.show()
        if (tmp.left) queue.push(tmp.left);
        if (tmp.right) queue.push(tmp.right);
    }
}