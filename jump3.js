var canReach = function(arr, start) {
    
    var help = function(arr, start, newarr = new Array(arr.length)){
        if(start<0 || start>=arr.length || newarr[start] == "true"){
            return newarr
        }
        newarr[start] = "true"
        
        newarr = help(arr,start + arr[start], newarr)
        newarr = help(arr,start - arr[start], newarr)

        return newarr;
    }
    
    var newarr = help(arr,start)
    console.log(newarr)
    var bool = false
    for(var x=0; x<newarr.length; x++){
        if(arr[x] == 0 && newarr[x] == "true"){
            bool = true
        }
    }
    return bool;
};