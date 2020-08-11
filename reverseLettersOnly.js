var reverseOnlyLetters = function(S) {
    var index = 0
    var arr = S.split("")
    for(var i=0; i<S.length; i++){
        if(i > S.length-1-index){
            break
        }
        
        if(isLetter(S[i]) === true && isLetter(S[S.length-1-index]) === true){
            var temp = arr[i]
            arr[i] = arr[S.length-1-index]
            arr[S.length-1-index] = temp
            index++ 
            continue
        }else if (isLetter(S[i]) === false && isLetter(S[S.length-1-index]) === false){
            index++
            continue
        } else if(!isLetter(S[i])){
            continue
        }else{
            index++
            i--
        }
        
    }
    
    return arr.join("")
    
}