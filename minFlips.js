var minFlips = function(target,min = 0, string = "0") {

    for(var i=0; i<target.length; i++){
        
        if(target[i] != string){
            min++
            string = string == "0" ? "1" : "0"
        }
        
    }
    return min;
};