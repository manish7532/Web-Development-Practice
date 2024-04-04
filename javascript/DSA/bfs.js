class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insertData(data) {
        var newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            this.insertRecursively(this.root, newNode);
        }
    }

    insertRecursively(node, newNode) {      // node == current node 
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                this.insertRecursively(node.left, newNode);
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                this.insertRecursively(node.right, newNode);
            }
        }
    }

    //searching with BFS
    bfs() {
        const queue = [];
        const res = [];
        if (this.root) {
            queue.push(this.root);
        }
        while (queue.length > 0) {
            const current = queue.shift();
            res.push(current.data);

            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }
        document.write(`${res}`);
    }
}

const b = new BinaryTree();

var n = parseInt(prompt("Enter how many elements you want to insert in tree : "));
let i = 0;
while (i < n) {
    b.insertData(prompt(`Enter ${i + 1} element of the tree : `));
    i++;
}
const result = b.bfs();