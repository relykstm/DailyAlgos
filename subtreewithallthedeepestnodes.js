var subtreeWithAllDeepest = function(root) {
    
    var findDepth = function(root, depth=1, max = 1){
        
        if(!root){
            return max;
        } 

        if(depth > max){
            max = depth
        }

        max = findDepth(root.left, depth + 1, max)
        max = findDepth(root.right, depth + 1, max)
        depth--
        return max;
        
    }
    
    var makeArr = function(root, depth = 1, max, arr=[]){
        if(!root){
            return arr
        }
        if(depth == max){
            arr.push(root)
        }
        arr = makeArr(root.left, depth + 1, max, arr)
        arr = makeArr(root.right, depth + 1, max, arr)
        return arr
        
    }
    
    
    var arrMatch = function(root,newArr = [], depth=0){
        if(!root){
            return newArr;
        }
        if(depth != 0){
            newArr.push(root)
        }
        
        
        newArr = arrMatch(root.left, newArr, depth +1)
        newArr = arrMatch(root.right, newArr, depth +1)
        
        return newArr
    }
    
    var helperMatch = function(arr1,arr2){
        if(arr1.length !=arr2.length){
            return false;
        }
        for(var i=0; i<arr1.length; i++){
            if(arr1[i] != arr2[i]){
                return false;
            }
        }
        return true;
    }
    
    var returnNode = function(root,node = [], arr){
        if(!root){
            return node;
        }
        
        var nodearray = arrMatch(root)
        var includes = true;
        for(var i=0; i<arr.length; i++){
            var bool = false
            for(var x=0; x<nodearray.length; x++){
                if(arr[i]==nodearray[x]){
                    bool = true
                }
            }
            if(!bool){
                includes = false;
                break;
            }
        }
        if(includes){
            node.push(root)
        }

        node = returnNode(root.left,node, arr)
        node = returnNode(root.right, node, arr)
        return node;
    }
    
    
    
    var max = findDepth(root)
    if(max == 1){
        return root;
    }
    var arr = makeArr(root,1,max)
    if(arr.length == 1){
        return arr[0]
    }

    var node = returnNode(root,[], arr)
    var num = max+1
    var result;
    for(var i=0; i< node.length; i++){
            var min = findDepth(node[i])
            if(min<num){
                num=min
                result = node[i]
            }
    }


    return result
    
};