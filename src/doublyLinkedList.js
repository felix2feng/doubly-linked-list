var DoublyLinkedList = function() {
  var storage = {};

  storage.head = storage.tail = null;

  // Add to Head method -> inputs value
  storage.addToHead = function(value) {
    // Create a new object called node, with properties:
    var node = {
      value: value,
      next: storage.head,
      previous: null
    };
    // If head exists
    if (storage.head) {
      // set oldHead previous to node
      storage.head.previous = node;
      // set head to node, point node next to oldHead
      storage.head = node;
    }
    // If no head or tail, then set node to head/tail
    storage.head = storage.head || node;
    storage.tail = storage.tail || node;

  };


  // Remove from Tail method
    // store in oldTail variable
    // Two-way connection + storage.tail points to end
      // oldTail prev is newTail
      // change newTail's next value to null;
      // point storage.tail to newTail
      // delete oldTail from storage
    // return oldTail value

  // Contains method
    // Takes a value, checks if any node has the value
    // Loop through storage 
      // Check if inputted value === node value
        // Return true if so
    // return false

  return storage;
};