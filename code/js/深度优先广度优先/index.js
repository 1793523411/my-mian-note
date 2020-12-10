//DFS递归
function deepTraversal(node) {
    let nodes = []
    if (node != null) {
        nodes.push(node)
        let childrens = node.children
        for (let i = 0; i < childrens.length; i++) {
            deepTraversal(childrens[i])
        }
        return nodes;
    }
}

//DFS非递归
function deepTraversal(node) {
    let nodes = []
    if (node != null) {
        let stack = []
        stack.push(node)
        while (stack.length != 0) {
            let item = stack.pop()
            nodes.push(item)
            let childrens = item.children;
            for (let i = childrens.length - 1; i >= 0; i--) {
                stack.push(childrens[i])
            }
        }
    }
    return nodes
}

//BFS递归
function wideTraversal(node) {
    let nodes = [], i = 0;
    if (node != null) {
        nodes.push(node)
        wideTraversal(node.nextElementSibling)
        node = nodes[i++];
        wideTraversal(node.firstElementChild)
    }
    return nodes
}

//BFS非递归
function wideTraversal() {
    let nodes = [], i = 0;
    while (node != null) {
        nodes.push(node)
        node = nodes[i++]
        let childrens = node.children;
        for (let i = 0; i < childrens.length; i++) {
            nodes.push(childrens[i])
        }
    }
    return nodes
}

//使用上面的思想实现拷贝

let _toString = Object.prototype.toString;
let map = {
    array: 'Array',
    object: 'Object',
    function: 'Function',
    string: 'String',
    null: 'Null',
    undefined: 'Undefined',
    booleaan: 'Boolean',
    number: 'Number'
}
let getType = (item) => {
    return _toString.call(item).slice(8, -1)
}
let isTypeOf = (item, type) => {
    return map[type] && map[type] === getType(item)
}