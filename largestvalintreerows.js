var largestValues = function(root, arr=[], index=0) {
    
    if(root == null){
        return arr;
    }
    
    if(arr[0] == null){
        arr[0]=root.val;
    }
    
    if(arr[index] == null || root.val > arr[index]){
        arr[index]=root.val;
    }
    
    largestValues(root.left, arr, index = index+1)
    index=index-1
    largestValues(root.right, arr, index = index+1)
    
    return arr;
    
};