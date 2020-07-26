var countNodes = function(root, count=1) {
    
    if(!root){
        count--
        return count
    }
    
    
    count = countNodes(root.left, count+1)
    count = countNodes(root.right, count+1)
    return count
    
};