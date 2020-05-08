var createTargetArray = function(nums, index) {
    var targetArr=[];
    for(var i=0; i<nums.length; i++){
        
        if(targetArr[index[i]] != null){
            for(var x=targetArr.length; x>index[i+1]; x--){
                targetArr[x] = targetArr[x-1]
            }
        }

        targetArr[index[i]]=nums[i];

    }
    return targetArr;
};