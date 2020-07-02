var groupThePeople = function(groupSizes) {
    var dict = {};
    for(var i=0; i<groupSizes.length; i++){
        if(dict[groupSizes[i]] === undefined){
             dict[groupSizes[i]] = [i] 
        } else{
            dict[groupSizes[i]].push(i)
        }
    }
    var arr= []
    for(var each in dict){
        var eacharr = []
        for(var i=0; i< dict[each].length; i++){
            eacharr.push(dict[each][i])
            if(eacharr.length == parseInt(each)){
                arr.push(eacharr)
                eacharr = []
            }
        }   
    }
    return arr;
};