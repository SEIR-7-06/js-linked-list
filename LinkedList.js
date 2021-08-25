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
        // To prepend a Node to the LinkedList, you will 
        // need to replace the this.head with your new node!
        // Then point the new head's .next at the old head
        
        // Your code here!
        // ...
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
        let str = ''

        while(current != null) {
            // 3. console.log out each node's data
            // console.log(current.data)
            str += current.data + ', '
            current = current.next // traverse
            // console.log("here's the next node: ", current)
        }
        console.log(str)
    }

    /**
     * Insert a new Node w/ the given data at the n-th position
     * of the LinkedList
     * @param {*} n The specified index to insert at
     * @param {*} data Any input value
     */
    insertAt(n, data) {
        // You will need to have a "current" and a "previous" pointer
        // Research: Google the "two pointer pattern"

        // Step 1a. Check to see if your head is null (LinkedList is empty)
        // Step 1b. Check to see if you're replacing the head (n == 0)
        // Step 2. Traverse through the linked list, keeping current and previous 
        // moving, then set previous' .next to the new node
        // and the newNode's .next to current

        // Your code here!
        // ...
    }

    /**
     * Remove the n-th node in the LinkedList
     * @param {Number} n The specified index to remove at
     * @returns {Node|Number} Returns the removed node, or -1 if not found
     */
    removeAt(n) {
        // You will need to have a "current" and a "previous" pointer
        // Research: Google the "two pointer pattern"

        // Your code here!
        // ...
    }
}


const myLinkedList = new LinkedList()
myLinkedList.append('hello')
myLinkedList.append('world')
myLinkedList.append('my')
myLinkedList.append('name')
myLinkedList.append('is')
myLinkedList.append('SEIR-706')
// console.log(myLinkedList)
myLinkedList.print()