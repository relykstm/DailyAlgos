var processQueries = function(queries, m) {
    var P = []
    var result = [];
    for(var j=1; j<=m; j++){
        P.push(j)
    }
    
    for(var i=0; i<queries.length; i++){
        for(var x=0; x<P.length; x++){
            
            if(queries[i] == P[x]){
                
                result.push(x)
                for(var y=x; y>0;y--){
                    var temp = P[y]
                    P[y] = P[y-1]
                    P[y-1] = temp
                }
                    
            }
        }
    }
    return result;
};