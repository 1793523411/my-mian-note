var maxDepth = function (root) {
    if (!root) return 0
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

var maxDepth = function (root) {
    if (root === null) return 0
    let queue = [root]
    let count = 0
    while (queue.length) {
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            // console.log(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        count++;
    }
    return count;
}