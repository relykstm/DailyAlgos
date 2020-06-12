var isUnivalTree = function(root, checker=null) {
    if(root == null){
        return true
    }
    
    if(checker == null){
        checker = root.val
    }

    
    return isUnivalTree(root.right, checker) && isUnivalTree(root.left, checker) && (root.val == checker)
    
};