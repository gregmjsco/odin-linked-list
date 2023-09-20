console.log("Test")

class LinkedList{
    constructor() {
        this.head = null;
        this.size = 0;
        
    }

    append(value) {
        let node = new Node(value);
        let current;

        if (!this.head) {
            this.head = node;
            return this
        } else {
            current = this.head;

            while(current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }

    prepend(value) {
        if(!this.head) {
            this.head = new myNode(value);
            return this;
        }
        
        this.head = new myNode(value);
    }

    size() {
        let count = 0;
        let pointer = this.head;
        while (pointer !== null) {
            count++;
            pointer = pointer.nextNode;
        }
        return count;
    }

    head() { return this.head; }

    tail() {
        if(!this.head) return null;
        let tail = this.head;
        while (tail.nextNode !== null) {
            tail = tail.nextNode;
        }
        return tail;
    }

    at(index) {}
    pop() {}
    contains(value) {}
    find(value) {}
    toString() {}

}

class myNode {
    constructor(value = null, nextNode = null)  {
        this.value = value;
        this.nextNode = nextNode;
    }
}

const list  = new LinkedList();

list.append("Greg");
list.append("Misa")

console.log(list)
console.log(list.size());



