var isAnagram = function(s, t) {
    
    if(s.length != t.length) return false
    
    let dict = {}

    for(var i=0; i<s.length; i++){
        if(!dict[s[i]]){
           dict[s[i]] = 1
           }else{
               dict[s[i]]++
           }
        if(!dict[t[i]]){
            dict[t[i]] = -1
        }else{
            dict[t[i]]--
        }

    }

    for(var each in dict){
        if(dict[each] != 0){
            return false
        }
    }
    
    
    return true
    
};