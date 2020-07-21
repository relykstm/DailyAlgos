//not accepted as solution - includes strings with matching start/ends

var isPalindrone = function(string){
    var bool = false;
    var gnirts = ""
    for(var i =string.length-1; i>=0; i--){
        gnirts = gnirts + string[i]
    }
    if(string == gnirts){
        bool = true
    }
    return bool
}

var returnCount = function(s, string, x,count = 0){
    

    
    
    for(var z = 0; z<s.length; z++){
        if(isPalindrone(string)){
            console.log(string)
            count++
        }
        if(z != x){
            string = string + s[z]
        }
    
    }
    
    return count
}


var countSubstrings = function(s) {
    var count = 0
    for(var x = 0; x<s.length; x++){
        count += returnCount(s,s[x],x)  
            
    }

    return count-1;
};