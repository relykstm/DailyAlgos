var sortArrayByParity = function(A) {
    
    for(var i =0; i<A.length; i++){
        if(A[i] % 2 != 0){
            for(var x=i+1; x<A.length; x++){
                if(A[x] %2 == 0){
                    var temp = A[x];
                    A[x] = A[i];
                    A[i] = temp;
                    break;
                }
            }
        }
    }
    return A;
};