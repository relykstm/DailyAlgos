var getStrongest = function(arr, k) {
    var result=[]
    var arr = arr.sort(function(a,b){return a-b})
    var m = arr[Math.floor((arr.length-1)/2)]
    function strong(num){
        return Math.abs(num-m)
    }
    var rank = arr.map(strong)
    
    for(var i=0; i<arr.length; i++){
        arr[i]=[arr[i],rank[i]]
    }
    arr.sort(function(a,b){
        if(b[1]==a[1]){
            return b[0]-a[0]
        } else{
            return b[1]-a[1]
        }
    })
    
    for(var i=0; i<k; i++){
        result.push(arr[i][0])
    }
    
    
    return result;
};