describe('doublyLinkedList', function() {
  var doubleList;

  beforeEach(function() {
    doubleList = DoublyLinkedList();
  });

  it('should have a head and a tail', function() {
    expect(doubleList).to.have.property('head');
    expect(doubleList).to.have.property('tail');
  });

  it('should have methods named "addToHead", "removeTail", and "contains"', function() {
    expect(doubleList.addToHead).to.be.a('function');
    expect(doubleList.removeTail).to.be.a('function');
    expect(doubleList.contains).to.be.a('function');
  });

  it('should re-point surrounding nodes to new one when removing', function() {
    doubleList.addToHead(0);
    doubleList.addToHead(1);
    doubleList.addToHead(2);
    expect(doubleList[1].next.value).to.equal(2);
    expect(doubleList[1].previous.value).to.equal(0);
  });

  it('should return value of the former tail when removeTail is called', function() {
    doubleList.addToHead('Michael-Daly');
    doubleList.addToHead('Felix Feng');
    expect(doubleList.removeTail()).to.equal('Felix Feng');
  });

  it('should contain a value that was added', function() {
    doubleList.addToHead('Hack Reactor Rocks!');
    doubleList.addToHead(8);
    doubleList.addToHead('But I don\'t like waking up at 8:00A.M.');
    expect(doubleList.contains('Hack Reactor Rocks!')).to.equal(true);
    expect(doubleList.contains(8)).to.equal(true);
    expect(doubleList.contains(7)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doubleList.addToHead(5);
    doubleList.addToHead(4);
    doubleList.addToHead(3);
    doubleList.removeTail();
    expect(doubleList.contains(5)).to.equal(false);
  });

});




// Has the following properties
// nodes need next and previous properties, default to null
// 
// .addToHead() <- takes a value and adds to front
// .removeTail <- Remove last node and return value
// each node will have new .previous property 