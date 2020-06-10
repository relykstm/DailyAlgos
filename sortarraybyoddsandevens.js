var sortArrayByParityII = function(A) {
    for(var i=0; i<A.length; i++){
        if(i % 2 == 0){
            if(A[i] % 2 != 0){
                for(var x=i; x<A.length; x++){
                    if(A[x]  % 2 == 0){
                        var temp = A[x];
                        A[x] = A[i];
                        A[i] = temp;
                        break;
                    }
                }
            }
        }
        else{
            if(A[i] % 2 == 0){
                for(var x=i; x<A.length; x++){
                    if(A[x]  % 2 != 0){
                        var temp = A[x];
                        A[x] = A[i];
                        A[i] = temp;
                        break;
                    }
                }
            }
        }
    }
    return A;
}; 