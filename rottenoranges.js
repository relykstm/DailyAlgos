var orangesRotting = function(grid, min=0) {
    
    
    //loop through grid
    var rottenORanges = []
    var temp = 0;
    
    for(var i=0; i<grid.length; i++){
        
        var noOnes = true;
        var row = grid[i];

        
        for(var x =0; x<row.length; x++){
            var eachSquare = row[x]
            if(eachSquare == 2){
                rottenORanges.push([i,x])
            }
            if(eachSquare == 1){
                temp++;
                noOnes = false;
            }
            
        }
        
    }

    //if loop discovers no ones
    if(noOnes){
        return min;
    }
    
    // for each two - change adjacent 1, to a two
    
    

    for(var z=0; z<rottenORanges.length; z++){
        var orange = rottenORanges[z]
        //example[1,1]
        //[orange[0], orange[1]]
        //if in bounds and a one, then make a two

        //rot up
        if(orange[0]-1 >=0){
            if(grid[orange[0]-1][orange[1]] == 1){
                grid[orange[0]-1][orange[1]] = 2
            }
        }
        
        //rot left

        if(orange[1]-1>=0){
            if(grid[orange[0]][orange[1]-1] == 1){
                grid[orange[0]][orange[1]-1] = 2
            }
        }
    
        //rot right
        
        if(orange[1]+1 < grid[0].length){
            if(grid[orange[0]][orange[1]+1] == 1){
                grid[orange[0]][orange[1]+1] = 2
            }
        }
        
    
        //down
        if(orange[0]+1 < grid.length){
            if(grid[orange[0]+1][orange[1]] == 1){
                grid[orange[0]+1][orange[1]] = 2 
            }
        }
    }
    var numberOfOnes = 0;
    //count ones again??
    for(var t=0; t<grid.length; t++){
        
        var row = grid[t];
        
        for(var f=0; f<row.length; f++){
            var eachSquare = row[f]
            
            if(eachSquare == 1){
                numberOfOnes++;
            }
            
        }
        
    }

    if(temp == numberOfOnes){
        return -1;
    }
    
    return orangesRotting(grid, min = min+1);
};


console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]));


