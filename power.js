function power(num, count=0){
    if(num==1){
        return count
    }
    if(num % 2 ==0){
        count = power(num/2, count+1)
    } else{
        count = power(3*num+1, count+1)
    }
    return count;
}

var getKth = function(lo, hi, k) {
    var arr = []
    for(var i=lo; i<=hi;i++){
        arr.push([i,power(i)])
    }
    arr.sort(function(a,b){return a[1]-b[1]})
    console.log(arr)
    return arr[k-1][0];
};