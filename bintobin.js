function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

var findComplement = function(num) {
    var binary = dec2bin(num).toString();
    var newBinary = ""
    console.log(binary);
    for(var i=0; i<binary.length; i++){
        if(binary[i] == 1){
            newBinary = newBinary + "0";
        }
        else{
            newBinary = newBinary + "1";
        }
    }
    console.log(newBinary);
    return parseInt(newBinary, 2);
};