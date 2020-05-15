var sumZero = function(n) {
    function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    var arr = [];
    var sum = 0;
    
    while(arr.length != n-1){    
        var num = getRandomInt(-n, n);
        arr.push(num);//push random
        arr = arr.filter( onlyUnique );//possibly remove num if not unique
    }
    
    for(var x=0; x<arr.length; x++){
        sum = sum + arr[x];
    }
    
    var lastNum = 0 - sum;
    arr.push(lastNum);
    
    
    return arr;
};