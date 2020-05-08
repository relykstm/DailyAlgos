var balancedStringSplit = function(s) {
    var counter=0;
    var tempR =0;
    var tempL=0;
    for(var i=0; i<s.length; i++){
        if(s[i] == "R"){
            tempR++
        }
        if(s[i] == "L"){
            tempL++
        }
        if(tempR == tempL){
            counter++
        }
        
    }
    return counter;
    
};