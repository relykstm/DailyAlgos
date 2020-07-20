var uncommonFromSentences = function(A, B) {
    var string =  A+" "+B
    
    var arr = []
    
    var arr1 = string.split(" ")

    for(var i=0; i<arr1.length; i++){
        var bool = false
        
        for(var x=i+1; x<arr1.length; x++){
        
            if(arr1[i] == arr1[x]){
                bool = true
                arr1.splice(x,1)  
                x--
            }
            
        }
        if(bool == false){
            arr.push(arr1[i])
            arr1.splice(i,1)
            i=-1
        } else {
            arr1.splice(i,1)
            i=-1
        }


    }

    return arr;
    
};