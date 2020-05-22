var repeatedNTimes = function(A) {
    
    function onlyUnique(val, index, self) { 
        return self.indexOf(val) != index;
    }
    
    return A.filter( onlyUnique )[0]
    
};