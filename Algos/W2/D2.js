/* 
    Two challenges!

    addToFront: Write a method of the SLList class that accepts a value, and adds a node with that 
    value to the front of the list. 
    
    Steps:
        1. Create a new node
        2. Assign that node's next attribute to the list's current head
        3. Assign the list's current head to the new node

    KEEP IN MIND: What dictates that a node is the first element in the list? Might need to reset that.

    addToBack: Write a method of the SLList class that accepts a value, and adds a node with that
    value to the BACK of the list.

    Steps:
        1. Create a new node
        2. Start at the head of the list
        3. Run to the last node
        4. Set the last node's next attribute to the new node
    EDGE CASE: What if the list is empty? How do we even know if the list is empty?


    BONUS IF YOU ARE DONE QUICKLY:
    contains: Write a method of the SLList class that accepts a value, and returns a boolean based
    on whether or not a node with that value exists in the list

    Steps:
        1. Start at the head of the list
        2. Check if the value of the node we're looking at equals the value passed in
        3. If it does, return true
        4. If not, go to the next node.
        5. If we checked every single node and we're still running the method, the value does not exist in the list.
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
        // Step 1: Create a new node
        var newNode = new SLNode(value);

        // Step 2: Assign its .next to the current head
        newNode.next = this.head;

        // Step 3: Reassign the list's head to the node we just created
        this.head = newNode;

        // Step 4: we done
        return this;
    }

    addToBack(value) {
        // EDGE CASE: List is empty
        if(this.head == null) {
            // If the list is empty, the head is null. If the head is null, there is no node in the list.
            // Basically, if the list is empty, adding to the back is the same as adding to the front,
            // and our addToFront method is done, so
            return this.addToFront(value);
        }
        // Step 1: Create a new node
        var newNode = new SLNode(value);

        // Step 2: Start at the head of the list
        var runner = this.head;

        // Step 3: Run to the last node
        while(runner.next != null) {
            runner = runner.next;
        }

        // Step 4: Set the last node's .next attribute to be the new node we just created earlier
        runner.next = newNode;

        // Step 5: We done.
        return this;
    }

    contains(value) {
        // Step 1: Start at the head of the list
        var runner = this.head;

        while(runner != null) { // we're checking if runner is null instead of runner.next is null because we want to make sure we make our 
            // comparison on the last node as well
            // Step 2: Check if each node contains the value we're looking for
            if(runner.value == value) {
                // Step 3: If it does, return true
                return true;
            }

            // Step 4: If not, move runner over 1
            runner = runner.next;
        }

        // Step 5: If we finished our while loop, the value does not exist
        return false;
    }
}

var newList = new SLList();

newList.addToBack(5).addToBack(1).addToFront(3);

// // BONUS CASES
// var contains5 = newList.contains(5);
// var contains5Expected = true;
// console.log(contains5 == contains5Expected);

// var contains2 = newList.contains(2);
// var contains2Expected = false;
// console.log(contains2 == contains2Expected);

// var contains3 = newList.contains(3);
// var contains3Expected = true;
// console.log(contains3 == contains3Expected);
