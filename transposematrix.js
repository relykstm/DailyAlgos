var transpose = function(A) {
    var arr = []
    var B = []
    B.length = A[0].length
    for(var i=0; i<B.length; i++){
        B[i] = []
    }
    
    for(var i=0; i<A[0].length; i++){
        for(var j=0; j<A.length; j++){
            arr.push(A[j][i])   
        }
        
    }
    var x=0
    for(var i=0; i<B.length; i++){
        for(var j=0; j<A.length; j++){
            B[i].push(arr[x])
            x++
        }
        
    }
    
    
    return B;
    
};