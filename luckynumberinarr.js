/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    var lucky;
    var dict = {};
    
    for(var i=0; i< arr.length; i++){
        
        if(dict[arr[i]] == undefined){
            dict[arr[i]] = 1
        } else {
            dict[arr[i]] = dict[arr[i]] + 1
        }    
    }
    
    console.log(dict)
    
    for(var num in dict){
        var temp;
        if (num == dict[num]){
            temp = dict[num]
        } 
        if(lucky == undefined && temp != undefined || temp > lucky && temp != undefined){
            lucky = temp;
        }
    }

    if(!lucky){
        return -1;
    }else{
        return lucky;
    }
    
};