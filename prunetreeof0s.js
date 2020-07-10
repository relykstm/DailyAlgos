var getvals = function(root, arr=[]){
    if(!root){
        return arr;
    }
    
    arr.push(root.val)
    
    arr = getvals(root.left, arr)
    arr = getvals(root.right, arr)
    
    return arr;
}


var pruneTree = function(root) {
    
    if(!root){
        return;
    }

    if(root.left){
        var temp = getvals(root.left)
        if(!temp.includes(1)){
            root.left = null;
        }
    }
    if(root.right){
        var temp = getvals(root.right)
        console.log(temp)
        if(!temp.includes(1)){
            root.right = null;
        }
    }
    
    pruneTree(root.left)
    
    pruneTree(root.right)
    
    
    return root;
    
};