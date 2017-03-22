var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {
    storage: {},
    length: 0
  };
  

  _.extend(stack, stackMethods);  
  return stack;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.length] = value;
    this.length++;
  },

  pop: function() {
    var out = this.storage[this.length - 1];
    this.storage = _.omit(this.storage, (this.length - 1));
    this.length--;
    return out;
  },

  size: function() {
    return this.length > 0 ? this.length : 0;
  }
};


