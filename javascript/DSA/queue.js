class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(data) {
        this.items.push(data);
    }

    
    isEmpty(){
        return this.items.length === 0;
    }

    dequeue() {
        if (this.items.length === 0) {
            document.write(`Nothing to delete.`);
        }
        else {
           let popItem = this.items.shift();
            document.write(`${popItem} is poped out.<br>`);
        }
    }

    front(){
        if(this.items.length == 0){
            document.write(`Queue in empty.<br>`);
        }
        else{
            document.write(`Front element of queue is ${this.items[0]} <br>`);
        }
    }

    rear(){
        if(this.items.length == 0){
            document.write(`Queue in empty.<br>`);
        }
        else{
            document.write(`Rear element of queue is ${this.items[this.items.length-1]} <br>`);
        }
    }

   display(){
        document.write(`${this.items.join(' ')} <br>`);
   }
}

const q = new Queue();

let d = prompt("Enter element to insert in queue.")
d = parseInt(d);
q.enqueue(d);
d = prompt("Enter element to insert in queue.")
d = parseInt(d);
q.enqueue(d);
d = prompt("Enter element to insert in queue.")
d = parseInt(d);
q.enqueue(d);
d = prompt("Enter element to insert in queue.")
d = parseInt(d);
q.enqueue(d);
d = prompt("Enter element to insert in queue.")
d = parseInt(d);
q.enqueue(d);

q.display();
q.front();
q.dequeue();
q.front();
q.rear();