class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

// 1->2->3 1<-2 2->3 2<-3 // 1=head 2=next 3tail

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }
        this.length ++
    }
};

let insert = new DoublyLinkedList()
insert.insert(5)
insert.insert(8)
insert.insert(6)
insert.insert(60)
insert.insert(18)
console.log(insert);
// console.log(JSON.stringify(insert, null, 2));

