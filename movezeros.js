var moveZeroes = function(nums) {
    for(var i=nums.length-1; i>=0; i--){
        
        if(nums[i] == 0){
            
            for(var j=i; j<nums.length; j++){
                if(j==nums.length -1){
                    nums[j] = 0
                    break;
                }
                var temp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = temp
            }
            
        }
        
    }
    return nums;
};