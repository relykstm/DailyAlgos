var sumEvenGrandparent = function(root, sum =0) {
    if (root == null){
        return sum;
    }
    
    console.log(sum)
    //if even - go get sum of all grandchildren
    if(root != null){
        if(root.val % 2 == 0){
            if(root.left != null && root.left.left != null){
                sum += root.left.left.val
            }

            if(root.left != null && root.left.right != null){
                sum += root.left.right.val
            }

            if(root.right != null && root.right.left != null){
                sum += root.right.left.val
            }

            if(root.right != null && root.right.right != null){
                sum += root.right.right.val
            }
        } 
    }
    
    
    sum += sumEvenGrandparent(root.left, sum=0)
    sum += sumEvenGrandparent(root.right, sum=0)
    
    return sum;
};