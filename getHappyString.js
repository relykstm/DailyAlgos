function makeArr(n,k,string="", arr = []){
    if(string.length == n){
        for(var i=1; i<string.length; i++){
            if(string[i] == string [i-1]){
                string = ""
                return arr;
            }
        }
        arr.push(string)
        string = ""
        return arr;
    }

    arr = makeArr(n,k,string + "a", arr)
    arr = makeArr(n,k,string + "b", arr)
    arr = makeArr(n,k,string + "c", arr)

    return arr
}




var getHappyString = function(n, k) {

    var arr = makeArr(n,k)
    
    if(arr[k-1]){
        return arr[k-1]
    } else{
        return ""
    }
};