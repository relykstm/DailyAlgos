var levelOrder = function(root, level=0,arr=[]) {
    
    if(!root){
        level--
        return arr
    }
    if(arr[level] == undefined){
        arr[level] = []
    }
    
    arr[level].push(root.val)
    
    arr = levelOrder(root.left, level+1,arr)
    arr = levelOrder(root.right, level+1,arr)
    
    return arr;
};