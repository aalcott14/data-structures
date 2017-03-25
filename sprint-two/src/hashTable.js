

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.count = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  
  if (this._storage.get(index)) {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        this._storage.get(index).splice(i, 1);
        this.count--;
      }
    }
  }

  bucket.push([k, v]);
  if (!this._storage.get(index)) {
    this._storage.set(index, bucket);
  }
  
  this.count++;
  if (this.count > this._limit * .75) {
    this.resize(this._limit * 2);
  }
  
};


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //lop through storage at index for k
  if (!this._storage.get(index)) {
    return undefined;
  }

  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      return this._storage.get(index)[i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  if (!this._storage.get(index)) {
    return undefined;
  }

  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      this._storage.get(index).splice(i, 1);
      this.count--;
    }
  }
  if (this.count < this._limit * .25) {
    this.resize(this._limit / 2);
  }
};

HashTable.prototype.resize = function(newLimit) {
  var oldStorage = this._storage;
  this._storage = LimitedArray(newLimit);
  this.count = 0;
  this._limit = newLimit;

  oldStorage.each(function(bucket) {
    if (!bucket) {
      return;
    }
    for (var i = 0; i < bucket.length; i++) {
      this.insert(bucket[i][0], bucket[i][1]);
    }
  }.bind(this));
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


