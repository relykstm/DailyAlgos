var removeOuterParentheses = function(S) {
    var countOpen = 0;
    var countClosed = 0;
    var arr = S.split("");
    var beg = 0;
    var end = 0;
    var newArr =[];
    
    for(var i=0; i<arr.length; i++){
        if(arr[i] == "("){
            countOpen++
            end++
        }
        if(arr[i] == ")"){
            countClosed++
            end++
        }
        if(countOpen == countClosed){
            for(var x = beg+1; x< end-1; x++){
                newArr.push(arr[x]);
            }
            beg = end;
            end = beg;
            countOpen = 0;
            countClosed = 0;
        }
    }
    return newArr.join("");
};