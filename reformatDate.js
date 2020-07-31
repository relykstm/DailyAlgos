const reformatDate = function(date) {
    let output = "";
    let arr = date.split(" ")
    let months = {"Jan": "01", "Feb": "02", "Mar": "03", "Apr": "04", "May": "05", "Jun": "06", "Jul": "07", "Aug": "08", "Sep": "09", "Oct": "10", "Nov": "11", "Dec": "12"};

    output += arr[2];
    output += "-" + months[arr[1]] + "-";
    if (arr[0].length === 3) {
        output += "0" + arr[0][0]
    } else {
        output += arr[0][0] + arr[0][1]
    }
    
    return output
};