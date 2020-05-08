var decompressRLElist = function(nums) {
    var arr = [];
    
    for(var i=0; i< nums.length; i++){
        
        var freq = nums[2*i];
        var val = nums[2*i+1];
        
        for(var x=0; x<freq; x++){
            arr.push(val);
        }
        
    }
    return arr;
    
};