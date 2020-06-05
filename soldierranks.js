var numTeams = function(rating) {
    
    var count =0;
    
    for(var i=0; i<rating.length; i++){

        var min = rating[i]
        
        for(var x=i; x<rating.length; x++){
            var minsec = rating[x]
            
            if(rating[x]>min){

                for(var z=x; z<rating.length; z++){
                    if(rating[z]>minsec){
                        count++;
                    }
                }
            }
        
        }
    }

    for(var i=0; i<rating.length; i++){

        var min = rating[i]
        
        for(var x=i; x<rating.length; x++){
            var minsec = rating[x]
            
            if(rating[x]<min){

                for(var z=x; z<rating.length; z++){
                    if(rating[z]<minsec){
                        count++;
                    }
                }
            }
        
        }
    }
    return count;
};