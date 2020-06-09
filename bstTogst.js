var bstToGst = function(root, count=0, valArr) {

    
    var createArr = function(root, arr=[]){
        if(root == null){
            return arr;
        }
        
        arr.push(root.val)
        
        arr = createArr(root.left, arr);
        arr = createArr(root.right, arr);

        return arr;
    }
    if(root == null){
        return;
    }
    
    if(count == 0){
        valArr = createArr(root, []);
        count++;
    }
    var sum = 0;
    for(var i=0; i< valArr.length; i++){
    
        if(valArr[i] >= root.val){
            sum += valArr[i]
        }
        
    }
    root.val = sum;
    
    
    bstToGst(root.left, count, valArr)
    bstToGst(root.right, count, valArr)
    
    return root;
    
    
};