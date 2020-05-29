var preorder = function(root) {
    
    var result = [];
    result.push(root.val)

    root.children.forEach(function (each){ // root.children = [3,2,4]
        result.push(each.val)
        if(each.children != null){
            each.children.forEach(function(grandchildren){
                result.push(grandchildren.val)
                each = grandchildren; // reassign each to be 5
            }) 

        }

    })
    
    return result;
};