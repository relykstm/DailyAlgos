var sumRootToLeaf = function(root, sum=0, arr=[]) {
    
    if(root == null){
        return sum;
    }

    
    if(root.left == null && root.right ==null){
        arr.push(root.val)
        var num = arr.join("")
        num = parseInt(num, 2)
        sum = sum + num
        arr.pop()
        return sum;
    }
    
    arr.push(root.val)
    
    sum = sumRootToLeaf(root.left, sum, arr)
    sum = sumRootToLeaf(root.right, sum, arr)
    
    arr.pop()
    return sum;
    
};
