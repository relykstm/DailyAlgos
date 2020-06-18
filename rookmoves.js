var numRookCaptures = function(board) {
    var Rrow;
    var Rcol;

    var count = 0;
    for(var i=0; i<board.length; i++){
        for(var x=0; x<board[i].length; x++){
            if(board[i][x] == "R"){                
                Rrow = i;
                Rcol = x;
                break;
            }
        }
       
    }
    for(var j=Rcol; j>=0; j--){
        if(board[Rrow][j] == "B"){
            break;
        }
        if(board[Rrow][j] == "p"){
            count++;
            break;
        }
    }
    for(var j=Rcol; j<8; j++){
        if(board[Rrow][j] == "B"){
            break;
        }
        if(board[Rrow][j] == "p"){
            count++;
            break;
        }
    }
    for(var j=Rrow; j>=0; j--){
        if(board[j][Rcol] == "B"){
            break;
        }
        if(board[j][Rcol] == "p"){
            count++;
            break;
        }
    }
    for(var j=Rrow; j<8; j++){
        if(board[j][Rcol] == "B"){
            break;
        }
        if(board[j][Rcol] == "p"){
            count++;
            break;
        }
    }
   
    return count;
};