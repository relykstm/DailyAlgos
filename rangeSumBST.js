var rangeSumBST = function(root, L, R, sum = 0) {
    if(root == null){
        return sum;
    }
    
    if(root.val >= L && root.val <= R){
        sum = sum + root.val;
    }

    sum = rangeSumBST(root.left, L, R, sum);
    sum = rangeSumBST(root.right, L, R, sum); 

    
    return sum;
};