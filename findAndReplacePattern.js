const distinct = (value,index,self) => {
    return self.indexOf(value) === index
}

var findAndReplacePattern = function(words, pattern) {
    var result = []
    for(var i=0; i<words.length; i++){
        var bool = true;
        var patterDict = {}
        var arr = []
        
        for(var j=0; j<pattern.length; j++){
            for(var each in patterDict){
                if(each != pattern[j] && patterDict[each] == words[i][j]){
                    bool = false
                    break;
                }
            }
            if(patterDict[pattern[j]] == undefined){
                patterDict[pattern[j]] = words[i][j]
            } else if(patterDict[pattern[j]] != words[i][j]){
                bool = false
                break
            }
            
        }
        
        if(bool){
            result.push(words[i])
        }
    }
    return result;
};