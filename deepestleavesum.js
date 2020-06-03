var deepestLeavesSum = function(root, sum=0,max=0,index=0) {

    
    if(root == null){
        return sum;
    }

    
    if(root.left == null && root.right == null && index >= max){
        sum = sum + root.val;
        max = index;
    }
    
    sum = deepestLeavesSum(root.left,sum,max,index+1)
    index = index-1
    sum = deepestLeavesSum(root.right,sum,max,index+1)

    return sum;
    
};