var destCity = function(paths) {
    
    var destination = paths[0][1];
    
    for(var i=0; i<paths.length; i++){
        
        if(paths[i][0] == destination){
            destination = paths[i][1];
            i=-1;
        }
    }

    return destination;
};