console.log("Test")

class LinkedList{
    constructor(Node) {

    }
    append(value) {}
    prepend(value) {}
    size() {}
    head() {}
    tail() {}
    at(index) {}
    pop() {}
    contains(value) {}
    find(value) {}
    toString() {}

}

class myNode {
    constructor(value, nextNode) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

let misa = new myNode("Misa", null);

console.log(misa.nextNode)