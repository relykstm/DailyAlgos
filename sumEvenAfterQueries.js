var sumEvenAfterQueries = function(A, queries) {
    var results = []
    
    for(var i=0; i<queries.length; i++){
        
        
        var val = queries[i][0]
        var index = queries[i][1]
        
        A[index] =  A[index] + val
        
        var sum = 0;
        
        for(var j=0;j<A.length;j++){
            if(A[j] % 2 == 0){
                sum = sum + A[j]
            }
        }
        results.push(sum)
    }
    

    return results;
};