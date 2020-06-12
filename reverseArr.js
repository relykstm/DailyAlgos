var reverseString = function(s) {
    var index = s.length-1;
    for(var i=0; i<(s.length/2); i++){
        var temp = s[i];
        s[i] = s[index];
        s[index] = temp;
        index--
        
    }
    return s;
};