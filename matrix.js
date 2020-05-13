var oddCells = function(n, m, indices) {

    var matrix = [];
    for(var y=0; y<n; y++){
        var arr = [];
        for(var x=0; x<m; x++){
            arr.push(0)
        }
        matrix.push(arr);
    }

    for(var z=0; z<indices.length; z++){
        var row = matrix[indices[z][0]]
        var col = indices[z][1]
        for(var b=0; b<row.length;b++){
            row[b]++
        }
        matrix[indices[z][0]] = row;
    }

    
};



