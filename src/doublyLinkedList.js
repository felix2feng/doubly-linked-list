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
    if (storage.head) {
      storage.head.previous = node;
    }
    storage.head = node;
    storage.tail = storage.tail || node;
    storage[value] = node;
  };


  // Remove from Tail method
  storage.removeTail = function() {
    var oldTail = storage.tail;
    storage.tail = oldTail.previous;
    storage.tail.next = null;
    delete storage[oldTail.value];
    return oldTail.value;
  };


  // Contains method
  storage.contains = function(value) {
    for (var node in storage) {
      if (storage[node].value === value) {
        return true;
      }
    }
    return false;
  };

  return storage;
};