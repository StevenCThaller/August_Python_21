/*
    More Singly Linked Lists!

    Today we're going to be adding two new methods to our SLL class.

    Method 1:
    Remove Front
        - This method should remove the first node in the list, and
        reassign the head of the list.
        - Returns the node that was removed. If there was no node to return, return false
        Potential Edge Cases: Empty list and only one node??
    
    Remove Back
        - This method should remove the LAST node in the list.
        This one can be a little bit tricky.
        - Returns the node that was removed. If there was no node to return, return false.
        Potential Edge Cases: Empty list and only one node??
    
*/

class SLNode {
    constructor(value) {
        this.value = value;
        this.next = null; // Why??
    }
}

class SLList {
    constructor(){
        this.head = null;
    }

    addToFront(value) {
        // Step 1: Create a new node for our new head
        var newHead = new SLNode(value);

        // Step 2: Assign the new node's .next attribute to be the current list's head node
        newHead.next = this.head;

        // Step 3: Reassign the list's head node to be the new node
        this.head = newHead;
        
        return this;
    }

    addToBack(value) {
        // EDGE CASE: If the list is empty, adding to the back is the same as adding to the front
        if(this.head == null) { // the list is empty if there IS no head
            // and we've already built out our method for adding to the front, soooo
            this.addToFront(value);
            return this;
        }

        // Step 1: Create our new node
        var newNode = new SLNode(value);

        // Step 2: Start at the head of the list
        var runner = this.head;

        // Step 3: Run to the last node
        while(runner.next != null) {
            runner = runner.next;
        }

        // Step 4: Set the last node's .next to be the new node
        runner.next = newNode;
        return this;
    }

    contains(value) {
        // EDGE CASE: What if the list is empty?
        if(this.head == null) {
            // If there's nothing in the list, it can't contain a node with any value. Duh.
            return false;
        }

        // Start at the head of the list
        var runner = this.head;

        // We need to check every single node
        while(runner != null) {
            // Check if the value of runner matches the value passed in
            if(runner.value == value) {
                // If it does, we're done
                return true;
            } else { // Otherwise, we need to move runner down the line
                runner = runner.next;
            }
        }

        // If we're still here, then we've checked every node, so we're done, and it's not there.
        return false;
    }

    printList() {
        if(this.head == null) {
            console.log("List is empty");
            return;
        }
        var string = "H: ";
        var runner = this.head;

        while(runner != null) {
            string += runner.value + " -> ";
            runner = runner.next;
        }
        console.log(string);
    }

    removeFront() {
        // If the list is empty, there's nothing to remove, so we'll just return null
        if(this.head == null) {
            return null;
        }
        // We need to keep track of the node we are planning on removing because we want to 
        // ensure that we can return its value. Once we reassign the head, if there is no variable
        // referencing the current head, we lose it forever.
        var removed = this.head;
        // Set the head to be the second node
        this.head = removed.next;
        // This one is kind of optional. Garbage collection will throw away original head once nothing is referencing it anymore
        removed.next = null;
        // And finally, return the value of the node we remove
        return removed.value;
    }

    removeBack() {
        // EDGE CASE: If the list is empty, there's nothing to remove.
        // If the list only contains 1 thing, the back is the front.
        // Both cases are handled by our removeFront() method, soooo
        if(this.head == null || this.head.next == null) {
            return this.removeFront();
        }

        // Start our runner at the first node (always this.head)
        var runner = this.head;

        // Now, we want to stop at the second to last node.
        // while(runner.next != null) {
        //      runner = runner.next;
        // }
        // will get runner to the LAST node.
        // So:
        while(runner.next.next != null) {
            runner = runner.next;
        }
        // this will get us to the SECOND TO LAST node.

        // Because we want to remove the last node, and runner
        // is at the second to last node, let's store the last node (runner.next)
        // in a variable
        var removed = runner.next;
        // Then, to remove that last node, we just need to set runner.next to null
        runner.next = null;
        // And finally, return our removed node's value!
        return removed.value;
    }
}

var myList = new SLList();
myList.printList();

myList.addToBack(1).addToBack(2).addToBack(3).addToBack(4);
myList.printList();
