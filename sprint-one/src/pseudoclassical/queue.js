var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

Queue.prototype.dequeue = function() {
  var out = this.storage[0];
  var keys = Object.keys(this.storage);
  for (var i = 0; i < keys.length; i++) {
    this.storage[i] = this.storage[i + 1];
  }
  this.length--;
  return out;
};

Queue.prototype.size = function() {
  return this.length > 0 ? this.length : 0;
};




