var findNumbers = function(nums) {
    var counter = 0;
    for(var i=0; i<nums.length; i++){
        var n = nums[i].toString();
        if(n.length%2 == 0){
            counter++;
        }
                
    }
    return counter;
};