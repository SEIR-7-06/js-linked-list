class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    /**
     * Adds a new Node to the end of the LinkedList
     * @param {*} data Any input value
     */
    append(data) {
        // Step 1. Make a new Node using the input data
        let newNode = new Node(data)
        // console.log(newNode)

        // Step 1.5) If there is no "head", then that means
        // the LinkedList must be empty. So we will want to make
        // The newNode the new "head"
        if(this.head === null) {
            this.head = newNode
            return
        }
        // Step 2. "Traverse" through the LinkedList starting 
        // at the head until your find the last Node in the list
        
        // Step 2a. Start at the "head" Node
        let current = this.head
        
        // Step 2b. Follow the "next" links until you reach
        // a Node where the "next" is null
        while(current.next != null) {
            current = current.next // "traverse"
        }

        // Step 3. Add the new Node as the "next" of the last node
        current.next = newNode
    }
    /**
     * Adds a new node to the beginning of the LinkedList
     * @param {*} data Any input value
     */
    prepend(data) {

    }

    /**
     * console.logs the contents of the LinkedList
     */
    print() {
        // Psuedocode:
        // 1. Check if there's a head at all! If not, don't do anything
        if(this.head === null) {
            console.log('Linked List is empty!')
            return;
        }
        // 2. "Traverse" through the LinkedList starting @ head
        let current = this.head
        while(current != null) {
            // 3. console.log out each node's data
            console.log(current.data)
            current = current.next // traverse
            // console.log("here's the next node: ", current)
        }
    }

    /**
     * Insert a new Node w/ the given data at the n-th position
     * of the LinkedList
     * @param {*} n The arbitrary specified index to insert
     * @param {*} data Any input value
     */
    insertAt(n, data) {
        // You will need to have a "current" and a "previous"
        // Step 1. Check to see if your head is null (LinkedList is empty)
        // Step 2. Traverse through the linked list, keeping current and previous 
        // moving, then set previous's .next to the new node
        // and the newNode's .next to current
    }

    /**
     * Removes a Node at the given index
     * @param {*} n The arbitrary specified index to remove from
     */
    deleteAt(n) {
        
    }
}


const myLinkedList = new LinkedList()
myLinkedList.append('hello')
myLinkedList.append('world')
myLinkedList.append('my')
myLinkedList.append('name')
myLinkedList.append('is')
myLinkedList.append('henry')
// console.log(myLinkedList)
myLinkedList.print()











// let myNewNode = new Node('hello world')
// console.log(myNewNode)
// console.log(myNewNode.data)
// console.log(myNewNode.next)

// let myOtherNode = new Node('foobar!')
// myNewNode.next = myOtherNode
// console.log(myNewNode)

// let myThirdNode = new Node('wow!')
// myOtherNode.next = myThirdNode
// console.log(myNewNode)