var shuffle = function(nums, n) {
    var newarr = []
    
    for(var i = 0; i<n; i++){
        newarr.push(nums[i])
        newarr.push(nums[i+n])
    }
    return newarr;
};