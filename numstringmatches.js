var numMatchingSubseq = function(S, words) {
    var wordCount = 0;
    for(var i=0; i<words.length; i++){
        
        var word = words[i];
        var index = 0;
        var sCount = 0;

        for(var x=0; x<word.length; x++){
            
            for(var z=index; z<S.length; z++){
                
                if(word[x] == S[z]){
                    index = z+1;
                    sCount++;
                    break;
                }
                
            }
            if(sCount == word.length){

                wordCount++;
            }
            
        }
    }
    return wordCount;
};