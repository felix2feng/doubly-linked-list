var DoublyLinkedList = function() {
  var storage = {};

  storage.head = storage.tail = null;
  return storage;
};

var Node = function(value) {
  var node = {};

  obj.value = value;
  obj.previous = obj.next = null;

  return node;
};