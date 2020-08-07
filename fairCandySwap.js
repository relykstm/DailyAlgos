function sum(total, num) {
    return total + num;
  }
  
  
  var fairCandySwap = function(A, B) {
      
      var sumA = A.reduce(sum)
      var sumB = B.reduce(sum)
          
      for(var i=0; i<A.length; i++){
          
          for(var j=0; j<B.length; j++){
              
              if(sumA - A[i] + B[j]  == sumB - B[j] + A[i]){
                  return [A[i],B[j]]
              }
          }    
      }
  };