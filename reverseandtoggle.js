var flipAndInvertImage = function(A) {
    
    for(var x=0; x<A.length; x++){
        A[x].reverse()
         for(j=0; j<A[x].length;j++){
            if(A[x][j] == 0){
                A[x][j] = 1;
            } else {
                A[x][j] = 0;
            }
        }
    }

        return A;
    
};