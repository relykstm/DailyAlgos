var uniqueOccurrences = function(arr) {

    function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }
    
    var numarr = [];
    var countarr = [];

    for(var i=0; i<arr.length; i++){
        var count = 0;
        var bool = false
        for(var x=0; x<numarr.length; x++){
            if(arr[i]==numarr[x]){
                bool = true;
            }
        }

        if(bool == false){
            numarr.push(arr[i]);
            for(var z=0; z<arr.length; z++){
                if(arr[z]==arr[i]){
                    count ++;
                }
            }
            countarr.push(count);
        }
    }
    var unique = countarr.filter( onlyUnique );
    
    if(unique.length == countarr.length){
        return true;
    }
    
    return false;
    
};