class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirst(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.size++;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            this.size++;
        }
    }

    insertLast(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.size++;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            this.size++;
        }
    }

    insertAtIndex(data, index) {
        if (index < 0 || index > this.size) {
            document.write(`Invalid Index. can't insert at specified index ${index}.`);
            return;
        }

        const newNode = new Node(data);

        if (index === 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
            this.size++;
        }
        else {
            let current = this.head;
            let count = 0;
            let previous;
            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }
            current.prev = newNode;
            newNode.next = current;
            previous.next = newNode;
            newNode.prev = previous;
            this.size++;
        }
    }

    delete(data) {
        let current = this.head;
        let previous = null;
        if (!this.head) {
            document.write(`Nothing to delete, list is empty.`);
        }
        if(current.data === data){
            this.head = current.next;
            this.head.prev = null;
            this.size--;
            document.write(`${current.data} deleted & new size of list is ${this.size} <br>`);
        }
        else{
            while(current.data !== data){
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
            current.prev = previous;
            this.size--;
            document.write(`${current.data} deleted & new size of linked list is ${this.size}<br>`);
        }
    }

    display() {
        let current = this.head;
        document.write(`Null<=`);
        while (current) {
            document.write(`${current.data} <=> `);
            current = current.next;
        }
        document.write(`Null<br>`);
    }
}

const newList = new DoublyLinkedList();
let data = prompt("Enter data to insert at First position : ");
data = parseInt(data);
newList.insertFirst(data);

let d = prompt("Enter data to insert at Last position: ");
d = parseInt(d);
newList.insertLast(d);

let index = prompt("Enter index at which data is to be inserted");
index = parseInt(index);
let d1 = prompt("Enter data insert At Specified Index: ");
d1 = parseInt(d1);
newList.insertAtIndex(d1, index);

newList.display();

let d2 = prompt("Enter data to delete : ");
d2 = parseInt(d2);
newList.delete(d2);

newList.display();