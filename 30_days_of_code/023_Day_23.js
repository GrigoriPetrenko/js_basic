// Start of function levelOrder
this.levelOrder = function(root) {

var que = [root];

while( que.length ) {

    var treeNode = que.shift();
       

    process.stdout.write(treeNode.data + ' ');
       
        if(treeNode.left) {
            que.push(treeNode.left);
        }    

        if(treeNode.right) {
            que.push(treeNode.right);
        }
       
    }
}; // End of function levelOrder
