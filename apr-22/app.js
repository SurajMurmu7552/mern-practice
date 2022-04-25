class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null; // head stores the first node of a linked list
    this.size = 0; // size is indicating the number of nodes in a linked list
  }

  // adds an element to the end of the linked list
  add(element) {
    const node = new Node(element); //creating a new node

    let current; // store the current node

    if (this.head == null) {
      // if list is empty, then add an element to its head
      this.head = node;
    } else {
      current = this.head;

      //iterate to the end of the list
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      return console.log("Invalid index");
    } else {
      const node = new Node(element);
      let curr, previous;

      curr = this.head;

      //inserting an element to the beginning of the list
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        let i = 0;
        while (i < index) {
          i++;
          previous = curr;
          curr = curr.next;
        }

        //adding element
        node.next = curr;
        previous.next = node;
      }
    }
    this.size++;
  }

  removeElement(index) {
    let curr,
      previous,
      i = 0;
    if (index < 0 || index >= this.size) {
      return console.log("Invalid index");
    } else {
      curr = this.head;
      previous = curr;

      //deleting an element from the beginning of the list
      if (index == 0) {
        this.head = curr.next;
      } else {
        while (i < index) {
          i++;
          previous = curr;
          curr = curr.next;
        }

        // remove element
        previous.next = curr.next;
      }
    }
    this.size--;

    // returning the deleted element
    return curr.element;
  }

  indexOf(element) {
    let current = this.head;
    let count = 0;

    while (current != null) {
      if (current.element === element) {
        return count;
      }
      count++;
      current = current.next;
    }

    return console.log("no element found");
  }

  isEmpty() {
    return this.size === 0;
  }

  sizeOfLinkedList() {
    console.log(this.size);
  }

  printList() {
    let curr = this.head;
    let str = "";
    while (curr) {
      console.log(curr);
      str = str + curr.element + " ";
      curr = curr.next;
    }
    console.log(str);
  }
}

const linkedList = new LinkedList();

console.log("is list empty", linkedList.isEmpty());

linkedList.add(5);
linkedList.add(10);
linkedList.add(15);

linkedList.printList();

linkedList.sizeOfLinkedList();

linkedList.removeElement(1);

linkedList.printList();

linkedList.insertAt(20, 1);

linkedList.printList();

// linkedList.insertAt(10, 4)
