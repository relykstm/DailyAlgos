var numWaterBottles = function(numBottles, numExchange, empties = 0, count = 0) {
    
    while(empties + numBottles >=numExchange){
        count = count + numBottles
        empties = numBottles + empties
        numBottles=0
        while(empties >= numExchange){
            empties = empties - numExchange 
            numBottles++
        }
    }
    return count + numBottles
    
};