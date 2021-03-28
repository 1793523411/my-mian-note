var isBalanced = function (root) {
    if (!root) return true;
    let left = dfs(root.left);
    let right = dfs(root.right)
    if (Math.abs(left - right) > 1) return false;
    return isBalanced(root.left) && isBalanced(root.right)
};

const dfs = function (root) {
    if (!root) return 0;
    return Math.max(dfs(root.left), dfs(root.right)) + 1
}

var isBalanced = function (root) {
    if (root == null) return true
    let queue = [root]

    let count = 0
    while (queue.length) {
        let dleft = 0;
        let dright = 0
        for (let i = 0; i < queue.length; i++) {
            let node = queue.shift()
            if (node.left !== null) {
                dleft = deep(node.left)
                queue.push(node.left)
            } else {
                dleft = 0
            }
            // console.log(dleft)
            if (node.right != null) {
                dright = deep(node.right)

                queue.push(node.right)
            } else {
                dright = 0
            }
            console.log(dright + '-' + dleft)
            if (Math.abs(dleft - dright) > 1) return false

        }
        count++;
    }
    return true
};

let deep = (root) => {
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