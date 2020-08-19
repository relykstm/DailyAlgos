var largestPerimeter = function(A) {
    var arr = A.sort(function(a,b){return b-a})
    var i=0
    while(i <= arr.length-3){
        if(arr[i] < arr[i+1] + arr[i+2]){
            return arr[i] + arr[i+1] + arr[i+2]
        }
        i++
    }
    return 0
};