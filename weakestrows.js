var kWeakestRows = function(mat, k) {
    
    var result = [];
    var arr = [];
    for(var i=0; i< mat.length; i++){
        var temp = []
        var count = 0;
        for(var x=0; x<mat[i].length; x++){
            if(mat[i][x] == 1){
                count++
            }
        }
        temp.push(count)
        temp.push(i)
        arr.push(temp)
    }
    
    arr.sort(function(a,b){return a[0]-b[0]})
    
    for(j=0; j<k;j++){
        result.push(arr[j][1])
    }

    
    return result;
    
};