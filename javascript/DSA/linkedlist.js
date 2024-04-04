

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    insertLast(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.size++;
        }
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
            this.size++;
        }
    }

    insertAtIndex(data, index) {
        if (index < 0 || index > this.size) {
            document.write("Invalid index. Cannot insert at the specified position.<br>");
            return;
        }

        const newNode = new Node(data);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            let count = 0;
            let prev;

            while (count < index) {
                prev = current;
                current = current.next;
                count++;
            }

            newNode.next = current;
            prev.next = newNode;
        }

        this.size++;
        document.write(`${data} inserted at index ${index}, new size of linked list is ${this.size}<br>`);
    }


    delete(data) {
        let current = this.head;
        let prev;
        if (!this.head) {
            document.write("Nothing to Delete.");
            return;
        }
        if (current.data === data) {
            this.head = current.next;
            this.size--;
            document.write(`${current.data} deleted & new size of list is ${this.size} <br>`);
        } 
        else {
            while (current.data !== data) {
                prev = current;
                current = current.next;
            }
            prev.next = current.next;
            this.size--;
            document.write(`${current.data} deleted & new size of linked list is ${this.size}<br>`);
        }
    }

    reverse() {
        let current = this.head;
        let prev = null;
        let next = null;

        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
    }

    display() {
        let current = this.head;
        while (current) {
            document.write(`${current.data} =>`);
            current = current.next;
        }
        document.write("NULL<br>");
    }
}

const newList = new SinglyLinkedList();
let data = prompt("Enter data to insert at First position : ");
data = parseInt(data);
newList.insertFirst(data);

let data1 = prompt("Enter data to insert at First position : ");
data1 = parseInt(data1);
newList.insertFirst(data1);

let d = prompt("Enter data to insert at Last position: ");
d = parseInt(d);
newList.insertLast(d);

let d1 = prompt("Enter data to insert at Last position: ");
d1 = parseInt(d1);
newList.insertLast(d1);

let index = prompt("Enter index at which data is to be inserted");
index = parseInt(index);
let el = prompt("Enter data insert At Specified Index: ");
el = parseInt(el);
newList.insertAtIndex(el, index);

newList.display();

let d2 = prompt("Enter data to delete : ");
d2 = parseInt(d2);
newList.delete(d2);

newList.display();

newList.reverse();
document.write("Reversed Linked List:<br>");
newList.display();
