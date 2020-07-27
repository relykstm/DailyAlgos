var reverseList = function(head, count, n){
    
    var walker = null
    var runner = head
    while(count<=n){
        var temp = runner.next
        runner.next = walker
        walker = runner
        runner = temp
        count++
    }

    return walker
}


var reverseBetween = function(head, m, n) {
    
    if(m-n==0){
        return head
    }
    
    var count = 0
    var walker = null
    var runner = head
    
    while(count<m-1){
        walker = runner
        runner = runner.next
        count++
    }
     
    var tempWalker = runner
    var tempCount = count
    
    while(tempCount<n && tempWalker != null){
        tempWalker = tempWalker.next
        tempCount++
    }
    var node = reverseList(runner, count+1, n)

    if(walker == null && tempWalker == null){
        return node;
    } else if(walker == null){
        var walker = node
        while(walker.next != null){
            walker = walker.next
        }
        walker.next = tempWalker
        return node
    } else if(tempWalker == null){
        walker.next = node
        return head
    }
    walker.next = node
    walker = node
    while(walker.next != null){
        walker = walker.next
    }
    walker.next = tempWalker
    return head
};