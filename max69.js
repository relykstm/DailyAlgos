var maximum69Number  = function(num) {
    
    var string = num.toString();
    var newstring = "";
    var count = 0;
    
    for(var i=0; i<string.length; i++){
        if(string[i] == "6" && count == 0){
            newstring = newstring + "9";
            count++;
        }else{
            newstring = newstring + string[i];
        }
    }
    
    return Number(newstring);
    
};