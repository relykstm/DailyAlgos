var CustomStack = function(maxSize) {
    this.maxSize = maxSize;
    this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if(this.stack.length == this.maxSize){
        return;
    }
    this.stack[this.stack.length] = x
    return;
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if(this.stack.length === 0){
        return -1;
    }
    var temp = this.stack[this.stack.length-1]
    this.stack.splice(this.stack.length-1,1)
    return temp;
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    
    if(k>this.stack.length-1){
        k = this.stack.length
    }
    
    for(var i=0; i<k; i++){
        this.stack[i] = this.stack[i] + val;
    }
    return;
};
