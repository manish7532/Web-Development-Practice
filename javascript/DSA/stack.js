class Stack {
    constructor() {
        this.items = [];
    }

    pushItem(data) {
        this.items.push(data);
    }

    
    isEmpty(){
        return this.items.length === 0;
    }

    popItem() {
        if (this.items.length === 0) {
            document.write(`Nothing to pop out.`);
        }
        else {
           let popItem = this.items.pop();
            document.write(`${popItem} is poped out.<br>`);
        }
    }

    peek(){
        if(this.items.length == 0){
            document.write(`Stack in empty.<br>`);
        }
        else{
            document.write(`Top of stack is ${this.items[this.items.length-1]} <br>`);
        }
    }

    display() {
        if (this.isEmpty()) {
          document.write("Stack is empty");
          return;
        }
    
        document.write("Stack (top to bottom):<br>");
        for (let i = this.items.length - 1; i >= 0; i--) {
          document.write(`${this.items[i]}<br>`);
        }
      }
}

const s = new Stack();

s.peek();
let d1 = prompt("Enter data to push in stack");
d1 = parseInt(d1);
s.pushItem(d1);

 d1 = prompt("Enter data to push in stack");
d1 = parseInt(d1);
s.pushItem(d1);

 d1 = prompt("Enter data to push in stack");
d1 = parseInt(d1);
s.pushItem(d1);

 d1 = prompt("Enter data to push in stack");
d1 = parseInt(d1);
s.pushItem(d1);

 d1 = prompt("Enter data to push in stack");
d1 = parseInt(d1);
s.pushItem(d1);

s.display();
s.popItem();
s.display();
s.peek();

