var countCharacters = function(words, chars) {
    var count=0;
   for(var i=0; i<words.length; i++){
       var lettercount = 0;
       var temp = chars.split("");
       for(var x=0; x<words[i].length; x++){
           
           
           for(var t=0; t<temp.length; t++){
               if(words[i][x] == temp[t]){
                  for(var r=t; r<temp.length; r++){
                      temp[r] = temp[r+1];
                  }
                   temp.pop();
                   lettercount++;
                   break;
               }
           }
           
       }
       if(lettercount == words[i].length){
           count = count + words[i].length;
       }   
       


   } 
    return count;
};