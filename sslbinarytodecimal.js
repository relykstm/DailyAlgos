var getDecimalValue = function(head) {
    var walker = head
    var arr = []
    while (walker != null){
        arr.push(walker.val)
        walker = walker.next;
    }
    arr = arr.join("")
    arr = parseInt(arr,2)
    return arr
    
};