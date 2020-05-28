var luckyNumbers  = function(matrix) {
    
    var lucky = [];
    
    for(var i=0; i< matrix.length; i++){
        
        var min = matrix[i][0]
        var minIndex = 0;
        
        
        for(var x=0; x< matrix[i].length; x++){
            if(min > matrix[i][x]){
                min = matrix[i][x];
                minIndex = x;
            }
        }
        
        var bool = true;
        for(var z=0; z<matrix.length; z++){
            if(min < matrix[z][minIndex]){
                bool = false;
            }
        }
        
        if(bool == true){
            lucky.push(min);
        }
        
    }
    return lucky;
};