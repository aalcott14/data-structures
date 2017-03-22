var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(queueMethods);
  stack.length = 0;
  stack.storage = {};
  return stack;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.length] = value;
    this.length++;
  },
  dequeue: function() {
    var out = this.storage[0];
    var keys = Object.keys(this.storage);
    for (var i = 0; i < keys.length; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    this.length--;
    return out;
  },
  size: function () {
    return this.length > 0 ? this.length : 0;
  }
};


