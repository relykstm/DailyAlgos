var minSubsequence = function(nums) {
    var sum = 0;
    for(var q=0; q<nums.length; q++){
        sum = sum + nums[q];
    }
    for(var i=0; i<nums.length; i++){
        
        for(var x=i; x<nums.length; x++){
            if(nums[i] < nums[x]){
               var temp = nums[i];
               nums[i] = nums[x]; 
               nums[x] = temp;
           }   
        }

    }
    var NewArr = [];
    var SubSum = 0;
    for(var j=0; j<nums.length; j++){
        sum = sum - nums[j];

        SubSum = SubSum + nums[j];

        NewArr.push(nums[j]);
        if(SubSum > sum){
            return NewArr;
        }
    }

};