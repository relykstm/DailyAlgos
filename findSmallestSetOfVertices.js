function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

var findSmallestSetOfVertices = function(n, edges) {
    
    var dict = {
        'vals':[],
        'pointers':[]
    }
    
    for(var i=0; i<edges.length; i++){
        dict['vals'].push(edges[i][0])
        dict['pointers'].push(edges[i][1])
    }
    
    var result = dict['vals'].filter(i => !dict['pointers'].includes(i))
    var unique = result.filter( onlyUnique );
    return unique;
};