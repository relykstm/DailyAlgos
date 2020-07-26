var makeArr = function(root, level=0, arr=[]){
    
    if(!root){
        level--
        return arr
    }
    
    if(arr[level] == undefined){
        arr[level] = []
    }
    
    arr[level].push(root.val)
    
    arr = makeArr(root.left, level+1, arr)
    arr = makeArr(root.right, level+1, arr)
    
    return arr;
    
}

var levelOrderBottom = function(root) {
    var arr = makeArr(root)
    
    for(var i=0; i<arr.length/2; i++){
        var temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp
    }
    
    return arr;
    
    
};