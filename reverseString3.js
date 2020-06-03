var reverseWords = function(s) {
    var string = s.split(" ");
    var arr = []
    for(var i=0; i<string.length; i++){
        var blank = "";
        for( var x=string[i].length-1; x>=0; x--){
            blank = blank + string[i][x];
            
        }
        arr.push(blank);
    }
    return arr.join(" ");
    
}; 