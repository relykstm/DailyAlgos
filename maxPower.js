var maxPower = function(s) {
    var max = 1;
    for(var i=1; i<s.length; i++){
        var temp = 0
        if(s[i]==s[i-1]){
            var index= i-1
            while(s[i] == s[index]){ 
                 temp++
                 index++  
            }
            if(temp>max){
                max = temp
            } 
            i=index
        }
    }
    return max;
};