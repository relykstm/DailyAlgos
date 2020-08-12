function buildArr(root, arr = []){
    if(!root){
        return arr;
    }

    arr.push(root)

    arr = buildArr(root.left, arr)
    arr = buildArr(root.right, arr)
    
    return arr;
}



var findDuplicateSubtrees = function(root) {

    var arr = buildArr(root)
    var result = []
    var dict = {}
    for(var i=0; i<arr.length;i++){
        var object = JSON.stringify(arr[i])
        if(!dict[object]){
            dict[object] = 1
        } else if(dict[object] == 1){
            result.push(arr[i])
            dict[object]++
        }
    }
    return result;
};