describe('doublyLinkedList', function() {
  var doubleList;

  beforeEach(function() {
    doubleList = DoublyLinkedList();
  });

  it('should have a head and a tail', function() {
    expect(doubleList).to.have.property('head');
    expect(doubleList).to.have.property('tail');
  });

  it('should have methods named "insert", "removeHead", and "contains"', function() {
    expect(doubleList.insert).to.be.a('function');
    expect(doubleList.removeHead).to.be.a('function');
    expect(doubleList.contains).to.be.a('function');
  });

  it('should re-point surrounding nodes when inserting a new one', function() {
    doubleList.insert(0);
    doubleList.insert(1);
    doubleList.insert(2);
    expect(doubleList[1].next.value.to.equal(2));
    expect(doubleList[1].previous.value.to.equal(0));
  });
});