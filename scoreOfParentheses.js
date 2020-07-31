var scoreOfParentheses = function(S,score=0, begIndex=0,endIndex = S.length) {
    if(S.length == 2){
        return 1;
    }
    var openCount = 0
    var closedCount=0
    var String = ""
    for(var i=begIndex; i<endIndex; i++){
        String = String + S[i]
        if(S[i]=="("){
            openCount++
        }else{
            closedCount++
        }
        
        if(openCount == closedCount && String.length == S.length){
            score = 2 * scoreOfParentheses(String,score, begIndex+1,endIndex-1)
        }else if(openCount == closedCount && String.length != S.length){          
            var remainderString = ""
            for(var x=i+1; x<S.length-begIndex; x++){
                remainderString = remainderString + S[x]
            }
            score = scoreOfParentheses(String,score) + scoreOfParentheses(remainderString,score)
            break;
        } 
    }
    return score;
};