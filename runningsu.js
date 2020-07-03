var runningSum = function(nums) {
    var result = [];
    for(var i=0; i<nums.length; i++){
        var newval=0;
        for(var x=0; x<=i; x++){
            newval = nums[x] + newval;
        }
        result[i] = newval;
    }
    return result
};