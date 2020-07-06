var isPrefixOfWord = function(sentence, searchWord) {
    
    var count = 1;
    
    for(var i=0; i<sentence.length; i++){
        if(sentence[i] == " "){
            count++
        }
        
    if(sentence[i] == searchWord[0] && sentence[i-1] == " " || sentence[i] == searchWord[0] && i==0 ){
        var bool = true;
        for(var x=1; x<searchWord.length; x++){

            if(searchWord[x] != sentence[i+x]){
                bool = false
            }

        }
        if(bool == true){
            return count;
        }

    }
        
    }
    
    return -1;
};