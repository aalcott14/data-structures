var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  var count = 0;
  var length = 0;

  list.addToTail = function(value) {
    //if head is null link node to head
    var currentNode = this.tail;
    var newNode = Object.create(Node(value));
    length++;
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      currentNode.next = newNode;
      this.tail = newNode;      
    }

    //if not empty set tail node to new node and tail to new node

  };

  list.removeHead = function() {
    //set head to current node's next node
    if (this.head) {
      var removeNode = this.head;
      this.head = removeNode.next;
    }
    //return current node
    length--;
    return removeNode.value;
  };

  list.contains = function(target) {
    //go through linked list by going through node links
    //compare node to target and if found return true
    currentNode = this.head;
    while (count < length) {
      if (currentNode.value === target) {
        return true;
      }
      count++;
      currentNode = currentNode.next;
    }
    count = 0;
    return false;
  };

  list.insert = function(newValue, previousNode) {
    //debugger;
    currentNode = this.head;

    while (count < length) {
      if (currentNode.value === previousNode) {
        count = length;
        var newNode = Object.create(Node(newValue));
        var temp = currentNode.next;
        currentNode.next = newNode;
        newNode.next = temp;
      }
      count++;
      currentNode = currentNode.next;
    }
    count = 0; 
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
