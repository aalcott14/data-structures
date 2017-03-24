

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = {edge: []};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.storage[node]) {
    return true;
  } 
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // debugger;
  for (var i = 0; i < this.storage[fromNode].edge.length; i++) {
    if (this.storage[fromNode].edge[i] === this.storage[toNode]) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].edge.push(this.storage[toNode]);
  if (fromNode !== toNode) {
    this.storage[toNode].edge.push(this.storage[fromNode]);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.storage[fromNode].edge.length; i++) {
    if (this.storage[fromNode].edge[i] === this.storage[toNode]) {
      this.storage[fromNode].edge.splice(i, 1);
    }
  }
  for (var i = 0; i < this.storage[toNode].edge.length; i++) {
    if (this.storage[toNode].edge[i] === this.storage[fromNode]) {
      this.storage[toNode].edge.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.storage) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


