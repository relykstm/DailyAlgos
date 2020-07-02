var maxIncreaseKeepingSkyline = function(grid) {
    var sum = 0;
    var rowmaxes = []
    var colmaxes = []
    for(var i=0; i<grid.length; i++){
        var rowmax = grid[i][0]
        for(var x=0; x<grid[i].length; x++){
            if(grid[i][x]>rowmax){
                rowmax = grid[i][x]
            }
            if(colmaxes[x] == undefined || colmaxes[x] <= grid[i][x]){
                colmaxes[x] = grid[i][x]
            }
        }
        rowmaxes.push(rowmax)
    }
    
    for(var i=0; i<grid.length;i++){
        for(var x=0; x<grid[i].length; x++){
            
            if(rowmaxes[i] <= colmaxes[x]){
                var max = rowmaxes[i]
            } else{
                var max = colmaxes[x]
            }
            
            if(grid[i][x] < max){
                sum = sum + (max - grid[i][x])
            }
            
        }
    }
    
    return sum;
};