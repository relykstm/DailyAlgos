var judgeCircle = function(moves) {
    
    var location = [0,0];
    
    for(var x=0; x<moves.length; x++){
        console.log(location)
        if(moves[x] == "U"){
            location[0] = location[0] + 1;
        }
        if(moves[x] == "D"){
            location[0] = location[0] - 1;
        }
        if(moves[x] == "L"){
            location[1] = location[1] - 1;
        }
        if(moves[x] == "R"){
            location[1] = location[1] + 1;
        }
    }
    

    if( location[0] == 0 && location[1] == 0 ){
        return true;
    } else {
        return false;
    }
    
    
};