var partitionLabels = function(S) {
    var index = 0;
    var results = []
    while(index<S.length){
        var firstLetter = S[index];
        var string = ""
        for(var i=S.length-1;i>=index; i--){
            if(S[i] == firstLetter){
                for(var x=index; x<=i; x++){
                    string = string + S[x]
                }

                index=i+1
                for(var j=0; j<string.length; j++){
                    for(var f=S.length-1; f>=index; f--){
                        if(S[f] == string[j]){
                            console.log("index: ", index, "S[f]: ", S[f], "f: ", f, "string length: ", string.length)
                            for(var q=index; q<=f; q++){
                                string = string + S[q]
                            }
                            index = f+1
                        }
                        
                    }
                    
                }
                console.log(string)
                results.push(string)
                break;
            }
        }
    }
    for(var z=0; z<results.length; z++){
        results[z] = results[z].length
    }
    return results;
};