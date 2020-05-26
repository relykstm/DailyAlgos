var diStringMatch = function(S) {
    var A = S.split("");
    var count = 0;
    var countD = S.length;

    for(var i=0; i<A.length; i++){

        if(A[i] == "I"){
            A[i] = count;
            count++;
        }
        if(A[i] == "D"){
            A[i] = countD;
            countD--
        }
        if(i == A.length-1){
            console.log(A.length-1)
            if(S[i] == "I"){
                A[i+1] = count;
                return A;
            }
            if(S[i] == "D"){
                A[i+1] = countD;
                return A;
            }
        }
        
    }
    // return A;
};