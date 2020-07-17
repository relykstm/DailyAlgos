var closedIsland = function(grid) {
    let temp = grid
    var returnIsland = function(temp, location, island = []){
        
        for(var i=0; i< island.length; i++){
            
            if(island[i][0] == location[0] && island[i][1] ==location[1]){
                return island;
            }

        }
        if(location[0]<0 || location[1]<0 || location[0]>= temp.length || location[1]>=temp[0].length || temp[location[0]][location[1]] == 1){
            return island;
        }
        if(temp[location[0]][location[1]] == 0){
            island.push(location)
        }
        
        island = returnIsland(temp, [location[0]+1,location[1]], island)
        island = returnIsland(temp, [location[0],location[1]+1], island)
        island = returnIsland(temp, [location[0]-1,location[1]], island)
        island = returnIsland(temp, [location[0],location[1]-1], island)
        
        return island;
        
        
    }
    
    var countIslands = function(temp, islands = []){
        for(var i=0; i< temp.length; i++){
            for(var x=0; x<temp[i].length; x++){
                if(temp[i][x] == 0){
                    var newisland = returnIsland(temp,[i,x])
                    islands.push(returnIsland(temp,[i,x]))
                }
                if(islands[islands.length-1] != undefined){
                    for(var z=0; z<islands[islands.length-1].length; z++){
                        temp[islands[islands.length-1][z][0]][islands[islands.length-1][z][1]] = 1
                    }
                    
                }
                
            }
        }
        for(var i=0; i<islands.length; i++){
            for(var x=0; x< islands[i].length; x++){
                grid[islands[i][x][0]][islands[i][x][1]]= 0
            }
        }
        return islands;
    }
    
    var validIsland = function(grid,island){
        var rows = {}
        var cols = {}
        
        for(var i=0; i<grid.length;i++){
            var rowmin; 
            var rowmax;
            var inrow = false

            for(var x=0; x<island.length; x++){
                if(island[x][0] == i){
                    inrow = true
                    if(rowmin == undefined){
                        rowmin = island[x][1]
                    }
                    if(rowmax == undefined){
                        rowmax = island[x][1]
                    }
                    if(island[x][1] < rowmin){
                        rowmin = island[x][1]
                    }
                    if(island[x][1] > rowmax){
                        rowmax = island[x][1]
                    }
                }
                if(inrow == true){
                    rows[i] = [rowmin,rowmax]
                }
            }
            
        }        
        for(var i=0; i<grid[0].length;i++){
            var colmin; 
            var colmax;
            var incol = false
        
        for(var x=0; x<island.length; x++){
                if(island[x][1] == i){
                    incol = true
                    if(colmin == undefined){
                        colmin = island[x][0]
                    }
                    if(colmax == undefined){
                        colmax = island[x][0]
                    }
                    if(island[x][0] < colmin){
                        colmin = island[x][0]
                    }
                    if(island[x][0] > colmax){
                        colmax = island[x][0]
                    }
                }
                if(incol == true){
                    cols[i] = [colmin,colmax]
                }
            }
            
        }

        for(var each in rows){
            var min = rows[each][0]
            var max = rows[each][1]

            
            for(var i=0; i<island.length; i++){
                
                

                if(parseInt(each) == island[i][0]){

                    if(island[i][1]==min){
                        if(min-1<0){
                            return false;
                        }

                        if(grid[each][min-1] != 1){
                            return false;
                        }
                    }
                    if(island[i][1]==max){
                        if(max+1>=grid[each].length){
                            return false
                        }

                        if(grid[each][max+1] != 1){
                            return false;
                        }
                    }
                }
            }
        }
        //now check cols
    
        for(var each in cols){
            var min = cols[each][0]
            var max = cols[each][1]
            
            for(var i=0; i<island.length; i++){
                
                if(each == island[i][1]){
                    if(island[i][0]==min){
                        if(min-1<0){
                            return false;
                        }
                        if(grid[min-1][each] != 1){
                            return false;
                        }
                    }
                    if(island[i][0]==max){
                        if(max+1>=grid.length){
                            return false
                        }
                        if(grid[max+1][each] != 1){
                            return false;
                        }
                    }
                }
            }
        }
        
        
        return true;
    }
    
    
    var islands = countIslands(temp)
    for(var i=0; i<islands.length; i++){
        if(!validIsland(grid, islands[i])){
            islands.splice(i,1)
            i--
        }
    }

    return islands.length;
    
};