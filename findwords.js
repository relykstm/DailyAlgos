var findWords = function(words) {
    var key = {
        "a": 2,
        "A": 2,
        "s": 2,
        "S": 2,
        "d": 2,
        "D": 2,
        "F": 2,
        "f": 2,
        "g": 2,
        "G": 2,
        "h":2,
        "H":2,
        "j":2,
        "J":2,
        "k":2,
        "K": 2,
        "L":2,
        "l":2,
        "Q":1,
        "q":1,
        "w":1,
        "W":1,
        "E":1,
        "e":1,
        "R":1,
        "r":1,
        "t":1,
        "T":1,
        "Y":1,
        "y":1,
        "U":1,
        "u":1,
        "I":1,
        "i":1,
        "O":1,
        "o":1,
        "P":1,
        "p":1,
        "z" : 3,
        "Z" : 3,
        "x" : 3,
        "X" : 3,
        "c" : 3,
        "C" : 3,
        "v" : 3,
        "V" : 3,
        "b" : 3,
        "B" : 3,
        "n" : 3,
        "N" : 3,
        "m" : 3,
        "M" : 3,
    }
    var results = []
    for(var i=0; i<words.length; i++){
        var bool = true;
       
        for(var x=1; x<words[i].length; x++){
            if(key[words[i][x]] != key[words[i][0]]){
                bool = false
            }
        }
        if(bool == true){
           results.push(words[i])
        }
    }
    return results;
};