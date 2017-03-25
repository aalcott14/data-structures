

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
};

HashTable.prototype.resize = function() {
  if (this.count > (.75 * this._limit)) {
    this._limit = this._limit * 2;
    this._storage.each(function(bucket) {
      if (bucket) {
        for (var i = 0; i < bucket.length; i++) {
          getIndexBelowMaxForKey(bucket[i][0], this._limit);  
        }
      }
    });
  } else if (this.count < (.25 * this._limit)) {
    this._limit = this._limit / 2;
    this._storage.each(function(bucket) {
      if (bucket) {
        for (var i = 0; i < bucket.length; i++) {
          getIndexBelowMaxForKey(bucket[i][0], this._limit);
        }
      }
    });
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //lop through storage at index for k
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      return this._storage.get(index)[i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      this._storage.get(index).splice(i, 1);
      this.count--;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


