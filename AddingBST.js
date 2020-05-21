var mergeTrees = function(t1, t2, newNode = new TreeNode()) {
    console.log(newNode);
    if(t1 == null && t2 != null){
        
        newNode.val = t2.val;
        console.log(newNode);
        mergeTrees(t1, t2.left, newNode.left = new TreeNode())
        mergeTrees(t1, t2.right, newNode.right = new TreeNode())
    }
    if(t2 == null && t1 != null){
        newNode.val = t1.val;
        console.log(newNode);
        mergeTrees(t1.left, t2, newNode.left = new TreeNode())
        mergeTrees(t1.right,t2, newNode.right = new TreeNode())
    } 
    if(t2 != null && t1 != null){
        newNode.val  = t1.val + t2.val;
        console.log(newNode)
        mergeTrees(t1.left, t2.left, newNode.left = new TreeNode())
        mergeTrees(t1.right, t2.right, newNode.right = new TreeNode())
    }


    return newNode;
    
};