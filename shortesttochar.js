var shortestToChar = function(S, C) {
    var results = [];
    
    for(var i=0; i< S.length; i++){

        for(var x=0; x<S.length; x++){
            
            var forward = i+x
            var backward = i-x
            
            if(backward < 0){
                backward = 0
            }
            if(forward >= S.length){
                forward = S.length -1
            }
     
            if(S[forward] == C){
                results.push(x)
                break;
            } else if(S[backward] == C){
                results.push(x)
                break;
            }
    
        }
    }
    
    
    return results;
};