var construct = function(grid, leaf = new Node(1,0)) {

    grid = grid.filter(function (ea) {
        return ea != null;
    });
    var length = grid.length
    //all same check
    var bool = true
    var first = grid[0][0]
    for(var i=0; i<length; i++){
        for(var j=0; j<length; j++){
            if(grid[i][j] != first){
                bool = false;
            }
        }
    }
    if(bool == true){
        leaf.val = first
        leaf.isLeaf = 1
        return leaf
    }

    //topleft
    var bool = true
    var first = grid[0][0]
    var newGrid = []
    for(var i=0; i<length/2; i++){
        for(var j=0; j<length/2; j++){
            if(newGrid[i] == undefined){
                newGrid[i] = []
            }
            newGrid[i].push(grid[i][j])
            if(grid[i][j] != first){
                bool = false;
            }
        }
    }
    if(bool == true){
        leaf.topLeft = new Node(first, 1)
    } else{
        var newleaf = new Node(1,0)
        leaf.topLeft = newleaf
        construct(newGrid, newleaf)
    }
    //topright
    var bool = true
    var first = grid[0][length/2]
    var newGrid = []
    for(var i=0; i<length/2; i++){
        for(var j=length/2; j<length; j++){
            if(newGrid[i] == undefined){
                newGrid[i] = []
            }
            newGrid[i].push(grid[i][j])
            if(grid[i][j] != first){
                bool = false;
            }
        }
    }
    if(bool == true){
        leaf.topRight = new Node(first, 1)
    } else{
        var newleaf = new Node(1,0)
        leaf.topRight = newleaf
        construct(newGrid, newleaf)
    }
    //btmleft
    var bool = true
    var first = grid[length/2][0]
    var newGrid = []
    for(var i=length/2; i<length; i++){
        for(var j=0; j<length/2; j++){
            if(newGrid[i] == undefined){
                newGrid[i] = []
            }
            newGrid[i].push(grid[i][j])
            if(grid[i][j] != first){
                bool = false;
            }
        }
    }
    if(bool == true){
        leaf.bottomLeft = new Node(first, 1)
    } else{
        var newleaf = new Node(1,0)
        leaf.bottomLeft = newleaf
        construct(newGrid, newleaf)
    }
    //btmright
    var bool = true
    var first = grid[length/2][length/2]
    var newGrid = []
    for(var i=length/2; i<length; i++){
        for(var j=length/2; j<length; j++){
            if(newGrid[i] == undefined){
                newGrid[i] = []
            }
            newGrid[i].push(grid[i][j])
            if(grid[i][j] != first){
                bool = false;
            }
        }
    }
    if(bool == true){
        leaf.bottomRight = new Node(first, 1)
    } else{
        var newleaf = new Node(1,0)
        leaf.bottomRight = newleaf
        construct(newGrid, newleaf)
    }

    return leaf;
    
};