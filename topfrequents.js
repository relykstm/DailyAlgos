var topKFrequent = function(nums, k) {
    var arr = []
    
    for(var i=0; i<nums.length; i++){
        var bool = false;
        for(var x=0; x<arr.length; x++){
            if(arr[x][0] == nums[i]){
                arr[x][1]++
                bool = true
            }
        }
        if(bool==false){
            arr.push([nums[i],1])
        }
    }
    var arr = arr.sort(function(a,b){return a[1]-b[1]})
    var results = []
    for(var i=0; i<k;i++){
        results.push(arr[arr.length-1-i][0])
    }
    return results;
};