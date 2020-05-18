var generateTheString = function(n) {
    var string = "";
    
    while(string.length < n-1){
        var char = String.fromCharCode(97);
        string = string + char;
    }
    if(n % 2 == 0){
       string = string + String.fromCharCode(98); 
    }
    else{
        string = string + String.fromCharCode(97);
    }
    return string;
};