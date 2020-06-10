var bstFromPreorder = function(preorder) {
    
    var addNode = function(root, val){
        
        if(root.val < val){
            
            if(!root.right){
                root.right = new TreeNode(val)
            } else{
                addNode(root.right, val)
            }
            
        }

        if(root.val > val){
            
            if(!root.left){
                root.left = new TreeNode(val)
            } else{
                addNode(root.left, val)
            }
            
        }
    }
    
    var root  = new TreeNode(preorder[0]);
    
    for(var i=1;i<preorder.length; i++){
        addNode(root,preorder[i])
    }
        
    return root;
    
};