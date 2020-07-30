var shift = function(grid){
    
    var duplicate = JSON.parse(JSON.stringify(grid));
    
    for(var i=0; i<grid.length; i++){
        
        
        for(var j=0; j<grid[i].length; j++){
            
            if(j < grid[i].length - 1){

                grid[i][j + 1] = duplicate[i][j]
                
            }  
            
        }
        if(i < grid.length - 1){
            grid[i + 1][0] = duplicate[i][grid[i].length - 1]
        }
                
    }
    grid[0][0] = duplicate[grid.length - 1][grid[0].length - 1] 

    return grid
}



var shiftGrid = function(grid, k) {
    for(var i=0; i<k; i++){
        grid = shift(grid)  
    }
    return grid
    
};