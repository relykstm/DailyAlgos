var balanceBST = function(root) {
    
    var makearray = function(root, arr=[]){
        
        if(!root){
            return arr;
        }
        
        arr.push(root.val)
        
        arr = makearray(root.left, arr)
        arr = makearray(root.right, arr)
        
        return arr;
    }
    
    
    var arr1 = makearray(root).sort(function(a,b){return a-b})
    console.log(arr1)
    var maketree = function(left,right){
        if(left>right) return null;
        var mid = left+Math.floor((right-left)/2)
        var node = new TreeNode(arr1[mid])
        node.left = maketree(left,mid-1)
        node.right = maketree(mid+1, right)
        return node;  
    }
    

    
    var node =  maketree(0,arr1.length-1)

    return node;
};

