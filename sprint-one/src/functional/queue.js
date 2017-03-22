var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var size = 0;

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    var out = storage[0];
    var keyArray = Object.keys(storage);
    for (var i = 0; i < keyArray.length; i++) {
      storage[i] = storage[i + 1];
    }
    size--;
    return out;
  };

  someInstance.size = function() {
    if (size < 0) {
      return 0;
    }
    return size;
  };

  return someInstance;
};
