// Start of function getHeight
this.getHeight = function(root) {
        
    // Add your code here
      let rightHeight = 0
    let leftHeight = 0

    if(root.right != null){
        rightHeight = this.getHeight(root.right) + 1
    }

    if(root.left != null){
        leftHeight = this.getHeight(root.left) + 1
    }

    return rightHeight > leftHeight ? rightHeight : leftHeight


}; // End of function getHeight
}; // End of function BinarySearchTree

process.stdin.resume();
process.stdin.setEncoding('ascii');

var _input = "";

process.stdin.on('data', function (data) {
_input += data;
});

process.stdin.on('end', function () {
var tree = new BinarySearchTree();
var root = null;

var values = _input.split('\n').map(Number);

for (var i = 1; i < values.length; i++) {
    root = tree.insert(root, values[i]);
}

console.log(tree.getHeight(root));
});