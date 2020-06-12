var removeDuplicates = function(S) {
    
    var arr = S.split("");
    var complete = false;
    
    while(complete == false){
        var test = []
        for(var i=0; i<arr.length; i++){
            if(arr[i] != arr[i+1]){
                test.push(arr[i])
            } else{
                i++
            }
        }
        
        if(test.length == arr.length){
            complete = true;
        } else {
            arr = test;
        }
       
    }
    
    return arr.join("");
    
};