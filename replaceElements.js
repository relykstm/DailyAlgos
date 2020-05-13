var replaceElements = function(arr) {
    
    for(var i=0; i< arr.length; i++){
        
        if(i==arr.length - 1){
            arr[i] = -1;
            break;
        }
        
        var max = arr[i+1]
        for(var x = i+2; x<arr.length; x++){
            if(max < arr[x]){
                max = arr[x];
            }
        }
        
        arr[i] = max;
        
    }
    return arr;
};