var numJewelsInStones = function(J, S) {
    
    var counter = 0;
    
    for(var i = 0; i<J.length; i++){
        
        for(var z = 0; z < S.length; z++){
            
            if(J[i] == S[z]){
                counter ++;
            }
            
        }
        
    }
    
    return counter;
};