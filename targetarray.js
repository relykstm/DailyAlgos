var buildArray = function(target, n) {
    var string = [];
    var count = 0;
    for(var i=0; i<=n; i++){

       if(target[count] == i+1){
           string.push("Push");
           count++;
            if(count == target.length){
                break;
            }
           continue;
       } 
        if(target[count] != i+1){
           string.push("Push");
            string.push("Pop");
            //i--
       } 
        if(count == target.length){
            break;
        }
        
    }
    return string;
}; 