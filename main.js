console.log("Test")

class LinkedList{
    constructor(head = null) {
        this.head = head;
    }

    append(value) {
        if (!this.head) {
            this.head = new myNode(value);
            return this
        }
        let tail = this.tail();
        tail.nextNode = new myNode(value);
        return tail;
    }
    prepend(value) {
        if(!this.head) {
            this.head = new myNode(value);
            return this;
        }
        let head = this.head();
        head.nextNode = new myNode(value);
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



