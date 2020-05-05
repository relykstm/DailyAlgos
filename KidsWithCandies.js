var kidsWithCandies = function(candies, extraCandies) {
    
    var bools = [];
    var max = candies[0];
    for(var i=1; i<candies.length; i++){
        if(candies[i] > max){
            max = candies[i];
        }
    }
    
    for(var i=0; i<candies.length; i++){
    
        if(candies[i]+extraCandies >= max){
            bools.push(true);
        } 
        
        else {
            bools.push(false);
        }
    
    }
    
    
    return bools;
};