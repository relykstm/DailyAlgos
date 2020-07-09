var helper = function(root, arr = []){
    if(root == null){
        return arr;
    }
    if(root.left == null && root.right == null){
        arr.push(root.val);        
    }    
    arr = helper(root.left, arr);
    arr = helper(root.right, arr);
    return arr;    
}

var leafSimilar = function(root1, root2) {
    var arr1 = helper(root1);
    var arr2 = helper(root2);
    if(arr1.length != arr2.length){
        return false;
    }
    for(var i=0; i<arr1.length; i++){
        if(arr1[i] != arr2[i]){
            return false
        }
        
    }
    return true;
    
};