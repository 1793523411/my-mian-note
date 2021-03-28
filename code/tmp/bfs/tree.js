const ceng = (root) => {
    let queue = [root]
    while (queue.length) {
        let node = queue.shift();
        node.show()
        node.left && queue.push(node.left)
        node.right && queue.push(node.right)
    }
}