var canCompleteCircuit = function(gas, cost) {
    

    for(var i=0; i<gas.length; i++){
        
        var tank = 0;
        var index = i;
        
        for(var x=0; x<gas.length; x++){
            
            tank += gas[index];
            tank -= cost[index]
        
            if(tank < 0){
                break;
            }
            if(index == gas.length -1){
                index = 0; 
                continue;
            } else {
                index++
            }
            
        }

        if(tank >= 0){
            return i;
        }
    
    }
        
    
return -1;

};
