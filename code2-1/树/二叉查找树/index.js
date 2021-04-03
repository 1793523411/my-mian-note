class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value)
        if (this.root !== null) {
            this.root
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }
    preOrderTraverse() {
        this.preOrderTraverseNode(this.root)
    }
    preOrderTraverseNode(node) {
        if (node !== null) {
            this.preOrderTraverseNode(node.left)
            node.show()
            this.preOrderTraverseNode(node.right)
        }
    }

    inOrderTraverse() {
        this.inOrderTraverseNode(this.root)
    }
    inOrderTraverseNode(node) {
        if (node !== null) {
            node.show()
            this.inOrderTraverseNode(node.left)
            this.inOrderTraverseNode(node.right)
        }
    }

    postOrderTraverse() {
        this.postOrderTraverseNode(this.root)
    }
    postOrderTraverseNode(node) {
        if (node !== null) {
            this.postOrderTraverseNode(this.left)
            this.postOrderTraverseNode(this.right)
            this.show()
        }
    }

    preOrderTraverseByStack() {
        let stack = []
        stack.push(this.root)
        while (stack.length > 0) {
            let node = stack.pop();
            node.show();
            if (node.left) stack.push(node.left)
            if (node.right) stack.push(node.right)
        }
    }
    inOrderTraverseByStack() {
        let stack = [];
        node = this.root;
        while (stack.length > 0 || node) {
            if (node) {
                stack.push(node);
                node = node.left
            } else {
                node = stack.pop();
                node.show()
                node = node.right
            }
        }
    }
    postOrderTraverseByStack() {
        let stack1 = [];
        let stack2 = [];
        stack1.push(this.root)
        while (stack1.length > 0) {
            node = stack1.pop();
            stack2.push(node);
            if (node.left) stack1.push(node.left)
            if (node.right) stack1.push(node.right)
        }
        while (stack2.length > 0) {
            node = stack2.pop()
            node.show()
        }
    }

    findMinNode(root) {
        let node = root;
        while (node && node.left) {
            node = node.left
        }
        return node;
    }
    findMaxNode(root) {
        let node = root;
        while (node && node.right) {
            node = node.right;
        }
        return node
    }
    find(value) { }
    findNode(node, value) {
        if (node === null) {
            return node
        }
        while (node) {
            if (node === null) return -1
            if (value > node.value) {
                node = node.right
            } else if (value < node.value) {
                node = node.left
            } else {
                return node
            }
        }
    }
    remove(value) {
        this.removeNode(this.root, value)
    }
    removeNode(node, value) {
        while (node) {
            if (node === null) return -1;
            if (value > node.value) {
                node = node.right
            } else if (value < node.value) {
                node = node.left
            } else {
                if (node.left === null && node.right === null) {
                    node = null;
                    return node
                } else if (node.left === null) {
                    node = node.right;
                    return node
                } else if (node.right === null) {
                    node = node.left;
                    return node
                } else {
                    let tmp = this.findMinNode(node.right);
                    node.value = tmp.value;
                    this.removeNode(node.right, tmp)
                    return node
                }
            }
        }
    }
}