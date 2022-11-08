class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(value) {
        if (!this.tail) {
            return null
        } else {
            value.tail = value.head.next
            value.tail.next = null
            // console.log(value,'delete');
        }
        console.log(this,'a');
    }
}

let list = new LinkedList();
list.push('Value1');
list.push('value2');
list.push('value3');
// list.push('value4');
list.pop(list);
console.log(list);








