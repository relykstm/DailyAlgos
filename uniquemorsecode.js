var uniqueMorseRepresentations = function(words) {
    var table = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    var arr = [];
    for(var i=0; i<words.length; i++){
        var transformation = "";
        var word = words[i]
        for(var x=0; x<word.length; x++){
           var num = word[x].charCodeAt(0) - 97;
            transformation = transformation + table[num];
            
        }
        arr.push(transformation);
    }
    function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }
    
    var unique = arr.filter( onlyUnique );
    console.log(unique)
    
    return unique.length;
    

};

uniqueMorseRepresentations(["zen", "jen", "end", "gig"]);