var minAddToMakeValid = function(S) {
    var count = 0
    if(S == ""){
        return count;
    }
    var opencount = 0
    var closedcount = 0
    
    for(var i=0; i<S.length; i++){

        if(S[i] == "("){
            opencount++
        }
        
        if(S[i] == ")"){
            closedcount ++ 
        }
        
        if(closedcount > opencount){
            count ++
            opencount = 0
            closedcount = 0
        } 
 
    }
    return count + (opencount - closedcount)
    
};