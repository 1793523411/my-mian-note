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

    preOrderTraverseByStack() { }
    inOrderTraverseByStack() { }
    postOrderTraverseByStack() { }

    findMinNode(root) { }
    findMaxNode(root) { }
    find(value) { }
    findNode(value) { }
    remove(value) { }
    removeNode(value) { }
}