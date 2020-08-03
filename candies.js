var distributeCandies = function(candies, num_people) {
    var result = [];

    var givenCandies = 0;
    var temp = 0;
    while(givenCandies != candies){
        for(var i=1; i<=num_people; i++){

            if((i + temp) > (candies - givenCandies)){
                if(result[i - 1] == undefined){
                    result[i - 1] = candies - givenCandies;
                }

               else{
                   result[i - 1] = result[i - 1] + (candies - givenCandies);
               }
            for(var j=result.length; j<num_people; j++ ){
                result.push(0);

            }
                //console.log(candies);
               return result;
            }

            //console.log(result[i - 1] + i + temp)
            if(result[i - 1] == undefined){
                console.log("i", i)
                result[i-1] = i
            }

            else{
                console.log( i + temp)
                result[i -1] = result[i - 1] + temp +i;
            }

            givenCandies = givenCandies + temp +i;
        }
        temp = i + temp -1;

    }
    return result;
};