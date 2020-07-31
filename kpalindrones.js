var canConstruct = function(s, k, odd=0) {
    if(k>s.length){
        return false
    }
    
    
    var dict = {}
    for(var i=0; i< s.length; i++){
        if(dict[s[i]] == undefined){
            dict[s[i]] = 1
        } else{
            dict[s[i]]++
        }
    }
    for(var key in dict){
        if(dict[key]%2 != 0){
            odd++
        } 
    }
     if(odd>k){
         return false
     }
    
    return true;   
  
};