var middleNode = function(head) {
    var count = 0;
    var walker = head;
    while(walker.next != null){
        count++;
        walker = walker.next;
    }
    var walker = head;
    for(var i=0; i<Math.ceil(count/2); i++){
        walker = walker.next;
    }
    return walker;
};