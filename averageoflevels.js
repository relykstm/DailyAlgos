var makeArray = function(root, level = 0, arr = []){
    
    if(!root){
        level--
        return arr;
    }
    
    
    if(arr[level] == undefined){
       arr[level] = [] 
    } 
    
    arr[level].push(root.val)

    arr = makeArray(root.left, level +1, arr)
    arr = makeArray(root.right, level +1, arr)
    
    return arr;
} 


var averageOfLevels = function(root) {
    
    var arr = makeArray(root)
    var result = []
    for(var i=0; i<arr.length; i++){
        var sum =0 
        for(var x=0; x<arr[i].length; x++){
            sum = sum + arr[i][x]
        }
        result.push(sum/arr[i].length)
    }
    
    return result;
};