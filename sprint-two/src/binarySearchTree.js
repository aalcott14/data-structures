var BinarySearchTree = function(value) {
  
  var tree = Object.create(binaryTreeMethods);
  tree.value = value;

  tree.left;
  tree.right;

 

  return tree;
};
var binaryTreeMethods = {

  insert: function (value) {
    //determine where in the tree to insert value
      //if no root, root equals value and value equals root
      //ifvalue is less than root place in left property
      //if greter, right property
    
    var findLoc = function(tree) {
      if (value < tree.value) {
        if (!tree.left) {
          tree.left = BinarySearchTree(value);
        } else {
          findLoc(tree.left);
        }
      } else if (value > tree.value) {
        if (!tree.right) {
          tree.right = BinarySearchTree(value);
        } else {
          findLoc(tree.right);
        }
      }
    };
    findLoc(this);
  },

  contains: function (value) {
    //if a tree contains a value of value reutrn true
    //run on children
    
    var isThere = false;
    var searchTrees = function(tree) {
      if (value < tree.value) {
        if (!tree.left) {
          return;
        }
        searchTrees(tree.left); 
      } else if (value > tree.value) {
        if (!tree.right) {
          return;
        }
        searchTrees(tree.right);
      } else if (value === tree.value) {
        isThere = true;
      }
    };
    searchTrees(this);
    return isThere;
  },

  depthFirstLog: function(cb) {
    //loop through everyone object and child
    //perform callback on each value
    var log = function(tree) {
      cb(tree.value);
      if (tree.left) {
        log(tree.left);
      }
      if (tree.right) {
        log(tree.right);
      }   
    };
    log(this);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
