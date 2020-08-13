var findLength = function(A, B) {
    var count = 0;
    
    for(var i=0; i<A.length; i++){
        for(var x=0; x<B.length; x++){
            var arr = []
            var temp = i
            var tempx = x
            while(A[temp]==B[tempx] && temp < A.length){
                arr.push(B[tempx])
                tempx++
                temp++
            }
            if(arr.length>count){
                count = arr.length
            } 
            if(temp == A.length -1 || count > A.length -1-i){
                return count;
            }
        }
     
    }

    return count;
};