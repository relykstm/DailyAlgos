var addDigits = function(num) {
    var n = num.toString()
    
    if(n.length == 1){
        return num
    }

    n = n.split("")
    var sum = 0
    
    
    for(var i=0; i<n.length; i++){
        sum = sum + parseInt(n[i])
    }

    return addDigits(sum)

};