//Objective is to find the number of connected components in a graph. Components are connected if they
//are in consecutive order in the linked list

class Node {
    constructor(val, next = null) { //if next is not given, assume it is empty
      this.val = val
      this.next = next
    }
}
  
class LinkedList {
    constructor() {
      this.head = null
    }

    addNodeToBack(data) {
        let current = this.head //initialize to beginning
    
        if (!this.head) { //if the list is empty...
            this.head = new Node(data)
        } else {
            while (current.next) {
                current = current.next //move along the list
            }
            current.next = new Node(data)
        }
    }
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

let G = [1,2,3]


//O(n) solution

let result = 0
let set = new Set(G)

let curr = head
while (curr) {
    //If the set has the value AND if the next value is null/set doesn't have the next value,
    //then this must be the end of a connected component
    
    //As a note, a single node can be a connected component, hence the '!curr.next'
    if (set.has(curr.val) && (!curr.next || !set.has(curr.next.val))) {
        result++
    }
    
    curr = curr.next
}

return result