var isPalindrone = function(string){
    for(var i=0; i<string.length; i++){
        if(string[i] != string[string.length-1-i]){
            return false;
        }      
    }
    return true
}

var removePalindromeSub = function(s, count=0) {
    
    if(s == "") {
        return 0
    } else if(isPalindrone(s)){
        return 1;
    } else {
        return 2;
    }
};