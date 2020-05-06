var defangIPaddr = function(address) {
    var arr = address.split(".")
    var string = arr.join("[.]")
    return string;
};
