var countPrimes = function(n) {
    var count = 0;
    for(var x=2;x<n;x++){
        var bool = true;
        for(var i=2; i<=x/i;i++){

            if(x%i == 0){
               bool = false;
            }
            
            if(bool == false){
                break;
            }

        }
        if(bool == true){
            console.log(x)
            count++;
            continue;
        }
    }
    return count;
};