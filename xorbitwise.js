var xorOperation = function(n, start) {
    var arr = []
    var num = start
    for(var i=0; i<n; i++){
        arr[i] = (start + 2*i)
        if(i>0){
            num = num ^ arr[i]
        }
    }

    return num;
};