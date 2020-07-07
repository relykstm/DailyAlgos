var minStartValue = function(nums) {
    var sum = 0;
    var startValue = 1;
    for(var i=0; i<nums.length; i++){
        sum = sum + nums[i] 
        if(startValue > sum){
            startValue = sum;
        }
        
    }
    if(startValue < 1 ){
        startValue = Math.abs(startValue) + 1
    }
    
    return startValue;
};