var countBits = function(num) {
    var count = [];
    for (var i=0; i<=num; i++){
        var each=0
        var string = i.toString(2)
        for(var x=0; x<string.length; x++){
            if(string[x] == "1"){
                each++
            }
        }
        count.push(each)
    }
    return count;
};