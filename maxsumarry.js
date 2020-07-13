var maxSubArray = function(nums) {
    
    var maxSum = 0;
    var currentSum = nums[0];
    var maxNum = nums[0]
    
    for(var i=1; i<nums.length; i++){
        
        if(nums[i]>maxNum){
            maxNum = nums[i]
        }
    
        if(currentSum < 0){
            currentSum = 0
        }
        
        currentSum += nums[i]

        

        if(currentSum>maxSum){
            maxSum = currentSum;
        }
        
    }
    if(maxSum<maxNum || maxSum == 0){
        return maxNum;
    }
    return maxSum;
};