var pathSum = function (root, sum) {
    if (!root) {
        return [];
    }

    const stack = [[root, sum, [root.val]]];
    const result = [];

    while (stack.length) {
        const [node, num, path] = stack.pop();

        if (!node.left && !node.right && node.val === num) {
            result.push(path);
        }

        if (node.right) {
            stack.push([
                node.right,
                num - node.val,
                [...path, node.right.val]
            ]);
        }
        if (node.left) {
            stack.push([node.left, num - node.val, [...path, node.left.val]]);
        }
    }

    return result;
};