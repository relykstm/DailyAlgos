var simplifiedFractions = function(n) {
    var arr = []
    for(var i=2; i<=n; i++){
        var eacharr = []
        for(var z=1;z<i; z++){
            var bool = true;
                for(var x=2; x<i;x++){
                    if(i%x==0 && z%x ==0){
                        bool = false;
                    }
                }
                
            if(bool){
                eacharr.push([z,i])
            }
        }
       for(var j=0; j<eacharr.length; j++){
          var string =  eacharr[j][0].toString() + "/" + eacharr[j][1].toString()
          arr.push(string)
       }
    }
    return arr
};