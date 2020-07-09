var isToeplitzMatrix = function(matrix) {
    
    for(var i=0; i<matrix[0].length-1; i++){
        var index = i;
        for(var z=1;z<matrix.length; z++){
            if(index+1 == matrix[0].length){
                break;
            }
            if(matrix[0][i] != matrix[z][index+1]){
                return false;
            }
            index++
        }    
    }
    

    for(var x=1;x<matrix.length-1; x++){
        var index = x;
        for(var j=1; j<matrix[0].length; j++){

            if(matrix[x][0] != matrix[index+1][j]){
                return false;
            }
            if(index+1 == matrix.length-1){
                break;
            }

            index++
        }
        
    }
    return true;
};
    