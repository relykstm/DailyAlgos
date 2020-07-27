var reverseList = function(head) {

    var walker = null
    var runner = head
    
    
    while(runner != null){
        var temp = runner.next
        runner.next = walker
        walker = runner
        runner = temp
    }
    return walker

};