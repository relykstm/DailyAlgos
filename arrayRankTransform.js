var arrayRankTransform = function(arr) {
    
    var sorted = [...arr].sort((a,b)=> a-b)
    
    var dict = {}
    var index = 1
    
    for(var i=0; i<sorted.length; i++){
        if(!dict[sorted[i]]){
            dict[sorted[i]] = index
            index++
        }
    }
    
    for(var i=0; i<arr.length; i++){
       arr[i] =  dict[arr[i]]
    }
    
    return arr
    
};