var getAllElements = function(root1, root2) {
    
    
    var helper = function(root, arr=[]){
        
        if(!root){
            return arr;
        }
        
        arr.push(root.val)
        
        arr = helper(root.left, arr)
        arr = helper(root.right, arr)
        
        return arr;
    }
    
    var result = helper(root1).concat(helper(root2))
    
    return result.sort(function(a,b){return a-b})
    
};