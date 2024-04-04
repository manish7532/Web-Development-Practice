class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insertData(data) {
        var newNode = new Node(parseInt(data));
        if (this.root == null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left == null) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else {
            if (node.right == null) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    preoderTraversal(){
        const result = [];
        function traverse(node){
            if(node != null){
                result.push(node.data);
                traverse(node.left);
                traverse(node.right);
            }
        }
        traverse(this.root);
        document.write(`The Preorder traversal is as follows: ${result}<br>`);
    }

    inorderTraversal(){
        const result = [];
        function traverse(node){
            if(node != null){
                traverse(node.left);
                result.push(node.data);
                traverse(node.right);
            }
        }
        traverse(this.root);
        document.write(`The Inorder traversal is as follows: ${result}<br>`);
    }

    postoderTraversal(){
        const result = [];
        function traverse(node){
            if(node !== null){
                traverse(node.left);
                traverse(node.right);
                result.push(node.data);
            }
        }
        traverse(this.root);
        document.write(`The Postorder traversal is as follows: ${result}<br>`);
    }
}

const dFs = new BinarySearchTree();
var n = parseInt(prompt("Enter the how many elements you want to put into the tree: "));
for (let i=0;i<n;i++){
    dFs.insertData(prompt(`Enter the ${i+1} elemenet of the tree : `));
}
dFs.preoderTraversal();
dFs.inorderTraversal();
dFs.postoderTraversal();