var subtractProductAndSum = function(n) {
    
    var string = n.toString();
    var arr = string.split("");
    var product = 1;
    var sum = 0;
    
    for(var x = 0; x < arr.length; x++){
        
        var num = Number(arr[x]);
        product = product * num;
        sum = sum + num;
        
    }
    
    return product - sum;
    
    
};