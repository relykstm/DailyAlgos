var sortedSquares = function(A) {
    for(var i=0; i<A.length; i++){
        A[i] = A[i] * A[i];
        
    }
    for(var x=0; x<A.length; x++){
        for(var j=x+1; j<A.length; j++){
            if(A[j] < A[x]){
                var temp = A[x];
                A[x] = A[j];
                A[j] = temp;
            }
        }
    }
    return A;
};