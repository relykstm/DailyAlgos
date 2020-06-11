var maxDepth = function(root, max = 0,  count=1,) {
    //console.log(root.children)
    if(root == null){
        return max;
    }
    if(count > max){
        max = count;
    }
    root.children.forEach(function(child){
                          
        var eachMax = maxDepth(child, max, count+1)
        if(eachMax > max){
            max = eachMax
        }
    })
    return max
};