const step = (root) => {
    const queue = [root];
    while (queue.length) {
        const tmp = queue.shift();
        tmp.show();
        tmp.left && queue.push(tmp.left)
        tmp.right && queue.push(tmp.right)
    }
}