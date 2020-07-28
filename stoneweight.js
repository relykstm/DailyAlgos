var lastStoneWeight = function(stones) {
    
    var arr = stones.sort(function(a,b){return b-a})

    while(arr.length > 1){
        console.log(arr)
        if(arr[0] == arr[1]){
            arr = arr.slice(2)
        } else{
            arr[1]=arr[0]-arr[1]
            arr.shift()
            arr.sort(function(a,b){return b-a})
        }
    }
    
    if(arr.length == 1){
        return arr[0]
    } else{
    return 0
    }
};