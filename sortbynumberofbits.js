var sortByBits = function(arr) {
    var Arr = []    
    for(var i=0; i<arr.length; i++){       
        var count = 0;
        var NewArr = arr[i].toString(2)        
        for(var x=0; x<NewArr.length; x++){
            if(NewArr[x] == 1){
                count++
            }
        }
        Arr.push(count);        
    }
    var OneCount = 0;
    var Finalarr = []
    while(arr.length>0){
        var tempArr = []
        for(var y=0; y<arr.length; y++){
            if(Arr[y] == OneCount){
                tempArr.push(arr[y])
                for(var q=y; q<arr.length; q++){                    
                    if(q == arr.length-1){
                        arr.pop();
                        Arr.pop();
                    }
                    else{
                        arr[q] = arr[q+1]
                        Arr[q] = Arr[q+1]
                    }
                }
                y=-1;         

            }            
        } Finalarr.push(tempArr.sort(function(a, b){return a-b}));
       OneCount++
    }
     return [].concat.apply([], Finalarr);     
};