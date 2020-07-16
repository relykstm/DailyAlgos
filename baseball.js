var calPoints = function(ops) {
    
    var sum = 0;
    var validRounds = []
    
    for(var i=0; i< ops.length; i++){
        if(ops[i] == "C"){
            sum = sum - validRounds.pop()
        }
        else if(ops[i] == "D"){
            var round = parseInt(validRounds[validRounds.length-1])*2
            sum = sum + round
            validRounds.push(round)
        }
        else if(ops[i] == "+"){
            var cur = 0
            for(var x = validRounds.length-1; x>validRounds.length-3; x--){
                cur = cur + parseInt(validRounds[x])
            }
            sum = sum + cur
            validRounds.push(cur)
        }
        else{
            sum = sum + parseInt(ops[i])
            validRounds.push(ops[i])
        }
    }
    return sum;
    
};