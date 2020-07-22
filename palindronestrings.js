var isPalindrone = function(string){

    for(var i =0; i< string.length/2; i++){
        if(string[i] !== string[string.length-1-i]){
            return false
        }
    }

    return true
}

var createString = function(s, start, end){
    var string = ""
    for(var j=start; j<=end; j++){
        string = string + s[j]
    }
    return string
}


var countSubstrings = function(s) {
    var count = 0
    for(var x = 0; x<s.length; x++){
    
        for(var z=0; z<s.length; z++){
            if(z == x){
                count++ 
                continue
            }
            if(s[x] != s[z]){
                continue
            }
            var string = createString(s, x, z)
            if(isPalindrone(string) && string != ""){
                count++
            }
        }
            
    }

    return count;
};