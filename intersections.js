var intersection = function(nums1, nums2) {
    var results = [];
    for(var i=0; i<nums1.length; i++){
        for(var x=0; x<nums2.length; x++){
            if(nums1[i] == nums2[x]){
                if(!results.includes(nums1[i])){
                   results.push(nums1[i]);
                 }

                
            }
        }
    }
    return results;
};