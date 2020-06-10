var deepestLeavesSum = function(root) {
    
    var findMax = function(root, index=0, max=0){
        
        if(!root){
            index = index-1;
            return max;
        }
        
        if(index>max){
            max=index;
        }
        max = findMax(root.left, index +1, max)
        
        max = findMax(root.right, index+1, max)
        return max;
    }
    
    var findSum = function(root,max, sum=0,index=0){
        
        
        if(root == null){
            index--;
            return sum;
        }
        console.log("max is :", max, " and index is: ", index," and val is: ", root.val)
        if(index == max){
            sum = sum + root.val
            index--;
            return sum;
        }

        sum = findSum(root.left,max, sum,index+1)
        
        sum = findSum(root.right,max, sum,index+1)
        

        return sum;
    }
    var max =  findMax(root)
    return findSum(root, max)
};