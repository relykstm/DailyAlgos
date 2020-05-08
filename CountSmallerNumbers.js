var smallerNumbersThanCurrent = function(nums) {
    
    var arr = [];
    
    for(var x = 0; x < nums.length; x++){
        var count = 0;
        for(var y=0; y < nums.length; y++){
            
            if(nums[x] > nums[y]){
                count++;
            }
            
        }
        arr.push(count);
    }
    return arr;
};