var selfDividingNumbers = function(left, right) {
    var numberArr = [];
    
    for(var i=left; i<=right; i++){
        var num = i.toString();
        var flag = false;
        for(var x=0; x<num.length; x++){
            var Num = parseInt(num[x]);
            if(Num == 0){
                flag = true;
            }
            if(i % Num != 0){
                flag = true;
            }
        }
        if(flag == false){
            numberArr.push(i);
        }
    }
    return numberArr;
};