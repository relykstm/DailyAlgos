function result(arr, label){
    var results = []
    var index = arr[arr.length-1].indexOf(label)
    results.push(label)

    for(var i=arr.length-2; i>0; i--){
        for(var x=0; x< arr[i].length; x++){
            if(x*2+1>=index){
                results.unshift(arr[i][x])
                index = x
                break;
            }
        }
    }
    results.unshift(1)
        
    return results;
}


var pathInZigZagTree = function(label, level=2, rows = [[1]], nodes = 1, total=1, row =[]) {
    if(label == 1) return [1]
    if(row.includes(label)){
        return result(rows, label)
    }
    var totalTemp = total
    var temp = nodes * 2
    var row = []
    if(level % 2 == 0){  
        for(var i=total; i>totalTemp; i--){
            row.push(i)
        }
        
    }else{
        for(var i=totalTemp+1; i<=total; i++){
            row.push(i)
        }   
    }

    rows = rows.concat([row])
    
    return pathInZigZagTree(label, level+1, rows, temp, total, row)
};
