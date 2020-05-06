var numberOfSteps  = function(num) {
    
    var counter = 0;
    
    while(num != 0){
        if(num % 2 == 0){
            num = num/2;
            counter++;
        }else {
            num--;
            counter++;
        }
    }
    return counter;
};