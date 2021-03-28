//面试题34. 二叉树中和为某一值的路径
var pathSum = function (root, target) {
    let res = [], tmp = [];
    function dfs(root, sum) {
        if (root === null) return;
        sum -= root.val
        tmp.push(root.val)
        if (root.left === null && root.right === null && sum === 0) {
            res.push([...tmp])
        }
        dfs(root.left, sum)
        dfs(root.right, sum)
        tmp.pop()

    }
    dfs(root, target)
    return res
};

var pathSum = function (root, sum) {
    if (!root) {
        return [];
    }

    const statck = [[root, sum, [root.val]]];
    const result = [];

    while (statck.length) {
        const [node, num, path] = statck.pop();

        if (!node.left && !node.right && node.val === num) {
            result.push(path);
        }

        if (node.right) {
            statck.push([
                node.right,
                num - node.val,
                [...path, node.right.val]
            ]);
        }
        if (node.left) {
            statck.push([node.left, num - node.val, [...path, node.left.val]]);
        }
    }

    return result;
};